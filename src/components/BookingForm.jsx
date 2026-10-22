import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Calendar, CheckCircle2, ShieldCheck, Clock, User, Phone as PhoneIcon, Sparkles, ChevronDown } from 'lucide-react';

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
      <div className="container">
        <div className={isStandalone ? "booking-standalone-wrap" : "booking-grid"} style={isStandalone ? { maxWidth: '620px', margin: '0 auto' } : {}}>
          {/* Ultra-Crisp Booking Form Card */}
          <div className="booking-card liquid-glass-card" style={isStandalone ? { width: '100%', margin: '0 auto' } : {}}>
            <h2 className="booking-form-title">
              {preSelectedConcern ? `Request Consultation for ${preSelectedConcern}` : 'Request a Dermatologist Consultation'}
            </h2>
            <p style={{ fontSize: '13.5px', color: '#5C5268', marginBottom: '18px', lineHeight: '1.5' }}>
              Choose a concern to help us direct your enquiry. You can also request without selecting a concern. Select a preferred time; the clinic will confirm your appointment.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <CheckCircle2 size={64} style={{ color: '#153F39', margin: '0 auto 16px' }} />
                <h3 style={{ color: '#153F39', fontSize: '24px', marginBottom: '12px' }}>
                  Request Received
                </h3>
                <p style={{ color: '#253532', fontSize: '15px', marginBottom: '16px', fontWeight: '600' }}>
                  Your request has been received. This is not a confirmed appointment.
                </p>
                <p style={{ color: '#5C5268', fontSize: '14.5px', marginBottom: '16px' }}>
                  The clinic will contact you at <strong>{formData.phone}</strong> to confirm availability for <strong>{formData.date || 'your preferred date'}</strong> at <strong>{formData.time}</strong>.
                </p>
                <p style={{ fontSize: '12.5px', color: '#7E728C', marginBottom: '24px' }}>
                  Medicare Skin &amp; Cosmetic Clinic · Near Yelachenahalli Metro Station · Phone: +91 92428 55707
                </p>
                <button
                  className="btn-primary liquid-glass-btn"
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
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control liquid-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone number</label>
                  <input
                    type="tel"
                    className="form-control liquid-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Select Appointment Date</label>
                    <input
                      type="date"
                      className="form-control liquid-input"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Select Appointment Time</label>
                    <select
                      className="form-control liquid-input"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ fontSize: '14px', fontWeight: '700', color: '#2B1B4D', marginBottom: '8px', display: 'block' }}>
                    Your Concern
                  </label>
                  
                  {/* Slide-Down Trigger Button */}
                  <button
                    type="button"
                    className="concern-dropdown-trigger"
                    onClick={() => setIsConcernDropdownOpen(!isConcernDropdownOpen)}
                  >
                    <div className="concern-trigger-text">
                      <span style={{ fontWeight: '600', color: '#2B1B4D', fontSize: '14px' }}>
                        {formData.concerns.length > 0
                          ? `${formData.concerns.length} Concern${formData.concerns.length > 1 ? 's' : ''} Selected`
                          : 'Select Skin or Hair Concerns'}
                      </span>
                      {formData.concerns.length > 0 && (
                        <span className="concern-selected-badge">
                          {formData.concerns.join(', ')}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isConcernDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                        color: '#942876',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {/* Slide Down Collapsible Box */}
                  <div className={`concern-slidedown-content ${isConcernDropdownOpen ? 'open' : ''}`}>
                    <div className="concerns-glass-pills">
                      {displayedConcerns.map((concern) => {
                        const isSelected = formData.concerns.includes(concern);
                        return (
                          <label
                            key={concern}
                            className={`concern-checkbox-pill ${isSelected ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleCheckboxChange(concern);
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              style={{ accentColor: '#942876', width: '17px', height: '17px', cursor: 'pointer', flexShrink: 0 }}
                            />
                            <span style={{ fontSize: '14.5px', fontWeight: isSelected ? '700' : '600' }}>
                              {concern}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div style={{ margin: '14px 0 16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <input
                    type="checkbox"
                    id="consent-check"
                    required
                    defaultChecked
                    style={{ marginTop: '3px', accentColor: '#153F39', cursor: 'pointer' }}
                  />
                  <label htmlFor="consent-check" style={{ fontSize: '12.5px', color: '#5C5268', cursor: 'pointer', lineHeight: '1.4' }}>
                    I agree to Medicare Skin contacting me via phone or message to process this appointment request. Marketing communication is optional.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary liquid-glass-btn"
                  disabled={submitting}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '6px', background: '#153F39' }}
                >
                  <Sparkles size={18} /> {submitting ? 'Submitting Request...' : 'Request a Dermatologist Consultation'}
                </button>
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
      </div>
    </section>
  );
}
