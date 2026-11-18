import Link from 'next/link';
import { clinic, PHONE, bookingWhatsapp } from '../lib/clinic-facts';
import { TruthGatedTrust } from './TruthGatedTrust';

/** Drop into the existing homepage; never substitute generated doctors for genuine images. */
export function SafeHero() {
  return (
    <>
      <section className="msc-hero" aria-labelledby="msc-hero-heading">
        <div className="msc-hero-copy">
          <p className="msc-eyebrow">DERMATOLOGIST-LED CARE · SOUTH BENGALURU</p>
          <h1 id="msc-hero-heading">Skin, Hair & Laser Care Guided by a Dermatologist in South Bengaluru</h1>
          <p>
            Consult {clinic.doctor.displayName}, MBBS, DDVL, for assessment of acne, pigmentation, melasma, hair loss and medical skin concerns near Yelachenahalli Metro Station.
          </p>
          <div className="msc-actions">
            <Link className="msc-btn" href="/book-appointment/">Request Consultation</Link>
            <a className="msc-btn msc-btn-light" href={`tel:${PHONE}`}>Call the Clinic</a>
            <a className="msc-text-link" href={bookingWhatsapp()}>WhatsApp Enquiry</a>
          </div>
          <p className="msc-small">Recommendations depend on medical assessment. No result or procedure is guaranteed.</p>
        </div>
        <div className="msc-hero-media" aria-label="Authentic Clinic Care">
          <img
            src="/images/dr_sujay_m_first.jpg"
            alt="Dr. (Mrs.) Sujay M - Consultant Dermatologist"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
          />
        </div>
      </section>
      <TruthGatedTrust />
    </>
  );
}

export default SafeHero;

