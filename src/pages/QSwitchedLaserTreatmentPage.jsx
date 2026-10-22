import React, { useState, useEffect } from 'react';
import { 
  Zap, ShieldCheck, CheckCircle2, AlertCircle, Clock, Calendar, 
  Phone, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Sparkles, 
  MapPin, Award, Check, Layers, UserCheck, HeartPulse, Sun, Droplets,
  ShieldAlert, RefreshCw, HeartHandshake
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import TreatmentComparisonSection from '../components/TreatmentComparisonSection';

export default function QSwitchedLaserTreatmentPage({ onOpenBooking, onNavigatePage, onSelectTreatment }) {
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic SEO Metadata & JSON-LD Injection for Google & AI Search (October 2026 standards)
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Q-Switched Laser Treatment for Melasma & Pigmentation in Bengaluru | Medicare Skin";

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore Q-switched laser treatment for melasma, dark spots, sun damage and pigmentation in Bengaluru. Consult Dr. Sujay M, MBBS, DDVL at Medicare Skin, near Yelachenahalli Metro. Call 92428 55707.'
      );
    }

    // Dynamic JSON-LD Structured Data for MedicalProcedure, Clinic & all 8 FAQs
    const scriptId = 'json-ld-qswitched-laser';
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
          "@id": "https://www.medicareskin.com/q-switched-laser-melasma-pigmentation-bangalore/#webpage",
          "url": "https://www.medicareskin.com/q-switched-laser-melasma-pigmentation-bangalore/",
          "name": "Q-Switched Laser Treatment for Melasma & Pigmentation in Bengaluru | Medicare Skin",
          "description": "Explore Q-switched laser treatment for melasma, dark spots and pigmentation in Bengaluru. Consult Dr. Sujay M at Medicare Skin, near Yelachenahalli Metro.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.medicareskin.com/#website",
            "name": "Medicare Skin & Cosmetic Clinic",
            "url": "https://www.medicareskin.com/"
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Q-Switched Nd:YAG Laser Treatment for Melasma and Pigmentation",
            "procedureType": "NonSurgicalProcedure",
            "bodyLocation": "Face, Cheeks, Forehead, Upper Lip, Neck, Hands",
            "preparation": "Avoid unshielded sun exposure, discontinue harsh exfoliants, retinoids or bleaching agents 48 hours prior",
            "followup": "Strict daily broad-spectrum SPF 30+ or tinted iron-oxide sunscreen, barrier repair moisturizer, avoid heat and friction"
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
              "name": "Laser Treatments",
              "item": "https://www.medicareskin.com/laser-treatments"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Q-Switched Laser in Bengaluru",
              "item": "https://www.medicareskin.com/q-switched-laser-melasma-pigmentation-bangalore/"
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
            "name": "Dr. Sujay M",
            "jobTitle": "Consultant Dermatologist & Aesthetician",
            "hasCredential": "MBBS, DDVL",
            "medicalSpecialty": "Dermatology"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Q-switched laser effective for melasma?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It may improve melasma in selected patients, particularly as an addition to appropriate medical treatment. Results vary, recurrence is common and laser therapy is not suitable for everyone."
              }
            },
            {
              "@type": "Question",
              "name": "Can Q-switched laser permanently remove pigmentation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some localized pigmented lesions may show substantial improvement, but permanent removal cannot be promised. Melasma is especially prone to recurrence."
              }
            },
            {
              "@type": "Question",
              "name": "Is Q-switched laser painful?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some patients describe mild snapping, warmth or tingling during treatment. The level of discomfort depends on the device, settings and treatment area."
              }
            },
            {
              "@type": "Question",
              "name": "How much downtime is needed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some low-energy protocols have limited downtime, but temporary redness or irritation can occur. Recovery varies according to the procedure and your skin's response."
              }
            },
            {
              "@type": "Question",
              "name": "Is Q-switched laser suitable for darker Indian skin tones?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It may be used in appropriately selected patients, but risks of post-inflammatory hyperpigmentation and hypopigmentation must be considered carefully. Dermatologist assessment is essential."
              }
            },
            {
              "@type": "Question",
              "name": "Can melasma become worse after laser treatment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Inappropriate laser settings, cumulative exposure, inflammation and inadequate sun protection can sometimes make pigmentation worse."
              }
            },
            {
              "@type": "Question",
              "name": "Are chemical peels or creams better than laser for melasma?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Medical skincare and sun protection are frequently the foundation of melasma management. A dermatologist may consider chemical peels or laser procedures for selected cases, depending on benefits and risks."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I consult a dermatologist for melasma in South Bengaluru?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can consult Dr. Sujay M at Medicare Skin & Cosmetic Clinic, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru."
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

  const handleBook = () => {
    if (onOpenBooking) onOpenBooking('pigmentation');
  };

  const handleNav = (tabId) => {
    if (onNavigatePage) onNavigatePage(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allFaqs = [
    {
      q: "1. Is Q-switched laser effective for melasma?",
      a: "It may improve melasma in selected patients, particularly as an addition to appropriate medical treatment. Results vary, recurrence is common and laser therapy is not suitable for everyone."
    },
    {
      q: "2. Can Q-switched laser permanently remove pigmentation?",
      a: "Some localized pigmented lesions may show substantial improvement, but permanent removal cannot be promised. Melasma is especially prone to recurrence."
    },
    {
      q: "3. Is Q-switched laser painful?",
      a: "Some patients describe mild snapping, warmth or tingling during treatment. The level of discomfort depends on the device, settings and treatment area."
    },
    {
      q: "4. How much downtime is needed?",
      a: "Some low-energy protocols have limited downtime, but temporary redness or irritation can occur. Recovery varies according to the procedure and your skin's response."
    },
    {
      q: "5. Is Q-switched laser suitable for darker Indian skin tones?",
      a: "It may be used in appropriately selected patients, but risks of post-inflammatory hyperpigmentation and hypopigmentation must be considered carefully. Dermatologist assessment is essential."
    },
    {
      q: "6. Can melasma become worse after laser treatment?",
      a: "Yes. Inappropriate laser settings, cumulative exposure, inflammation and inadequate sun protection can sometimes make pigmentation worse."
    },
    {
      q: "7. Are chemical peels or creams better than laser for melasma?",
      a: "Medical skincare and sun protection are frequently the foundation of melasma management. A dermatologist may consider chemical peels or laser procedures for selected cases, depending on benefits and risks."
    },
    {
      q: "8. Where can I consult a dermatologist for melasma in South Bengaluru?",
      a: "You can consult Dr. Sujay M at Medicare Skin & Cosmetic Clinic, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru."
    }
  ];

  return (
    <article className="q-switched-laser-page" style={{ background: '#FAF7FA', minHeight: '100vh', paddingBottom: '90px', color: '#2B1B4D' }}>
      
      {/* ── BREADCRUMB NAVIGATION ───────────────────────────────────── */}
      <nav aria-label="Breadcrumb" style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #ECE3EC', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6A5F75', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', color: '#942876', fontWeight: 700, cursor: 'pointer', padding: 0 }}
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => handleNav('laser')}
            style={{ background: 'none', border: 'none', color: '#6A5F75', fontWeight: 600, cursor: 'pointer', padding: 0 }}
          >
            Laser Treatments
          </button>
          <span>/</span>
          <span style={{ color: '#2B1B4D', fontWeight: 700 }}>
            Q-Switched Laser in Bengaluru
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
                  background: 'rgba(148, 40, 118, 0.1)',
                  color: '#942876',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  Dermatologist-Led Laser Care
                </span>
                <span style={{
                  background: '#FAF0F6',
                  border: '1px solid #EBD5E5',
                  color: '#2B1B4D',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  Dr. Sujay M · MBBS, DDVL
                </span>
                <span style={{
                  background: '#F0F6FA',
                  border: '1px solid #D6E8F5',
                  color: '#20639B',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700
                }}>
                  Yelachenahalli Metro · South Bengaluru
                </span>
              </div>

              {/* Conditional Service Gate Notice from Master Build Spec Section 07 */}
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
                <strong>PUBLICATION STATUS: Conditional.</strong> Confirm the exact Q-switched laser machine, trained operator, current service offering, procedure policy and consent before advertising treatment availability. This content provides clinical education, not a guaranteed bookable procedure.
              </div>

              <h1 style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '38px',
                color: '#153F39',
                lineHeight: 1.24,
                margin: '0 0 16px',
                fontWeight: 700
              }}>
                Q-Switched Laser for Pigmentation and Melasma — What Patients Should Know
              </h1>

              <div style={{ fontSize: '16px', fontWeight: 700, color: '#C5A174', marginBottom: '16px', lineHeight: 1.55 }}>
                Dark patches or uneven skin tone can have different causes. Q-switched lasers may be used for selected pigment conditions following a dermatologist assessment. Melasma often requires ongoing medical skincare and sun protection; laser is not automatically the first choice, and recurrence is possible.
              </div>

              <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.75, marginBottom: '14px' }}>
                Are you noticing dark patches on your cheeks, forehead or upper lip? Facial pigmentation is a common concern among Indian women and men. Melasma, sun spots, freckles, post-inflammatory pigmentation and uneven tone can look similar, but a dermatologist must distinguish them and check any changing or suspicious lesion before cosmetic treatment.
              </p>

              <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.75, marginBottom: '24px' }}>
                At <strong>Medicare Skin &amp; Cosmetic Clinic</strong> near Yelachenahalli Metro Station in South Bengaluru, <strong>Dr. (Mrs.) Sujay M, MBBS, DDVL</strong>, provides diagnosis-first consultations to assess whether laser therapy or foundational medical skincare is appropriate for your skin.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={handleBook}
                  style={{
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    padding: '15px 32px',
                    borderRadius: '14px',
                    color: '#FFF',
                    fontSize: '15px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 24px rgba(148, 40, 118, 0.28)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Calendar size={18} /> Book a Dermatologist Consultation
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
                    border: '1.5px solid #EBE0EA',
                    color: '#2B1B4D',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(43, 27, 77, 0.04)'
                  }}
                >
                  <Phone size={16} color="#942876" />
                  Call: +91 92428 55707
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Clinic Credentials */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(43, 27, 77, 0.14)',
                border: '4px solid #FFFFFF',
                aspectRatio: '4/3'
              }}>
                <img
                  src="/images/q-switched-laser-pigmentation-treatment-bangalore.webp"
                  alt="Dermatologist consultation and Q-switched laser pigmentation treatment in Bengaluru"
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
                  alt="Dr. Sujay M"
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #942876' }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B1B4D' }}>Dr. Sujay M</div>
                  <div style={{ fontSize: '11px', color: '#942876', fontWeight: 700 }}>MBBS, DDVL · Consultant Dermatologist</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 1: WHAT IS Q-SWITCHED LASER TREATMENT? ──────────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #EBE0EA',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              TREATMENT EXPLANATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 16px' }}>
              What Is Q-Switched Laser Treatment?
            </h2>
            <div style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 14px' }}>
                Q-switched laser is a technology that delivers very short pulses of concentrated light energy. Certain Q-switched lasers, including Nd systems, are used in dermatology to target pigment within the skin.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                In simple terms, the laser delivers controlled pulses of energy to pigment-containing structures. Depending on the type and depth of pigmentation, this may help reduce the appearance of selected dark spots and patches.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                However, not every type of pigmentation responds equally well to laser treatment. Melasma is particularly complex, and lasers are generally considered an additional treatment option for selected patients rather than an automatic first treatment.
              </p>
              <div style={{
                background: '#FAF0F6',
                borderLeft: '4px solid #942876',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                marginTop: '18px',
                fontSize: '14.5px',
                color: '#6E1C57',
                lineHeight: 1.65
              }}>
                <strong>Clinical Principle:</strong> A dermatologist must assess your skin before deciding whether Q-switched laser treatment is suitable.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT CAUSES DARK SPOTS AND FACIAL PIGMENTATION? ─ */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              UNDERSTANDING PIGMENTATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              What Causes Dark Spots and Facial Pigmentation?
            </h2>
            <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.65 }}>
              Skin gets its natural colour from a pigment called melanin. When melanin production increases in certain areas, darker patches or spots may appear. Common causes include:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {[
              {
                num: '1',
                title: 'Melasma',
                desc: 'Melasma often appears as brown or grey-brown patches on the cheeks, forehead, nose or upper lip. Sun exposure, visible light, hormones and genetic susceptibility may contribute. Melasma can be persistent and may recur after treatment.'
              },
              {
                num: '2',
                title: 'Sun Spots and Sun-Related Pigmentation',
                desc: 'Repeated exposure to sunlight can lead to localized dark spots, particularly on exposed areas of the face.'
              },
              {
                num: '3',
                title: 'Post-Acne Pigmentation',
                desc: 'After pimples or inflammation settle, flat brown or dark marks can remain. These are different from depressed acne scars and may require a different approach.'
              },
              {
                num: '4',
                title: 'Freckles and Other Pigmented Spots',
                desc: 'Some small, localized pigmented lesions may respond to specific laser techniques, but accurate diagnosis is important before any laser procedure.'
              },
              {
                num: '5',
                title: 'Uneven Skin Tone',
                desc: 'Patchy skin colour may result from sun exposure, inflammation, irritation, medication-related changes or other dermatological conditions.'
              }
            ].map(item => (
              <div key={item.num} style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1.5px solid #EBE0EA',
                padding: '24px 22px',
                boxShadow: '0 8px 24px rgba(43, 27, 77, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#FAF0F6', color: '#942876', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                    {item.num}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
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
              <strong>Important Medical Safety Note:</strong> A changing, bleeding, irregular or otherwise suspicious pigmented spot should be medically assessed before any cosmetic pigmentation treatment.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAN Q-SWITCHED LASER HELP TREAT MELASMA? ─────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #EBE0EA',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CLINICAL EVIDENCE &amp; EVALUATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 16px' }}>
              Can Q-Switched Laser Help Treat Melasma?
            </h2>
            <div style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.8 }}>
              <p style={{ margin: '0 0 14px' }}>
                Q-switched Nd laser, particularly in carefully selected low-energy settings, has been studied as an additional option for melasma management.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                Some patients experience improvement in pigmentation. However, the response varies, and results may not be permanent.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                Melasma can worsen or return following sun exposure, hormonal changes or skin irritation. Repeated or unsuitable laser treatments may also cause rebound darkening or lighter patches.
              </p>
              <p style={{ margin: '0 0 16px' }}>
                For many patients, the foundation of melasma care remains daily sun protection, appropriate dermatologist-prescribed topical treatment and long-term maintenance.
              </p>
              <div style={{
                background: '#FAF0F6',
                borderLeft: '4px solid #942876',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                fontSize: '14.5px',
                color: '#6E1C57',
                lineHeight: 1.65
              }}>
                <strong>Medicare Skin Philosophy:</strong> At Medicare Skin, the choice of treatment should be guided by the type of pigmentation and individual skin assessment—not simply the availability of a laser.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT HAPPENS DURING CONSULTATION AND TREATMENT? ─ */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '28px',
            border: '1.5px solid #EBE0EA',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              PATIENT JOURNEY
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 28px' }}>
              What Happens During a Q-Switched Laser Consultation and Treatment?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  step: 'Step 1: Dermatologist Consultation and Pigmentation Assessment',
                  desc: 'Your dermatologist examines the distribution and appearance of pigmentation, reviews your medical history and skincare routine, and considers whether your condition is suitable for laser treatment. You may be advised to begin with topical treatment and sun protection rather than undergo an immediate procedure.'
                },
                {
                  step: 'Step 2: Personalised Treatment Planning',
                  desc: 'If a laser procedure is appropriate, your dermatologist discusses the expected benefits, limitations, possible risks, number of sessions and aftercare. Laser settings and protocols depend on the device, diagnosis and skin characteristics.'
                },
                {
                  step: 'Step 3: Laser Treatment Session',
                  desc: 'The skin is prepared and appropriate protective eyewear is used. The clinician applies controlled laser pulses to the selected treatment area. You may notice a snapping, tingling or warm sensation. Treatment time varies according to the area and protocol.'
                },
                {
                  step: 'Step 4: Post-Treatment Skincare',
                  desc: 'After treatment, some patients develop temporary redness, sensitivity or mild swelling. Your dermatologist advises you about gentle cleansing, moisturising, sun protection and when to restart any active skincare products.'
                },
                {
                  step: 'Step 5: Follow-Up and Maintenance',
                  desc: 'Your skin response is reviewed over time. Additional sessions, topical medication or maintenance treatment may be considered when appropriate.'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#FBF9FC',
                  borderRadius: '16px',
                  border: '1px solid #ECE0EB',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#942876',
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
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 6px' }}>
                      {item.step}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: POTENTIAL BENEFITS OF Q-SWITCHED LASER ───────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FAF4F9 0%, #FFFFFF 100%)',
            borderRadius: '26px',
            border: '1.5px solid #EBD5E5',
            padding: '40px'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              EXPECTED OUTCOMES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              What Are the Potential Benefits of Q-Switched Laser?
            </h2>
            <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.7, marginBottom: '24px' }}>
              For appropriately selected pigmentation concerns, Q-switched laser treatment may offer:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              {[
                'Improvement in the appearance of certain pigmented spots.',
                'More even-looking skin tone in some patients.',
                'Targeted treatment of localized pigmentation.',
                'Relatively short procedure times.',
                'Limited recovery time with some protocols.',
                'The possibility of combining treatment with appropriate topical skincare.'
              ].map((benefit, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#FFFFFF',
                  border: '1px solid #ECE0EB',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: '#2B1B4D',
                  fontWeight: 600
                }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#942876" strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '13px', color: '#7E7288', fontStyle: 'italic' }}>
              * These are potential benefits, not guaranteed outcomes. Results depend on the diagnosis, skin tone, laser settings, treatment response and adherence to aftercare.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: IS Q-SWITCHED LASER SAFE FOR INDIAN SKIN? ────── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '26px',
            border: '1.5px solid #EBE0EA',
            padding: '40px',
            boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              SAFETY &amp; SKIN TYPES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 14px' }}>
              Is Q-Switched Laser Safe for Indian Skin?
            </h2>
            <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.75, marginBottom: '16px' }}>
              Indian skin tones may be more susceptible to pigmentation changes following inflammation or inappropriate laser exposure. Potential complications include:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              {[
                { title: 'Temporary Discomfort', desc: 'Temporary redness, swelling or discomfort.' },
                { title: 'Post-Inflammatory Hyperpigmentation', desc: 'Where treated skin becomes darker (PIH).' },
                { title: 'Hypopigmentation', desc: 'Where lighter patches develop, occasionally persisting.' },
                { title: 'Skin Irritation or Injury', desc: 'Irritation, blistering or other skin injury.' },
                { title: 'Melasma Recurrence', desc: 'Recurrence or worsening of melasma despite initial improvement.' }
              ].map((comp, idx) => (
                <div key={idx} style={{
                  background: '#FDF7FB',
                  border: '1px solid #F2DFEE',
                  borderRadius: '14px',
                  padding: '16px 18px'
                }}>
                  <div style={{ fontWeight: 800, color: '#942876', fontSize: '14px', marginBottom: '4px' }}>
                    {comp.title}
                  </div>
                  <div style={{ fontSize: '13px', color: '#5C5268', lineHeight: 1.55 }}>
                    {comp.desc}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.7, marginBottom: '14px' }}>
              Your dermatologist will assess these risks and explain whether a different treatment may be safer or more appropriate.
            </p>

            <div style={{
              background: '#F9F7FA',
              borderLeft: '4px solid #6A5F75',
              padding: '14px 18px',
              borderRadius: '0 10px 10px 0',
              fontSize: '13.5px',
              color: '#4E4158',
              lineHeight: 1.6
            }}>
              Patients with active skin infections, significant inflammation, recent tanning or certain medical conditions may need treatment postponed or modified. Pregnancy and the medicines or skincare products you use should also be discussed before proceeding.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SESSIONS, RECURRENCE & SUNSCREEN (3 Essential Deep Dives) ── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            
            {/* Card 1: How Many Laser Sessions Are Needed for Pigmentation? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #EBE0EA', padding: '28px', boxShadow: '0 8px 24px rgba(43, 27, 77, 0.04)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Clock size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 10px' }}>
                How Many Laser Sessions Are Needed for Pigmentation?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                There is no single session count suitable for everyone.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                The number of treatments depends on the diagnosis, depth and distribution of pigment, individual response, treatment protocol and tolerance.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: 0 }}>
                Some localized pigment lesions may respond differently from widespread melasma. Laser toning for melasma often involves multiple visits, and benefits can diminish over time. Your dermatologist will explain a realistic treatment schedule after examining your skin.
              </p>
            </div>

            {/* Card 2: Will Pigmentation Return After Laser Treatment? */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #EBE0EA', padding: '28px', boxShadow: '0 8px 24px rgba(43, 27, 77, 0.04)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <RefreshCw size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 10px' }}>
                Will Pigmentation Return After Laser Treatment?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                Yes, pigmentation can return, especially with melasma.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                Sun exposure, visible light, hormonal changes and inflammation can contribute to recurrence.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: 0 }}>
                Long-term management often involves regular sunscreen use, suitable skincare and follow-up visits. The goal is to improve and control the condition while reducing the risk of recurrence—not to promise permanent removal.
              </p>
            </div>

            {/* Card 3: Why Sunscreen Is Essential for Melasma Treatment */}
            <div style={{ background: '#FFFFFF', borderRadius: '22px', border: '1.5px solid #EBE0EA', padding: '28px', boxShadow: '0 8px 24px rgba(43, 27, 77, 0.04)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Sun size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 10px' }}>
                Why Sunscreen Is Essential for Melasma Treatment
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                Daily sun protection is one of the most important parts of pigmentation management, even if you undergo laser treatment.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: '0 0 10px' }}>
                A broad-spectrum, water-resistant sunscreen with SPF 30 or higher is generally recommended. For melasma, tinted sunscreen containing iron oxides can provide added protection against visible light, which may worsen pigmentation in darker skin tones.
              </p>
              <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.65, margin: 0 }}>
                Sunscreen should be reapplied as directed when outdoors. Shade, protective clothing and gentle skincare also matter. Without consistent photoprotection, pigmentation may persist or return despite treatment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 8: Q-SWITCHED LASER TREATMENT COST IN BENGALURU ─── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FAF4F9 0%, #FFFFFF 100%)',
            borderRadius: '26px',
            border: '1.5px solid #EBD5E5',
            padding: '36px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                PRICING &amp; TRANSPARENCY
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', color: '#153F39', margin: '4px 0 10px' }}>
                Q-Switched Laser Treatment Cost in Bengaluru
              </h2>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.7, margin: '0 0 8px' }}>
                The cost of laser treatment depends on several factors, including the type of pigmentation, treatment area, equipment and protocol used, number of sessions and whether additional medical treatment is required.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
                A personalised estimate can be provided after dermatological evaluation and confirmation of the appropriate treatment plan.
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
                  background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(148, 40, 118, 0.25)'
                }}
              >
                <Phone size={16} /> Contact Medicare Skin: +91 92428 55707
              </a>
              <span style={{ fontSize: '12px', color: '#7E7288', textAlign: 'center' }}>
                Consultation and current treatment pricing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHY CHOOSE MEDICARE SKIN & COSMETIC CLINIC? ──── */}
      <section style={{ padding: '40px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CLINIC ADVANTAGES
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
              Why Choose Medicare Skin &amp; Cosmetic Clinic?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #EBE0EA', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <ShieldCheck size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Dermatologist-Led Care
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Consultation and treatment planning guided by Dr. Sujay M, MBBS, DDVL.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #EBE0EA', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Sparkles size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Personalised Skin Assessment
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Identification of the pigmentation concern before selecting a treatment.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #EBE0EA', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <HeartHandshake size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Responsible Treatment Planning
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Discussion of benefits, limitations, aftercare and possible side effects.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '18px', border: '1.5px solid #EBE0EA', padding: '24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <MapPin size={20} color="#942876" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                Convenient South Bengaluru Location
              </h3>
              <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
                Near Yelachenahalli Metro Station, Kanakapura Main Road, with access from JP Nagar, Jayanagar, Banashankari and surrounding localities.
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

      {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS (All 8 FAQs) ─────── */}
      <section style={{ padding: '50px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              PATIENT FAQS
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '34px', color: '#153F39', margin: '6px 0 12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.6 }}>
              Direct answers to common patient questions regarding results, safety, and recovery.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {allFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: openFaq === idx ? '1.5px solid #942876' : '1.5px solid #EBE0EA',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: openFaq === idx ? '0 8px 24px rgba(148, 40, 118, 0.08)' : 'none'
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
                    <HelpCircle size={18} color="#942876" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp size={18} color="#942876" /> : <ChevronDown size={18} color="#6A5F75" />}
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
            border: '1.5px solid #EBE0EA',
            padding: '36px',
            boxShadow: '0 12px 32px rgba(43, 27, 77, 0.04)'
          }}>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', marginBottom: '16px' }}>
              Explore Complementary Treatments at Medicare Skin
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <button
                onClick={() => handleNav('hydrafacial')}
                style={{
                  background: '#FBF9FC',
                  border: '1px solid #EBE0EA',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#2B73AF', marginBottom: '4px' }}>
                  HydraFacial Glow &amp; Hydration →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Gentle device-assisted cleansing, dead skin exfoliation and intense hydration.
                </div>
              </button>

              <button
                onClick={() => handleNav('cosmetic')}
                style={{
                  background: '#FBF9FC',
                  border: '1px solid #EBE0EA',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#942876', marginBottom: '4px' }}>
                  Chemical Peels &amp; Medi-Facials →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Dermatologist-formulated lactic, glycolic, and salicylic acid peels.
                </div>
              </button>

              <button
                onClick={() => handleNav('skin')}
                style={{
                  background: '#FBF9FC',
                  border: '1px solid #EBE0EA',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#942876', marginBottom: '4px' }}>
                  Acne &amp; Pores Care →
                </div>
                <div style={{ fontSize: '12px', color: '#6A5F75' }}>
                  Medical protocols for active pimples, blackheads, and acne scarring.
                </div>
              </button>

              <button
                onClick={() => handleNav('contact')}
                style={{
                  background: '#FBF9FC',
                  border: '1px solid #EBE0EA',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#942876', marginBottom: '4px' }}>
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

      {/* ── FINAL CTA: CONCERNED ABOUT MELASMA, DARK SPOTS OR UNEVEN SKIN TONE? ── */}
      <section style={{ padding: '20px 0 60px', background: 'transparent' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #2B1B4D 0%, #461C4C 100%)',
            borderRadius: '26px',
            padding: '48px 40px',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(43, 27, 77, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '36px', margin: '0 0 14px' }}>
              Concerned About Melasma, Dark Spots or Uneven Skin Tone?
            </h2>
            <p style={{ fontSize: '16.5px', color: '#E4D5E6', maxWidth: '720px', margin: '0 auto 16px', lineHeight: 1.65 }}>
              Don't choose a laser based on advertising alone. Get an accurate assessment of your pigmentation and understand the treatment options suitable for your skin.
            </p>
            <p style={{ fontSize: '15px', color: '#E4D5E6', maxWidth: '680px', margin: '0 auto 28px', lineHeight: 1.65 }}>
              Medicare Skin &amp; Cosmetic Clinic offers personalised dermatology consultation in South Bengaluru.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button
                onClick={handleBook}
                style={{
                  background: 'linear-gradient(135deg, #F1A9D4 0%, #FFFFFF 100%)',
                  color: '#2B1B4D',
                  padding: '14px 34px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              >
                Book Your Pigmentation Consultation Today →
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

            <div style={{ fontSize: '13.5px', color: '#CDBACF', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <div>Website: <strong style={{ color: '#FFFFFF' }}>www.medicareskin.com</strong></div>
              <div>Location: <strong>Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru – 560078.</strong></div>
              <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.85, fontStyle: 'italic' }}>
                Medical disclaimer: This page provides general educational information and does not replace an individual clinical examination. Treatment suitability and outcomes vary.
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
