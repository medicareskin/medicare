import React, { useState } from 'react';
import { SKIN_CONDITIONS } from '../data/clinicData';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function SkinTreatmentsGrid({ onSelectCondition }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Pimples/Acne", "Pigmentation", "Rosacea", "Melasma", "Wrinkles", "Sagging", "Nail Infections", "Ear Lobe Piercing"];

  const filteredConditions = activeCategory === 'All'
    ? SKIN_CONDITIONS
    : SKIN_CONDITIONS.filter(c => c.title.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === 'All');

  const displayedConditions = showAll ? filteredConditions : filteredConditions.slice(0, 6);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section className="conditions-section" id="skin-treatments">
      <div className="container">
        <div className="section-header-center">
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px', border: '1px solid rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            <Sparkles size={14} /> CLINICAL DERMATOLOGY
          </span>
          <h2>Skin Treatments</h2>
          <p>
            Any skin concern can affect how you feel about yourself. Our dermatologists understand your worries better and offer personalised solutions to gain back your confidence.
          </p>
        </div>

        {/* Category Tag Buttons */}
        <div className="category-tags-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tag-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conditions 3D Grid */}
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
        {filteredConditions.length > 6 && (
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
                <>View All Skin Treatments ({filteredConditions.length} Available) <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
