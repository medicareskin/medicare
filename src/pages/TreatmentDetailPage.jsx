import React from 'react';
import BookingForm from '../components/BookingForm';
import LocationMapSection from '../components/LocationMapSection';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Calendar, Clock, Award, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TreatmentDetailPage({ item, onBack, onOpenBooking, onSuccessToast }) {
  if (!item) return null;

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ background: '#FDF9FB', borderBottom: '1px solid #EBE0EA', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#5C5268' }}>
          <button
            onClick={onBack}
            style={{ background: 'none', border: 'none', color: '#942876', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: 0 }}
          >
            <ArrowLeft size={14} /> Back to Directory
          </button>
          <span>/</span>
          <span style={{ color: '#2B1B4D', fontWeight: '600' }}>{item.category || item.type || 'Clinical'} Care</span>
          <span>/</span>
          <span style={{ color: '#942876', fontWeight: '700' }}>{item.title}</span>
        </div>
      </div>

      {/* Main Treatment Hero */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #FDF9FB 0%, #F5ECF2 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            
            {/* Treatment Information & Headlines */}
            <div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span style={{ background: '#942876', color: '#FFF', padding: '5px 14px', borderRadius: '14px', fontSize: '12px', fontWeight: '700' }}>
                  {item.category || item.type || 'Dermatology'} Treatment
                </span>
                <span style={{ background: 'rgba(148, 40, 118, 0.1)', color: '#942876', padding: '5px 14px', borderRadius: '14px', fontSize: '12px', fontWeight: '700' }}>
                  Dr. Sujay M (MBBS, DDVL) Protocol
                </span>
              </div>

              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#2B1B4D', marginBottom: '18px', lineHeight: '1.25' }}>
                {item.title} in Bangalore
              </h1>

              <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7', marginBottom: '28px' }}>
                {item.fullText || item.summary || item.description}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={onOpenBooking}
                  style={{ background: '#942876', padding: '14px 28px', fontSize: '15px' }}
                >
                  <Calendar size={18} /> Book Consultation for {item.title}
                </button>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '15px', textDecoration: 'none' }}
                >
                  <Phone size={18} color="#942876" /> Call +91 92428 55707
                </a>
              </div>
            </div>

            {/* Treatment Feature Image */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(43,27,77,0.12)', border: '4px solid #FFFFFF' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Clinical Standards */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-center" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <span style={{ background: '#FBF4F8', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '10px' }}>
              Why Choose Medicare Skin Clinic
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', color: '#2B1B4D' }}>
              Clinical Excellence & Treatment Highlights
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '60px' }}>
            <div style={{ background: '#FDF9FB', padding: '32px', borderRadius: '20px', border: '1px solid #EBE0EA' }}>
              <ShieldCheck size={36} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#2B1B4D', marginBottom: '10px' }}>
                US-FDA Gold Standard Tech
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Utilizing clinically validated equipment designed specifically for South Asian skin tones and maximum safety.
              </p>
            </div>

            <div style={{ background: '#FDF9FB', padding: '32px', borderRadius: '20px', border: '1px solid #EBE0EA' }}>
              <Award size={36} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#2B1B4D', marginBottom: '10px' }}>
                Senior Clinical Dermatologist
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Direct consultation with Dr. Sujay M (MBBS, DDVL) with over 18+ years of dedicated clinical practice.
              </p>
            </div>

            <div style={{ background: '#FDF9FB', padding: '32px', borderRadius: '20px', border: '1px solid #EBE0EA' }}>
              <Sparkles size={36} color="#942876" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#2B1B4D', marginBottom: '10px' }}>
                Customized Care Protocol
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
                Personalized treatment parameters, step-by-step progress tracking, and comprehensive post-care guidance.
              </p>
            </div>
          </div>

          {/* Dedicated Appointment Booking Container */}
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <BookingForm preSelectedConcern={item.title} onSuccessToast={onSuccessToast} />
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LocationMapSection onSuccessToast={onSuccessToast} />
    </div>
  );
}
