'use client';

import { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SlideItem {
  id: string;
  category: string;
  badge?: string;
  badgeBg?: string;
  line1: string;
  line2: string;
  image: string;
  pillTitle: string;
  pillPrice: string;
  href: string;
  glassColor?: string;
  accentBtnColor?: string;
  objectPosition?: string;
}

const FEATURE_SLIDES: SlideItem[] = [
  {
    id: 'hair-trigger',
    category: 'Hair Fall',
    badge: 'ROOT CAUSE',
    badgeBg: '#EA580C',
    line1: 'Stop treating the hair.',
    line2: 'Find the trigger.',
    image: '/images/slide_hair_new.jpg',
    pillTitle: 'Hair Fall & Scalp Profile',
    pillPrice: 'Starts at ₹2399',
    href: '/treatments/hair/hair-loss-treatment/',
    glassColor: 'rgba(28, 20, 24, 0.88)',
    accentBtnColor: '#922370',
    objectPosition: 'center 12%'
  },
  {
    id: 'acne-root',
    category: 'Acne & Scars',
    badge: 'CLINICAL',
    badgeBg: '#0284C7',
    line1: 'Stop covering breakouts.',
    line2: 'Clear the root cause.',
    image: '/images/slide_acne_new.jpg',
    pillTitle: 'Acne & Scar Checkups',
    pillPrice: 'Starts at ₹1499',
    href: '/treatments/skin/acne-treatment/',
    glassColor: 'rgba(22, 26, 38, 0.88)',
    accentBtnColor: '#0284C7',
    objectPosition: 'center 14%'
  },
  {
    id: 'pigmentation-melanin',
    category: 'Pigmentation',
    badge: 'Q-SWITCHED Nd:YAG',
    badgeBg: '#7C3AED',
    line1: 'Stop fading dark spots.',
    line2: 'Target deep melanin.',
    image: '/images/slide_pigment_new.jpg',
    pillTitle: 'Pigmentation & Melasma Protocol',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/skin/pigmentation-treatment/',
    glassColor: 'rgba(30, 18, 42, 0.88)',
    accentBtnColor: '#7C3AED',
    objectPosition: 'center 18%'
  },
  {
    id: 'hydrafacial-glow',
    category: 'HydraFacial Glow',
    badge: 'VORTEX GLOW',
    badgeBg: '#0D9488',
    line1: 'Dull & dehydrated skin?',
    line2: 'Unlock clinical glow.',
    image: '/images/slide_hydra_glow_new.jpg',
    pillTitle: 'HydraFacial Medi-Facial Infusion',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/aesthetics/hydrafacial/',
    glassColor: 'rgba(18, 30, 36, 0.88)',
    accentBtnColor: '#0D9488',
    objectPosition: 'center 8%'
  },
  {
    id: 'laser-hair',
    category: 'Laser Care',
    badge: 'US-FDA DIODE',
    badgeBg: '#4F46E5',
    line1: 'Stop waxing & shaving.',
    line2: 'Long-term smooth skin.',
    image: '/images/slide_laser_new.jpg',
    pillTitle: 'US-FDA Laser Reduction',
    pillPrice: 'Starts at ₹1999',
    href: '/treatments/laser/laser-hair-reduction/',
    glassColor: 'rgba(20, 24, 40, 0.88)',
    accentBtnColor: '#4F46E5',
    objectPosition: 'center center'
  },
  {
    id: 'acne-scars',
    category: 'Acne & Scars',
    badge: 'FRACTIONAL RF',
    badgeBg: '#C026D3',
    line1: 'Pitted acne scars?',
    line2: 'Rebuild dermal collagen.',
    image: '/images/slide_scar_model_new.jpg',
    pillTitle: 'Acne Scar Resurfacing',
    pillPrice: 'Starts at ₹2999',
    href: '/treatments/skin/acne-scar-treatment/',
    glassColor: 'rgba(34, 18, 36, 0.88)',
    accentBtnColor: '#C026D3',
    objectPosition: 'center 12%'
  },
  {
    id: 'chemical-peels',
    category: 'Pigmentation',
    badge: 'DERMATOLOGY PEEL',
    badgeBg: '#D97706',
    line1: 'Uneven tone & dullness?',
    line2: 'Clinician peel renewal.',
    image: '/images/slide_peel_new.jpg',
    pillTitle: 'Medical Chemical Peels',
    pillPrice: 'Starts at ₹1800',
    href: '/treatments/aesthetics/chemical-peels/',
    glassColor: 'rgba(38, 22, 16, 0.88)',
    accentBtnColor: '#D97706',
    objectPosition: 'center top'
  },
  {
    id: 'skin-allergies',
    category: 'Medical Dermatology',
    badge: 'SPECIALIST CARE',
    badgeBg: '#E11D48',
    line1: 'Persistent itchy rashes?',
    line2: 'Doctor diagnosis.',
    image: '/images/cat_medical_dermatology.jpg',
    pillTitle: 'Medical Dermatology Checkup',
    pillPrice: 'Starts at ₹600',
    href: '/treatments/medical-dermatology/skin-allergies/',
    glassColor: 'rgba(36, 18, 24, 0.88)',
    accentBtnColor: '#E11D48',
    objectPosition: 'center 18%'
  }
];

const CATEGORIES = [
  'All',
  'Hair Fall',
  'Acne & Scars',
  'Pigmentation',
  'HydraFacial Glow',
  'Laser Care',
  'Medical Dermatology'
];

interface HeroFeatureSlidesProps {
  asHero?: boolean;
}

export function HeroFeatureSlides({ asHero = true }: HeroFeatureSlidesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSlides = useMemo(() => {
    return FEATURE_SLIDES.filter((slide) => {
      const matchesCategory =
        activeCategory === 'All' || slide.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        slide.pillTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slide.line1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slide.line2.toLowerCase().includes(searchQuery.toLowerCase()) ||
        slide.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className={`feature-slides-section ${asHero ? 'feature-slides-as-hero' : ''}`} 
      id="specialised-protocols" 
      aria-label="Medicare Skin & Cosmetic Clinic - Featured clinical protocols"
    >
      <div className="container">
        {/* Top Doctor Authority Strip: Dr. (Mrs.) Sujay M */}
        <div className="hero-top-doctor-strip">
          <div className="top-doctor-profile">
            <div className="top-doctor-avatar-box">
              <img
                src="/images/dr_sujaya.jpeg"
                alt="Dr. (Mrs.) Sujay M MBBS DDVL Consultant Dermatologist"
                className="top-doctor-avatar-img"
                width={68}
                height={68}
              />
              <span className="top-doctor-status-dot" title="Available for Consultation" aria-label="Available for Consultation" />
            </div>

            <div className="top-doctor-details">
              <div className="top-doctor-badge-row">
                <span className="top-doctor-eyebrow">CONSULTING DERMATOLOGIST &amp; TRICHOLOGIST</span>
                <span className="top-doctor-exp-pill">18+ Yrs Clinical Mastery</span>
              </div>
              <h2 className="top-doctor-name">
                Dr. (Mrs.) Sujay M <span className="top-doctor-degrees">MBBS, DDVL (BMCRI 2005)</span>
              </h2>
              <p className="top-doctor-lede">
                Senior Dermatologist at Medicare Skin Clinic &bull; Evidence-based clinical &amp; aesthetic dermatology &bull; Kanakapura Road, near Yelachenahalli Metro, South Bengaluru
              </p>
            </div>
          </div>

          <div className="top-doctor-actions">
            <Link href="/book-appointment/" className="top-doctor-consult-btn">
              <span>Book Consultation</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <a
              href={waLink('Hello Dr. Sujay M, I would like to book a consultation at Medicare Skin Clinic.')}
              target="_blank"
              rel="noopener noreferrer"
              className="top-doctor-wa-btn"
              title="Chat with Dr. Sujay M on WhatsApp"
            >
              <WhatsAppIcon size={18} color="#25D366" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Top Header & Search Bar matching reference UI/UX */}
        <div className="feature-slides-topbar">
          <div className="feature-slides-search-wrap">
            <div className="feature-search-input-box">
              <span className="search-icon-decor" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                className="feature-search-input"
                placeholder='Search for "hair fall, acne, pigmentation, hydrafacial..."'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search skin and hair protocols"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Action Badges next to Search */}
            <div className="feature-quick-links">
              <Link href="/treatments/" className="quick-pill-btn">
                <span className="quick-pill-icon" aria-hidden="true">🔬</span>
                <span>All Treatments</span>
              </Link>
              <Link href="/book-appointment/" className="quick-pill-btn accent-pill">
                <span className="quick-pill-icon" aria-hidden="true">🩺</span>
                <span>Doctor Checkups</span>
              </Link>
            </div>
          </div>

          {/* Accessible section heading for assistive technologies */}
          <h2 className="sr-only">Specialised Dermatology Protocols &amp; Checkups</h2>

          {/* Category Filter Pills Row */}
          <div className="feature-category-pills-row" aria-label="Filter protocols by concern">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`feature-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery('');
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slider with Floating Circular Arrow Buttons */}
        <div className="feature-carousel-container">
          {/* Floating Left Circular Arrow Button */}
          <button
            type="button"
            className="carousel-floating-arrow carousel-arrow-left"
            onClick={() => scroll('left')}
            aria-label="Previous slide"
            title="Previous slide"
          >
            ‹
          </button>

          {/* Horizontal Full-Bleed Card Track */}
          <div className="feature-slides-track" ref={scrollRef}>
            {filteredSlides.map((slide) => (
              <Link
                key={slide.id}
                href={slide.href}
                className="feature-slide-card full-bleed-card"
                title={`${slide.line1} ${slide.line2}`}
              >
                {/* 1. Full-Bleed Background Image covering 100% of card */}
                <img 
                  src={slide.image} 
                  alt={`${slide.line1} ${slide.line2}`} 
                  className="card-bg-full-image"
                  style={{ objectPosition: slide.objectPosition || 'center top' }}
                  loading="eager"
                />

                {/* 2. Top Scrim for crisp typography contrast */}
                <div className="card-top-scrim" />

                {/* 3. Top Headline & Badge overlaying image */}
                <div className="card-top-content">
                  <h3 className="card-headline-text">
                    <span className="card-headline-l1">{slide.line1}</span>
                    <span className="card-headline-l2">{slide.line2}</span>
                  </h3>
                  {slide.badge && (
                    <div className="card-badge-wrap">
                      <span 
                        className="card-category-badge"
                        style={{ backgroundColor: slide.badgeBg || '#EA580C' }}
                      >
                        {slide.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* 4. Bottom Frosted Glass Pill Card */}
                <div
                  className="card-bottom-glass-panel"
                  style={{ backgroundColor: slide.glassColor || 'rgba(24, 20, 32, 0.88)' }}
                >
                  <div className="glass-panel-content">
                    <span className="glass-panel-title">{slide.pillTitle}</span>
                    <strong className="glass-panel-price">{slide.pillPrice}</strong>
                  </div>
                  <div
                    className="glass-panel-btn"
                    style={{ backgroundColor: slide.accentBtnColor || '#280F33' }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Floating Right Circular Arrow Button */}
          <button
            type="button"
            className="carousel-floating-arrow carousel-arrow-right"
            onClick={() => scroll('right')}
            aria-label="Next slide"
            title="Next slide"
          >
            ›
          </button>
        </div>

        {/* 4 Horizontal Quick Action Feature Cards matching Image 2 UI/UX */}
        <div className="feature-quick-actions-grid">
          {/* Tile 1: Book Consultation */}
          <Link href="/book-appointment/" className="quick-action-tile">
            <div className="action-tile-icon-box icon-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="action-tile-text">
              <strong className="action-tile-title">Book Consultation</strong>
              <span className="action-tile-sub">Choose your preferred slot</span>
            </div>
            <div className="action-tile-arrow arrow-blue" aria-hidden="true">
              ›
            </div>
          </Link>

          {/* Tile 2: 100% Doctor-Led Care */}
          <Link href="/doctors/dr-sujay-m/" className="quick-action-tile">
            <div className="action-tile-icon-box icon-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="action-tile-text">
              <strong className="action-tile-title">100% Doctor-Led</strong>
              <span className="action-tile-sub">Evaluated by Dr. Sujay M</span>
            </div>
            <div className="action-tile-arrow arrow-green" aria-hidden="true">
              ›
            </div>
          </Link>

          {/* Tile 3: WhatsApp Enquiry */}
          <a 
            href={waLink('Hello Dr. Sujay M, I would like to enquire about consultation availability at Medicare Skin Clinic.')}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-action-tile"
          >
            <div className="action-tile-icon-box icon-emerald">
              <WhatsAppIcon size={22} color="#059669" />
            </div>
            <div className="action-tile-text">
              <strong className="action-tile-title">Doctor Enquiry</strong>
              <span className="action-tile-sub">Chat on WhatsApp</span>
            </div>
            <div className="action-tile-arrow arrow-emerald" aria-hidden="true">
              ›
            </div>
          </a>

          {/* Tile 4: South Bengaluru Clinic */}
          <Link href="/locations/yelachenahalli/" className="quick-action-tile">
            <div className="action-tile-icon-box icon-rose">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="action-tile-text">
              <strong className="action-tile-title">South Bengaluru Clinic</strong>
              <span className="action-tile-sub">Near Yelachenahalli Metro</span>
            </div>
            <div className="action-tile-arrow arrow-rose" aria-hidden="true">
              ›
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroFeatureSlides;
