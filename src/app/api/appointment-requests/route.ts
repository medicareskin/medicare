import {NextRequest,NextResponse} from 'next/server';
import {randomUUID,createHmac} from 'node:crypto';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const fail=(message:string,status:number)=>NextResponse.json({error:message},{status,headers:{'Cache-Control':'no-store'}});
function istDate(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const get=(t:string)=>parts.find(p=>p.type===t)?.value;return `${get('year')}-${get('month')}-${get('day')}`;}
const validDate=(value:string)=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const time=Date.parse(`${value}T00:00:00Z`);return Number.isFinite(time)&&new Date(time).toISOString().slice(0,10)===value&&value>=istDate()&&time<Date.now()+365*86400000;};
export async function POST(req:NextRequest){
 // Appointment data can be sensitive: no console logging, analytics pixels or GET endpoint.
 const origin=req.headers.get('origin');if(origin&&new URL(origin).host!==req.nextUrl.host)return fail('Request origin was rejected.',403);
 const supa=process.env.SUPABASE_URL,key=process.env.SUPABASE_SERVICE_ROLE_KEY,secret=process.env.TURNSTILE_SECRET_KEY;
 if(!supa||!key||!secret||!process.env.UPSTASH_REDIS_REST_URL||!process.env.UPSTASH_REDIS_REST_TOKEN||!process.env.RATE_LIMIT_HASH_SECRET)return fail('Online appointment requests are not currently configured. Please call the clinic.',503);
 // Privacy-preserving IP-based rate limit; do not retain a raw visitor IP in the database.
 const ip=(req.headers.get('x-forwarded-for')||'unknown').split(',')[0].trim();
 const hash=createHmac('sha256',process.env.RATE_LIMIT_HASH_SECRET).update(ip).digest('hex').slice(0,24);
 const rateKey=`medicareskin:appt:${hash}`;
 try{const rateRes=await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`,{method:'POST',headers:{Authorization:`Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify([['INCR',rateKey],['EXPIRE',rateKey,3600]]),signal:AbortSignal.timeout(5000),cache:'no-store'});
  if(!rateRes.ok)return fail('Booking service temporarily unavailable. Please call the clinic.',503);
  const counts=await rateRes.json() as {result?:number;error?:string}[];
  if(!Array.isArray(counts)||counts[0]?.error||typeof counts[0]?.result!=='number')return fail('Rate limit service unavailable.',503);
  if(counts[0].result>5)return fail('Too many requests. Please call the clinic for assistance.',429);
 }catch{return fail('Rate limit service temporarily unavailable.',503);}
 if(Number(req.headers.get('content-length')||0)>8192)return fail('Request too large.',413);
 let input:Record<string,unknown>;
 try{input=await req.json();if(!input||typeof input!=='object'||Array.isArray(input))throw new Error();}catch{return fail('Invalid request.',400);}
 const get=(k:string)=>typeof input[k]==='string'?(input[k] as string).trim():'';
 if(get('website'))return fail('Unable to process request.',400);
 const allowed=['General dermatologist consultation','Acne or acne scars','Melasma or dark spots','Hair loss or scalp concern','Laser or aesthetic consultation','Eczema or other medical skin concern'];
 const name=get('name'),phone=get('phone'),date=get('date'),time=get('time'),concern=get('concern');
 if(!allowed.includes(concern)||name.length<2||name.length>100||!/^\+?[\p{L} .'-]+$/u.test(name)||!/^\d{10}$/.test(phone)||!/^[6-9]/.test(phone)||!validDate(date)||!['','Morning','Afternoon','Evening'].includes(time)||input.serviceConsent!==true)return fail('Please check the required fields and consent.',400);
 const captcha=get('captcha');if(!captcha)return fail('Complete the human verification before submitting.',400);
 try{
  const captchaRes=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({secret,response:captcha}) ,signal:AbortSignal.timeout(7000)});
  const proof=await captchaRes.json() as {success?:boolean;hostname?:string};if(!captchaRes.ok||!proof.success|| (proof.hostname && proof.hostname!==req.nextUrl.hostname))return fail('Human verification failed. Please try again.',400);
 }catch{return fail('Verification service unavailable. Please call the clinic.',503);}
 const utm=(input.utm&&typeof input.utm==='object'&&!Array.isArray(input.utm))?input.utm as Record<string,unknown>:{};
 const cleanUtm=(k:string)=>typeof utm[k]==='string'?(utm[k] as string).replace(/[^\w.-]/g,'').slice(0,80):null;
 const reference=`MS-${randomUUID().slice(0,8).toUpperCase()}`;
 const record={reference,name,phone:`+91${phone}`,concern_category:concern,doctor:'Dr. (Mrs.) Sujay M',clinic:'Yelachenahalli',preferred_date:date,preferred_window:time||null,status:'requested',service_consent:true,marketing_consent:input.marketingConsent===true,utm_source:cleanUtm('source'),utm_medium:cleanUtm('medium'),utm_campaign:cleanUtm('campaign')};
 try{
  const saved=await fetch(`${supa.replace(/\/$/,'')}/rest/v1/appointment_requests`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(record),signal:AbortSignal.timeout(8000),cache:'no-store'});
  if(!saved.ok)return fail('Unable to save the request. Please call the clinic.',503);
 }catch{return fail('Service unavailable. Please call the clinic.',503);}
 // Optional minimal operational alert. Never email full medical concern details.
 if(process.env.RESEND_API_KEY&&process.env.OPERATIONS_EMAIL&&process.env.FROM_EMAIL){try{await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.FROM_EMAIL,to:[process.env.OPERATIONS_EMAIL],subject:'Medicare Skin appointment request',text:`A new appointment request ${reference} was received. Review the secure admin database for details.`}),signal:AbortSignal.timeout(5000)});}catch{/* Request saved; alert failure should be monitored separately. */}}
 return NextResponse.json({status:'requested',reference,message:'Appointment request received. Staff confirmation is required.'},{status:201,headers:{'Cache-Control':'no-store'}});
}
export async function GET(){return fail('Method not allowed.',405);}
