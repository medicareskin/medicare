'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
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
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'radiant-flagship',
    image: '/images/hero_flagship_radiant_model.jpg',
    alt: 'Healthy Skin, Beautiful You - Medicare Skin & Cosmetic Clinic South Bengaluru',
    titleNavy: 'Healthy Skin,',
    titleBerry: 'Beautiful You.',
    highlights: [
      '18+ Years Dedicated Clinical Experience',
      '10,000+ Treated Patients in South Bengaluru',
      'Affordable & Clinically Proven Protocols'
    ],
    btnPrimary: {
      text: 'Book an Appointment',
      href: '/book-appointment/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to book an appointment with Dr. Sujay M.',
    mobileHeadline: 'Healthy Skin, Beautiful You',
    mobileSub: '18+ Years Dedicated Clinical Experience',
    tag: 'Doctor-Led Clinic'
  },
  {
    id: 'clear-complexion-acne',
    image: '/images/hero_clear_skin_radiance.jpg',
    alt: 'Clear Complexion & Acne Scar Resurfacing - Medicare Clinic Yelachenahalli',
    titleNavy: 'Clear Complexion,',
    titleBerry: 'Confident You.',
    highlights: [
      'Targeted Root-Cause Acne & Breakout Control',
      'Subcision & MNRF Deep Scar Remodeling',
      'Melanin-Safe Protocols for Indian Skin'
    ],
    btnPrimary: {
      text: 'Explore Acne & Scars',
      href: '/treatments/skin/acne-treatment/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to consult Dr. Sujay M for Acne and Scars.',
    mobileHeadline: 'Clear Complexion, Confident You',
    mobileSub: 'Targeted Root-Cause Acne & Scar Remodeling',
    tag: 'Acne & Scar Care'
  },
  {
    id: 'glass-skin-hydrafacial',
    image: '/images/glass_skin_radiance.jpg',
    alt: 'Glass Skin Radiance and HydraFacial Infusion - Medicare Clinic',
    titleNavy: 'Glass Skin Radiance,',
    titleBerry: 'Pure Clarity.',
    highlights: [
      'Medical-Grade 4-in-1 HydraFacial Vortex Infusion',
      'Deep Pore Clarifying & Intense Hydration',
      'Instant Luminous Glow with Zero Social Downtime'
    ],
    btnPrimary: {
      text: 'Explore HydraFacial',
      href: '/treatments/aesthetics/hydrafacial/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to book a HydraFacial session.',
    mobileHeadline: 'Glass Skin Radiance & Glow',
    mobileSub: 'Medical-Grade 4-in-1 HydraFacial Vortex Infusion',
    tag: 'HydraFacial & Glow'
  },
  {
    id: 'clinical-laser-perfection',
    image: '/images/hero_laser_woman.jpg',
    alt: 'US-FDA Laser Reduction and Skin Toning - Medicare Clinic',
    titleNavy: 'Clinical Precision,',
    titleBerry: 'Permanent Smooth.',
    highlights: [
      'US-FDA Triple-Wavelength Painless Laser Reduction',
      'Targeted Follicle & Deep Melanin Breakdown',
      'Certified Safe for Indian Skin (Fitzpatrick IV-VI)'
    ],
    btnPrimary: {
      text: 'Discover Laser Treatments',
      href: '/treatments/laser/laser-hair-reduction/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to enquire about US-FDA Laser Reduction.',
    mobileHeadline: 'Painless US-FDA Laser Care',
    mobileSub: 'Permanent Smooth Skin & Deep Pigment Toning',
    tag: 'US-FDA Lasers'
  },
  {
    id: 'renewed-texture-peels',
    image: '/images/medical_peel_glow.jpg',
    alt: 'Clinical Chemical Peels and Collagen Renewal - Medicare Clinic',
    titleNavy: 'Renewed Texture,',
    titleBerry: 'Youthful Tone.',
    highlights: [
      'Dermatologist-Formulated Customized Peels',
      'Cellular Exfoliation for Melasma & Pigmentation',
      'Stimulates Fresh Collagen with Active Radiance'
    ],
    btnPrimary: {
      text: 'Explore Clinical Peels',
      href: '/treatments/skin/chemical-peel/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to know more about Dermatologist Peels.',
    mobileHeadline: 'Renewed Texture & Tone',
    mobileSub: 'Dermatologist Peels for Melasma & Glow',
    tag: 'Clinical Peels'
  },
  {
    id: 'expert-dermatology-clinic',
    image: '/images/hero_radiant_skin_clinic.jpg',
    alt: 'Senior Dermatologist Consultation - Dr. Sujay M at Medicare Clinic',
    titleNavy: 'Doctor-Led Care,',
    titleBerry: 'Lasting Results.',
    highlights: [
      'Personal 1-on-1 Consultation with Dr. Sujay M (MBBS, DVD)',
      'Comprehensive Dermoscopic & Scalp Evaluation',
      'Affordable Clinical Excellence in South Bengaluru'
    ],
    btnPrimary: {
      text: 'Consult Dr. Sujay M',
      href: '/doctor/'
    },
    whatsappText: 'Hello Medicare Skin Clinic, I would like to schedule a consultation with Dr. Sujay M.',
    mobileHeadline: 'Doctor-Led Clinical Excellence',
    mobileSub: 'Direct consultation with Dr. Sujay M (MBBS, DVD)',
    tag: 'Dr. Sujay M (DVD)'
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
    title: 'Permanent Laser',
    category: 'Lasers',
    tag: 'US-FDA Painless',
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

  // Auto-advance images and synchronized text every 5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
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
      nextSlide(); // Swiped left -> next slide
    } else if (diff < -45) {
      prevSlide(); // Swiped right -> prev slide
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
      className="hero-reference-slider-section hero-classic-banner"
      aria-label="Medicare Skin & Cosmetic Clinic - Healthy Skin, Beautiful You"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================================
          DESKTOP VIEW: FULL-SCREEN CLINICAL HERO BANNER
          ========================================================================= */}
      <div className="hero-desktop-view-wrap">
        {/* Full-Screen Multi-Image Layer with Smooth Fade Transitions */}
        <div className="hero-fullscreen-bg-layer" aria-hidden="true">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={`desktop-bg-${slide.id}`}
              className={`hero-fullscreen-slide ${idx === activeIndex ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-fullscreen-img"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          {/* Subtle Warm Luxury Gradient: Keeps text perfectly legible on the left while keeping the photo 100% vibrant on the right */}
          <div className="hero-fullscreen-gradient-overlay" />
        </div>

        {/* Content Container: Aligned with the header logo, perfectly spaced */}
        <div className="container hero-fullscreen-container">
          <div className="hero-desktop-text-col">
            <div key={currentSlide.id} className="hero-classic-animated-content">
              {/* Category Eyebrow Pill */}
              <div className="hero-desktop-eyebrow">
                <span className="eyebrow-pulse-dot" />
                <span>{currentSlide.tag}</span>
              </div>

              <h1 className="hero-classic-title">
                <span className="title-line-navy">{currentSlide.titleNavy}</span>
                <span className="title-line-berry">{currentSlide.titleBerry}</span>
              </h1>

              <div className="hero-classic-highlights">
                {currentSlide.highlights.map((item, i) => (
                  <p key={i} className="hero-highlight-item">
                    <span className="highlight-check">✓</span> {item}
                  </p>
                ))}
              </div>

              <div className="hero-classic-actions">
                <Link
                  href={currentSlide.btnPrimary.href}
                  className="hero-classic-btn-primary"
                  id="hero-book-appointment-btn"
                >
                  {currentSlide.btnPrimary.text}
                </Link>

                <a
                  href={waLink(currentSlide.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-classic-btn-whatsapp"
                  aria-label="Direct WhatsApp Consultation Request"
                >
                  <WhatsAppIcon size={16} color="#25D366" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Desktop Slide Navigation Controls */}
            <div className="hero-classic-slide-nav" aria-label="Hero slider pagination">
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
                    aria-label={`Go to slide ${idx + 1}: ${slide.titleNavy} ${slide.titleBerry}`}
                    title={`${slide.titleNavy} ${slide.titleBerry}`}
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
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: SYNCHRONIZED APP EXPERIENCE
          ========================================================================= */}
      <div className="hero-mobile-view-wrap">
        <div className="hero-mobile-container">
          {/* Mobile Hero Feature Slide: Stacked Layout (Image on Top, Caption on Bottom) */}
          <div
            className="hero-app-showcase-slide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Clinical Image Viewport */}
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
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
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

          {/* 4. "Explore by Skin Concern" Section (Reference Screenshot 2 & 5) */}
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

            {/* Horizontal Swipeable Protocol Cards (Reference Screenshot 2 & 5) */}
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

          {/* 5. Fast Action Shortcuts for Mobile */}
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
