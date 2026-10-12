import React from 'react';
import { GALLERY_IMAGES } from '../data/clinicData';
import { Camera, Calendar, ShieldCheck } from 'lucide-react';

export default function GalleryPage({ onOpenBooking }) {
  return (
    <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span style={{ background: '#FBF4F8', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '12px' }}>
            📷 Visual Showcase
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Clinic & Facility Gallery
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Take a virtual look inside Medicare Skin & Cosmetic Clinic. Explore our hygienic consultation suites, US-FDA laser technologies, and patient care environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '60px' }}>
          {GALLERY_IMAGES.map((item) => (
            <div key={item.id} style={{ background: '#FDF9FB', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EBE0EA', boxShadow: '0 6px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ background: '#FBF4F8', color: '#942876', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>
                  {item.category}
                </span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#2B1B4D', marginTop: '8px' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div style={{ background: '#2B1B4D', color: '#FFF', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '12px' }}>
            Experience Premier Dermatology Care in Person
          </h2>
          <p style={{ fontSize: '15px', opacity: 0.9, maxWidth: '550px', margin: '0 auto 20px' }}>
            Visit our Yelachenahalli Metro clinic for expert consultation with Dr. Sujay M.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876', margin: '0 auto' }}>
            <Calendar size={18} /> Book Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}
