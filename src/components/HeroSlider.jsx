import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Award, Star, CheckCircle2 } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 0,
    titleLine1: "Healthy Skin,",
    titleLine2: "Beautiful You.",
    features: [
      "18+ Years Experience",
      "10,000+ Patients Treated",
      "Affordable & Clinically Proven"
    ],
    image: "/images/imageye___-_imgi_3_banner1.webp"
  },
  {
    id: 1,
    titleLine1: "Acne Scar",
    titleLine2: "Treatment",
    features: [
      "Trusted Skin Clinic in JP Nagar, Bangalore",
      "Dr. Sujay M, MBBS DDVL"
    ],
    image: "/images/imageye___-_imgi_2_banner3.webp"
  },
  {
    id: 2,
    titleLine1: "Laser Hair",
    titleLine2: "Removal",
    features: [
      "★ ★ ★ ★ ★ 5.0 Google Reviews",
      "18 Yrs Experience",
      "10,000+ Procedures"
    ],
    image: "/images/imageye___-_imgi_4_banner2.webp"
  }
];

export default function HeroSlider({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIdx(index);
  };

  return (
    <section
      className="hero-slider-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        height: '85vh',
        background: '#F4ECE7',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.8s ease',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {/* Slide Background Image */}
            <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
              <img
                src={slide.image}
                alt={`${slide.titleLine1} ${slide.titleLine2}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 6s ease-out'
                }}
              />
            </div>

            {/* 3D Liquid Glass Card Overlay for Animated Slide Text */}
            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
              <div
                className="hero-glass-card"
                style={{
                  maxWidth: '560px',
                  background: 'rgba(255, 255, 255, 0.76)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  padding: '40px 44px',
                  borderRadius: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 25px 60px rgba(43, 27, 77, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                  transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isActive ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '54px',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: '#1C1445',
                    marginBottom: '20px'
                  }}
                >
                  {slide.titleLine1}
                  <br />
                  <span style={{ color: '#8C2668', background: 'linear-gradient(135deg, #8C2668 0%, #C8509B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Animated Glass Badges for Slide Features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                  {slide.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        fontSize: '16px',
                        fontWeight: feat.includes('★') ? 700 : 600,
                        color: feat.includes('★') ? '#1C1445' : '#2B1B4D',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(255, 255, 255, 0.7)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.9)',
                        width: 'fit-content',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                        transform: isActive ? 'translateX(0)' : 'translateX(-15px)',
                        opacity: isActive ? 1 : 0,
                        transition: `all 0.5s ease ${0.2 + fIdx * 0.1}s`
                      }}
                    >
                      {feat.includes('★') ? <Star size={16} fill="#FFB800" color="#FFB800" /> : <CheckCircle2 size={16} color="#8C2668" />}
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="slide-cta-btn"
                  onClick={onOpenBooking}
                  style={{
                    background: 'linear-gradient(135deg, #271654 0%, #8C2668 100%)',
                    color: '#FFFFFF',
                    padding: '16px 36px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(39, 22, 84, 0.35)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <Calendar size={18} /> Book an Appointment
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Carousel Navigation Dots (Bottom Center) */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 30,
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          padding: '8px 18px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}
      >
        {HERO_SLIDES.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              width: idx === currentIdx ? '32px' : '10px',
              height: '10px',
              borderRadius: idx === currentIdx ? '5px' : '50%',
              background: idx === currentIdx ? '#8C2668' : 'rgba(39, 22, 84, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
