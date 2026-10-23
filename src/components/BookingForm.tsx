'use client';
import {useState} from 'react';import type {FormEvent} from 'react';import Script from 'next/script';
import {site} from '@/lib/site';
type FormState={concern:string;doctor:string;location:string;date:string;time:string;name:string;phone:string;serviceConsent:boolean;marketingConsent:boolean;website:string};
const initial:FormState={concern:'General dermatologist consultation',doctor:site.doctor,location:'Yelachenahalli',date:'',time:'',name:'',phone:'',serviceConsent:false,marketingConsent:false,website:''};
const concerns=['General dermatologist consultation','Acne or acne scars','Melasma or dark spots','Hair loss or scalp concern','Laser or aesthetic consultation','Eczema or other medical skin concern'];
function todayIST(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const g=(t:string)=>parts.find(x=>x.type===t)?.value;return `${g('year')}-${g('month')}-${g('day')}`;}
export function BookingForm(){const [v,setV]=useState<FormState>(initial);const [step,setStep]=useState(0);const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [ref,setRef]=useState('');const [status,setStatus]=useState('');
 const change=(key:keyof FormState,value:string|boolean)=>setV(p=>({...p,[key]:value}));
 const next=()=>{setError('');if(step===2&&!v.date){setError('Please select a preferred date.');return;}setStep(s=>Math.min(3,s+1));};
 const submit=async(e:FormEvent)=>{e.preventDefault();setError('');setBusy(true);try{
 const captcha=(document.querySelector('input[name="cf-turnstile-response"]') as HTMLInputElement|null)?.value||'';
 const utm={source:new URLSearchParams(window.location.search).get('utm_source')||'',medium:new URLSearchParams(window.location.search).get('utm_medium')||'',campaign:new URLSearchParams(window.location.search).get('utm_campaign')||''};
 const res=await fetch('/api/appointment-requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...v,captcha,utm})});
 const json=await res.json();if(!res.ok)throw new Error(json.error||'Unable to submit this request. Please call the clinic.');
 setRef(json.reference);setStatus(json.status);setStep(4);
 }catch(err){setError(err instanceof Error?err.message:'A connection error occurred. Please call the clinic.');}finally{setBusy(false);}};
 return <div className="booking-card"><div className="booking-progress">{['Concern','Doctor / clinic','Preferred slot','Your details'].map((x,i)=><span className={i<=step?'on':''} key={x}>{i+1}. {x}</span>)}</div>
 {step===4?<div className="booking-success" role="status"><h2>Appointment request received</h2><p>Reference: <strong>{ref}</strong></p><p>Status: <strong>{status}</strong>. This is <strong>not a confirmed appointment</strong>. The clinic must contact you to confirm availability.</p><a className="btn primary" href={`tel:${site.phoneE164}`}>Call the clinic</a></div>:
 <form onSubmit={submit}>
 {step===0&&<div className="step-panel"><h2>What would you like help with?</h2><label htmlFor="concern">Primary consultation category</label><select id="concern" value={v.concern} onChange={e=>change('concern',e.target.value)}>{concerns.map(c=><option key={c}>{c}</option>)}</select><p className="micro">Please don't enter a detailed medical history into this form.</p></div>}
 {step===1&&<div className="step-panel"><h2>Choose doctor and clinic</h2><div className="choice-card"><strong>{site.doctor}</strong><p>{site.qualification} · Dermatology consultation</p></div><label htmlFor="location">Clinic location</label><select id="location" value={v.location} onChange={e=>change('location',e.target.value)}><option value="Yelachenahalli">Yelachenahalli, Bengaluru</option></select><p className="micro">Other clinic locations will appear only after genuine scheduling integration.</p></div>}
 {step===2&&<div className="step-panel"><h2>Choose preferred date and time</h2><p className="note"><strong>Appointment request only.</strong> These are preferred times, not live available slots.</p><label htmlFor="date">Preferred date *</label><input id="date" type="date" required value={v.date} min={todayIST()} onChange={e=>change('date',e.target.value)}/><label htmlFor="time">Preferred time window</label><select id="time" value={v.time} onChange={e=>change('time',e.target.value)}><option value="">Any time / flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>}
 {step===3&&<div className="step-panel"><h2>How can we reach you?</h2><label htmlFor="name">Full name *</label><input id="name" required minLength={2} maxLength={100} autoComplete="name" value={v.name} onChange={e=>change('name',e.target.value)}/><label htmlFor="phone">Indian mobile number (10 digits) *</label><input id="phone" required inputMode="numeric" autoComplete="tel-national" pattern="[6-9][0-9]{9}" placeholder="98XXXXXXXX" value={v.phone} onChange={e=>change('phone',e.target.value)}/>
 <label className="checkbox-line"><input type="checkbox" checked={v.serviceConsent} required onChange={e=>change('serviceConsent',e.target.checked)}/>I agree that the clinic may process these details to respond to my appointment request. *</label>
 <label className="checkbox-line"><input type="checkbox" checked={v.marketingConsent} onChange={e=>change('marketingConsent',e.target.checked)}/>Optional: I agree to promotional messages.</label>
 <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input tabIndex={-1} autoComplete="off" id="website" value={v.website} onChange={e=>change('website',e.target.value)}/></div>
 {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?<><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/><div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-theme="light"/></>:<p className="note">Human verification is not configured. Production submissions require Cloudflare Turnstile setup.</p>}
 <p className="micro">We will respond to your request. No appointment slot is reserved until staff confirm it. See our Privacy Policy.</p></div>}
 {error&&<p role="alert" className="form-error">{error}</p>}
 <div className="booking-controls">{step>0&&<button type="button" className="btn outline" disabled={busy} onClick={()=>setStep(s=>s-1)}>← Back</button>}{step<3?<button type="button" className="btn primary" onClick={next}>Continue →</button>:<button type="submit" disabled={busy} className="btn primary">{busy?'Submitting…':'Send appointment request →'}</button>}</div>
 </form>}
 </div>;
}
