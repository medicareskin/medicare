import React, { useState } from 'react';
import { HAIR_CONDITIONS } from '../data/clinicData';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function HairTreatmentsGrid({ onSelectCondition }) {
  const [showAll, setShowAll] = useState(false);
  const displayedConditions = showAll ? HAIR_CONDITIONS : HAIR_CONDITIONS.slice(0, 6);

  return (
    <section className="conditions-section" id="hair-treatments">
      <div className="container">
        <div className="section-header-center">
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px', border: '1px solid rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            <Sparkles size={14} /> TRICHOLOGY & RESTORATION
          </span>
          <h2>Hair Treatments</h2>
          <p>
            Comprehensive clinical scalp evaluations, hair regrowth therapies, laser reduction, and restorative care by Dr. Sujay M.
          </p>
        </div>

        {/* Hair Conditions 3D Grid */}
        <div className="conditions-grid">
          {displayedConditions.map((item) => (
            <div key={item.id} className="condition-card" onClick={() => onSelectCondition(item)} style={{ cursor: 'pointer' }}>
              <div className="condition-card-img">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="condition-card-body">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCondition(item);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less 3D Button */}
        {HAIR_CONDITIONS.length > 6 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              className="btn-secondary show-more-toggle-btn"
              onClick={() => setShowAll(!showAll)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              {showAll ? (
                <>Show Fewer Treatments <ChevronUp size={18} /></>
              ) : (
                <>View All Hair Treatments ({HAIR_CONDITIONS.length} Available) <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
