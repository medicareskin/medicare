import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle2 } from 'lucide-react';

export default function LocationMapSection({ onSuccessToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: 'General Skin / Hair Consultation',
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
    }, 800);
  };

  const googleMapsUrl = "https://maps.google.com/?q=Medicare+Skin+and+Cosmetic+Clinic+Yelachenahalli+Bangalore";

  return (
    <section className="location-map-section" id="location-section" style={{ padding: '80px 0', background: '#FDF9FB', borderTop: '1px solid #EBE0EA' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '45px', textAlign: 'center' }}>
          <span style={{ background: '#FFF', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            CONTACT US
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#2B1B4D', marginBottom: '12px' }}>
            Visit Our Clinic & Get In Touch
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto' }}>
            Have questions? Send us an enquiry or visit us right near Yelachenahalli Metro Station, Kanakapura Main Road, South Bangalore.
          </p>
        </div>

        {/* 2-Column Layout: Form in LEFT, Map in RIGHT (Stacks to 1-Column on Mobile) */}
        <div className="location-2col-grid">
          
          {/* LEFT SIDE: Contact & Enquiry Form */}
          <div className="location-card-box">
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#2B1B4D', marginBottom: '8px' }}>
              Have Questions? Get in touch!
            </h3>
            <p style={{ fontSize: '14px', color: '#5C5268', marginBottom: '24px' }}>
              Fill out your details below and our patient desk will get back to you promptly.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <CheckCircle2 size={56} color="#25D366" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ color: '#2B1B4D', fontSize: '22px', marginBottom: '10px' }}>Message Sent Successfully!</h4>
                <p style={{ color: '#5C5268', fontSize: '14px', marginBottom: '20px' }}>
                  Thank you <strong>{formData.name}</strong>. We have received your message and will reach out to <strong>{formData.phone}</strong> soon.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', concern: 'General Skin / Hair Consultation', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '4px', display: 'block' }}>Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="contact-inputs-grid">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '4px', display: 'block' }}>Phone *</label>
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
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '4px', display: 'block' }}>Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D', marginBottom: '4px', display: 'block' }}>Describe Your Issue *</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Briefly describe your skin, hair or cosmetic concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ background: '#38B6FF', color: '#FFF', border: 'none', justifyContent: 'center', padding: '14px', fontSize: '16px', fontWeight: '600', marginTop: '6px', borderRadius: '8px' }}
                >
                  <Send size={18} /> {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT SIDE: Map & Clinic Address Details */}
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '32px', boxShadow: '0 10px 30px rgba(43,27,77,0.06)', border: '1px solid #EBE0EA', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin color="#942876" size={24} /> Clinic Location & Google Map
            </h3>

            {/* Embedded Google Map */}
            <div style={{ width: '100%', height: '260px', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px', border: '1px solid #EBE0EA' }}>
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

            {/* Address Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#5C5268', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                  <MapPin size={18} color="#942876" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Office Address:</strong> {CLINIC_INFO.address}</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Phone size={18} color="#25D366" style={{ flexShrink: 0 }} />
                  <span><strong>Phone:</strong> <a href={`tel:${CLINIC_INFO.rawPhone}`} style={{ color: '#2B1B4D', fontWeight: '700' }}>{CLINIC_INFO.phone}</a></span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Mail size={18} color="#942876" style={{ flexShrink: 0 }} />
                  <span><strong>Email:</strong> {CLINIC_INFO.email}</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} color="#FFB800" style={{ flexShrink: 0 }} />
                  <span><strong>OPD Hours:</strong> {CLINIC_INFO.hours}</span>
                </p>
              </div>

              <a
                href={CLINIC_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ background: '#2B1B4D', marginTop: '16px', justifyContent: 'center' }}
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
