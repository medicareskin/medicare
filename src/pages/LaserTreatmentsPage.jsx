import React, { useState } from 'react';
import { LASER_TREATMENTS } from '../data/clinicData';
import {
  Calendar, ShieldCheck, Zap, Sparkles, ChevronDown,
  ArrowRight, Phone, CheckCircle2, Shield, HeartHandshake
} from 'lucide-react';

export default function LaserTreatmentsPage({ onSelectCondition, onSelectTreatment, onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);
  const handleSelect = onSelectTreatment || onSelectCondition;

  const laserFaqs = [
    {
      q: "What is the safety profile of laser hair reduction for Indian skin tones?",
      a: "When performed under dermatologist supervision with calibrated long-pulsed diode or Nd:YAG wavelengths, laser hair reduction has an established safety profile for darker Fitzpatrick skin phototypes. Contact cooling protects the epidermis, while energy is selectively delivered to follicular melanin. Mild temporary erythema is common; strict adherence to sun avoidance and post-procedure care minimizes the risk of pigmentary changes."
    },
    {
      q: "How many sessions are typically recommended for significant hair reduction?",
      a: "Because hair follicles cycle through Anagen (growth), Catagen (regression), and Telogen (resting) phases, lasers primarily target actively growing Anagen follicles. Most patients undergo 6 to 8 sessions scheduled 4 to 6 weeks apart, achieving substantial long-term reduction. Maintenance sessions may occasionally be required."
    },
    {
      q: "Does the treatment hurt?",
      a: "Most patients report only a mild, soothing tapping or cooling sensation, similar to a cold ice cube moving over the skin with occasional warm snaps on dense areas. No topical anesthesia is usually required."
    },
    {
      q: "What should I do before and after my laser session?",
      a: "Before: Shave the treatment zone 24 hours prior; avoid bleaching, waxing, or plucking for 3 weeks. After: Apply prescribed soothing aloe or calamine gel, avoid hot steam showers for 24 hours, and use broad-spectrum SPF 50 sunscreen daily."
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
            <Zap size={14} color="#8B096C" />
            US-FDA CLEARED MEDICAL LASER SUITES
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px', lineHeight: '1.18' }}>
            Advanced Laser Dermatology &amp; Hair Reduction
          </h1>
          <p style={{ fontSize: '17px', color: '#4E4158', lineHeight: '1.7' }}>
            Experience doctor-supervised laser procedures customized specifically for Indian skin types (Fitzpatrick III-V). From chilled diode hair reduction to Dermatrix RF scar remodeling and Q-switched pigment toning.
          </p>
        </div>

        {/* Laser Technology & Safety Highlight Card */}
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
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#C5A174', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              CLINICAL EXCELLENCE
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '30px', color: '#153F39', margin: '6px 0 0' }}>
              Safety-First Protocols for Laser Dermatology
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(139, 9, 108, 0.12)',
              borderRadius: '20px',
              padding: '24px 22px'
            }}>
              <ShieldCheck size={28} color="#8B096C" style={{ marginBottom: '12px' }} />
              <strong style={{ fontSize: '17px', color: '#1B0344', display: 'block', marginBottom: '8px' }}>
                Triple-Wavelength Optics
              </strong>
              <p style={{ fontSize: '13.5px', color: '#4E4158', margin: 0, lineHeight: '1.6' }}>
                Simultaneously targets 755nm, 808nm, and 1064nm depths, treating fine facial hairs as effectively as coarse root follicles.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(139, 9, 108, 0.12)',
              borderRadius: '20px',
              padding: '24px 22px'
            }}>
              <Sparkles size={28} color="#D4AF37" style={{ marginBottom: '12px' }} />
              <strong style={{ fontSize: '17px', color: '#1B0344', display: 'block', marginBottom: '8px' }}>
                Sapphire Contact Chilling
              </strong>
              <p style={{ fontSize: '13.5px', color: '#4E4158', margin: 0, lineHeight: '1.6' }}>
                Continuous 0°C contact cooling maintains epidermal safety throughout each pulse, ensuring a painless experience without thermal trauma.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(139, 9, 108, 0.12)',
              borderRadius: '20px',
              padding: '24px 22px'
            }}>
              <Shield size={28} color="#8B096C" style={{ marginBottom: '12px' }} />
              <strong style={{ fontSize: '17px', color: '#1B0344', display: 'block', marginBottom: '8px' }}>
                Dermatologist Supervision
              </strong>
              <p style={{ fontSize: '13.5px', color: '#4E4158', margin: 0, lineHeight: '1.6' }}>
                Fluence, pulse duration, and skin type calibration are prescribed and monitored directly by Dr. Sujay M (MBBS, DDVL).
              </p>
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', marginBottom: '24px' }}>
            Clinical Laser Procedures
          </h2>
          <div className="conditions-grid">
            {LASER_TREATMENTS.map((item) => (
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
                    Read Laser Details <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Laser FAQs Accordion */}
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
              PATIENT GUIDELINES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '6px 0 0' }}>
              Laser Treatment FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {laserFaqs.map((faq, idx) => (
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
            Book Your Laser Patch Test &amp; Consultation
          </h2>
          <p style={{ fontSize: '16px', color: '#4E4158', maxWidth: '620px', margin: '0 auto 26px', lineHeight: '1.6' }}>
            Experience our ice-cool sapphire laser on a small test zone and receive an in-person skin calibration by Dr. Sujay M.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button className="desk-btn-primary" onClick={onOpenBooking}>
              <Calendar size={18} />
              <span>Book Laser Patch Test</span>
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
