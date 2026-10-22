import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle2, User, MessageSquare, Train, Sparkles } from 'lucide-react';

export default function LocationMapSection({ onSuccessToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'General Skin Consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast(`Thank you ${formData.name}! Your message has been sent to Dr. Sujay M's clinic.`);
      }
    }, 700);
  };

  return (
    <section className="location-map-section" id="location-section" style={{ padding: '80px 0', background: 'transparent' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '45px', textAlign: 'center' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: '#153F39', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px', border: '1px solid rgba(21, 63, 57, 0.15)', boxShadow: '0 4px 14px rgba(21, 63, 57, 0.06)' }}>
            <Sparkles size={14} /> SOUTH BENGALURU CLINIC
          </span>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '38px', fontWeight: 650, color: '#153F39', marginBottom: '12px' }}>
            Visit Us in South Bengaluru
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '680px', margin: '0 auto' }}>
            Near Yelachenahalli Metro Station, Kanakapura Main Road. Confirm directions, clinic hours and contact details before travelling.
          </p>
        </div>

        {/* 2-Column Balanced 3D Liquid Glass Grid */}
        <div className="location-2col-grid">
          
          {/* LEFT SIDE: Contact & Inquiry Form */}
          <div className="location-card-box contact-form-glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 32px', height: '100%' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#942876', background: 'rgba(200, 80, 155, 0.12)', padding: '4px 12px', borderRadius: '16px', letterSpacing: '0.5px' }}>
                  RAPID CLINIC RESPONSE
                </span>
                <span style={{ fontSize: '12px', color: '#7E728C' }}>* Required fields</span>
              </div>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '26px', fontWeight: 650, color: '#153F39', marginBottom: '8px' }}>
                Have Questions? Get in touch!
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', marginBottom: '24px', lineHeight: '1.6' }}>
                Fill out your details below and Dr. Sujay M's patient care desk will reach back promptly.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <CheckCircle2 size={56} color="#942876" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ color: '#2B1B4D', fontSize: '22px', marginBottom: '10px' }}>Message Sent Successfully!</h4>
                  <p style={{ color: '#5C5268', fontSize: '14px', marginBottom: '24px' }}>
                    Thank you <strong>{formData.name}</strong>. We have received your message and will reach out to <strong>{formData.phone}</strong> soon.
                  </p>
                  <button
                    className="btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', concern: 'General Skin Consultation', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name field */}
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} color="#942876" /> Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Phone & Email fields */}
                  <div className="contact-inputs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Phone size={14} color="#942876" /> Phone *
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91 92428 55707"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Mail size={14} color="#942876" /> Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="priya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Primary Concern Select */}
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={14} color="#942876" /> Primary Concern
                    </label>
                    <select
                      className="form-control"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    >
                      <option value="General Skin Consultation">General Skin / Dermatology Consultation</option>
                      <option value="Acne & Pores Treatment">Acne, Pimples & Acne Scar Revision</option>
                      <option value="Hair Loss & GFT Therapy">Hair Loss, Thinning & Growth Factor Therapy</option>
                      <option value="Laser Hair Removal">US-FDA Laser Hair Removal</option>
                      <option value="Pigmentation & Melasma">Pigmentation, Dark Spots & Chemical Peels</option>
                      <option value="Anti-Aging & Firming">Anti-Aging, Dermal Fillers & Skin Tightening</option>
                      <option value="Vitiligo & Surgical Care">Vitiligo Surgery & Skin Restoration</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#153F39', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MessageSquare size={14} color="#153F39" /> Preferred Time or Question (Optional)
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Share your preferred consultation timing or general enquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    ></textarea>
                    <p style={{ fontSize: '11.5px', color: '#7E728C', marginTop: '6px', lineHeight: '1.4' }}>
                      Please do not send detailed medical histories or sensitive photographs in this initial enquiry. For urgent symptoms, seek appropriate immediate medical care.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '16px', fontWeight: '600', marginTop: '6px', background: '#153F39' }}
                  >
                    <Send size={18} /> {loading ? 'Sending Your Message...' : 'Send Message to Dr. (Mrs.) Sujay M'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Map & Clinic Address Details */}
          <div className="location-card-box map-info-glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px 32px', height: '100%' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#942876', background: 'rgba(200, 80, 155, 0.12)', padding: '4px 12px', borderRadius: '16px', letterSpacing: '0.5px' }}>
                  SOUTH BANGALORE CLINIC
                </span>
                <span style={{ fontSize: '12px', color: '#7E728C', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Train size={13} color="#942876" /> 2 Min from Metro
                </span>
              </div>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '26px', fontWeight: 650, color: '#153F39', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin color="#153F39" size={24} /> Clinic Location & Interactive Map
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', marginBottom: '20px', lineHeight: '1.6' }}>
                Easy access with dedicated parking right off Kanakapura Road near Yelachenahalli Metro Station.
              </p>

              {/* 3D Glass Framed Google Map */}
              <div style={{ width: '100%', height: '270px', borderRadius: '18px', overflow: 'hidden', marginBottom: '20px', border: '1.5px solid rgba(255, 255, 255, 0.95)', boxShadow: '0 8px 24px rgba(148, 40, 118, 0.08), inset 0 2px 4px rgba(0,0,0,0.06)' }}>
                <iframe
                  title="Medicare Skin Clinic Location Map"
                  src={CLINIC_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Quick Info Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', fontSize: '14px', color: '#5C5268' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '12px', border: '1px solid rgba(148, 40, 118, 0.12)' }}>
                  <MapPin size={18} color="#942876" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    <strong>Address:</strong> {CLINIC_INFO.address}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '12px', border: '1px solid rgba(148, 40, 118, 0.12)' }}>
                    <Phone size={16} color="#942876" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '13px' }}>
                      <a href={`tel:${CLINIC_INFO.rawPhone}`} style={{ color: '#2B1B4D', fontWeight: '700' }}>{CLINIC_INFO.phone}</a>
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '12px', border: '1px solid rgba(148, 40, 118, 0.12)' }}>
                    <Clock size={16} color="#C8509B" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: '#2B1B4D', fontWeight: '600' }}>
                      Mon-Sat: 10AM - 7PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <a
                href={CLINIC_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '16px', fontWeight: '600' }}
              >
                <Navigation size={18} /> Open Directions on Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
