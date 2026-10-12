import React from 'react';
import { LASER_TREATMENTS } from '../data/clinicData';
import { Calendar, ShieldCheck, Zap } from 'lucide-react';

export default function LaserTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span style={{ background: '#FAF4EE', color: '#2B1B4D', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '12px' }}>
            ⚡ US-FDA Approved Laser Technology
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Advanced Laser Dermatology & Hair Reduction
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Experience 100% medically supervised laser procedures designed specifically for South Asian skin tones. From painless diode laser hair reduction to Dermatrix RF scar microneedling and Q-switched laser toning.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="conditions-grid" style={{ marginBottom: '60px' }}>
          {LASER_TREATMENTS.map((item) => (
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
                  Read Laser Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Technology Highlights */}
        <div style={{ background: '#FAF4EE', padding: '40px', borderRadius: '20px', border: '1px solid #EEDCE6', marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#2B1B4D', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={28} color="#942876" /> Why Laser Care at Medicare Skin is 100% Safe
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#2B1B4D', marginBottom: '6px', fontSize: '16px' }}>US-FDA Certified Diode</h4>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>Targeted 808nm wavelengths safely target melanin roots without thermal damage to surrounding tissue.</p>
            </div>
            <div>
              <h4 style={{ color: '#2B1B4D', marginBottom: '6px', fontSize: '16px' }}>Integrated Contact Chilling</h4>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>Sapphire contact cooling maintains skin at comfortable temperatures during the entire session.</p>
            </div>
            <div>
              <h4 style={{ color: '#2B1B4D', marginBottom: '6px', fontSize: '16px' }}>Doctor Supervised</h4>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>All laser fluence settings are prescribed and verified by Senior Consultant Dr. Sujay M (MBBS, DDVL).</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ background: '#2B1B4D', color: '#FFF', padding: '50px', borderRadius: '20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', marginBottom: '14px' }}>
            Book Your Laser Patch Test & Consultation
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Get an in-person hair density analysis or skin scar evaluation with Dr. Sujay M.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876', margin: '0 auto' }}>
            <Calendar size={18} /> Book Laser Evaluation
          </button>
        </div>
      </div>
    </div>
  );
}
