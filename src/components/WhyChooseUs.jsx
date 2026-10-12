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
    <section className="why-us-section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '40px' }}>
          <h2>Why Choose Us?</h2>
          <p>Gold-standard dermatological excellence, personalized care, and proven safety</p>
        </div>

        <div className="why-us-grid">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="why-us-item">
              <div className="why-us-icon-wrapper">
                {iconMap[item.icon] || <Sparkles size={32} />}
              </div>
              <h3>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.5' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
