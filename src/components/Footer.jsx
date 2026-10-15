import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Calendar, ShieldCheck, Award } from 'lucide-react';

export default function Footer({ onOpenBooking, onTabChange }) {
  const handleNav = (tabId) => {
    if (onTabChange) onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnStyle = {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: '#5C4D68',
    fontSize: '14px',
    textAlign: 'left',
    transition: 'color 0.2s ease'
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid-4col">
          {/* Col 1: Real Color Logo & Intro */}
          <div className="footer-col brand-col">
            <div className="footer-logo-card">
              <img
                src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
                alt="Medicare Skin & Cosmetic Clinic Logo"
                style={{ height: '84px', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{ color: '#5C4D68', fontSize: '14px', lineHeight: '1.6', margin: '16px 0' }}>
              Medicare Skin & Cosmetic Clinic is South Bangalore’s premier dermatology and cosmetic aesthetic center. Guided by <strong style={{ color: '#2B1B4D' }}>Dr. Sujay M (MBBS, DDVL)</strong> with over 18+ years of clinical excellence.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#5C4D68' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#D4AF37' }} />
                <span>US-FDA Approved Laser Systems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} style={{ color: '#D4AF37' }} />
                <span>100% Medically Supervised Procedures</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><button style={btnStyle} onClick={() => handleNav('home')}>Home</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('skin')}>Skin Treatments</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('hair')}>Hair Treatments</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('cosmetic')}>Cosmetic Procedures</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('laser')}>Laser Technology</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('treatments')}>All Treatments Directory</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('about')}>About Doctor Profile</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('reviews')}>Patient Reviews</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('blog')}>Blog & Guides</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('local')}>Local Areas Served</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('faqs')}>FAQs</button></li>
            </ul>
          </div>

          {/* Col 3: Specialities */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Specialities</h3>
            <ul className="footer-links-list">
              <li><button style={btnStyle} onClick={() => handleNav('laser')}>Laser Hair Removal</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('skin')}>Acne Scar Subcision</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('cosmetic')}>Chemical Peels & Glow</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('hair')}>Growth Factor Therapy (GFT)</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('cosmetic')}>Anti-Wrinkle & Fillers</button></li>
              <li><button style={btnStyle} onClick={() => handleNav('cosmetic')}>Vitiligo Punch Grafting</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Social Icons */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Clinic Address</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} style={{ color: '#8B096C', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#5C4D68' }}>{CLINIC_INFO.address}</span>
              </li>
              <li>
                <Phone size={18} style={{ color: '#8B096C', flexShrink: 0 }} />
                <a href={`tel:${CLINIC_INFO.rawPhone}`} style={{ color: '#2B1B4D', fontWeight: '600' }}>{CLINIC_INFO.phone}</a>
              </li>
              <li>
                <Mail size={18} style={{ color: '#8B096C', flexShrink: 0 }} />
                <a href={`mailto:${CLINIC_INFO.email}`} style={{ color: '#2B1B4D' }}>{CLINIC_INFO.email}</a>
              </li>
              <li>
                <Clock size={18} style={{ color: '#D4AF37', flexShrink: 0 }} />
                <span style={{ color: '#5C4D68' }}>{CLINIC_INFO.hours}</span>
              </li>
            </ul>

            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '10px' }}>
                Follow Us
              </div>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/DrSujayMediCareSkin" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/medicareskinandcosmeticclinic/?hl=en" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@medicareskincosmeticclinic4373" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar" style={{ borderTop: '1px solid #EBE0EA', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#7A6C82', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <p style={{ margin: 0, fontSize: '13px' }}>
              © {new Date().getFullYear()} Medicare Skin & Cosmetic Clinic. All Rights Reserved.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '13px' }}>
            <span style={{ cursor: 'pointer', color: '#5C4D68' }} onClick={() => handleNav('privacy')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', color: '#5C4D68' }} onClick={() => handleNav('terms')}>Terms &amp; Conditions</span>
            <span style={{ cursor: 'pointer', color: '#5C4D68' }} onClick={() => handleNav('cancellation')}>Cancellation Policy</span>
            <span style={{ cursor: 'pointer', color: '#5C4D68' }} onClick={() => handleNav('disclaimer')}>Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
