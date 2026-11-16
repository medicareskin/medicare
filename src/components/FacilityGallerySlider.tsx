'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { site, mapUrl, waLink } from '@/lib/site';

interface FacilitySlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
}

const FACILITY_SLIDES: FacilitySlide[] = [
  {
    id: 'consultation-suite',
    badge: 'CONFIDENTIAL CARE',
    title: 'Private Consultation Suites',
    subtitle: 'Direct 1-on-1 Doctor Assessment',
    description:
      'Quiet, air-conditioned examination suites where Dr. (Mrs.) Sujay M personally conducts dermoscopic evaluations, scalp trichoscopy, and clinical history reviews in complete privacy.',
    image: '/images/clinic_interior_reception.jpg',
    alt: 'Medicare Skin Consultation Suite & Reception in South Bengaluru',
    highlights: ['1-on-1 Dermatologist Evaluation', 'Advanced Dermoscopy Tools', '100% Medical Confidentiality']
  },
  {
    id: 'laser-workstation',
    badge: 'US-FDA CLEARED TECH',
    title: 'Sterile Laser & Energy Operatory',
    subtitle: 'Calibrated for Indian Skin Phototypes',
    description:
      'Equipped with dual-wavelength Q-Switched Nd:YAG lasers, Fractional MNRF systems, and diode platforms configured specifically to prevent post-inflammatory hyperpigmentation.',
    image: '/images/laser_device_console.jpg',
    alt: 'Calibrated Laser Device Console at Medicare Skin Clinic',
    highlights: ['Fitzpatrick IV–VI Safe Parameters', 'Active Sapphire Contact Cooling', 'Sterile Procedural Setup']
  },
  {
    id: 'metro-landmark',
    badge: 'METRO PILLAR 100',
    title: 'Prime Kanakapura Road Landmark',
    subtitle: 'Directly Opposite Yelachenahalli Metro',
    description:
      'Conveniently positioned on 100 Feet Ring Road / Kanakapura Main Road with elevator access, sheltered patient drop-off, and dedicated clinic parking spaces.',
    image: '/images/clinic_location_facade.jpg',
    alt: 'Medicare Skin Clinic Landmark opposite Yelachenahalli Metro Pillar 100',
    highlights: ['1-Min Walk from Metro Exit', 'Dedicated Patient Parking', 'Barrier-Free Elevator Access']
  },
  {
    id: 'hydrafacial-suite',
    badge: 'CLINICAL HYGIENE',
    title: 'Medical HydraFacial & Operatory',
    subtitle: 'Hospital-Grade Single-Use Hygiene',
    description:
      'Rigorous infection-control standards featuring autoclaved medical handpieces, single-use disposable vacuum tips, and medical-grade active ingredient infusions.',
    image: '/images/hydrafacial_procedure.jpg',
    alt: 'Medical-Grade HydraFacial Procedure at Medicare Skin Clinic',
    highlights: ['Sterile Single-Use Tips', 'Medical Antioxidant Infusion', 'Zero Cross-Contamination Risk']
  },
  {
    id: 'doctor-heritage',
    badge: '18+ YEARS PRACTICE',
    title: 'Senior Dermatologist Supervision',
    subtitle: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    description:
      'Continuous South Bengaluru practice since 2006. Every treatment protocol, energy setting, and medication is personally verified by Dr. Sujay M.',
    image: '/images/dr_sujaya.jpeg',
    alt: 'Dr. (Mrs.) Sujay M MBBS DDVL Senior Consultant Dermatologist',
    highlights: ['KMC Registered Dermatologist', 'Root-Cause Clinical Focus', '18+ Years South Bengaluru Trust']
  }
];

export function FacilityGallerySlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const scrollLeft = track.scrollLeft;
    const slideWidth = track.clientWidth * 0.85;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), FACILITY_SLIDES.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const cards = track.getElementsByClassName('facility-slide-card');
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft - 16,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' ? Math.max(0, activeIndex - 1) : Math.min(FACILITY_SLIDES.length - 1, activeIndex + 1);
    scrollToSlide(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', updateActiveIndex, { passive: true });
    return () => track.removeEventListener('scroll', updateActiveIndex);
  }, []);

  return (
    <section className="section soft facility-slider-section" id="clinic-facility" aria-label="Clinical Environment and Facilities">
      <div className="container">
        {/* Header with Navigation Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow-pill">CLINICAL ENVIRONMENT &amp; FACILITY</span>
            <h2 className="section-title" style={{ marginTop: '10px', marginBottom: '12px' }}>
              Designed for Patient Comfort, Hygiene &amp; Confidentiality
            </h2>
            <p className="hero-lede" style={{ margin: 0, fontSize: '1.02rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Directly located opposite Yelachenahalli Metro Station (Pillar 100). Step inside our modern, sanitized dermatology suites equipped with US-FDA cleared energy devices and dedicated doctor consultation rooms.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={activeIndex === 0}
              aria-label="Previous facility photo"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: activeIndex === 0 ? '#F3F4F6' : '#FFFFFF',
                color: activeIndex === 0 ? '#9CA3AF' : 'var(--ink)',
                cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                display: 'grid',
                placeItems: 'center',
                fontSize: '1.25rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={activeIndex === FACILITY_SLIDES.length - 1}
              aria-label="Next facility photo"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: activeIndex === FACILITY_SLIDES.length - 1 ? '#F3F4F6' : '#FFFFFF',
                color: activeIndex === FACILITY_SLIDES.length - 1 ? '#9CA3AF' : 'var(--ink)',
                cursor: activeIndex === FACILITY_SLIDES.length - 1 ? 'not-allowed' : 'pointer',
                display: 'grid',
                placeItems: 'center',
                fontSize: '1.25rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Slide Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: '20px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {FACILITY_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="facility-slide-card"
              style={{
                flex: '0 0 calc(85% - 12px)',
                minWidth: '320px',
                maxWidth: '680px',
                scrollSnapAlign: 'start',
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: index === activeIndex ? '0 12px 36px rgba(21, 63, 57, 0.08)' : '0 4px 16px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease'
              }}
            >
              {/* Photo Box */}
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#F8F6F2' }}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(21, 63, 57, 0.90)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    padding: '6px 12px',
                    borderRadius: '8px'
                  }}
                >
                  {slide.badge}
                </span>
                <span
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--ink)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}
                >
                  {index + 1} / {FACILITY_SLIDES.length}
                </span>
              </div>

              {/* Text & Feature Details */}
              <div style={{ padding: '28px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--magenta)', letterSpacing: '0.03em' }}>
                  {slide.subtitle}
                </span>
                <h3 style={{ fontFamily: 'var(--font-fraunces, serif)', fontSize: '1.45rem', marginTop: '6px', marginBottom: '10px', color: 'var(--ink)' }}>
                  {slide.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {slide.description}
                </p>

                {/* Highlights Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {slide.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        background: 'rgba(21, 63, 57, 0.05)',
                        border: '1px solid rgba(21, 63, 57, 0.12)',
                        color: 'var(--primary, #153F39)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '5px 11px',
                        borderRadius: '6px'
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #F3F4F6' }}>
                  <Link href="/book-appointment/" className="btn primary" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
                    Schedule Visit →
                  </Link>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-secondary)', textDecoration: 'none' }}
                  >
                    View on Maps ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          {FACILITY_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === activeIndex ? '28px' : '9px',
                height: '9px',
                borderRadius: '5px',
                background: idx === activeIndex ? 'var(--primary, #153F39)' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacilityGallerySlider;

