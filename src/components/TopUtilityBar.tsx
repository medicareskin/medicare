'use client';
import { useState } from 'react';
import Link from 'next/link';
import { site, mapUrl } from '@/lib/site';

const LOCATIONS = [
  { name: 'Yelachenahalli (Clinic Location)', detail: 'Near Metro Station · Kanakapura Main Rd' },
  { name: 'JP Nagar', detail: 'Phase 1-8 · 5-10 mins drive' },
  { name: 'Kanakapura Road', detail: 'Konanakunte Cross & Metro corridor' },
  { name: 'Jayanagar & Banashankari', detail: 'South Bengaluru catchment' },
  { name: 'Bannerghatta Road', detail: 'Arekere & Hulimavu connectivity' }
];

export function TopUtilityBar() {
  const [selectedLocation, setSelectedLocation] = useState('Bangalore · Yelachenahalli');
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  return (
    <div className="top-utility-bar">
      <div className="container top-utility-inner">
        {/* Left: Location indicator per reference image */}
        <div className="location-selector-wrap">
          <button 
            type="button" 
            className="location-pill-btn" 
            onClick={() => setShowLocationMenu(!showLocationMenu)}
            aria-expanded={showLocationMenu}
            aria-haspopup="listbox"
          >
            <svg className="location-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div className="location-text">
              <strong className="location-city">Bangalore</strong>
              <span className="location-sub">
                {selectedLocation} <span className="chevron-down">⌵</span>
              </span>
            </div>
          </button>

          {showLocationMenu && (
            <div className="location-dropdown" role="listbox">
              <div className="location-dropdown-header">
                <span>Serving South Bengaluru</span>
                <button 
                  type="button" 
                  className="dropdown-close-btn" 
                  onClick={() => setShowLocationMenu(false)}
                >
                  ✕
                </button>
              </div>
              <ul className="location-list">
                {LOCATIONS.map((loc) => (
                  <li key={loc.name}>
                    <button
                      type="button"
                      className="location-option-btn"
                      onClick={() => {
                        setSelectedLocation(loc.name);
                        setShowLocationMenu(false);
                      }}
                    >
                      <span className="loc-bullet">•</span>
                      <div>
                        <strong>{loc.name}</strong>
                        <small>{loc.detail}</small>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="location-dropdown-footer">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  View Clinic on Google Maps ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Center / Notice: Dermatologist verified */}
        <div className="top-utility-middle">
          <span className="verified-badge">
            <span className="pulse-dot"></span> In-Person Consultations with Dr. Sujay M (MBBS, DDVL)
          </span>
        </div>

        {/* Right: Quick actions (Phone + Appointment pill badge) per reference image */}
        <div className="top-utility-right">
          <a href={`tel:${site.phoneE164}`} className="quick-phone-link" aria-label="Call clinic">
            <span className="phone-num">{site.phoneDisplay}</span>
          </a>

          <Link href="/book-appointment/" className="quick-cart-badge" aria-label="View appointment slots">
            <span className="cart-badge-count">1</span>
            <span className="cart-badge-label">Book Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
