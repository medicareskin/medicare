import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { meta, jsonLd } from '@/lib/metadata';
import { site, indexingEnabled, waLink } from '@/lib/site';

export function generateStaticParams() {
  return articles.filter((a) => a.approved).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((art) => art.slug === slug);
  return a ? meta(a.title, a.summary, `/blog/${slug}/`, a.approved) : {};
}

export default async function BlogPostDetailPage({
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
      '@type': 'BlogPosting',
      '@id': `${site.url}/blog/${slug}/#article`,
      headline: article.title,
      description: article.summary,
      url: `${site.url}/blog/${slug}/`,
      datePublished: article.published || '2026-11-18',
      dateModified: article.reviewed || '2026-11-18',
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
      publisher: {
        '@type': 'MedicalClinic',
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${site.url}/blog/${slug}/#breadcrumb`,
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
          name: 'Blog',
          item: `${site.url}/blog/`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: `${site.url}/blog/${slug}/`
        }
      ]
    }
  ];

  if (article.faqs && article.faqs.length > 0) {
    structuredGraph.push({
      '@type': 'FAQPage',
      '@id': `${site.url}/blog/${slug}/#faq`,
      mainEntity: article.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({ '@context': 'https://schema.org', '@graph': structuredGraph }) }}
      />

      <article className="blog-article-detail" style={{ background: '#FAF7FA', minHeight: '100vh', padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '0.84rem', color: '#6F647E' }}>
            <Link href="/" style={{ color: '#942876', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog/" style={{ color: '#942876', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>{article.category}</span>
          </nav>

          {/* Article Header */}
          <header style={{ marginBottom: '32px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(148, 40, 118, 0.08)',
                color: '#942876',
                border: '1px solid rgba(148, 40, 118, 0.2)',
                borderRadius: '999px',
                padding: '5px 14px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}
            >
              {article.category}
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: 'clamp(2.2rem, 3.6vw, 3rem)',
                color: '#2B1B4D',
                lineHeight: 1.2,
                margin: '0 0 16px',
                letterSpacing: '-0.02em'
              }}
            >
              {article.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', fontSize: '0.86rem', color: '#6B5E78', marginBottom: '24px' }}>
              <span>Authored by <strong>{article.author}</strong></span>
              <span>•</span>
              <span>Published: {article.published}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>

            {/* Featured Hero Image */}
            {article.image && (
              <div style={{ width: '100%', height: '380px', borderRadius: '24px', overflow: 'hidden', marginBottom: '28px', background: '#F0E6ED', boxShadow: '0 12px 32px rgba(43, 27, 77, 0.08)' }}>
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="eager"
                />
              </div>
            )}
          </header>

          {/* Summary Callout */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #EADEE7',
              borderLeft: '4px solid #942876',
              borderRadius: '16px',
              padding: '22px 26px',
              marginBottom: '36px',
              boxShadow: '0 4px 16px rgba(43, 27, 77, 0.04)'
            }}
          >
            <strong style={{ display: 'block', fontSize: '0.85rem', color: '#942876', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              Clinical Overview
            </strong>
            <p style={{ margin: 0, fontSize: '1.05rem', color: '#3A2B4C', lineHeight: 1.6 }}>
              {article.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div
              style={{
                background: '#FAF3F8',
                borderRadius: '20px',
                padding: '26px 28px',
                border: '1px solid #E8D6E4',
                marginBottom: '40px'
              }}
            >
              <h2 style={{ fontSize: '1.15rem', color: '#2B1B4D', margin: '0 0 14px', fontWeight: 750 }}>
                Key Takeaways
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.98rem', color: '#4A3B58', lineHeight: 1.65 }}>
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="article-body-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
            {article.sections.map((section, idx) => (
              <section key={idx} style={{ background: '#FFFFFF', padding: '32px 30px', borderRadius: '20px', border: '1px solid #ECE3EA', boxShadow: '0 4px 16px rgba(43, 27, 77, 0.03)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '1.5rem', color: '#2B1B4D', margin: '0 0 14px', lineHeight: 1.3 }}>
                  {section.title}
                </h2>
                <div style={{ fontSize: '1.02rem', color: '#423352', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* Clinical FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '1.6rem', color: '#2B1B4D', margin: '0 0 20px' }}>
                Frequently Asked Clinical Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {article.faqs.map((faq, i) => (
                  <div key={i} style={{ background: '#FFFFFF', padding: '22px 24px', borderRadius: '16px', border: '1px solid #ECE3EA' }}>
                    <h3 style={{ fontSize: '1.05rem', color: '#2B1B4D', margin: '0 0 8px', fontWeight: 700 }}>
                      {faq.question}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.96rem', color: '#554664', lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {article.references && article.references.length > 0 && (
            <div style={{ padding: '20px 24px', background: '#F5EEF3', borderRadius: '14px', marginBottom: '48px', fontSize: '0.84rem', color: '#685974' }}>
              <strong style={{ display: 'block', color: '#3A2B48', marginBottom: '8px' }}>
                Scientific &amp; Medical References:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.55 }}>
                {article.references.map((ref, idx) => (
                  <li key={idx}>{ref.title}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Consulting Doctor Bio Card */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E8DFE6',
              borderRadius: '24px',
              padding: '32px 28px',
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              flexWrap: 'wrap',
              boxShadow: '0 8px 24px rgba(43, 27, 77, 0.05)'
            }}
          >
            <div style={{ width: '84px', height: '84px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #942876' }}>
              <img
                src="/images/dr_sujaya.jpeg"
                alt="Dr. (Mrs.) Sujay M"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <span style={{ fontSize: '0.76rem', color: '#942876', fontWeight: 750, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                REVIEWED BY CONSULTING DERMATOLOGIST
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#2B1B4D', margin: '4px 0 6px', fontWeight: 750 }}>
                Dr. (Mrs.) Sujay M (MBBS, DDVL)
              </h3>
              <p style={{ margin: '0 0 14px', fontSize: '0.9rem', color: '#5C5268', lineHeight: 1.5 }}>
                Senior Consultant Dermatologist &amp; Dermatosurgeon with over 18 years of clinical experience in South Bengaluru. Bangalore Medical College postgraduate (2005), Karnataka Medical Council registered.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/book-appointment/"
                  style={{
                    background: '#942876',
                    color: '#FFFFFF',
                    padding: '9px 20px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Book Doctor Consultation →
                </Link>
                <a
                  href={waLink(`Hello Medicare Skin Clinic, I would like to consult with Dr. Sujay M after reading the article on ${article.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(37, 211, 102, 0.1)',
                    color: '#128C7E',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    padding: '9px 18px',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 650,
                    textDecoration: 'none'
                  }}
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

