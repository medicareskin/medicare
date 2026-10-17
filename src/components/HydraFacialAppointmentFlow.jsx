import React, { useState } from 'react';
import { 
  Sparkles, Calendar, Clock, CheckCircle2, Droplets, ArrowRight, 
  Phone, MessageSquare, ShieldCheck, Heart, User, ChevronRight, AlertCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function HydraFacialAppointmentFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState('deluxe');
  const [skinConcern, setSkinConcern] = useState('glow');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('afternoon');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const packages = [
    {
      id: 'express',
      name: 'Hydra-Glow Express',
      duration: '40–45 Mins',
      tagline: 'Instant Radiance Boost',
      description: 'Gentle vortex cleansing, mild lactic acid resurfacing, painless extraction, and concentrated hyaluronic acid infusion.',
      idealFor: 'Quick pre-party refresh, busy schedules, maintenance'
    },
    {
      id: 'deluxe',
      name: 'Deluxe Hydra-Clarifying',
      duration: '60 Mins',
      tagline: 'Most Popular Patient Choice',
      isPopular: true,
      description: 'Comprehensive vortex dermabrasion, deep follicular extraction with salicylic solution, targeted pigment booster, and antioxidant peptide seal.',
      idealFor: 'Dullness, congested pores, uneven pigmentation, dark spots'
    },
    {
      id: 'platinum',
      name: 'Platinum Age-Defying Hydra',
      duration: '75 Mins',
      tagline: 'Ultimate Luxury Rejuvenation',
      description: 'Full detox protocol starting with lymphatic drainage massage, customized booster serums, targeted LED phototherapy, and intensive barrier restore.',
      idealFor: 'Comprehensive facial rejuvenation, mature skin, deep detox'
    }
  ];

  const concerns = [
    { id: 'glow', label: 'Instant Radiance & Event Glow' },
    { id: 'pores', label: 'Clogged Pores, Sebum & Blackheads' },
    { id: 'hydration', label: 'Dehydration, Dryness & Flakiness' },
    { id: 'pigment', label: 'Uneven Skin Tone & Dark Spots' },
    { id: 'texture', label: 'Rough Skin Texture & Fine Lines' }
  ];

  const timeSlots = [
    { id: 'morning', label: 'Morning Slot (10:00 AM – 1:00 PM)' },
    { id: 'afternoon', label: 'Afternoon Slot (2:00 PM – 5:00 PM)' },
    { id: 'evening', label: 'Evening Slot (5:00 PM – 7:00 PM)' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    setIsSubmitting(true);

    const chosenPkg = packages.find(p => p.id === selectedPackage);
    const chosenConcern = concerns.find(c => c.id === skinConcern);
    const chosenSlot = timeSlots.find(s => s.id === preferredTime);

    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `Hello Medicare Skin Clinic, I would like to book a HydraFacial session with Dr. Sujay M:\n\n` +
      `• Patient Name: ${patientName}\n` +
      `• Phone: ${patientPhone}\n` +
      `• Treatment Package: ${chosenPkg?.name} (${chosenPkg?.duration})\n` +
      `• Primary Concern: ${chosenConcern?.label}\n` +
      `• Preferred Date: ${preferredDate}\n` +
      `• Preferred Time: ${chosenSlot?.label}\n` +
      (patientNotes ? `• Notes: ${patientNotes}\n` : '') +
      `\nPlease confirm the availability of this appointment slot.`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(`https://wa.me/919242855707?text=${waText}`, '_blank');
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '26px',
      border: '1.5px solid #E4D8E6',
      padding: '36px',
      boxShadow: '0 20px 50px rgba(43, 27, 77, 0.08)',
      maxWidth: '820px',
      margin: '0 auto'
    }}>
      {/* Header & Steps Indicator */}
      <div style={{ borderBottom: '1px solid #F0E8F2', paddingBottom: '20px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#2B73AF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              DIRECT PATIENT BOOKING
            </span>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#2B1B4D', margin: '4px 0 0' }}>
              Book Your HydraFacial Session
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#6A5F75' }}>
            <span>Dr. Sujay M · Medicare Skin</span>
          </div>
        </div>

        {/* Step Progress Circles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {[
            { num: 1, label: 'Select Session' },
            { num: 2, label: 'Schedule Slot' },
            { num: 3, label: 'Patient Info' }
          ].map((st) => (
            <div key={st.num} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: step >= st.num ? '#2B73AF' : '#ECE5EE',
                color: step >= st.num ? '#FFFFFF' : '#8C8296',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700
              }}>
                {st.num}
              </div>
              <span style={{ fontSize: '12.5px', fontWeight: step === st.num ? 700 : 500, color: step === st.num ? '#2B1B4D' : '#8C8296' }}>
                {st.label}
              </span>
              {st.num < 3 && <div style={{ flex: 1, height: '2px', background: step > st.num ? '#2B73AF' : '#ECE5EE' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Package & Concern Selector */}
      {step === 1 && (
        <div>
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
              Choose Your HydraFacial Package
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  style={{
                    border: selectedPackage === pkg.id ? '2px solid #2B73AF' : '1.5px solid #EBE0EA',
                    background: selectedPackage === pkg.id ? '#F4F8FC' : '#FFFFFF',
                    borderRadius: '16px',
                    padding: '20px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedPackage === pkg.id ? '0 8px 24px rgba(43, 115, 175, 0.12)' : 'none'
                  }}
                >
                  {pkg.isPopular && (
                    <span style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '16px',
                      background: '#2B73AF',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      Most Popular
                    </span>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#2B1B4D' }}>{pkg.name}</div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#2B73AF' }}>{pkg.duration}</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#6A5F75', fontWeight: 600, marginBottom: '10px' }}>{pkg.tagline}</div>
                  <p style={{ fontSize: '13px', color: '#4E4158', lineHeight: 1.5, margin: '0 0 10px' }}>
                    {pkg.description}
                  </p>
                  <div style={{ fontSize: '11px', color: '#7E7288' }}>
                    <strong>Best for:</strong> {pkg.idealFor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '26px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
              What is your main focus for this session?
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {concerns.map(c => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setSkinConcern(c.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: skinConcern === c.id ? 700 : 500,
                    background: skinConcern === c.id ? '#2B73AF' : '#F6F2F7',
                    color: skinConcern === c.id ? '#FFFFFF' : '#4E4158',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setStep(2)}
              style={{
                background: 'linear-gradient(135deg, #2B73AF 0%, #3B8BD1 100%)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Continue to Date &amp; Time <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Date & Slot Selection */}
      {step === 2 && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '26px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
                Select Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1.5px solid #E0D4E2',
                  fontSize: '14px',
                  color: '#2B1B4D'
                }}
              />
              <span style={{ display: 'block', fontSize: '11px', color: '#7E7288', marginTop: '6px' }}>
                Clinic Hours: Monday – Saturday (10:00 AM – 7:00 PM). Closed Sundays.
              </span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
                Select Preferred Time Window
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {timeSlots.map(slot => (
                  <label
                    key={slot.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: preferredTime === slot.id ? '#F4F8FC' : '#FAF8FB',
                      border: preferredTime === slot.id ? '1.5px solid #2B73AF' : '1px solid #ECE3EC',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: preferredTime === slot.id ? 700 : 500,
                      color: '#2B1B4D'
                    }}
                  >
                    <input
                      type="radio"
                      name="slot"
                      checked={preferredTime === slot.id}
                      onChange={() => setPreferredTime(slot.id)}
                      style={{ accentColor: '#2B73AF' }}
                    />
                    {slot.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Pre-Treatment Clinical Checklist Banner */}
          <div style={{
            background: '#FFF9E6',
            border: '1px solid #FFE29A',
            borderRadius: '14px',
            padding: '16px 20px',
            marginBottom: '26px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <AlertCircle size={18} color="#B57A00" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '13px', color: '#684E00', lineHeight: 1.55 }}>
              <strong>Pre-Treatment Preparation Tip:</strong> For optimal results, discontinue active exfoliants (AHA, BHA, retinol, or benzoyl peroxide) 48 hours prior to your HydraFacial session. Avoid direct sunburn or facial waxing 3 days prior.
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setStep(1)}
              style={{
                background: 'none',
                border: 'none',
                color: '#6A5F75',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              ← Back to Packages
            </button>
            <button
              onClick={() => setStep(3)}
              style={{
                background: 'linear-gradient(135deg, #2B73AF 0%, #3B8BD1 100%)',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Continue to Details <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Patient Information & Final Confirmation */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #E0D4E2',
                  fontSize: '14px',
                  color: '#2B1B4D'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '6px' }}>
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #E0D4E2',
                  fontSize: '14px',
                  color: '#2B1B4D'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '6px' }}>
              Special Notes / Allergies (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., preparing for wedding in 2 days, sensitive skin, etc."
              value={patientNotes}
              onChange={(e) => setPatientNotes(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1.5px solid #E0D4E2',
                fontSize: '14px',
                color: '#2B1B4D'
              }}
            />
          </div>

          {/* Booking Summary Box */}
          <div style={{
            background: '#F8F5FA',
            borderRadius: '14px',
            padding: '18px 22px',
            marginBottom: '24px',
            border: '1px solid #ECE2EE',
            fontSize: '13px',
            color: '#4E4158'
          }}>
            <div style={{ fontWeight: 800, color: '#2B1B4D', marginBottom: '6px' }}>
              Summary of Selected Appointment:
            </div>
            <div>• Package: <strong>{packages.find(p => p.id === selectedPackage)?.name}</strong></div>
            <div>• Preferred Date &amp; Slot: <strong>{preferredDate} ({timeSlots.find(s => s.id === preferredTime)?.label})</strong></div>
            <div>• Location: <strong>Medicare Skin Clinic, Jyothi Layout, near Yelachenahalli Metro, Kanakapura Main Rd</strong></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              type="button"
              onClick={() => setStep(2)}
              style={{
                background: 'none',
                border: 'none',
                color: '#6A5F75',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              ← Back to Schedule
            </button>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  border: '1.5px solid #2B73AF',
                  color: '#2B73AF',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={15} />
                Call +91 92428 55707
              </a>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(135deg, #2B73AF 0%, #1E5C91 100%)',
                  color: '#FFFFFF',
                  padding: '12px 28px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(43, 115, 175, 0.25)'
                }}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm via WhatsApp / SMS →'}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Success Notification */}
      {isSuccess && (
        <div style={{
          marginTop: '20px',
          background: '#E6F8EF',
          border: '1.5px solid #84DFB4',
          borderRadius: '12px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#08633B',
          fontSize: '13.5px',
          fontWeight: 600
        }}>
          <CheckCircle2 size={18} color="#08633B" />
          <span>Appointment request opened in WhatsApp. Our reception team will confirm your slot shortly.</span>
        </div>
      )}
    </div>
  );
}
