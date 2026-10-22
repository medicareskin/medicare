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

        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '28px', fontWeight: 650, color: '#153F39', marginBottom: '12px' }}>
          {item.title}
        </h2>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(148, 40, 118, 0.2)', color: '#942876', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', boxShadow: '0 2px 8px rgba(148, 40, 118, 0.06)' }}>
            Dr. Sujay M Specialist Care
          </span>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(148, 40, 118, 0.15)', color: '#2B1B4D', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', boxShadow: '0 2px 8px rgba(148, 40, 118, 0.04)' }}>
            Clinically Proven
          </span>
        </div>

        <p style={{ color: '#5C5268', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
          {item.fullText || item.description || item.summary}
        </p>

        <div style={{ background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: '18px 20px', borderRadius: '16px', border: '1px solid rgba(148, 40, 118, 0.15)', marginBottom: '24px', boxShadow: '0 4px 16px rgba(148, 40, 118, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#2B1B4D', marginBottom: '8px' }}>
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
            style={{ flex: 1, justifyContent: 'center' }}
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
