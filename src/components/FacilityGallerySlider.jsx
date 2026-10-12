import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Calendar } from 'lucide-react';

const SLIDE_IMAGES = [
  { id: 1, src: "/slide-img/1.jpg", title: "Advanced Laser Treatment Suite", tag: "Laser Care" },
  { id: 2, src: "/slide-img/2.jpg", title: "Dr. Sujay M Patient Consultation", tag: "Clinical Care" },
  { id: 3, src: "/slide-img/3.jpg", title: "Acne Scar Revision & Subcision", tag: "Acne Revision" },
  { id: 4, src: "/slide-img/4.jpg", title: "Growth Factor Scalp Therapy Suite", tag: "Hair Restoration" },
  { id: 5, src: "/slide-img/Scar Treatment.jpg", title: "Acne Scar Resurfacing Session", tag: "Dermabrasion" },
  { id: 6, src: "/slide-img/Skin Allergies 1.jpg", title: "Clinical Patch Testing & Allergy Care", tag: "Allergy Care" },
  { id: 7, src: "/slide-img/Skin Infections 1.jpg", title: "Dermatological Diagnosis & Care", tag: "Clinical Science" },
  { id: 8, src: "/slide-img/02ca7a5ac5e40183b9aac44d4de24a60.jpg", title: "US-FDA Diode Hair Removal Suite", tag: "Laser Tech" },
  { id: 9, src: "/slide-img/13ccee217da9f1337ade58831c6f2fd3.jpg", title: "Medical Chemical Peel & Glow Suite", tag: "Cosmetic Glow" },
  { id: 10, src: "/slide-img/15123acc861416b880cec2d9edad30d1.jpg", title: "Vitiligo Surgical Grafting Suite", tag: "Vitiligo Surgery" },
  { id: 11, src: "/slide-img/5e08dab87e8917ce313789c4ee7df0ba.jpg", title: "Sterile Procedure Room", tag: "Hygiene Standard" },
  { id: 12, src: "/slide-img/98874dd1eae0b34c8798464c6c3f1c7d.jpg", title: "Patient Reception & Lounge", tag: "Clinic Amenities" }
];

export default function FacilityGallerySlider({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = windowWidth <= 768 ? 1 : windowWidth <= 1024 ? 2 : 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % (SLIDE_IMAGES.length - (itemsPerPage - 1)));
    }, 4500);
    return () => clearInterval(timer);
  }, [itemsPerPage]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? SLIDE_IMAGES.length - itemsPerPage : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev >= SLIDE_IMAGES.length - itemsPerPage ? 0 : prev + 1));
  };

  return (
    <section className="facility-gallery-section" style={{ padding: '80px 0', background: '#FFFFFF', borderTop: '1px solid #EBE0EA' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span style={{ background: '#FBF4F8', color: '#942876', padding: '6px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '10px' }}>
            ✨ Clinic Gallery & Treatment Facilities
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#2B1B4D', marginBottom: '12px' }}>
            Inside Medicare Skin & Cosmetic Clinic
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto' }}>
            Take a visual tour of our US-FDA laser treatment suites, clinical procedure rooms, and patient consultation spaces. Click any image to view in full resolution.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative', padding: '0 10px' }}>
          {/* Slide Arrow Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #EBE0EA',
              boxShadow: '0 8px 20px rgba(43,27,77,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#2B1B4D',
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #EBE0EA',
              boxShadow: '0 8px 20px rgba(43,27,77,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#2B1B4D',
              transition: 'all 0.2s ease'
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Track */}
          <div style={{ overflow: 'hidden', padding: '10px 0' }}>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                transform: `translateX(-${currentIdx * (100 / itemsPerPage + 1.2)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {SLIDE_IMAGES.map((img) => (
                <div
                  key={img.id}
                  className="gallery-slide-card"
                  style={{
                    flex: itemsPerPage === 1 ? '0 0 100%' : itemsPerPage === 2 ? '0 0 calc(50% - 12px)' : '0 0 calc(33.333% - 16px)',
                    minWidth: itemsPerPage === 1 ? '100%' : '240px',
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid #EBE0EA',
                    boxShadow: '0 10px 30px rgba(43,27,77,0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveLightbox(img)}
                >
                  <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative', background: '#F8F5FA' }}>
                    <img
                      src={img.src}
                      alt={img.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(148, 40, 118, 0.92)', color: '#FFF', padding: '5px 14px', borderRadius: '14px', fontSize: '11px', fontWeight: '700', backdropFilter: 'blur(6px)' }}>
                      {img.tag}
                    </span>
                    <div className="hover-overlay" style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(43, 27, 77, 0.75)', color: '#FFF', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                  <div style={{ padding: '20px 22px', background: '#FDF9FB', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#2B1B4D', margin: 0, lineHeight: '1.4' }}>
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {Array.from({ length: SLIDE_IMAGES.length - itemsPerPage + 1 }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              style={{
                width: idx === currentIdx ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === currentIdx ? '#942876' : '#EBE0EA',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
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
            background: 'rgba(13, 8, 25, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveLightbox(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(43, 27, 77, 0.75)',
                color: '#FFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ width: '100%', maxHeight: '70vh', background: '#0D0819', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '24px 30px', background: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ background: '#FDF4F9', color: '#942876', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>
                  {activeLightbox.tag}
                </span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginTop: '8px', margin: 0 }}>
                  {activeLightbox.title}
                </h3>
              </div>

              <button
                className="btn-primary"
                onClick={() => {
                  setActiveLightbox(null);
                  if (onOpenBooking) onOpenBooking();
                }}
                style={{ background: '#942876' }}
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
