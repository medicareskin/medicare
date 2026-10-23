// Manual production release gate: fail safely until the clinic confirms critical items.
import fs from 'node:fs';
const problems=[];
const required=['NEXT_PUBLIC_SITE_URL','NEXT_PUBLIC_ALLOW_INDEXING','SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','TURNSTILE_SECRET_KEY','NEXT_PUBLIC_TURNSTILE_SITE_KEY','UPSTASH_REDIS_REST_URL','UPSTASH_REDIS_REST_TOKEN','RATE_LIMIT_HASH_SECRET'];
for(const name of required)if(!process.env[name])problems.push(`Missing ${name}`);
if(process.env.NEXT_PUBLIC_SITE_URL!=='https://www.medicareskin.com')problems.push('Canonical domain does not match intended production website.');
if(process.env.NEXT_PUBLIC_ALLOW_INDEXING!=='true')problems.push('Production indexing is disabled.');
if(!fs.existsSync('public/images/real-doctor-photo.webp'))problems.push('Missing verified real-doctor-photo.webp');
if(!fs.existsSync('public/images/real-clinic-photo.webp'))problems.push('Missing verified real-clinic-photo.webp');
if(!fs.existsSync('docs/CLINICAL_SIGNOFF.txt'))problems.push('Missing clinician signoff document CLINICAL_SIGNOFF.txt');
if(!fs.existsSync('docs/LEGAL_SIGNOFF.txt'))problems.push('Missing clinic legal/privacy signoff LEGAL_SIGNOFF.txt');
if(problems.length){console.error('NOT READY FOR PRODUCTION:\n- '+problems.join('\n- '));process.exit(1)}
console.log('Basic preflight passed. Still conduct manual end-to-end and performance QA.');
