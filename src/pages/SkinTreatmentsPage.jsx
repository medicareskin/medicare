import React, { useState } from 'react';
import { SKIN_CONDITIONS, FEATURED_TREATMENTS } from '../data/clinicData';
import { Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function SkinTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ["All", "Acne & Scars", "Pigmentation", "Anti-Aging & Wrinkles", "Skin Tightening", "Medical Dermatology"];

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

  return (
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Advanced Skin Treatments in Bangalore
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Dr. Sujay M (MBBS, DDVL) provides specialized clinical solutions for pimples, acne scars, hyperpigmentation, melasma, eczema, skin tightening, chemical peels, dermal fillers, and vitiligo surgery.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="category-tags-row">
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

        {/* Featured Procedures Grid */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#2B1B4D', marginBottom: '24px' }}>
            Popular Aesthetic & Clinical Procedures
          </h2>
          <div className="treatments-slider-grid">
            {FEATURED_TREATMENTS.map((item) => (
              <div key={item.id} className="treatment-card-item" onClick={() => onSelectCondition(item)} style={{ cursor: 'pointer' }}>
                <div className="treatment-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="treatment-card-body">
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#5C5268', marginBottom: '14px' }}>{item.description}</p>
                  <button className="read-more-btn">Explore Procedure</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skin Conditions Catalogue */}
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#2B1B4D', marginBottom: '24px' }}>
            Skin Conditions & Clinical Care
          </h2>
          <div className="conditions-grid">
            {filteredConditions.map((item) => (
              <div key={item.id} className="condition-card">
                <div className="condition-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="condition-card-body">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <button className="read-more-btn" onClick={() => onSelectCondition(item)}>
                    Read Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: '#2B1B4D', color: '#FFF', padding: '50px', borderRadius: '16px', marginTop: '70px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', marginBottom: '14px' }}>
            Book Your Customized Skin Consultation
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Schedule an in-person diagnostic evaluation with Dr. Sujay M to determine the safest and most effective procedure for your skin type.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876', margin: '0 auto' }}>
            <Calendar size={18} /> Schedule Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
}
