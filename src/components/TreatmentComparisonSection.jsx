import React, { useState } from 'react';
import { 
  Zap, Droplets, CheckCircle2, ArrowRight, Sparkles, Clock, 
  ShieldCheck, HelpCircle, AlertCircle, Calendar, Phone, ChevronRight
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TreatmentComparisonSection({ onOpenBooking, onSelectTreatment, onNavigatePage }) {
  const [selectedConcern, setSelectedConcern] = useState('both');
  const [timeline, setTimeline] = useState('longterm');

  // Recommendation logic
  const getRecommendation = () => {
    if (timeline === 'immediate') {
      return {
        winner: 'HydraFacial',
        badge: 'Best Immediate Choice',
        title: 'HydraFacial Skin Rejuvenation is Recommended for You',
        reason: 'Because you need immediate visible radiance without downtime, HydraFacial delivers deep hydration, extracts surface impurities, and creates an instant camera-ready glow within 45–60 minutes.',
        actionId: 'hydrafacial'
      };
    }
    if (selectedConcern === 'pigment') {
      return {
        winner: 'Q-Switched Laser',
        badge: 'Targeted Clinical Choice',
        title: 'Q-Switched Nd:YAG Laser Toning is Recommended for You',
        reason: 'For stubborn dermal/epidermal melasma, freckles, sunspots, and deep post-inflammatory marks, Q-switched laser precisely shatters melanin clusters at the cellular level with lasting progressive clearance.',
        actionId: 'q-switched-laser'
      };
    }
    return {
      winner: 'Synergy Protocol',
      badge: 'Dr. Sujay M\'s Combination Protocol',
      title: 'Combination Protocol: HydraFacial followed by Laser Toning',
      reason: 'Dr. Sujay M often recommends receiving a deep hydradermabrasion session first to clear dead stratum corneum cells and sebum, followed 10–14 days later by Q-switched laser toning for superior, uniform light penetration and radiant clarity.',
      actionId: 'both'
    };
  };

  const rec = getRecommendation();

  const comparisonRows = [
    {
      feature: 'Primary Clinical Focus',
      laser: 'Deep pigment reduction (melasma, dark spots, sun spots, tanning, PIH)',
      hydra: 'Instant hydration, pore purification, dead cell exfoliation & radiance',
      winner: 'Laser for pigment; HydraFacial for texture/glow'
    },
    {
      feature: 'Technology & Modality',
      laser: 'Nanosecond 1064 nm / 532 nm Nd:YAG Photoacoustic Laser',
      hydra: 'Vortex vacuum suction + multi-step active serum hydradermabrasion',
      winner: 'Different mechanisms'
    },
    {
      feature: 'Target Skin Layer',
      laser: 'Deep Dermis + Basal Epidermal layer where melanin clusters reside',
      hydra: 'Epidermal stratum corneum surface & follicular pore openings',
      winner: 'Laser penetrates deeper'
    },
    {
      feature: 'Sensation & Pain Level',
      laser: 'Mild tingling or light warm snapping (like a gentle rubber band); comfortable',
      hydra: 'Completely painless, soothing cool suction sensation like a gentle massage',
      winner: 'HydraFacial is relaxing; Laser is very tolerable'
    },
    {
      feature: 'Downtime & Recovery',
      laser: 'Minimal (1–2 hours of mild transient pinkness; resume work immediately)',
      hydra: 'Zero downtime; instant radiant camera-ready complexion',
      winner: 'HydraFacial (0 downtime)'
    },
    {
      feature: 'Number of Sessions',
      laser: '4 to 8 sessions spaced 2 to 4 weeks apart for cumulative pigment breakdown',
      hydra: 'Single session for instant glow; monthly maintenance for ongoing skin health',
      winner: 'Laser for long-term fix; Hydra for instant boost'
    },
    {
      feature: 'Fitzpatrick Indian Skin Safety',
      laser: '100% safe when performed with low-fluence Nd:YAG laser toning protocol',
      hydra: 'Safe across all Indian skin phototypes (Types III to VI) year-round',
      winner: 'Both are safe for Indian skin'
    },
    {
      feature: 'Key Active Ingredients / Energy',
      laser: 'Top-hat collimated 1064 nm laser pulses (photoacoustic shockwave)',
      hydra: 'Hyaluronic acid, Salicylic acid (BHA), Lactic acid (AHA), antioxidant peptides',
      winner: 'Synergistic modalities'
    },
    {
      feature: 'Ideal For',
      laser: 'Patients battling stubborn melasma, hormonal patches, acne marks, tanning',
      hydra: 'Patients with dull, dry, clogged skin, pre-party/wedding events, blackheads',
      winner: 'Depends on your primary concern'
    }
  ];

  return (
    <section className="treatment-comparison-section" style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(148, 40, 118, 0.08)',
            border: '1.5px solid rgba(148, 40, 118, 0.2)',
            color: '#942876',
            padding: '6px 18px',
            borderRadius: '30px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#942876" />
            TREATMENT COMPARISON GUIDE
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#2B1B4D', margin: '0 0 14px', lineHeight: 1.25 }}>
            Q-Switched Laser vs. HydraFacial
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', lineHeight: 1.7 }}>
            Wondering whether you need Q-switched laser toning or a medical-grade HydraFacial? Review Dr. Sujay M’s side-by-side dermatological breakdown to understand how each technology works and which option best addresses your skin goals.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1.5px solid #EBE0EA',
          boxShadow: '0 16px 40px rgba(43, 27, 77, 0.06)',
          overflow: 'hidden',
          marginBottom: '50px'
        }}>
          {/* Table Header Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(220px, 1.4fr) minmax(220px, 1.4fr)',
            background: 'linear-gradient(135deg, #FAF4F9 0%, #F5ECF5 100%)',
            borderBottom: '2px solid #E7D5E5',
            padding: '20px 24px',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ fontWeight: 800, color: '#2B1B4D', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Comparison Criterion
            </div>
            
            {/* Laser Column Card Header */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '16px 20px',
              border: '1.5px solid rgba(148, 40, 118, 0.3)',
              boxShadow: '0 6px 18px rgba(148, 40, 118, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={16} color="#942876" />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#942876', textTransform: 'uppercase' }}>
                  Targeted Pigment Correction
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 4px' }}>
                Q-Switched Nd:YAG Laser
              </h3>
              <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                Low-Fluence Laser Toning for Melasma
              </div>
            </div>

            {/* HydraFacial Column Card Header */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '16px 20px',
              border: '1.5px solid rgba(43, 115, 175, 0.3)',
              boxShadow: '0 6px 18px rgba(43, 115, 175, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#F0F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Droplets size={16} color="#2B73AF" />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#2B73AF', textTransform: 'uppercase' }}>
                  Hydration & Instant Radiance
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 4px' }}>
                Medical HydraFacial
              </h3>
              <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                Vortex Exfoliation, Extraction & Serum Infusion
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div style={{ overflowX: 'auto' }}>
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(220px, 1.4fr) minmax(220px, 1.4fr)',
                  padding: '18px 24px',
                  background: idx % 2 === 0 ? '#FFFFFF' : '#FCFAFC',
                  borderBottom: idx === comparisonRows.length - 1 ? 'none' : '1px solid #F0E8F0',
                  gap: '16px',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontWeight: 700, color: '#2B1B4D', fontSize: '14px' }}>
                  {row.feature}
                </div>
                <div style={{ fontSize: '14px', color: '#4E4158', lineHeight: 1.55 }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#942876', marginRight: '8px', verticalAlign: 'middle' }} />
                  {row.laser}
                </div>
                <div style={{ fontSize: '14px', color: '#4E4158', lineHeight: 1.55 }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#2B73AF', marginRight: '8px', verticalAlign: 'middle' }} />
                  {row.hydra}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Table Action Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(220px, 1.4fr) minmax(220px, 1.4fr)',
            padding: '20px 24px',
            background: '#FAF5FA',
            borderTop: '1.5px solid #EBE0EA',
            gap: '16px',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#6A5F75' }}>
              Explore Dedicated Pages
            </div>
            <div>
              <button
                onClick={() => onNavigatePage && onNavigatePage('q-switched-laser')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #942876 0%, #B53691 100%)',
                  color: '#FFFFFF',
                  padding: '11px 18px',
                  borderRadius: '12px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                Q-Switched Laser Details <ArrowRight size={14} />
              </button>
            </div>
            <div>
              <button
                onClick={() => onNavigatePage && onNavigatePage('hydrafacial')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #2B73AF 0%, #3B8BD1 100%)',
                  color: '#FFFFFF',
                  padding: '11px 18px',
                  borderRadius: '12px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                HydraFacial Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Treatment Recommender Assistant */}
        <div style={{
          background: 'linear-gradient(135deg, #2B1B4D 0%, #3C1C52 100%)',
          borderRadius: '26px',
          padding: '36px 40px',
          color: '#FFFFFF',
          marginBottom: '50px',
          boxShadow: '0 20px 50px rgba(43, 27, 77, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <div style={{ maxWidth: '780px', marginBottom: '26px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#F1A9D4', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              INTERACTIVE CLINICAL ASSISTANT
            </span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', margin: '6px 0 10px', color: '#FFFFFF' }}>
              Not Sure Which Treatment Is Right For You?
            </h3>
            <p style={{ fontSize: '15px', color: '#D9D0E2', lineHeight: 1.6, margin: 0 }}>
              Answer two quick questions to see which treatment modality Dr. Sujay M recommends based on your specific skin priorities and schedule.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
            {/* Question 1 */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#F1A9D4', marginBottom: '8px' }}>
                1. What is your primary skin concern?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'pigment', label: 'Dark spots, Melasma, Sun tanning, Acne marks' },
                  { id: 'hydration', label: 'Dullness, Dehydration, Blackheads, Rough texture' },
                  { id: 'both', label: 'Both deep pigmentation AND dull/clogged skin' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedConcern(opt.id)}
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: selectedConcern === opt.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: selectedConcern === opt.id ? '1.5px solid #F1A9D4' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      cursor: 'pointer',
                      fontWeight: selectedConcern === opt.id ? 700 : 500,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#F1A9D4', marginBottom: '8px' }}>
                2. When do you need visible results?
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'immediate', label: 'Immediate glow (upcoming wedding, party or event in 1–3 days)' },
                  { id: 'longterm', label: 'Long-term correction (progressive, cumulative clearing over 1–3 months)' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setTimeline(opt.id)}
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: timeline === opt.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: timeline === opt.id ? '1.5px solid #F1A9D4' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      cursor: 'pointer',
                      fontWeight: timeline === opt.id ? 700 : 500,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Recommendation Result Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '18px',
            border: '1.5px solid rgba(241, 169, 212, 0.4)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                background: '#F1A9D4',
                color: '#2B1B4D',
                padding: '4px 12px',
                borderRadius: '14px',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                {rec.badge}
              </span>
              <span style={{ fontSize: '13px', color: '#D9D0E2' }}>
                Assessment by Dr. Sujay M, MBBS DDVL
              </span>
            </div>

            <div style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF' }}>
              {rec.title}
            </div>

            <p style={{ fontSize: '14px', color: '#EBE3F2', lineHeight: 1.6, margin: 0 }}>
              {rec.reason}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                onClick={() => onOpenBooking && onOpenBooking(rec.actionId === 'hydrafacial' ? 'facial' : 'pigmentation')}
                style={{
                  background: 'linear-gradient(135deg, #F1A9D4 0%, #FFFFFF 100%)',
                  color: '#2B1B4D',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                Schedule Diagnostic Consultation →
              </button>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={15} />
                Call Desk: +91 92428 55707
              </a>
            </div>
          </div>
        </div>

        {/* Doctor's Synergy Protocol Callout */}
        <div style={{
          background: '#FAF5FA',
          border: '1.5px solid #EAD8E8',
          borderRadius: '24px',
          padding: '36px 40px',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) auto',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#942876', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={16} color="#FFFFFF" />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                THE CLINICAL SYNERGY PROTOCOL
              </span>
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', margin: '0 0 10px' }}>
              Can Q-Switched Laser &amp; HydraFacial Be Combined?
            </h3>
            <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.65, margin: 0 }}>
              <strong>Yes, with strategic clinical timing.</strong> Performing a gentle hydradermabrasion treatment 10 to 14 days before your Q-switched laser toning session removes stubborn micro-comedones and dead stratum corneum cells. This allows laser light to penetrate uniformly without light-scattering surface debris, resulting in faster pigment breakdown and a luminous glass-skin finish.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/dr_sujaya.jpeg"
              alt="Dr. Sujay M"
              onError={(e) => { e.target.src = "/images/DR%20SUJAYA.jpeg"; }}
              style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '3px solid #942876', margin: '0 auto 8px', display: 'block' }}
            />
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#2B1B4D' }}>Dr. Sujay M</div>
            <div style={{ fontSize: '11px', color: '#942876', fontWeight: 600 }}>MBBS, DDVL · 18+ Yrs Exp</div>
          </div>
        </div>

      </div>
    </section>
  );
}
