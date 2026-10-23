import React from 'react';
import DoctorProfile from '../components/DoctorProfile';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, ShieldCheck, HeartHandshake, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

export default function AboutUsPage({ onOpenBooking }) {
  return (
    <div style={{ background: 'transparent' }}>
      {/* Page Hero Header */}
      <section style={{ padding: '60px 0 40px', background: 'transparent', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(21, 63, 57, 0.2)', color: '#153F39', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '14px', boxShadow: '0 4px 14px rgba(21, 63, 57, 0.06)' }}>
            Dermatologist-Led Clinic in South Bengaluru
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px' }}>
            About Medicare Skin &amp; Cosmetic Clinic
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.75' }}>
            Medicare Skin is a dermatologist-led skin, hair and aesthetic clinic serving South Bengaluru. We focus on understanding individual concerns, discussing appropriate treatment options, and explaining expected benefits and limitations. Our clinic combines medical dermatology with selected aesthetic services, supported by consultation, aftercare advice and ongoing patient communication.
          </p>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <DoctorProfile onOpenBooking={onOpenBooking} />

      {/* Clinical Philosophy & Standards */}
      <section style={{ padding: '80px 0', background: 'transparent' }}>
        <div className="container">
          <div className="section-header-center" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '36px', color: '#153F39', marginBottom: '14px' }}>
              Our Clinical Philosophy &amp; Standards
            </h2>
            <p style={{ fontSize: '16px', color: '#5C5268' }}>
              We believe every patient deserves individualized, medically supervised care using evidence-based dermatological therapies.
            </p>
          </div>

          <div className="grid-responsive-3" style={{ gap: '28px' }}>
            <div className="location-card-box" style={{ padding: '32px' }}>
              <GraduationCap size={40} color="#153F39" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                Bangalore Medical College (2005)
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Post-graduate MBBS &amp; DDVL qualifications from BMC. Dr. Sujay M combines clinical diagnosis with continuous medical education.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '32px' }}>
              <Award size={40} color="#C5A174" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                18+ Years Clinical Practice
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Dedicated dermatologist assessment for acne scars, pigmentation, hair loss, allergies, and doctor-supervised laser treatments.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '32px' }}>
              <HeartHandshake size={40} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '10px' }}>
                Ethical & Transparent Pricing
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                We maintain honest consultation fees and transparent treatment estimates without hidden charges or unnecessary procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Equipment Highlights */}
      <section style={{ padding: '80px 0', background: 'transparent' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '36px', color: '#153F39', marginBottom: '16px' }}>
                State-of-the-Art Clinical Facility
              </h2>
              <p style={{ fontSize: '16px', color: '#5C5268', lineHeight: '1.7', marginBottom: '24px' }}>
                Located right near Yelachenahalli Metro Station, our clinic features sterilized procedure rooms, advanced trichoscopy scalpe-analyzers, and US-FDA certified diode lasers for high safety standards.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#2B1B4D', fontWeight: '500' }}>
                  <CheckCircle2 color="#942876" size={20} /> Strict medical sterilisation & hygiene protocols
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#2B1B4D', fontWeight: '500' }}>
                  <CheckCircle2 color="#942876" size={20} /> Private consultation rooms for full patient comfort
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#2B1B4D', fontWeight: '500' }}>
                  <CheckCircle2 color="#942876" size={20} /> Accessible location near Yelachenahalli Metro Station
                </li>
              </ul>
              <button className="btn-primary" onClick={onOpenBooking}>
                <Calendar size={18} /> Schedule Clinic Consultation
              </button>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(148, 40, 118, 0.12)', border: '2px solid rgba(255, 255, 255, 0.95)', background: 'rgba(255, 255, 255, 0.8)' }}>
              <img src="/slide-img/98874dd1eae0b34c8798464c6c3f1c7d.jpg" alt="Medicare Skin Clinic Reception & Facility" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
