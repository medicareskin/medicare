import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar, Send } from 'lucide-react';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', color: '#153F39', marginBottom: '14px' }}>
            Contact Medicare Skin
          </h1>
          <p style={{ fontSize: '16px', color: '#5C5268', lineHeight: '1.7' }}>
            Reach out to Medicare Skin &amp; Cosmetic Clinic in South Bengaluru. An appointment request is confirmed directly by our clinic team after reviewing availability.
          </p>
        </div>

        <div className="grid-responsive-2" style={{ gap: '40px', marginBottom: '60px' }}>
          {/* Contact Details Card */}
          <div className="location-card-box" style={{ padding: '36px' }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', marginBottom: '24px' }}>
              Clinic Information &amp; Appointments
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin size={24} color="#153F39" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#153F39', fontSize: '16px' }}>Clinic Address</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '4px', lineHeight: '1.5' }}>{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Phone size={22} color="#153F39" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#153F39', fontSize: '16px' }}>Telephone</strong>
                  <p style={{ fontSize: '15px', color: '#153F39', marginTop: '2px', fontWeight: '700' }}>
                    <a href={`tel:${CLINIC_INFO.rawPhone}`}>{CLINIC_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Mail size={22} color="#153F39" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#153F39', fontSize: '16px' }}>Email Address</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '2px' }}>
                    <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Clock size={22} color="#C5A174" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#153F39', fontSize: '16px' }}>Published OPD Hours</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '4px' }}>{CLINIC_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="btn-secondary"
                  style={{ justifyContent: 'center', textAlign: 'center', padding: '12px', fontSize: '14px', fontWeight: '700' }}
                >
                  <Phone size={16} /> Call Clinic
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Medicare%20Skin,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ justifyContent: 'center', textAlign: 'center', padding: '12px', fontSize: '14px', fontWeight: '700', color: '#047857' }}
                >
                  WhatsApp
                </a>
              </div>
              <button className="btn-primary" onClick={onOpenBooking} style={{ width: '100%', justifyContent: 'center', background: '#153F39', padding: '14px' }}>
                <Calendar size={18} /> Request Dermatologist Consultation
              </button>
              <p style={{ fontSize: '12px', color: '#7E728C', textAlign: 'center', margin: '4px 0 0' }}>
                Note: Appointment requests are confirmed by clinic staff based on availability.
              </p>
            </div>
          </div>

          {/* Interactive Location / Map Card */}
          <div className="location-card-box" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '16px', padding: '0 10px' }}>
              Clinic Location (Near Yelachenahalli Metro)
            </h2>
            <div style={{ width: '100%', flexGrow: 1, borderRadius: '12px', overflow: 'hidden', minHeight: '340px' }}>
              <iframe
                title="Medicare Skin Clinic Map Location"
                src={CLINIC_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href={CLINIC_INFO.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: '16px', justifyContent: 'center' }}
            >
              Open Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
