import React, { useState } from 'react';
import { SKIN_CONDITIONS } from '../data/clinicData';

export default function SkinTreatmentsGrid({ onSelectCondition }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ["All", "Pimples/Acne", "Pigmentation", "Rosacea", "Melasma", "Wrinkles", "Sagging", "Nail Infections", "Ear Lobe Piercing"];

  const filteredConditions = activeCategory === 'All'
    ? SKIN_CONDITIONS
    : SKIN_CONDITIONS.filter(c => c.title.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === 'All');

  return (
    <section className="conditions-section" id="skin-treatments">
      <div className="container">
        <div className="section-header-center">
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
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="conditions-grid">
          {filteredConditions.map((item) => (
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
