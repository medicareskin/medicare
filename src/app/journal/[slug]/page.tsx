import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { meta, jsonLd } from '@/lib/metadata';
import { site, indexingEnabled } from '@/lib/site';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((art) => art.slug === slug);
  return a ? meta(a.title, a.summary, `/journal/${slug}/`, a.approved) : {};
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article || (!article.approved && indexingEnabled())) {
    notFound();
  }

  const structuredGraph: Record<string, unknown>[] = [
    {
      '@type': 'MedicalWebPage',
      '@id': `${site.url}/journal/${slug}/#webpage`,
      headline: article.title,
      description: article.summary,
      url: `${site.url}/journal/${slug}/`,
      datePublished: article.published || '2026-11-16',
      dateModified: article.reviewed || '2026-11-16',
      inLanguage: 'en-IN',
      author: {
        '@type': 'Person',
        name: article.author || 'Dr. (Mrs.) Sujay M',
        jobTitle: 'Consultant Dermatologist & Dermatosurgeon',
        worksFor: {
          '@type': 'MedicalClinic',
          name: site.name
        }
      },
      reviewedBy: {
        '@type': 'Physician',
        name: 'Dr. (Mrs.) Sujay M',
        medicalSpecialty: 'Dermatology',
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'MBBS' },
          { '@type': 'EducationalOccupationalCredential', name: 'DDVL' }
        ]
      },
      publisher: {
        '@type': 'MedicalClinic',
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${site.url}/journal/${slug}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${site.url}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Clinical Journal',
          item: `${site.url}/journal/`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: `${site.url}/journal/${slug}/`
        }
      ]
    }
  ];

  if (article.faqs && article.faqs.length > 0) {
    structuredGraph.push({
      '@type': 'FAQPage',
      '@id': `${site.url}/journal/${slug}/#faq`,
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': structuredGraph
  };

  return (
    <article className="container section prose" style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '4rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />

      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <Link href="/journal/">Journal</Link> &gt; <span>{article.category || 'Article'}</span>
      </nav>

      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--brand-primary, #153F39)',
              background: 'rgba(21, 63, 57, 0.08)',
              padding: '4px 10px',
              borderRadius: '999px'
            }}
          >
            {article.category || 'Clinical Dermatology'}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
            {article.readingTime || '5 min read'}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: '1.25', marginBottom: '1.25rem' }}>
          {article.title}
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {article.summary}
        </p>

        {/* Clinical Review Metadata Card */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 20px',
            background: '#F9FAFB',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            fontSize: '0.88rem'
          }}
        >
          <div>
            <strong>Author &amp; Reviewer:</strong> {article.author || 'Dr. (Mrs.) Sujay M (MBBS, DDVL)'}
          </div>
          <div style={{ color: '#D1D5DB' }}>|</div>
          <div>
            <strong>Last Reviewed:</strong> {article.reviewed || '16 November 2026'}
          </div>
          <div style={{ color: '#D1D5DB' }}>|</div>
          <div>
            <strong>Clinic:</strong> Medicare Skin, South Bengaluru
          </div>
        </div>

        {article.image && (
          <div style={{ margin: '1.75rem 0 0.5rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
            />
            {article.imageAlt && (
              <div style={{ padding: '8px 16px', background: '#F9FAFB', fontSize: '0.8rem', color: '#6B7280', borderTop: '1px solid #E5E7EB' }}>
                Clinical Visual: {article.imageAlt} &bull; Medicare Skin Clinic Bengaluru
              </div>
            )}
          </div>
        )}

        {!article.approved && (
          <div
            style={{
              marginTop: '16px',
              padding: '12px 16px',
              background: '#FFFBEB',
              border: '1px solid #FCD34D',
              borderRadius: '8px',
              color: '#92400E',
              fontSize: '0.85rem'
            }}
          >
            <strong>Editorial Draft:</strong> This educational article is staged for clinical test validation.
          </div>
        )}
      </header>

      {/* Key Takeaways Box (AEO & LLM Highlight Box) */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <section
          style={{
            margin: '2rem 0',
            padding: '24px',
            background: '#F4F7F6',
            borderLeft: '4px solid var(--brand-primary, #153F39)',
            borderRadius: '0 12px 12px 0'
          }}
        >
          <h2 style={{ fontSize: '1.15rem', marginTop: 0, marginBottom: '12px', color: 'var(--brand-primary, #153F39)' }}>
            Clinical Key Takeaways (AEO Summary)
          </h2>
          <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.7', color: '#374151' }}>
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Body Sections */}
      <div className="article-body">
        {article.sections.map((section, idx) => (
          <section key={idx} style={{ margin: '2.25rem 0' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#111827' }}>
              {section.title}
            </h2>
            <p style={{ lineHeight: '1.75', color: '#374151', fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
              {section.body}
            </p>
          </section>
        ))}
      </div>

      {/* Frequently Asked Questions (AEO Section) */}
      {article.faqs && article.faqs.length > 0 && (
        <section style={{ margin: '3rem 0 2rem', padding: '24px', background: '#FAF9F6', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
          <h2 style={{ fontSize: '1.35rem', marginTop: 0, marginBottom: '16px', color: '#1A244D' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {article.faqs.map((faq, idx) => (
              <details
                key={idx}
                style={{
                  padding: '14px 16px',
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E5E7EB',
                  cursor: 'pointer'
                }}
              >
                <summary style={{ fontWeight: 650, color: '#1A244D', fontSize: '0.98rem' }}>
                  {faq.question}
                </summary>
                <p style={{ margin: '10px 0 0', color: '#4B5563', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      {article.references && article.references.length > 0 && (
        <footer style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
          <h3 style={{ fontSize: '1rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Medical &amp; Clinical References
          </h3>
          <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.6' }}>
            {article.references.map((ref, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>
                {ref.url ? (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    {ref.title}
                  </a>
                ) : (
                  ref.title
                )}
              </li>
            ))}
          </ul>
        </footer>
      )}

      {/* Booking CTA Banner */}
      <div
        style={{
          marginTop: '3rem',
          padding: '32px',
          background: 'var(--brand-primary, #153F39)',
          color: '#FFFFFF',
          borderRadius: '16px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: 0, marginBottom: '8px' }}>
          Have Questions About Your Skin or Hair Concern?
        </h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.98rem' }}>
          Schedule an in-person clinical assessment with <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong> at Medicare Skin &amp; Cosmetic Clinic near Yelachenahalli Metro Station, South Bengaluru.
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
            Request In-Person Consultation
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
            Call +91 92428 55707
          </a>
        </div>
      </div>
    </article>
  );
}
