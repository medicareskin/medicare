'use client';

import { useState } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProcedurePricing {
  id: string;
  name: string;
  category: string;
  range: string;
  unit: string;
  typicalSessions: string;
  downtime: string;
  included: string[];
  influencingFactors: string[];
  recommendedInterval: string;
}

const PRICING_DATA: ProcedurePricing[] = [
  {
    id: 'melasma-laser',
    name: 'Q-Switched Laser Melasma Toning',
    category: 'Pigmentation',
    range: '₹2,500 – ₹6,000',
    unit: 'per session',
    typicalSessions: '6 to 8 sessions',
    downtime: 'Zero downtime (mild transient warmth)',
    included: [
      'Comprehensive dermoscopic pigment depth check',
      'Low-fluence 1064nm Q-switched photoacoustic toning',
      'Post-procedure calming peptide mask & mineral sunblock'
    ],
    influencingFactors: [
      'Epidermal vs. dermal pigment depth',
      'Area size (isolated malar cheeks vs. full face & neck)',
      'Combination with gentle medical depigmentation peels'
    ],
    recommendedInterval: 'Spaced every 3 to 4 weeks'
  },
  {
    id: 'acne-scar-mnrf',
    name: 'Atrophic Acne Scar Remodeling (Subcision + MNRF)',
    category: 'Acne Scars',
    range: '₹3,500 – ₹8,000',
    unit: 'per session',
    typicalSessions: '4 to 6 sessions',
    downtime: '24–48 hours mild pinkness',
    included: [
      'Topical anesthetic application for comfortable treatment',
      'Nokor needle subcision to release tethered rolling scars',
      'Fractional radiofrequency micro-needling (MNRF) pass',
      'Post-procedural epidermal growth factor soothing serum'
    ],
    influencingFactors: [
      'Severity and grade of scar depressions (rolling, boxcar, icepick)',
      'Depth of needle penetration required (1.5mm to 3.5mm)',
      'Focal TCA CROSS integration for deep icepick scars'
    ],
    recommendedInterval: 'Spaced every 4 to 6 weeks'
  },
  {
    id: 'laser-hair-reduction',
    name: 'Triple-Wavelength Laser Hair Reduction',
    category: 'Laser',
    range: '₹1,999 – ₹7,500',
    unit: 'per session (area dependent)',
    typicalSessions: '6 to 8 sessions',
    downtime: 'Zero downtime',
    included: [
      'Dermatologist skin phototype calibration (Fitzpatrick IV–VI)',
      'Triple-wavelength (808nm / 1064nm) laser emission',
      'Active chilled sapphire contact cooling throughout',
      'Post-treatment soothing anti-inflammatory gel'
    ],
    influencingFactors: [
      'Anatomical area: Upper Lip / Chin (₹1,999+), Underarms (₹2,499+), Full Face (₹3,999+), Full Body packages',
      'Hair density, hair thickness, and hormonal background'
    ],
    recommendedInterval: 'Spaced every 4 to 6 weeks'
  },
  {
    id: 'prp-gfc-hair',
    name: 'Hair Fall Biological Therapy (PRP / GFC)',
    category: 'Hair Care',
    range: '₹3,000 – ₹6,500',
    unit: 'per session',
    typicalSessions: '4 to 6 sessions',
    downtime: 'Zero downtime',
    included: [
      'Sterile autologous blood collection & centrifuge processing',
      'Platelet activation to yield concentrated growth factors (GFC/PRP)',
      'Micro-papular scalp dermal papilla delivery by Dr. Sujay M',
      'Personalized medical prescription for DHT stabilization'
    ],
    influencingFactors: [
      'Choice between traditional PRP vs. acellular Growth Factor Concentrate (GFC)',
      'Stage of androgenetic alopecia or telogen effluvium thinning'
    ],
    recommendedInterval: 'Spaced every 4 weeks'
  },
  {
    id: 'hydrafacial-vortex',
    name: 'Medical-Grade 4-in-1 HydraFacial',
    category: 'Aesthetics',
    range: '₹2,499 – ₹5,500',
    unit: 'per session',
    typicalSessions: 'Single event-prep or monthly maintenance',
    downtime: 'Zero social downtime',
    included: [
      'Pneumatic vortex vacuum extraction of sebum and blackheads',
      'Gentle lactic and salicylic acid chemical exfoliation',
      'Antioxidant, hyaluronic acid, and peptide deep infusion',
      'Soothing cold therapy and broad-spectrum mineral sun protection'
    ],
    influencingFactors: [
      'Standard Clinical Infusion vs. Deluxe Pre-Bridal Radiance with targeted serums'
    ],
    recommendedInterval: 'Monthly or 4–5 days before major functions'
  },
  {
    id: 'chemical-peels',
    name: 'Dermatologist-Formulated Medical Peels',
    category: 'Skin Renewal',
    range: '₹1,500 – ₹3,500',
    unit: 'per session',
    typicalSessions: '3 to 5 sessions',
    downtime: 'Zero to mild flaking (2–3 days)',
    included: [
      'Pre-peel skin prep and barrier evaluation',
      'Customized acid application (salicylic, glycolic, lactic or mandelic)',
      'Exact timed neutralization and post-peel barrier cream'
    ],
    influencingFactors: [
      'Superficial comedonal peel vs. combination medium pigment peel'
    ],
    recommendedInterval: 'Spaced every 2 to 3 weeks'
  }
];

export function TreatmentCostPlanner() {
  const [selectedId, setSelectedId] = useState(PRICING_DATA[0].id);
  const current = PRICING_DATA.find((p) => p.id === selectedId) || PRICING_DATA[0];

  return (
    <section className="section soft" style={{ marginBlock: '48px', paddingBlock: '64px' }} id="cost-planner">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow-pill">TRANSPARENT TREATMENT PRICING</span>
          <h2 className="section-title">Transparent Cost Guidance &amp; Session Planning</h2>
          <p className="hero-lede center-block" style={{ maxWidth: '820px' }}>
            At Medicare Skin Clinic, we believe in upfront medical transparency. Review indicative clinic-approved price ranges, typical session counts, and what factors influence your individualized care plan.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginTop: '36px'
          }}
        >
          {/* Procedure Selection Column */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '28px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#111827' }}>
              Select a Treatment to Estimate:
            </h3>

            <div style={{ display: 'grid', gap: '10px' }}>
              {PRICING_DATA.map((item) => {
                const isSelected = item.id === selectedId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid var(--brand-primary, #153F39)' : '1px solid #E5E7EB',
                      background: isSelected ? 'rgba(21, 63, 57, 0.05)' : '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: isSelected ? 'var(--brand-primary, #153F39)' : '#1F2937' }}>
                        {item.name}
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>{item.category}</span>
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-primary, #153F39)' }}>
                      {item.range.split('–')[0].trim()}+
                    </span>
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '12px', fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5' }}>
              <strong>Zero Hidden Charges:</strong> All consultation and procedural fees include doctor supervision by Dr. (Mrs.) Sujay M (MBBS, DDVL).
            </div>
          </div>

          {/* Pricing Details Display Card */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '32px',
              border: '2px solid var(--brand-primary, #153F39)',
              boxShadow: '0 10px 30px rgba(21, 63, 57, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand-accent, #C5A174)' }}>
                    INDICATIVE CLINIC ESTIMATE
                  </span>
                  <h3 style={{ fontSize: '1.5rem', margin: '4px 0 0', color: '#111827' }}>
                    {current.name}
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #153F39)' }}>
                    {current.range}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>{current.unit}</span>
                </div>
              </div>

              {/* Session & Downtime Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '14px 0', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', margin: '16px 0' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Typical Course</span>
                  <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{current.typicalSessions}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Downtime</span>
                  <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{current.downtime}</strong>
                </div>
              </div>

              {/* What is Included */}
              <div style={{ marginBottom: '18px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#374151', marginBottom: '8px' }}>
                  What Your Session Includes:
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: '#4B5563', lineHeight: '1.6' }}>
                  {current.included.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>

              {/* What Influences Final Cost */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#374151', marginBottom: '8px' }}>
                  What Affects the Final Cost:
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.86rem', color: '#6B7280', lineHeight: '1.55' }}>
                  {current.influencingFactors.map((fac, i) => (
                    <li key={i}>{fac}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ paddingTop: '20px', borderTop: '1px solid #F3F4F6', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/book-appointment/"
                style={{
                  flex: 1,
                  minWidth: '180px',
                  background: 'var(--brand-primary, #153F39)',
                  color: '#FFFFFF',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Schedule Consultation
              </Link>
              <a
                href={waLink(`Hello Medicare Skin Clinic, I would like to enquire about pricing for ${current.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 18px',
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
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
