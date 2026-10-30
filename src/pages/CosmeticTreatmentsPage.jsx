import React, { useState } from 'react';
import { COSMETIC_TREATMENTS } from '../data/clinicData';
import {
  Calendar, Sparkles, ShieldCheck, ChevronDown, ArrowRight,
  Phone, Award, CheckCircle2, HeartHandshake
} from 'lucide-react';

export default function CosmeticTreatmentsPage({ onSelectCondition, onSelectTreatment, onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);
  const handleSelect = onSelectTreatment || onSelectCondition;

  const cosmeticFaqs = [
    {
      q: "Will dermal fillers or anti-wrinkle injections look artificial or frozen?",
      a: "No. Dr. Sujay M follows a conservative, anatomical approach aimed at natural enhancement rather than exaggeration. Expressions remain fluid, youthful, and relaxed without an unnatural 'frozen' appearance."
    },
    {
      q: "How long do dermal fillers and anti-wrinkle results last?",
      a: "Anti-wrinkle injections typically maintain smoothness for 4 to 6 months. Premium hyaluronic acid dermal fillers (for under-eyes, cheeks, or nasolabial folds) last between 12 and 18 months, dissolving naturally over time."
    },
    {
      q: "Is there any recovery downtime after a medi-facial or chemical peel?",
      a: "No social downtime. You can immediately return to work or attend social events. You will experience an immediate hydrated radiance, followed by mild cellular exfoliation over the next 48 hours."
    },
    {
      q: "Are cosmetic injectables administered by the doctor herself?",
      a: "Yes, 100%. At Medicare Skin Clinic, all injectables, fillers, and advanced peels are administered solely by Senior Consultant Dermatologist Dr. Sujay M (MBBS, DDVL) in a sterile clinical suite."
    }
  ];

  return (
    <div style={{ padding: '60px 0 80px', background: 'transparent' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 46px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 9, 108, 0.08)',
            border: '1.5px solid rgba(139, 9, 108, 0.2)',
            color: '#8B096C',
            padding: '6px 18px',
            borderRadius: '30px',
            fontSize: '12.5px',
            fontWeight: '800',
            letterSpacing: '0.04em',
            marginBottom: '16px'
          }}>
            <Sparkles size={14} color="#8B096C" />
            FACIAL AESTHETICS &amp; REJUVENATION SUITE
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px', lineHeight: '1.18' }}>
            Cosmetic Dermatology &amp; Aesthetic Care
          </h1>
          <p style={{ fontSize: '17px', color: '#4E4158', lineHeight: '1.7' }}>
            Enhance your natural beauty, restore subtle facial harmony, and revitalize your skin with Dr. Sujay M's non-surgical aesthetic therapies including medical chemical peels, dermal fillers, anti-wrinkle injections, and thread lifts.
          </p>
        </div>

        {/* 4 Aesthetic Pillars Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(28px) saturate(210%)',
          WebkitBackdropFilter: 'blur(28px) saturate(210%)',
          border: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderRadius: '28px',
          padding: '40px',
          boxShadow: '0 16px 44px rgba(139, 9, 108, 0.06)',
          marginBottom: '56px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#8B096C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              OUR AESTHETIC PHILOSOPHY
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '30px', color: '#153F39', margin: '6px 0 0' }}>
              Subtle, Natural &amp; Medically Safe
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { title: 'Medical Chemical Peels', desc: 'Custom lactic, glycolic, and TCA peels to eliminate superficial sun damage and impart deep dermal glow.' },
              { title: 'Hyaluronic Dermal Fillers', desc: 'Restore under-eye hollows, nasolabial folds, and cheek contours using clinically certified biocompatible hyaluronic acid gels.' },
              { title: 'Anti-Wrinkle Injections', desc: 'Precise micro-doses to relax forehead frown lines, crow’s feet, and neck bands while preserving natural emotion.' },
              { title: 'Non-Surgical Thread Lifts', desc: 'Absorbable PDO lifting threads to define the jawline and elevate sagging jowls without incisions or scars.' }
            ].map((p, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.72)',
                border: '1px solid rgba(139, 9, 108, 0.12)',
                borderRadius: '20px',
                padding: '24px 20px'
              }}>
                <strong style={{ fontSize: '16px', color: '#1B0344', display: 'block', marginBottom: '8px' }}>
                  {p.title}
                </strong>
                <p style={{ fontSize: '13px', color: '#4E4158', margin: 0, lineHeight: '1.55' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Procedures Grid */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', marginBottom: '24px' }}>
            Aesthetic Procedures Catalogue
          </h2>
          <div className="conditions-grid">
            {COSMETIC_TREATMENTS.map((item) => (
              <div key={item.id} className="condition-card">
                <div className="condition-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="condition-card-body">
                  <div>
                    <h3 style={{ color: '#1B0344' }}>{item.title}</h3>
                    <p style={{ color: '#4E4158' }}>{item.summary}</p>
                  </div>
                  <button className="read-more-btn" onClick={() => handleSelect && handleSelect(item)}>
                    Explore Procedure <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cosmetic FAQs Accordion */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(28px) saturate(210%)',
          WebkitBackdropFilter: 'blur(28px) saturate(210%)',
          border: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderRadius: '28px',
          padding: '40px',
          boxShadow: '0 16px 44px rgba(139, 9, 108, 0.06)',
          marginBottom: '64px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#8B096C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              EXPERT CONSULTATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '6px 0 0' }}>
              Aesthetic Treatments FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cosmeticFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid rgba(139, 9, 108, 0.14)',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1B0344'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="#8B096C"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#4E4158', lineHeight: '1.6', borderTop: '1px solid rgba(139, 9, 108, 0.08)', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Liquid Glass Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(253, 248, 255, 0.85) 100%)',
          backdropFilter: 'blur(30px) saturate(210%)',
          WebkitBackdropFilter: 'blur(30px) saturate(210%)',
          border: '2px solid rgba(255, 255, 255, 0.98)',
          padding: '48px 40px',
          borderRadius: '32px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(139, 9, 108, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 1)'
        }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '34px', marginBottom: '12px', color: '#153F39' }}>
            Book Your Personalized Aesthetic Consultation
          </h2>
          <p style={{ fontSize: '16px', color: '#4E4158', maxWidth: '620px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Schedule an in-clinic facial evaluation with Dr. Sujay M to determine the safest, most subtle aesthetic enhancement for your features.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="desk-btn-primary" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>Schedule Aesthetic Evaluation</span>
              <ArrowRight size={16} />
            </button>
            <a href="tel:919242855707" className="desk-btn-call">
              <Phone size={16} />
              <span>Call Reception</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
