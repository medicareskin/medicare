import React, { useState } from 'react';
import {
  X, Calendar, Clock, MapPin, User, FileText, Download,
  MessageCircle, CheckCircle2, ChevronRight, ShieldCheck,
  AlertCircle, Sparkles, Bell
} from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export default function MobilePatientPortalModal({ isOpen, onClose, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'aftercare' | 'journey'

  if (!isOpen) return null;

  return (
    <div
      className="mobile-portal-modal-overlay"
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
      onClick={onClose}
    >
      <div
        className="mobile-portal-modal-sheet"
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
          paddingBottom: '28px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(148, 40, 118, 0.15) 0%, rgba(200, 80, 155, 0.25) 100%)',
                color: '#942876',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '16px'
              }}
            >
              AR
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#2B1B4D' }}>
                Hello, Ananya R
              </div>
              <div style={{ fontSize: '11.5px', color: '#942876', fontWeight: 700 }}>
                Patient ID: #MS-8492 · Verified
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
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
            aria-label="Close portal sheet"
          >
            <X size={18} />
          </button>
        </div>

        {/* 3 Nav Tabs */}
        <div
          style={{
            display: 'flex',
            background: '#F8F5F9',
            padding: '4px',
            margin: '16px 20px 0',
            borderRadius: '14px',
            gap: '4px'
          }}
        >
          <button
            onClick={() => setActiveTab('upcoming')}
            style={{
              flex: 1,
              padding: '10px 4px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'upcoming' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'upcoming' ? '#942876' : '#6A5F75',
              fontWeight: 700,
              fontSize: '12.5px',
              cursor: 'pointer',
              boxShadow: activeTab === 'upcoming' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('aftercare')}
            style={{
              flex: 1,
              padding: '10px 4px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'aftercare' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'aftercare' ? '#942876' : '#6A5F75',
              fontWeight: 700,
              fontSize: '12.5px',
              cursor: 'pointer',
              boxShadow: activeTab === 'aftercare' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Aftercare Plan
          </button>
          <button
            onClick={() => setActiveTab('journey')}
            style={{
              flex: 1,
              padding: '10px 4px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'journey' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'journey' ? '#942876' : '#6A5F75',
              fontWeight: 700,
              fontSize: '12.5px',
              cursor: 'pointer',
              boxShadow: activeTab === 'journey' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            CRM Journey
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '20px 20px 0' }}>
          {/* TAB 1: UPCOMING APPOINTMENT & DASHBOARD (Screen 10) */}
          {activeTab === 'upcoming' && (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#776D84', textTransform: 'uppercase', marginBottom: '8px' }}>
                Upcoming Consultation
              </div>

              {/* Appointment Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(148, 40, 118, 0.04) 0%, rgba(200, 80, 155, 0.06) 100%)',
                  border: '1.5px solid #EBE0EA',
                  borderRadius: '18px',
                  padding: '18px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#942876', background: 'rgba(148, 40, 118, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
                      CONFIRMED
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '8px 0 2px' }}>
                      Consultation with Dr. Sujay M
                    </h3>
                    <div style={{ fontSize: '13px', color: '#6A5F75' }}>
                      Acne Scar Revision & Skin Assessment
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #ECE3EC', paddingTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#2B1B4D', fontWeight: 600 }}>
                    <Calendar size={15} color="#942876" />
                    <span>Sat, 24 Oct 2026 at 10:00 AM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5C5268' }}>
                    <MapPin size={15} color="#942876" />
                    <span>South Bengaluru Clinic · Near Yelachenahalli Metro</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions (Screen 10) */}
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#776D84', textTransform: 'uppercase', marginBottom: '10px' }}>
                Quick Actions
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '24px' }}>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenBooking) onOpenBooking();
                  }}
                  style={{
                    background: '#FAF8FB',
                    border: '1px solid #EFE8F0',
                    borderRadius: '14px',
                    padding: '14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <Calendar size={22} color="#942876" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>Reschedule</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hi%20Medicare%20Skin,%20I%20would%20like%20to%20view%20my%20prescription%20for%20Patient%20ID%20MS-8492`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FAF8FB',
                    border: '1px solid #EFE8F0',
                    borderRadius: '14px',
                    padding: '14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}
                >
                  <FileText size={22} color="#942876" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>Prescription</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hi%20Medicare%20Skin,%20please%20send%20my%20treatment%20reports%20for%20Patient%20ID%20MS-8492`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FAF8FB',
                    border: '1px solid #EFE8F0',
                    borderRadius: '14px',
                    padding: '14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}
                >
                  <Download size={22} color="#942876" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>Reports</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Medicare%20Skin%20desk,%20I%20have%20a%20question%20regarding%20my%20treatment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#FAF8FB',
                    border: '1px solid #EFE8F0',
                    borderRadius: '14px',
                    padding: '14px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}
                >
                  <MessageCircle size={22} color="#942876" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>Chat with Clinic</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: AFTERCARE PLAN & WHATSAPP MOCKUP (Screen 11) */}
          {activeTab === 'aftercare' && (
            <div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '20px', fontWeight: 650, color: '#153F39', margin: '0 0 6px' }}>
                Your Aftercare Plan
              </h2>
              <p style={{ fontSize: '13px', color: '#6A5F75', margin: '0 0 16px', lineHeight: 1.45 }}>
                Follow these simple dermatologist-approved steps for the best results after your treatment.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '12px', background: '#FAF6FA', border: '1px solid #EBE0EA' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#942876', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>1</div>
                  <div style={{ fontSize: '13px', color: '#2B1B4D', lineHeight: 1.4 }}>
                    <strong>Keep treated area clean:</strong> Wash gently with lukewarm water and mild cleanser; avoid harsh scrubs.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '12px', background: '#FAF6FA', border: '1px solid #EBE0EA' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#942876', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>2</div>
                  <div style={{ fontSize: '13px', color: '#2B1B4D', lineHeight: 1.4 }}>
                    <strong>Prescribed soothing cream:</strong> Apply prescribed barrier restorative cream twice daily.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '12px', background: '#FAF6FA', border: '1px solid #EBE0EA' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#942876', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>3</div>
                  <div style={{ fontSize: '13px', color: '#2B1B4D', lineHeight: 1.4 }}>
                    <strong>Sun protection:</strong> Avoid direct harsh sun; apply broad-spectrum SPF 50+ every 3–4 hours outdoors.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', padding: '12px', borderRadius: '12px', background: '#FAF6FA', border: '1px solid #EBE0EA' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#942876', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>4</div>
                  <div style={{ fontSize: '13px', color: '#2B1B4D', lineHeight: 1.4 }}>
                    <strong>Follow-up session:</strong> Attend your scheduled check-in with Dr. Sujay M to assess healing.
                  </div>
                </div>
              </div>

              {/* Simulated WhatsApp Notification Toast (Screen 11) */}
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#776D84', textTransform: 'uppercase', marginBottom: '8px' }}>
                Automated Clinic Reminders
              </div>
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #25D366',
                  padding: '14px',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.12)',
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#2B1B4D' }}>WhatsApp · Medicare Skin</span>
                    <span style={{ fontSize: '10.5px', color: '#888' }}>Just now</span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#4A4A4A', margin: 0, lineHeight: 1.4 }}>
                    Hi Ananya! This is a friendly reminder of your follow-up appointment on <strong>Wed, 8 May at 10:00 AM</strong>. Reply <strong>YES</strong> to confirm your slot.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT CRM JOURNEY (Screen 12) */}
          {activeTab === 'journey' && (
            <div>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '20px', fontWeight: 650, color: '#153F39', margin: '0 0 6px' }}>
                Your Treatment Journey
              </h2>
              <p style={{ fontSize: '13px', color: '#6A5F75', margin: '0 0 16px', lineHeight: 1.45 }}>
                A complete transparent view of your skincare journey with Medicare Skin.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '8px', borderLeft: '2px solid #EBE0EA', marginLeft: '12px', marginBottom: '24px' }}>
                {/* 1. Enquiry */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#2E7D32', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#2B1B4D' }}>Enquiry Received</div>
                  <div style={{ fontSize: '11.5px', color: '#776D84' }}>18 Oct 2026 · Website consultation form</div>
                </div>

                {/* 2. Booked */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#2E7D32', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#2B1B4D' }}>Consultation Booked</div>
                  <div style={{ fontSize: '11.5px', color: '#776D84' }}>20 Oct 2026 · Slot confirmed for Sat 24 Oct</div>
                </div>

                {/* 3. Completed */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#2E7D32', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#2B1B4D' }}>Consultation Completed</div>
                  <div style={{ fontSize: '11.5px', color: '#776D84' }}>24 Oct 2026 · Detailed evaluation with Dr. Sujay M</div>
                </div>

                {/* 4. Started */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#942876', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#942876' }}>Treatment In Progress</div>
                  <div style={{ fontSize: '11.5px', color: '#776D84' }}>28 Oct 2026 · Acne Scar Subcision & MNRF Session 1</div>
                </div>

                {/* 5. Follow-up */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#D9D0DC', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#776D84' }}>Follow-up Review</div>
                  <div style={{ fontSize: '11.5px', color: '#999' }}>12 Nov 2026 · Progress check-in scheduled</div>
                </div>

                {/* 6. Ongoing Care */}
                <div style={{ position: 'relative', paddingLeft: '16px' }}>
                  <div style={{ position: 'absolute', left: '-23px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#D9D0DC', border: '3px solid #FFFFFF' }} />
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#776D84' }}>Ongoing Maintenance Care</div>
                  <div style={{ fontSize: '11.5px', color: '#999' }}>Tailored barrier repair skincare regimen</div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Close / Action */}
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '14px',
              background: '#FAF6FA',
              border: '1.5px solid #EBE0EA',
              color: '#2B1B4D',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
