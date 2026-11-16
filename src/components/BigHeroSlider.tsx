'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  titleLead: string;
  titleAccent: string;
  titleNavy: string;
  titleBerry: string;
  highlights: string[];
  btnPrimary: {
    text: string;
    href: string;
  };
  whatsappText: string;
  mobileHeadline: string;
  mobileSub: string;
  tag: string;
  objectPosition?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'radiant-flagship',
    image: '/images/bridal_beauty_radiance.jpg',
    alt: 'Dermatologist-Led Skin, Hair and Laser Care - Medicare Skin and Cosmetic Clinic South Bengaluru',
    titleLead: 'Dermatologist-Led Care,',
    titleAccent: 'South Bengaluru.',
    titleNavy: 'Dermatologist-Led Care,',
    titleBerry: 'South Bengaluru.',
    objectPosition: 'center 26%',
    highlights: [
      '18+ Years Dedicated Clinical Experience — Dr. (Mrs.) Sujay M (MBBS, DDVL)',
      'Personalised Care for Acne, Melasma, Scars, Hair Loss & Laser',
      'Convenient South Bengaluru Practice near Yelachenahalli Metro'
    ],
    btnPrimary: {
      text: 'Book Doctor Consultation',
      href: '/book-appointment/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to book a dermatologist consultation with Dr. Sujay M.',
    mobileHeadline: 'Dermatologist-Led Care · South Bengaluru',
    mobileSub: 'Dr. (Mrs.) Sujay M, MBBS, DDVL · 18+ Yrs Exp · Near Yelachenahalli Metro',
    tag: '✦ DERMATOLOGIST-LED CLINICAL EXCELLENCE · SOUTH BENGALURU'
  },
  {
    id: 'hair-vitality',
    image: '/images/radiant_hair_smile_woman.png',
    alt: 'Clinical Hair Loss Assessment and Growth Factor Therapy - Medicare Skin Clinic',
    titleLead: 'Lustrous Hair,',
    titleAccent: 'Scalp Vitality.',
    titleNavy: 'Lustrous Hair,',
    titleBerry: 'Scalp Vitality.',
    objectPosition: 'center 20%',
    highlights: [
      'Clinical Trichoscopy & Microscopic Follicle Assessment',
      'Autologous Growth Factor Therapy & Targeted Hair Regrowth',
      'Root-Cause Diagnosis for Hormonal & Nutritional Thinning'
    ],
    btnPrimary: {
      text: 'Explore Hair Loss Care',
      href: '/treatments/hair/hair-loss-treatment/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to consult Dr. Sujay M for Hair Fall and Thinning.',
    mobileHeadline: 'Lustrous Hair & Scalp Vitality',
    mobileSub: 'Dermatologist Trichoscopy & Growth Factor Therapy',
    tag: 'GROWTH FACTOR THERAPY & PRP'
  },
  {
    id: 'clear-complexion-acne',
    image: '/images/hero_clear_skin_radiance.jpg',
    alt: 'Clear Complexion & Acne Scar Resurfacing - Medicare Clinic Yelachenahalli',
    titleLead: 'Clear Complexion,',
    titleAccent: 'Confident You.',
    titleNavy: 'Clear Complexion,',
    titleBerry: 'Confident You.',
    objectPosition: '78% center',
    highlights: [
      'Targeted Root-Cause Acne & Breakout Control',
      'Subcision & MNRF Deep Scar Remodeling',
      'Melanin-Safe Protocols Formulated for Indian Skin'
    ],
    btnPrimary: {
      text: 'Explore Acne & Scars',
      href: '/treatments/skin/acne-treatment/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to consult Dr. Sujay M for Acne and Scars.',
    mobileHeadline: 'Clear Complexion, Confident You',
    mobileSub: 'Targeted Root-Cause Acne & Scar Remodeling',
    tag: 'ACNE & SCAR REMODELING'
  },
  {
    id: 'glass-skin-hydrafacial',
    image: '/images/glass_skin_radiance.jpg',
    alt: 'Glass Skin Radiance and HydraFacial Infusion - Medicare Clinic',
    titleLead: 'Glass Skin Radiance,',
    titleAccent: 'Pure Clarity.',
    titleNavy: 'Glass Skin Radiance,',
    titleBerry: 'Pure Clarity.',
    objectPosition: '72% center',
    highlights: [
      'Medical-Grade 4-in-1 HydraFacial Vortex Infusion',
      'Deep Pore Clarifying, Blackhead Extraction & Intense Hydration',
      'Instant Luminous Glow with Zero Social Downtime'
    ],
    btnPrimary: {
      text: 'Explore HydraFacial',
      href: '/treatments/aesthetics/hydrafacial/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to book a HydraFacial session.',
    mobileHeadline: 'Glass Skin Radiance & Glow',
    mobileSub: 'Medical-Grade 4-in-1 HydraFacial Vortex Infusion',
    tag: 'HYDRAFACIAL & ACTIVE GLOW'
  },
  {
    id: 'clinical-laser-perfection',
    image: '/images/hero_laser_woman.jpg',
    alt: 'US-FDA Laser Reduction and Skin Toning - Medicare Clinic',
    titleLead: 'Clinical Laser,',
    titleAccent: 'Long-Term Smoothness.',
    titleNavy: 'Clinical Laser,',
    titleBerry: 'Long-Term Smoothness.',
    objectPosition: '65% center',
    highlights: [
      'US-FDA Cleared Triple-Wavelength Laser Technology',
      'Targeted Follicle Assessment & Deep Pigment Care',
      'Dermatologist-Calibrated Parameters for Indian Skin (Fitzpatrick IV–VI)'
    ],
    btnPrimary: {
      text: 'Discover Laser Treatments',
      href: '/treatments/laser/laser-hair-reduction/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to enquire about US-FDA Cleared Laser Reduction.',
    mobileHeadline: 'US-FDA Cleared Laser Hair Reduction',
    mobileSub: 'Dermatologist-Led Long-Term Hair Reduction',
    tag: 'US-FDA CLEARED LASER DERMATOLOGY'
  }
];

const MOBILE_CATEGORIES = [
  'All',
  'Acne & Scars',
  'Pigmentation',
  'Hair Loss',
  'HydraFacial',
  'Lasers'
];

const MOBILE_PROTOCOLS = [
  {
    id: 'skin-glowing',
    title: 'Skin Glowing',
    category: 'HydraFacial',
    tag: 'Pore Clarify & Glow',
    price: 'Starts at ₹2499',
    image: '/images/slide_hydra_glow_new.jpg',
    href: '/treatments/aesthetics/hydrafacial/'
  },
  {
    id: 'acne-scars',
    title: 'Acne & Scars',
    category: 'Acne & Scars',
    tag: 'Root-Cause Healing',
    price: 'Starts at ₹1499',
    image: '/images/slide_acne_new.jpg',
    href: '/treatments/skin/acne-treatment/'
  },
  {
    id: 'pigmentation',
    title: 'Melasma Laser',
    category: 'Pigmentation',
    tag: 'Deep Melanin Toning',
    price: 'Starts at ₹2499',
    image: '/images/slide_pigment_new.jpg',
    href: '/treatments/skin/pigmentation-treatment/'
  },
  {
    id: 'hair-fall',
    title: 'Hair Fall & PRP',
    category: 'Hair Loss',
    tag: 'GFT Follicle Growth',
    price: 'Starts at ₹2399',
    image: '/images/slide_hair_new.jpg',
    href: '/treatments/hair/hair-loss-treatment/'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction',
    category: 'Lasers',
    tag: 'US-FDA Cleared',
    price: 'Starts at ₹1999',
    image: '/images/slide_laser_new.jpg',
    href: '/treatments/laser/laser-hair-reduction/'
  }
];

export function BigHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-advance images and synchronized text every 5.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const filteredProtocols =
    activeCategory === 'All'
      ? MOBILE_PROTOCOLS
      : MOBILE_PROTOCOLS.filter((p) => p.category === activeCategory);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      className="hero-reference-slider-section hero-classic-banner hero-architectural-edition"
      aria-label="Medicare Skin & Cosmetic Clinic - Dermatologist-Led Care South Bengaluru"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          DESKTOP VIEW: BESPOKE EDITORIAL ARCHITECTURAL CLINICAL HERO
          Inspired by luxury editorial aesthetics (Architectural Arch + Editorial Serif)
          ========================================================================= */}
      <div className="hero-desktop-view-wrap">
        <div className="container hero-architectural-container">
          {/* Left Column: Editorial Typography, Clinical Highlights & Trust Badges */}
          <div className="hero-editorial-left-col">
            <div key={currentSlide.id} className="hero-editorial-animated-content">
              {/* Category Eyebrow Pill */}
              <div className="hero-editorial-eyebrow">
                <span className="eyebrow-sparkle">✦</span>
                <span>{currentSlide.tag}</span>
              </div>

              {/* Masterpiece Editorial Headline */}
              <h1 className="hero-editorial-title">
                <span className="title-lead-line">{currentSlide.titleLead}</span>
                <span className="title-accent-line"><em>{currentSlide.titleAccent}</em></span>
              </h1>

              {/* Clinical Highlights Checklist */}
              <div className="hero-editorial-checklist">
                {currentSlide.highlights.map((item, i) => (
                  <div key={i} className="hero-checklist-row">
                    <span className="checklist-circle-check" aria-hidden="true">✓</span>
                    <span className="checklist-text">{item}</span>
                  </div>
                ))}
              </div>

              {/* Luxury Rounded Pill Action Group */}
              <div className="hero-editorial-actions">
                <Link
                  href={currentSlide.btnPrimary.href}
                  className="hero-editorial-btn-primary"
                  id="hero-book-appointment-btn"
                >
                  <span>{currentSlide.btnPrimary.text}</span>
                  <span className="btn-arrow-icon" aria-hidden="true">→</span>
                </Link>

                <a
                  href={waLink(currentSlide.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-editorial-btn-whatsapp"
                  aria-label="Direct WhatsApp Consultation Request"
                >
                  <WhatsAppIcon size={18} color="#25D366" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Doctor Credibility & Trust Strip */}
              <div className="hero-editorial-trust-strip">
                <div className="trust-strip-item">
                  <span className="trust-star">★</span>
                  <span className="trust-value">4.9</span>
                  <span className="trust-sub">South Bengaluru</span>
                </div>
                <span className="trust-strip-divider" aria-hidden="true" />
                <div className="trust-strip-item">
                  <span className="trust-badge">✓</span>
                  <span className="trust-value">18+ Yrs</span>
                  <span className="trust-sub">Clinical Experience</span>
                </div>
                <span className="trust-strip-divider" aria-hidden="true" />
                <div className="trust-strip-item">
                  <span className="trust-badge-symbol">🏛</span>
                  <span className="trust-value">KMC</span>
                  <span className="trust-sub">Registered Specialist</span>
                </div>
              </div>
            </div>

            {/* Desktop Slide Navigation Controls */}
            <div className="hero-editorial-slide-nav" aria-label="Hero slider pagination">
              <button
                type="button"
                className="hero-nav-arrow-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
                title="Previous slide"
              >
                ‹
              </button>

              <div className="hero-nav-dashes">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={`hero-dash-${slide.id}`}
                    type="button"
                    className={`hero-nav-dash ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${slide.titleLead} ${slide.titleAccent}`}
                    title={`${slide.titleLead} ${slide.titleAccent}`}
                  >
                    <span className="dash-bar" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="hero-nav-arrow-btn"
                onClick={nextSlide}
                aria-label="Next slide"
                title="Next slide"
              >
                ›
              </button>

              <span className="hero-slide-counter">
                0{activeIndex + 1} <span className="counter-sep">/</span> 0{HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Archway Portal with Floating Credentials */}
          <div className="hero-architectural-right-col">
            <div className="hero-arch-stage">
              {/* Ambient Decorative Architectural Rings & Warm Halo */}
              <div className="arch-ambient-aura" aria-hidden="true" />
              <div className="arch-decorative-ring" aria-hidden="true" />

              {/* The Architectural Archway Portal */}
              <div className="hero-arch-viewport">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={`arch-img-${slide.id}`}
                    className={`arch-slide-layer ${idx === activeIndex ? 'active' : ''}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="arch-slide-img"
                      style={{ objectPosition: slide.objectPosition || 'center center' }}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}

                {/* Soft Bottom-Edge Blend */}
                <div className="arch-bottom-fade" aria-hidden="true" />
              </div>

              {/* Floating Trust Badge: Google Star Rating */}
              <div className="arch-floating-pill arch-pill-top-right">
                <span className="pill-star">★</span>
                <span className="pill-bold">4.9</span>
                <span className="pill-light">South Bengaluru</span>
              </div>

              {/* Floating Trust Badge: Doctor Identification */}
              <div className="arch-floating-pill arch-pill-bottom-left">
                <div className="pill-avatar-icon">👩‍⚕️</div>
                <div className="pill-doc-info">
                  <span className="pill-doc-name">Dr. Sujay M · MBBS, DDVL</span>
                  <span className="pill-doc-meta">Senior Dermatologist · 18+ Yrs Exp</span>
                </div>
              </div>

              {/* Floating Trust Badge: 100% Doctor-Led */}
              <div className="arch-floating-pill arch-pill-bottom-right">
                <span className="pill-shield-icon">🛡️</span>
                <span className="pill-shield-text">100% Doctor-Led</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: SYNCHRONIZED APP EXPERIENCE WITH ELEVATED ARCH PREVIEW
          ========================================================================= */}
      <div className="hero-mobile-view-wrap">
        <div className="hero-mobile-container">
          {/* Mobile Hero Feature Slide: Stacked Layout with Arched Top */}
          <div
            className="hero-app-showcase-slide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Clinical Image Viewport with Arched Aesthetic */}
            <div className="hero-app-image-viewport">
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={`app-img-${slide.id}`}
                  className={`app-slide-img-layer ${idx === activeIndex ? 'active' : ''}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="app-slide-img"
                    style={{ objectPosition: slide.objectPosition || 'center center' }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}

              {/* Floating Star Pill on Mobile Image */}
              <div className="mobile-arch-floating-rating">
                <span>★ 4.9 · South Bengaluru</span>
              </div>
            </div>

            {/* Bottom Caption Card (Synchronized with active slide) */}
            <div
              key={`mobile-card-${currentSlide.id}`}
              className="hero-app-caption-card hero-mobile-card-animated"
            >
              <div className="frosted-card-tag">{currentSlide.tag}</div>
              <h2 className="frosted-card-headline">
                {currentSlide.mobileHeadline}
              </h2>
              <p className="frosted-card-sub">
                {currentSlide.mobileSub}
              </p>
              <Link
                href={currentSlide.btnPrimary.href}
                className="frosted-card-action-btn"
                id="mobile-hero-get-started-btn"
              >
                <span>{currentSlide.btnPrimary.text}</span>
                <span className="btn-arrow-right">→</span>
              </Link>
            </div>
          </div>

          {/* Dots Indicator for App Slide */}
          <div className="hero-app-slide-dots">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={`app-dot-${slide.id}`}
                type="button"
                className={`app-dot-pill ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide ${idx + 1}: ${slide.mobileHeadline}`}
              />
            ))}
          </div>

          {/* "Explore by Skin Concern" Section */}
          <div className="hero-app-concern-section">
            <div className="concern-section-header">
              <h3 className="concern-section-title">Explore by Skin concern</h3>
            </div>

            {/* Filter Pills Carousel */}
            <div className="concern-filter-pills-row" role="tablist">
              {MOBILE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`concern-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Horizontal Swipeable Protocol Cards */}
            <div className="concern-cards-carousel" tabIndex={0} aria-label="Skin concern protocols carousel">
              {filteredProtocols.map((protocol) => (
                <Link
                  key={protocol.id}
                  href={protocol.href}
                  className="concern-app-card"
                  aria-label={`${protocol.title} - ${protocol.price}`}
                >
                  <div className="concern-card-image-wrap">
                    <img
                      src={protocol.image}
                      alt={protocol.title}
                      className="concern-card-img"
                      loading="lazy"
                    />
                    <div className="concern-card-tag-pill">{protocol.tag}</div>
                    <span className="concern-card-arrow-circle" aria-hidden="true">↗</span>
                  </div>
                  <div className="concern-card-meta">
                    <h4 className="concern-card-title">{protocol.title}</h4>
                    <span className="concern-card-price">{protocol.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Fast Action Shortcuts for Mobile */}
          <div className="hero-app-actions-row">
            <Link
              href="/book-appointment/"
              className="hero-app-btn-consultation"
            >
              <span>Book Doctor Consultation</span>
              <span className="btn-icon-sub">Direct Dr. Sujay M</span>
            </Link>

            <a
              href={waLink('Hello Medicare Skin Clinic, I would like to book a consultation with Dr. Sujay M.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-app-btn-whatsapp"
              aria-label="Direct WhatsApp Consultation"
            >
              <WhatsAppIcon size={18} color="#25D366" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigHeroSlider;
