import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import LocationMapSection from '../components/LocationMapSection';
import { 
  ArrowLeft, CheckCircle2, XCircle, ShieldCheck, Sparkles, Calendar, 
  Clock, Award, Phone, ChevronDown, ChevronUp, Check, Info, Star, HelpCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import HairConcernLandingPage from './HairConcernLandingPage';

export default function TreatmentDetailPage({ item, onBack, onOpenBooking, onSuccessToast }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(0);

  if (!item) return null;
  if (['hair-fall-treatment', 'hair-thinning-treatment', 'unwanted-facial-hair-treatment'].includes(item.id)) {
    return (
      <HairConcernLandingPage
        item={item}
        onOpenBooking={onOpenBooking}
        onBack={onBack}
      />
    );
  }

  const treatmentTitle = item.title || 'Dermatology Treatment';
  const categoryName = item.category || item.type || 'Clinical Dermatology';

  // FAQs tailored for clinical treatment page
  const faqs = [
    {
      q: `How many sessions of ${treatmentTitle} are typically required?`,
      a: `Most patients achieve significant, long-lasting clinical improvements within 3 to 6 sessions spaced 3 to 4 weeks apart. The exact schedule is customised by Dr. Sujay M after dermoscopic skin evaluation.`
    },
    {
      q: 'Is there any downtime after the procedure?',
      a: 'Most treatments feature minimal to mild downtime (ranging from zero downtime to 24–48 hours of mild redness). You can resume everyday work and routine activities immediately with appropriate sunscreen protection.'
    },
    {
      q: 'When will I begin to see noticeable results?',
      a: 'Initial textural improvements are usually visible within 10 to 14 days following your first session. Collagen remodelling continues to enhance your skin clarity and tightness over 2 to 3 months.'
    },
    {
      q: 'Are the treatment results permanent?',
      a: 'Scar remodeling and laser hair reduction offer long-lasting, permanent improvements. Ongoing maintenance sessions and a prescribed medical skincare regimen help protect and maintain peak results.'
    },
    {
      q: 'Is the procedure painful or uncomfortable?',
      a: 'We use clinical topical numbing creams and cooling contact systems to ensure virtually painless, highly comfortable treatment sessions.'
    }
  ];

  return (
    <div style={{ background: '#F8F9FD', minHeight: '100vh', paddingBottom: '90px', color: '#2B1B4D' }}>
      
      {/* ── BREADCRUMB NAVIGATION ───────────────────────────────────── */}
      <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #ECE3EC', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6A5F75' }}>
          <button
            onClick={onBack}
            style={{ background: 'none', border: 'none', color: '#942876', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: 0 }}
          >
            <ArrowLeft size={14} /> Back
          </button>
          <span>/</span>
          <span style={{ color: '#6A5F75', cursor: 'pointer' }} onClick={onBack}>Treatments</span>
          <span>/</span>
          <span style={{ color: '#2B1B4D', fontWeight: 600 }}>{categoryName}</span>
          <span>/</span>
          <span style={{ color: '#942876', fontWeight: 700 }}>{treatmentTitle}</span>
        </div>
      </div>

      {/* ── SCREEN 1: TREATMENT DETAIL HERO PAGE (Image 1, Screen 1) ─── */}
      <section style={{ padding: '50px 0 60px', position: 'relative' }}>
        <div className="container">
          <div className="grid-responsive-split">
            
            {/* Left Column: Headlines & Actions */}
            <div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span style={{ background: 'rgba(148, 40, 118, 0.1)', color: '#942876', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {categoryName} Care
                </span>
                <span style={{ background: '#FAF0F6', border: '1px solid #EBD5E5', color: '#2B1B4D', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>
                  Dr. Sujay M · MBBS, DDVL
                </span>
              </div>

              <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', lineHeight: 1.2, margin: '0 0 10px', fontWeight: 700 }}>
                {treatmentTitle}
              </h1>

              <div style={{ fontSize: '14px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Smoother, Clearer Skin with Advanced Evidence-Based Therapies
              </div>

              <p style={{ fontSize: '16.5px', color: '#5C5268', lineHeight: 1.7, marginBottom: '24px', maxWidth: '580px' }}>
                {item.fullText || item.description || `Reduce visible imperfections, stimulate deep collagen repair, and restore lasting skin confidence with personalized, dermatologist-led care at South Bengaluru's premier clinic.`}
              </p>

              {/* 3 Key Trust Signals with Icons */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={13} color="#942876" strokeWidth={3} />
                  </div>
                  Clinically Proven
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={13} color="#942876" strokeWidth={3} />
                  </div>
                  Minimal Downtime
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#2B1B4D' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={13} color="#942876" strokeWidth={3} />
                  </div>
                  Natural Looking Results
                </div>
              </div>

              {/* Primary Consultation & Call CTAs */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    padding: '15px 32px',
                    borderRadius: '14px',
                    color: '#FFF',
                    fontSize: '15px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 24px rgba(148, 40, 118, 0.28)'
                  }}
                >
                  Book a Consultation →
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
                  Call +91 92428 55707
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with Specular Glass Doctor Badge */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '26px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(43, 27, 77, 0.12)', border: '4px solid #FFFFFF', aspectRatio: '4/3' }}>
                <img
                  src={item.image || '/images/imageye___-_imgi_11_acne-scar-treatment.webp'}
                  alt={treatmentTitle}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Doctor Certification Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '24px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255, 255, 255, 1)',
                  borderRadius: '16px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 12px 30px rgba(43, 27, 77, 0.12)'
                }}
              >
                <img
                  src="/images/dr_sujay_portrait.jpg"
                  alt="Dr. Sujay M"
                  style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #942876' }}
                />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#2B1B4D' }}>Dr. Sujay M</div>
                  <div style={{ fontSize: '11px', color: '#942876', fontWeight: 600 }}>Senior Consultant · 18+ Yrs Exp</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCREEN 2: TREATMENT CONTENT & SYMPTOMS (Image 1, Screen 2) ─ */}
      <section style={{ padding: '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ background: '#FFFFFF', borderRadius: '28px', border: '1.5px solid #EBE0EA', padding: '40px', boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)' }}>
            
            <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Clinical Understanding
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '34px', color: '#153F39', margin: '6px 0 12px' }}>
                Understanding {treatmentTitle}
              </h2>
              <p style={{ fontSize: '15.5px', color: '#5C5268', lineHeight: 1.7 }}>
                {treatmentTitle} concerns are common skin issues that can affect everyday self-assurance. At Medicare Skin, Dr. Sujay M offers advanced, evidence-based dermatological modalities to remodel tissue texture and restore smooth, healthy, radiant skin.
              </p>
            </div>

            {/* Interactive Section Tabs */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #ECE3EC', paddingBottom: '12px', marginBottom: '32px', overflowX: 'auto' }}>
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'causes', label: 'Causes' },
                { id: 'symptoms', label: 'Symptoms' },
                { id: 'options', label: 'Treatment Options' },
                { id: 'benefits', label: 'Benefits' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '24px',
                    background: activeTab === tab.id ? '#942876' : 'transparent',
                    color: activeTab === tab.id ? '#FFFFFF' : '#6A5F75',
                    fontSize: '13.5px',
                    fontWeight: activeTab === tab.id ? 700 : 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Common Symptoms 4 Cards (Blueprint Screen 2) */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: '#153F39', marginBottom: '18px' }}>
                Common Symptoms & Manifestations
              </h3>
              <div className="grid-responsive-4">
                {[
                  { title: 'Pitted / Indented Scars', desc: 'Atrophic ice-pick, boxcar, or rolling depressions on the skin surface.' },
                  { title: 'Uneven Skin Texture', desc: 'Rough epidermal contours and loss of smooth optical light reflection.' },
                  { title: 'Post-Inflammatory Spots', desc: 'Pigmented brown or red macular marks following inflamed breakouts.' },
                  { title: 'Loss of Elastic Smoothness', desc: 'Depleted dermal collagen leading to sagging skin elasticity.' }
                ].map((sym, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FAF8FB',
                      border: '1px solid #EBE0EA',
                      borderRadius: '16px',
                      padding: '20px 18px',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#942876', fontWeight: 800, fontSize: '13px', marginBottom: '12px' }}>
                      0{idx + 1}
                    </div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#2B1B4D', margin: '0 0 6px' }}>
                      {sym.title}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#6A5F75', lineHeight: 1.5, margin: 0 }}>
                      {sym.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Options at Medicare Skin with Images */}
            <div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: '#153F39', marginBottom: '18px' }}>
                Treatment Options at Medicare Skin Clinic
              </h3>
              <div className="grid-responsive-4">
                {[
                  { name: 'Fractional CO2 Laser', desc: 'Fractional micro-beams vaporize damaged tissue and trigger deep dermal neo-collagenesis.', img: '/images/skin_elasticity_cheek_touch.png' },
                  { name: 'Microneedling + PRP', desc: 'Autologous platelet growth factors stimulate rapid fibroblast cellular renewal.', img: '/images/radiant_hair_smile_woman.png' },
                  { name: 'Clinical Chemical Peels', desc: 'Medical-grade AHA/BHA solutions safely exfoliate dull skin cells and hyperpigmentation.', img: '/images/luxury_indian_skin_model.png' },
                  { name: 'Subcision & Collagen Fillers', desc: 'Releasing fibrotic tethered scars combined with targeted volume replenishment.', img: '/images/poreless_glass_skin_glow.jpg' }
                ].map((opt, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FAF8FB',
                      border: '1.5px solid #EBE0EA',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div style={{ height: '120px', overflow: 'hidden' }}>
                      <img src={opt.img} alt={opt.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#2B1B4D', margin: '0 0 6px' }}>
                        {opt.name}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#6A5F75', lineHeight: 1.5, margin: 0 }}>
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCREEN 3: SAFETY / CANDIDACY / FAQS (Image 1, Screen 3) ─── */}
      <section style={{ padding: '40px 0 60px', background: 'transparent' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ marginBottom: '40px' }}>
            
            {/* Left Card: Is It Safe & Candidacy Checklist */}
            <div style={{ background: '#FFFFFF', borderRadius: '26px', border: '1.5px solid #EBE0EA', padding: '36px', boxShadow: '0 12px 30px rgba(43, 27, 77, 0.04)' }}>
              
              {/* Doctor Endorsement Header */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #ECE3EC' }}>
                <img
                  src="/images/dr_sujay_portrait.jpg"
                  alt="Dr. Sujay M"
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2.5px solid #942876' }}
                />
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#15803D', background: '#DCFCE7', padding: '3px 10px', borderRadius: '12px', marginBottom: '4px' }}>
                    <ShieldCheck size={13} /> US-FDA Gold Standard
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: '#153F39', margin: 0 }}>
                    Is It Safe?
                  </h3>
                  <p style={{ fontSize: '12.5px', color: '#6A5F75', margin: '4px 0 0' }}>
                    Performed exclusively by qualified dermatologists under strict medical sterilization protocols.
                  </p>
                </div>
              </div>

              {/* 2-Column Candidacy */}
              <div className="grid-responsive-2">
                <div>
                  <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#15803D', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <CheckCircle2 size={16} color="#15803D" /> Suitable Candidates
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: '#5C5268' }}>
                    <li>✓ Pitted or raised scars</li>
                    <li>✓ Uneven texture & pores</li>
                    <li>✓ Good general overall health</li>
                    <li>✓ Realistic aesthetic goals</li>
                    <li>✓ No active cystic skin flare</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#B91C1C', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <XCircle size={16} color="#B91C1C" /> Not Recommended If
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: '#5C5268' }}>
                    <li>✗ Active severe acne infection</li>
                    <li>✗ Pregnancy or nursing</li>
                    <li>✗ History of keloid scarring</li>
                    <li>✗ Uncontrolled diabetes mellitus</li>
                    <li>✗ Recent oral isotretinoin use</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Card: Interactive FAQs Accordion */}
            <div style={{ background: '#FFFFFF', borderRadius: '26px', border: '1.5px solid #EBE0EA', padding: '36px', boxShadow: '0 12px 30px rgba(43, 27, 77, 0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <HelpCircle size={22} color="#942876" />
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', margin: 0 }}>
                  Frequently Asked Questions
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #EBE0EA',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: openFaq === idx ? '#FAF8FB' : '#FFFFFF',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#2B1B4D' }}>
                        {faq.q}
                      </span>
                      {openFaq === idx ? <ChevronUp size={16} color="#942876" /> : <ChevronDown size={16} color="#6A5F75" />}
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 18px 16px', fontSize: '13px', color: '#6A5F75', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SCREEN 4: TREATMENT COST / PRICING (Image 1, Screen 4) ───── */}
      <section style={{ padding: '30px 0 60px', background: 'transparent' }}>
        <div className="container">
          <div style={{ background: '#FFFFFF', borderRadius: '28px', border: '1.5px solid #EBE0EA', padding: '40px', boxShadow: '0 16px 40px rgba(43, 27, 77, 0.05)' }}>
            
            <div className="grid-responsive-split-reverse">
              
              {/* Cost Factors & Pricing Explanation */}
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Transparent Medical Pricing
                </span>
                <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 12px' }}>
                  {treatmentTitle} Cost in Bengaluru
                </h2>
                <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: 1.6, marginBottom: '24px' }}>
                  The overall cost depends on the severity and depth of the concern, specific technology utilized (Fractional Laser, Microneedling, PRP, or Medical Peels), and the number of sessions planned. We provide complete transparent upfront estimates with zero hidden charges.
                </p>

                {/* Big Price Range Banner (Blueprint 1, Screen 4) */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #FAF4FA 0%, #FFFFFF 100%)',
                    border: '1.5px solid #EBD5E5',
                    borderRadius: '18px',
                    padding: '20px 24px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#FAF0F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#942876', fontSize: '22px', fontWeight: 800 }}>
                    ₹
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#942876', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Typical Price Range at Medicare Skin
                    </div>
                    <div style={{ fontSize: '28px', fontWeight: 700, color: '#153F39', fontFamily: 'Fraunces, Georgia, serif' }}>
                      ₹5,000 – ₹25,000 <span style={{ fontSize: '13px', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#6A5F75', fontWeight: 600 }}>/ session</span>
                    </div>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="grid-responsive-2">
                  {[
                    'Type & severity of concern',
                    'Clinical technology chosen',
                    'Surface area being treated',
                    'Total sessions required',
                    'Combination therapy protocol',
                    'Post-care medical kits'
                  ].map((factor, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5C5268' }}>
                      <Check size={14} color="#942876" strokeWidth={2.5} />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card: Get an Accurate Estimate (Screen 4 Card) */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #FAF4FA 0%, #FFFFFF 100%)',
                  border: '2px solid #EBE0EA',
                  borderRadius: '24px',
                  padding: '30px',
                  textAlign: 'center',
                  boxShadow: '0 12px 30px rgba(148, 40, 118, 0.08)'
                }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', margin: '0 auto 14px', overflow: 'hidden', border: '3px solid #942876' }}>
                  <img src="/images/radiant_skin_glow.jpg" alt="Get Estimate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', margin: '0 0 8px' }}>
                  Get an Accurate Estimate
                </h3>
                <p style={{ fontSize: '13px', color: '#6A5F75', margin: '0 0 20px', lineHeight: 1.5 }}>
                  Book an in-person consultation with Dr. Sujay M for a personalized treatment plan and exact pricing estimate.
                </p>

                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '16px'
                  }}
                >
                  Book a Consultation →
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', fontSize: '12.5px', color: '#5C5268' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#15803D" /> Personalized treatment plan
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#15803D" /> No hidden medical costs
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={14} color="#15803D" /> Flexible multi-session packages
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── SCREEN 5: BEFORE-AFTER / RESULTS (Image 1, Screen 5) ──────── */}
      <section style={{ padding: '30px 0 60px', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Real Results
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '36px', color: '#153F39', margin: '6px 0 10px' }}>
              {treatmentTitle} Before & After
            </h2>
            <p style={{ fontSize: '15px', color: '#6A5F75' }}>
              See the visible improvement in skin texture and clarity achieved through personalized treatment plans at Medicare Skin.
            </p>

            {/* Results Trust Signals */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: '#153F39' }}>
                <span style={{ fontSize: '20px', color: '#153F39', fontWeight: 800 }}>18+</span>
                Years Clinical Dermatology
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: '#153F39' }}>
                <span style={{ fontSize: '20px', color: '#C5A174', fontWeight: 800 }}>MBBS, DDVL</span>
                Doctor-Supervised Treatment
              </div>
            </div>
          </div>

          {/* 3 Real Patient Case Cards with Side-by-Side Images */}
          <div className="grid-responsive-3">
            {[
              {
                title: 'Acne Scar Reduction',
                sessions: '3 Sessions · Fractional CO2 Laser',
                img: '/images/skin_elasticity_cheek_touch.png',
                desc: 'Visible shallowing of rolling scars and smoother light reflection.'
              },
              {
                title: 'Improved Skin Texture',
                sessions: '4 Sessions · Laser + PRP Protocol',
                img: '/images/poreless_glass_skin_glow.jpg',
                desc: 'Deep dermal collagen stimulation and reduction of enlarged pores.'
              },
              {
                title: 'Smoother, Clearer Skin',
                sessions: '3 Sessions · Microneedling + Peels',
                img: '/images/luxury_indian_skin_model.png',
                desc: 'Even epidermal pigmentation and radiant, renewed skin barrier.'
              }
            ].map((res, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #EBE0EA',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 30px rgba(43, 27, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={res.img} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(43, 27, 77, 0.85)', backdropFilter: 'blur(8px)', color: '#FFF', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                    Clinical Case Result
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 4px' }}>
                    {res.title}
                  </h3>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#942876', marginBottom: '8px' }}>
                    {res.sessions}
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#6A5F75', lineHeight: 1.5, margin: 0 }}>
                    {res.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── APPOINTMENT BOOKING SECTION ───────────────────────────────── */}
      <section style={{ padding: '40px 0 60px', background: 'transparent' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#942876', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Direct Booking
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', color: '#153F39', margin: '6px 0 8px' }}>
              Book Your Consultation with Dr. Sujay M
            </h2>
            <p style={{ fontSize: '14.5px', color: '#6A5F75' }}>
              Select your preferred appointment date and time for {treatmentTitle}.
            </p>
          </div>
          <BookingForm preSelectedConcern={treatmentTitle} onSuccessToast={onSuccessToast} />
        </div>
      </section>

      {/* ── CLINIC LOCATION & DIRECTIONS ──────────────────────────────── */}
      <LocationMapSection onSuccessToast={onSuccessToast} />

    </div>
  );
}
