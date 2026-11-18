'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

interface SlideItem {
  id: string;
  category: string;
  line1: string;
  line2: string;
  image: string;
  pillTitle: string;
  pillPrice: string;
  href: string;
  bgGradient: string;
  glassColor: string;
  accentBtnColor?: string;
  objectPosition?: string;
}

const FEATURE_SLIDES: SlideItem[] = [
  {
    id: 'hair-trigger',
    category: 'Hair Fall',
    line1: 'Stop treating the hair.',
    line2: 'Find the trigger.',
    image: '/images/slide_hair_new.jpg',
    pillTitle: 'Hair Fall Checkups',
    pillPrice: 'Starts at ₹2399',
    href: '/treatments/hair/hair-loss-treatment/',
    bgGradient: 'linear-gradient(180deg, #F9F1E7 0%, #EEDECF 100%)',
    glassColor: 'rgba(40, 16, 36, 0.90)',
    accentBtnColor: '#922370', // Vibrant berry magenta matching reference
    objectPosition: 'center 14%'
  },
  {
    id: 'acne-root',
    category: 'Acne & Scars',
    line1: 'Stop covering breakouts.',
    line2: 'Clear the root cause.',
    image: '/images/slide_acne_new.jpg',
    pillTitle: 'Acne & Scar Checkups',
    pillPrice: 'Starts at ₹1499',
    href: '/treatments/skin/acne-treatment/',
    bgGradient: 'linear-gradient(180deg, #F7EFE8 0%, #EFE1D5 100%)',
    glassColor: 'rgba(38, 14, 52, 0.90)',
    accentBtnColor: '#280F33',
    objectPosition: 'center 16%'
  },
  {
    id: 'pigmentation-melanin',
    category: 'Pigmentation',
    line1: 'Stop fading dark spots.',
    line2: 'Target deep melanin.',
    image: '/images/slide_pigment_new.jpg',
    pillTitle: 'Pigmentation Protocol',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/skin/pigmentation-treatment/',
    bgGradient: 'linear-gradient(180deg, #F8EFEB 0%, #EFE3D8 100%)',
    glassColor: 'rgba(42, 16, 46, 0.90)',
    accentBtnColor: '#280F33',
    objectPosition: 'center 22%'
  },
  {
    id: 'hydrafacial-glow',
    category: 'HydraFacial Glow',
    line1: 'Dull & dehydrated skin?',
    line2: 'Unlock clinical glow.',
    image: '/images/slide_hydra_glow_new.jpg',
    pillTitle: 'HydraFacial Medi-Facial',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/aesthetics/hydrafacial/',
    bgGradient: 'linear-gradient(180deg, #F6EEF8 0%, #EBDAF0 100%)',
    glassColor: 'rgba(38, 14, 52, 0.90)',
    accentBtnColor: '#280F33',
    objectPosition: 'center 8%'
  },
  {
    id: 'laser-hair',
    category: 'Laser Care',
    line1: 'Stop waxing & shaving.',
    line2: 'Permanent smooth skin.',
    image: '/images/slide_laser_new.jpg',
    pillTitle: 'US-FDA Laser Reduction',
    pillPrice: 'Starts at ₹1999',
    href: '/treatments/laser/laser-hair-reduction/',
    bgGradient: 'linear-gradient(180deg, #EBF1F7 0%, #DDE6F0 100%)',
    glassColor: 'rgba(25, 34, 54, 0.90)',
    accentBtnColor: '#1A2538',
    objectPosition: 'center center'
  },
  {
    id: 'acne-scars',
    category: 'Acne & Scars',
    line1: 'Stop living with scars.',
    line2: 'Rebuild smooth texture.',
    image: '/images/slide_scar_model_new.jpg',
    pillTitle: 'Acne Scar Resurfacing',
    pillPrice: 'Starts at ₹2999',
    href: '/treatments/skin/acne-scar-treatment/',
    bgGradient: 'linear-gradient(180deg, #EDE7F3 0%, #DDD3E7 100%)',
    glassColor: 'rgba(38, 14, 52, 0.90)',
    accentBtnColor: '#280F33',
    objectPosition: 'center 14%'
  },
  {
    id: 'chemical-peels',
    category: 'Pigmentation',
    line1: 'Uneven tone & dullness?',
    line2: 'Clinician peel renewal.',
    image: '/images/slide_peel_new.jpg',
    pillTitle: 'Medical Chemical Peels',
    pillPrice: 'Starts at ₹1800',
    href: '/treatments/aesthetics/chemical-peels/',
    bgGradient: 'linear-gradient(180deg, #FDF4EB 0%, #F5E5D5 100%)',
    glassColor: 'rgba(46, 22, 14, 0.90)',
    accentBtnColor: '#361A10',
    objectPosition: 'center top'
  },
  {
    id: 'skin-allergies',
    category: 'Medical Dermatology',
    line1: 'Persistent itchy rashes?',
    line2: 'Doctor diagnosis.',
    image: '/images/cat_medical_dermatology.jpg',
    pillTitle: 'Dermatology Checkups',
    pillPrice: 'Starts at ₹600',
    href: '/treatments/medical-dermatology/skin-allergies/',
    bgGradient: 'linear-gradient(180deg, #F9F1EF 0%, #EBDEDB 100%)',
    glassColor: 'rgba(50, 20, 26, 0.90)',
    accentBtnColor: '#381418',
    objectPosition: 'center 18%'
  },
  {
    id: 'vitiligo-care',
    category: 'Medical Dermatology',
    line1: 'White patches on skin?',
    line2: 'Repigmentation care.',
    image: '/images/imageye___-_imgi_21_Vitiligo.webp',
    pillTitle: 'Vitiligo Medical Therapy',
    pillPrice: 'Starts at ₹999',
    href: '/treatments/medical-dermatology/vitiligo/',
    bgGradient: 'linear-gradient(180deg, #ECE6F5 0%, #DBD0EB 100%)',
    glassColor: 'rgba(38, 14, 52, 0.90)',
    accentBtnColor: '#280F33'
  },
  {
    id: 'anti-ageing',
    category: 'Aesthetics',
    line1: 'Fine lines & laxity?',
    line2: 'Collagen remodeling.',
    image: '/images/imageye___-_imgi_9_skin-tightening-01.webp',
    pillTitle: 'Skin Tightening & HIFU',
    pillPrice: 'Starts at ₹3499',
    href: '/treatments/aesthetics/skin-tightening/',
    bgGradient: 'linear-gradient(180deg, #F5EFF2 0%, #E7DDE2 100%)',
    glassColor: 'rgba(46, 16, 36, 0.90)',
    accentBtnColor: '#331024'
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

  const filteredSlides =
    activeCategory === 'All'
      ? FEATURE_SLIDES
      : FEATURE_SLIDES.filter((s) => s.category === activeCategory);

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
        {/* Flagship Hero Header */}
        <div className="feature-slides-header">
          <div className="feature-slides-header-text">
            <div className="feature-slides-eyebrow-row">
              <span className="eyebrow-pill">✦ EVIDENCE-BASED DERMATOLOGY · SOUTH BENGALURU</span>
            </div>
            {asHero ? (
              <h1 className="feature-slides-title">
                Specialised Dermatology Protocols &amp; Checkups
              </h1>
            ) : (
              <h2 className="feature-slides-title">
                Specialised Dermatology Protocols &amp; Checkups
              </h2>
            )}
            <p className="feature-slides-sub">
              Root-cause diagnosis and evidence-based protocols calibrated for South Indian skin phototypes near Yelachenahalli Metro. Guided directly by Dr. (Mrs.) Sujay M (MBBS, DDVL).
            </p>
          </div>

          <div className="carousel-nav-controls" aria-label="Slide controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('left')}
              aria-label="Previous slide"
              title="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('right')}
              aria-label="Next slide"
              title="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="feature-category-pills-row" aria-label="Filter protocols by concern">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`feature-cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Card Track: Matching user uploaded reference image */}
        <div className="feature-slides-track" ref={scrollRef}>
          {filteredSlides.map((slide) => (
            <Link
              key={slide.id}
              href={slide.href}
              className="feature-slide-card"
              style={{ background: slide.bgGradient }}
              title={`${slide.line1} ${slide.line2}`}
            >
              {/* Top Bold 2-Line Headline matching reference image */}
              <div className="feature-card-header">
                <h3 className="feature-card-headline">
                  <span className="feature-card-line1">{slide.line1}</span>
                  <span className="feature-card-line2">{slide.line2}</span>
                </h3>
              </div>

              {/* Patient / Treatment Model Photo */}
              <div className="feature-card-img-wrap">
                <img 
                  src={slide.image} 
                  alt={`${slide.line1} ${slide.line2}`} 
                  className="feature-card-img"
                  style={{ objectPosition: slide.objectPosition || 'center top' }}
                  loading="eager"
                />
              </div>

              {/* Bottom Frosted Glass Pill matching reference image */}
              <div
                className="feature-card-glass-panel"
                style={{ backgroundColor: slide.glassColor }}
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
      </div>
    </section>
  );
}

export default HeroFeatureSlides;
