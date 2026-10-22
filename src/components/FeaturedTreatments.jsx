import React, { useState } from 'react';
import { FEATURED_TREATMENTS } from '../data/clinicData';
import { ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';

function Treatment3DCard({ item, onSelectTreatment }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="treatment-card-item treatment-3d-card"
      onClick={() => onSelectTreatment(item)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 8}deg) translateZ(14px) translateY(-6px)`
          : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) translateY(0)',
        boxShadow: isHovered
          ? '0 24px 60px rgba(148, 40, 118, 0.2), 0 6px 20px rgba(43, 27, 77, 0.06), inset 0 2px 3px rgba(255, 255, 255, 1)'
          : '0 12px 32px rgba(148, 40, 118, 0.08), 0 2px 8px rgba(43, 27, 77, 0.03), inset 0 1.5px 2px rgba(255, 255, 255, 0.95)',
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'transform 0.12s ease-out, box-shadow 0.2s ease' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
    >
      <div
        className="treatment-card-image"
        style={{
          transform: isHovered ? 'translateZ(18px)' : 'translateZ(0)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease'
        }}
      >
        <img src={item.image} alt={item.title} loading="lazy" />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#942876',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transform: isHovered ? 'translateZ(24px) scale(1.1)' : 'translateZ(0) scale(1)',
            transition: 'transform 0.25s ease'
          }}
        >
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div
        className="treatment-card-body"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          padding: '24px 22px',
          transform: isHovered ? 'translateZ(24px)' : 'translateZ(0)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease'
        }}
      >
        <div>
          <h3 style={{ transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)', transition: 'transform 0.25s ease' }}>
            {item.title}
          </h3>
          <p
            style={{
              fontSize: '13.5px',
              color: '#5C5268',
              marginBottom: '18px',
              lineHeight: '1.6',
              transform: isHovered ? 'translateZ(8px)' : 'translateZ(0)',
              transition: 'transform 0.25s ease'
            }}
          >
            {item.description}
          </p>
        </div>
        <div style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)', transition: 'transform 0.25s ease' }}>
          <button
            className="read-more-btn btn-3d-tactile"
            onClick={(e) => {
              e.stopPropagation();
              onSelectTreatment(item);
            }}
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
          >
            View Treatment Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedTreatments({ onSelectTreatment, onOpenBooking }) {
  return (
    <section className="featured-treatments-section" id="treatments-section" style={{ padding: '85px 0' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '44px', textAlign: 'center' }}>
          <span
            style={{
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              color: '#942876',
              padding: '7px 22px',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              border: '1.5px solid rgba(148, 40, 118, 0.22)',
              boxShadow: '0 4px 16px rgba(148, 40, 118, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1)'
            }}
          >
            <Sparkles size={15} color="#942876" />
            EVIDENCE-BASED PROCEDURES
          </span>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', color: '#153F39', marginBottom: '14px' }}>
            Our Signature Treatments
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Clinically backed dermatology & aesthetic solutions performed by Dr. Sujay M and expert specialists.
          </p>
        </div>

        <div className="treatments-slider-grid" style={{ perspective: '1200px' }}>
          {FEATURED_TREATMENTS.map((item) => (
            <Treatment3DCard
              key={item.id}
              item={item}
              onSelectTreatment={onSelectTreatment}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <button
            className="btn-secondary btn-3d-tactile"
            onClick={() => {
              window.history.pushState({}, '', '/treatments');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: '700'
            }}
          >
            Explore Complete Directory of 40+ Treatments <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
