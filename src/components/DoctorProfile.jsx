import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, Sparkles, Calendar } from 'lucide-react';

export default function DoctorProfile({ onOpenBooking }) {
  return (
    <section className="doctor-section" id="doctor-section">
      <div className="container">
        <div className="doctor-grid">
          {/* Doctor Card Image */}
          <div className="doctor-image-card">
            <img
              src="/images/imageye___-_imgi_6_dr-sujay.webp"
              alt="Dr. Sujay M - Senior Dermatologist & Cosmetologist"
            />
            <div style={{ padding: '20px 24px', background: '#2B1B4D', color: '#FFF' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', margin: 0, color: '#FFF' }}>
                Dr. (Mrs.) Sujay M
              </h3>
              <p style={{ fontSize: '13px', margin: '4px 0 0', color: '#E2D9F3', fontWeight: '500' }}>
                MBBS, DDVL • Senior Dermatologist & Cosmetologist
              </p>
            </div>
          </div>

          {/* Doctor Bio Content */}
          <div className="doctor-info-content">
            <h2>Know More About Dr. Sujay M</h2>
            <div className="doctor-subtitle">Best Dermatologist in Bangalore</div>

            <p>
              Dr. Sujay M is a renowned Dermatologist in Bangalore with over <strong>18+ years of experience</strong>.
              She is a qualified <strong>MBBS, DDVL</strong>, having completed her postgraduate degree from the prestigious
              <strong> Bangalore Medical College in the year 2005</strong>.
            </p>

            <p>
              Medicare Skin and Cosmetic Clinic is the brainchild of Dr. Sujay M, committed to providing the best Skin,
              hair and body care to her patients at affordable prices. She is also extensively trained in advanced laser
              technologies and has a keen eye for facial aesthetic harmony.
            </p>

            <p>
              She is one of the most sought-after doctors in the industry and is known for performing advanced clinical
              and aesthetic dermatological procedures with high precision and compassionate patient care.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFF', padding: '10px 16px', borderRadius: '8px', border: '1px solid #EBE0EA' }}>
                <GraduationCap size={20} style={{ color: '#942876' }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#2B1B4D' }}>Bangalore Medical College (2005)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFF', padding: '10px 16px', borderRadius: '8px', border: '1px solid #EBE0EA' }}>
                <Award size={20} style={{ color: '#942876' }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#2B1B4D' }}>18+ Yrs Clinical Experience</span>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#2B1B4D' }}>
                <Calendar size={18} /> Book Consultation with Dr. Sujay M
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
