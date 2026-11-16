import type { Metadata } from 'next';
import Link from 'next/link';
import { meta, jsonLd, breadcrumbs } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = meta(
  'Medical Editorial Policy & Clinical Governance | Medicare Skin',
  'Learn how Medicare Skin Clinic ensures medical accuracy, physician review, evidence-based dermatological references, and ethical compliance under Dr. Sujay M (MBBS, DDVL).',
  '/editorial-policy/'
);

export default function EditorialPolicyPage() {
  const breadcrumbList = [
    { name: 'Home', path: '/' },
    { name: 'Policies', path: '/terms/' },
    { name: 'Editorial Policy', path: '/editorial-policy/' }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Medical Editorial Policy and Clinical Governance',
    description:
      'Editorial guidelines, physician review protocols, and evidence-based clinical standards for Medicare Skin & Cosmetic Clinic.',
    url: `${site.url}/editorial-policy/`,
    author: {
      '@type': 'Person',
      name: 'Dr. (Mrs.) Sujay M',
      jobTitle: 'Consultant Dermatologist',
      hasCredential: [{ '@type': 'EducationalOccupationalCredential', name: 'MBBS, DDVL' }]
    }
  };

  return (
    <article className="container section prose" style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs(breadcrumbList)) }} />

      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <span>Medical Editorial Policy</span>
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
          CLINICAL GOVERNANCE &amp; ETHICS
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: '1.25', margin: '1rem 0' }}>
          Medical Editorial Policy
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.6' }}>
          At Medicare Skin &amp; Cosmetic Clinic, we uphold uncompromising standards of clinical integrity, transparency, and patient safety. This document details how all educational content, treatment guides, and medical articles are authored, reviewed, and maintained.
        </p>
      </header>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>1. Named Physician Authorship &amp; Review</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Every treatment guide, condition profile, and journal article published on this website is authored, medically reviewed, or clinically approved by <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong>, Senior Consultant Dermatologist and postgraduate alumnus of Bangalore Medical College and Research Institute (BMCRI, 2005) with over 18 years of clinical practice in South Bengaluru. We do not publish anonymous or unverified healthcare copy.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>2. Evidence-Based Scientific Standards</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Our clinical articles reflect consensus recommendations and peer-reviewed research from established dermatological authorities, including the <em>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</em>, the <em>American Academy of Dermatology (AAD)</em>, and indexed medical journals. Commercial marketing claims, unproven salon fads, and proprietary brand hype are strictly excluded in favor of peer-reviewed scientific evidence.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>3. Responsible Disclosure of Risks and Limitations</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          In accordance with ethical medical practice:
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#374151' }}>
          <li>We never claim guaranteed cures for chronic relapsing conditions such as melasma, vitiligo, or psoriasis.</li>
          <li>We explicitly describe potential procedural risks, such as post-inflammatory hyperpigmentation (PIH), erythema, or paradoxical hair stimulation.</li>
          <li>We clarify that laser hair reduction provides long-term significant reduction, not absolute permanent hair eradication in a single session.</li>
          <li>All procedural outcomes depend on individual skin phototypes, hormonal factors, adherence to aftercare, and genetic predisposition.</li>
        </ul>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>4. Ethical Advertising &amp; Legal Compliance</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Medicare Skin Clinic adheres strictly to the professional conduct regulations issued under the Indian Medical Council Act, 1956 (Code of Medical Ethics, 2002). We do not engage in self-laudatory superlatives (*“best doctor in city”*), fabricated patient volumes, or unauthorized before-and-after photo enhancements. Genuine clinical transformation photographs are published only with explicit written patient consent and without digital retouching.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>5. AI Tools and Navigational Features</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Interactive digital tools on this website—such as the Skin Concern Navigator or chat widgets—are intended solely for educational triage and appointment routing. They do not generate medical diagnoses, pathology evaluations, or automated drug prescriptions. True dermatological assessment requires direct physical examination, palpation, and dermoscopy by Dr. Sujay M.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#111827' }}>6. Review Cadence &amp; Corrections Policy</h2>
        <p style={{ lineHeight: '1.75', color: '#374151' }}>
          Content is audited and updated annually or whenever significant updates in clinical guidelines or pharmaceutical approvals emerge. If you notice any factual error or have an editorial query, please contact our medical administrative desk directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      <footer style={{ marginTop: '3rem', padding: '24px', background: '#F9FAFB', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
        <p className="micro" style={{ margin: 0, color: '#6B7280' }}>
          <strong>Policy Status:</strong> Active &bull; Published: 16 November 2026 &bull; Supervised by Dr. (Mrs.) Sujay M (MBBS, DDVL) &bull; Medicare Skin &amp; Cosmetic Clinic, Bengaluru.
        </p>
      </footer>
    </article>
  );
}

