'use client';

import { useRef, useState, useEffect } from 'react';

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
    id: 'rev-1',
    author: 'Gnaneshwari Deepak',
    role: 'Verified Patient',
    avatarColor: '#8B096C',
    text: 'I consulted Dr.Sujay for the treatment of pigmentation/melasma and acne on my face. The doctor was very friendly and listens to our issues patiently. She understands our problems and explains us about the procedures and treatments options. She prescribed me some creams tablets and chemical peel sessions now I am recovering and can see very good results. A big thanks to the doctor and I definitely recommend this doctor to everyone those who are looking for the best results for their skin issues.'
  },
  {
    id: 'rev-2',
    author: 'Padmashree BK',
    role: 'Verified Patient',
    avatarColor: '#9C2278',
    text: 'We consulted Dr Sujay M for Skin allergy for my mother. Her treatment was apt with effective consultation and Diagnosis. Dr has a lot of patience and will listen to the problems thoroughly. I strongly recommend consulting Dr Sujay for any skin alignments. Effective Treatment with Reasonable Fees and courteous staff.'
  },
  {
    id: 'rev-3',
    author: 'Chethan K',
    role: 'Verified Patient',
    avatarColor: '#7E1660',
    isFeatured: true,
    text: 'I had a very good experience with my mole removal treatment. The doctor explained everything clearly, and the procedure was quick and smooth. The staff were friendly and supportive.'
  },
  {
    id: 'rev-4',
    author: 'Rohit S',
    role: 'Verified Patient',
    avatarColor: '#2B0E4C',
    text: 'I recommend Medicare Skin Clinic for anyone struggling with stubborn acne scars. Dr. Sujay M evaluated my skin thoroughly and recommended subcision with microneedling. The clinic environment is hygienic and professional.'
  },
  {
    id: 'rev-5',
    author: 'Sangeetha R',
    role: 'Verified Patient',
    avatarColor: '#8B096C',
    text: "Dr. Sujay's hair thinning treatment worked wonders for my persistent hair fall. The GFC sessions combined with home care stopped my shedding within 2 months."
  },
  {
    id: 'rev-6',
    author: 'Nandini M',
    role: 'Verified Patient',
    avatarColor: '#5C1D6F',
    text: 'Very satisfied with the chemical peel and medi-facial sessions for my hyperpigmentation. Visible glow and even tone without harsh downtime.'
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
      aria-label="Patient Experiences and Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="experiences-header-row">
          <div className="experiences-title-block">
            <span className="eyebrow-pill">PATIENT EXPERIENCES</span>
            <h2 className="experiences-headline">Patient Experiences</h2>
            <p className="experiences-subheadline">
              Read authentic patient comments and medically appropriate treatment experiences. No invented reviews or guaranteed results.
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
                <strong className="google-badge-title">Verified Patient Experiences on Google</strong>
                <div className="google-stars-row" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star-icon" aria-hidden="true">
                      &#9733;
                    </span>
                  ))}
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
