import React from 'react';
import BookingForm from '../components/BookingForm';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

export default function BookAppointmentPage({ onSuccessToast }) {
  return (
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <span style={{ background: '#FFF', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
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
