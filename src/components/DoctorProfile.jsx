import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, Sparkles, Calendar, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export default function DoctorProfile({ onOpenBooking }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  return (
    <section className="doctor-section" id="doctor-section" style={{ padding: '90px 0', background: 'transparent' }}>
      <div className="container">
        <div className="doctor-grid" style={{ alignItems: 'center' }}>
          {/* Doctor Card Image with 3D Tilt & Floating Depth */}
          <div
            className="doctor-image-card doctor-3d-tilt-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setTilt({ x: 0, y: 0 });
            }}
            style={{
              position: 'relative',
              borderRadius: '30px',
              overflow: 'visible',
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              background: 'rgba(255, 255, 255, 0.78)',
              backdropFilter: 'blur(32px) saturate(200%)',
              WebkitBackdropFilter: 'blur(32px) saturate(200%)',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 28px 70px rgba(148, 40, 118, 0.16), inset 0 2px 4px rgba(255, 255, 255, 1)',
              transform: isHovered
                ? `perspective(1000px) rotateX(${tilt.y * -7}deg) rotateY(${tilt.x * 7}deg) translateZ(15px)`
                : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
              transition: isHovered ? 'transform 0.12s ease-out' : 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top Floating 3D Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                right: '24px',
                zIndex: 20,
                background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                color: '#FFF',
                padding: '8px 20px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 8px 22px rgba(148, 40, 118, 0.35)',
                transform: 'translateZ(35px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <Award size={15} /> 18+ Yrs Experience
            </div>

            <div style={{ borderRadius: '28px 28px 0 0', overflow: 'hidden' }}>
              <img
                src="/images/dr_sujaya.jpeg"
                alt="Dr. Sujay M - Senior Dermatologist & Cosmetologist"
                onError={(e) => { e.target.src = "/images/DR%20SUJAYA.jpeg"; }}
                style={{
                  width: '100%',
                  display: 'block',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>

            <div
              style={{
                padding: '24px 28px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '0 0 28px 28px',
                transform: 'translateZ(25px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', margin: 0, color: '#2B1B4D' }}>
                Dr. (Mrs.) Sujay M
              </h3>
              <p style={{ fontSize: '13.5px', margin: '6px 0 0', color: '#942876', fontWeight: '700' }}>
                MBBS, DDVL • Senior Dermatologist & Aesthetic Specialist
              </p>
            </div>
          </div>

          {/* Doctor Bio Content */}
          <div className="doctor-info-content" style={{ paddingLeft: '10px' }}>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.82)',
                backdropFilter: 'blur(14px)',
                border: '1.5px solid rgba(148, 40, 118, 0.22)',
                color: '#942876',
                padding: '6px 20px',
                borderRadius: '30px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '16px',
                boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)'
              }}
            >
              <ShieldCheck size={15} color="#942876" />
              CHIEF DERMATOLOGIST & MEDICAL DIRECTOR
            </span>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#2B1B4D', marginBottom: '10px', lineHeight: 1.2 }}>
              Meet Dr. Sujay M
            </h2>
            <div className="doctor-subtitle" style={{ fontSize: '18px', fontWeight: 600, color: '#942876', marginBottom: '22px' }}>
              Bangalore's Leading Clinical & Aesthetic Dermatologist
            </div>

            <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: '1.7', marginBottom: '16px' }}>
              Dr. Sujay M is a celebrated Dermatologist in Bangalore with over <strong>18+ years of clinical excellence</strong>.
              She is a qualified <strong>MBBS, DDVL</strong>, having completed her postgraduation from the prestigious
              <strong> Bangalore Medical College in the year 2005</strong>.
            </p>

            <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: '1.7', marginBottom: '16px' }}>
              Medicare Skin and Cosmetic Clinic is the brainchild of Dr. Sujay M, founded with the mission to deliver
              gold-standard dermatological and trichological procedures at honest, affordable prices. She is extensively
              trained in US-FDA laser systems, autologous growth factor therapies, and scar resurfacing.
            </p>

            {/* 3D Floating Credential Badges */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 6px 18px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)'
                }}
              >
                <GraduationCap size={22} style={{ color: '#942876' }} />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#2B1B4D' }}>Bangalore Medical College (2005)</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 6px 18px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)'
                }}
              >
                <Award size={22} style={{ color: '#942876' }} />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#2B1B4D' }}>10,000+ Treated Patients</span>
              </div>
            </div>

            <div style={{ marginTop: '36px' }}>
              <button className="btn-primary btn-3d-tactile" onClick={onOpenBooking}>
                <Calendar size={18} /> Book Direct Consultation with Dr. Sujay M
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
