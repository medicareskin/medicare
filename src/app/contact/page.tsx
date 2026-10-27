import type { Metadata } from 'next';
import Link from 'next/link';
import { site, mapUrl, mapEmbedUrl, waLink } from '@/lib/site';
import { meta } from '@/lib/metadata';

export const metadata: Metadata = meta(
  'Contact Medicare Skin in South Bengaluru | Consultation & Directions',
  'Contact Medicare Skin & Cosmetic Clinic near Yelachenahalli Metro Station, South Bengaluru. Clinic address, consultation hours, and live Google Maps directions.',
  '/contact/'
);

export default function Contact() {
  return (
    <section className="container section">
      <span className="eyebrow-pill">WE ARE HERE TO HELP</span>
      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--purple)', margin: '12px 0 8px' }}>
        Contact &amp; Visit Medicare Skin
      </h1>
      <p style={{ color: 'var(--muted)', maxWidth: '680px', marginBottom: '32px' }}>
        Schedule a personalized consultation with Dr. (Mrs.) Sujay M or visit our clinic opposite Yelachenahalli Metro Station.
      </p>

      <div className="two-cols align-center" style={{ gap: '48px' }}>
        <div className="card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Get in Touch</h2>
          <p style={{ margin: '0 0 12px' }}>
            <strong>Direct Phone:</strong><br />
            <a href={`tel:${site.phoneE164}`} style={{ color: 'var(--magenta)', fontWeight: 700, fontSize: '1.1rem' }}>
              {site.phoneDisplay}
            </a>
          </p>
          <p style={{ margin: '0 0 12px' }}>
            <strong>Email:</strong><br />
            <a href={`mailto:${site.email}`} style={{ color: 'var(--purple)', fontWeight: 600 }}>
              {site.email}
            </a>
          </p>
          <p style={{ margin: '0 0 18px', lineHeight: 1.6 }}>
            <strong>Clinic Address:</strong><br />
            {site.address}
          </p>
          <div className="buttons">
            <Link href="/book-appointment/" className="btn primary">
              Book Consultation →
            </Link>
            <a 
              className="btn outline" 
              href={waLink('Hello Medicare Skin, I would like to schedule a consultation with Dr. Sujay M.')} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
            <a 
              className="btn outline" 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google Maps ↗
            </a>
          </div>
        </div>

        <div className="embedded-map-card">
          <iframe
            title="Medicare Skin &amp; Cosmetic Clinic Google Map Location"
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
      </div>
    </section>
  );
}
