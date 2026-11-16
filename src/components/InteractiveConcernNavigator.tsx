'use client';

import { useState } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ConcernItem {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  symptoms: string[];
  protocol: string;
  sessions: string;
  downtime: string;
  guidePath: string;
  consultQuery: string;
}

const CONCERNS: ConcernItem[] = [
  {
    id: 'acne-scars',
    tabLabel: 'Acne Scars',
    title: 'Atrophic & Pitted Acne Scar Reconstruction',
    category: 'Skin Remodeling',
    image: '/images/slide_scar_model_new.jpg',
    imageAlt: 'Atrophic Acne Scar Reconstruction with Subcision and MNRF',
    symptoms: [
      'Depressed rolling scars tethered to deep fascia',
      'Sharp-edged boxcar scars on cheeks and temples',
      'Punctate deep icepick scars resistant to surface creams'
    ],
    protocol: 'Multimodal revision: Nokor needle subcision to release tethers + Fractional MNRF to stimulate deep neocollagenesis.',
    sessions: '4 to 6 sessions spaced 4 weeks apart',
    downtime: '24–48 hours mild erythema (micro-crusting resolves in 3 days)',
    guidePath: '/treatments/skin/acne-scar-treatment/',
    consultQuery: 'Hello Dr. Sujay M, I would like to consult for Acne Scar Reconstruction.'
  },
  {
    id: 'melasma-pigment',
    tabLabel: 'Melasma & Pigmentation',
    title: 'Melasma, Sunspots & Dermal Pigmentation',
    category: 'Pigment Regulation',
    image: '/images/q-switched-laser-pigmentation-treatment-bangalore.webp',
    imageAlt: 'Low-Fluence Q-Switched Nd:YAG Laser Toning for Melasma',
    symptoms: [
      'Symmetrical brown/grey patches across cheeks, nose and upper lip',
      'Post-inflammatory dark blemishes following breakouts (PIH)',
      'Pigment darkening rapidly upon heat, sun, or cooking exposure'
    ],
    protocol: 'Sub-photothermal Q-Switched Nd:YAG laser toning + gentle depigmentation peels + iron-oxide tinted photoprotection.',
    sessions: '6 to 8 gentle toning sessions',
    downtime: 'Zero social downtime (mild warmth resolves in 30 mins)',
    guidePath: '/treatments/laser/q-switched-laser/',
    consultQuery: 'Hello Dr. Sujay M, I would like to consult for Melasma and Pigmentation.'
  },
  {
    id: 'hair-thinning',
    tabLabel: 'Hair Loss & PRP/GFC',
    title: 'Androgenetic Thinning & Diffuse Hair Fall',
    category: 'Trichology Care',
    image: '/images/slide_hair_new.jpg',
    imageAlt: 'Platelet-Rich Plasma and Growth Factor Concentrate Hair Restoration',
    symptoms: [
      'Widening central parting line in females (Ludwig pattern)',
      'Receding temples and vertex crown thinning in males',
      'Excessive telogen shedding (>100 hairs daily) after stress or illness'
    ],
    protocol: 'Trichoscopy scalp assessment + Autologous Growth Factor Concentrate (GFC) / PRP + medical follicle stabilization.',
    sessions: '4 to 6 sessions spaced 4 weeks apart',
    downtime: 'Zero downtime; wash hair normally the following morning',
    guidePath: '/treatments/hair/hair-loss-treatment/',
    consultQuery: 'Hello Dr. Sujay M, I would like to consult for Hair Thinning and GFC therapy.'
  },
  {
    id: 'laser-hair',
    tabLabel: 'Laser Hair Reduction',
    title: 'Triple-Wavelength Painless Hair Reduction',
    category: 'Laser Dermatology',
    image: '/images/slide_laser_new.jpg',
    imageAlt: 'US-FDA Cleared Laser Hair Reduction with Contact Cooling',
    symptoms: [
      'Coarse facial hair (chin, upper lip) associated with hormonal imbalance',
      'Recurrent painful ingrown hairs (folliculitis) from shaving or waxing',
      'Unwanted dense body hair on arms, legs, back, or underarms'
    ],
    protocol: 'Triple-wavelength (808nm Diode / 1064nm Nd:YAG) with chilled sapphire tip contact cooling to protect epidermal melanin.',
    sessions: '6 to 8 sessions spaced 4 to 6 weeks apart',
    downtime: 'Zero downtime; apply soothing aloe/sunblock post-session',
    guidePath: '/treatments/laser/laser-hair-reduction/',
    consultQuery: 'Hello Dr. Sujay M, I would like to enquire about Laser Hair Reduction.'
  },
  {
    id: 'active-acne',
    tabLabel: 'Active Acne & Pimples',
    title: 'Medical Acne Control & Cystic Breakout Prevention',
    category: 'Medical Dermatology',
    image: '/images/card_acne_pimples.jpg',
    imageAlt: 'Medical Acne Therapy and Comedonal Pore Clarification',
    symptoms: [
      'Painful inflammatory papules, pustules, and deep nodules',
      'Persistent micro-comedones (blackheads and whiteheads)',
      'Oily, inflamed skin prone to leaving dark post-acne marks'
    ],
    protocol: 'Targeted medical prescriptions (retinoids, anti-microbials) + customized clarifying salicylic/mandelic peels.',
    sessions: '2 to 4 sessions for rapid active inflammation control',
    downtime: 'Zero to mild flaking for 2–3 days',
    guidePath: '/treatments/skin/acne-treatment/',
    consultQuery: 'Hello Dr. Sujay M, I would like to consult for Active Acne and Breakout treatment.'
  },
  {
    id: 'hydra-glow',
    tabLabel: 'HydraFacial Glow',
    title: 'Medical-Grade 4-in-1 HydraFacial Vortex Infusion',
    category: 'Aesthetic Radiance',
    image: '/images/hydrafacial_procedure.jpg',
    imageAlt: 'HydraFacial Vortex Suction Extraction and Antioxidant Infusion',
    symptoms: [
      'Dull, lackluster skin with rough superficial texture',
      'Congested pores and stubborn blackheads around nose and chin',
      'Dehydrated, patchy skin prior to weddings or important social events'
    ],
    protocol: 'Pneumatic vortex vacuum extraction of sebum + gentle glycolic/salicylic exfoliation + hyaluronic acid and peptide bath.',
    sessions: 'Single event-prep session or monthly maintenance',
    downtime: 'Zero social downtime; instantaneous radiant glow',
    guidePath: '/treatments/aesthetics/hydrafacial/',
    consultQuery: 'Hello Dr. Sujay M, I would like to book a Medical HydraFacial session.'
  },
  {
    id: 'medical-conditions',
    tabLabel: 'Eczema & Psoriasis',
    title: 'Chronic Inflammatory Skin Conditions',
    category: 'Clinical Dermatology',
    image: '/images/imageye___-_imgi_24_Psoriasis.webp',
    imageAlt: 'Clinical Dermatology Consultation for Eczema and Psoriasis',
    symptoms: [
      'Itchy, red, cracked skin plaques with weeping or intense flaking',
      'Thick silvery micaceous plaques on scalp, elbows, or knees',
      'Depigmented chalky-white macules (vitiligo) requiring stability check'
    ],
    protocol: 'Definitive dermoscopic diagnosis + barrier restoration + targeted phototherapy or topical immunomodulators.',
    sessions: 'Continuous clinical monitoring and tailored management',
    downtime: 'Non-surgical medical outpatient management',
    guidePath: '/treatments/medical-dermatology/eczema/',
    consultQuery: 'Hello Dr. Sujay M, I would like to consult for a Medical Skin Condition (Eczema/Psoriasis/Vitiligo).'
  }
];

export function InteractiveConcernNavigator() {
  const [activeId, setActiveId] = useState(CONCERNS[0].id);
  const activeConcern = CONCERNS.find((c) => c.id === activeId) || CONCERNS[0];

  return (
    <section className="container section" style={{ marginBlock: '48px' }}>
      <div className="section-head center">
        <span className="eyebrow-pill">INTERACTIVE CONCERN NAVIGATOR</span>
        <h2 className="section-title">Explore Your Concern with Clinical Clarity</h2>
        <p className="hero-lede center-block" style={{ maxWidth: '800px' }}>
          Select your primary skin or hair condition below to review typical symptoms on Indian skin phototypes, recommended dermatologist protocols, expected session timelines, and downtime.
        </p>
      </div>

      {/* Tab Navigation Strip */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '28px',
          scrollbarWidth: 'thin'
        }}
        role="tablist"
        aria-label="Clinical Concerns Tabs"
      >
        {CONCERNS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              style={{
                padding: '10px 18px',
                borderRadius: '999px',
                border: isActive ? '2px solid var(--brand-primary, #153F39)' : '1px solid #E5E7EB',
                background: isActive ? 'var(--brand-primary, #153F39)' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#374151',
                fontSize: '0.88rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Concern Card Display */}
      <div
        className="card"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          padding: '36px',
          borderRadius: '24px',
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Image with Overlays */}
        <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', background: '#F3F4F6', minHeight: '300px' }}>
          <img
            src={activeConcern.image}
            alt={activeConcern.imageAlt}
            style={{ width: '100%', height: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(21, 63, 57, 0.92)',
              color: '#FFFFFF',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              backdropFilter: 'blur(8px)'
            }}
          >
            {activeConcern.category}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.94)',
              borderRadius: '12px',
              padding: '10px 14px',
              backdropFilter: 'blur(8px)',
              fontSize: '0.8rem',
              color: '#374151'
            }}
          >
            <strong>Direct Clinical Supervision:</strong> Evaluated personally by Dr. (Mrs.) Sujay M (MBBS, DDVL).
          </div>
        </div>

        {/* Right Column: Detailed Clinical Information */}
        <div>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-accent, #C5A174)',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            CLINICAL SPECIFICATION
          </span>

          <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.25', margin: '0 0 16px', color: '#111827' }}>
            {activeConcern.title}
          </h3>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6B7280', marginBottom: '8px' }}>
              Common Indications &amp; Presentation
            </h4>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.65', color: '#374151', fontSize: '0.92rem' }}>
              {activeConcern.symptoms.map((sym, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{sym}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: '#F9FAFB',
              borderLeft: '4px solid var(--brand-primary, #153F39)',
              padding: '14px 18px',
              borderRadius: '0 10px 10px 0',
              marginBottom: '20px',
              fontSize: '0.92rem',
              lineHeight: '1.6',
              color: '#374151'
            }}
          >
            <strong style={{ color: 'var(--brand-primary, #153F39)', display: 'block', marginBottom: '4px' }}>
              Recommended Dermatologist Protocol:
            </strong>
            {activeConcern.protocol}
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px' }}>
            <div style={{ padding: '10px 14px', background: '#F3F4F6', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', display: 'block', textTransform: 'uppercase' }}>Typical Sessions</span>
              <strong style={{ fontSize: '0.88rem', color: '#111827' }}>{activeConcern.sessions}</strong>
            </div>
            <div style={{ padding: '10px 14px', background: '#F3F4F6', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', display: 'block', textTransform: 'uppercase' }}>Expected Downtime</span>
              <strong style={{ fontSize: '0.88rem', color: '#111827' }}>{activeConcern.downtime}</strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href={activeConcern.guidePath}
              className="btn-primary"
              style={{
                background: 'var(--brand-primary, #153F39)',
                color: '#FFFFFF',
                padding: '12px 22px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              Read Full Treatment Guide &rarr;
            </Link>

            <a
              href={waLink(activeConcern.consultQuery)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '10px',
                border: '1px solid #25D366',
                color: '#128C7E',
                background: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <WhatsAppIcon size={16} color="#25D366" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

