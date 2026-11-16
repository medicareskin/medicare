import type { Metadata } from 'next';
import Link from 'next/link';
import { site, waLink, mapUrl, mapEmbedUrl } from '@/lib/site';
import { meta, physicianEntity, jsonLd } from '@/lib/metadata';
import { CTA } from '@/components/Elements';
import { ClinicalTrustMetrics } from '@/components/ClinicalTrustMetrics';
import { DoctorConsultingCard } from '@/components/DoctorConsultingCard';

export const metadata: Metadata = meta(
  'Dr. (Mrs.) Sujay M – Consultant Dermatologist in South Bengaluru',
  'Meet Dr. (Mrs.) Sujay M, MBBS, DDVL. 18+ years clinical experience in root-cause acne management, scar remodeling, melasma, and hair thinning at Medicare Skin Clinic near Yelachenahalli Metro.',
  '/doctors/dr-sujay-m/'
);

const CLINICAL_SPECIALTIES = [
  {
    title: 'Acne & Pitted Scar Revision',
    desc: 'Medical comedone extraction, chemical peels, and subcision with Microneedling RF (MNRF) calibrated for acne scars without post-inflammatory hyperpigmentation.'
  },
  {
    title: 'Melasma & Resistant Pigmentation',
    desc: 'Deep dermal melanin targeting using US FDA Q-Switched Nd:YAG laser toning combined with clinician-prescribed tyrosinase inhibitors.'
  },
  {
    title: 'Hair Fall & Follicle Diagnostics',
    desc: 'Trichoscopy-guided follicle assessment, nutritional/hormonal panel reviews, and medical growth factor therapies for androgenetic alopecia and telogen effluvium.'
  },
  {
    title: 'Medical Dermatology & Allergies',
    desc: 'Evidence-based management of chronic eczema, psoriasis, vitiligo, contact dermatitis, and fungal or bacterial infections.'
  },
  {
    title: 'Laser Dermatology for Indian Skin',
    desc: 'Conservative fluence parameters and safe wavelengths (1064nm) specifically calibrated for Fitzpatrick skin types III through V.'
  },
  {
    title: 'Anti-Ageing & Collagen Remodeling',
    desc: 'Non-surgical skin tightening, focused ultrasound, and barrier-restorative aesthetic protocols.'
  }
];

export default function DoctorPage() {
  return (
    <article className="doctor-page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            '@context': 'https://schema.org',
            ...physicianEntity
          })
        }}
      />

      {/* Exact UI/UX Doctor Hero Card matching reference design */}
      <DoctorConsultingCard asH1={true} showMiniNav={true} />

      {/* Relocated Clinical Trust & Performance Metrics Band */}
      <ClinicalTrustMetrics />

      {/* Doctor Detailed Biography & Verified Credentials */}
      <section className="container section" id="credentials">
        <div className="two-cols align-center" style={{ gap: '48px' }}>
          <div className="authentic-photo-slot portrait" style={{ maxWidth: '420px', margin: '0 auto' }}>
            <img
              src="/images/dr_sujay_m_official.jpg"
              alt="Dr. (Mrs.) Sujay M MBBS DDVL in clinic at Medicare Skin South Bengaluru"
              className="authentic-photo-img"
              style={{ borderRadius: '20px', width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <div className="authentic-photo-caption">
              <span className="caption-badge">Verified Registration</span>
              <span className="caption-title">Karnataka Medical Council Registered &bull; 18+ Years</span>
            </div>
          </div>

          <div>
            <span className="eyebrow-pill">CLINICAL REGISTRATION &amp; BACKGROUND</span>
            <h2 style={{ fontSize: '2.1rem', margin: '12px 0 16px' }}>
              Academic Training &amp; Dermatology Background
            </h2>
            <p style={{ lineHeight: 1.65, color: 'var(--ink)', marginBottom: '14px' }}>
              Dr. (Mrs.) Sujay M completed her undergraduate medical degree (MBBS) followed by postgraduate specialization in Dermatology, Venereology, and Leprosy (DDVL) from prestigious government medical institutions.
            </p>
            <p style={{ lineHeight: 1.65, color: '#4A3A32', marginBottom: '22px' }}>
              Over the last 18+ years, she has served thousands of patients across South Bengaluru, treating complex chronic dermatoses, difficult hormonal acne, recalcitrant melasma, and pattern hair loss. Her clinical ethos centers on honest patient counseling, avoiding exaggerated cosmetic claims, and prescribing root-cause therapies calibrated for Indian skin types.
            </p>

            <div className="credentials-pills-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '26px' }}>
              <span className="pill-badge" style={{ background: '#FFFFFF', border: '1px solid var(--line)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--purple)' }}>
                • MBBS Qualified Physician
              </span>
              <span className="pill-badge" style={{ background: '#FFFFFF', border: '1px solid var(--line)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--purple)' }}>
                • DDVL Post Graduate Specialist
              </span>
              <span className="pill-badge" style={{ background: '#FFFFFF', border: '1px solid var(--line)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--purple)' }}>
                • 18+ Years Dedicated Clinical Practice
              </span>
              <span className="pill-badge" style={{ background: '#FFFFFF', border: '1px solid var(--line)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--purple)' }}>
                • Karnataka Medical Council Registered
              </span>
            </div>

            <div className="buttons">
              <Link href="/book-appointment/" className="btn primary">
                Schedule Consultation With Dr. Sujay →
              </Link>
              <a
                href={waLink('Hello Dr. Sujay M, I would like to schedule a consultation at Medicare Skin Clinic.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn outline"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy & Patient Commitment */}
      <section className="container section">
        <div style={{ maxWidth: '780px', margin: '0 auto 40px', textAlign: 'center' }}>
          <span className="eyebrow-pill">CLINICAL ETHICS &amp; GOVERNANCE</span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '12px' }}>
            Why Direct In-Person Dermatology Matters
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            Skin and hair issues are medical conditions, not cosmetic inconveniences. At Medicare Skin Clinic, every diagnosis and treatment plan is formulated directly by Dr. Sujay M.
          </p>
        </div>

        <div className="cards three">
          <div className="card">
            <span className="eyebrow-pill">DIAGNOSIS FIRST</span>
            <h3 style={{ marginTop: '10px' }}>Comprehensive Medical Assessment</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              We evaluate symptom history, family predisposition, metabolic panels (PCOS, thyroid, ferritin), and skincare history before prescribing topicals or procedural interventions.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">INDIAN SKIN EXPERTISE</span>
            <h3 style={{ marginTop: '10px' }}>Calibrated for Fitzpatrick III–V</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Melanin-rich skin reacts sharply to aggressive heat and harsh peels with post-inflammatory hyperpigmentation. Dr. Sujay carefully adjusts laser fluences and peel concentrations for maximum safety.
            </p>
          </div>

          <div className="card">
            <span className="eyebrow-pill">ETHICAL TRANSPARENCY</span>
            <h3 style={{ marginTop: '10px' }}>Zero Outsourced Treatments</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              No commercial packages pushed by sales staff. Every recommended procedure has a clear clinical indication, realistic timeline, and transparent cost structure.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Clinical Specialization */}
      <section className="section soft">
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto 36px', textAlign: 'center' }}>
            <span className="eyebrow-pill">CLINICAL EXPERTISE</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '12px' }}>
              Specialised Treatment Areas
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
              Evidence-based medical, surgical, and laser protocols tailored to individual patient profiles.
            </p>
          </div>

          <div className="cards three">
            {CLINICAL_SPECIALTIES.map((spec) => (
              <div className="card" key={spec.title}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--purple)', marginBottom: '8px' }}>
                  {spec.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Timings & Location */}
      <section className="container section">
        <div className="two-cols align-center" style={{ gap: '48px' }}>
          <div>
            <span className="eyebrow-pill">CLINIC VISITS</span>
            <h2>Consultation Timings &amp; Clinic Hours</h2>
            <p style={{ lineHeight: 1.6, color: 'var(--ink)' }}>
              Dr. (Mrs.) Sujay M conducts in-person outpatient consultations at Medicare Skin &amp; Cosmetic Clinic in South Bengaluru:
            </p>
            <div style={{ padding: '20px', background: 'var(--bg-soft)', borderRadius: '18px', border: '1px solid var(--line)', margin: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                <strong>Monday to Saturday</strong>
                <span style={{ fontWeight: 700, color: 'var(--purple)' }}>10:30 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                <strong>Sunday</strong>
                <span style={{ color: 'var(--muted)' }}>By Prior Confirmed Appointment Only</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.55 }}>
              Appointments are scheduled at spaced intervals to ensure each patient receives thorough, unhurried clinical attention.
            </p>
            <div className="buttons space-top">
              <Link href="/book-appointment/" className="btn primary">
                Request Preferred Consultation Slot →
              </Link>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn outline">
                View Location on Google Maps ↗
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

      {/* CTA Footer */}
      <div className="container section">
        <CTA />
      </div>
    </article>
  );
}
