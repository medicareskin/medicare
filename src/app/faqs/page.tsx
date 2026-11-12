import type { Metadata } from 'next';
import Link from 'next/link';
import { meta, jsonLd, breadcrumbs } from '@/lib/metadata';
import { site, waLink } from '@/lib/site';

export const metadata: Metadata = meta(
  'Patient FAQs & Clinical Care Guide | Medicare Skin Bengaluru',
  'Frequently asked questions about dermatology consultations, acne scars, melasma, laser hair reduction, PRP/GFC costs, and clinic location near Yelachenahalli Metro.',
  '/faqs/'
);

const faqCategories = [
  {
    category: 'Consultation & Clinical Assessment',
    questions: [
      {
        q: 'Who conducts the medical consultation at Medicare Skin?',
        a: 'Every diagnostic assessment and treatment consultation is performed directly by Dr. (Mrs.) Sujay M (MBBS, DDVL), a Senior Consultant Dermatologist and Dermatosurgeon with over 18 years of experience. We do not delegate clinical evaluations to non-medical technicians or sales coordinators.'
      },
      {
        q: 'What should I bring to my first appointment?',
        a: 'Please bring a list of your current skincare products, any recent topical prescriptions, blood test reports (such as thyroid or hormonal panels if evaluating hair fall or cystic acne), and any history of known drug allergies.'
      },
      {
        q: 'How long does a consultation typically take?',
        a: 'A thorough initial consultation lasts approximately 20 to 30 minutes, allowing adequate time for detailed clinical history, dermoscopic examination of skin or scalp, and unhurried discussion of treatment choices.'
      }
    ]
  },
  {
    category: 'Pigmentation, Melasma & Dark Spots',
    questions: [
      {
        q: 'Can melasma be permanently cured in a few sessions?',
        a: 'Melasma is a chronic, relapsing pigmentary condition influenced by hormones, heat, and ultraviolet radiation. Treatment aims to lighten and control the pigmentation safely; complete permanent eradication cannot be ethically guaranteed. Long-term maintenance with broad-spectrum tinted sun protection is essential.'
      },
      {
        q: 'Is Q-Switched laser safe for Indian skin phototypes?',
        a: 'Yes, when calibrated at conservative, low-fluence toning parameters by an experienced dermatologist. High energy levels on Indian skin (Fitzpatrick IV–VI) risk post-inflammatory rebound hyperpigmentation. Dr. Sujay M customizes pulse widths to shatter melanin clusters without thermal damage to the surrounding skin.'
      }
    ]
  },
  {
    category: 'Acne & Atrophic Scar Remodeling',
    questions: [
      {
        q: 'Can topical creams repair pitted, indented acne scars?',
        a: 'Topical creams and serums cannot lift indented atrophic scars (rolling, boxcar, or icepick morphology) because the damage resides deep in the reticular dermis with lost collagen or fibrotic tethering. Structural treatments like subcision, MNRF, and TCA CROSS are required to physically lift the depression.'
      },
      {
        q: 'How much downtime is expected after acne scar resurfacing?',
        a: 'Subcision produces mild swelling or bruising for 2 to 4 days. Microneedling Radiofrequency (MNRF) typically causes mild redness and microscopic grid marks for 24 to 48 hours. Patients can generally resume work within 1 to 2 days.'
      }
    ]
  },
  {
    category: 'Hair Fall, PRP & Growth Factor Therapy (GFC)',
    questions: [
      {
        q: 'How many sessions of PRP or GFC are required for hair thinning?',
        a: 'Standard clinical protocols recommend an initial course of 4 to 6 sessions spaced 4 weeks apart, followed by maintenance sessions every 4 to 6 months depending on clinical response and trichoscopy findings.'
      },
      {
        q: 'Can biological therapies revive completely bald areas?',
        a: 'No. PRP and GFC act on existing miniaturizing hair follicles by increasing vascularization and extending the active growth phase. They cannot revive areas where follicles have been completely absent and fibrosed for years; surgical hair transplantation is indicated for completely bare areas.'
      }
    ]
  },
  {
    category: 'Clinic Location, Metro Access & Appointments',
    questions: [
      {
        q: 'Where is Medicare Skin Clinic located and is there parking?',
        a: 'The clinic is situated at Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, Kanakapura Main Road, directly opposite Yelachenahalli Metro Station (Green Line) in South Bengaluru. Dedicated two-wheeler and street car parking are available.'
      },
      {
        q: 'How do I book or reschedule an appointment?',
        a: 'You can submit an online request through our Book Consultation page, message our desk directly on WhatsApp, or call +91 92428 55707. We confirm slots with each patient directly before scheduling.'
      }
    ]
  }
];

export default function FaqsPage() {
  const breadcrumbList = [
    { name: 'Home', path: '/' },
    { name: 'FAQs', path: '/faqs/' }
  ];

  const allQuestions = faqCategories.flatMap((cat) => cat.questions);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a
      }
    }))
  };

  return (
    <article className="container section" style={{ maxWidth: '920px', margin: '0 auto', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs(breadcrumbList)) }} />

      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <span>Patient FAQs</span>
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
          PATIENT CARE KNOWLEDGE BASE
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', lineHeight: '1.2', margin: '1rem 0' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.6' }}>
          Explore clinically verified answers to common questions regarding skin consultations, melasma management, acne scars, laser hair reduction, biological hair therapies, and clinic logistics at Medicare Skin Bengaluru.
        </p>
      </header>

      {/* Categorized FAQs */}
      <div style={{ display: 'grid', gap: '2.5rem' }}>
        {faqCategories.map((group, gIdx) => (
          <section key={gIdx} style={{ background: '#FFFFFF', padding: '28px', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--brand-primary, #153F39)', marginTop: 0, marginBottom: '1.25rem', borderBottom: '1px solid #F3F4F6', paddingBottom: '10px' }}>
              {group.category}
            </h2>
            <div style={{ display: 'grid', gap: '16px' }}>
              {group.questions.map((faq, qIdx) => (
                <details
                  key={qIdx}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    cursor: 'pointer'
                  }}
                >
                  <summary style={{ fontWeight: 600, color: '#111827', fontSize: '1.02rem', outline: 'none' }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: '10px', marginBottom: 0, color: '#4B5563', lineHeight: '1.65', fontSize: '0.95rem' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Box */}
      <div
        style={{
          marginTop: '3.5rem',
          padding: '32px',
          background: 'var(--brand-primary, #153F39)',
          color: '#FFFFFF',
          borderRadius: '16px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: 0, marginBottom: '8px' }}>
          Have a Specific Question Not Listed Here?
        </h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.98rem' }}>
          Connect with Dr. Sujay M’s reception desk for tailored advice, slot availability, and consultation assistance.
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
            Request Appointment
          </Link>
          <a
            href={waLink('Hello Medicare Skin Clinic, I have a question regarding consultation and treatments.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            WhatsApp the Clinic
          </a>
        </div>
      </div>
    </article>
  );
}

