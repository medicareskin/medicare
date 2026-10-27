import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, CheckCircle2, ShieldCheck, Clock, User, Phone as PhoneIcon, Sparkles, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingForm({ onSuccessToast, singleCardMode = false, preSelectedConcern = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10 AM to 10:30 AM',
    concerns: preSelectedConcern ? [preSelectedConcern] : []
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isConcernDropdownOpen, setIsConcernDropdownOpen] = useState(Boolean(preSelectedConcern));

  const availableConcerns = [
    "Acne Scar Treatment",
    "Laser Hair Removal",
    "Chemical Peels",
    "Anti-wrinkle Injections",
    "Skin Tightening",
    "Vitiligo Surgery",
    "Others"
  ];

  const displayedConcerns = React.useMemo(() => {
    if (preSelectedConcern && !availableConcerns.includes(preSelectedConcern)) {
      return [preSelectedConcern, ...availableConcerns];
    }
    return availableConcerns;
  }, [preSelectedConcern]);

  const handleCheckboxChange = (concern) => {
    setFormData((prev) => {
      const exists = prev.concerns.includes(concern);
      const updated = exists
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern];
      return { ...prev, concerns: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast(`Thank you ${formData.name}! Your appointment enquiry has been submitted. Our team will call you shortly.`);
      }
    }, 1000);
  };

  const isStandalone = singleCardMode || Boolean(preSelectedConcern);

  return (
    <section className="booking-overview-section" id="booking-section">
      <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div 
          className="booking-reference-card"
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '32px 34px',
            border: '1px solid var(--magenta-border)',
            boxShadow: '0 12px 36px rgba(43, 14, 76, 0.06)',
          }}
        >
          <h2 
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.6rem)',
              fontWeight: 700,
              color: '#7A1E60',
              margin: '0 0 24px',
              letterSpacing: '-0.01em',
            }}
          >
            Book Your Appointment
          </h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <div 
                style={{
                  display: 'inline-block',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#7A1E60',
                  background: 'rgba(122, 30, 96, 0.1)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  marginBottom: '14px',
                }}
              >
                REQUEST RECORDED
              </div>
              <h3 style={{ color: '#7A1E60', fontSize: '24px', marginBottom: '12px', fontWeight: 700 }}>
                Request Received
              </h3>
              <p style={{ color: '#2B1B4D', fontSize: '15px', marginBottom: '16px', fontWeight: '600' }}>
                Your request has been received. This is not a confirmed appointment.
              </p>
              <p style={{ color: '#5C5268', fontSize: '14.5px', marginBottom: '16px' }}>
                The clinic will contact you at <strong>{formData.phone}</strong> to confirm availability for <strong>{formData.date || 'your preferred date'}</strong> at <strong>{formData.time}</strong>.
              </p>
              <button
                type="button"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #7A1E60 0%, #4A0E38 100%)',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  border: 'none',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    date: '',
                    time: '10 AM to 10:30 AM',
                    concerns: []
                  });
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1: Name and Phone number */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#5C5268',
                      marginBottom: '8px',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '10px 16px',
                      background: '#FFFFFF',
                      border: '1px solid #D8CCC5',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: '#2B1B4D',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#5C5268',
                      marginBottom: '8px',
                    }}
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '10px 16px',
                      background: '#FFFFFF',
                      border: '1px solid #D8CCC5',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: '#2B1B4D',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Select Appointment Date and Select Appointment Time */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                  marginBottom: '26px',
                }}
              >
                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#5C5268',
                      marginBottom: '8px',
                    }}
                  >
                    Select Appointment Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '10px 16px',
                      background: '#FFFFFF',
                      border: '1px solid #D8CCC5',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: '#2B1B4D',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#5C5268',
                      marginBottom: '8px',
                    }}
                  >
                    Select Appointment Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '10px 16px',
                      background: '#FFFFFF',
                      border: '1px solid #D8CCC5',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: '#2B1B4D',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                    }}
                  >
                    <option>10 AM to 10:30 AM</option>
                    <option>10:30 AM to 11 AM</option>
                    <option>11 AM to 11:30 AM</option>
                    <option>11:30 AM to 12 PM</option>
                    <option>4 PM to 4:30 PM</option>
                    <option>5 PM to 5:30 PM</option>
                    <option>6 PM to 6:30 PM</option>
                    <option>7 PM to 7:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Section 3: Your Concern Checkboxes matching user reference */}
              <div style={{ marginBottom: '28px' }}>
                <label 
                  style={{
                    display: 'block',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#5C5268',
                    marginBottom: '14px',
                  }}
                >
                  Your Concern
                </label>

                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '14px 24px',
                  }}
                >
                  {displayedConcerns.map((concern) => {
                    const isChecked = formData.concerns.includes(concern);
                    return (
                      <label
                        key={concern}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.92rem',
                          color: '#4A4353',
                          fontWeight: isChecked ? 600 : 500,
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(concern)}
                          style={{
                            width: '18px',
                            height: '18px',
                            accentColor: '#7A1E60',
                            cursor: 'pointer',
                          }}
                        />
                        <span>{concern}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div style={{ margin: '14px 0 20px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="consent-check"
                  required
                  defaultChecked
                  style={{ marginTop: '3px', accentColor: '#7A1E60', cursor: 'pointer' }}
                />
                <label htmlFor="consent-check" style={{ fontSize: '13px', color: '#5C5268', lineHeight: '1.45', cursor: 'pointer' }}>
                  I understand this submission is a consultation request and <strong>not a confirmed appointment</strong> until verified by clinic staff.
                </label>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: 'linear-gradient(135deg, #7A1E60 0%, #4A0E38 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '13px 32px',
                    fontSize: '0.94rem',
                    fontWeight: 750,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 6px 20px rgba(122, 30, 96, 0.28)',
                  }}
                >
                  {submitting ? 'Submitting...' : 'Book Your Appointment →'}
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Dr. Sujay M / Medicare Skin Clinic, I would like to book a dermatologist appointment for ${formData.name || 'a consultation'} on ${formData.date || 'upcoming date'} (${formData.time}). Concerns: ${formData.concerns.join(', ') || 'Dermatology consultation'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#FFFFFF',
                    border: '1.5px solid #25D366',
                    color: '#128C7E',
                    borderRadius: '9999px',
                    padding: '11px 22px',
                    fontSize: '0.88rem',
                    fontWeight: 750,
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.15)',
                  }}
                >
                  <WhatsAppIcon size={18} color="#25D366" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

          {/* Overview Content & Statistics (Hidden in single card mode) */}
          {!isStandalone && (
            <div className="overview-content">
              <h2>Medicare Skin & Cosmetic Clinic</h2>
              <p>
                Medicare Skin and Cosmetic Clinic is one of the best skin, hair and body clinics in Bangalore.
                We offer customised and cost-effective treatments clinically proven for safety and efficacy.
                Our holistic approach helps us deliver optimal results and long-lasting satisfaction to our valuable clients.
              </p>
              <p>
                We specialise in treating skin allergies, skin infections (bacterial, fungal, viral), acne, scars,
                hair loss, hair thinning, premature ageing, wrinkles, saggy skin, dark circles, freckles, tan, melasma,
                birthmarks, stretch marks, warts, moles, laser hair reduction, dermal fillers, anti-wrinkle injections,
                thread lifts and many more.
              </p>
              <p>
                We envision being the leading skin, hair and body healthcare provider to the masses, offering safe and
                effective world-class procedures at affordable prices.
              </p>

              {/* Counter Row with Verified Facts */}
              <div className="stats-counter-row">
                <div className="stat-item-box">
                  <div className="stat-number">18+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item-box">
                  <div className="stat-number">MBBS, DDVL</div>
                  <div className="stat-label">Bangalore Medical College</div>
                </div>
                <div className="stat-item-box">
                  <div className="stat-number">Metro Gate 2</div>
                  <div className="stat-label">Yelachenahalli</div>
                </div>
              </div>
            </div>
          )}
        </div>
    </section>
  );
}
