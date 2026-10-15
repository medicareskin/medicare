import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Calendar, Award, Star, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 0,
    titleLine1: "Dermatologist-Led",
    titleLine2: "Skin, Hair & Laser Care.",
    tagline: "EXPERT DERMATOLOGY IN SOUTH BENGALURU",
    support: "Personalised care for acne scars, pigmentation, hair concerns and aesthetic treatments, guided by Dr. Sujay M, MBBS, DDVL.",
    features: [
      "Guided by Dr. Sujay M, MBBS, DDVL (18+ Yrs)",
      "Bangalore Medical College Postgraduate (2005)",
      "US-FDA Approved Laser & Dermal Suites"
    ],
    image: "/images/imageye___-_imgi_3_banner1.webp",
    floatingBadge: { icon: "award", text: "Dr. Sujay M, MBBS DDVL" }
  },
  {
    id: 1,
    titleLine1: "Acne Scar",
    titleLine2: "Revision Suite.",
    tagline: "TARGETED DERMAL RECONSTRUCTION",
    support: "Clinical subcision, fractional resurfacing, and MNRF for pitted and rolling acne scars.",
    features: [
      "Trusted Skin Clinic in JP Nagar & Yelachenahalli",
      "Dr. Sujay M, MBBS DDVL Specialist",
      "Subcision, MNRF & Fractional Resurfacing"
    ],
    image: "/images/imageye___-_imgi_2_banner3.webp",
    floatingBadge: { icon: "star", text: "5.0 ★ Acne Clinic" }
  },
  {
    id: 2,
    titleLine1: "Painless Laser",
    titleLine2: "Hair Reduction.",
    tagline: "TRIPLE WAVELENGTH ICE-COOL TECH",
    support: "US-FDA cleared diode cooling laser technology safe for all Indian skin types.",
    features: [
      "★ ★ ★ ★ ★ 5.0 Google Verified Reviews",
      "Safe for All Indian Skin Tones",
      "10,000+ Successful Procedures"
    ],
    image: "/images/imageye___-_imgi_4_banner2.webp",
    floatingBadge: { icon: "shield", text: "US-FDA Approved" }
  }
];

export default function HeroSlider({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState('next');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Auto slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIdx((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIdx ? 'next' : 'prev');
    setCurrentIdx(index);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hero-slider-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'min(780px, 86vh)',
        height: 'min(780px, 86vh)',
        background: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        perspective: '1400px'
      }}
    >
      {/* 3D Perspective Slides */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIdx;
        const isPrev = (idx === currentIdx - 1) || (currentIdx === 0 && idx === HERO_SLIDES.length - 1);
        
        let slideTransform = 'perspective(1400px) translateZ(0) scale(1) rotateY(0deg)';
        if (!isActive) {
          if (isPrev) {
            slideTransform = 'perspective(1400px) translateZ(-160px) scale(0.92) rotateY(16deg) translateX(-12%)';
          } else {
            slideTransform = 'perspective(1400px) translateZ(-160px) scale(0.92) rotateY(-16deg) translateX(12%)';
          }
        }

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
              transform: slideTransform,
              transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.9s ease',
              display: 'flex',
              alignItems: 'center',
              transformStyle: 'preserve-3d',
              zIndex: isActive ? 5 : 1
            }}
          >
            {/* Cinematic Background Layer with 3D Parallax Shift */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                overflow: 'hidden'
              }}
            >
              <img
                src={slide.image}
                alt={`${slide.titleLine1} ${slide.titleLine2}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transform: isActive
                    ? `scale(1.05) translate(${tilt.x * -12}px, ${tilt.y * -8}px)`
                    : 'scale(1.0)',
                  transition: isHovering
                    ? 'transform 0.25s ease-out'
                    : 'transform 6s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: 'contrast(102%) brightness(99%)'
                }}
              />
              {/* Subtle Light Frosted Vignette for Clean Contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 45%, rgba(255,255,255,0.1) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* 3D Liquid Glass Card Overlay with Real-time Mouse Parallax Tilt */}
            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
              <div
                className="hero-glass-card hero-3d-interactive-card"
                style={{
                  maxWidth: '570px',
                  background: 'rgba(255, 255, 255, 0.74)',
                  backdropFilter: 'blur(34px) saturate(210%)',
                  WebkitBackdropFilter: 'blur(34px) saturate(210%)',
                  padding: '44px 46px',
                  borderRadius: '30px',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: `
                    0 28px 70px rgba(148, 40, 118, ${0.14 + Math.abs(tilt.x) * 0.05}),
                    0 6px 24px rgba(43, 27, 77, 0.05),
                    inset 0 2px 4px rgba(255, 255, 255, 1),
                    inset 0 -2px 4px rgba(148, 40, 118, 0.06)
                  `,
                  transform: isActive
                    ? `perspective(1100px) rotateX(${tilt.y * -9}deg) rotateY(${tilt.x * 9}deg) translateZ(20px)`
                    : 'perspective(1100px) rotateX(10deg) translateZ(-40px)',
                  opacity: isActive ? 1 : 0,
                  transition: isHovering
                    ? 'transform 0.15s ease-out, box-shadow 0.25s ease'
                    : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* 3D Popped Out Tagline Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.82)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: '6px 16px',
                    borderRadius: '24px',
                    border: '1px solid rgba(148, 40, 118, 0.2)',
                    marginBottom: '18px',
                    boxShadow: '0 4px 14px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)',
                    transform: 'translateZ(30px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <Sparkles size={14} color="#942876" />
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#942876' }}>
                    {slide.tagline}
                  </span>
                </div>

                {/* Main Heading with 3D Depth */}
                <h1
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '54px',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: '#2B1B4D',
                    marginBottom: '20px',
                    transform: 'translateZ(40px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {slide.titleLine1}
                  <br />
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      textShadow: '0 8px 24px rgba(148, 40, 118, 0.15)'
                    }}
                  >
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Staggered Multi-Plane 3D Feature Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
                    transform: 'translateZ(25px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {slide.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        fontSize: '15px',
                        fontWeight: feat.includes('★') ? 700 : 600,
                        color: feat.includes('★') ? '#2B1B4D' : '#3D2548',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(255, 255, 255, 0.78)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '9px 20px',
                        borderRadius: '30px',
                        border: '1.5px solid rgba(255, 255, 255, 0.95)',
                        width: 'fit-content',
                        boxShadow: '0 6px 18px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)',
                        transform: isActive ? `translateZ(${20 + fIdx * 10}px) translateX(0)` : 'translateX(-20px)',
                        opacity: isActive ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + fIdx * 0.1}s`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {feat.includes('★') ? (
                        <Star size={16} fill="#FFB800" color="#FFB800" />
                      ) : (
                        <CheckCircle2 size={16} color="#942876" />
                      )}
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* 3D Action Dual CTA Buttons & Local Landmark Cue */}
                <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button
                      className="slide-cta-btn btn-3d-lift"
                      onClick={onOpenBooking}
                      style={{
                        background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                        color: '#FFFFFF',
                        padding: '16px 34px',
                        borderRadius: '50px',
                        fontSize: '15.5px',
                        fontWeight: 700,
                        border: '1.5px solid rgba(255, 255, 255, 0.35)',
                        cursor: 'pointer',
                        boxShadow: '0 12px 32px rgba(148, 40, 118, 0.36), inset 0 1.5px 2px rgba(255, 255, 255, 0.6)',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <Calendar size={18} /> Book a Consultation
                    </button>

                    <a
                      href="tel:+919242855707"
                      className="btn-3d-tactile"
                      style={{
                        background: 'rgba(255, 255, 255, 0.88)',
                        backdropFilter: 'blur(16px)',
                        color: '#2B1B4D',
                        padding: '15px 26px',
                        borderRadius: '50px',
                        fontSize: '15px',
                        fontWeight: 700,
                        border: '1.5px solid rgba(148, 40, 118, 0.25)',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(148, 40, 118, 0.1), inset 0 1px 2px rgba(255, 255, 255, 1)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Call Our Clinic
                    </a>
                  </div>

                  {/* Local Landmark Cue as specified in section 1.2 */}
                  <div
                    style={{
                      marginTop: '16px',
                      fontSize: '12.5px',
                      color: '#5C4D68',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>🚆 <strong>Location Cue:</strong> Near Yelachenahalli Metro Station, South Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Specular Badge on Right with Levitation Effect */}
            <div
              className="hero-floating-badge"
              style={{
                position: 'absolute',
                top: '22%',
                right: '8%',
                zIndex: 12,
                background: 'rgba(255, 255, 255, 0.82)',
                backdropFilter: 'blur(28px) saturate(200%)',
                WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                padding: '14px 24px',
                borderRadius: '24px',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 18px 45px rgba(148, 40, 118, 0.16), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transform: `perspective(1000px) translate3d(${tilt.x * -16}px, ${tilt.y * -16}px, 60px)`,
                transition: 'transform 0.25s ease-out',
                pointerEvents: 'none'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  boxShadow: '0 4px 12px rgba(148, 40, 118, 0.3)'
                }}
              >
                {slide.floatingBadge.icon === 'award' && <Award size={20} />}
                {slide.floatingBadge.icon === 'star' && <Star size={20} fill="#FFF" />}
                {slide.floatingBadge.icon === 'shield' && <ShieldCheck size={20} />}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Medicare Verified
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D' }}>
                  {slide.floatingBadge.text}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 3D Frosted Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="hero-3d-arrow-btn hero-3d-arrow-left"
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 25,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 28px rgba(148, 40, 118, 0.16), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#2B1B4D',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="hero-3d-arrow-btn hero-3d-arrow-right"
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 25,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 28px rgba(148, 40, 118, 0.16), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#2B1B4D',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* 3D Carousel Navigation Pill Indicators (Bottom Center) */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 30,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '10px 20px',
          borderRadius: '30px',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 28px rgba(148, 40, 118, 0.12), inset 0 1px 2px rgba(255, 255, 255, 1)'
        }}
      >
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Show slide ${idx + 1}`}
            aria-current={idx === currentIdx ? 'true' : undefined}
            onClick={() => goToSlide(idx)}
            style={{
              width: idx === currentIdx ? '36px' : '12px',
              height: '10px',
              borderRadius: '6px',
              background: idx === currentIdx
                ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)'
                : 'rgba(148, 40, 118, 0.22)',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: idx === currentIdx ? '0 2px 8px rgba(148, 40, 118, 0.4)' : 'none'
            }}
          />
        ))}
      </div>
    </section>
  );
}
