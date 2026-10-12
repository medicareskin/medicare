import React from 'react';
import { X, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TreatmentDetailModal({ item, onClose, onOpenBooking }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '240px', marginBottom: '20px' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#2B1B4D', marginBottom: '12px' }}>
          {item.title}
        </h2>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
          <span style={{ background: '#FBF4F8', color: '#942876', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
            Dr. Sujay M Specialist Care
          </span>
          <span style={{ background: '#FAF4EE', color: '#2B1B4D', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
            Clinically Proven
          </span>
        </div>

        <p style={{ color: '#5C5268', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
          {item.fullText || item.description || item.summary}
        </p>

        <div style={{ background: '#F9F5F6', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#2B1B4D', marginBottom: '6px' }}>
            <ShieldCheck size={18} color="#942876" /> Treatment Highlights:
          </div>
          <ul style={{ paddingLeft: '24px', fontSize: '13px', color: '#5C5268', lineHeight: '1.6' }}>
            <li>US-FDA approved equipment and sterilisation protocols</li>
            <li>Customized to individual skin types and concerns</li>
            <li>Minimal downtime with comprehensive pre & post care guidance</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            className="btn-primary"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            style={{ flex: 1, justifyContent: 'center', background: '#942876' }}
          >
            <Calendar size={18} /> Book Appointment for {item.title}
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
