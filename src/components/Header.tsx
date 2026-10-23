'use client';
import Link from 'next/link';
import {useState} from 'react';
const menu=[{label:'Skin',href:'/treatments/?category=Skin'},{label:'Hair',href:'/treatments/?category=Hair'},{label:'Laser',href:'/treatments/?category=Laser'},{label:'Aesthetics',href:'/treatments/?category=Aesthetics'},{label:'Medical Dermatology',href:'/treatments/?category=Medical%20Dermatology'},{label:'Our Doctor',href:'/doctors/dr-sujay-m/'},{label:'Journal',href:'/journal/'},{label:'Contact',href:'/contact/'}];
export function Header(){const [open,setOpen]=useState(false);return <header className="header"><div className="container header-inner">
 <Link className="logo" href="/" onClick={()=>setOpen(false)} aria-label="Medicare Skin home"><span className="logo-mark" aria-hidden="true">✦</span><span>Medicare <em>Skin</em><small>DERMATOLOGY · HAIR · AESTHETICS</small></span></Link>
 <button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
 <nav id="main-nav" aria-label="Main menu" className={open?'nav open':'nav'}>{menu.map(x=><Link key={x.label} href={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}<Link className="nav-mobile-book" href="/book-appointment/" onClick={()=>setOpen(false)}>Request consultation →</Link></nav>
 <Link className="btn primary header-cta" href="/book-appointment/">Book Consultation →</Link>
 </div></header>}
