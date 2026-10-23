import React, { useState } from 'react';
import {
  Sparkles, Calendar, Phone, MessageCircle, Star, ShieldCheck,
  CheckCircle2, ArrowRight, Eye, Sliders, Droplets, Heart, Award
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LiquidGlassShowcase({ onOpenBooking }) {
  const [activeBackdrop, setActiveBackdrop] = useState('clinical'); // clinical, midnight, rose, sunset
  const [lightAngle, setLightAngle] = useState(45);
  const [lastClicked, setLastClicked] = useState(null);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0, show: false });

  const backdropGradients = {
    clinical: 'linear-gradient(135deg, #F8F9FD 0%, #F5ECF4 50%, #FAF0F7 100%)',
    midnight: 'linear-gradient(135deg, #1A0D2E 0%, #2B1542 50%, #3B1238 100%)',
    rose: 'linear-gradient(135deg, #FFE4E6 0%, #FCE7F3 50%, #EDE9FE 100%)',
    sunset: 'linear-gradient(135deg, #FFF1F2 0%, #FDF2F8 40%, #FEF3C7 100%)'
  };

  const handleButtonClick = (name, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true
    });
    setLastClicked(name);
    setTimeout(() => setRipplePos(prev => ({ ...prev, show: false })), 600);
  };

  return (
    <section
      className="liquid-glass-showcase-section"
      style={{
        padding: '70px 0 80px',
        position: 'relative',
        overflow: 'hidden',
        background: backdropGradients[activeBackdrop],
        transition: 'background 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Dynamic Ambient Caustic Glow Behind Section */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 80, 155, 0.22) 0%, rgba(148, 40, 118, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '15%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(148, 40, 118, 0.18) 0%, rgba(43, 27, 77, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 46px' }}>
          <div
            className="liquid-glass-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              marginBottom: '14px',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#942876'
            }}
          >
            <Sparkles size={14} color="#942876" />
            <span>Apple VisionOS / iOS 18 Design Architecture</span>
          </div>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 650,
              color: activeBackdrop === 'midnight' ? '#FFFFFF' : '#153F39',
              lineHeight: 1.2,
              marginBottom: '14px',
              transition: 'color 0.4s ease'
            }}
          >
            Full Liquid Glass Button &amp; UI System
          </h2>

          <p
            style={{
              fontSize: '15.5px',
              color: activeBackdrop === 'midnight' ? '#D1C8DC' : '#5C4D68',
              lineHeight: 1.6,
              transition: 'color 0.4s ease'
            }}
          >
            Engineered with multi-depth optical refraction, real-time specular meniscus highlights,
            fluid caustic shadows, and spring-physics tactile squish.
          </p>

          {/* Interactive Environment Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '22px',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: activeBackdrop === 'midnight' ? '#FFFFFF' : '#2B1B4D',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Eye size={15} /> Test Refraction Backdrop:
            </span>

            {[
              { id: 'clinical', label: 'Clinical Daylight' },
              { id: 'midnight', label: 'Dark Obsidian' },
              { id: 'rose', label: 'Rose Gold' },
              { id: 'sunset', label: 'Amber Warmth' }
            ].map(bg => (
              <button
                key={bg.id}
                onClick={() => setActiveBackdrop(bg.id)}
                className="liquid-glass-badge"
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: activeBackdrop === bg.id ? 800 : 600,
                  color: activeBackdrop === bg.id ? '#FFFFFF' : (activeBackdrop === 'midnight' ? '#FFFFFF' : '#2B1B4D'),
                  background: activeBackdrop === bg.id
                    ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)'
                    : 'rgba(255, 255, 255, 0.45)',
                  cursor: 'pointer',
                  border: activeBackdrop === bg.id ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                {bg.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── INTERACTIVE BUTTON LABORATORY ── */}
        <div
          className="liquid-glass-card"
          style={{
            padding: '38px 32px',
            marginBottom: '46px',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '26px',
              flexWrap: 'wrap',
              gap: '12px',
              borderBottom: '1px solid rgba(148, 40, 118, 0.12)',
              paddingBottom: '16px'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 800,
                  color: '#2B1B4D',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Droplets size={20} color="#942876" />
                Live Liquid Glass Button Collection
              </h3>
              <p style={{ fontSize: '13px', color: '#6B5A79', marginTop: '3px' }}>
                Hover to trigger the specular caustic sweep. Click for tactile liquid squish feedback.
              </p>
            </div>

            {lastClicked && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: 'rgba(148, 40, 118, 0.12)',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#942876'
                }}
              >
                <CheckCircle2 size={14} color="#942876" />
                <span>Interacted with: <strong>{lastClicked}</strong></span>
              </div>
            )}
          </div>

          {/* Interactive Button Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            {/* 1. Flagship Liquid Magenta Glass */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                padding: '20px 16px',
                background: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.04em' }}>
                PRIMARY MAGENTA GLASS
              </span>
              <button
                className="btn-primary btn-liquid-primary"
                onClick={(e) => {
                  handleButtonClick('Liquid Magenta Primary', e);
                  if (onOpenBooking) onOpenBooking();
                }}
                style={{ width: '100%', maxWidth: '240px' }}
              >
                <Calendar size={17} />
                <span>Book Consultation</span>
                <ArrowRight size={15} />
              </button>
              <span style={{ fontSize: '11px', color: '#7E6F89' }}>
                Curved meniscus + caustic sweep
              </span>
            </div>

            {/* 2. Pure Water Crystal Glass */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                padding: '20px 16px',
                background: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#2B1B4D', letterSpacing: '0.04em' }}>
                WATER CRYSTAL GLASS
              </span>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="btn-secondary btn-liquid-secondary"
                onClick={(e) => handleButtonClick('Water Crystal Call', e)}
                style={{ width: '100%', maxWidth: '240px' }}
              >
                <Phone size={16} color="#942876" />
                <span>Call Clinic Desk</span>
              </a>
              <span style={{ fontSize: '11px', color: '#7E6F89' }}>
                Ultra-luminous water refraction
              </span>
            </div>

            {/* 3. Liquid Emerald Glass (WhatsApp) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                padding: '20px 16px',
                background: 'rgba(255, 255, 255, 0.45)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', letterSpacing: '0.04em' }}>
                LIQUID EMERALD GLASS
              </span>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-chat btn-liquid-emerald"
                onClick={(e) => handleButtonClick('Liquid Emerald WhatsApp', e)}
                style={{ width: '100%', maxWidth: '240px', padding: '13.5px 24px' }}
              >
                <MessageCircle size={17} />
                <span>WhatsApp Doctor</span>
              </a>
              <span style={{ fontSize: '11px', color: '#7E6F89' }}>
                Emerald translucent bloom
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL LIQUID GLASS UI/UX CARDS (CLINICAL PILLARS) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}
        >
          {[
            {
              icon: Award,
              color: '#153F39',
              title: '18+ Years Experience',
              sub: 'Dr. (Mrs.) Sujay M',
              desc: 'MBBS, DDVL from Bangalore Medical College (2005) with 18+ years of dedicated clinical practice.'
            },
            {
              icon: Star,
              color: '#C5A174',
              title: 'Verified Patient Trust',
              sub: 'Real Google Reviews',
              desc: 'Individualised clinical care with clear treatment guidance near Yelachenahalli Metro.'
            },
            {
              icon: ShieldCheck,
              color: '#153F39',
              title: 'Dermatologist Guidance',
              sub: 'Diagnosis-First Care',
              desc: 'Individual clinical assessment determining suitability, realistic benefits, and safety protocols.'
            },
            {
              icon: Heart,
              color: '#C5A174',
              title: 'Personalised Care',
              sub: 'Tailored Protocols',
              desc: 'Tailored clinical care for acne, pigmentation, hair loss, and medical dermatology concerns.'
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="liquid-glass-card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  cursor: 'pointer'
                }}
                onClick={(e) => handleButtonClick(`Pillar Card: ${card.title}`, e)}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 6px 16px rgba(148, 40, 118, 0.08), inset 0 1.5px 2px #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={24} color={card.color} />
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {card.sub}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#2B1B4D', marginTop: '2px' }}>
                    {card.title}
                  </h4>
                </div>

                <p style={{ fontSize: '13.5px', color: '#5C4D68', lineHeight: 1.55 }}>
                  {card.desc}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <span
                    className="liquid-glass-badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: '#942876'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
