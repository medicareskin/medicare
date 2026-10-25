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
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        padding: '8px 12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px'
      }}
    >
      {/* Call Action */}
      <a
        href={`tel:${CLINIC_INFO.rawPhone}`}
        data-track="tap_call"
        aria-label="Call Medicare Skin Clinic"
        className="btn-secondary btn-liquid-secondary"
        style={{
          flex: '1 1 0',
          minWidth: 0,
          minHeight: '44px',
          padding: '8px 8px',
          fontSize: '12.5px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          whiteSpace: 'nowrap'
        }}
      >
        <Phone size={15} color="#942876" style={{ flexShrink: 0 }} />
        <span>Call</span>
      </a>

      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        data-track="tap_whatsapp"
        aria-label="Chat with clinic on WhatsApp"
        className="btn-secondary btn-liquid-secondary"
        style={{
          flex: '1.1 1 0',
          minWidth: 0,
          minHeight: '44px',
          padding: '8px 8px',
          fontSize: '12.5px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          whiteSpace: 'nowrap'
        }}
      >
        <MessageCircle size={15} color="#10B981" style={{ flexShrink: 0 }} />
        <span>WhatsApp</span>
      </a>

      {/* Book Action */}
      <button
        onClick={onOpenBooking}
        data-track="tap_book"
        aria-label="Book an Appointment"
        className="btn-primary btn-liquid-primary"
        style={{
          flex: '1.2 1 0',
          minWidth: 0,
          minHeight: '44px',
          padding: '8px 10px',
          fontSize: '12.5px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          whiteSpace: 'nowrap'
        }}
      >
        <Calendar size={15} style={{ flexShrink: 0 }} />
        <span>Book</span>
      </button>
    </div>
  );
}
