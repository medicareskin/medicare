import React from 'react';
import { FEATURED_TREATMENTS } from '../data/clinicData';
import { ChevronRight } from 'lucide-react';

export default function FeaturedTreatments({ onSelectTreatment, onOpenBooking }) {
  return (
    <section className="featured-treatments-section" id="treatments-section">
      <div className="container">
        <div className="section-header-center">
          <h2>Our Treatments</h2>
          <p>Clinically backed dermatology & aesthetic solutions performed by expert specialists</p>
        </div>

        <div className="treatments-slider-grid">
          {FEATURED_TREATMENTS.map((item) => (
            <div
              key={item.id}
              className="treatment-card-item"
              onClick={() => onSelectTreatment(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="treatment-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="treatment-card-body">
                <h3>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#5C5268', marginBottom: '14px', height: '40px', overflow: 'hidden' }}>
                  {item.description}
                </p>
                <button
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTreatment(item);
                  }}
                >
                  View Treatment Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
