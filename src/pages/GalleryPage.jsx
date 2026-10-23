import React from 'react';
import { GALLERY_IMAGES } from '../data/clinicData';
import { Camera, Calendar, ShieldCheck } from 'lucide-react';

export default function GalleryPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            📷 Visual Showcase
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px' }}>
            Clinic & Facility Gallery
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Take a virtual look inside Medicare Skin & Cosmetic Clinic. Explore our hygienic consultation suites, US-FDA laser technologies, and patient care environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '60px' }}>
          {GALLERY_IMAGES.map((item) => (
            <div key={item.id} className="location-card-box" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ background: 'rgba(255, 255, 255, 0.75)', color: '#942876', border: '1px solid rgba(148, 40, 118, 0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>
                  {item.category}
                </span>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: '#153F39', marginTop: '8px' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="location-card-box" style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', marginBottom: '12px', color: '#153F39' }}>
            Experience Premier Dermatology Care in Person
          </h2>
          <p style={{ fontSize: '15px', color: '#5C4D68', maxWidth: '550px', margin: '0 auto 20px' }}>
            Visit our Yelachenahalli Metro clinic for expert consultation with Dr. Sujay M.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ margin: '0 auto' }}>
            <Calendar size={18} /> Book Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}
