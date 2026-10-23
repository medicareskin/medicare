import React from 'react';
import { Award, GraduationCap, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TrustStrip() {
  const TRUST_ITEMS = [
    {
      icon: <GraduationCap size={20} color="#153F39" />,
      title: "Experienced Dermatologist",
      subtitle: "Dr. (Mrs.) Sujay M (18+ Yrs, BMCRI)"
    },
    {
      icon: <ShieldCheck size={20} color="#153F39" />,
      title: "Personalised Assessment",
      subtitle: "Diagnostic-first care for skin & hair"
    },
    {
      icon: <MapPin size={20} color="#153F39" />,
      title: "Near Yelachenahalli Metro",
      subtitle: "Kanakapura Main Road, South BLR"
    },
    {
      icon: <CheckCircle2 size={20} color="#C5A174" />,
      title: "Clear Treatment Guidance",
      subtitle: "Evidence-based clinical options"
    }
  ];

  return (
    <div
      className="trust-strip-wrapper"
      style={{
        position: 'relative',
        zIndex: 20,
        margin: '-24px auto 30px',
        maxWidth: '1240px',
        padding: '0 20px',
        perspective: '1200px'
      }}
    >
      <div
        className="trust-strip-inner"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(30px) saturate(210%)',
          WebkitBackdropFilter: 'blur(30px) saturate(210%)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          padding: '20px 28px',
          boxShadow: '0 20px 48px rgba(148, 40, 118, 0.12), 0 4px 16px rgba(43, 27, 77, 0.04), inset 0 2px 3px rgba(255, 255, 255, 1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          transformStyle: 'preserve-3d'
        }}
      >
        {TRUST_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="trust-strip-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 10px',
              borderRight: idx !== TRUST_ITEMS.length - 1 ? '1px solid rgba(148, 40, 118, 0.12)' : 'none'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'rgba(148, 40, 118, 0.08)',
                border: '1px solid rgba(148, 40, 118, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(148, 40, 118, 0.06)'
              }}
            >
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#2B1B4D', lineHeight: 1.25 }}>
                {item.title}
              </div>
              <div style={{ fontSize: '11.5px', color: '#73617A', fontWeight: 500, marginTop: '3px' }}>
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
