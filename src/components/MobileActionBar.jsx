import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MobileActionBar({ onOpenBooking }) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Medicare%20Skin%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20with%20Dr.%20Sujay%20M.`;

  return (
    <div
      className="mobile-action-bar"
      role="navigation"
      aria-label="Quick clinic contact"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        borderTop: '1.5px solid rgba(148, 40, 118, 0.18)',
        boxShadow: '0 -6px 24px rgba(43, 27, 77, 0.08), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
        padding: '10px 16px',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '10px'
      }}
    >
      {/* Call Action */}
      <a
        href={`tel:${CLINIC_INFO.rawPhone}`}
        data-track="tap_call"
        aria-label="Call Medicare Skin Clinic"
        style={{
          flex: 1,
          minHeight: '46px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1.5px solid rgba(148, 40, 118, 0.25)',
          color: '#2B1B4D',
          fontSize: '13.5px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(148, 40, 118, 0.06)'
        }}
      >
        <Phone size={17} color="#942876" />
        <span>Call</span>
      </a>

      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        data-track="tap_whatsapp"
        aria-label="Chat with clinic on WhatsApp"
        style={{
          flex: 1,
          minHeight: '46px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1.5px solid rgba(148, 40, 118, 0.25)',
          color: '#2B1B4D',
          fontSize: '13.5px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(148, 40, 118, 0.06)'
        }}
      >
        <MessageCircle size={17} color="#942876" />
        <span>WhatsApp</span>
      </a>

      {/* Book Action */}
      <button
        onClick={onOpenBooking}
        data-track="tap_book"
        aria-label="Book an Appointment"
        style={{
          flex: 1.3,
          minHeight: '46px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
          border: 'none',
          color: '#FFFFFF',
          fontSize: '13.5px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(148, 40, 118, 0.3)'
        }}
      >
        <Calendar size={17} />
        <span>Book</span>
      </button>
    </div>
  );
}
