'use client';

import Link from 'next/link';

export function MedicareAdvantage() {
  return (
    <div className="medicare-advantage-wrapper" id="why-us">
      {/* 1. SEAMLESS CARE PATHWAY: 3-Step Journey */}
      <section className="section seamless-pathway-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">SEAMLESS CARE PATHWAY</span>
            <h2 className="section-title">
              Your 3-Step Journey to Flawless Skin &amp; Healthy Hair
            </h2>
            <p className="hero-lede center-block">
              We make premier dermatological care smooth, private, and transparent right from your first consultation.
            </p>
          </div>

          <div className="pathway-steps-grid">
            {/* Step 1 */}
            <div className="pathway-step-card">
              <div className="pathway-step-number">01</div>
              <h3 className="pathway-step-title">Book Your Consultation</h3>
              <p className="pathway-step-desc">
                Choose your preferred time slot online or send us a WhatsApp message with your primary skin or hair concerns. No long queue waiting.
              </p>
            </div>

            {/* Step 2 */}
            <div className="pathway-step-card highlight">
              <div className="pathway-step-number">02</div>
              <h3 className="pathway-step-title">Doctor-Led Diagnosis</h3>
              <p className="pathway-step-desc">
                Dr. Sujay M personally examines your condition using high-precision digital analysis to identify underlying root causes and design your customized treatment plan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="pathway-step-card">
              <div className="pathway-step-number">03</div>
              <h3 className="pathway-step-title">Targeted Treatment &amp; Results</h3>
              <p className="pathway-step-desc">
                Experience gentle, US FDA-approved procedures conducted in our sterile clinic, supported by comprehensive post-care advice and scheduled reviews.
              </p>
            </div>
          </div>

          <div className="center space-top">
            <Link href="/book-appointment/" className="btn primary">
              Schedule Your Consultation Today →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE MEDICARE ADVANTAGE: 6 Pillars */}
      <section className="section soft medicare-advantage-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">THE MEDICARE ADVANTAGE</span>
            <h2 className="section-title">
              Why South Bangalore Trusts Medicare Skin Clinic
            </h2>
            <p className="hero-lede center-block">
              We blend clinical medical dermatology with cutting-edge aesthetic technology, ensuring unmatched safety, efficacy, and natural beauty.
            </p>
          </div>

          <div className="advantage-pillars-grid">
            {/* Pillar 1 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">👩‍⚕️</div>
              <h3 className="pillar-title">Doctor-Led Excellence</h3>
              <p className="pillar-desc">
                Unlike beauty salons or corporate chains with revolving staff, all assessments and procedures are supervised directly by Dr. Sujay M (MBBS, DDVL).
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">🛡️</div>
              <h3 className="pillar-title">US FDA Approved Technology</h3>
              <p className="pillar-desc">
                We only invest in medical-grade, globally certified laser and aesthetic platforms that deliver clinical safety, predictable results, and zero downtime.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">🎯</div>
              <h3 className="pillar-title">Custom Tailored Protocols</h3>
              <p className="pillar-desc">
                We reject one-size-fits-all treatments. Each peel strength, laser fluence, and therapy frequency is customized for your individual skin phototype.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">✨</div>
              <h3 className="pillar-title">Stringent Safety &amp; Hygiene</h3>
              <p className="pillar-desc">
                Hospital-grade disinfection, disposable consumables for every patient, and strict clinical protocols protect your skin from cross-contamination.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">🌿</div>
              <h3 className="pillar-title">Natural Aesthetic Harmony</h3>
              <p className="pillar-desc">
                Our cosmetic work enhances your innate features. We aim for healthy, glowing skin and graceful rejuvenation without unnatural or exaggerated appearances.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="advantage-pillar-card">
              <div className="pillar-icon-box">📍</div>
              <h3 className="pillar-title">Prime Metro-Connected Location</h3>
              <p className="pillar-desc">
                Conveniently situated just 2 minutes walk from Yelachenahalli Metro Station on Kanakapura Main Road, with dedicated hassle-free patient parking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicareAdvantage;

