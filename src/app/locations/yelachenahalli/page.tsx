import type { Metadata } from 'next';
import Link from 'next/link';
import { site, mapUrl, mapEmbedUrl } from '@/lib/site';
import { meta, jsonLd, clinicEntity } from '@/lib/metadata';
import { ContactStrip } from '@/components/Elements';

export const metadata: Metadata = meta(
  'Dermatologist Near Yelachenahalli Metro, South Bengaluru | Medicare Skin',
  'Find Medicare Skin & Cosmetic Clinic in Jyothi Layout, Kanakapura Main Road near Yelachenahalli Metro Station. Consultation with Dr. (Mrs.) Sujay M (MBBS, DDVL).',
  '/locations/yelachenahalli/'
);

export default function ClinicLocation() {
  return (
    <section className="container section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(clinicEntity) }}
      />
      <span className="eyebrow-pill">VISIT OUR CLINIC</span>
      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--purple)', margin: '12px 0 8px' }}>
        Medicare Skin Near Yelachenahalli Metro
      </h1>
      <p className="hero-lede" style={{ maxWidth: '720px', color: 'var(--muted)', marginBottom: '32px' }}>
        Convenient dermatologist-led clinic serving Yelachenahalli, Kanakapura Road, JP Nagar, Banashankari, Konanakunte, and neighboring South Bengaluru areas.
      </p>

      <div className="two-cols align-center" style={{ gap: '48px', marginBottom: '48px' }}>
        <div className="embedded-map-card">
          <iframe
            title="Medicare Skin Clinic Google Map"
            src={mapEmbedUrl}
            className="embedded-map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-floating-overlay">
            <div className="map-overlay-info">
              <span className="map-overlay-title">Medicare Skin &amp; Cosmetic Clinic</span>
              <span className="map-overlay-sub">Jyothi Layout, Yelachenahalli, Bengaluru</span>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-overlay-btn"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          <span className="eyebrow-pill">CLINIC ADDRESS &amp; ACCESS</span>
          <h2 style={{ fontSize: '1.6rem', marginTop: '10px', marginBottom: '14px' }}>Visit Details</h2>
          <address className="not-italic" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '18px' }}>
            <strong>Medicare Skin &amp; Cosmetic Clinic</strong><br />
            {site.address}
          </address>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '12px' }}>
            <strong>Metro Landmark:</strong> Opposite Yelachenahalli Metro Station (Green Line, 250m walking distance).
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '22px' }}>
            <strong>Direct Phone:</strong> <a href={`tel:${site.phoneE164}`} style={{ color: 'var(--magenta)', fontWeight: 700 }}>{site.phoneDisplay}</a>
          </p>
          <div className="buttons">
            <a className="btn primary" href={mapUrl} target="_blank" rel="noopener noreferrer">
              Open Google Maps Directions ↗
            </a>
            <Link className="btn outline" href="/book-appointment/">
              Book Consultation →
            </Link>
          </div>
        </div>
      </div>

      <div className="section short">
        <h2>Dermatology &amp; Aesthetic Care</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '780px', margin: '8px 0 24px' }}>
          Consult with Dr. (Mrs.) Sujay M (MBBS, DDVL) for <Link href="/treatments/skin/acne-treatment/">acne care &amp; scar revision</Link>, <Link href="/treatments/skin/pigmentation-treatment/">melasma &amp; Q-switched laser toning</Link>, <Link href="/treatments/hair/hair-loss-treatment/">trichoscopy &amp; hair thinning</Link>, or <Link href="/treatments/laser/laser-hair-reduction/">US FDA laser hair reduction</Link>.
        </p>
        <ContactStrip />
      </div>
    </section>
  );
}
