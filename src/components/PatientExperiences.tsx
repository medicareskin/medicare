'use client';

import { useRef, useState, useEffect } from 'react';
import { mapUrl } from '@/lib/site';

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  text: string;
  avatarColor: string;
  isFeatured?: boolean;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-chethan',
    author: 'Chethan K',
    role: 'Mole Removal Treatment • Bangalore',
    avatarColor: '#7E1660',
    isFeatured: true,
    text: 'I had a very good experience with my mole removal treatment. Dr. Sujay explained everything clearly, and the procedure was quick, virtually painless, and smooth. The staff was friendly and supportive throughout.'
  },
  {
    id: 'rev-priya',
    author: 'Priya S',
    role: 'Skin Tag Removal • Kanakapura Road',
    avatarColor: '#9C2278',
    text: 'I recently visited Dr. Sujay for skin tag removal. The treatment was quick and painless, and the clinic was clean and hygienic. My skin healed in just a few days with zero marks. Highly recommended!'
  },
  {
    id: 'rev-rahul',
    author: 'Rahul M',
    role: 'Acne Scar Treatment • JP Nagar',
    avatarColor: '#2B0E4C',
    text: 'Suffered from severe acne and dark scars for over 3 years. After 4 sessions of microneedling and chemical peels with Dr. Sujay, my skin texture has smoothed out tremendously. Honest advice and no overcharging.'
  },
  {
    id: 'rev-ananya',
    author: 'Ananya R',
    role: 'Full Body Laser • Jayanagar',
    avatarColor: '#8B096C',
    isFeatured: true,
    text: 'The laser hair reduction at Medicare is genuinely painless and so effective. After just 4 sessions, I have an 85% reduction with zero ingrown hairs. The cooling handpiece makes all the difference!'
  },
  {
    id: 'rev-karthik',
    author: 'Karthik N',
    role: 'Hair Fall & PRP Therapy • Banashankari',
    avatarColor: '#5C1D6F',
    text: 'Exceptional trichology care for severe hair fall. Dr. Sujay tested my deficiencies alongside Growth Factor Therapy. Within 3 months, my hair density improved visibly and shedding reduced drastically.'
  }
];

export function PatientExperiences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Subtle auto-scroll unless user is interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 40) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="patient-experiences-section"
      id="reviews"
      aria-label="Patient Experiences and Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="experiences-header-row">
          <div className="experiences-title-block">
            <span className="eyebrow-pill">PATIENT EXPERIENCES</span>
            <h2 className="experiences-headline">Loved by Over 15,000+ Happy Patients in Bangalore</h2>
            <p className="experiences-subheadline">
              Real clinical outcomes and verified Google experiences from patients across Yelachenahalli, JP Nagar, Jayanagar, Banashankari, and Kanakapura Road.
            </p>
          </div>

          <div className="experiences-controls-block">
            {/* Carousel Arrow Controls */}
            <div className="experiences-nav-arrows">
              <button
                type="button"
                className="experiences-arrow-btn"
                onClick={() => scroll('left')}
                aria-label="Previous Reviews"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="experiences-arrow-btn"
                onClick={() => scroll('right')}
                aria-label="Next Reviews"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Google Verified Reviews Badge */}
            <div className="google-verified-badge">
              <span className="google-g-icon" aria-hidden="true">
                G
              </span>
              <div>
                <strong className="google-badge-title">Public Google Reviews (South Bengaluru)</strong>
                <div>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.76rem', color: '#6B7280', textDecoration: 'underline' }}
                  >
                    View &amp; Verify on Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable / Scrollable Reviews Cards Track */}
        <div className="experiences-carousel-track" ref={scrollRef}>
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className={`patient-review-card ${rev.isFeatured ? 'featured-review' : ''}`}
            >
              <div className="review-card-top-row">
                <div className="review-stars-row" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="gold-star" aria-hidden="true">
                      &#9733;
                    </span>
                  ))}
                </div>
                <span className="google-review-pill">Google Review</span>
              </div>

              <p className="review-quote-text">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="review-author-row">
                <div
                  className="author-avatar-circle"
                  style={{ backgroundColor: rev.avatarColor }}
                  aria-hidden="true"
                >
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <strong className="author-name">{rev.author}</strong>
                  <span className="author-status">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Strip matching Image 2 */}
        <div className="experiences-trust-strip">
          <div className="trust-strip-item">
            <strong>Experienced</strong>
            <span>Dermatologist</span>
          </div>
          <div className="trust-strip-divider" aria-hidden="true" />
          <div className="trust-strip-item">
            <strong>Personalised</strong>
            <span>Assessment</span>
          </div>
          <div className="trust-strip-divider" aria-hidden="true" />
          <div className="trust-strip-item">
            <strong>Near Yelachenahalli</strong>
            <span>Metro Station</span>
          </div>
          <div className="trust-strip-divider" aria-hidden="true" />
          <div className="trust-strip-item">
            <strong>Clear Treatment</strong>
            <span>Guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientExperiences;
