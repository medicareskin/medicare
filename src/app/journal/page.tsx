import Link from 'next/link';
import type { Metadata } from 'next';
import { articles } from '@/lib/articles';
import { meta } from '@/lib/metadata';
import { indexingEnabled } from '@/lib/site';

export const metadata: Metadata = meta(
  'Skin & Hair Health Journal | Medicare Skin Bengaluru',
  'Evidence-based patient dermatology guides on melasma, acne scar remodelling, laser hair reduction, PRP vs GFC, and winter skin barrier care. Medically reviewed by Dr. Sujay M (MBBS, DDVL).',
  '/journal/'
);

export default function JournalPage() {
  const visibleArticles = articles.filter((a) => !indexingEnabled() || a.approved);

  return (
    <div className="container section">
      <nav aria-label="Breadcrumb" className="micro" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
        <Link href="/">Home</Link> &gt; <span>Clinical Journal</span>
      </nav>

      <header style={{ marginBottom: '2.5rem' }}>
        <p className="eyebrow">EVIDENCE-BASED DERMATOLOGY EDUCATION</p>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
          Medicare Skin &amp; Hair Journal
        </h1>
        <p className="hero-lede" style={{ maxWidth: '850px', fontSize: '1.15rem', color: 'var(--muted, #4B5563)' }}>
          Clinician-reviewed medical education for South Bengaluru patients. Learn about the science of pigmentation, acne scar revision, laser physics, and evidence-informed care without marketing exaggerations.
        </p>
      </header>

      {visibleArticles.length === 0 ? (
        <p>New medical education articles are currently undergoing clinical review.</p>
      ) : (
        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {visibleArticles.map((article) => (
            <article
              key={article.slug}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                background: '#FFFFFF'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
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
                    {article.category || 'Skin Education'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>
                    {article.readingTime || '5 min read'}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.25rem', lineHeight: '1.35', marginBottom: '12px', fontWeight: 700 }}>
                  <Link href={`/journal/${article.slug}/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {article.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '16px' }}>
                  {article.summary}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #F3F4F6', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 600, color: '#1F2937' }}>
                      {article.author || 'Dr. (Mrs.) Sujay M'}
                    </p>
                    <time dateTime={article.published} style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                      Updated: {article.published || '12 November 2026'}
                    </time>
                  </div>
                  <Link
                    href={`/journal/${article.slug}/`}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary, #153F39)',
                      textDecoration: 'none'
                    }}
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <footer style={{ marginTop: '3.5rem', padding: '24px', background: '#F9FAFB', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
        <p className="micro" style={{ margin: 0, color: '#6B7280' }}>
          <strong>Medical Notice:</strong> Information published in the Medicare Skin Journal is for educational reference and does not replace in-person dermatological diagnosis. Individual skin conditions require clinical examination by Dr. Sujay M.
        </p>
      </footer>
    </div>
  );
}
