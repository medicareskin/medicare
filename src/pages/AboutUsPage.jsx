import React from 'react';
import DoctorProfile from '../components/DoctorProfile';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, ShieldCheck, HeartHandshake, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

export default function AboutUsPage({ onOpenBooking }) {
  return (
    <div style={{ background: 'transparent' }}>
      {/* Page Hero Header */}
      <section style={{ padding: '60px 0 40px', background: 'transparent', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '14px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            ★ Bangalore's Premier Dermatology & Cosmetic Center
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            About Medicare Skin & Cosmetic Clinic
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Founded by <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong>, Medicare Skin & Cosmetic Clinic has provided compassionate, evidence-based dermatological and aesthetic care in South Bangalore for over 18+ years.
          </p>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <DoctorProfile onOpenBooking={onOpenBooking} />

      {/* Clinical Philosophy & Standards */}
      <section style={{ padding: '80px 0', background: 'transparent' }}>
        <div className="container">
          <div className="section-header-center" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#2B1B4D', marginBottom: '14px' }}>
              Our Clinical Philosophy & Standards
            </h2>
            <p style={{ fontSize: '16px', color: '#5C5268' }}>
              We believe every patient deserves individualized, medically supervised care using gold-standard US-FDA approved technologies.
            </p>
          </div>

          <div className="grid-responsive-3" style={{ gap: '28px' }}>
            <div className="location-card-box" style={{ padding: '32px' }}>
              <GraduationCap size={40} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
                Bangalore Medical College (2005)
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Post-graduate MBBS & DDVL qualifications from BMC. Dr. Sujay M stays at the forefront of clinical dermatology and laser advances.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '32px' }}>
              <Award size={40} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
                10,100+ Procedures Completed
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Specialized expertise in acne scar subcision, US-FDA diode laser hair reduction, growth factor hair therapy, and vitiligo punch grafting.
              </p>
            </div>

            <div className="location-card-box" style={{ padding: '32px' }}>
              <HeartHandshake size={40} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
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
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#2B1B4D', marginBottom: '16px' }}>
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
