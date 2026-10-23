import type {Metadata} from 'next';
import {site,indexingEnabled} from '@/lib/site';
import {Header} from '@/components/Header';import {Footer,MobileActions} from '@/components/Footer';import {AnalyticsConsent} from '@/components/AnalyticsConsent';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'Dermatologist in South Bengaluru | Medicare Skin',template:'%s | Medicare Skin'},description:'Dermatologist-led skin, hair and aesthetic consultations at Medicare Skin near Yelachenahalli Metro Station, South Bengaluru.',openGraph:{siteName:site.name,locale:'en_IN',type:'website'},robots:{index:indexingEnabled(),follow:indexingEnabled()}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-IN"><body><a className="skip" href="#main">Skip to main content</a><Header/><main id="main">{children}</main><Footer/><MobileActions/><AnalyticsConsent/></body></html>}
