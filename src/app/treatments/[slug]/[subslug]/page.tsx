import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {
  treatments,
  getTreatment,
  categoryToSlug,
} from '@/lib/treatments';
import {getClinicalArticle} from '@/lib/clinicalContent';
import {meta, jsonLd, breadcrumbs} from '@/lib/metadata';
import {CTA, Breadcrumbs, PhotoSlot} from '@/components/Elements';
import {site, waLink, indexingEnabled} from '@/lib/site';

export function generateStaticParams() {
  const params: {slug: string; subslug: string}[] = [];
  for (const t of treatments) {
    const catSlug = categoryToSlug(t.category);
    params.push({slug: catSlug, subslug: t.slug});
    if (t.aliases) {
      for (const alias of t.aliases) {
        params.push({slug: catSlug, subslug: alias});
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string; subslug: string}>;
}): Promise<Metadata> {
  const {slug: category, subslug: slug} = await params;
  const t = getTreatment(category, slug);
  if (!t) return {};
  const article = getClinicalArticle(category, t.slug);
  const title = article?.seoTitle || t.metaTitle;
  const description = article?.metaDescription || t.metaDescription;
  return meta(title, description, `/treatments/${category}/${slug}/`, t.available);
}

export default async function CategoryTreatmentPage({
  params,
}: {
  params: Promise<{slug: string; subslug: string}>;
}) {
  const {slug: category, subslug: slug} = await params;
  const t = getTreatment(category, slug);
  if (!t || (!t.available && indexingEnabled())) notFound();

  const article = getClinicalArticle(category, t.slug);

  const parts = [
    {label: 'Home', href: '/'},
    {label: 'Treatments', href: '/treatments/'},
    {label: t.category, href: `/treatments/?category=${encodeURIComponent(t.category)}`},
    {label: t.title, href: `/treatments/${category}/${slug}/`},
  ];

  const structuredItems: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      headline: article?.h1 || t.title,
      description: article?.metaDescription || t.metaDescription,
      url: `${site.url}/treatments/${category}/${slug}/`,
      about: {'@type': 'MedicalCondition', name: t.title},
      reviewedBy: {
        '@type': 'Physician',
        name: 'Dr. (Mrs.) Sujay M',
        medicalSpecialty: 'Dermatologist',
        honorificPrefix: 'Dr.',
        description: 'MBBS, DDVL · Senior Consultant Dermatologist at Medicare Skin & Cosmetic Clinic',
      },
      lastReviewed: '2026-10-23',
    },
    breadcrumbs(parts.map((x) => ({name: x.label, path: x.href}))),
  ];

  const faqsToUse = article?.faqs && article.faqs.length > 0 ? article.faqs : t.faqs;
  if (faqsToUse.length > 0) {
    structuredItems.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsToUse.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(structuredItems),
        }}
      />
      <div className="container section treatment-page">
        <Breadcrumbs items={parts} />

        <div className="two-cols align-center treatment-hero">
          <div>
            <p className="eyebrow">
              {t.category.toUpperCase()} · DERMATOLOGY CLINIC IN SOUTH BENGALURU
            </p>
            <h1>{article?.h1 || `${t.title} in Bengaluru`}</h1>
            <p className="hero-lede">{t.summary}</p>

            {article?.quickAnswer && (
              <div className="quick-answer-box">
                <div className="quick-answer-badge">
                  <span className="badge-tag">Quick Clinical Summary</span>
                  <span className="badge-geo">Yelachenahalli · South Bengaluru</span>
                </div>
                <h3 className="quick-answer-question">{article.quickAnswer.question}</h3>
                <p className="quick-answer-content">{article.quickAnswer.answer}</p>
                {article.quickAnswer.consultationPrompt && (
                  <p className="quick-answer-prompt">
                    <strong>Next step:</strong> {article.quickAnswer.consultationPrompt}
                  </p>
                )}
              </div>
            )}

            {!article && <p>{t.description}</p>}

            <div className="buttons">
              <Link className="btn primary" href="/book-appointment/">
                Request a dermatologist consultation →
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn outline">
                Call {site.phoneDisplay}
              </a>
              <a
                href={waLink(`Hello Medicare Skin, I would like to inquire about consultation for ${t.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                WhatsApp Us
              </a>
            </div>

            {!t.available ? (
              <p className="note">
                <strong>Procedure availability not verified.</strong> This page is educational.
                Confirm that Medicare Skin provides the specific procedure, equipment and
                protocol before booking or publishing it as an active service.
              </p>
            ) : article?.publishingStatus ? (
              <p className="note">
                <strong>Clinical Note:</strong> {article.publishingStatus}
              </p>
            ) : null}
          </div>

          <PhotoSlot
            label={
              t.category === 'Laser'
                ? 'VERIFIED LASER EQUIPMENT + AUTHENTIC CLINICAL PHOTO'
                : 'AUTHENTIC CLINICAL PHOTOGRAPH · DR. SUJAY M CLINIC'
            }
            shape="portrait"
          />
        </div>

        <div className="two-cols treatment-body">
          <article>
            {article ? (
              <>
                {article.sections.map((sec, idx) => (
                  <section key={idx} className="clinical-section">
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                    {sec.listItems && sec.listItems.length > 0 && (
                      <ul className="details-list">
                        {sec.listItems.map((li, lIdx) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </>
            ) : (
              <>
                <section>
                  <h2>What should you know?</h2>
                  <p>{t.description}</p>
                </section>
                <section>
                  <h2>Why might this concern occur?</h2>
                  <ul className="details-list">
                    {t.causes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>Who may benefit from a consultation?</h2>
                  <ul className="details-list">
                    {t.suitability.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>How is treatment planned?</h2>
                  <ol className="details-list">
                    {t.process.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h2>Potential benefits</h2>
                  <ul className="details-list">
                    {t.benefits.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>Risks, limitations and realistic results</h2>
                  <ul className="details-list">
                    {t.risks.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p>
                    No improvement, cure or permanent outcome can be guaranteed; suitability is
                    determined after assessment.
                  </p>
                </section>
                <section>
                  <h2>Aftercare</h2>
                  <ul className="details-list">
                    {t.aftercare.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>What affects the cost?</h2>
                  <p>{t.pricing}</p>
                </section>
              </>
            )}

            <section className="treatment-faq-section">
              <h2>Frequently Asked Patient Questions</h2>
              <p className="muted">
                Dermatology answers based on clinical guidelines for patients in South Bengaluru.
              </p>
              <div className="faq">
                {faqsToUse.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="reviewer-box">
              <div className="reviewer-header">
                <span className="reviewer-tag">Medically Reviewed</span>
                <h3>Dr. (Mrs.) Sujay M, MBBS, DDVL</h3>
                <p className="micro muted">Senior Consultant Dermatologist · Medicare Skin & Cosmetic Clinic</p>
              </div>
              <p className="reviewer-text">
                This clinical information has been prepared and reviewed in accordance with American Academy of
                Dermatology (AAD) guidance and Indian skin epidemiology. Treatment is customized after in-person
                examination at our clinic near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru.
              </p>
              <p className="micro muted">Last clinical review: October 2026 · Clinical registration verified</p>
            </section>

            {article?.references && article.references.length > 0 && (
              <section className="clinical-references-box">
                <h3>Clinical References & Scientific Guidelines</h3>
                <p className="micro muted">Peer-reviewed sources and dermatology associations:</p>
                <ul className="references-list">
                  {article.references.map((r, rIdx) => (
                    <li key={rIdx}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        {r.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {article?.internalLinks && article.internalLinks.length > 0 && (
              <section className="internal-cluster-box">
                <h3>Related Clinical Care at Medicare Skin</h3>
                <div className="cluster-links">
                  {article.internalLinks.map((link, lIdx) => (
                    <Link key={lIdx} href={link.href} className="cluster-pill">
                      {link.href.replace('/treatments/', '').replace(/\/$/, '').replace(/-/g, ' ')}
                      {link.note && <span className="cluster-note"> {link.note}</span>}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside>
            <div className="sidebar-card">
              <h3>Talk to a Dermatologist</h3>
              <p>
                Discuss your symptoms, clinical options and risks with {site.doctor},{' '}
                {site.qualification}.
              </p>
              <Link href="/book-appointment/" className="btn primary full-width">
                Request Consultation
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn outline full-width space-top-sm">
                Call {site.phoneDisplay}
              </a>
              <p className="micro space-top-sm">
                Near Yelachenahalli Metro (Green Line), Kanakapura Road, South Bengaluru
              </p>
            </div>

            <div className="sidebar-card">
              <h3>Clinic Equipment & Safety</h3>
              <PhotoSlot label="AUTHENTIC CLINICAL DEVICE PHOTOGRAPH" />
              <p className="micro">
                Medicare Skin maintains authentic clinical equipment photographs and consented outcomes.
                We never present AI-generated imagery as real patient results.
              </p>
            </div>

            <div className="sidebar-card">
              <h3>Neighborhood Accessibility</h3>
              <p className="micro">
                Conveniently located for patients in:
              </p>
              <ul className="micro muted neighborhood-list">
                <li>Yelachenahalli & Kanakapura Road</li>
                <li>JP Nagar (Phases 1-8) & Jayanagar</li>
                <li>Banashankari & Padmanabhanagar</li>
                <li>Konanakunte Cross & Kumaraswamy Layout</li>
                <li>Uttarahalli & Anjanapura</li>
              </ul>
              <Link href="/locations/yelachenahalli/" className="micro link-accent">
                View clinic directions & parking →
              </Link>
            </div>
          </aside>
        </div>

        <CTA title={`Have questions about ${t.title.toLowerCase()}?`} />
      </div>
    </>
  );
}
