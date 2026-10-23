import React from 'react';
import BookingForm from '../components/BookingForm.jsx';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

export default function BookAppointmentPage({ onSuccessToast }) {
  const whatsappMsg = "Hello Medicare Skin, I would like to request a dermatologist consultation. Please share available appointment times.";
  const waLink = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(21, 63, 57, 0.2)', color: '#153F39', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 14px rgba(21, 63, 57, 0.06)' }}>
            Dermatologist Consultation Request
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', color: '#153F39', marginBottom: '16px' }}>
            Request a Dermatologist Consultation
          </h1>
          <p style={{ fontSize: '16px', color: '#5C5268', lineHeight: '1.7', marginBottom: '20px' }}>
            Choose a concern to help us direct your enquiry, or request without selecting a concern. An appointment is confirmed only after the clinic explicitly accepts your request.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="btn-primary"
              style={{ background: '#153F39', padding: '12px 24px', fontSize: '14.5px', textDecoration: 'none' }}
            >
              <Phone size={16} /> Call {CLINIC_INFO.phoneDisplay || CLINIC_INFO.phone}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '12px 24px', fontSize: '14.5px', color: '#047857', textDecoration: 'none' }}
            >
              Request by WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '13px', color: '#7E728C', lineHeight: '1.5', maxWidth: '620px', margin: '0 auto' }}>
            Please do not send detailed medical histories or sensitive photographs in this initial enquiry. For urgent symptoms, seek appropriate immediate medical care.
          </p>
        </div>

        {/* Embedded Booking Form Component */}
        <BookingForm onSuccessToast={onSuccessToast} />
      </div>
    </div>
  );
}
