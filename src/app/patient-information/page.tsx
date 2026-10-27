import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/lib/metadata';
import { ClinicalTrustMetrics } from '@/components/ClinicalTrustMetrics';
import { CTA } from '@/components/Elements';
import { waLink } from '@/lib/site';

export const metadata: Metadata = meta(
  'Preparing for Your Dermatology Consultation | Medicare Skin South Bengaluru',
  'Know how to prepare for your dermatology consultation with Dr. (Mrs.) Sujay M at Medicare Skin Clinic near Yelachenahalli Metro Station.',
  '/patient-information/'
);

export default function Patients() {
  return (
    <article className="patient-information-page">
      <section className="section soft">
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <span className="eyebrow-pill">PATIENT ADVISORY &amp; PREPARATION</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.9rem)', color: 'var(--purple)', margin: '14px 0 12px' }}>
            Preparing for Your Consultation
          </h1>
          <p style={{ fontSize: '1.08rem', color: 'var(--ink)', lineHeight: 1.6 }}>
            What to expect before, during, and after your clinical dermatology assessment with Dr. (Mrs.) Sujay M.
          </p>
        </div>
      </section>

      {/* Relocated Clinical Trust & Performance Metrics Band */}
      <ClinicalTrustMetrics />

      <section className="container section">
        <div className="cards three" style={{ gap: '28px' }}>
          <div className="card">
            <span className="eyebrow-pill">STEP 1</span>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--purple)', margin: '12px 0 8px' }}>Before Your Visit</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Bring details of current medications, previous skincare products, recent blood work, and a list of specific concerns you wish Dr. Sujay to address. For changing or suspicious moles, seek timely in-person evaluation.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">STEP 2</span>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--purple)', margin: '12px 0 8px' }}>During Your Consultation</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Dr. Sujay M personally conducts an in-depth dermatological examination, reviews potential root causes (hormonal, lifestyle, genetic), and explains safe, evidence-based treatment avenues.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">STEP 3</span>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--purple)', margin: '12px 0 8px' }}>After Your Visit</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              Follow your prescribed skincare protocol and attend scheduled reviews to monitor progress. Our clinical team remains accessible on WhatsApp for prescription clarifications.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link href="/book-appointment/" className="btn primary" style={{ marginRight: '14px' }}>
            Book Consultation Appointment →
          </Link>
          <a
            href={waLink('Hello Medicare Skin Clinic, I have questions regarding my upcoming consultation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Chat with Clinic Desk →
          </a>
        </div>
      </section>

      <CTA />
    </article>
  );
}
