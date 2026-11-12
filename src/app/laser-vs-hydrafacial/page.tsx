import type { Metadata } from 'next';
import Link from 'next/link';
import { meta, jsonLd, breadcrumbs } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = meta(
  'Laser vs. HydraFacial Comparison | Medicare Skin Bengaluru',
  'Understand the medical differences between Q-Switched / Fractional Lasers and HydraFacial. Learn indications, downtime, and cost considerations from Dr. Sujay M.',
  '/laser-vs-hydrafacial/'
);

const comparisonFaqs = [
  {
    q: 'Can HydraFacial remove melasma or deep pigment?',
    a: 'No. HydraFacial is a superficial hydrodermabrasion procedure that exfoliates dead cells and deeply hydrates the epidermis. Melasma and dermal hyperpigmentation reside deeper in the skin and require dermatologist-guided topical medical therapy combined with low-fluence Q-Switched Nd:YAG laser toning.'
  },
  {
    q: 'Can laser and HydraFacial be combined in the same treatment plan?',
    a: 'Yes, in carefully structured sequences. A HydraFacial can be performed 1 to 2 weeks before a laser session to clear surface sebum and hydrate the stratum corneum, or several weeks after fractional resurfacing once the skin barrier has fully recovered.'
  },
  {
    q: 'Which treatment has social downtime?',
    a: 'HydraFacial has zero downtime—you can resume social activities immediately. Laser toning also has virtually no downtime (mild transient warmth for 30 minutes). Fractional ablative lasers, however, require 3 to 5 days of micro-crusting and barrier repair.'
  }
];

export default function LaserVsHydraFacialPage() {
  const breadcrumbList = [
    { name: 'Home', path: '/' },
    { name: 'Compare', path: '/treatments/' },
    { name: 'Laser vs HydraFacial', path: '/laser-vs-hydrafacial/' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Laser Treatments vs. HydraFacial: Clinical Comparison for Indian Skin',
    description:
      'Detailed clinical comparison between dermatological laser procedures and device-assisted hydrodermabrasion.',
    url: `${site.url}/laser-vs-hydrafacial/`,
    reviewedBy: {
      '@type': 'Physician',
      name: 'Dr. (Mrs.) Sujay M',
      jobTitle: 'Senior Consultant Dermatologist',
      hasCredential: [{ '@type': 'EducationalOccupationalCredential', name: 'MBBS, DDVL' }]
    }
  };

  return (
    <article className="container section" style={{ maxWidth: '960px', margin: '0 auto', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs(breadcrumbList)) }} />

      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <Link href="/treatments/">Treatments</Link> &gt; <span>Laser vs HydraFacial</span>
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
          CLINICAL PROCEDURE COMPARISON
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', lineHeight: '1.2', margin: '1rem 0 1rem' }}>
          Laser Treatments vs. HydraFacial: Which is Right for Your Skin?
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.6' }}>
          Patients in South Bengaluru frequently ask whether they should book a clinical laser session or a device-assisted HydraFacial. While both produce visible cosmetic improvements, they operate on completely different skin layers and address fundamentally different medical concerns.
        </p>
      </header>

      {/* Comparison Matrix Table */}
      <section style={{ margin: '2.5rem 0', overflowX: 'auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Clinical Comparison Matrix</h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <thead>
            <tr style={{ background: 'var(--brand-primary, #153F39)', color: '#FFFFFF' }}>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Feature</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>Dermatological Lasers</th>
              <th style={{ padding: '14px 16px', fontWeight: 600 }}>HydraFacial (Hydrodermabrasion)</th>
            </tr>
          </thead>
          <tbody style={{ background: '#FFFFFF', fontSize: '0.95rem' }}>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Target Depth</td>
              <td style={{ padding: '12px 16px' }}>Dermis &amp; Epidermis (1064nm, 810nm, 532nm)</td>
              <td style={{ padding: '12px 16px' }}>Superficial Stratum Corneum (Outer surface)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#F9FAFB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Primary Conditions</td>
              <td style={{ padding: '12px 16px' }}>Melasma, deep pigmentation, atrophic acne scars, unwanted hair</td>
              <td style={{ padding: '12px 16px' }}>Congested pores, blackheads, dry texture, dullness</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Mechanism</td>
              <td style={{ padding: '12px 16px' }}>Selective photothermolysis / photoacoustic shockwave</td>
              <td style={{ padding: '12px 16px' }}>Pneumatic vortex vacuum extraction &amp; serum infusion</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#F9FAFB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Social Downtime</td>
              <td style={{ padding: '12px 16px' }}>None for toning; 3–5 days micro-crusting for fractional</td>
              <td style={{ padding: '12px 16px' }}>Zero downtime; immediate makeup application</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Medical Supervision</td>
              <td style={{ padding: '12px 16px' }}>Essential: calibrated by a dermatologist</td>
              <td style={{ padding: '12px 16px' }}>Dermatologist-formulated or technician-administered</td>
            </tr>
            <tr style={{ background: '#F9FAFB' }}>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: '#374151' }}>Typical Session Cadence</td>
              <td style={{ padding: '12px 16px' }}>4 to 8 sessions spaced 3 to 4 weeks apart</td>
              <td style={{ padding: '12px 16px' }}>Monthly maintenance or event-prep refresh</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Narrative Comparison */}
      <section style={{ margin: '2.5rem 0' }}>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>When is a Laser Procedure Necessary?</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Lasers are medical-grade energy devices engineered to target specific chromophores (melanin, hemoglobin, or water) at calibrated depths beneath the skin surface. If you are struggling with stubborn epidermal-dermal melasma, post-inflammatory hyperpigmentation, deep pitted acne scars, or unwanted facial hair, a surface facial cannot deliver the targeted photothermal or photoacoustic energy required to break down pigment clusters or trigger collagen contraction.
        </p>
      </section>

      <section style={{ margin: '2.5rem 0' }}>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>When is HydraFacial the Better Choice?</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          If your primary concern is rough texture, clogged pores, persistent blackheads, or a lackluster appearance before a wedding or function, HydraFacial delivers immediate gratification. By flushing out sebum plugs and infusing hyaluronic acid and peptides directly into the exfoliated epidermis, skin reflects light more evenly, resulting in an instant dewy glow without any redness or peeling.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section style={{ margin: '3rem 0' }}>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '1.25rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {comparisonFaqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px', color: '#111827' }}>{faq.q}</h3>
              <p style={{ margin: 0, color: '#4B5563', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div
        style={{
          padding: '32px',
          background: 'var(--brand-primary, #153F39)',
          color: '#FFFFFF',
          borderRadius: '16px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: 0, marginBottom: '8px' }}>
          Unsure Which Treatment Fits Your Skin?
        </h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.98rem' }}>
          Book a comprehensive consultation with <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong>. Receive a personalized diagnostic evaluation under dermoscopy to determine whether laser, hydrodermabrasion, or medical skincare is indicated.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link
            href="/book-appointment/"
            style={{
              background: '#FFFFFF',
              color: 'var(--brand-primary, #153F39)',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            Book Dermatologist Consultation
          </Link>
          <a
            href="tel:+919242855707"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </article>
  );
}

