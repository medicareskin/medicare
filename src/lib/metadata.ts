import type {Metadata} from 'next';
import {indexingEnabled,site} from './site';
export function meta(title: string, description: string, path: string, approved = true): Metadata {
 const index=indexingEnabled() && approved;
 return {title:{absolute:title},description,alternates:{canonical:`${site.url}${path}`},openGraph:{type:'website',title,description,url:`${site.url}${path}`,siteName:site.name,locale:'en_IN'},robots:{index,follow:index}};
}
export function jsonLd(data: unknown) {return JSON.stringify(data).replace(/</g,'\\u003c');}
export const physicianEntity={"@type":"Physician","@id":`${site.url}/doctors/dr-sujay-m/#doctor`,name:site.doctor,description:`Dermatologist with ${site.qualification} qualifications`,worksFor:{"@id":`${site.url}/#clinic`}};
export const clinicEntity={"@context":"https://schema.org","@type":"MedicalClinic","@id":`${site.url}/#clinic`,name:site.name,url:site.url,telephone:site.phoneE164,medicalSpecialty:'Dermatologic',address:{"@type":"PostalAddress",streetAddress:'2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road',addressLocality:'Bengaluru',addressRegion:'Karnataka',postalCode:'560078',addressCountry:'IN'},employee:{"@id":`${site.url}/doctors/dr-sujay-m/#doctor`}};
export function breadcrumbs(parts:{name:string;path:string}[]){return {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:parts.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.name,item:`${site.url}${p.path}`}))};}
