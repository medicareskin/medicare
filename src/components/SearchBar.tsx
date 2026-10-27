'use client';
import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { treatments, treatmentPath } from '@/lib/treatments';

const POPULAR_TAGS = [
  { label: 'Acne & Scars', query: 'acne' },
  { label: 'Hair Fall & PRP', query: 'hair' },
  { label: 'Q-Switched Laser', query: 'laser' },
  { label: 'Melasma & Pigmentation', query: 'pigmentation' },
  { label: 'HydraFacial', query: 'hydrafacial' },
  { label: 'Dr. Sujay M Profile', href: '/doctors/dr-sujay-m/' },
  { label: 'Yelachenahalli Clinic', href: '/locations/yelachenahalli/' },
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchWrapRef = useRef<HTMLDivElement>(null);

  const filteredTreatments = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return treatments.filter(t => 
      t.title.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.causes.some(c => c.toLowerCase().includes(q))
    ).slice(0, 7);
  }, [query]);

  // Click outside to close results dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchWrapRef.current && !searchWrapRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredTreatments.length > 0) {
        router.push(treatmentPath(filteredTreatments[0]));
        setIsOpen(false);
      } else if (query.trim()) {
        router.push(`/treatments/?search=${encodeURIComponent(query.trim())}`);
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="search-pill-wrapper" ref={searchWrapRef}>
      <div className="search-pill-bar">
        {/* Main Pill Input per user reference Image 2 */}
        <div className="pill-input-box">
          <span className="search-prefix-label" aria-hidden="true">
            Search for <span className="highlight-tag">checkups</span>
          </span>
          <input
            type="search"
            className="pill-text-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="or skin, hair & laser treatments..."
            aria-label="Search Medicare Skin treatments and checkups"
            autoComplete="off"
          />
          <button 
            type="button" 
            className="search-submit-icon-btn"
            onClick={() => {
              if (filteredTreatments.length > 0) {
                router.push(treatmentPath(filteredTreatments[0]));
              } else {
                router.push('/treatments/');
              }
              setIsOpen(false);
            }}
            aria-label="Submit search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Action Button Pill per user reference Image 2 (Tests / Treatments) */}
        <Link href="/treatments/" className="pill-action-btn" aria-label="Browse all treatments and clinical tests">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 18h8"></path>
            <path d="M3 22h18"></path>
            <path d="M14 22a7 7 0 1 0-14 0"></path>
            <path d="M9 14h2"></path>
            <path d="M9 12a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"></path>
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
          </svg>
          <span className="pill-action-label">Treatments</span>
        </Link>
      </div>

      {/* Live autocomplete search results dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="search-autocomplete-dropdown" role="region" aria-label="Search results">
          <div className="search-results-header">
            <span>Found {filteredTreatments.length} clinical treatment{filteredTreatments.length === 1 ? '' : 's'}</span>
            <button type="button" onClick={() => setIsOpen(false)} className="close-results-btn">✕</button>
          </div>

          {filteredTreatments.length > 0 ? (
            <ul className="search-results-list">
              {filteredTreatments.map((t) => (
                <li key={t.slug}>
                  <Link 
                    href={treatmentPath(t)} 
                    className="search-result-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="result-category-tag">{t.category}</div>
                    <div className="result-details">
                      <strong>{t.title}</strong>
                      <p>{t.summary}</p>
                    </div>
                    <span className="result-arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="search-no-results">
              <p>No direct match for &ldquo;{query}&rdquo;. Talk to Dr. Sujay M about your condition.</p>
              <Link href="/book-appointment/" className="btn primary" onClick={() => setIsOpen(false)}>
                Book Dermatologist Consultation →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Quick Tag Pills underneath */}
      <div className="search-quick-tags">
        <span className="quick-tags-label">Popular:</span>
        <div className="quick-tags-scroll">
          {POPULAR_TAGS.map((tag) => (
            tag.href ? (
              <Link key={tag.label} href={tag.href} className="quick-tag-chip">
                {tag.label}
              </Link>
            ) : (
              <button
                key={tag.label}
                type="button"
                className="quick-tag-chip"
                onClick={() => {
                  setQuery(tag.query || '');
                  setIsOpen(true);
                }}
              >
                {tag.label}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
