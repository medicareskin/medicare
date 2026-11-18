import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { meta, jsonLd } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = meta(
  'Skin Care, Beauty & Dermatology Blog | Medicare Skin Bengaluru',
  'Evidence-based skin care, glass skin radiance, bridal beauty countdowns, laser toning, chemical peels, and hair restoration guides by Dr. (Mrs.) Sujay M (MBBS, DDVL).',
  '/blog/'
);

export default function BlogDirectoryPage() {
  const blogList = articles.filter((a) => a.approved);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog/#blog`,
    name: 'Medicare Skin & Cosmetic Clinic Blog',
    description: 'Evidence-based beauty, glass skin radiance, acne scar remodeling, and dermatological guides by Dr. (Mrs.) Sujay M (MBBS, DDVL).',
    url: `${site.url}/blog/`,
    publisher: {
      '@type': 'MedicalClinic',
      name: site.name,
      url: site.url,
      telephone: site.phoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560078',
        addressCountry: 'IN'
      }
    },
    blogPost: blogList.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      url: `${site.url}/blog/${post.slug}/`,
      datePublished: post.published,
      dateModified: post.reviewed,
      author: {
        '@type': 'Person',
        name: post.author || 'Dr. (Mrs.) Sujay M',
        jobTitle: 'Consultant Dermatologist & Dermatosurgeon'
      }
    }))
  };

  const categories = Array.from(new Set(blogList.map((b) => b.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(blogSchema) }}
      />

      <div className="blog-page-container" style={{ background: '#FAF7FA', minHeight: '100vh', padding: '40px 0 80px' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '0.85rem', color: '#6F647E' }}>
            <Link href="/" style={{ color: '#942876', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>Beauty &amp; Dermatology Blog</span>
          </nav>

          {/* Blog Hero Header */}
          <header className="blog-header-block" style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(148, 40, 118, 0.08)', border: '1px solid rgba(148, 40, 118, 0.2)', padding: '6px 14px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 750, color: '#942876', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
              <span>✦</span>
              <span>CLINICAL BEAUTY &amp; SKIN SCIENCE</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#2B1B4D', margin: '0 0 16px', lineHeight: 1.18, letterSpacing: '-0.02em' }}>
              Skin Care, Beauty &amp; Dermatology Blog
            </h1>

            <p style={{ fontSize: '1.08rem', color: '#5C5268', maxWidth: '780px', lineHeight: 1.6, margin: '0 0 24px' }}>
              Dermatologist-reviewed skin science, glass skin radiance routines, pre-bridal beauty countdowns, and evidence-based laser guides. Authored by <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong> for South Bengaluru patients.
            </p>

            {/* Quick Filter Categories */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '8px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#374151', alignSelf: 'center', marginRight: '6px' }}>Topics:</span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '999px',
                    padding: '5px 14px',
                    fontSize: '0.82rem',
                    color: '#4B5563',
                    fontWeight: 550
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </header>

          {/* Blog Grid */}
          <div className="blog-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {blogList.map((post) => (
              <article
                key={post.slug}
                className="blog-card-item"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E8DFE6',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(43, 27, 77, 0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div>
                  {/* Article Thumbnail */}
                  {post.image && (
                    <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative', background: '#F3E8EE' }}>
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(43, 14, 76, 0.88)',
                          color: '#FFFFFF',
                          backdropFilter: 'blur(8px)',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  )}

                  {/* Card Content */}
                  <div style={{ padding: '24px 22px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', color: '#8C7E99', marginBottom: '10px' }}>
                      <span>{post.published}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 style={{ fontSize: '1.24rem', fontWeight: 750, color: '#2B1B4D', lineHeight: 1.35, margin: '0 0 10px', fontFamily: 'var(--font-serif), Georgia, serif' }}>
                      <Link
                        href={`/blog/${post.slug}/`}
                        style={{ color: '#2B1B4D', textDecoration: 'none' }}
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: '#5C5268', lineHeight: 1.55, margin: '0 0 16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{ padding: '14px 22px 20px', borderTop: '1px solid #F5EEF3', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: '#7E1660', fontWeight: 600 }}>
                    By {post.author.replace(/,.*$/, '')}
                  </span>

                  <Link
                    href={`/blog/${post.slug}/`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#942876',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Read Article</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div style={{ marginTop: '56px', background: 'linear-gradient(135deg, #2B1B4D 0%, #4A1E5C 100%)', borderRadius: '24px', padding: '40px 32px', color: '#FFFFFF', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '1.8rem', margin: '0 0 10px' }}>
              Looking for Personalised Clinical Advice?
            </h3>
            <p style={{ fontSize: '1rem', color: '#E8DCE8', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.55 }}>
              Consult Senior Dermatologist Dr. (Mrs.) Sujay M (MBBS, DDVL) in South Bengaluru for accurate diagnosis and individual care plans.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/book-appointment/"
                style={{
                  background: '#FFFFFF',
                  color: '#2B1B4D',
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontWeight: 750,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                Book In-Person Consultation
              </Link>
              <Link
                href="/treatments/"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontWeight: 650,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                Explore All Treatments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

