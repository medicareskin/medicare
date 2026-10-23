import type {MetadataRoute} from 'next';
import {indexingEnabled,site} from '@/lib/site';
export default function robots():MetadataRoute.Robots {
 if(!indexingEnabled())return {rules:{userAgent:'*',disallow:'/'}};
 return {rules:{userAgent:'*',allow:'/',disallow:['/api/']},sitemap:`${site.url}/sitemap.xml`};
}
