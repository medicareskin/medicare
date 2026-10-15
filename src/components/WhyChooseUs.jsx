import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { Sparkles, Award, Sliders, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const iconMap = {
    Sparkles: <Sparkles size={32} />,
    Award: <Award size={32} />,
    Sliders: <Sliders size={32} />,
    ShieldCheck: <ShieldCheck size={32} />
  };

  return (
    <section className="why-us-section" style={{ padding: '85px 0', background: 'transparent' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(148, 40, 118, 0.22)',
              color: '#942876',
              padding: '6px 20px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '14px',
              boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)'
            }}
          >
            <Sparkles size={14} color="#942876" />
            THE MEDICARE STANDARD
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#2B1B4D', marginBottom: '14px' }}>
            Why Patients Choose Medicare
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Gold-standard clinical dermatology, personalized care plans, and ethical pricing in South Bangalore.
          </p>
        </div>

        <div className="why-us-grid" style={{ perspective: '1200px' }}>
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="why-us-item why-us-3d-card"
              style={{
                transformStyle: 'preserve-3d',
                background: 'rgba(255, 255, 255, 0.78)',
                backdropFilter: 'blur(28px) saturate(200%)',
                WebkitBackdropFilter: 'blur(28px) saturate(200%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '26px',
                padding: '36px 28px',
                boxShadow: '0 16px 40px rgba(148, 40, 118, 0.08), 0 2px 10px rgba(43, 27, 77, 0.03), inset 0 2px 3px rgba(255, 255, 255, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div
                className="why-us-icon-wrapper"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, rgba(148, 40, 118, 0.12) 0%, rgba(200, 80, 155, 0.2) 100%)',
                  border: '1.5px solid rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#942876',
                  marginBottom: '22px',
                  boxShadow: '0 8px 24px rgba(148, 40, 118, 0.14), inset 0 1px 2px rgba(255, 255, 255, 1)',
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.4s ease'
                }}
              >
                {iconMap[item.icon] || <Sparkles size={32} />}
              </div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  color: '#2B1B4D',
                  marginBottom: '12px',
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#5C5268',
                  lineHeight: '1.6',
                  margin: 0,
                  transform: 'translateZ(10px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
