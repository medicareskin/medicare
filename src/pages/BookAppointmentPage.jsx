import React from 'react';
import BookingForm from '../components/BookingForm';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

export default function BookAppointmentPage({ onSuccessToast }) {
  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            📅 Direct Online Appointment Portal
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Book Your Consultation with Dr. Sujay M
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Select your preferred appointment date and time slot below. Our medical desk will contact you to confirm your slot.
          </p>
        </div>

        {/* Embedded Booking Form Component */}
        <BookingForm onSuccessToast={onSuccessToast} />
      </div>
    </div>
  );
}
