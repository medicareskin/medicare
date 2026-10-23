import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenBooking, onTabChange }) {
  const handleNav = (tabId) => {
    if (onTabChange) onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid-4col">
          {/* Col 1: Brand Info & Accreditations */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img
                src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
                alt="Medicare Skin & Cosmetic Clinic Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-brand-desc">
              Medicare Skin &amp; Cosmetic Clinic is South Bangalore’s premier dermatology and cosmetic aesthetic center. Guided by <strong>Dr. Sujay M (MBBS, DDVL)</strong> with over 18+ years of clinical excellence.
            </p>
            <div className="footer-badges-list">
              <div className="footer-badge-item">
                <ShieldCheck size={16} className="footer-badge-icon" />
                <span>US-FDA Approved Laser Systems</span>
              </div>
              <div className="footer-badge-item">
                <Award size={16} className="footer-badge-icon" />
                <span>100% Medically Supervised Procedures</span>
              </div>
              <div className="footer-badge-item">
                <CheckCircle2 size={16} className="footer-badge-icon" />
                <span>BMCRI Post-Graduate Dermatologist</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (8 balanced items) */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('home')}>Home</button></li>
              <li><button type="button" onClick={() => handleNav('doctor')}>Meet Dr. Sujay M</button></li>
              <li><button type="button" onClick={() => handleNav('treatments')}>All Treatments Directory</button></li>
              <li><button type="button" onClick={() => handleNav('comparison')}>Laser vs. HydraFacial Compare</button></li>
              <li><button type="button" onClick={() => handleNav('reviews')}>Patient Reviews &amp; Stories</button></li>
              <li><button type="button" onClick={() => handleNav('blog')}>Clinical Dermatology Blog</button></li>
              <li><button type="button" onClick={() => handleNav('local')}>Areas We Serve (South BLR)</button></li>
              <li><button type="button" onClick={() => handleNav('faqs')}>Pricing &amp; Clinic FAQs</button></li>
            </ul>
          </div>

          {/* Col 3: Our Treatments (8 balanced items) */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Treatments</h3>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => handleNav('q-switched-laser')}>Q-Switched Laser for Melasma</button></li>
              <li><button type="button" onClick={() => handleNav('hydrafacial')}>HydraFacial Glow &amp; Brightness</button></li>
              <li><button type="button" onClick={() => handleNav('skin')}>Acne Scar Reconstruction</button></li>
              <li><button type="button" onClick={() => handleNav('laser')}>Laser Hair Removal</button></li>
              <li><button type="button" onClick={() => handleNav('cosmetic')}>Chemical Peels &amp; Renewal</button></li>
              <li><button type="button" onClick={() => handleNav('cosmetic')}>Dermal Fillers &amp; Botox</button></li>
              <li><button type="button" onClick={() => handleNav('cosmetic')}>Skin Tightening (RF)</button></li>
              <li><button type="button" onClick={() => handleNav('skin')}>Vitiligo Surgical Grafting</button></li>
            </ul>
          </div>

          {/* Col 4: Clinic Address & Timings */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Clinic Address</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={17} className="footer-contact-icon pin-icon" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li>
                <Phone size={17} className="footer-contact-icon" />
                <a href={`tel:${CLINIC_INFO.rawPhone}`}>{CLINIC_INFO.phone}</a>
              </li>
              <li>
                <Mail size={17} className="footer-contact-icon" />
                <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
              </li>
              <li>
                <Clock size={17} className="footer-contact-icon clock-icon" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
            </ul>

            <div className="footer-social-wrap">
              <span className="footer-social-title">Follow Us</span>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/DrSujayMediCareSkin" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <Facebook size={17} />
                </a>
                <a href="https://www.instagram.com/medicareskinandcosmeticclinic/?hl=en" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <Instagram size={17} />
                </a>
                <a href="https://www.youtube.com/@medicareskincosmeticclinic4373" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                  <Youtube size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Medicare Skin &amp; Cosmetic Clinic. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <span role="button" tabIndex={0} onClick={() => handleNav('privacy')}>Privacy Policy</span>
            <span role="button" tabIndex={0} onClick={() => handleNav('terms')}>Terms &amp; Conditions</span>
            <span role="button" tabIndex={0} onClick={() => handleNav('cancellation')}>Cancellation Policy</span>
            <span role="button" tabIndex={0} onClick={() => handleNav('disclaimer')}>Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
