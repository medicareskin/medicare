import React, { useState } from 'react';
import { CLINIC_INFO, MASTER_TAXONOMY } from '../data/clinicData';
import { Menu, X, ChevronDown, ChevronRight, Phone, Calendar } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, onOpenBooking, onSelectItem }) {
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

  const isHomeActive = currentTab === 'home';
  const isAboutActive = currentTab === 'about' || currentTab === 'doctor';
  const isTreatmentsActive = ['treatments', 'skin', 'hair', 'cosmetic', 'laser'].includes(currentTab);
  const isContactActive = currentTab === 'contact';

  const activeCategory = MASTER_TAXONOMY[activeCategoryIndex] || MASTER_TAXONOMY[0];

  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="container nav-inner">
          {/* Top Left Brand Logo */}
          <div
            className="brand-logo"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="Medicare Skin & Cosmetic Clinic - Home"
          >
            <img src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp" alt="Medicare Skin & Cosmetic Clinic" />
          </div>

          {/* Top Right Serif Navigation & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
                  About Us
                </button>
              </li>
              <li style={{ position: 'relative' }}>
                <button
                  className={`serif-nav-item ${isTreatmentsActive ? 'active' : ''}`}
                  onClick={() => setShowTreatmentsDropdown(!showTreatmentsDropdown)}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Treatments <ChevronDown size={14} style={{ marginTop: '2px', transform: showTreatmentsDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
                </button>

                {/* 2-Column Light Liquid-Glass Mega Dropdown Container */}
                {showTreatmentsDropdown && (
                  <div className="mega-taxonomy-box">
                    {/* Top Header Bar with Close Button (x) */}
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #EBE0EA', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#942876', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        ✨ Select Treatment & Clinical Service
                      </span>
                      <button
                        onClick={() => setShowTreatmentsDropdown(false)}
                        style={{
                          background: '#FDF4F9',
                          border: '1px solid rgba(148, 40, 118, 0.25)',
                          color: '#942876',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease'
                        }}
                        title="Close Treatments Menu"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Column 1: Main Categories (Skin care >, Hair Care >, Aesthetics >, Laser Services >) */}
                    <div className="mega-category-list">
                      {MASTER_TAXONOMY.map((cat, idx) => (
                        <button
                          key={cat.id}
                          className={`mega-category-btn ${activeCategoryIndex === idx ? 'active' : ''}`}
                          onClick={() => setActiveCategoryIndex(idx)}
                        >
                          <span>{cat.category}</span>
                          <ChevronRight size={16} />
                        </button>
                      ))}
                    </div>

                    {/* Column 2: Sub-items under Active Category */}
                    <div className="mega-item-list">
                      <div style={{ gridColumn: '1 / -1', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#942876', fontWeight: '700', padding: '4px 2px', marginBottom: '2px' }}>
                        {activeCategory.category} Services ({activeCategory.items.length})
                      </div>
                      {activeCategory.items.map((sub) => (
                        <button
                          key={sub.id}
                          className="mega-sub-item-btn"
                          onClick={() => handleSubItemClick(sub)}
                        >
                          <span>{sub.title}</span>
                          <ChevronRight size={14} style={{ opacity: 0.6, flexShrink: 0 }} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button
                  className={`serif-nav-item ${isContactActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact Us
                </button>
              </li>
            </ul>

            {/* Quick Call & Appointment Action Buttons in Navbar */}
            <div className="nav-actions-desktop" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="nav-call-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#FDF4F9',
                  color: '#942876',
                  padding: '8px 14px',
                  borderRadius: '24px',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: '1px solid rgba(148, 40, 118, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Phone size={14} color="#942876" />
                <span>+91 92428 55707</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="nav-book-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, #942876 0%, #6B1B54 100%)',
                  color: '#FFFFFF',
                  padding: '9px 18px',
                  borderRadius: '24px',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(148, 40, 118, 0.25)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Calendar size={14} />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-drawer-inner">
              {/* Main Nav Items */}
              <div className="mobile-main-links">
                <button
                  className={`mobile-nav-btn ${isHomeActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  <span>Home</span>
                  <ChevronRight size={18} />
                </button>
                <button
                  className={`mobile-nav-btn ${isAboutActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  <span>About Us</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Treatments Category Section with Proper Pill Buttons */}
              <div className="mobile-treatments-section">
                <div className="mobile-section-header">
                  <h3>Our Treatments & Surgery</h3>
                  <span className="mobile-section-badge">Comprehensive Care</span>
                </div>

                {MASTER_TAXONOMY.map((cat) => (
                  <div key={cat.id} className="mobile-cat-group">
                    <h4 className="mobile-cat-title">{cat.category}</h4>
                    <div className="mobile-treatment-pills-grid">
                      {cat.items.map((sub) => (
                        <button
                          key={sub.id}
                          className="mobile-treatment-pill-btn"
                          onClick={() => handleSubItemClick(sub)}
                        >
                          <span className="pill-text">{sub.title}</span>
                          <ChevronRight size={14} className="pill-arrow" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Us & Book Appointment CTAs */}
              <div className="mobile-drawer-actions">
                <button
                  className={`mobile-nav-btn ${isContactActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  <span>Contact Us</span>
                  <ChevronRight size={18} />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="mobile-call-action-btn"
                >
                  <Phone size={16} />
                  <span>Call +91 92428 55707</span>
                </a>

                <button
                  className="btn-primary mobile-book-action-btn"
                  onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                >
                  <Calendar size={18} /> Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
