'use client';

import Link from 'next/link';

interface PremierHeroBannerProps {
  isH1?: boolean;
}

export function PremierHeroBanner({ isH1 = false }: PremierHeroBannerProps) {
  return (
    <section className="premier-hero-banner" id="premier-clinic">
      <div className="container">
        {/* Top Badges Row */}
        <div className="premier-hero-badge-row">
          <span className="premier-eyebrow-pill">
            BANGALORE&apos;S #1 SKIN &amp; HAIR CLINIC • 18+ YRS EXP
          </span>
          <span className="premier-response-pill">
            ⚡ Average response: Under 5 mins during clinic hours
          </span>
        </div>

        {/* Headline & Subtitle */}
        {isH1 ? (
          <h1 className="premier-hero-title">
            India&apos;s Premier Skin &amp; Cosmetic Clinic
            <span className="premier-hero-subtitle">Clearer Skin, Healthier Hair</span>
          </h1>
        ) : (
          <h2 className="premier-hero-title">
            India&apos;s Premier Skin &amp; Cosmetic Clinic
            <span className="premier-hero-subtitle">Clearer Skin, Healthier Hair</span>
          </h2>
        )}

        {/* Descriptive Lede */}
        <p className="premier-hero-desc">
          Doctor-led medical and aesthetic dermatology by <strong>Dr. Sujay M (MBBS, DDVL)</strong> with <strong>18+ years of clinical mastery</strong>. Personalized, US FDA-approved solutions for acne scars, laser hair removal, hair restoration &amp; anti-aging at Kanakapura Road, Bangalore.
        </p>

        {/* Quick Nav Anchors */}
        <div className="premier-hero-nav-links" aria-label="Quick section navigation">
          <a href="#specialized-care" className="hero-nav-chip">
            <span>Skin Care</span>
          </a>
          <a href="#specialized-care" className="hero-nav-chip">
            <span>Hair Care</span>
          </a>
          <a href="#doctor" className="hero-nav-chip">
            <span>Meet Dr. Sujay M</span>
          </a>
          <a href="#reviews" className="hero-nav-chip">
            <span>Patient Reviews</span>
          </a>
          <Link href="/book-appointment/" className="hero-nav-chip accent-chip">
            <span>Book Consultation →</span>
          </Link>
        </div>

        {/* 4 Trust Metrics Grid */}
        <div className="premier-metrics-grid">
          <div className="premier-metric-card">
            <strong className="metric-number">18+ Yrs</strong>
            <span className="metric-label">Clinical Mastery</span>
          </div>
          <div className="premier-metric-card">
            <strong className="metric-number">15,000+</strong>
            <span className="metric-label">Happy Patients</span>
          </div>
          <div className="premier-metric-card">
            <strong className="metric-number">99%</strong>
            <span className="metric-label">Success Rate</span>
          </div>
          <div className="premier-metric-card">
            <strong className="metric-number">4.9 ★</strong>
            <span className="metric-label">Google Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremierHeroBanner;

