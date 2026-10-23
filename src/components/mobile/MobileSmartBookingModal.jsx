import React, { useState } from 'react';
import {
  X, Check, ChevronRight, ChevronLeft, Calendar as CalendarIcon,
  Clock, ShieldCheck, User, Phone, Mail, Sparkles, MapPin, CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

const CONCERN_OPTIONS = [
  {
    id: 'acne',
    title: 'Acne & Breakouts',
    desc: 'Active pimples, cystic acne, inflammation',
    image: '/images/hero_slide_2_acne.jpg'
  },
  {
    id: 'hair',
    title: 'Hair Loss & Thinning',
    desc: 'Excessive shedding, hairline recession, PRP/GFC',
    image: '/images/hero_slide_3_hair.jpg'
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Dark Spots',
    desc: 'Melasma, sun spots, tan & uneven tone',
    image: '/images/q_switched_procedure.jpg'
  },
  {
    id: 'laser',
    title: 'Laser Hair Reduction',
    desc: 'Painless triple wavelength diode laser',
    image: '/images/cat_laser_care.jpg'
  },
  {
    id: 'other',
    title: 'Other Concerns',
    desc: 'Acne scars, anti-ageing, skin tags, eczema',
    image: '/images/hydrafacial_procedure.jpg'
  }
];

const TIME_SLOTS = [
  '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
];

export default function MobileSmartBookingModal({ isOpen, onClose, onSuccessToast, initialConcern = 'acne' }) {
  const [step, setStep] = useState(1);
  const [selectedConcern, setSelectedConcern] = useState(initialConcern || 'acne');

  React.useEffect(() => {
    if (initialConcern) {
      setSelectedConcern(initialConcern);
    }
  }, [initialConcern, isOpen]);
  const [selectedLocation, setSelectedLocation] = useState('south-bengaluru');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whatsappConsent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Next 7 days generator
  const getDates = () => {
    const dates = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        fullDate: d.toISOString().split('T')[0],
        dayName: days[d.getDay()],
        dayNum: d.getDate(),
        month: months[d.getMonth()]
      });
    }
    return dates;
  };

  const datesList = getDates();

  const handleNextStep = () => {
    if (step === 4) {
      if (!formData.name.trim() || !formData.phone.trim()) {
        alert('Please provide your name and phone number to continue.');
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(5);
        if (onSuccessToast) {
          onSuccessToast(`Appointment Confirmed! Thank you ${formData.name}.`);
        }
      }, 700);
    } else {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div
      className="mobile-smart-booking-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(20, 10, 30, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}
      onClick={handleResetAndClose}
    >
      <div
        className="mobile-smart-booking-sheet"
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '92vh',
          background: '#FFFFFF',
          borderTopLeftRadius: '28px',
          borderTopRightRadius: '28px',
          boxShadow: '0 -12px 48px rgba(0, 0, 0, 0.25)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          paddingBottom: '24px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Progress and Close */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #F0EAF1',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {step > 1 && step < 5 && (
              <button
                onClick={handlePrevStep}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2B1B4D',
                  padding: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Previous step"
              >
                <ChevronLeft size={22} />
              </button>
            )}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Medicare Skin · Smart Booking
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#6A5F75' }}>
                {step === 5 ? 'Booking Confirmed' : `Step ${step} of 4`}
              </div>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: '#F6F2F7',
              border: 'none',
              color: '#2B1B4D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Close booking sheet"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 5 && (
          <div style={{ width: '100%', height: '3px', background: '#F0EAF1' }}>
            <div
              style={{
                width: `${(step / 4) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #942876, #C8509B)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        )}

        {/* Modal Body Content */}
        <div style={{ padding: '20px 20px 0' }}>
          {/* STEP 1: SELECT CONCERN */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', margin: '0 0 6px' }}>
                What brings you to Medicare Skin?
              </h2>
              <p style={{ fontSize: '13.5px', color: '#6A5F75', margin: '0 0 20px', lineHeight: 1.45 }}>
                Select your primary concern to book a dermatologist consultation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {CONCERN_OPTIONS.map((item) => {
                  const isSelected = selectedConcern === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedConcern(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '12px 14px',
                        borderRadius: '16px',
                        border: isSelected ? '2px solid #942876' : '1.5px solid #EFE8F0',
                        background: isSelected ? 'rgba(148, 40, 118, 0.04)' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 4px 16px rgba(148, 40, 118, 0.1)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '12px',
                          objectFit: 'cover',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', marginBottom: '2px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '12px', color: '#776D84', lineHeight: 1.35 }}>
                          {item.desc}
                        </div>
                      </div>
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: isSelected ? '6px solid #942876' : '2px solid #C4BDCC',
                          background: '#FFFFFF',
                          flexShrink: 0
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                className="btn-primary"
                onClick={handleNextStep}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(148, 40, 118, 0.25)'
                }}
              >
                <span>Continue</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 2: CHOOSE DOCTOR & CLINIC */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', margin: '0 0 6px' }}>
                Choose Your Doctor / Clinic
              </h2>
              <p style={{ fontSize: '13.5px', color: '#6A5F75', margin: '0 0 20px', lineHeight: 1.45 }}>
                Consult with our senior dermatologist at your preferred clinic location.
              </p>

              {/* Doctor Card */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '16px',
                  borderRadius: '18px',
                  background: '#FAF6FA',
                  border: '1.5px solid #EBE0EA',
                  marginBottom: '20px'
                }}
              >
                <img
                  src="/images/imageye___-_imgi_6_dr-sujay.webp"
                  alt="Dr. Sujay M"
                  style={{
                    width: '74px',
                    height: '84px',
                    borderRadius: '14px',
                    objectFit: 'cover',
                    flexShrink: 0
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2B1B4D', margin: 0 }}>
                      Dr. Sujay M
                    </h3>
                    <ShieldCheck size={16} color="#942876" />
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#942876', margin: '2px 0 6px' }}>
                    MBBS, DDVL · Consultant Dermatologist
                  </div>
                  <div style={{ fontSize: '12px', color: '#6A5F75', lineHeight: 1.4 }}>
                    • 18+ Years Clinical Experience<br />
                    • BMC Postgraduate (2005)<br />
                    • Specialist in Laser, Hair & Aesthetics
                  </div>
                </div>
              </div>

              {/* Clinic Location Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#2B1B4D', display: 'block', marginBottom: '8px' }}>
                  Select Clinic Location
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: '14px',
                      border: selectedLocation === 'south-bengaluru' ? '2px solid #942876' : '1px solid #E8E2EB',
                      background: selectedLocation === 'south-bengaluru' ? 'rgba(148, 40, 118, 0.04)' : '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="location"
                      checked={selectedLocation === 'south-bengaluru'}
                      onChange={() => setSelectedLocation('south-bengaluru')}
                      style={{ accentColor: '#942876' }}
                    />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#2B1B4D' }}>
                        South Bengaluru Clinic (Jyothi Layout)
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#776D84' }}>
                        Near Yelachenahalli Metro Station · Free Parking Available
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={handleNextStep}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(148, 40, 118, 0.25)'
                }}
              >
                <span>View Available Slots</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 3: PICK DATE & TIME */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', margin: '0 0 6px' }}>
                Select Date & Time
              </h2>
              <p style={{ fontSize: '13.5px', color: '#6A5F75', margin: '0 0 16px', lineHeight: 1.45 }}>
                Choose your preferred appointment slot with Dr. Sujay M.
              </p>

              {/* Horizontal Date Picker */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#776D84', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Available Dates
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    overflowX: 'auto',
                    paddingBottom: '8px',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {datesList.map((d) => {
                    const isSelected = selectedDate === d.fullDate;
                    return (
                      <button
                        key={d.fullDate}
                        onClick={() => setSelectedDate(d.fullDate)}
                        style={{
                          flexShrink: 0,
                          width: '64px',
                          padding: '10px 4px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid #942876' : '1px solid #E8E2EB',
                          background: isSelected ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#2B1B4D',
                          textAlign: 'center',
                          cursor: 'pointer',
                          boxShadow: isSelected ? '0 6px 16px rgba(148, 40, 118, 0.25)' : 'none'
                        }}
                      >
                        <div style={{ fontSize: '11px', opacity: isSelected ? 0.9 : 0.6, fontWeight: 600 }}>
                          {d.dayName}
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 800, margin: '2px 0' }}>
                          {d.dayNum}
                        </div>
                        <div style={{ fontSize: '10px', opacity: isSelected ? 0.9 : 0.6 }}>
                          {d.month}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Grid */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#776D84', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Available Time Slots
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {TIME_SLOTS.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: '10px 6px',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 700,
                          border: isSelected ? '2px solid #942876' : '1px solid #E8E2EB',
                          background: isSelected ? '#942876' : '#FAF8FB',
                          color: isSelected ? '#FFFFFF' : '#2B1B4D',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                style={{
                  background: '#FBF8FA',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  fontSize: '12px',
                  color: '#6A5F75',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Clock size={16} color="#942876" />
                <span>Slots fill fast. Book now to secure your preferred slot.</span>
              </div>

              <button
                className="btn-primary"
                onClick={handleNextStep}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(148, 40, 118, 0.25)'
                }}
              >
                <span>Continue</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 4: YOUR DETAILS & CONFIRM */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', margin: '0 0 6px' }}>
                Your Details
              </h2>
              <p style={{ fontSize: '13.5px', color: '#6A5F75', margin: '0 0 18px', lineHeight: 1.45 }}>
                Almost there! Please share your contact details to confirm your appointment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#2B1B4D', display: 'block', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #E2D9E4',
                      fontSize: '14px',
                      outline: 'none',
                      background: '#FAF8FB'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#2B1B4D', display: 'block', marginBottom: '4px' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #E2D9E4',
                      fontSize: '14px',
                      outline: 'none',
                      background: '#FAF8FB'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12.5px', fontWeight: 700, color: '#2B1B4D', display: 'block', marginBottom: '4px' }}>
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. ananya@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #E2D9E4',
                      fontSize: '14px',
                      outline: 'none',
                      background: '#FAF8FB'
                    }}
                  />
                </div>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '12px', color: '#5C5268', lineHeight: 1.4 }}>
                  <input
                    type="checkbox"
                    checked={formData.whatsappConsent}
                    onChange={(e) => setFormData({ ...formData, whatsappConsent: e.target.checked })}
                    style={{ accentColor: '#942876', marginTop: '2px' }}
                  />
                  <span>
                    I agree to receive consultation updates, reminders and directions on WhatsApp and SMS from Medicare Skin.
                  </span>
                </label>
              </div>

              <div style={{ background: '#FAF6FA', borderRadius: '12px', padding: '12px', marginBottom: '20px', fontSize: '12px', color: '#6A5F75' }}>
                🔒 <strong>Privacy Assured:</strong> Your data is strictly encrypted and used only for clinic appointment confirmation. No spam or commercial sharing.
              </div>

              <button
                className="btn-primary"
                onClick={handleNextStep}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(148, 40, 118, 0.25)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                <span>{isSubmitting ? 'Confirming Slot...' : 'Confirm Booking'}</span>
                <Check size={18} />
              </button>
            </div>
          )}

          {/* STEP 5: BOOKING SUCCESS */}
          {step === 5 && (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 8px 24px rgba(46, 125, 50, 0.28)'
                }}
              >
                <Check size={38} strokeWidth={3} />
              </div>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '23px', color: '#2B1B4D', margin: '0 0 6px' }}>
                Appointment Booked Successfully!
              </h2>
              <p style={{ fontSize: '13.5px', color: '#6A5F75', margin: '0 0 20px', lineHeight: 1.45 }}>
                Your consultation request with <strong>Dr. Sujay M</strong> has been recorded.
              </p>

              {/* Summary Card */}
              <div
                style={{
                  background: '#FAF6FA',
                  border: '1.5px solid #EBE0EA',
                  borderRadius: '18px',
                  padding: '18px',
                  textAlign: 'left',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CalendarIcon size={18} color="#942876" />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B1B4D' }}>
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <User size={18} color="#942876" />
                  <span style={{ fontSize: '14px', color: '#2B1B4D' }}>
                    Dr. Sujay M (MBBS, DDVL)
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="#942876" />
                  <span style={{ fontSize: '13px', color: '#6A5F75' }}>
                    South Bengaluru Clinic · Near Yelachenahalli Metro
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(148, 40, 118, 0.05)',
                  borderLeft: '3px solid #942876',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px',
                  color: '#5C4D68',
                  textAlign: 'left',
                  marginBottom: '24px'
                }}
              >
                A confirmation summary has been dispatched to <strong>{formData.phone}</strong> via WhatsApp & SMS. Our care desk will reach out if slot verification is needed.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  className="btn-primary"
                  onClick={handleResetAndClose}
                  style={{
                    width: '100%',
                    padding: '15px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
