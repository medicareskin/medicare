import React, { useState } from 'react';
import { SKIN_CONDITIONS, HAIR_CONDITIONS, COSMETIC_TREATMENTS, LASER_TREATMENTS, FEATURED_TREATMENTS } from '../data/clinicData';
import { Search, Calendar, Filter, X } from 'lucide-react';

export default function AllTreatmentsPage({ onSelectCondition, onSelectTreatment, onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const handleSelect = onSelectTreatment || onSelectCondition;

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
    <div style={{ padding: '60px 0', background: 'transparent' }}>
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
        <div className="location-card-box" style={{ padding: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Search size={20} color="#942876" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="form-control"
                placeholder="Search treatments (e.g., acne scar, laser, hair fall, peel, vitiligo)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '48px', paddingRight: searchTerm ? '42px' : '16px', height: '48px', fontSize: '15px' }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#942876',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px'
                  }}
                  title="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {["All", "Skin", "Hair", "Cosmetic", "Laser"].map((tab) => (
                <button
                  key={tab}
                  className={`category-tag-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  style={{ padding: '8px 16px', fontSize: '13.5px' }}
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
                  <button className="read-more-btn" onClick={() => handleSelect && handleSelect(item)}>
                    View Full Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="location-card-box" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ color: '#2B1B4D', fontSize: '22px', marginBottom: '8px' }}>No Treatments Found</h3>
              <p style={{ color: '#5C5268', fontSize: '15px', marginBottom: '16px' }}>Try searching for another term like "acne", "hair", "laser", or "peel".</p>
              <button
                className="btn-primary"
                onClick={() => { setSearchTerm(''); setActiveTab('All'); }}
                style={{ padding: '8px 20px', fontSize: '13.5px' }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
