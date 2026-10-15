import React, { useState } from 'react';
import { CLINIC_INFO, MASTER_TAXONOMY } from '../data/clinicData';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Calendar, ArrowRight,
  Home, Sparkles, Zap, Heart, User, MessageSquare, BookOpen, MapPin, Stethoscope
} from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, onOpenBooking, onSelectItem, isDarkMode = false, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setShowTreatmentsDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubItemClick = (item) => {
    setShowTreatmentsDropdown(false);
    setMobileMenuOpen(false);
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setShowTreatmentsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHomeActive = currentTab === 'home';
  const isAboutActive = currentTab === 'about' || currentTab === 'doctor';
  const isTreatmentsActive = ['treatments', 'skin', 'hair', 'cosmetic', 'laser'].includes(currentTab);
  const isContactActive = currentTab === 'contact';

  const activeCategory = MASTER_TAXONOMY[activeCategoryIndex] || MASTER_TAXONOMY[0];

  return (
    <header className={`site-header ${isHomeActive ? 'mos-header-style' : ''}`}>
      <nav className="main-nav">
        <div className="container nav-inner">
          {/* Top Left Brand Logo */}
          <div
            className="brand-logo"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            title="Medicare Skin & Cosmetic Clinic - Home"
          >
            <img src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp" alt="Medicare Skin & Cosmetic Clinic" />
          </div>

          {/* Center Navigation Links - Perfectly Aligned & Balanced */}
          <ul className="serif-nav-links">
            <li>
              <button
                className={`serif-nav-item ${isHomeActive ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${isAboutActive ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'skin' ? 'active' : ''}`}
                onClick={() => handleNavClick('skin')}
              >
                Skin
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'hair' ? 'active' : ''}`}
                onClick={() => handleNavClick('hair')}
              >
                Hair
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'laser' ? 'active' : ''}`}
                onClick={() => handleNavClick('laser')}
              >
                Laser
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'cosmetic' ? 'active' : ''}`}
                onClick={() => handleNavClick('cosmetic')}
              >
                Aesthetics
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'reviews' ? 'active' : ''}`}
                onClick={() => handleNavClick('reviews')}
              >
                Reviews
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${isContactActive ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Action Buttons in Navbar */}
          <div className="nav-actions-desktop">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="header-phone-pill"
              title={`Call ${CLINIC_INFO.phone}`}
            >
              <Phone size={13} />
              <span>+91 92428 55707</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="header-book-pill"
              id="header-book-appointment-btn"
            >
              <span>Book Appointment</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" id="mobile-nav-drawer">
            <div className="mobile-drawer-inner" style={{ padding: '20px 18px 30px' }}>
              {/* Drawer Brand Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px solid #ECE3EC' }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 800, color: '#2B1B4D' }}>
                    Medicare Skin
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    SKIN · HAIR · LASER · AESTHETICS
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={toggleTheme}
                    style={{
                      background: isDarkMode ? '#2B1B4D' : '#F6F2F7',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isDarkMode ? '#E268B5' : '#942876',
                      cursor: 'pointer'
                    }}
                    title={isDarkMode ? "Light Mode" : "Dark Mode"}
                    aria-label="Toggle Theme"
                  >
                    {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      background: '#F6F2F7',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2B1B4D',
                      cursor: 'pointer'
                    }}
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Clean Professional Navigation Menu List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '22px' }}>
                <button
                  className={`mobile-nav-btn ${isHomeActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: isHomeActive ? '#FAF0F6' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Home size={18} color="#942876" /> Home
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('skin')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Sparkles size={18} color="#942876" /> Skin
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('hair')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Heart size={18} color="#942876" /> Hair
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('laser')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Zap size={18} color="#942876" /> Laser
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('cosmetic')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Sparkles size={18} color="#D4AF37" /> Aesthetics
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('doctor')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <User size={18} color="#942876" /> Our Doctor
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className="mobile-nav-btn"
                  onClick={() => handleNavClick('reviews')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MessageSquare size={18} color="#942876" /> Patient Stories
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>

                <button
                  className={`mobile-nav-btn ${isContactActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', background: isContactActive ? '#FAF0F6' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={18} color="#942876" /> Contact
                  </span>
                  <ChevronRight size={16} color="#942876" />
                </button>
              </div>

              {/* Action Buttons: Call & Book Appointment */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '13px',
                    borderRadius: '14px',
                    border: '1.5px solid #E2D9E4',
                    background: '#FFFFFF',
                    color: '#2B1B4D',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={16} color="#942876" />
                  <span>Call +91 92428 55707</span>
                </a>

                <button
                  className="btn-primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(148, 40, 118, 0.25)'
                  }}
                >
                  <span>Book Appointment</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
