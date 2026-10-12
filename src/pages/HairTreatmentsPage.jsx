import React from 'react';
import { HAIR_CONDITIONS } from '../data/clinicData';
import { Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function HairTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Advanced Hair Care & Scalp Treatments
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            From hair fall control and Growth Factor Therapy (GFT) to permanent laser hair removal and scalp dandruff treatment — experience science-backed hair restoration by Dr. Sujay M.
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="consultation-banner-grid" style={{ marginBottom: '60px' }}>
          <div className="before-after-card">
            <img src="/imageye___-_imgi_14_Hair-Treatment.webp" alt="Scalp consultation and GFT therapy" />
          </div>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', color: '#2B1B4D', marginBottom: '16px' }}>
              Why Early Hair Fall Intervention Matters
            </h2>
            <p style={{ color: '#5C5268', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
              Hair loss often progresses rapidly if left unmanaged. With early trichoscopy evaluation and targeted Growth Factor Therapy (GFT), we can revive dormant hair follicles before irreversible damage occurs.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#2B1B4D', marginBottom: '8px' }}>
                <CheckCircle2 size={18} color="#942876" /> US-FDA Approved Diode Laser Hair Reduction
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#2B1B4D', marginBottom: '8px' }}>
                <CheckCircle2 size={18} color="#942876" /> High-Concentration Growth Factor Injections
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#2B1B4D' }}>
                <CheckCircle2 size={18} color="#942876" /> Customized Anti-Dandruff & Scalp Detox Regimens
              </li>
            </ul>
            <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876' }}>
              <Calendar size={18} /> Book Scalp Evaluation
            </button>
          </div>
        </div>

        {/* Hair Conditions Catalogue */}
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#2B1B4D', marginBottom: '24px' }}>
            Hair Concerns & Clinical Solutions
          </h2>
          <div className="conditions-grid">
            {HAIR_CONDITIONS.map((item) => (
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
      </div>
    </div>
  );
}
