import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_REVIEWS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function GoogleReviews() {
  const [reviews] = useState(GOOGLE_REVIEWS);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 380, behavior: 'smooth' });
  };

  // Subtle auto-scroll every 4.5s unless user is interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="reviews-section"
      id="reviews-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        padding: '90px 0 85px',
        background: 'transparent',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(148, 40, 118, 0.2)',
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
            <ShieldCheck size={16} color="#942876" />
            100% VERIFIED GOOGLE REVIEWS
          </span>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '42px', fontWeight: 650, color: '#153F39', marginBottom: '14px' }}>
            Patient Stories & Clinical Outcomes
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#FFB800" stroke="none" />
              ))}
            </div>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#2B1B4D', letterSpacing: '-0.01em' }}>
              5.0 Star Rating
            </span>
            <span style={{ fontSize: '14px', color: '#942876', fontWeight: 600 }}>
              (1,200+ Verified Patient Ratings)
            </span>
          </div>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto' }}>
            Genuine experiences from patients who underwent acne scar revision, laser treatments, hair restoration, and medical dermatology at Medicare.
          </p>

          {/* 3D Nav Arrow Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '22px' }}>
            <button
              onClick={handleScrollLeft}
              className="carousel-arrow-btn btn-3d-tactile"
              aria-label="Previous Review"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 24px rgba(148, 40, 118, 0.16), inset 0 1px 2px rgba(255, 255, 255, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#2B1B4D',
                transition: 'all 0.25s ease'
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleScrollRight}
              className="carousel-arrow-btn btn-3d-tactile"
              aria-label="Next Review"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 24px rgba(148, 40, 118, 0.16), inset 0 1px 2px rgba(255, 255, 255, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#2B1B4D',
                transition: 'all 0.25s ease'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* 3D Perspective Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="reviews-horizontal-track"
          style={{
            display: 'flex',
            gap: '26px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            padding: '24px 10px 40px',
            scrollbarWidth: 'none',
            perspective: '1200px'
          }}
        >
          {reviews.concat(reviews).map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="review-card-item review-card-3d"
              style={{
                flex: '0 0 360px',
                background: 'rgba(255, 255, 255, 0.78)',
                backdropFilter: 'blur(30px) saturate(200%)',
                WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '26px',
                padding: '30px 28px',
                boxShadow: '0 20px 50px rgba(148, 40, 118, 0.12), 0 4px 16px rgba(43, 27, 77, 0.04), inset 0 2px 3px rgba(255, 255, 255, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default'
              }}
            >
              {/* 3D Popped-Out Quote Watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  color: 'rgba(148, 40, 118, 0.12)',
                  transform: 'translateZ(25px)',
                  transformStyle: 'preserve-3d',
                  pointerEvents: 'none'
                }}
              >
                <Quote size={48} />
              </div>

              {/* Card Top: Stars & Procedure Tag */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFB800', fontSize: '18px' }}>★</span>
                  ))}
                </div>
                {review.tag && (
                  <span
                    className="review-tag-badge"
                    style={{
                      background: 'rgba(148, 40, 118, 0.08)',
                      color: '#942876',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '5px 12px',
                      borderRadius: '16px',
                      border: '1px solid rgba(148, 40, 118, 0.18)'
                    }}
                  >
                    {review.tag}
                  </span>
                )}
              </div>

              {/* Review Text */}
              <p
                className="review-quote-text"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: '#253532',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  transform: 'translateZ(15px)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                "{review.text}"
              </p>

              {/* Card Bottom: Verified Patient Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(148, 40, 118, 0.1)',
                  transform: 'translateZ(25px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                      boxShadow: '0 4px 10px rgba(148, 40, 118, 0.25)'
                    }}
                  >
                    {review.author ? review.author.charAt(0) : 'P'}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#2B1B4D' }}>
                      {review.author}
                    </div>
                    <div style={{ fontSize: '11px', color: '#942876', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <CheckCircle2 size={12} color="#942876" /> Verified Google Patient
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '12px', fontWeight: 700, color: '#942876', opacity: 0.85 }}>
                  5.0 ★
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
