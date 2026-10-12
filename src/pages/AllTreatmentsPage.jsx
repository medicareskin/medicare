import React, { useState } from 'react';
import { SKIN_CONDITIONS, HAIR_CONDITIONS, COSMETIC_TREATMENTS, LASER_TREATMENTS, FEATURED_TREATMENTS } from '../data/clinicData';
import { Search, Calendar, Filter } from 'lucide-react';

export default function AllTreatmentsPage({ onSelectCondition, onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const allItems = [
    ...SKIN_CONDITIONS.map(i => ({ ...i, type: 'Skin' })),
    ...HAIR_CONDITIONS.map(i => ({ ...i, type: 'Hair' })),
    ...COSMETIC_TREATMENTS.map(i => ({ ...i, type: 'Cosmetic' })),
    ...LASER_TREATMENTS.map(i => ({ ...i, type: 'Laser' }))
  ];

  const filteredItems = allItems.filter((item) => {
    const matchesTab = activeTab === 'All' || item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Searchable Treatment Directory
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Browse our complete directory of clinical skin, hair, laser, and aesthetic procedures provided by Dr. Sujay M (MBBS, DDVL).
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #EBE0EA', boxShadow: '0 6px 20px rgba(0,0,0,0.04)', marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} color="#942876" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="form-control"
                placeholder="Search treatments (e.g., acne scar, laser, hair fall, peel, vitiligo)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '48px', height: '48px', fontSize: '15px' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {["All", "Skin", "Hair", "Cosmetic", "Laser"].map((tab) => (
                <button
                  key={tab}
                  className={`category-tag-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  style={{ padding: '10px 18px', fontSize: '14px' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Directory Results Grid */}
        <div className="conditions-grid" style={{ marginBottom: '60px' }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="condition-card">
                <div className="condition-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="condition-card-body">
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#942876', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.type} Treatment
                    </span>
                    <h3 style={{ marginTop: '4px' }}>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                  <button className="read-more-btn" onClick={() => onSelectCondition(item)}>
                    View Full Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', background: '#FFF', borderRadius: '16px', border: '1px solid #EBE0EA' }}>
              <h3 style={{ color: '#2B1B4D', fontSize: '22px', marginBottom: '8px' }}>No Treatments Found</h3>
              <p style={{ color: '#5C5268', fontSize: '15px' }}>Try searching for another term like "acne", "hair", "laser", or "peel".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
