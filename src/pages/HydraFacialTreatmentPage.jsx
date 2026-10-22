import React, { useState, useEffect } from 'react';
import { 
  Droplets, Sparkles, ShieldCheck, CheckCircle2, Clock, Calendar, 
  Phone, ArrowRight, HelpCircle, ChevronDown, ChevronUp, MapPin, 
  Award, Check, AlertCircle, RefreshCw, HeartPulse, UserCheck, Shield,
  Layers, Info, Sparkle, HeartHandshake
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import HydraFacialAppointmentFlow from '../components/HydraFacialAppointmentFlow';
import TreatmentComparisonSection from '../components/TreatmentComparisonSection';

export default function HydraFacialTreatmentPage({ onOpenBooking, onNavigatePage, onSelectTreatment }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [showAppointmentFlow, setShowAppointmentFlow] = useState(false);

  // Dynamic SEO Metadata & JSON-LD Injection for Google & AI Search (October 2026 standards)
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Hydrating Facial Treatment Bengaluru | Medicare Skin";

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about device-assisted hydrating facials, realistic outcomes, steps and precautions. Consult Dr. Sujay M near Yelachenahalli Metro in Bengaluru.'
      );
    }

    // Dynamic JSON-LD Structured Data with all 10 Medical FAQs & Clinic Details
    const scriptId = 'json-ld-hydrafacial';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": "https://www.medicareskin.com/hydrafacial-bangalore/#webpage",
          "url": "https://www.medicareskin.com/hydrafacial-bangalore/",
          "name": "HydraFacial Treatment in Bengaluru for Glowing, Hydrated & Brighter-Looking Skin | Medicare Skin",
          "description": "Explore HydraFacial for dull, dehydrated skin, clogged pores and improved radiance in Bengaluru. Visit Medicare Skin near Yelachenahalli Metro. Call 92428 55707.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.medicareskin.com/#website",
            "name": "Medicare Skin & Cosmetic Clinic",
            "url": "https://www.medicareskin.com/"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "HydraFacial Device-Assisted Facial Treatment",
            "procedureType": "NonSurgicalProcedure",
            "bodyLocation": "Face, Neck",
            "preparation": "Avoid harsh exfoliants, retinoids, or direct sunburn 48 hours prior",
            "followup": "Apply gentle moisturizer, broad-spectrum sunscreen SPF 50+, avoid immediate hot saunas"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.medicareskin.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Aesthetic Care",
              "item": "https://www.medicareskin.com/cosmetic-treatments"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "HydraFacial in Bangalore",
              "item": "https://www.medicareskin.com/hydrafacial-bangalore/"
            }
          ]
        },
        {
          "@type": "MedicalClinic",
          "@id": "https://www.medicareskin.com/#clinic",
          "name": "Medicare Skin & Cosmetic Clinic",
          "telephone": "+91-9242855707",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560078",
            "addressCountry": "IN"
          },
          "physician": {
            "@type": "Physician",
            "name": "Dr. (Mrs.) Sujay M",
            "jobTitle": "Consultant Dermatologist & Cosmetologist",
            "hasCredential": "MBBS, DDVL",
            "medicalSpecialty": "Dermatology"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does this facial brighten skin permanently?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. It may temporarily improve hydration and radiance but does not permanently alter natural skin colour."
              }
            },
            {
              "@type": "Question",
              "name": "Can it treat melasma?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is not a definitive treatment for melasma. Dermatological management may be needed."
              }
            },
            {
              "@type": "Question",
              "name": "Is there downtime?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many patients have little downtime, although temporary irritation or redness can occur."
              }
            },
            {
              "@type": "Question",
              "name": "Can I schedule it before an event?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If suitable, allow time for your individual skin response, especially if this is your first session."
              }
            },
            {
              "@type": "Question",
              "name": "Is it suitable for sensitive or acne-prone skin?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Suitability depends on active disease, product ingredients and examination; ask for individual assessment."
              }
            },
            {
              "@type": "Question",
              "name": "What is a hydrating device-assisted facial?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A procedure using a specialised handpiece and selected skincare solutions to cleanse the skin, exfoliate superficial dead cells and support surface hydration. A clinician adjusts the protocol to skin sensitivity and goals."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I enquire about hydrating facial treatment in South Bengaluru?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact Medicare Skin & Cosmetic Clinic, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru, to discuss treatment availability, suitability and appointments."
              }
            }
          ]
        }
      ]
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, []);

  const handleNav = (tabId) => {
    if (onNavigatePage) onNavigatePage(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allFaqs = [
    {
      q: "Does this facial brighten skin permanently?",
      a: "No. It may temporarily improve hydration and radiance but does not permanently alter natural skin colour."
    },
    {
      q: "Can it treat melasma?",
      a: "It is not a definitive treatment for melasma. Dermatological management may be needed."
    },
    {
      q: "Is there downtime?",
      a: "Many patients have little downtime, although temporary irritation or redness can occur."
    },
    {
      q: "Can I schedule it before an event?",
      a: "If suitable, allow time for your individual skin response, especially if this is your first session."
    },
    {
      q: "Is it suitable for sensitive or acne-prone skin?",
      a: "Suitability depends on active disease, product ingredients and examination; ask for individual assessment."
    },
    {
      q: "What is a hydrating device-assisted facial?",
      a: "A procedure using a specialised handpiece and selected skincare solutions to cleanse the skin, exfoliate superficial dead cells and support surface hydration. A clinician adjusts the protocol to skin sensitivity and goals."
    },
    {
      q: "How often should hydrating facials be done?",
      a: "There is no universal schedule. The frequency depends on skin response, goals, skincare routine and clinical advice."
    },
    {
      q: "Where can I enquire about hydrating facial care in South Bengaluru?",
      a: "Contact Medicare Skin & Cosmetic Clinic, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru, to discuss treatment availability, suitability and appointments."
    }
  ];

  return (
    <article className="hydrafacial-page" style={{ background: '#F8FAFC', minHeight: '100vh', paddingBottom: '90px', color: '#2B1B4D' }}>
      
      {/* ── BREADCRUMB NAVIGATION ───────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E2E8F0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6A5F75', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', color: '#2B73AF', fontWeight: 700, cursor: 'pointer', padding: 0 }}
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => handleNav('cosmetic')}
            style={{ background: 'none', border: 'none', color: '#6A5F75', fontWeight: 600, cursor: 'pointer', padding: 0 }}
          >
            Aesthetic Care
          </button>
          <span>/</span>
          <span style={{ color: '#2B1B4D', fontWeight: 700 }}>
            HydraFacial in Bengaluru
          </span>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section style={{ padding: '50px 0 60px', position: 'relative' }}>
        <div className="container">
          <div className="grid-responsive-split" style={{ alignItems: 'center' }}>
            
            {/* Left Column: Authentic Content Header & Calls to Action */}
            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(43, 115, 175, 0.1)',
                  color: '#2B73AF',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  Gentle Device-Assisted Facial
                </span>
                <span style={{
                  background: '#F0F6FA',
                  border: '1px solid #D2E4F2',
                  color: '#2B1B4D',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  Dr. Sujay M · MBBS, DDVL
                </span>
                <span style={{
                  background: '#FAF0F6',
                  border: '1px solid #EBD5E5',
                  color: '#942876',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  Yelachenahalli Metro · South Bengaluru
                </span>
              </div>

              {/* BRANDING GATE Notice from Master Build Spec Section 08 */}
              <div style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '20px',
                fontSize: '13px',
                color: '#92400E',
                lineHeight: '1.5'
              }}>
                <strong>BRANDING GATE:</strong> “Hydrafacial” is a protected brand. Use the name only if an authentic device and applicable marketing rights are verified. Otherwise title this page “Device-Assisted Hydrating Facial / Hydrodermabrasion”.
              </div>

              <h1 style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '38px',
                color: '#153F39',
                lineHeight: 1.22,
                margin: '0 0 16px',
                fontWeight: 800
              }}>
                Hydrating Facial Treatment for Fresher, Smoother-Looking Skin in Bengaluru
              </h1>

              <div style={{ fontSize: '16px', fontWeight: 700, color: '#C5A174', marginBottom: '16px', lineHeight: 1.55 }}>
                Looking for a refreshed, hydrated appearance? Device-assisted facial care combines cleansing, exfoliation, selected extraction and hydrating skincare. It may temporarily improve skin texture and radiance for suitable patients. It does not permanently lighten skin or replace medical treatment for melasma or inflammatory acne.
              </div>

              <p style={{ fontSize: '15.5px', color: '#253532', lineHeight: 1.75, marginBottom: '16px' }}>
                Pollution, sun exposure, stress, cosmetics and everyday environmental factors can affect how our skin looks and feels. You may notice rough texture, congested pores, dryness or a loss of your skin's natural radiance. Sometimes, even a regular skincare routine doesn't leave your skin feeling as fresh as you would like.
              </p>

              <p style={{ fontSize: '15.5px', color: '#253532', lineHeight: 1.75, marginBottom: '24px' }}>
                A hydrating device-assisted facial combines multiple steps to help address dullness, dehydration and superficial congestion. At <strong>Medicare Skin &amp; Cosmetic Clinic</strong>, near Yelachenahalli Metro Station, South Bengaluru, <strong>Dr. (Mrs.) Sujay M, MBBS, DDVL</strong>, guides personalised skin assessment and appropriate aesthetic treatment planning.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => setShowAppointmentFlow(true)}
                  style={{
                    background: 'linear-gradient(135deg, #2B73AF 0%, #1E5C91 100%)',
                    padding: '15px 32px',
                    borderRadius: '14px',
                    color: '#FFF',
                    fontSize: '15px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 24px rgba(43, 115, 175, 0.28)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Calendar size={18} /> Book a Skin Rejuvenation Consultation
                </button>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 26px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: '1.5px solid #D2E4F2',
                    color: '#2B1B4D',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(43, 27, 77, 0.04)'
                  }}
                >
                  <Phone size={16} color="#2B73AF" />
                  Call: +91 92428 55707
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Clinic Credentials */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(43, 115, 175, 0.14)',
                border: '4px solid #FFFFFF',
                aspectRatio: '4/3'
              }}>
                <img
                  src="/images/hydrafacial-skin-hydration-treatment-bangalore.webp"
                  alt="Woman receiving a device-assisted facial hydration treatment in Bengaluru"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Verified Doctor Certification Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '24px',
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid #FFFFFF',
                borderRadius: '16px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 12px 32px rgba(43, 27, 77, 0.12)'
              }}>
                <img
                  src="/images/dr_sujay_portrait.jpg"
                  alt="Dr. (Mrs.) Sujay M"
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2B73AF' }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B1B4D' }}>Dr. Sujay M</div>
                  <div style={{ fontSize: '11px', color: '#2B73AF', fontWeight: 700 }}>MBBS, DDVL · Consultant Dermatologist</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── APPOINTMENT FLOW DRAWER (Interactive) ───────────────────── */}
      {showAppointmentFlow && (
        <section style={{ padding: '20px 0 40px', background: 'transparent' }}>
          <div className="container">
            <HydraFacialAppointmentFlow
              onComplete={() => {
                setShowAppointmentFlow(false);
                alert('Thank you! Your appointment request has been initiated.');
              }}
              onCancel={() => setShowAppointmentFlow(false)}
            />
          </div>
        </section>
      )}

      {/* ── SECTION 1: WHAT IS HYDRAFACIAL? ─────────────────────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #E2E8F0',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(43, 115, 175, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#2B73AF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TREATMENT EXPLANATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 16px' }}>
              What Is a Hydrating Device-Assisted Facial?
            </h2>
            <div style={{ fontSize: '15.5px', color: '#253532', lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 14px' }}>
                A procedure using a specialised handpiece and selected skincare solutions to cleanse the skin, exfoliate superficial dead cells and support surface hydration. A clinician adjusts the protocol to skin sensitivity and goals.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                In simple words, it is designed to remove surface debris and dead skin cells, help clear clogged pores and leave the skin feeling refreshed and hydrated.
              </p>
              <div style={{
                background: '#F8F6F2',
                borderLeft: '4px solid #C5A174',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                marginTop: '18px',
                fontSize: '14.5px',
                color: '#153F39',
                lineHeight: 1.65
              }}>
                <strong>Clinical Perspective:</strong> It may temporarily improve skin texture and radiance for suitable patients. It does not permanently lighten skin or replace medical treatment for melasma or inflammatory acne.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHO MAY BENEFIT FROM HYDRATING FACIAL? ───────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#C5A174', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              PATIENT SUITABILITY
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              Who May Benefit?
            </h2>
            <p style={{ fontSize: '15.5px', color: '#253532', lineHeight: 1.65 }}>
              Some people with dullness, superficial pore congestion, rough surface texture or dehydration may be candidates. Active eczema, irritated skin, infected lesions or severe inflammatory acne may call for medical care instead.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {[
              { num: '1', title: 'Dull-Looking Skin', desc: 'When skin appears tired, lacklustre or less radiant than usual.' },
              { num: '2', title: 'Dehydrated Skin', desc: 'When the skin feels tight or dry and would benefit from a gentle hydration-focused approach.' },
              { num: '3', title: 'Rough Surface Texture', desc: 'When surface buildup contributes to a less smooth appearance.' },
              { num: '4', title: 'Superficial Pore Congestion', desc: 'When superficial pore debris and excess oil contribute to a congested appearance.' },
              { num: '5', title: 'Event Preparation (with Buffer)', desc: 'For people looking for a fresher appearance before a special occasion, provided the skin is suitable and test buffer is allowed.' },
              { num: '6', title: 'Skincare Maintenance', desc: 'For selected individuals who want professional cleansing and hydration as part of a wider dermatologist-guided routine.' }
            ].map(item => (
              <div key={item.num} style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1.5px solid #E2E8F0',
                padding: '24px 22px',
                boxShadow: '0 8px 24px rgba(21, 63, 57, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#F8F6F2', color: '#153F39', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                    {item.num}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#153F39', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: '#5C655D', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: '#FFF8E6',
            border: '1px solid #FFE29A',
            borderRadius: '14px',
            padding: '16px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <AlertCircle size={20} color="#B57A00" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '13.5px', color: '#684E00', lineHeight: 1.55 }}>
              <strong>Important Clinical Caveat:</strong> Not every patient needs a facial. Active skin disease, severe inflammatory acne, eczema or barrier sensitivity requires clinical medical evaluation.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: STEP-BY-STEP PROCEDURE WALKTHROUGH ───────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '28px',
            border: '1.5px solid #E2E8F0',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(21, 63, 57, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#C5A174', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              STEP-BY-STEP PROCESS
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 28px' }}>
              Procedure Walkthrough
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  step: 'Step 1: Skin Assessment',
                  desc: 'Review skincare products, allergies, sensitivity, active conditions and suitability of exfoliating ingredients.'
                },
                {
                  step: 'Step 2: Cleansing and Exfoliation',
                  desc: 'Remove surface oil and dead skin cells using an appropriate controlled technique.'
                },
                {
                  step: 'Step 3: Extraction and Hydration',
                  desc: 'Where indicated, use controlled suction and hydrating solutions. Some skin types require gentler or omitted steps.'
                },
                {
                  step: 'Step 4: Aftercare',
                  desc: 'Explain gentle skincare, moisturiser, sun protection and when to restart potentially irritating products.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#F8F6F2',
                  borderRadius: '16px',
                  border: '1px solid #EBE4D8',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#153F39',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '15px',
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#153F39', margin: '0 0 6px' }}>
                      {item.step}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#253532', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT BENEFITS ARE REALISTIC? ─────────────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #F8F6F2 0%, #FFFFFF 100%)',
            borderRadius: '26px',
            border: '1.5px solid #EBE4D8',
            padding: '40px'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#C5A174', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              EXPECTED OUTCOMES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              What Benefits Are Realistic?
            </h2>
            <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.7, marginBottom: '24px' }}>
              Some people notice smoother-feeling, more hydrated or fresher-looking skin. Results and duration vary. Do not claim permanent pore shrinkage, skin whitening, or that a facial cures medical skin disease.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              {[
                'Fresher, more hydrated-looking appearance.',
                'Temporary improvement in skin surface radiance.',
                'Smoother-feeling surface texture.',
                'Removal of superficial dead skin cells and surface oil.',
                'Reduction in superficial pore congestion.',
                'Comfortable, non-surgical treatment experience.',
                'Minimal downtime for most patients.',
                'Customisable settings tailored to individual skin sensitivity.'
              ].map((benefit, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#FFFFFF',
                  border: '1px solid #EBE4D8',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: '#153F39',
                  fontWeight: 600
                }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F8F6F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#153F39" strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '13px', color: '#5C655D', fontStyle: 'italic' }}>
              * Results differ from person to person, and improvements are temporary. Ongoing skincare maintenance and sun protection are essential.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLINICAL DEEP DIVES (BRIGHTNESS, DRY SKIN, ACNE, SENSITIVITY) ── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Card 1: Can HydraFacial Make Your Face Brighter? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #E2E8F0', padding: '32px', boxShadow: '0 8px 24px rgba(43, 115, 175, 0.04)' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '12px' }}>
                Can HydraFacial Make Your Face Brighter?
              </h3>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                HydraFacial may make skin appear brighter by improving hydration, gently removing dead skin cells and reducing superficial dullness.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                This is different from changing your natural skin colour. A healthy, hydrated skin surface often reflects light more evenly, making the face look smoother and more radiant.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: 0 }}>
                However, HydraFacial is not a permanent skin-whitening treatment, and it should not be presented as a cure for deep pigmentation or melasma. Patients with significant dark patches may benefit more from a dermatologist-led pigmentation treatment plan.
              </p>
            </div>

            {/* Card 2: Is HydraFacial Good for Dry Skin? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #E2E8F0', padding: '32px', boxShadow: '0 8px 24px rgba(43, 115, 175, 0.04)' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '12px' }}>
                Is HydraFacial Good for Dry Skin?
              </h3>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                Hydration-focused facial treatments may benefit some people with dry or dehydrated skin.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                However, dehydration and certain medical conditions—such as eczema or a damaged skin barrier—may require different treatment.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: 0 }}>
                If your face is extremely sensitive, inflamed or irritated, your dermatologist may advise repairing the skin barrier before considering any exfoliating facial.
              </p>
            </div>

            {/* Card 3: Can HydraFacial Help With Acne and Blackheads? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #E2E8F0', padding: '32px', boxShadow: '0 8px 24px rgba(43, 115, 175, 0.04)' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '12px' }}>
                Can HydraFacial Help With Acne and Blackheads?
              </h3>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                The cleansing and extraction steps may help reduce some superficial pore congestion.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: '0 0 10px' }}>
                However, active acne is a medical condition with several causes, including inflammation, blocked follicles and excess oil production. HydraFacial cannot replace medically indicated acne treatments.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, margin: 0 }}>
                Patients with severe inflammatory acne, painful cysts or active skin infection should undergo dermatological evaluation before considering a cosmetic facial.
              </p>
            </div>

            {/* Card 4: What Side Effects Are Possible? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #E2E8F0', padding: '32px', boxShadow: '0 8px 24px rgba(21, 63, 57, 0.04)' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '12px' }}>
                What Side Effects Are Possible?
              </h3>
              <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.75, margin: '0 0 14px' }}>
                Temporary redness, sensitivity, irritation or breakouts may occur. Chemical ingredients and suction intensity matter.
              </p>
              <ul style={{ margin: '0 0 16px 20px', padding: 0, fontSize: '14.5px', color: '#5C655D', lineHeight: 1.8 }}>
                <li>Temporary redness or mild skin sensitivity.</li>
                <li>Tightness or dryness following exfoliating solutions.</li>
                <li>Irritation from active exfoliating ingredients in sensitive skin.</li>
                <li>Breakouts or mild purging in congestion-prone individuals.</li>
                <li>Potential aggravation if active dermatitis or damaged skin barrier is present.</li>
              </ul>
              <div style={{ background: '#F8F6F2', borderRadius: '12px', padding: '16px', fontSize: '13.5px', color: '#253532', lineHeight: 1.6 }}>
                Patients should tell their clinician about allergies, active rashes, cold sores, recent facial procedures and medications or skincare products being used. The clinician will also review pregnancy-related considerations for any active ingredients or additional treatment steps.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: SESSION DETAILS, DOWNTIME & DURATION ─────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            
            <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #E2E8F0', padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F8F6F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Clock size={20} color="#153F39" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#153F39', margin: '0 0 10px' }}>
                How Long Does a Session Take?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C655D', lineHeight: 1.65, margin: 0 }}>
                A standard session is commonly around <strong>30–60 minutes</strong>, although timing depends on the device, selected protocol and any additional steps. The clinician will confirm the expected duration when your appointment is arranged.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #E2E8F0', padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F8F6F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <RefreshCw size={20} color="#153F39" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#153F39', margin: '0 0 10px' }}>
                Is There Any Downtime?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C655D', lineHeight: 1.65, margin: 0 }}>
                Many people can resume normal daily activities soon after the procedure. However, some patients experience temporary redness, irritation or increased skin sensitivity. Follow the treatment-specific aftercare instructions provided by your clinician. If you are planning a facial before an event, allow some time for your skin's individual response—particularly if it is your first session.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #E2E8F0', padding: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F8F6F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Sparkles size={20} color="#153F39" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#153F39', margin: '0 0 10px' }}>
                How Long Does the Glow Last?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C655D', lineHeight: 1.65, margin: 0 }}>
                The duration of visible improvement varies. Skin hydration and surface radiance may improve shortly after treatment, but the effect diminishes over time depending on skin type, climate, skincare habits and sun exposure. Follow-up sessions should be based on your skin needs rather than a promise of permanent results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: HYDRATING FACIAL VS REGULAR FACIAL ───────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #E2E8F0',
            padding: '36px 40px',
            boxShadow: '0 12px 32px rgba(21, 63, 57, 0.04)'
          }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '0 0 14px' }}>
              Device-Assisted Facial vs Regular Facial
            </h2>
            <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.75, margin: '0 0 14px' }}>
              A regular facial may involve manual cleansing, massage, exfoliation, masks and skincare products.
            </p>
            <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.75, margin: '0 0 14px' }}>
              A device-assisted facial uses a specialised system combining controlled exfoliation, extraction and hydrating solution delivery.
            </p>
            <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.75, margin: '0 0 16px' }}>
              The most suitable choice depends on your skin type, sensitivity, budget and clinical diagnosis.
            </p>
            <div style={{
              background: '#F8F6F2',
              borderLeft: '4px solid #C5A174',
              padding: '14px 18px',
              borderRadius: '0 10px 10px 0',
              fontSize: '14px',
              color: '#153F39',
              lineHeight: 1.6
            }}>
              If you have melasma, inflammatory acne, persistent pigmentation or another diagnosed skin condition, a dermatologist may recommend a medical treatment plan instead of—or alongside—a cosmetic facial.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: HOW MUCH DOES IT COST? ────────────────────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #F8F6F2 0%, #FFFFFF 100%)',
            borderRadius: '26px',
            border: '1.5px solid #EBE4D8',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#C5A174', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PRICING &amp; TRANSPARENCY
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '4px 0 10px' }}>
                How Much Does It Cost?
              </h2>
              <p style={{ fontSize: '15px', color: '#253532', lineHeight: 1.7, margin: 0 }}>
                Publish only clinic-approved actual service prices and inclusions. Explain optional boosters and consultation charges transparently. Pricing depends on the procedure protocol, equipment, treatment duration, and whether additional boosters or extractions are indicated. An individual assessment with Dr. (Mrs.) Sujay M ensures transparent fee discussion before proceeding.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: '#153F39',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(21, 63, 57, 0.25)'
                }}
              >
                <Phone size={16} /> Contact Medicare Skin: +91 92428 55707
              </a>
              <span style={{ fontSize: '12px', color: '#5C655D', textAlign: 'center' }}>
                Direct consultation with Dr. Sujay M's team
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 9: WHY CHOOSE MEDICARE SKIN & COSMETIC CLINIC? ──── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#2B73AF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CLINIC ADVANTAGES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              Why Choose Medicare Skin &amp; Cosmetic Clinic?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #E2E8F0', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F0F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <ShieldCheck size={20} color="#2B73AF" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Dermatologist-Guided Care
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Treatment selection informed by professional skin assessment by Dr. Sujay M (MBBS, DDVL).
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #E2E8F0', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F0F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Sparkles size={20} color="#2B73AF" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Personalised Recommendations
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                A skincare plan that considers your specific concerns, skin type and individual sensitivities.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #E2E8F0', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F0F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <HeartHandshake size={20} color="#2B73AF" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Patient-Focused Treatment
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Discussion of realistic benefits and limitations instead of exaggerated, unverifiable promises.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #E2E8F0', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F0F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <MapPin size={20} color="#2B73AF" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Convenient South Bengaluru Location
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Near Yelachenahalli Metro Station, Kanakapura Road, easily accessible from JP Nagar, Jayanagar, Banashankari and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED SIDE-BY-SIDE TREATMENT COMPARISON SECTION ─────── */}
      <TreatmentComparisonSection
        onOpenBooking={onOpenBooking}
        onNavigatePage={onNavigatePage}
        onSelectTreatment={onSelectTreatment}
      />

      {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS (All 10 FAQs) ─────── */}
      <section style={{ padding: '50px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#2B73AF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              PATIENT FAQS
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '34px', color: '#153F39', margin: '6px 0 12px' }}>
              Frequently Asked Questions About HydraFacial
            </h2>
            <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.6 }}>
              Direct answers to common patient questions regarding results, recovery, and preparation.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {allFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: openFaq === idx ? '1.5px solid #2B73AF' : '1.5px solid #E2E8F0',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: openFaq === idx ? '0 8px 24px rgba(43, 115, 175, 0.08)' : 'none'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#2B1B4D',
                    fontSize: '15.5px',
                    fontWeight: 700
                  }}
                  aria-expanded={openFaq === idx}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={18} color="#2B73AF" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp size={18} color="#2B73AF" /> : <ChevronDown size={18} color="#6A5F75" />}
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 20px 52px', fontSize: '14.5px', color: '#5C5268', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTUAL INTERNAL LINKS ───────────────────────────────── */}
      <section style={{ padding: '40px 0 50px', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            padding: '36px',
            boxShadow: '0 12px 32px rgba(43, 115, 175, 0.04)'
          }}>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '16px' }}>
              Explore Complementary Treatments at Medicare Skin
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <button
                onClick={() => handleNav('q-switched-laser')}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B73AF', marginBottom: '4px' }}>
                  Q-Switched Laser Toning →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Target deep melasma and stubborn dark spots with Nd:YAG laser pulses.
                </div>
              </button>

              <button
                onClick={() => handleNav('cosmetic')}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B73AF', marginBottom: '4px' }}>
                  Chemical Peels &amp; Medi-Facials →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Dermatologist-formulated lactic, glycolic, and salicylic acid peels.
                </div>
              </button>

              <button
                onClick={() => handleNav('skin')}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B73AF', marginBottom: '4px' }}>
                  Acne &amp; Pores Care →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Medical protocols for active pimples, blackheads, and acne scarring.
                </div>
              </button>

              <button
                onClick={() => handleNav('contact')}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B73AF', marginBottom: '4px' }}>
                  Clinic Contact &amp; Metro Directions →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Steps away from Yelachenahalli Metro Station, Kanakapura Main Road.
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA: WANT FRESHER, SMOOTHER & MORE HYDRATED-LOOKING SKIN? ── */}
      <section style={{ padding: '20px 0 60px', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #1B354D 0%, #205072 100%)',
            borderRadius: '26px',
            padding: '48px 40px',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(27, 53, 77, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '36px', margin: '0 0 14px' }}>
              Want Fresher, Smoother &amp; More Hydrated-Looking Skin?
            </h2>
            <p style={{ fontSize: '16.5px', color: '#D2E3F0', maxWidth: '680px', margin: '0 auto 16px', lineHeight: 1.65 }}>
              Give your skin the care it needs—not unrealistic promises.
            </p>
            <p style={{ fontSize: '15px', color: '#D2E3F0', maxWidth: '680px', margin: '0 auto 28px', lineHeight: 1.65 }}>
              A professional assessment can help you understand your skin type and decide whether a hydration-focused facial or another dermatology treatment is right for you.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button
                onClick={() => setShowAppointmentFlow(true)}
                style={{
                  background: 'linear-gradient(135deg, #8ED0FF 0%, #FFFFFF 100%)',
                  color: '#1B354D',
                  padding: '14px 34px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              >
                Book Your Skin Rejuvenation Consultation →
              </button>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={16} />
                Call: +91 92428 55707
              </a>
            </div>

            <div style={{ fontSize: '13.5px', color: '#B6D1E6', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <div>Website: <strong style={{ color: '#FFFFFF' }}>www.medicareskin.com</strong></div>
              <div>Location: <strong>Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru – 560078.</strong></div>
              <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.85, fontStyle: 'italic' }}>
                Medical disclaimer: Information is for patient education. Individual suitability and outcomes vary. A professional skin assessment is recommended before treatment.
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
