import React, { useState } from 'react';
import { SKIN_CONDITIONS, FEATURED_TREATMENTS } from '../data/clinicData';
import {
  Calendar, ShieldCheck, Sparkles, ChevronDown, CheckCircle2,
  ArrowRight, Phone, Award, Layers, HelpCircle
} from 'lucide-react';

export default function SkinTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    "All", "Acne & Scars", "Pigmentation", "Anti-Aging & Wrinkles",
    "Skin Tightening", "Medical Dermatology"
  ];

  const filteredConditions = SKIN_CONDITIONS.filter((item) => {
    if (filterCategory === 'All') return true;
    const title = item.title.toLowerCase();
    if (filterCategory === 'Acne & Scars') return title.includes('acne') || title.includes('pimple');
    if (filterCategory === 'Pigmentation') return title.includes('pigment') || title.includes('vitiligo');
    if (filterCategory === 'Anti-Aging & Wrinkles') return title.includes('rosacea') || title.includes('psoriasis');
    if (filterCategory === 'Skin Tightening') return title.includes('dermatitis') || title.includes('allergies');
    if (filterCategory === 'Medical Dermatology') return title.includes('bacterial') || title.includes('fungal') || title.includes('eczema');
    return true;
  });

  const skinFaqs = [
    {
      q: "How many sessions are typically required for acne scar revision?",
      a: "Most patients require 3 to 5 sessions spaced 4 weeks apart. We customize combination therapy (Subcision + MNRF + TCA Cross) depending on whether scars are rolling, boxcar, or icepick."
    },
    {
      q: "Can melasma and deep hyperpigmentation be permanently cured?",
      a: "Melasma is a chronic hormonal pigment condition that responds exceptionally well to clinical management. With targeted medical chemical peels, sun protection, and doctor-prescribed tyrosinase inhibitors, up to 80-90% clearance is achieved."
    },
    {
      q: "Is there any downtime after clinical chemical peels or microneedling?",
      a: "Superficial peels have zero downtime with mild flaking over 2-3 days. MNRF (Microneedling Radiofrequency) may cause mild redness that subsides within 12 to 24 hours, allowing you to resume normal work immediately."
    },
    {
      q: "Are the skincare treatments safe for sensitive and allergy-prone skin?",
      a: "Yes. Every treatment plan at Medicare Skin Clinic begins with a personalized dermoscopic patch evaluation by Senior Dermatologist Dr. Sujay M to ensure complete biocompatibility."
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
            CLINICAL DERMATOLOGY EXCELLENCE · SOUTH BENGALURU
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px', lineHeight: '1.18' }}>
            Advanced Skin Treatments in Bangalore
          </h1>
          <p style={{ fontSize: '17px', color: '#4E4158', lineHeight: '1.7' }}>
            Dr. Sujay M (MBBS, DDVL) provides personalized clinical solutions for active acne, stubborn pitted scars, melasma, hyperpigmentation, skin rejuvenation, and chronic medical dermatology.
          </p>
        </div>

        {/* 4-Stage Clinical Protocol Methodology */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(28px) saturate(210%)',
          WebkitBackdropFilter: 'blur(28px) saturate(210%)',
          border: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderRadius: '28px',
          padding: '36px 40px',
          boxShadow: '0 16px 44px rgba(139, 9, 108, 0.06)',
          marginBottom: '56px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#8B096C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              OUR 4-STAGE METHODOLOGY
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '6px 0 0' }}>
              The Dermatologist-Led Treatment Journey
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { num: '01', title: 'Digital Dermoscopy', desc: 'High-magnification subsurface imaging to evaluate pigment depth, vascularity, and follicular health.' },
              { num: '02', title: 'Doctor Protocol', desc: 'Direct evaluation by Dr. Sujay M to customize medical formulations and procedural fluence settings.' },
              { num: '03', title: 'Procedural Suite', desc: 'Sterile in-clinic procedures including MNRF, medical peels, subcision, and laser toning.' },
              { num: '04', title: 'Barrier Recovery', desc: 'Personalized barrier repair regimens and maintenance milestones to safeguard long-term results.' }
            ].map((step, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(139, 9, 108, 0.12)',
                borderRadius: '20px',
                padding: '22px 20px',
                textAlign: 'left'
              }}>
                <span style={{ fontSize: '28px', fontWeight: '800', color: '#8B096C', opacity: 0.8, display: 'block', marginBottom: '8px' }}>
                  {step.num}
                </span>
                <strong style={{ fontSize: '16px', color: '#1B0344', display: 'block', marginBottom: '6px' }}>
                  {step.title}
                </strong>
                <p style={{ fontSize: '13px', color: '#5C5268', margin: 0, lineHeight: '1.5' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Filter Bar */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '14px' }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '30px', color: '#153F39', margin: 0 }}>
              Clinical Skin Conditions
            </h2>
            <div className="category-tags-row" style={{ margin: 0 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tag-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skin Conditions Catalogue */}
        <div style={{ marginBottom: '64px' }}>
          <div className="conditions-grid">
            {filteredConditions.map((item) => (
              <div key={item.id} className="condition-card">
                <div className="condition-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="condition-card-body">
                  <div>
                    <h3 style={{ color: '#1B0344' }}>{item.title}</h3>
                    <p style={{ color: '#4E4158' }}>{item.summary}</p>
                  </div>
                  <button className="read-more-btn" onClick={() => onSelectCondition(item)}>
                    Read Full Details <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Procedures Grid */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '30px', color: '#153F39', marginBottom: '22px' }}>
            Popular Aesthetic &amp; Clinical Procedures
          </h2>
          <div className="treatments-slider-grid">
            {FEATURED_TREATMENTS.map((item) => (
              <div key={item.id} className="treatment-card-item" onClick={() => onSelectCondition(item)} style={{ cursor: 'pointer' }}>
                <div className="treatment-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="treatment-card-body">
                  <h3 style={{ color: '#1B0344' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#4E4158', marginBottom: '14px' }}>{item.description}</p>
                  <button className="read-more-btn">Explore Procedure</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Clinical FAQs Accordion */}
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
              EXPERT ANSWERS
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '6px 0 0' }}>
              Skin Care Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {skinFaqs.map((faq, idx) => (
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
            Book Your Customized Skin Consultation
          </h2>
          <p style={{ fontSize: '16px', color: '#4E4158', maxWidth: '620px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Schedule an in-person diagnostic evaluation with Dr. Sujay M to determine the safest and most effective procedure for your skin type.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="desk-btn-primary" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>Book Doctor Consultation</span>
              <ArrowRight size={16} />
            </button>
            <a href="tel:919242855707" className="desk-btn-call">
              <Phone size={16} />
              <span>Call +91 92428 55707</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
