'use client';
import { useRef } from 'react';
import Link from 'next/link';

interface SlideItem {
  id: string;
  line1: string;
  line2: string;
  image: string;
  pillTitle: string;
  pillPrice: string;
  href: string;
  bgGradient: string;
  glassColor: string;
  objectPosition?: string;
}

const FEATURE_SLIDES: SlideItem[] = [
  {
    id: 'hair-trigger',
    line1: 'Stop treating the hair.',
    line2: 'Find the trigger.',
    image: '/images/slide_hair_new.jpg',
    pillTitle: 'Hair Fall Checkups',
    pillPrice: 'Starts at ₹2399',
    href: '/treatments/hair/hair-loss-treatment/',
    bgGradient: 'linear-gradient(180deg, #F5ECE2 0%, #E8DDD0 100%)',
    glassColor: 'rgba(52, 28, 18, 0.78)',
    objectPosition: 'center 12%'
  },
  {
    id: 'acne-root',
    line1: 'Stop covering breakouts.',
    line2: 'Clear the root cause.',
    image: '/images/slide_acne_new.jpg',
    pillTitle: 'Acne & Scar Checkups',
    pillPrice: 'Starts at ₹1499',
    href: '/treatments/skin/acne-treatment/',
    bgGradient: 'linear-gradient(180deg, #F7EFE6 0%, #ECE1D5 100%)',
    glassColor: 'rgba(43, 14, 76, 0.82)',
    objectPosition: 'center 15%'
  },
  {
    id: 'pigmentation-melanin',
    line1: 'Stop fading dark spots.',
    line2: 'Target deep melanin.',
    image: '/images/slide_pigment_new.jpg',
    pillTitle: 'Pigmentation Protocol',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/skin/pigmentation-treatment/',
    bgGradient: 'linear-gradient(180deg, #F8EFEA 0%, #ECE0D8 100%)',
    glassColor: 'rgba(48, 20, 38, 0.82)',
    objectPosition: 'center top'
  },
  {
    id: 'hydrafacial-glow',
    line1: 'Dull & dehydrated skin?',
    line2: 'Unlock clinical glow.',
    image: '/images/slide_hydra_glow_new.jpg',
    pillTitle: 'HydraFacial Medi-Facial',
    pillPrice: 'Starts at ₹2499',
    href: '/treatments/aesthetics/hydrafacial/',
    bgGradient: 'linear-gradient(180deg, #F5EEF9 0%, #E8D9F0 100%)',
    glassColor: 'rgba(43, 14, 76, 0.82)',
    objectPosition: 'center 8%'
  },
  {
    id: 'laser-hair',
    line1: 'Stop waxing & shaving.',
    line2: 'Permanent smooth skin.',
    image: '/images/slide_laser_new.jpg',
    pillTitle: 'US FDA Laser Reduction',
    pillPrice: 'Starts at ₹1999',
    href: '/treatments/laser/laser-hair-reduction/',
    bgGradient: 'linear-gradient(180deg, #E9EEF4 0%, #D8E1EC 100%)',
    glassColor: 'rgba(25, 34, 54, 0.82)',
    objectPosition: 'center center'
  },
  {
    id: 'acne-scars',
    line1: 'Stop living with scars.',
    line2: 'Rebuild smooth texture.',
    image: '/images/slide_scar_model_new.jpg',
    pillTitle: 'Acne Scar Resurfacing',
    pillPrice: 'Starts at ₹2999',
    href: '/treatments/skin/acne-scar-treatment/',
    bgGradient: 'linear-gradient(180deg, #ECE7F2 0%, #DCD2E7 100%)',
    glassColor: 'rgba(43, 14, 76, 0.82)',
    objectPosition: 'center top'
  },
  {
    id: 'chemical-peels',
    line1: 'Uneven tone & dullness?',
    line2: 'Clinician peel renewal.',
    image: '/images/slide_peel_new.jpg',
    pillTitle: 'Medical Chemical Peels',
    pillPrice: 'Starts at ₹1800',
    href: '/treatments/aesthetics/chemical-peels/',
    bgGradient: 'linear-gradient(180deg, #FDF4EB 0%, #F3E4D6 100%)',
    glassColor: 'rgba(52, 28, 18, 0.82)',
    objectPosition: 'center top'
  },
  {
    id: 'skin-allergies',
    line1: 'Persistent itchy rashes?',
    line2: 'Doctor diagnosis.',
    image: '/images/imageye___-_imgi_23_Allergies.webp',
    pillTitle: 'Dermatology Checkups',
    pillPrice: 'Starts at ₹600',
    href: '/treatments/medical-dermatology/skin-allergies/',
    bgGradient: 'linear-gradient(180deg, #F9F1EF 0%, #ECDEDB 100%)',
    glassColor: 'rgba(54, 22, 28, 0.82)'
  },
  {
    id: 'vitiligo-care',
    line1: 'White patches on skin?',
    line2: 'Repigmentation care.',
    image: '/images/imageye___-_imgi_21_Vitiligo.webp',
    pillTitle: 'Vitiligo Medical Therapy',
    pillPrice: 'Starts at ₹999',
    href: '/treatments/medical-dermatology/vitiligo/',
    bgGradient: 'linear-gradient(180deg, #ECE6F5 0%, #DBD0EB 100%)',
    glassColor: 'rgba(43, 14, 76, 0.82)'
  },
  {
    id: 'anti-ageing',
    line1: 'Fine lines & laxity?',
    line2: 'Collagen remodeling.',
    image: '/images/imageye___-_imgi_9_skin-tightening-01.webp',
    pillTitle: 'Skin Tightening & HIFU',
    pillPrice: 'Starts at ₹3499',
    href: '/treatments/aesthetics/skin-tightening/',
    bgGradient: 'linear-gradient(180deg, #F5EFF2 0%, #E7DDE2 100%)',
    glassColor: 'rgba(50, 18, 40, 0.82)'
  }
];

export function HeroFeatureSlides() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="feature-slides-section" id="specialised-protocols" aria-label="Featured clinical protocols">
      <div className="container">
        <div className="feature-slides-header">
          <div>
            <span className="eyebrow-pill">CLINICAL EXCELLENCE</span>
            <h2 className="feature-slides-title">Specialised Dermatology Protocols &amp; Checkups</h2>
          </div>
          <div className="carousel-nav-controls">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('left')}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll('right')}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Horizontal scroll track matching User Reference Image 6 */}
        <div className="feature-slides-track" ref={scrollRef}>
          {FEATURE_SLIDES.map((slide) => (
            <Link
              key={slide.id}
              href={slide.href}
              className="feature-slide-card"
              style={{ background: slide.bgGradient }}
            >
              {/* Top Bold 2-Line Headline matching reference image */}
              <div className="feature-card-header">
                <h3 className="feature-card-headline">
                  <span>{slide.line1}</span>
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
                  loading="lazy"
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
                <div className="glass-panel-btn" aria-hidden="true">
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
