import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar, Send } from 'lucide-react';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', color: '#2B1B4D', marginBottom: '14px' }}>
            Contact Medicare Skin & Cosmetic Clinic
          </h1>
          <p style={{ fontSize: '16px', color: '#5C5268' }}>
            Get in touch with Dr. Sujay M's medical team, locate our Yelachenahalli Metro clinic, or request a consultation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          {/* Contact Details Card */}
          <div style={{ background: '#FFF', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(43,27,77,0.06)', border: '1px solid #EBE0EA' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#2B1B4D', marginBottom: '24px' }}>
              Clinic Information
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin size={24} color="#942876" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#2B1B4D', fontSize: '16px' }}>Address</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '4px' }}>{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Phone size={22} color="#25D366" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#2B1B4D', fontSize: '16px' }}>Phone / Appointment Line</strong>
                  <p style={{ fontSize: '15px', color: '#2B1B4D', marginTop: '2px', fontWeight: '600' }}>
                    <a href={`tel:${CLINIC_INFO.rawPhone}`}>{CLINIC_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Mail size={22} color="#942876" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#2B1B4D', fontSize: '16px' }}>Email Address</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '2px' }}>{CLINIC_INFO.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Clock size={22} color="#942876" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <strong style={{ color: '#2B1B4D', fontSize: '16px' }}>Clinic Working Hours</strong>
                  <p style={{ fontSize: '14px', color: '#5C5268', marginTop: '4px' }}>{CLINIC_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <button className="btn-primary" onClick={onOpenBooking} style={{ width: '100%', justifyContent: 'center', background: '#942876' }}>
                <Calendar size={18} /> Book Appointment Online
              </button>
            </div>
          </div>

          {/* Interactive Location / Map Card */}
          <div style={{ background: '#FFF', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(43,27,77,0.06)', border: '1px solid #EBE0EA', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '16px', padding: '0 10px' }}>
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
              style={{ background: '#2B1B4D', marginTop: '16px', justifyContent: 'center' }}
            >
              Open Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
