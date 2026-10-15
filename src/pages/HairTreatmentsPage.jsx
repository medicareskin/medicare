import React, { useState } from 'react';
import { HAIR_CONDITIONS } from '../data/clinicData';
import {
  Calendar, CheckCircle2, ShieldCheck, Sparkles, ChevronDown,
  ArrowRight, Phone, Clock, Activity, Award
} from 'lucide-react';

export default function HairTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const hairFaqs = [
    {
      q: "What is the difference between GFT (Growth Factor Therapy) and standard PRP?",
      a: "GFT utilizes an advanced cellular concentration technique that isolates bio-active growth factors without red blood cells or granulocytes. This delivers up to 5x higher concentration of active peptides with zero inflammation or post-procedure soreness compared to traditional PRP."
    },
    {
      q: "How soon can I expect to see visible hair density improvement?",
      a: "Active hair shed typically stabilizes within 3 to 4 weeks (1-2 sessions). New terminal baby hair growth becomes visible around Month 3, and full density/thickness enhancement peaks between Months 5 and 6."
    },
    {
      q: "Are the scalp injections painful?",
      a: "No. We apply a topical medical numbing spray and use ultra-fine 32G mesotherapy needles with a chilled vibration technique, ensuring the entire 20-minute procedure is virtually painless."
    },
    {
      q: "Can severe male or female pattern baldness be reversed without surgery?",
      a: "In early to moderate grades (Norwood Grades 1-4 for men, Ludwig Grades 1-2 for women), non-surgical GFT combined with medical anti-androgen therapy successfully revives miniaturized follicles. For completely scarred areas, Dr. Sujay M assesses surgical transplant candidacy."
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
            CLINICAL TRICHOLOGY &amp; SCALP RESTORATION
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#1B0344', marginBottom: '16px', lineHeight: '1.18' }}>
            Advanced Hair Care &amp; Scalp Treatments
          </h1>
          <p style={{ fontSize: '17px', color: '#4E4158', lineHeight: '1.7' }}>
            From hair fall control and high-concentration Growth Factor Therapy (GFT) to laser scalp stimulation and anti-dandruff detox — experience science-backed hair restoration guided by Dr. Sujay M.
          </p>
        </div>

        {/* Hero Clinical Banner Grid */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(28px) saturate(210%)',
          WebkitBackdropFilter: 'blur(28px) saturate(210%)',
          border: '1.5px solid rgba(255, 255, 255, 0.98)',
          borderRadius: '28px',
          padding: '40px',
          boxShadow: '0 16px 44px rgba(139, 9, 108, 0.06)',
          display: 'grid',
          gridTemplateColumns: '400px 1fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '56px'
        }}>
          <div style={{ borderRadius: '22px', overflow: 'hidden', height: '100%', minHeight: '320px', background: '#FAF0F6' }}>
            <img
              src="/images/imageye___-_imgi_14_Hair-Treatment.webp"
              alt="Scalp consultation and GFT therapy at Medicare Skin Clinic"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#8B096C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              TIMELY INTERVENTION
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#1B0344', margin: '8px 0 14px' }}>
              Why Early Hair Fall Evaluation Matters
            </h2>
            <p style={{ color: '#4E4158', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
              Hair loss typically progresses silently through follicular miniaturization. With early high-magnification trichoscopy and autologous Growth Factor Therapy (GFT), we revive dormant hair roots before permanent scarring takes place.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1B0344', fontWeight: '600' }}>
                <CheckCircle2 size={16} color="#8B096C" />
                <span>Micro-Trichoscopy Diagnostics</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1B0344', fontWeight: '600' }}>
                <CheckCircle2 size={16} color="#8B096C" />
                <span>High-Purity Autologous GFT</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1B0344', fontWeight: '600' }}>
                <CheckCircle2 size={16} color="#8B096C" />
                <span>Zero Downtime &amp; Soreness</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#1B0344', fontWeight: '600' }}>
                <CheckCircle2 size={16} color="#8B096C" />
                <span>Doctor Prescribed Maintenance</span>
              </div>
            </div>
            <button className="desk-btn-primary" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>Book Scalp Evaluation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3-Stage Hair Regrowth Timeline Milestones */}
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
              EXPECTED CLINICAL MILESTONES
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#1B0344', margin: '6px 0 0' }}>
              The 6-Month Hair Restoration Journey
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {[
              {
                month: 'Month 1 · Sessions 1-2',
                title: 'Hair Fall Stabilization',
                desc: 'Active shed dramatically slows down. Cellular micro-environment is detoxified, reducing inflammation around follicular bulbs.'
              },
              {
                month: 'Month 3 · Sessions 3-4',
                title: 'Vellus Hair Sprouting',
                desc: 'Noticeable baby hairs appear along hairline and crown partitions. Follicles transition from dormant telogen into active anagen phase.'
              },
              {
                month: 'Month 6 · Sessions 5-6',
                title: 'Density & Caliber Thickening',
                desc: 'Sprouted hairs mature into terminal, pigmented strands. Measured scalp coverage and hair shaft thickness increase substantially.'
              }
            ].map((m, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.72)',
                border: '1px solid rgba(139, 9, 108, 0.12)',
                borderRadius: '20px',
                padding: '24px 22px',
                position: 'relative'
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(139, 9, 108, 0.08)',
                  color: '#8B096C',
                  fontSize: '11.5px',
                  fontWeight: '800',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  marginBottom: '12px'
                }}>
                  {m.month}
                </span>
                <strong style={{ fontSize: '17px', color: '#1B0344', display: 'block', marginBottom: '8px' }}>
                  {m.title}
                </strong>
                <p style={{ fontSize: '13.5px', color: '#4E4158', margin: 0, lineHeight: '1.6' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hair Conditions Catalogue */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#1B0344', marginBottom: '24px' }}>
            Hair Concerns &amp; Clinical Solutions
          </h2>
          <div className="conditions-grid">
            {HAIR_CONDITIONS.map((item) => (
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

        {/* Hair FAQs Accordion */}
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
              FREQUENTLY ASKED
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#1B0344', margin: '6px 0 0' }}>
              Hair Restoration FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {hairFaqs.map((faq, idx) => (
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', marginBottom: '12px', color: '#1B0344' }}>
            Start Your Hair Recovery Today
          </h2>
          <p style={{ fontSize: '16px', color: '#4E4158', maxWidth: '620px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Book a clinical trichoscopy evaluation with Dr. Sujay M to diagnose the root cause of thinning and receive a targeted growth regimen.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="desk-btn-primary" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>Book Trichoscopy Consultation</span>
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
