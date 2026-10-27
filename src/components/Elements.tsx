import Link from 'next/link';
import { mapUrl, site, waLink } from '@/lib/site';

export function SectionHeading({
  label,
  title,
  description
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow-pill">{label}</p>
      <h2>{title}</h2>
      {description && <p className="section-lede">{description}</p>}
    </div>
  );
}

export function CTA({
  title = 'Ready for expert skin, hair and aesthetic care?',
  description = 'Consult with Dr. (Mrs.) Sujay M (MBBS, DDVL) for an individual clinical assessment and transparent discussion of treatment options.'
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="cta-panel" aria-label="Book your consultation">
      <div className="cta-content">
        <span className="eyebrow-pill">YOUR NEXT STEP</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Link className="btn primary" href="/book-appointment/">
            Request a Consultation →
          </Link>
          <a className="btn outline" href={`tel:${site.phoneE164}`}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="cta-clinic-badge" aria-label="Medicare Skin &amp; Cosmetic Clinic">
        <img
          src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
          alt="Medicare Skin &amp; Cosmetic Clinic Logo"
          className="cta-brand-logo-img"
          width={150}
          height={54}
        />
        <div className="badge-text-box">
          <strong>Medicare Skin</strong>
          <small>Yelachenahalli Metro</small>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      {items.map((x, i) => (
        <span key={x.href} className="breadcrumb-item">
          {i > 0 && <span className="breadcrumb-separator" aria-hidden="true"> / </span>}
          <Link href={x.href} className="breadcrumb-link">
            {x.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

export function PhotoSlot({
  label = 'Approved Clinical Photograph',
  shape = 'wide'
}: {
  label?: string;
  shape?: 'wide' | 'portrait';
}) {
  const lower = (label || '').toLowerCase();

  // Smart selection of genuine photographs instead of empty placeholders
  let imgSrc = '/images/medicare_hero_skin_radiance.jpg';
  let imgAlt = 'Radiant healthy skin and clinical dermatology care at Medicare Skin & Cosmetic Clinic';
  let caption = 'Personalized Skin, Hair & Laser Aesthetics';

  if (lower.includes('doctor') || lower.includes('physician') || lower.includes('sujay')) {
    imgSrc = '/images/dr_sujaya.jpeg';
    imgAlt = 'Dr. (Mrs.) Sujay M, Consultant Dermatologist at Medicare Skin';
    caption = 'Dr. (Mrs.) Sujay M · MBBS, DDVL';
  } else if (lower.includes('clinic') || lower.includes('reception') || lower.includes('facility') || lower.includes('exterior') || lower.includes('equipment') || lower.includes('technology') || lower.includes('laser')) {
    imgSrc = '/images/medicare_clinic_reception.jpg';
    imgAlt = 'Medicare Skin & Cosmetic Clinic Reception and Consultation Chambers';
    caption = 'Medicare Skin Clinic · South Bengaluru';
  } else if (lower.includes('hydra') || lower.includes('facial')) {
    imgSrc = '/images/hydrafacial-equipment-medicareskin.webp';
    imgAlt = 'HydraFacial Vortex Infusion System';
    caption = 'Original HydraFacial Medical Grade System';
  }

  return (
    <div className={`authentic-photo-slot ${shape}`}>
      <img src={imgSrc} alt={imgAlt} className="authentic-photo-img" loading="lazy" />
      <div className="authentic-photo-caption">
        <span className="caption-badge">Verified Clinic Facility</span>
        <span className="caption-title">{caption}</span>
      </div>
    </div>
  );
}

export function ContactStrip() {
  return (
    <div className="contact-strip-box">
      <a href={`tel:${site.phoneE164}`} className="contact-strip-item">
        Call {site.phoneDisplay}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={waLink('Hello Medicare Skin, I would like to enquire about a consultation.')}
        className="contact-strip-item whatsapp"
      >
        WhatsApp Enquiry ↗
      </a>
      <a target="_blank" rel="noopener noreferrer" href={mapUrl} className="contact-strip-item map">
        Clinic Directions ↗
      </a>
    </div>
  );
}
