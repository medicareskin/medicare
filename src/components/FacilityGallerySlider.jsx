import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Calendar, Sparkles, Layers } from 'lucide-react';

const SLIDE_IMAGES = [
  { id: 1, src: "/slide-img/1.jpg", title: "Advanced Laser Treatment Suite", tag: "US-FDA Laser Care", desc: "Equipped with state-of-the-art cooling dermatological lasers" },
  { id: 2, src: "/slide-img/2.jpg", title: "Dr. Sujay M Clinical Consultation", tag: "Expert Clinical Care", desc: "Private diagnostic chamber for in-depth trichology & skin analysis" },
  { id: 3, src: "/slide-img/3.jpg", title: "Acne Scar Revision & Subcision", tag: "Targeted Revision", desc: "Precision dermal remodeling with minimal downtime" },
  { id: 4, src: "/slide-img/4.jpg", title: "Growth Factor Scalp Therapy Suite", tag: "Hair Restoration", desc: "Sterile biotherapy suite for autologous and peptide hair stimulation" },
  { id: 5, src: "/slide-img/Scar Treatment.jpg", title: "Acne Scar Resurfacing Session", tag: "Dermabrasion", desc: "Multi-modal microneedling radiofrequency & fractional resurfacing" },
  { id: 6, src: "/slide-img/Skin Allergies 1.jpg", title: "Clinical Patch Testing & Allergy Care", tag: "Allergy Diagnostics", desc: "Standardized allergen battery tests and therapeutic eczema protocols" },
  { id: 7, src: "/slide-img/Skin Infections 1.jpg", title: "Dermatological Diagnosis & Care", tag: "Clinical Science", desc: "Evidence-based medical dermatology for infections & rashes" },
  { id: 8, src: "/slide-img/02ca7a5ac5e40183b9aac44d4de24a60.jpg", title: "US-FDA Diode Hair Removal Suite", tag: "Laser Tech", desc: "Pain-free contact chilled laser treatments for all skin types" },
  { id: 9, src: "/slide-img/13ccee217da9f1337ade58831c6f2fd3.jpg", title: "Medical Chemical Peel & Glow Suite", tag: "Cosmetic Glow", desc: "Customized organic AHA/BHA peels for pigmentation and glow" },
  { id: 10, src: "/slide-img/15123acc861416b880cec2d9edad30d1.jpg", title: "Vitiligo Surgical Grafting Suite", tag: "Vitiligo Surgery", desc: "Specialized non-cultured epidermal cell suspension grafting" },
  { id: 11, src: "/slide-img/5e08dab87e8917ce313789c4ee7df0ba.jpg", title: "Sterile Minor Procedure Room", tag: "Hygiene Standard", desc: "Hospital-grade sterilization with HEPA filtration" },
  { id: 12, src: "/slide-img/98874dd1eae0b34c8798464c6c3f1c7d.jpg", title: "Patient Reception & Wellness Lounge", tag: "Clinic Amenities", desc: "Relaxing frosted glass ambiance with refreshments and seamless check-in" }
];

export default function FacilityGallerySlider({ onOpenBooking }) {
  const [activeIdx, setActiveIdx] = useState(2);
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const stageRef = useRef(null);

  // Auto-scroll through 3D coverflow every 5 seconds if not hovering/interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? SLIDE_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    setTouchStart(null);
  };

  const activeImage = SLIDE_IMAGES[activeIdx];

  return (
    <section
      className="facility-gallery-section"
      style={{
        padding: '90px 0 80px',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(148, 40, 118, 0.22)',
              color: '#942876',
              padding: '7px 22px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              boxShadow: '0 4px 16px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)'
            }}
          >
            <Layers size={15} color="#942876" />
            3D CLINIC TOUR & FACILITY SHOWCASE
          </span>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '42px',
              color: '#2B1B4D',
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}
          >
            Inside Medicare Skin & Cosmetic Clinic
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '680px', margin: '0 auto', lineHeight: '1.6' }}>
            Experience our US-FDA laser treatment suites, consultation chambers, and medical aesthetics spaces.
            Swipe or click any slide to bring it to center focus in 3D.
          </p>
        </div>

        {/* 3D Coverflow Stage Viewport */}
        <div
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            height: '460px',
            perspective: '1300px',
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px 0 30px'
          }}
        >
          {/* Navigation Controls Left & Right */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide in 3D"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%) translateZ(120px)',
              zIndex: 50,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 12px 30px rgba(148, 40, 118, 0.2), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#2B1B4D',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide in 3D"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%) translateZ(120px)',
              zIndex: 50,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 12px 30px rgba(148, 40, 118, 0.2), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#2B1B4D',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* 3D Coverflow Slides Track */}
          {SLIDE_IMAGES.map((img, idx) => {
            const offset = idx - activeIdx;
            const absOffset = Math.abs(offset);
            
            // Only render items within visible distance to optimize performance
            if (absOffset > 4 && absOffset < SLIDE_IMAGES.length - 4) {
              return null;
            }

            // Normalise circular loop offset for seamless wrapping
            let displayOffset = offset;
            if (offset > SLIDE_IMAGES.length / 2) displayOffset = offset - SLIDE_IMAGES.length;
            if (offset < -SLIDE_IMAGES.length / 2) displayOffset = offset + SLIDE_IMAGES.length;

            const isCenter = displayOffset === 0;
            const zIndex = 30 - Math.min(absOffset, 10);
            
            // 3D positioning coordinates
            let translateX = displayOffset * 220;
            let translateZ = isCenter ? 80 : -Math.min(absOffset * 85, 280);
            let rotateY = isCenter ? 0 : displayOffset > 0 ? -32 : 32;
            let scale = isCenter ? 1.08 : Math.max(0.76, 1 - absOffset * 0.1);
            let opacity = isCenter ? 1 : Math.max(0.3, 0.9 - absOffset * 0.22);

            return (
              <div
                key={img.id}
                onClick={() => {
                  if (isCenter) {
                    setActiveLightbox(img);
                  } else {
                    setActiveIdx(idx);
                  }
                }}
                className={`coverflow-3d-card ${isCenter ? 'is-active-center' : ''}`}
                style={{
                  position: 'absolute',
                  width: 'min(440px, 78vw)',
                  height: '320px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease, box-shadow 0.65s ease',
                  zIndex: zIndex,
                  opacity: opacity,
                  background: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(24px) saturate(190%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(190%)',
                  border: isCenter
                    ? '2px solid rgba(255, 255, 255, 1)'
                    : '1.5px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: isCenter
                    ? '0 32px 80px rgba(148, 40, 118, 0.3), 0 8px 24px rgba(43, 27, 77, 0.08), inset 0 2px 4px rgba(255, 255, 255, 1)'
                    : '0 16px 36px rgba(43, 27, 77, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Image Viewport */}
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      transform: isCenter ? 'scale(1.02)' : 'scale(1)',
                      transition: 'transform 0.5s ease',
                      filter: isCenter ? 'none' : 'brightness(90%) blur(0.5px)'
                    }}
                  />

                  {/* Gradient Overlay for Legibility */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(43, 27, 77, 0.78) 0%, rgba(43, 27, 77, 0.2) 50%, transparent 100%)'
                    }}
                  />

                  {/* Top Category Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(255, 255, 255, 0.88)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      color: '#942876',
                      padding: '5px 14px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    {img.tag}
                  </div>

                  {/* Expand Fullscreen Button */}
                  {isCenter && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'rgba(255, 255, 255, 0.88)',
                        backdropFilter: 'blur(12px)',
                        color: '#2B1B4D',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
                      }}
                    >
                      <Maximize2 size={16} color="#942876" />
                    </div>
                  )}

                  {/* Bottom Title & Details */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '20px 24px'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: isCenter ? '20px' : '16px',
                        color: '#FFFFFF',
                        margin: 0,
                        textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        lineHeight: 1.3
                      }}
                    >
                      {img.title}
                    </h3>
                    {isCenter && (
                      <p
                        style={{
                          fontSize: '12px',
                          color: 'rgba(255, 255, 255, 0.88)',
                          margin: '6px 0 0',
                          lineHeight: 1.4
                        }}
                      >
                        {img.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Details & Actions for the Currently Active Suite */}
        {activeImage && (
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.78)',
              backdropFilter: 'blur(28px) saturate(200%)',
              WebkitBackdropFilter: 'blur(28px) saturate(200%)',
              padding: '22px 32px',
              borderRadius: '24px',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 16px 40px rgba(148, 40, 118, 0.1), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                Active Facility ({activeIdx + 1} of {SLIDE_IMAGES.length})
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#2B1B4D', margin: 0 }}>
                {activeImage.title}
              </h4>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="btn-secondary"
                onClick={() => setActiveLightbox(activeImage)}
                style={{
                  padding: '10px 18px',
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Maximize2 size={15} /> Expand View
              </button>
              <button
                className="btn-primary"
                onClick={onOpenBooking}
                style={{
                  padding: '10px 22px',
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Calendar size={15} /> Book Consultation
              </button>
            </div>
          </div>
        )}

        {/* 3D Slide Dot Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {SLIDE_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Jump to 3D slide ${idx + 1}`}
              onClick={() => setActiveIdx(idx)}
              style={{
                width: idx === activeIdx ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === activeIdx
                  ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)'
                  : 'rgba(148, 40, 118, 0.22)',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
                boxShadow: idx === activeIdx ? '0 2px 6px rgba(148, 40, 118, 0.35)' : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Full Resolution Image Lightbox Modal */}
      {activeLightbox && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(43, 27, 77, 0.45)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setActiveLightbox(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '920px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(148, 40, 118, 0.32), inset 0 2px 3px rgba(255, 255, 255, 1)',
              border: '2px solid rgba(255, 255, 255, 0.98)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                color: '#FFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(148, 40, 118, 0.35)'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ width: '100%', maxHeight: '68vh', background: 'rgba(250, 244, 248, 0.5)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                style={{ maxWidth: '100%', maxHeight: '68vh', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(148, 40, 118, 0.1)' }}>
              <div>
                <span style={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(148, 40, 118, 0.25)', color: '#942876', padding: '5px 14px', borderRadius: '14px', fontSize: '12px', fontWeight: '700' }}>
                  {activeLightbox.tag}
                </span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginTop: '10px', margin: '10px 0 0' }}>
                  {activeLightbox.title}
                </h3>
              </div>

              <button
                className="btn-primary"
                onClick={() => {
                  setActiveLightbox(null);
                  if (onOpenBooking) onOpenBooking();
                }}
              >
                <Calendar size={18} /> Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
