import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_REVIEWS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function GoogleReviews() {
  const [reviews] = useState(GOOGLE_REVIEWS);
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };

  return (
    <section className="reviews-section" id="reviews-section">
      <div className="container">
        <div className="section-header-center">
          <h2>Google Patient Reviews</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#FFB800" stroke="none" />
              ))}
            </div>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#1E122A' }}>5.0 Rating</span>
          </div>
          <p>Read authentic feedback from verified patients across Bangalore</p>

          {/* Nav Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
            <button
              onClick={handleScrollLeft}
              className="carousel-arrow-btn"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleScrollRight}
              className="carousel-arrow-btn"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Auto-scrolling horizontal review track */}
        <div
          ref={scrollRef}
          className="reviews-horizontal-track"
        >
          {reviews.concat(reviews).map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="review-card-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFB800', fontSize: '18px' }}>★</span>
                  ))}
                </div>
                {review.tag && (
                  <span className="review-tag-badge">
                    {review.tag}
                  </span>
                )}
              </div>

              <p className="review-quote-text">
                "{review.text}"
              </p>

              <div className="review-author-name">
                — {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
