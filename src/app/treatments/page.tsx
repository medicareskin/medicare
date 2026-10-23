import type {Metadata} from 'next';
import Link from 'next/link';
import {meta} from '@/lib/metadata';
import {categories, treatments, categoryToSlug, treatmentPath} from '@/lib/treatments';
import {indexingEnabled} from '@/lib/site';

export const metadata: Metadata = meta(
  'Skin, Hair & Aesthetic Treatments',
  'Browse dermatologist-led treatment information for skin, hair, laser, aesthetic and medical skin concerns at Medicare Skin Bengaluru.',
  '/treatments/'
);

export default async function Treatments({
  searchParams,
}: {
  searchParams: Promise<{category?: string}>;
}) {
  const {category} = await searchParams;
  const active = categories.some((c) => c.name === category) ? category : '';
  const selected = treatments.filter(
    (t) => (!indexingEnabled() || t.available) && (!active || t.category === active)
  );

  return (
    <section className="container section">
      <p className="eyebrow">CLINICAL SERVICES</p>
      <h1>Explore Treatments & Skin Concerns</h1>
      <p className="hero-lede">
        Choose a concern to understand indications, precautions, limitations and appropriate next
        steps. Not every listed procedure is confirmed as available.
      </p>
      <div className="filters">
        <Link className={!active ? 'active' : ''} href="/treatments/">
          All categories
        </Link>
        {categories.map((c) => (
          <Link
            key={c.name}
            className={active === c.name ? 'active' : ''}
            href={`/treatments/?category=${encodeURIComponent(c.name)}`}
          >
            {c.name}
          </Link>
        ))}
      </div>
      <div className="cards three">
        {selected.map((t) => {
          const path = treatmentPath(t);
          return (
            <article className="card" key={t.slug}>
              <span className="eyebrow">{t.category}</span>
              <h2 className="card-title">
                <Link href={path}>{t.title}</Link>
              </h2>
              <p>{t.summary}</p>
              {!t.available && <p className="micro">Procedure availability requires verification.</p>}
              <Link className="card-link" href={path}>
                Read patient guidance →
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
