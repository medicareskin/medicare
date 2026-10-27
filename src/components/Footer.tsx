'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-columns">
        {/* Brand identity column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand-logo-link">
            <img
              src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
              alt="Medicare Skin & Cosmetic Clinic"
              className="footer-logo-img"
              width="190"
              height="52"
            />
          </Link>
          <p className="footer-lead-text">
            Medicare Skin &amp; Cosmetic Clinic is South Bangalore&apos;s premier dermatology and cosmetic aesthetic center. Guided by <strong>Dr. Sujay M (MBBS, DDVL)</strong> with over 18+ years of clinical excellence.
          </p>
          <div className="footer-gold-badges-list">
            <div className="footer-gold-badge-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D49A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span>US-FDA Approved Laser Systems</span>
            </div>
            <div className="footer-gold-badge-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D49A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span>100% Medically Supervised Procedures</span>
            </div>
            <div className="footer-gold-badge-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D49A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span>BMCRI Post-Graduate Dermatologist</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-nav-list">
            <Link href="/">Home</Link>
            <Link href="/doctors/dr-sujay-m/">Meet Dr. Sujay M</Link>
            <Link href="/treatments/">All Treatments Directory</Link>
            <Link href="/laser-vs-hydrafacial/">Laser vs. HydraFacial Compare</Link>
            <Link href="/#patient-experiences">Patient Reviews &amp; Stories</Link>
            <Link href="/journal/">Clinical Dermatology Blog</Link>
            <Link href="/locations/yelachenahalli/">Areas We Serve (South BLR)</Link>
            <Link href="/#faqs">Pricing &amp; Clinic FAQs</Link>
          </div>
        </div>

        {/* Our Treatments */}
        <div>
          <h3 className="footer-heading">Our Treatments</h3>
          <div className="footer-nav-list">
            <Link href="/treatments/laser/q-switched-laser/">Q-Switched Laser for Melasma</Link>
            <Link href="/treatments/aesthetics/hydrafacial/">HydraFacial Glow &amp; Brightness</Link>
            <Link href="/treatments/skin/acne-scar-treatment/">Acne Scar Reconstruction</Link>
            <Link href="/treatments/laser/laser-hair-reduction/">Laser Hair Removal</Link>
            <Link href="/treatments/skin/chemical-peels/">Chemical Peels &amp; Renewal</Link>
            <Link href="/treatments/aesthetics/dermal-fillers/">Dermal Fillers &amp; Botox</Link>
            <Link href="/treatments/skin/skin-tightening-rf/">Skin Tightening (RF)</Link>
            <Link href="/treatments/skin/vitiligo-treatment/">Vitiligo Surgical Grafting</Link>
          </div>
        </div>

        {/* Clinic Address column */}
        <div>
          <h3 className="footer-heading">Clinic Address</h3>
          <div className="footer-address-details">
            <div className="footer-contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="footer-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{site.address}</span>
            </div>

            <div className="footer-contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="footer-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
            </div>

            <div className="footer-contact-line">
              <WhatsAppIcon size={16} color="#25D366" className="footer-icon" />
              <a href={waLink('Hello Medicare Skin Clinic, I would like to schedule a consultation with Dr. Sujay M.')} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.phoneDisplay}
              </a>
            </div>

            <div className="footer-contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="footer-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>

            <div className="footer-contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="footer-icon">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: Closed</span>
            </div>

            <div className="footer-social-wrap">
              <span className="footer-social-title">FOLLOW US</span>
              <div className="footer-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="Medicare Skin Clinic on Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="Medicare Skin Clinic on Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="Medicare Skin Clinic on YouTube"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href={waLink('Hello Medicare Skin Clinic, I would like to schedule a consultation with Dr. Sujay M.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="Chat with Medicare Skin Clinic on WhatsApp"
                  style={{ background: 'rgba(37, 211, 102, 0.15)', borderColor: 'rgba(37, 211, 102, 0.4)' }}
                >
                  <WhatsAppIcon size={15} color="#25D366" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom-bar">
        <p>
          &copy; 2026 Medicare Skin &amp; Cosmetic Clinic. All Rights Reserved.
        </p>
        <div className="footer-policy-links">
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/terms/">Terms &amp; Conditions</Link>
          <Link href="/cancellation-policy/">Cancellation Policy</Link>
          <Link href="/medical-disclaimer/">Medical Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

export function MobileActions() {
  const pathname = usePathname();

  const handleOpenAi = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-medicare-ai'));
    }
  };

  return (
    <nav className="mobile-bottom-dock" aria-label="Mobile bottom navigation">
      {/* 1. Home */}
      <Link
        href="/"
        className={`dock-tab ${pathname === '/' ? 'active' : ''}`}
        aria-label="Home"
      >
        <div className="dock-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="dock-label">Home</span>
      </Link>

      {/* 2. Booking */}
      <Link
        href="/book-appointment/"
        className={`dock-tab ${pathname?.includes('/book-appointment') ? 'active' : ''}`}
        aria-label="Booking"
      >
        <div className="dock-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <span className="dock-label">Booking</span>
      </Link>

      {/* 3. AI Button (Center Highlighted Glow Action) */}
      <button
        type="button"
        onClick={handleOpenAi}
        className="dock-tab dock-tab-ai"
        aria-label="AI Face & Skin Assistant"
        title="Scan your skin with AI"
      >
        <div className="dock-ai-glow-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9v1M12 14v1M9 12h1M14 12h1" />
          </svg>
        </div>
        <span className="dock-label ai-label">AI Skin</span>
      </button>

      {/* 4. Search */}
      <Link
        href="/treatments/"
        className={`dock-tab ${pathname?.includes('/treatments') ? 'active' : ''}`}
        aria-label="Search"
      >
        <div className="dock-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <span className="dock-label">Search</span>
      </Link>

      {/* 5. Profile */}
      <Link
        href="/doctors/dr-sujay-m/"
        className={`dock-tab ${pathname?.includes('/doctors') ? 'active' : ''}`}
        aria-label="Profile"
      >
        <div className="dock-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="dock-label">Profile</span>
      </Link>
    </nav>
  );
}

export default Footer;
