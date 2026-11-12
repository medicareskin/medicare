import type { Metadata } from 'next';
import Link from 'next/link';
import { meta, jsonLd, breadcrumbs } from '@/lib/metadata';
import { site, waLink } from '@/lib/site';

export const metadata: Metadata = meta(
  'Cancellation & Rescheduling Policy | Medicare Skin Bengaluru',
  'Transparent appointment booking, rescheduling, and cancellation terms for consultations with Dr. Sujay M at Medicare Skin Clinic.',
  '/cancellation-policy/'
);

export default function CancellationPolicyPage() {
  const breadcrumbList = [
    { name: 'Home', path: '/' },
    { name: 'Policies', path: '/terms/' },
    { name: 'Cancellation Policy', path: '/cancellation-policy/' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    headline: 'Appointment Cancellation & Rescheduling Policy',
    description: 'Guidelines for rescheduling, cancelling, and confirming outpatient dermatology appointments.',
    url: `${site.url}/cancellation-policy/`
  };

  return (
    <article className="container section prose" style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs(breadcrumbList)) }} />

      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <span>Cancellation Policy</span>
      </nav>

      <header style={{ marginBottom: '2.5rem' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--brand-primary, #153F39)',
            background: 'rgba(21, 63, 57, 0.08)',
            padding: '4px 10px',
            borderRadius: '999px'
          }}
        >
          PATIENT CARE &amp; SCHEDULING
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: '1.25', margin: '1rem 0' }}>
          Consultation Cancellation &amp; Rescheduling Policy
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.6' }}>
          At Medicare Skin &amp; Cosmetic Clinic, our consultation slots are structured to ensure Dr. Sujay M provides dedicated, unhurried time for every patient. We appreciate your consideration when booking, rescheduling, or modifying appointments.
        </p>
      </header>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.35rem', color: '#111827' }}>1. Appointment Confirmation Protocol</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Submitting an online appointment request through our website serves as a booking request. Our reception desk will contact you via telephone call or WhatsApp message to verify slot availability and confirm your scheduled timing. An appointment is officially confirmed once acknowledged by our clinic administration.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.35rem', color: '#111827' }}>2. Notice Period for Rescheduling</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          If you need to reschedule or cancel your consultation, please inform our reception team at least <strong>12 to 24 hours in advance</strong>. This courtesy allows us to offer the consultation opening to patients requiring urgent dermatological evaluation.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.35rem', color: '#111827' }}>3. Traffic Delays and Late Arrivals</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          We recognize that Bengaluru traffic along Kanakapura Main Road and outer ring roads can be unpredictable. If you anticipate arriving more than 15 minutes past your scheduled slot, please call or WhatsApp the clinic immediately. We will do our utmost to accommodate you without disrupting patients with scheduled subsequent appointments.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.35rem', color: '#111827' }}>4. Procedure Packages &amp; Multi-Session Treatments</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          For advanced clinical procedures requiring pre-operative equipment calibration (such as Q-Switched laser toning, MNRF, or surgical vitiligo grafting), advance scheduling is mandatory. In the event of unforeseen medical reasons or contraindications identified prior to a session, sessions may be postponed and rescheduled within the standard package validity period.
        </p>
      </section>

      <section style={{ margin: '2.5rem 0', padding: '24px', background: '#F4F7F6', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '1.25rem', marginTop: 0, color: 'var(--brand-primary, #153F39)' }}>
          Need to Reschedule Right Now?
        </h2>
        <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '16px' }}>
          You can adjust your booking in seconds by speaking directly with our front desk team:
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href={`tel:${site.phoneE164}`}
            style={{
              background: 'var(--brand-primary, #153F39)',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={waLink('Hello Medicare Skin, I would like to reschedule my consultation appointment.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            WhatsApp Desk
          </a>
        </div>
      </section>

      <footer style={{ marginTop: '3rem', padding: '20px', borderTop: '1px solid #E5E7EB' }}>
        <p className="micro" style={{ margin: 0, color: '#6B7280' }}>
          Last Updated: 12 November 2026 &bull; Medicare Skin &amp; Cosmetic Clinic, near Yelachenahalli Metro Station, Bengaluru 560078.
        </p>
      </footer>
    </article>
  );
}

