import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/lib/metadata';
import { CTA } from '@/components/Elements';
import { ClinicalTrustMetrics } from '@/components/ClinicalTrustMetrics';
import { waLink } from '@/lib/site';

export const metadata: Metadata = meta(
  'About Medicare Skin & Cosmetic Clinic | Dermatologist-Led Care South Bengaluru',
  'Learn about Medicare Skin & Cosmetic Clinic, a qualified dermatologist-led practice near Yelachenahalli Metro Station in South Bengaluru. Guided by Dr. (Mrs.) Sujay M (MBBS, DDVL).',
  '/about/'
);

export default function About() {
  return (
    <article className="about-page">
      {/* Hero Introduction */}
      <section className="section soft">
        <div className="container two-cols align-center" style={{ gap: '48px' }}>
          <div>
            <span className="eyebrow-pill">CLINICAL CARE WITH ETHICAL GUIDANCE</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--purple)', margin: '14px 0 10px' }}>
              About Medicare Skin &amp; Cosmetic Clinic
            </h1>
            <p className="hero-lede" style={{ fontSize: '1.15rem', color: 'var(--magenta)', fontWeight: 600, marginBottom: '16px' }}>
              A dermatologist-led clinical practice serving South Bengaluru with evidence-based treatments for skin, hair, and aesthetic concerns.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '16px' }}>
              Founded with a commitment to clinical honesty and medical integrity, Medicare Skin Clinic prioritizes direct doctor diagnosis over commercial sales packages. Under the leadership of Dr. (Mrs.) Sujay M (MBBS, DDVL), every patient receives an individualised assessment grounded in clinical dermatology.
            </p>
            <div className="buttons space-top">
              <Link href="/doctors/dr-sujay-m/" className="btn primary">
                Meet Dr. Sujay M (MBBS, DDVL) →
              </Link>
              <Link href="/book-appointment/" className="btn outline">
                Book Consultation →
              </Link>
            </div>
          </div>

          <div className="authentic-photo-slot portrait" style={{ maxWidth: '420px', margin: '0 auto' }}>
            <img
              src="/images/dr_sujaya.jpeg"
              alt="Dr. (Mrs.) Sujay M MBBS DDVL Consultant Dermatologist at Medicare Skin Clinic"
              className="authentic-photo-img"
            />
            <div className="authentic-photo-caption">
              <span className="caption-badge">Direct Doctor Care</span>
              <span className="caption-title">Dr. (Mrs.) Sujay M · 18+ Years Dedicated Clinical Practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Relocated Clinical Trust & Performance Metrics Band */}
      <ClinicalTrustMetrics />

      {/* Guiding Principles */}
      <section className="container section">
        <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
          <span className="eyebrow-pill">OUR CLINICAL PILLARS</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '12px' }}>What Guides Our Practice</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
            We adhere to strict dermatological guidelines to ensure safe, predictable, and medically sound results.
          </p>
        </div>

        <div className="cards three">
          <div className="card">
            <span className="eyebrow-pill">PATIENT EDUCATION</span>
            <h3 style={{ marginTop: '12px', fontSize: '1.2rem', color: 'var(--purple)' }}>Diagnosis-First Consultation</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              We explain root causes, diagnostic differentials, and realistic timelines so you can make informed decisions about your skin and hair health.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">SAFETY PROTOCOLS</span>
            <h3 style={{ marginTop: '12px', fontSize: '1.2rem', color: 'var(--purple)' }}>Informed Medical Consent</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Transparent discussions about procedure benefits, potential risks, and aftercare expectations before any treatment commences.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">ETHICAL CARE</span>
            <h3 style={{ marginTop: '12px', fontSize: '1.2rem', color: 'var(--purple)' }}>Continuity of Care</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Personalized follow-ups, ongoing barrier support, and structured reviews conducted directly by the consulting dermatologist.
            </p>
          </div>
        </div>
      </section>

      {/* Facility & Location Callout */}
      <section className="section soft">
        <div className="container two-cols align-center" style={{ gap: '48px' }}>
          <div>
            <span className="eyebrow-pill">CONVENIENT ACCESSIBILITY</span>
            <h2 style={{ fontSize: '2rem', margin: '14px 0 12px' }}>
              Serving Patients Across South Bengaluru
            </h2>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '14px' }}>
              Conveniently located on Kanakapura Main Road, directly opposite Yelachenahalli Metro Station, Medicare Skin Clinic is easily accessible from JP Nagar, Banashankari, Jayanagar, and Konanakunte.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                <span style={{ color: 'var(--magenta)', fontWeight: 'bold' }}>✓</span>
                <span>Direct Green Line Metro Connectivity (Yelachenahalli Metro)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                <span style={{ color: 'var(--magenta)', fontWeight: 'bold' }}>✓</span>
                <span>Private Consultation Suites for Patient Privacy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                <span style={{ color: 'var(--magenta)', fontWeight: 'bold' }}>✓</span>
                <span>US-FDA Cleared Q-Switched &amp; Diode Laser Systems</span>
              </div>
            </div>
            <Link href="/contact/" className="btn outline">
              View Clinic Map &amp; Directions →
            </Link>
          </div>

          <div className="card" style={{ background: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid var(--line)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--purple)', marginBottom: '12px' }}>Clinic Timings &amp; Consultations</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '16px' }}>
              Consultations are by prior appointment to ensure dedicated time with Dr. Sujay M.
            </p>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', marginBottom: '8px' }}>
                <strong>Monday – Saturday:</strong>
                <span>10:30 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                <strong>Sunday:</strong>
                <span style={{ color: 'var(--magenta)' }}>By Prior Appointment</span>
              </div>
            </div>
            <a
              href={waLink('Hello Medicare Skin Clinic, I would like to schedule a consultation with Dr. Sujay M.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
              style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}
            >
              WhatsApp Appointment Desk →
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </article>
  );
}
