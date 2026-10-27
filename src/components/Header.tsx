'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { site, mapUrl, waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

const LOCATIONS = [
  { name: 'Yelachenahalli (Clinic Location)', detail: 'Near Metro Station · Kanakapura Main Rd' },
  { name: 'JP Nagar', detail: 'Phase 1–8 · 5–10 mins drive' },
  { name: 'Kanakapura Road', detail: 'Konanakunte Cross & Metro corridor' },
  { name: 'Jayanagar & Banashankari', detail: 'South Bengaluru catchment' },
  { name: 'Bannerghatta Road', detail: 'Arekere & Hulimavu connectivity' }
];

const TREATMENT_DEPARTMENTS = [
  { name: 'Skin Care', desc: 'Acne, Scars, Melasma & Pigmentation', href: '/treatments/?category=Skin' },
  { name: 'Hair Therapies', desc: 'Hair Fall, Thinning & Follicle Diagnostics', href: '/treatments/?category=Hair' },
  { name: 'US FDA Lasers', desc: 'Laser Hair Reduction & Q-Switched Toning', href: '/treatments/?category=Laser' },
  { name: 'Aesthetics & Medi-Facials', desc: 'HydraFacial, Glow & Chemical Peels', href: '/treatments/?category=Aesthetics' },
  { name: 'Medical Dermatology', desc: 'Eczema, Psoriasis, Allergies & Vitiligo', href: '/treatments/?category=Medical%20Dermatology' }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLocationPopover, setShowLocationPopover] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Yelachenahalli');
  
  const locationRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setShowLocationPopover(false);
      }
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target as Node)) {
        setShowTreatmentsDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-navbar-header">
      <div className="container site-navbar-inner">
        {/* Left: Brand Logo + Location Selector */}
        <div className="navbar-left-group">
          <Link 
            className="navbar-brand-link" 
            href="/" 
            onClick={() => setMobileOpen(false)} 
            aria-label="Medicare Skin & Cosmetic Clinic home"
          >
            <img
              src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
              alt="Medicare Skin & Cosmetic Clinic"
              className="navbar-brand-logo"
            />
          </Link>

          {/* Compact Location Pill */}
          <div className="navbar-location-wrapper" ref={locationRef}>
            <button
              type="button"
              className="navbar-location-btn"
              onClick={() => setShowLocationPopover(!showLocationPopover)}
              aria-expanded={showLocationPopover}
              aria-label="Clinic location: Yelachenahalli, Bengaluru"
              title="Clinic location: Yelachenahalli, Bengaluru"
            >
              <svg className="location-pin-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="location-btn-text">Yelachenahalli</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 2 }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {showLocationPopover && (
              <div className="navbar-location-popover" role="dialog" aria-label="Clinic location and serving areas">
                <div className="popover-title-row">
                  <span>CLINIC LOCATION</span>
                  <button 
                    type="button" 
                    className="popover-close-x" 
                    onClick={() => setShowLocationPopover(false)}
                    aria-label="Close location menu"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                
                {/* Accurate Primary Clinic Address Card */}
                <div style={{ padding: '12px 14px', background: 'var(--bg-soft)', borderRadius: '14px', marginBottom: '12px', border: '1px solid var(--line)' }}>
                  <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--purple)', marginBottom: '4px' }}>
                    Medicare Skin &amp; Cosmetic Clinic
                  </strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--ink)', lineHeight: 1.45, margin: '0 0 6px' }}>
                    Opp. Yelachenahalli Metro Station, Kanakapura Main Road, South Bengaluru - 560078
                  </p>
                  <small style={{ fontSize: '0.74rem', color: 'var(--muted)', display: 'block' }}>
                    Jyothi Layout, near Jyothi Kendriya Vidyalaya back gate
                  </small>
                </div>

                <div className="popover-title-row" style={{ marginTop: '8px' }}>
                  <span>SERVING SOUTH BENGALURU</span>
                </div>
                <ul className="popover-location-list">
                  {LOCATIONS.map((loc) => (
                    <li key={loc.name}>
                      <button
                        type="button"
                        className="popover-location-item"
                        onClick={() => {
                          setSelectedLocation(loc.name.split(' ')[0]);
                          setShowLocationPopover(false);
                        }}
                      >
                        <span className="loc-bullet">•</span>
                        <div>
                          <strong>{loc.name}</strong>
                          <small>{loc.detail}</small>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="popover-bottom-link">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    Open Live GPS in Google Maps ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: Perfectly Aligned Navigation Links */}
        <nav 
          id="main-nav" 
          aria-label="Main navigation" 
          className={`navbar-center-nav ${mobileOpen ? 'mobile-drawer-open' : ''}`}
        >
          {/* Treatments Dropdown Trigger */}
          <div 
            className="navbar-nav-item has-dropdown" 
            ref={treatmentsRef}
            onMouseEnter={() => setShowTreatmentsDropdown(true)}
            onMouseLeave={() => setShowTreatmentsDropdown(false)}
          >
            <button
              type="button"
              className="navbar-nav-link dropdown-toggle"
              onClick={() => setShowTreatmentsDropdown(!showTreatmentsDropdown)}
              aria-expanded={showTreatmentsDropdown}
            >
              Treatments{' '}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 4 }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {showTreatmentsDropdown && (
              <div className="treatments-mega-dropdown" role="menu">
                <div className="dropdown-departments-grid">
                  {TREATMENT_DEPARTMENTS.map((dept) => (
                    <Link
                      key={dept.name}
                      href={dept.href}
                      className="dropdown-department-card"
                      onClick={() => {
                        setShowTreatmentsDropdown(false);
                        setMobileOpen(false);
                      }}
                      role="menuitem"
                    >
                      <strong className="dept-card-title">{dept.name}</strong>
                      <span className="dept-card-desc">{dept.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer-row">
                  <Link 
                    href="/treatments/" 
                    className="dropdown-all-link"
                    onClick={() => {
                      setShowTreatmentsDropdown(false);
                      setMobileOpen(false);
                    }}
                  >
                    View All Clinical Treatments &amp; Procedures →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/doctors/dr-sujay-m/" 
            className="navbar-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Our Doctor
          </Link>

          <Link 
            href="/concerns/" 
            className="navbar-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Conditions
          </Link>

          <Link 
            href="/results/" 
            className="navbar-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Results
          </Link>

          <Link 
            href="/technology/" 
            className="navbar-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Technology
          </Link>

          <Link 
            href="/contact/" 
            className="navbar-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Drawer Specific Actions */}
          <div className="mobile-drawer-footer">
            <a href={`tel:${site.phoneE164}`} className="mobile-drawer-call">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Doctor: {site.phoneDisplay}</span>
            </a>
            <a 
              href={waLink('Hello Medicare Skin Clinic, I would like to inquire about a consultation with Dr. Sujay M.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-drawer-whatsapp"
            >
              <WhatsAppIcon size={16} color="#25D366" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link 
              className="btn primary mobile-drawer-btn" 
              href="/book-appointment/" 
              onClick={() => setMobileOpen(false)}
            >
              Book Consultation →
            </Link>
          </div>
        </nav>

        {/* Right: Phone & Book Appointment CTA */}
        <div className="navbar-right-group">
          <a 
            href={waLink('Hello Medicare Skin Clinic, I would like to inquire about a consultation with Dr. Sujay M.')}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp-btn"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={16} color="#25D366" />
            <span className="wa-text">WhatsApp</span>
          </a>

          <a 
            href={`tel:${site.phoneE164}`} 
            className="navbar-phone-btn" 
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <svg className="phone-icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="phone-text">{site.phoneDisplay}</span>
          </a>

          <Link className="navbar-cta-btn" href="/book-appointment/">
            Book Consultation →
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            className="navbar-hamburger-btn" 
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'} 
            aria-expanded={mobileOpen} 
            aria-controls="main-nav" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
