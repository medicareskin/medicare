'use client';
import {useEffect,useState} from 'react';
export function AnalyticsConsent(){const [decision,setDecision]=useState<'yes'|'no'|null>(null);
 useEffect(()=>{const saved=localStorage.getItem('medicareskin_analytics_choice');if(saved==='yes'||saved==='no')setDecision(saved);},[]);
 useEffect(()=>{if(decision!=='yes')return;const id=process.env.NEXT_PUBLIC_GA4_ID;if(!id||!/^G-[A-Z0-9]+$/.test(id))return;
 const s=document.createElement('script');s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${id}`;document.head.appendChild(s);
 const w=window as Window&{dataLayer?:unknown[];gtag?:(...args:unknown[])=>void};w.dataLayer=w.dataLayer||[];w.gtag=(...args:unknown[])=>{w.dataLayer?.push(args)};w.gtag('js',new Date());w.gtag('config',id,{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});return()=>{s.remove()};
 },[decision]);
 const choose=(value:'yes'|'no')=>{localStorage.setItem('medicareskin_analytics_choice',value);setDecision(value)};
 return <>{decision===null&&<div role="dialog" aria-label="Optional analytics preferences" className="consent-banner"><div><strong>Optional website analytics</strong><p>We use essential functionality without optional tracking. May we measure anonymous site usage to improve the website? No health details are sent to analytics.</p></div><div className="buttons"><button className="btn outline" onClick={()=>choose('no')}>Reject optional</button><button className="btn primary" onClick={()=>choose('yes')}>Accept optional</button></div></div>}{decision!==null&&<button className="cookie-settings" onClick={()=>{localStorage.removeItem('medicareskin_analytics_choice');setDecision(null);location.reload()}}>Cookie choices</button>}</>;
}
