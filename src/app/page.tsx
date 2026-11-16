import Link from 'next/link';
import type { Metadata } from 'next';
import { site, mapUrl, mapEmbedUrl, waLink } from '@/lib/site';
import { clinicEntity, physicianEntity, jsonLd, meta } from '@/lib/metadata';
import { categories, treatments, treatmentPath } from '@/lib/treatments';
import { CTA, SectionHeading } from '@/components/Elements';
import { BigHeroSlider } from '@/components/BigHeroSlider';
import { HeroFeatureSlides } from '@/components/HeroFeatureSlides';
import { BookingForm } from '@/components/BookingForm';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { ConditionsCarousel } from '@/components/ConditionsCarousel';
import { TransformationReveal } from '@/components/TransformationReveal';
import { PatientExperiences } from '@/components/PatientExperiences';
import { InteractiveConcernNavigator } from '@/components/InteractiveConcernNavigator';
import { TreatmentCostPlanner } from '@/components/TreatmentCostPlanner';
import { DoctorConsultingCard } from '@/components/DoctorConsultingCard';
import { FacilityGallerySlider } from '@/components/FacilityGallerySlider';
import { LocationSection } from '@/components/LocationSection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = meta(
  'Dermatologist in South Bengaluru | Medicare Skin & Cosmetic Clinic',
  'Personalised dermatology consultations for acne, pigmentation, hair loss, melasma, scars and laser care near Yelachenahalli Metro Station, South Bengaluru. Guided by Dr. (Mrs.) Sujay M (MBBS, DDVL).',
  '/'
);

const treatmentImages: Record<string, { image: string; alt: string }> = {
  'acne-treatment': {
    image: '/images/card_acne_pimples.jpg',
    alt: 'Clinical Acne Treatment and Active Breakout Assessment at Medicare Skin',
  },
  'acne-scar-treatment': {
    image: '/images/acne_scar_treatment_new.jpg',
    alt: 'Fractional MNRF Microneedling Radiofrequency Acne Scar Remodeling',
  },
  'melasma-treatment': {
    image: '/images/melasma_consultation_new.jpg',
    alt: 'Dermatologist Melasma Diagnosis and Dermoscopy Evaluation',
  },
  'pigmentation-treatment': {
    image: '/images/q-switched-laser-pigmentation-treatment-bangalore.webp',
    alt: 'Q-Switched Nd:YAG Laser Pigmentation and Dark Spot Therapy',
  },
  'chemical-peels': {
    image: '/images/medical_peel_glow.jpg',
    alt: 'Dermatological Chemical Peels for Skin Texture and Congestion',
  },
  'hair-loss-treatment': {
    image: '/images/card_hair_fall.jpg',
    alt: 'Hair Loss and Thinning Assessment with Growth Factor Therapy',
  },
};

export default function Home() {
  const featured = treatments.filter((x) =>
    ['acne-treatment', 'acne-scar-treatment', 'melasma-treatment', 'pigmentation-treatment', 'hair-loss-treatment', 'chemical-peels'].includes(x.slug)
  );

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      clinicEntity,
      physicianEntity,
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: 'Dermatologist-led skin, hair and aesthetic consultations in South Bengaluru near Yelachenahalli Metro Station.',
        publisher: { '@id': `${site.url}/#clinic` }
      },
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can Q-Switched laser safely treat melasma and dark spots on Indian skin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, when performed with low-fluence Nd:YAG protocols. Indian skin tones (Fitzpatrick IV–VI) have higher melanin content and can experience rebound darkening if treated with high heat. Dr. Sujay M utilizes calibrated sub-thermolytic energy parameters to gently shatter melanin clusters without heat buildup, backed by strict photoprotection protocols.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is HydraFacial and how does it differ from a regular beauty parlour facial?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HydraFacial is a medical device treatment combining vortex vacuum suction, gentle chemical exfoliation, painless extraction, and concentrated antioxidant-peptide infusion. Unlike salon facials that involve manual steaming and physical pinching that can cause micro-tears or broken capillaries, HydraFacial uses calibrated fluidics to purify pores and restore dewy hydration with zero downtime.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is Laser Hair Reduction permanent and safe for Indian skin tones?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Laser hair reduction achieves significant long-term reduction (typically 70% to 90% over a recommended series of 6 to 8 sessions). Our clinic utilizes US-FDA cleared Diode Laser technology operating at 808nm with integrated sapphire contact cooling, specifically calibrated to protect Indian skin phototypes (Fitzpatrick III to V) while targeting melanin in actively growing follicles.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the expected recovery time after Acne Scar Subcision?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Subcision combined with fractional microneedling RF may cause mild swelling or pinpoint redness for 24-48 hours. Most patients resume regular work and daily activities the very next day with broad-spectrum sunscreen and doctor-prescribed barrier recovery creams.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does Growth Factor Therapy (GFT) treat severe hair fall?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GFT concentrates natural autologous growth factors from your own blood plasma and micro-infuses them into dormant hair follicles, halting shedding and triggering thick hair shaft regrowth within 3 to 4 clinical sessions.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need a prior appointment before visiting Medicare Skin Clinic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While walk-ins are accommodated based on doctor availability, prior booking via our website or WhatsApp (+91 92428 55707) is strongly recommended to eliminate waiting times and guarantee your dedicated consultation slot with Dr. Sujay M.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homepageSchema) }}
      />

      {/* 1st Section: Editorial Hero Slider */}
      <BigHeroSlider />

      {/* 2nd Slide: Specialised Dermatology Protocols & Checkups */}
      <HeroFeatureSlides />

      {/* 3rd Slide: YOUR CONSULTING DERMATOLOGIST Dr. (Mrs.) Sujay M */}
      <div id="consulting-dermatologist">
        <DoctorConsultingCard asH1={false} showMiniNav={false} />
      </div>

      {/* Consultation Booking Form - Top of Health & Skin Conditions */}
      <section className="homepage-booking-section" id="book-consultation">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow-pill">CONSULTATION BOOKING</span>
            <h2 className="section-title">Schedule Your Consultation With Dr. Sujay M</h2>
            <p className="hero-lede center-block">
              In-person clinical evaluation for skin, hair, laser, and aesthetic care. Directly diagnosed and treated by Dr. (Mrs.) Sujay M.
            </p>
          </div>

          <div className="homepage-booking-grid">
            {/* Left Column: Doctor Profile & Fast-Track Actions */}
            <div className="booking-info-card">
              <div className="booking-info-top">
                <div className="doctor-badge-row">
                  <img
                    src="/images/dr_sujaya.jpeg"
                    alt="Dr. (Mrs.) Sujay M"
                    className="doctor-avatar-img"
                    width={62}
                    height={62}
                  />
                  <div>
                    <span className="info-card-eyebrow">CONSULTING DERMATOLOGIST</span>
                    <h3 className="doctor-card-name">Dr. (Mrs.) Sujay M</h3>
                    <p className="doctor-card-deg">MBBS, DDVL · 18+ Yrs Dedicated Practice</p>
                  </div>
                </div>

                <div className="clinic-schedule-box">
                  <h4 className="schedule-box-title">Consultation Schedule</h4>
                  <div className="schedule-row">
                    <span className="schedule-day">Monday – Saturday</span>
                    <span className="schedule-time">10:30 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</span>
                  </div>
                  <div className="schedule-row">
                    <span className="schedule-day">Sunday</span>
                    <span className="schedule-time">10:30 AM – 1:00 PM (Prior Appt)</span>
                  </div>
                </div>

                <div className="clinic-location-mini">
                  <h4 className="schedule-box-title">Clinic Location &amp; Landmark</h4>
                  <p className="location-text">
                    #14, 1st Floor, 100 Feet Ring Road, Jyothi Layout, Kanakapura Main Road
                  </p>
                  <p className="landmark-badge">
                    Directly Opp. Yelachenahalli Metro (Pillar 100)
                  </p>
                </div>
              </div>

              <div className="booking-quick-actions">
                <div className="booking-actions-row">
                  <a className="btn-call-compact" href={`tel:${site.phoneE164}`}>
                    <span>Call {site.phoneDisplay}</span>
                  </a>
                  <a
                    className="btn-wa-compact"
                    href={waLink('Hello Medicare Skin, I would like to book a consultation with Dr. Sujay M.')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={16} color="#25D366" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <a
                  className="map-link-text"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions on Google Maps →
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="booking-form-col">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions Carousel matching User Reference Image 5 */}
      <ConditionsCarousel />

      {/* Interactive Concern Navigator: Clinical Guidance tailored to Indian Skin */}
      <InteractiveConcernNavigator />

      {/* Transformation Reveal Story Slider (using provided slide img) */}
      <TransformationReveal />

      {/* Patient Experiences matching User Reference Image 2 */}
      <PatientExperiences />

      {/* Transparent Treatment Cost Planner & Estimator */}
      <TreatmentCostPlanner />

      {/* Care That Starts With Your Concern */}
      <section className="container section">
        <SectionHeading
          label="CLINICAL DEPARTMENTS"
          title="What would you like clinical guidance with?"
          description="Find a starting point tailored to your condition without needing to know technical medical terminology."
        />
        <div className="category-grid">
          {categories.map((c) => (
            <Link
              key={c.name}
              className="category-card"
              href={`/treatments/?category=${encodeURIComponent(c.name)}`}
            >
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  height: '140px',
                  marginBottom: '14px',
                  position: 'relative',
                  background: '#F3F4F6',
                }}
              >
                <img
                  src={c.image}
                  alt={`${c.name} Care at Medicare Skin Clinic`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span className="category-icon" aria-hidden="true">
                {c.icon}
              </span>
              <h3>{c.name}</h3>
              <p>{c.caption}</p>
              <span className="card-link">Explore Care Plan →</span>
            </Link>
          ))}
        </div>
        <div className="center space-top">
          <Link href="/concerns/" className="btn outline">
            Not sure which concern fits? Use our guided concern navigator →
          </Link>
        </div>
      </section>

      {/* Common Reasons to Consult */}
      <section className="section soft">
        <div className="container">
          <SectionHeading
            label="POPULAR TREATMENTS"
            title="Evidence-Based Skin &amp; Hair Therapies"
            description="Each procedure page outlines clinical indications, suitability, expected session timelines, and post-care guidance."
          />
          <div className="cards">
            {featured.map((t) => {
              const imgInfo = treatmentImages[t.slug];
              return (
                <article className="card" key={t.slug}>
                  {imgInfo && (
                    <div
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '14px',
                        height: '180px',
                        background: '#F8F6F2',
                      }}
                    >
                      <img
                        src={imgInfo.image}
                        alt={imgInfo.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <span className="eyebrow-pill">{t.category}</span>
                  <h3>
                    <Link href={treatmentPath(t)}>{t.title}</Link>
                  </h3>
                  <p>{t.summary}</p>
                  <Link className="card-link" href={treatmentPath(t)}>
                    Read treatment guidance →
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="center space-top">
            <Link className="btn outline" href="/treatments/">
              View all 25+ treatment categories →
            </Link>
          </div>
        </div>
      </section>


      {/* Patient Journey */}
      <section className="section soft">
        <div className="container">
          <SectionHeading
            label="PATIENT JOURNEY"
            title="Consultation in four transparent steps"
            description="What to expect before, during, and after your visit to our clinic."
          />
          <div className="steps-grid">
            {[
              ['01', 'Choose your concern', 'Browse skin, hair, laser, or aesthetic conditions online.'],
              ['02', 'Request appointment', 'Select a convenient morning or evening time slot.'],
              ['03', 'Consult with Dr. Sujay', '30-minute thorough assessment, skin examination & diagnosis.'],
              ['04', 'Follow care plan', 'Structured prescription, aftercare instructions & clinical review.']
            ].map(([n, t, desc]) => (
              <div className="step-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: '8px' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="center space-top">
            <Link className="btn primary" href="/book-appointment/">
              Request an appointment online →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology & Safety */}
      <section className="container section">
        <SectionHeading
          label="PROCEDURE SAFETY &amp; TECHNOLOGY"
          title="Advanced Medical Devices Calibrated for Indian Skin"
          description="Treating Indian skin types (Fitzpatrick III to V) requires specific laser wavelengths to avoid post-inflammatory hyperpigmentation (PIH). All devices and fluence parameters at Medicare Skin Clinic are calibrated directly by Dr. (Mrs.) Sujay M."
        />

        <div className="cards three" style={{ marginTop: '28px' }}>
          <div className="card">
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', height: '180px' }}>
              <img
                src="/images/q_switched_procedure.jpg"
                alt="Q-Switched Nd:YAG Laser Melasma Procedure"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span className="eyebrow-pill">PIGMENTATION &amp; MELASMA</span>
            <h3 style={{ marginTop: '8px' }}>Q-Switched Nd:YAG Laser</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '6px' }}>
              Dual wavelength (1064nm / 532nm) photoacoustic precision targeting dermal melanin without thermal tissue damage, safe for Indian complexions.
            </p>
            <div style={{ marginTop: '14px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--magenta)' }}>
              Melasma &amp; Freckles · Zero Downtime
            </div>
          </div>

          <div className="card">
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', height: '180px' }}>
              <img
                src="/images/hydrafacial_procedure.jpg"
                alt="Medical-Grade HydraFacial Procedure"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span className="eyebrow-pill">PORE CLEANSING &amp; HYDRATION</span>
            <h3 style={{ marginTop: '8px' }}>Medical-Grade HydraFacial</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '6px' }}>
              Multi-step vortex suction extraction with medical-grade hyaluronic acid and antioxidant infusion to clarify congested pores.
            </p>
            <div style={{ marginTop: '14px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--magenta)' }}>
              Deep Exfoliation · Instant Hydration
            </div>
          </div>

          <div className="card">
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', height: '180px' }}>
              <img
                src="/images/laser_device_console.jpg"
                alt="Microneedling RF Device Console"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span className="eyebrow-pill">SCAR REMODELING</span>
            <h3 style={{ marginTop: '8px' }}>Microneedling RF (MNRF)</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '6px' }}>
              Gold-plated insulated micro-electrodes delivering fractional radiofrequency into deep dermis to rebuild collagen and lift pitted acne scars.
            </p>
            <div style={{ marginTop: '14px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--magenta)' }}>
              Atrophic Scars · Pore Tightening
            </div>
          </div>
        </div>

        <div className="center space-top">
          <Link className="btn outline" href="/technology/">
            Explore Our Technology &amp; Safety Standards →
          </Link>
        </div>
      </section>

      {/* Physical Practice & Clinical Environment Showcase Slider */}
      <FacilityGallerySlider />

      {/* Location & Contact Section matching User Reference Image 3 */}
      <LocationSection />

      {/* Frequently Asked Questions matching User Reference Image 4 */}
      <FAQSection />

      {/* Global CTA */}
      <div className="container section">
        <CTA />
      </div>
    </>
  );
}
