import React, { useState, useRef, useEffect } from 'react';
import { CLINIC_INFO, MASTER_TAXONOMY, NAV_TREATMENTS_MENU } from '../data/clinicData';
import './TreatmentsDropdown.css';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Calendar, ArrowRight,
  Home, Sparkles, Zap, Heart, User, MessageSquare, BookOpen, MapPin, Stethoscope, Droplets,
  Moon, Sun, Clock, Facebook, Instagram, Youtube
} from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, onOpenBooking, onSelectItem, isDarkMode = false, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(0);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShowTreatmentsDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowTreatmentsDropdown(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTreatmentsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      onSelectItem({
        id: item.slug,
        title: item.name,
        category: item.tab || 'skin',
        description: item.desc || `Expert dermatological treatment for ${item.name} at Medicare Skin Clinic Bangalore.`,
        procedures: [item.name, 'Clinical Evaluation', 'Customized Treatment Plan'],
        benefits: ['Personalized protocol by Dr. Savitha AS', 'US-FDA approved technology', 'Visible long-term results'],
        results: 'Noticeable clinical improvement with evidence-based dermatological care.',
        downtime: 'Zero to minimal downtime',
        sessions: '1 to 4 sessions as per severity'
      });
    } else if (item.tab) {
      handleNavClick(item.tab);
    }
  };

  useEffect(() => {
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

  const activeCategory = NAV_TREATMENTS_MENU[activeCategoryIndex] || NAV_TREATMENTS_MENU[0];

  return (
    <header className="site-header mos-header-style">
      <nav className="main-nav">
        <div className="nav-inner">
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

            {/* TREATMENTS DROPDOWN TRIGGER & 2-TIER FLYOUT */}
            <li
              ref={dropdownRef}
              className="nav-item-has-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            >
              <button
                className={`serif-nav-item nav-treatments-trigger ${isTreatmentsActive || showTreatmentsDropdown ? 'active' : ''}`}
                onClick={() => setShowTreatmentsDropdown(prev => !prev)}
                aria-expanded={showTreatmentsDropdown}
                aria-haspopup="true"
                id="navbar-treatments-trigger"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Treatments</span>
                <ChevronDown
                  size={14}
                  className={`dropdown-chevron ${showTreatmentsDropdown ? 'rotated' : ''}`}
                  style={{
                    transform: showTreatmentsDropdown ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </button>

              {/* 2-Tier Luminous White Liquid Glass Flyout Dropdown */}
              {showTreatmentsDropdown && (
                <div
                  className="treatments-flyout-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                  aria-label="Treatments Menu"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '580px',
                    minWidth: '580px',
                    maxWidth: '580px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(36px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(36px) saturate(200%)',
                    border: '1.5px solid rgba(255, 255, 255, 0.96)',
                    borderRadius: '20px',
                    boxShadow: '0 24px 60px rgba(139, 9, 108, 0.14), 0 8px 24px rgba(43, 27, 77, 0.08), inset 0 2px 3px #FFFFFF, inset 0 -1px 2px rgba(148, 40, 118, 0.06)',
                    zIndex: 99999,
                    textAlign: 'left',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Left Column: 4 Categories (Pearl Liquid Glass) */}
                  <div
                    className="flyout-categories-col"
                    style={{
                      width: '205px',
                      minWidth: '205px',
                      maxWidth: '205px',
                      background: 'rgba(250, 245, 251, 0.8)',
                      borderRight: '1.5px solid rgba(148, 40, 118, 0.1)',
                      borderRadius: '19px 0 0 19px',
                      padding: '12px 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexShrink: 0,
                      boxSizing: 'border-box'
                    }}
                  >
                    {NAV_TREATMENTS_MENU.map((cat, idx) => {
                      const isActive = activeCategoryIndex === idx;
                      return (
                        <div
                          key={cat.id}
                          className={`flyout-cat-btn ${isActive ? 'active' : ''}`}
                          onMouseEnter={() => setActiveCategoryIndex(idx)}
                          onClick={() => {
                            setActiveCategoryIndex(idx);
                            handleNavClick(cat.tab);
                          }}
                          role="menuitem"
                          tabIndex={0}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '13px 18px',
                            color: isActive ? '#8B096C' : '#241442',
                            background: isActive
                              ? 'linear-gradient(135deg, rgba(148, 40, 118, 0.13) 0%, rgba(200, 80, 155, 0.08) 100%)'
                              : 'transparent',
                            fontFamily: "'Funnel Display', 'Outfit', 'Plus Jakarta Sans', sans-serif",
                            fontSize: '14.5px',
                            fontWeight: isActive ? 750 : 600,
                            cursor: 'pointer',
                            borderRadius: '12px',
                            margin: '3px 6px',
                            border: isActive ? '1px solid rgba(148, 40, 118, 0.22)' : '1px solid transparent',
                            boxShadow: isActive ? '0 4px 14px rgba(148, 40, 118, 0.08), inset 0 1px 1.5px #FFFFFF' : 'none',
                            userSelect: 'none',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          <span>{cat.name}</span>
                          <ChevronRight
                            size={14}
                            className="flyout-arrow"
                            style={{
                              color: isActive ? '#8B096C' : 'rgba(36, 20, 66, 0.32)',
                              transform: isActive ? 'translateX(4px)' : 'none',
                              transition: 'all 0.2s ease',
                              flexShrink: 0
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Conditions & Procedures List (Crystal White Liquid Glass) */}
                  <div
                    className="flyout-subitems-col"
                    style={{
                      width: '375px',
                      minWidth: '375px',
                      maxWidth: '375px',
                      background: 'rgba(255, 255, 255, 0.98)',
                      borderRadius: '0 19px 19px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      className="flyout-subitems-header"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 20px',
                        borderBottom: '1px solid rgba(148, 40, 118, 0.09)',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        color: '#715E7C',
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                        background: 'rgba(252, 249, 252, 0.6)'
                      }}
                    >
                      <span>{activeCategory?.name}</span>
                      <button
                        className="flyout-view-all"
                        onClick={() => handleNavClick(activeCategory?.tab || 'skin')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#8B096C',
                          fontSize: '12px',
                          fontWeight: 750,
                          cursor: 'pointer',
                          padding: 0,
                          transition: 'all 0.18s ease'
                        }}
                      >
                        View All →
                      </button>
                    </div>

                    <div
                      className="flyout-subitems-list"
                      style={{
                        maxHeight: '410px',
                        overflowY: 'auto',
                        padding: '8px 6px'
                      }}
                    >
                      {activeCategory?.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flyout-subitem-link"
                          onClick={() => handleSubItemClick(item)}
                          role="menuitem"
                          tabIndex={0}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '9.5px 16px',
                            margin: '2px 4px',
                            color: '#241442',
                            fontSize: '13.5px',
                            fontWeight: 550,
                            fontFamily: "'Outfit', sans-serif",
                            cursor: 'pointer',
                            lineHeight: 1.35,
                            borderRadius: '8px',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          <span>{item.name}</span>
                          <span
                            className="subitem-action"
                            style={{
                              color: 'rgba(36, 20, 66, 0.3)',
                              fontSize: '14px',
                              marginLeft: '8px',
                              flexShrink: 0
                            }}
                          >
                            ›
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <button
                className={`serif-nav-item ${currentTab === 'q-switched-laser' ? 'active' : ''}`}
                onClick={() => handleNavClick('q-switched-laser')}
                title="Q-Switched Laser for Melasma"
              >
                Melasma Laser
              </button>
            </li>
            <li>
              <button
                className={`serif-nav-item ${currentTab === 'hydrafacial' ? 'active' : ''}`}
                onClick={() => handleNavClick('hydrafacial')}
                title="HydraFacial for Skin Glow & Hydration"
              >
                HydraFacial
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
                Contact Us
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

          {/* Mobile Right Action Bar: Quick Call + Hamburger */}
          <div className="mobile-header-right-actions">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="mobile-header-call-pill"
              title="Call Medicare Skin Clinic"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-sidebar"
              aria-label="Open navigation sidebar"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Scrim / Backdrop */}
        <div
          className={`mobile-sidebar-scrim ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden={!mobileMenuOpen}
        />

        {/* Mobile Off-Canvas Sidebar */}
        <aside
          className={`mobile-sidebar-drawer ${mobileMenuOpen ? 'open' : ''}`}
          id="mobile-nav-sidebar"
          aria-label="Mobile Navigation Menu"
        >
          {/* Sidebar Header */}
          <div className="mobile-sidebar-header">
            <div className="mobile-sidebar-brand" onClick={() => handleNavClick('home')}>
              <img
                src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
                alt="Medicare Skin Clinic"
                className="mobile-sidebar-logo"
              />
            </div>
            <div className="mobile-sidebar-header-actions">
              <button
                type="button"
                onClick={toggleTheme}
                className="mobile-sidebar-theme-btn"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-sidebar-close-btn"
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Doctor Quick Profile Card */}
          <div className="mobile-sidebar-doctor-card" onClick={() => handleNavClick('doctor')}>
            <img
              src="/images/dr_sujaya.jpeg"
              alt="Dr. (Mrs.) Sujay M"
              className="mobile-sidebar-doc-avatar"
            />
            <div className="mobile-sidebar-doc-info">
              <div className="mobile-sidebar-doc-name">Dr. (Mrs.) Sujay M</div>
              <div className="mobile-sidebar-doc-sub">MBBS, DDVL · Senior Dermatologist (18+ Yrs)</div>
            </div>
            <ChevronRight size={16} className="mobile-sidebar-doc-arrow" />
          </div>

          {/* Action CTAs */}
          <div className="mobile-sidebar-ctas">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mobile-sidebar-book-btn"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
            <a href={`tel:${CLINIC_INFO.rawPhone}`} className="mobile-sidebar-call-btn">
              <Phone size={16} />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Scrollable Navigation List */}
          <div className="mobile-sidebar-nav-scroll">
            <div className="mobile-sidebar-section-title">Navigation Menu</div>
            <ul className="mobile-sidebar-links">
              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${isHomeActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Home size={17} /></span>
                    <span>Home</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              {/* Treatments Accordion */}
              <li className="mobile-sidebar-accordion-item">
                <button
                  type="button"
                  className={`mobile-sidebar-link ${isTreatmentsActive ? 'active' : ''}`}
                  onClick={() => setMobileTreatmentsOpen(prev => !prev)}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Sparkles size={17} /></span>
                    <span>All Treatments Directory</span>
                  </div>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileTreatmentsOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>

                {mobileTreatmentsOpen && (
                  <div className="mobile-sidebar-subcategories">
                    {NAV_TREATMENTS_MENU.map((cat, idx) => (
                      <div key={cat.id} className="mobile-subcat-group">
                        <div
                          className={`mobile-subcat-header ${mobileActiveCategory === idx ? 'active' : ''}`}
                          onClick={() => setMobileActiveCategory(mobileActiveCategory === idx ? -1 : idx)}
                        >
                          <span>{cat.name}</span>
                          <ChevronDown
                            size={14}
                            style={{
                              transform: mobileActiveCategory === idx ? 'rotate(180deg)' : 'none',
                              transition: 'transform 0.2s ease'
                            }}
                          />
                        </div>

                        {mobileActiveCategory === idx && (
                          <div className="mobile-subcat-items">
                            {cat.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="mobile-subitem-link"
                                onClick={() => handleSubItemClick(item)}
                              >
                                <span>{item.name}</span>
                                <span className="mobile-subitem-arrow">›</span>
                              </div>
                            ))}
                            <div
                              className="mobile-subcat-viewall"
                              onClick={() => handleNavClick(cat.tab || 'skin')}
                            >
                              <span>Explore all {cat.name} →</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'q-switched-laser' ? 'active' : ''}`}
                  onClick={() => handleNavClick('q-switched-laser')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Zap size={17} /></span>
                    <span>Q-Switched Laser Toning</span>
                  </div>
                  <span className="mobile-badge-new">US-FDA</span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'hydrafacial' ? 'active' : ''}`}
                  onClick={() => handleNavClick('hydrafacial')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Droplets size={17} /></span>
                    <span>Medical HydraFacial Glow</span>
                  </div>
                  <span className="mobile-badge-popular">Trending</span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'comparison' ? 'active' : ''}`}
                  onClick={() => handleNavClick('comparison')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Sparkles size={17} /></span>
                    <span>Laser vs. HydraFacial</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${isAboutActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('doctor')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><User size={17} /></span>
                    <span>Meet Dr. Sujay M</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => handleNavClick('reviews')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><MessageSquare size={17} /></span>
                    <span>Patient Reviews &amp; Stories</span>
                  </div>
                  <span className="mobile-badge-stars">5.0 ★</span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'gallery' ? 'active' : ''}`}
                  onClick={() => handleNavClick('gallery')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><BookOpen size={17} /></span>
                    <span>Clinic &amp; Laser Gallery</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'blog' ? 'active' : ''}`}
                  onClick={() => handleNavClick('blog')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Stethoscope size={17} /></span>
                    <span>Dermatology Blog &amp; Guides</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'local' ? 'active' : ''}`}
                  onClick={() => handleNavClick('local')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><MapPin size={17} /></span>
                    <span>Areas We Serve (South BLR)</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${currentTab === 'faqs' ? 'active' : ''}`}
                  onClick={() => handleNavClick('faqs')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><Heart size={17} /></span>
                    <span>Pricing &amp; FAQs</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={`mobile-sidebar-link ${isContactActive ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  <div className="mobile-link-left">
                    <span className="mobile-link-icon-box"><MapPin size={17} /></span>
                    <span>Contact &amp; Location</span>
                  </div>
                  <ChevronRight size={15} />
                </button>
              </li>
            </ul>

            {/* Clinic Info Footer Card */}
            <div className="mobile-sidebar-footer-card">
              <div className="mobile-sidebar-info-row">
                <MapPin size={15} color="#8B096C" />
                <span>Yelachenahalli, Kanakapura Main Rd, Bangalore</span>
              </div>
              <div className="mobile-sidebar-info-row">
                <Clock size={15} color="#D4AF37" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
              <div className="mobile-sidebar-socials">
                <a href="https://www.facebook.com/DrSujayMediCareSkin" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/medicareskinandcosmeticclinic/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://www.youtube.com/@medicareskincosmeticclinic4373" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </nav>
    </header>
  );
}
