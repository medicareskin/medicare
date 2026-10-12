import React from 'react';
import { COSMETIC_TREATMENTS } from '../data/clinicData';
import { Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function CosmeticTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span style={{ background: '#FBF4F8', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '12px' }}>
            ✨ Facial Aesthetics & Rejuvenation
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Cosmetic Dermatology & Aesthetic Care
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Enhance natural beauty, restore lost facial volume, and rejuvenate your skin with Dr. Sujay M's non-surgical aesthetic therapies including medical chemical peels, dermal fillers, anti-wrinkle injections, and thread lifts.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="conditions-grid" style={{ marginBottom: '60px' }}>
          {COSMETIC_TREATMENTS.map((item) => (
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
                  Explore Treatment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Banner */}
        <div style={{ background: '#2B1B4D', color: '#FFF', padding: '50px', borderRadius: '20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', marginBottom: '14px' }}>
            Book Your Personalized Aesthetic Consultation
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Schedule an in-clinic facial evaluation with Dr. Sujay M to determine the safest and most subtle aesthetic enhancement for your features.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876', margin: '0 auto' }}>
            <Calendar size={18} /> Schedule Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
}
