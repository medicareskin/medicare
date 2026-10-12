import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, FileText, Lock, AlertCircle } from 'lucide-react';

export default function LegalPage({ type = 'privacy' }) {
  const titles = {
    privacy: 'Privacy Policy & Data Security',
    terms: 'Terms of Service & Usage Conditions',
    cancellation: 'Appointment Cancellation Policy',
    disclaimer: 'Medical Disclaimer & Outcome Statement'
  };

  return (
    <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', color: '#2B1B4D', marginBottom: '20px' }}>
          {titles[type] || 'Legal & Policy Information'}
        </h1>

        <div style={{ background: '#FDF9FB', padding: '36px', borderRadius: '20px', border: '1px solid #EBE0EA', fontSize: '15px', color: '#5C5268', lineHeight: '1.8' }}>
          {type === 'privacy' && (
            <>
              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>1. Patient Information Protection</h3>
              <p style={{ marginBottom: '16px' }}>
                At Medicare Skin & Cosmetic Clinic, we prioritize patient confidentiality. Any personal data collected via our website appointment form (including name, phone number, and skin concern details) is strictly used for medical triage and booking confirmation by Dr. Sujay M's staff.
              </p>

              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>2. Data Security & Storage</h3>
              <p style={{ marginBottom: '16px' }}>
                We do not sell, rent, or trade your contact information to any third-party marketing companies. Patient data is encrypted and securely handled in compliance with medical privacy guidelines.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>1. Website Terms of Use</h3>
              <p style={{ marginBottom: '16px' }}>
                By accessing medicareskin.in, you agree to comply with our terms. All content, images, and treatment descriptions are the intellectual property of Medicare Skin Clinic.
              </p>

              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>2. Medical Information Scope</h3>
              <p style={{ marginBottom: '16px' }}>
                Information on this website is for educational purposes and should not be substituted for direct medical diagnosis by a qualified physician.
              </p>
            </>
          )}

          {type === 'cancellation' && (
            <>
              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>Appointment Rescheduling & Cancellation</h3>
              <p style={{ marginBottom: '16px' }}>
                If you need to reschedule or cancel your consultation with Dr. Sujay M, please inform our reception desk at least 2 hours prior to your scheduled slot by calling <strong>+91 92428 55707</strong>.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <h3 style={{ color: '#2B1B4D', marginBottom: '12px' }}>Medical & Procedure Outcome Statement</h3>
              <p style={{ marginBottom: '16px' }}>
                Individual results for skin procedures, laser hair reduction, and hair growth factor therapy vary depending on skin tone, hair density, genetics, and adherence to post-treatment medical instructions.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
