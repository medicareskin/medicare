'use client';

import { useState } from 'react';
import { site, mapUrl, mapEmbedUrl, waLink } from '@/lib/site';

export function LocationSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', issue: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSent(true);
  };

  const whatsappMsg = `Hello Medicare Skin Clinic, my name is ${formData.name || 'Patient'}. Concern: ${formData.issue || 'Skin Consultation'}`;

  return (
    <section className="section clinic-location-section" id="location" aria-label="Clinic Location and Contact">
      <div className="container">
        <div className="section-head center">
          <p className="hero-lede center-block" style={{ fontSize: '1.05rem', color: 'var(--ink-secondary)', marginBottom: '32px' }}>
            Conveniently located in South Bengaluru, with easy access from Yelachenahalli Metro Station.
          </p>
        </div>

        {/* 2-Column Location Card matching Image 3 */}
        <div className="location-split-card">
          {/* Left: Office Address, Transit & Actions */}
          <div className="loc-info-col">
            <h3 className="loc-main-title">Kanakapura Main Road, Bengaluru</h3>

            {/* Office Address Card */}
            <div className="loc-address-box">
              <div className="loc-pin-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <strong className="loc-addr-label">OFFICE ADDRESS:</strong>
                <p className="loc-addr-content">
                  {site.address}
                </p>
              </div>
            </div>

            {/* Transit Chips */}
            <div className="loc-transit-chips">
              <span className="transit-chip-pill">
                <span className="chip-bullet">&bull;</span> Near Yelachenahalli Metro Station
              </span>
              <span className="transit-chip-pill">
                <span className="chip-bullet">&bull;</span> Dedicated Parking Available
              </span>
              <span className="transit-chip-pill">
                <span className="chip-bullet">&bull;</span> Easy Access from JP Nagar &amp; Jayanagar
              </span>
            </div>

            {/* Contact Pills */}
            <div className="loc-contact-pills">
              <a href={`tel:${site.phoneE164}`} className="contact-pill-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{site.phoneDisplay}</span>
              </a>
              <a href={`mailto:${site.email}`} className="contact-pill-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{site.email}</span>
              </a>
              <div className="contact-pill-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon-Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="loc-actions-row">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn-get-directions">
                <span>Get Directions</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a
                href={waLink('Hello Medicare Skin Clinic, I would like directions and appointment info.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-pill"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="loc-brand-tag">
              MEDICARE SKIN AND COSMETIC CLINIC
            </div>
          </div>

          {/* Right: Map Embed & Quick Inquiry Form */}
          <div className="loc-map-col">
            <div className="map-frame-box">
              <iframe
                title="Medicare Skin Clinic Google Map Location"
                src={mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0, display: 'block', borderRadius: '14px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link-badge"
              >
                Open in Maps ↗
              </a>
            </div>

            {/* Describe Your Issue Form */}
            <div className="quick-issue-box">
              <h4 className="issue-box-title">Describe Your Issue</h4>
              <p className="issue-box-desc">
                Send a direct inquiry to Dr. Sujay M&apos;s clinical team.
              </p>

              {sent ? (
                <div className="issue-sent-notice">
                  <strong>Thank you, {formData.name}!</strong>
                  <p>Your inquiry has been received. Our clinic team will call you at {formData.phone} shortly.</p>
                  <a
                    href={waLink(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary space-top-sm"
                  >
                    Continue via WhatsApp →
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="issue-form-grid">
                  <div className="issue-inputs-row">
                    <input
                      type="text"
                      className="issue-text-input"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      className="issue-text-input"
                      placeholder="Phone Number *"
                      required
                      pattern="[6-9][0-9]{9}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <textarea
                    className="issue-textarea-input"
                    rows={2}
                    placeholder="Describe your issue (e.g. acne scars, melasma, hair fall)..."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  />
                  <button type="submit" className="issue-submit-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '8px' }}>
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
