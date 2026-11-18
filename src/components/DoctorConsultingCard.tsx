'use client';

import React from 'react';
import Link from 'next/link';
import { site, waLink } from '@/lib/site';

interface DoctorConsultingCardProps {
  asH1?: boolean;
  showMiniNav?: boolean;
  className?: string;
}

export function DoctorConsultingCard({
  asH1 = false,
  showMiniNav = true,
  className = ''
}: DoctorConsultingCardProps) {
  const TitleTag = asH1 ? 'h1' : 'h2';

  return (
    <section className={`doctor-showcase-wrapper ${className}`} aria-label="Consulting Dermatologist Dr. Sujay M">
      <div className="container">
        {/* Modern Clinical UI Card matching reference mockup */}
        <div className="doctor-mockup-card">
          {/* Subtle Abstract Top Accent Shape */}
          <div className="card-top-accent" aria-hidden="true" />

          {/* Mini Card Header */}
          {showMiniNav && (
            <div className="card-mini-header">
              <Link href="/" className="mini-brand-badge" aria-label="Medicare Skin Clinic Home">
                <span className="mini-cross-icon" aria-hidden="true">+</span>
                <span className="mini-brand-text">medicare<strong>skin</strong></span>
              </Link>

              <nav className="mini-nav-links" aria-label="Doctor profile navigation">
                <Link href="/treatments/" className="mini-nav-item">Treatments</Link>
                <Link href="/doctors/dr-sujay-m/" className="mini-nav-item active">Doctor</Link>
                <Link href="/about/" className="mini-nav-item">About</Link>
                <Link href="/contact/" className="mini-nav-item">Contact</Link>
              </nav>

              <div className="mini-header-action">
                <Link href="/book-appointment/" className="mini-book-pill">
                  Consultation
                </Link>
              </div>
            </div>
          )}

          {/* Main Card Body: 2 Columns - Image on Left, Text on Right */}
          <div className="doctor-card-grid">
            {/* Left Column: Doctor Portrait with Floating Badges */}
            <div className="doctor-visual-column">
              <div className="doctor-photo-stage">
                <img
                  src="/images/dr_sujay_m_first.jpg"
                  alt="Dr. (Mrs.) Sujay M MBBS DDVL Consultant Dermatologist in South Bengaluru"
                  className="doctor-cutout-img"
                  width={460}
                  height={585}
                  loading="eager"
                />
                <div className="floating-exp-badge">
                  <span>18+ Years Exp</span>
                </div>
                <div className="floating-rating-badge">
                  <span className="rating-star">🏛</span>
                  <span>KMC Registered</span>
                  <span className="rating-sub">Karnataka Medical Council</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clinical Authority Content */}
            <div className="doctor-content-column">
              {/* Badges Row */}
              <div className="doctor-badges-row">
                <span className="doc-pill-tag">
                  <span className="status-dot green" aria-hidden="true" />
                  <span>Consult Available</span>
                </span>
                <span className="doc-pill-tag dark">
                  <span className="status-dot dark-bullet" aria-hidden="true" />
                  <span>YOUR CONSULTING DERMATOLOGIST</span>
                </span>
              </div>

              {/* Title & Degrees */}
              <TitleTag className="doctor-title-display">
                Dr. Sujay M
              </TitleTag>

              <p className="doctor-credentials-sub">
                MBBS, DDVL &bull; Senior Consultant Dermatologist &amp; Trichologist
              </p>

              {/* Clinical Narrative matching user specification */}
              <div className="doctor-narrative-block">
                <p className="doc-paragraph-lead">
                  Dr. Sujay M is one of Bangalore&apos;s most esteemed and trusted dermatologists, with over 18+ years of dedicated clinical practice. She completed her post-graduation in Dermatology, Venereology &amp; Leprosy (DDVL) from the renowned Bangalore Medical College in 2005.
                </p>
                <p className="doc-paragraph-body">
                  Under her clinical leadership, Medicare Skin &amp; Cosmetic Clinic has become South Bangalore&apos;s premier center for advanced skin and hair treatments. Dr. Sujay believes in an honest, science-first philosophy: thorough diagnostic examination, zero unnecessary procedures, and custom-tailored regimens calibrated for Indian skin tones.
                </p>
                <p className="doc-paragraph-body">
                  Whether managing complex clinical conditions like vitiligo and eczema or delivering transformative aesthetic outcomes with acne scar subcision, US FDA-approved lasers, and PRP growth factor therapy, Dr. Sujay delivers results that restore your natural skin health and lasting confidence.
                </p>
              </div>

              {/* Clinical Credentials List */}
              <ul className="doctor-check-points" aria-label="Clinical Credentials">
                <li className="doctor-check-item">
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>MBBS, DDVL:</strong> Bangalore Medical College (2005)
                  </div>
                </li>

                <li className="doctor-check-item">
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>18+ Years Experience:</strong> Practicing Senior Dermatologist
                  </div>
                </li>

                <li className="doctor-check-item">
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>15,000+ Treated:</strong> Successful Clinical Cases Evaluated
                  </div>
                </li>

                <li className="doctor-check-item">
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>4.9 ★ Rating:</strong> 500+ Verified Patient Reviews on Google
                  </div>
                </li>

                <li className="doctor-check-item">
                  <div className="check-icon-circle" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Consultation Available:</strong> In-clinic &amp; WhatsApp evaluations
                  </div>
                </li>
              </ul>

              {/* Action Buttons Row */}
              <div className="doctor-actions-row">
                <Link href="/book-appointment/" className="btn-primary-blue-pill">
                  <span>Book Consultation With Dr. Sujay →</span>
                </Link>
                <Link href="/doctors/dr-sujay-m/" className="btn-secondary-light-pill">
                  <span>Read Doctor Biography &amp; Credentials →</span>
                </Link>
              </div>

              {/* Bottom Specialty Category Chips */}
              <div className="doctor-specialty-chips" aria-label="Specialty Categories">
                <span className="spec-chip">Skin Care</span>
                <span className="spec-chip">Hair Loss</span>
                <span className="spec-chip">Dermatology</span>
                <span className="spec-chip">Laser Aesthetics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .doctor-showcase-wrapper {
          padding: 36px 0 24px;
          background: #F8F9FB;
        }

        .doctor-mockup-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 28px;
          border: 1px solid #ECEFF2;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          padding: 32px 40px 36px;
        }

        /* Abstract Blue Top Accent */
        .card-top-accent {
          position: absolute;
          top: 0;
          right: 220px;
          width: 80px;
          height: 64px;
          background: linear-gradient(135deg, #1D64F2 0%, #3B82F6 100%);
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
          pointer-events: none;
          z-index: 1;
        }

        /* Mini Header */
        .card-mini-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid #F1F4F7;
          margin-bottom: 32px;
          position: relative;
          z-index: 2;
        }

        .mini-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .mini-cross-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: #1D64F2;
          color: #FFFFFF;
          font-weight: 800;
          font-size: 1.15rem;
          line-height: 1;
        }

        .mini-brand-text {
          font-size: 1.15rem;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.02em;
        }

        .mini-brand-text strong {
          color: #1D64F2;
          font-weight: 800;
        }

        .mini-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .mini-nav-item {
          font-size: 0.9rem;
          font-weight: 500;
          color: #4B5563;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .mini-nav-item:hover,
        .mini-nav-item.active {
          color: #1D64F2;
          font-weight: 600;
        }

        .mini-book-pill {
          display: inline-flex;
          align-items: center;
          padding: 8px 20px;
          border-radius: 9999px;
          border: 1px solid #D1D5DB;
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
          background: #FFFFFF;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .mini-book-pill:hover {
          border-color: #1D64F2;
          color: #1D64F2;
          background: #F8FAFC;
        }

        /* 2 Columns Grid: Image on Left (0.9fr), Text on Right (1.1fr) */
        .doctor-card-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .doctor-content-column {
          display: flex;
          flex-direction: column;
        }

        .doctor-badges-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .doc-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          border-radius: 9999px;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
        }

        .doc-pill-tag.dark {
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #1F2937;
          font-size: 0.76rem;
        }

        .status-dot.green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }

        .status-dot.dark-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4B5563;
        }

        .doctor-title-display {
          font-size: clamp(2.1rem, 3.4vw, 2.9rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 8px 0;
        }

        .doctor-credentials-sub {
          font-size: 1.05rem;
          font-weight: 600;
          color: #4B5563;
          margin: 0 0 20px 0;
          line-height: 1.4;
        }

        .doctor-narrative-block {
          margin-bottom: 22px;
        }

        .doc-paragraph-lead {
          font-size: 0.95rem;
          line-height: 1.62;
          color: #1F2937;
          margin: 0 0 10px 0;
          font-weight: 450;
        }

        .doc-paragraph-body {
          font-size: 0.93rem;
          line-height: 1.62;
          color: #4B5563;
          margin: 0;
        }

        /* Check Points */
        .doctor-check-points {
          list-style: none;
          padding: 0;
          margin: 0 0 26px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .doctor-check-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.92rem;
          line-height: 1.5;
          color: #374151;
        }

        .check-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1D64F2;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .doctor-check-item strong {
          color: #111827;
        }

        /* Action Buttons */
        .doctor-actions-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 26px;
        }

        .btn-primary-blue-pill {
          display: inline-flex;
          align-items: center;
          padding: 13px 26px;
          border-radius: 9999px;
          background: #1D64F2;
          color: #FFFFFF;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(29, 100, 242, 0.28);
          transition: all 0.2s ease;
        }

        .btn-primary-blue-pill:hover {
          background: #1550c6;
          box-shadow: 0 6px 18px rgba(29, 100, 242, 0.38);
          transform: translateY(-1px);
        }

        .btn-secondary-light-pill {
          display: inline-flex;
          align-items: center;
          padding: 13px 22px;
          border-radius: 9999px;
          background: #F3F4F6;
          color: #1F2937;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #E5E7EB;
          transition: all 0.2s ease;
        }

        .btn-secondary-light-pill:hover {
          background: #E5E7EB;
          color: #111827;
          border-color: #D1D5DB;
        }

        /* Specialty Chips */
        .doctor-specialty-chips {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .spec-chip {
          display: inline-flex;
          align-items: center;
          padding: 6px 15px;
          border-radius: 9999px;
          background: #F3F4F6;
          color: #4B5563;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Left Column: Portrait Stage */
        .doctor-visual-column {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .doctor-photo-stage {
          position: relative;
          width: 100%;
          max-width: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          background: #F3F4F6;
        }

        .doctor-cutout-img {
          width: 100%;
          height: auto;
          max-height: 560px;
          object-fit: cover;
          display: block;
          border-radius: 24px;
        }

        .floating-exp-badge {
          position: absolute;
          bottom: 20px;
          left: 18px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(229, 231, 235, 0.85);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #1F2937;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .floating-rating-badge {
          position: absolute;
          top: 20px;
          right: 18px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(229, 231, 235, 0.85);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #1F2937;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .rating-star {
          color: #F59E0B;
        }

        .rating-sub {
          color: #6B7280;
          font-weight: 500;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .doctor-mockup-card {
            padding: 28px 24px 32px;
          }
          .card-top-accent {
            right: 40px;
          }
          .doctor-card-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .doctor-visual-column {
            order: 0;
          }
          .doctor-photo-stage {
            max-width: 380px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .mini-nav-links {
            display: none;
          }
          .doctor-title-display {
            font-size: 2rem;
          }
          .doctor-actions-row {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary-blue-pill,
          .btn-secondary-light-pill {
            justify-content: center;
            text-align: center;
          }
          .card-top-accent {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default DoctorConsultingCard;
