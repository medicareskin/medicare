import React from 'react';
import { HAIR_CONDITIONS } from '../data/clinicData';

export default function HairTreatmentsGrid({ onSelectCondition }) {
  return (
    <section className="conditions-section" id="hair-treatments" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header-center">
          <h2>Hair Treatments</h2>
          <p>
            Comprehensive clinical scalp evaluations, hair regrowth therapies, laser reduction, and restorative care by Dr. Sujay M.
          </p>
        </div>

        <div className="conditions-grid">
          {HAIR_CONDITIONS.map((item) => (
            <div key={item.id} className="condition-card">
              <div className="condition-card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="condition-card-body">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => onSelectCondition(item)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
