'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site, mapUrl, waLink } from '@/lib/site';

interface ResultCase {
  id: string;
  category: 'acne' | 'melasma' | 'pigmentation' | 'radiance';
  title: string;
  subtitle: string;
  sessions: string;
  procedure: string;
  image: string;
  description: string;
}

const CASES: ResultCase[] = [
  {
    id: 'case-acne-scar',
    category: 'acne',
    title: 'Rolling & Boxcar Acne Scar Revision',
    subtitle: 'Doctor-supervised subcision with microneedling RF',
    sessions: '4 Sessions over 16 Weeks',
    procedure: 'Subcision + MNRF + Platelet Growth Infusion',
    image: '/slide-img/Scar Treatment.jpg',
    description:
      'Subcision released fibrous dermal tethers beneath rolling scars, followed by radiofrequency energy to rebuild deep dermal collagen and lift pitted contours.'
  },
  {
    id: 'case-melasma',
    category: 'melasma',
    title: 'Resistant Dermal Melasma Clearance',
    subtitle: 'Sub-thermolytic Q-Switched Nd:YAG laser toning',
    sessions: '6 Sessions over 12 Weeks',
    procedure: '1064nm Low-Fluence Laser + Medical Barrier Creams',
    image: '/slide-img/melasma_transformation_clean.jpg',
    description:
      'Acoustic photo-fragmentation broke dermal melanin clusters without heat-induced inflammation, preventing post-inflammatory rebound on Indian skin.'
  },
  {
    id: 'case-pigmentation',
    category: 'pigmentation',
    title: 'Sun Damage & Uneven Epidermal Pigment',
    subtitle: 'Medical-grade dermatological chemical peels',
    sessions: '3 Sessions over 6 Weeks',
    procedure: 'Sequential Glycolic-Lactic Peels + Antioxidant Infusion',
    image: '/slide-img/pigmentation_before_after_clean.jpg',
    description:
      'Gentle biological cellular turnover cleared superficial keratinized sun spots, evening out complexion tone without harsh peeling or peeling downtime.'
  },
  {
    id: 'case-radiance',
    category: 'radiance',
    title: 'Pore Refinement & Dewy Skin Rejuvenation',
    subtitle: 'Vortex fluidic extraction & medical hydration',
    sessions: '2 Sessions over 4 Weeks',
    procedure: 'Medical HydraFacial + Gentle Laser Toning',
    image: '/slide-img/glow_transformation_clean.jpg',
    description:
      'Pore impurities and congestion extracted painlessly via negative fluidic pressure, followed by intensive hyaluronic peptide infusion for lasting hydration.'
  }
];

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'acne' | 'melasma' | 'pigmentation' | 'radiance'>('all');

  const filteredCases = activeFilter === 'all' ? CASES : CASES.filter((c) => c.category === activeFilter);

  return (
    <div className="results-evidence-page">
      {/* ── 1. HERO SECTION (Image 1 Reference) ── */}
      <section className="results-hero-section">
        <div className="container results-hero-grid">
          <div className="results-hero-content">
            <span className="results-eyebrow-pill">EVIDENCE-BASED DERMATOLOGY</span>
            <h1 className="results-main-title">
              Advanced <span className="highlight-text">Dermatology Care</span> with a Personal Touch
            </h1>
            <p className="results-lead-desc">
              Specialized clinical consultations, surgical revision, and evidence-based laser care led by Dr. (Mrs.) Sujay M (MBBS, DDVL), Consultant Dermatologist &amp; Dermatosurgeon.
            </p>
            <div className="results-hero-actions">
              <Link href="/book-appointment/" className="btn primary results-primary-btn">
                <span>Book Consultation With Dr. Sujay →</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="results-stats-row">
              <div className="results-stat-box">
                <div className="stat-avatar-group">
                  <div className="stat-circle">25K+</div>
                </div>
                <div>
                  <strong>25,000+</strong>
                  <small>Patient Consultations</small>
                </div>
              </div>

              <div className="results-stat-box">
                <div className="stat-avatar-group">
                  <div className="stat-circle gold">18+</div>
                </div>
                <div>
                  <strong>18+ Years</strong>
                  <small>Dedicated Clinical Practice</small>
                </div>
              </div>
            </div>
          </div>

          <div className="results-hero-portrait-slot">
            <img
              src="/images/luxury_indian_skin_model.png"
              alt="Dermatology Care and Clinical Results at Medicare Skin Clinic"
              className="results-hero-img"
            />
          </div>
        </div>

        {/* ── 7 Credential Badges Row (Image 1 Reference) ── */}
        <div className="container results-badges-container">
          <div className="results-doctor-badges-row">
            <div className="doc-badge-circle-item">
              <div className="badge-ring">
                <span className="badge-abbr">MBBS</span>
                <span className="badge-sub">DDVL</span>
              </div>
              <span className="badge-title">Qualified Dermatologist</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring">
                <span className="badge-abbr">KMC</span>
                <span className="badge-sub">Regd.</span>
              </div>
              <span className="badge-title">Medical Council Registered</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring">
                <span className="badge-abbr">BMCRI</span>
                <span className="badge-sub">2005</span>
              </div>
              <span className="badge-title">Bangalore Medical College</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring gold">
                <span className="badge-abbr">US-FDA</span>
                <span className="badge-sub">Lasers</span>
              </div>
              <span className="badge-title">Certified Safety</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring">
                <span className="badge-abbr">100%</span>
                <span className="badge-sub">Doctor</span>
              </div>
              <span className="badge-title">Direct Doctor Diagnosis</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring gold">
                <span className="badge-abbr">18+</span>
                <span className="badge-sub">Years</span>
              </div>
              <span className="badge-title">South Bengaluru Practice</span>
            </div>

            <div className="doc-badge-circle-item">
              <div className="badge-ring">
                <span className="badge-abbr">Zero</span>
                <span className="badge-sub">Delegation</span>
              </div>
              <span className="badge-title">No Salon Hand-offs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMPREHENSIVE SKIN CARE SOLUTIONS (Image 1 3-Card Grid) ── */}
      <section className="comprehensive-solutions-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">CLINICAL DEPARTMENTS</span>
            <h2 className="section-title">Comprehensive Skin Care Solutions</h2>
            <p className="hero-lede center-block">
              Tailored clinical dermatology, advanced US-FDA lasers, and doctor-supervised surgical protocols designed for Indian skin phototypes.
            </p>
          </div>

          <div className="comprehensive-cards-grid">
            {/* Card 1: Cosmetic Dermatology */}
            <Link href="/treatments/?category=Aesthetics" className="solution-visual-card">
              <img
                src="/images/hydrafacial_procedure.jpg"
                alt="Cosmetic Dermatology and HydraFacial at Medicare Skin"
                className="solution-card-bg"
              />
              <div className="solution-card-overlay">
                <div className="solution-card-top">
                  <span className="solution-card-tag">AESTHETICS &bull; HYDRAFACIAL</span>
                  <span className="solution-arrow-circle">↗</span>
                </div>
                <div className="solution-card-bottom">
                  <h3 className="solution-card-name">Cosmetic Dermatology</h3>
                  <p className="solution-card-desc">
                    Medical-grade HydraFacials, sequential chemical peels, and glow protocols to restore hydration.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2: Medical Dermatology */}
            <Link href="/treatments/?category=Medical%20Dermatology" className="solution-visual-card">
              <img
                src="/images/hero_skin_clinic_woman.jpg"
                alt="Medical Dermatology and Doctor Care at Medicare Skin"
                className="solution-card-bg"
              />
              <div className="solution-card-overlay">
                <div className="solution-card-top">
                  <span className="solution-card-tag">DOCTOR-LED CARE &bull; KMC REGD</span>
                  <span className="solution-arrow-circle">↗</span>
                </div>
                <div className="solution-card-bottom">
                  <h3 className="solution-card-name">Medical Dermatology</h3>
                  <p className="solution-card-desc">
                    Root-cause clinical diagnosis for eczema, psoriasis, fungal allergies, vitiligo, and hair loss.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3: Surgical Procedures */}
            <Link href="/treatments/?category=Laser" className="solution-visual-card">
              <img
                src="/images/q_switched_procedure.jpg"
                alt="Laser Surgery and Scar Procedures at Medicare Skin"
                className="solution-card-bg"
              />
              <div className="solution-card-overlay">
                <div className="solution-card-top">
                  <span className="solution-card-tag">LASERS &bull; DERMATOSURGERY</span>
                  <span className="solution-arrow-circle">↗</span>
                </div>
                <div className="solution-card-bottom">
                  <h3 className="solution-card-name">Laser &amp; Scar Surgery</h3>
                  <p className="solution-card-desc">
                    Subcision scar remodeling, microneedling RF, Q-switched laser toning, and diode hair reduction.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. REAL RESULTS, PROVEN EXCELLENCE (Before & After Grid) ── */}
      <section className="proven-results-section" id="case-studies">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">DOCUMENTED CLINICAL EVIDENCE</span>
            <h2 className="section-title">Real Results, Proven Excellence</h2>
            <p className="hero-lede center-block">
              Photographic documentation of patient improvements treated under Dr. (Mrs.) Sujay M&apos;s supervision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="results-filter-pills-row">
            <button
              type="button"
              className={`result-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Evidence
            </button>
            <button
              type="button"
              className={`result-filter-pill ${activeFilter === 'acne' ? 'active' : ''}`}
              onClick={() => setActiveFilter('acne')}
            >
              Acne &amp; Scars
            </button>
            <button
              type="button"
              className={`result-filter-pill ${activeFilter === 'melasma' ? 'active' : ''}`}
              onClick={() => setActiveFilter('melasma')}
            >
              Melasma Clearance
            </button>
            <button
              type="button"
              className={`result-filter-pill ${activeFilter === 'pigmentation' ? 'active' : ''}`}
              onClick={() => setActiveFilter('pigmentation')}
            >
              Chemical Peels
            </button>
            <button
              type="button"
              className={`result-filter-pill ${activeFilter === 'radiance' ? 'active' : ''}`}
              onClick={() => setActiveFilter('radiance')}
            >
              Skin Radiance
            </button>
          </div>

          {/* Results Grid */}
          <div className="proven-cases-grid">
            {filteredCases.map((c) => (
              <div key={c.id} className="proven-case-card">
                <div className="proven-case-photo-frame">
                  <img src={c.image} alt={c.title} className="proven-case-img" />
                  <div className="before-after-ribbon">
                    <span className="ribbon-pill before">BEFORE</span>
                    <span className="ribbon-divider">&bull;</span>
                    <span className="ribbon-pill after">AFTER</span>
                  </div>
                </div>

                <div className="proven-case-info">
                  <span className="case-sessions-badge">{c.sessions}</span>
                  <h3 className="case-title">{c.title}</h3>
                  <p className="case-procedure"><strong>Protocol:</strong> {c.procedure}</p>
                  <p className="case-desc">{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="results-disclaimer-box">
            <strong>Medical Disclaimer &amp; Verification Note:</strong>
            <p>
              Individual response rates and treatment timelines vary according to skin depth, hormonal profile, and treatment adherence. Consult Dr. Sujay M for a personalized diagnostic assessment and honest clinical expectations.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. MEET DR. (MRS.) SUJAY M SPOTLIGHT (Image 1 Reference) ── */}
      <section className="doctor-spotlight-section">
        <div className="container">
          <div className="doctor-spotlight-card">
            <div className="doc-spotlight-photo-col">
              <img
                src="/images/dr_sujaya.jpeg"
                alt="Dr. (Mrs.) Sujay M MBBS DDVL Consultant Dermatologist"
                className="doc-spotlight-photo"
              />
              <div className="doc-spotlight-photo-badge">
                <strong>Dr. (Mrs.) Sujay M</strong>
                <span>MBBS, DDVL &bull; 18+ Yrs Exp</span>
              </div>
            </div>

            <div className="doc-spotlight-content-col">
              <div className="doc-spotlight-quote-box">
                <p className="doc-quote-text">
                  &ldquo;Over 25,000 patients have entrusted their skin to our care across South Bengaluru. We follow strict medical ethics: zero commission hand-offs, no unnecessary packages, and direct dermatologist supervision.&rdquo;
                </p>
              </div>

              <div className="doc-trust-pills-row">
                <span className="trust-check-chip">&bull; Direct Doctor Consultation</span>
                <span className="trust-check-chip">&bull; US-FDA Laser Calibrations</span>
                <span className="trust-check-chip">&bull; Ethical Prescriptions</span>
              </div>

              <div className="doc-spotlight-metrics-row">
                <div className="spotlight-metric">
                  <strong>25K+</strong>
                  <span>Patients Treated</span>
                </div>
                <div className="spotlight-metric-divider" />
                <div className="spotlight-metric">
                  <strong>18+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="spotlight-metric-divider" />
                <div className="spotlight-metric">
                  <strong>4.9 / 5</strong>
                  <span>Patient Rating</span>
                </div>
              </div>

              <div className="doc-spotlight-actions">
                <Link href="/book-appointment/" className="btn primary">
                  Book In-Person Consultation With Dr. Sujay →
                </Link>
                <Link href="/doctors/dr-sujay-m/" className="btn outline">
                  Read Credentials &amp; Bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THREE CONVENIENT TRANSIT ROUTES (Image 1 Reference) ── */}
      <section className="three-routes-section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">CLINIC REACHABILITY</span>
            <h2 className="section-title">Three Convenient Ways to Reach Us</h2>
            <p className="hero-lede center-block">
              Conveniently located in South Bengaluru with direct transit and parking.
            </p>
          </div>

          <div className="routes-cards-grid">
            {/* Route 1 */}
            <div className="route-card">
              <div className="route-card-header">
                <span className="route-num">01</span>
                <h3>Yelachenahalli Metro</h3>
              </div>
              <p className="route-desc">
                Located directly opposite Yelachenahalli Metro Station Gate 2 (Green Line, Pillar 100). Under 2 minutes walk from train exit.
              </p>
              <div className="route-tag">
                <span>Green Line Metro Corridor</span>
              </div>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="route-link">
                Get Metro Directions ↗
              </a>
            </div>

            {/* Route 2 */}
            <div className="route-card">
              <div className="route-card-header">
                <span className="route-num">02</span>
                <h3>JP Nagar &amp; Jayanagar</h3>
              </div>
              <p className="route-desc">
                Quick 5 to 10-minute drive from JP Nagar 1st–8th Phases and Jayanagar 4th/9th Blocks via 100 Feet Ring Road.
              </p>
              <div className="route-tag">
                <span>Smooth Ring Road Connectivity</span>
              </div>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="route-link">
                Get Driving Directions ↗
              </a>
            </div>

            {/* Route 3 */}
            <div className="route-card">
              <div className="route-card-header">
                <span className="route-num">03</span>
                <h3>Kanakapura Main Road</h3>
              </div>
              <p className="route-desc">
                Situated in Jyothi Layout near Jyothi Kendriya Vidyalaya back gate with dedicated on-site parking for four-wheelers and two-wheelers.
              </p>
              <div className="route-tag">
                <span>Dedicated Parking Available</span>
              </div>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="route-link">
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHAT OUR PATIENTS SAY (Spotlight Review from Image 1) ── */}
      <section className="patient-spotlight-quote-section">
        <div className="container">
          <div className="patient-spotlight-grid">
            <div className="patient-spotlight-photo-frame">
              <img
                src="/images/hero_happy_patient_woman.jpg"
                alt="Patient at Medicare Skin Clinic"
                className="patient-spotlight-img"
              />
              <div className="patient-spotlight-tag">
                <strong>Gnaneshwari D.</strong>
                <span className="gold-stars">&#9733;&#9733;&#9733;&#9733;&#9733; Verified Google Review</span>
              </div>
            </div>

            <div className="patient-spotlight-quote-card">
              <span className="quote-eyebrow">WHAT OUR PATIENTS SAY</span>
              <h2 className="quote-heading">Real Stories, Meaningful Relief</h2>
              <blockquote className="quote-body">
                &ldquo;I consulted Dr. Sujay for the treatment of persistent melasma and acne scars on my face. The doctor was very friendly and listened to our issues patiently. She clearly explained the procedure and treatment options. She prescribed medical creams, tablets, and sequential chemical peel sessions. Now I am recovering and seeing very good results. A big thanks to Dr. Sujay!&rdquo;
              </blockquote>
              <div className="quote-footer">
                <div className="quote-author-details">
                  <strong>Gnaneshwari Deepak</strong>
                  <span>Acne Scar &amp; Melasma Patient &bull; South Bengaluru</span>
                </div>
                <a
                  href={waLink('Hello Dr. Sujay M, I would like to book a consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn outline"
                >
                  WhatsApp Inquiry →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container section">
        <div className="cta-panel">
          <div className="cta-content">
            <span className="eyebrow-pill">DIRECT DERMATOLOGIST CONSULTATION</span>
            <h2>Ready for expert, evidence-based skin care?</h2>
            <p>
              Schedule an in-person assessment with Dr. (Mrs.) Sujay M (MBBS, DDVL) near Yelachenahalli Metro Station.
            </p>
            <div className="buttons">
              <Link href="/book-appointment/" className="btn primary">
                Request Appointment Online →
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn outline">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
