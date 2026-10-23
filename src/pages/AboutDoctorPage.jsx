import React from 'react';
import DoctorProfile from '../components/DoctorProfile';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, HeartHandshake, ShieldCheck, Calendar } from 'lucide-react';

export default function AboutDoctorPage({ onOpenBooking }) {
  return (
    <div>
      <DoctorProfile onOpenBooking={onOpenBooking} />

      <section style={{ padding: '70px 0', background: 'transparent' }}>
        <div className="container">
          <div className="section-header-center">
            <h2>Clinical Philosophy & Expertise</h2>
            <p>Combining medical dermatology with aesthetic precision</p>
          </div>

          <div className="grid-responsive-3" style={{ gap: '30px' }}>
            <div className="location-card-box" style={{ padding: '30px' }}>
              <GraduationCap size={36} color="#153F39" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                Academic Credentials
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                MBBS & DDVL post-graduate degree from Bangalore Medical College (2005). Continuous medical education and certified training in advanced aesthetic lasers.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '30px' }}>
              <Award size={36} color="#153F39" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                18+ Years Clinical Practice
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Extensive clinical experience in acne scar revision, pigmentation management, medical dermatology, and doctor-supervised laser procedures.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '30px' }}>
              <HeartHandshake size={36} color="#153F39" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                Affordable Patient Care
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Dedicated to making world-class cosmetic dermatology accessible and cost-effective for patients across Bangalore and Karnataka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
