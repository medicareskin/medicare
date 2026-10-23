import React, { useState, useEffect } from 'react';
import {
  Sparkles, Calendar, Phone, Award, Star, MapPin, ChevronRight,
  ShieldCheck, Check, Plus, Minus, ArrowRight, MessageCircle,
  Clock, Compass, Calculator, UserCheck, ChevronLeft, CheckCircle2,
  Layers, Maximize2
} from 'lucide-react';
import { CLINIC_INFO, MASTER_TAXONOMY, GOOGLE_REVIEWS } from '../../data/clinicData';
import ClinicalConcernsStrip from '../ClinicalConcernsStrip';

const HERO_BANNERS = [
  {
    id: 0,
    tag: 'ADVANCED TRICHOLOGY SUITE',
    title: 'Hair Fall Control & PRP / GFC',
    subtitle: 'Doctor-Administered Follicular Regrowth Protocols',
    image: '/images/hero_slide_3_hair.jpg',
    pill: 'Follicular Regrowth'
  },
  {
    id: 1,
    tag: 'TARGETED SCAR REVISION',
    title: 'Acne Scar Revision Suite',
    subtitle: 'Subcision, MNRF, TCA Cross & Fractional Resurfacing',
    image: '/images/hero_slide_2_acne.jpg',
    pill: 'Personalised Assessment'
  },
  {
    id: 2,
    tag: 'PRECISION DIODE LASER TECH',
    title: 'Laser Hair Reduction',
    subtitle: 'Safe for All Indian Skin Tones · Contact Chilled Tip',
    image: '/images/cat_laser_care.jpg',
    pill: 'Safe for Indian Skin'
  },
  {
    id: 3,
    tag: 'HYDRAFACIAL VORTEX INFUSION',
    title: 'Medical Glow & Deep Hydration',
    subtitle: 'Pore Extraction, Hyaluronic Infusion & Glass Skin Radiance',
    image: '/images/glass_skin_radiance.jpg',
    pill: 'Glass Skin Radiance'
  },
  {
    id: 4,
    tag: 'SENIOR DERMATOLOGIST CONSULTATION',
    title: 'Personalised Clinical Dermatology',
    subtitle: 'Evidence-based acne, melasma & aesthetic diagnosis',
    image: '/images/luxury_indian_skin_model.png',
    pill: 'Dr. (Mrs.) Sujay M · 18+ Yrs'
  }
];

const FACILITY_PHOTOS = [
  { id: 1, src: '/images/cat_laser_care.jpg', title: 'US-FDA Laser Treatment Suite', tag: 'Laser Tech' },
  { id: 2, src: '/images/dr_sujaya.jpeg', title: 'Dr. Sujay M Clinical Consultation', tag: 'Senior Diagnosis' },
  { id: 3, src: '/images/hero_slide_2_acne.jpg', title: 'Acne Scar Subcision Suite', tag: 'Dermal Revision' },
  { id: 4, src: '/images/hero_slide_3_hair.jpg', title: 'Growth Factor Scalp Therapy', tag: 'Hair Biotherapy' },
  { id: 5, src: '/slide-img/Scar Treatment.jpg', title: 'Fractional Resurfacing OT', tag: 'Scar Resurfacing' },
  { id: 6, src: '/slide-img/Skin Allergies 1.jpg', title: 'Clinical Patch Testing Lab', tag: 'Allergy Care' },
  { id: 7, src: '/images/clinic_interior_reception.jpg', title: 'Patient Reception & Lounge', tag: 'Clinic Ambience' },
  { id: 8, src: '/images/hydrafacial_procedure.jpg', title: 'HydraFacial Vortex Infusion Chamber', tag: 'Hydra Care' }
];

const SIGNATURE_TREATMENTS = [
  {
    id: 'acne-laser',
    title: 'Acne Scar Treatment',
    subtitle: 'Multi-modal scar revision: subcision, MNRF & fractional laser',
    image: '/images/hero_slide_2_acne.jpg',
    tag: 'Acne Laser',
    url: '/acne-laser/'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Removal',
    subtitle: 'Painless chilled diode laser technology for face & body',
    image: '/images/cat_laser_care.jpg',
    tag: 'Diode Laser',
    url: '/hair-care/'
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    subtitle: 'Custom dermatological medipeels for glow & acne reduction',
    image: '/images/luxury_indian_skin_model.png',
    tag: 'Peels',
    url: '/chemical-peels/'
  },
  {
    id: 'dermal-fillers-anti-wrinkle-injections',
    title: 'Dermal Fillers/Anti-wrinkle Injections',
    subtitle: 'Micro-droplet anti-wrinkle smoothing & volume restoration',
    image: '/images/radiant_skin_model.jpg',
    tag: 'Anti-Wrinkle',
    url: '/dermal-fillers-anti-wrinkle-injections/'
  },
  {
    id: 'microneedling-for-skin-tightening',
    title: 'Skin Tightening',
    subtitle: 'Non-surgical radiofrequency MNRF collagen lift',
    image: '/images/radiant_skin_glow.jpg',
    tag: 'Skin Tightening',
    url: '/microneedling-for-skin-tightening/'
  },
  {
    id: 'vitiligo-surgery',
    title: 'Vitiligo Surgery',
    subtitle: 'Specialised punch grafting & melanocyte transfer',
    image: '/images/hero_slide_5_results.jpg',
    tag: 'Surgery',
    url: '/vitiligo-surgery/'
  },
  {
    id: 'q-switched-laser-melasma-pigmentation-bangalore',
    title: 'Q-Switched Laser Melasma',
    subtitle: 'Nd:YAG laser toning for deep facial pigmentation',
    image: '/images/q_switched_procedure.jpg',
    tag: 'Melasma',
    url: '/q-switched-laser-melasma-pigmentation-bangalore/'
  },
  {
    id: 'hydrafacial-bangalore',
    title: 'HydraFacial Glow & Hydration',
    subtitle: 'Deep vortex pore cleansing & hyaluronic hydration',
    image: '/images/hydrafacial_procedure.jpg',
    tag: 'HydraFacial',
    url: '/hydrafacial-bangalore/'
  }
];

// All 14 authentic 5-star Google Patient Reviews
const PATIENT_STORIES = GOOGLE_REVIEWS.map((rev) => ({
  id: rev.id,
  name: rev.name || rev.author || 'Verified Patient',
  role: rev.role || 'Google Verified Review',
  text: rev.text,
  avatar: rev.avatar || '⭐',
  stars: rev.rating || 5,
  treatment: rev.treatment || rev.tag || 'Dermatology Care'
}));

const BLOG_ARTICLES = [
  {
    id: 'science-of-glass-skin-radiance-bangalore',
    category: 'Beauty & Radiance',
    title: 'The Science of Glass Skin: Dermatologist Secrets for Radiance',
    date: 'Oct 22, 2026',
    readTime: '6 min read',
    image: '/images/glass_skin_radiance.jpg',
    tag: 'beauty'
  },
  {
    id: 'bridal-pre-event-beauty-countdown-guide',
    category: 'Beauty & Radiance',
    title: 'Pre-Event & Bridal Beauty Countdown: Clinical Timeline',
    date: 'Oct 21, 2026',
    readTime: '7 min read',
    image: '/images/bridal_beauty_radiance.jpg',
    tag: 'beauty'
  },
  {
    id: 'q-switched-laser-melasma-pigmentation-guide',
    category: 'Laser Treatments',
    title: 'Q-Switched Laser for Melasma & Pigmentation: Clinical Guide',
    date: 'Oct 20, 2026',
    readTime: '7 min read',
    image: '/images/q-switched-laser-pigmentation-treatment-bangalore.webp',
    tag: 'laser'
  },
  {
    id: 'hydrafacial-skin-hydration-glow-bangalore',
    category: 'Aesthetics & Glow',
    title: 'HydraFacial Treatment in Bengaluru for Glowing Skin',
    date: 'Oct 19, 2026',
    readTime: '6 min read',
    image: '/images/hydrafacial-skin-hydration-treatment-bangalore.webp',
    tag: 'aesthetics'
  },
  {
    id: 'medical-chemical-peels-vs-salon-bleach-glow',
    category: 'Beauty & Radiance',
    title: 'Medical Peels vs Salon Bleach: Authentic Skin Beauty',
    date: 'Oct 18, 2026',
    readTime: '5 min read',
    image: '/images/medical_peel_glow.jpg',
    tag: 'beauty'
  },
  {
    id: 'q-switched-laser-vs-hydrafacial-comparison',
    category: 'Treatment Guides',
    title: 'Q-Switched Laser vs. HydraFacial: Which Treatment You Need',
    date: 'Oct 16, 2026',
    readTime: '5 min read',
    image: '/images/luxury_indian_skin_model.png',
    tag: 'guides'
  },
  {
    id: 'anti-ageing-collagen-preservation-beauty-secrets',
    category: 'Beauty & Radiance',
    title: 'Collagen Preservation: Non-Invasive Anti-Ageing Secrets',
    date: 'Oct 15, 2026',
    readTime: '6 min read',
    image: '/images/skin_elasticity_cheek_touch.png',
    tag: 'beauty'
  },
  {
    id: 'acne-scar-treatment-guide',
    category: 'Skin Care',
    title: 'How to Treat Acne Scars: Evidence-Based Options That Work',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    image: '/images/skin_elasticity_cheek_touch.png',
    tag: 'skin'
  },
  {
    id: 'growth-factor-therapy-hair-loss',
    category: 'Hair Care',
    title: 'Causes of Hair Fall and How Growth Factor Scalp Therapy Works',
    date: 'Oct 08, 2026',
    readTime: '4 min read',
    image: '/images/radiant_hair_smile_woman.png',
    tag: 'hair'
  }
];

const FAQS = [
  {
    q: 'Are the treatments safe?',
    a: 'Yes, 100%. All procedures are conducted or directly supervised by Dr. Sujay M utilizing US-FDA approved technologies under rigorous clinical sterilization protocols.'
  },
  {
    q: 'How many sessions are required for acne scars or laser?',
    a: 'Acne scars typically require 4–6 combination sessions (subcision + MNRF), while laser hair reduction needs 6–8 sessions for optimal permanent follicle reduction.'
  },
  {
    q: 'Do you have dedicated parking available?',
    a: 'Yes, we have dedicated four-wheeler and two-wheeler parking right in front of our Jyothi Layout clinic facility.'
  },
  {
    q: 'Is there downtime after laser or peel treatments?',
    a: 'Our chilled diode laser hair reduction has zero downtime. Fractional scar resurfacing has mild pinkness for 24–48 hours which subsides with our soothing post-care protocol.'
  },
  {
    q: 'Do you offer tele-dermatology consultations?',
    a: 'Yes, tele-dermatology video consultations are available for initial triage and follow-ups for patients residing across Karnataka.'
  }
];

export default function MobileHomeView({
  onOpenBooking,
  onOpenNavigator,
  onOpenCostPlanner,
  onOpenPortal,
  onSelectTreatment,
  onTabChange
}) {
  const [bannerIdx, setBannerIdx] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeBlogTab, setActiveBlogTab] = useState('all');
  const [reviewIdx, setReviewIdx] = useState(0);
  const [reviewTouchStart, setReviewTouchStart] = useState(null);

  const [bannerTouchStart, setBannerTouchStart] = useState(null);

  // Auto-rotate hero banners every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIdx((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleBannerTouchStart = (e) => {
    setBannerTouchStart(e.targetTouches[0].clientX);
  };

  const handleBannerTouchEnd = (e) => {
    if (bannerTouchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = bannerTouchStart - touchEnd;
    if (diff > 40) {
      setBannerIdx((prev) => (prev + 1) % HERO_BANNERS.length);
    } else if (diff < -40) {
      setBannerIdx((prev) => (prev === 0 ? HERO_BANNERS.length - 1 : prev - 1));
    }
    setBannerTouchStart(null);
  };

  const prevBanner = () => {
    setBannerIdx((prev) => (prev === 0 ? HERO_BANNERS.length - 1 : prev - 1));
  };

  const nextBanner = () => {
    setBannerIdx((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const handleReviewTouchStart = (e) => {
    setReviewTouchStart(e.targetTouches[0].clientX);
  };

  const handleReviewTouchEnd = (e) => {
    if (reviewTouchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = reviewTouchStart - touchEnd;
    if (diff > 45) {
      setReviewIdx((prev) => (prev + 1) % PATIENT_STORIES.length);
    } else if (diff < -45) {
      setReviewIdx((prev) => (prev === 0 ? PATIENT_STORIES.length - 1 : prev - 1));
    }
    setReviewTouchStart(null);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const filteredArticles = activeBlogTab === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter((a) => a.tag === activeBlogTab);

  const activeBanner = HERO_BANNERS[bannerIdx];

  return (
    <div className="mobile-blueprint-home">
      {/* ───────────────────────────────────────────────────────────
          SCREEN 1: MOBILE HERO (Big Image Container on Top, Caption on Bottom)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-hero-section">
        {/* TOP: Prominent Big Image Container & Visual Showcase */}
        <div className="mob-hero-banner-container">
          <div
            className="mob-banner-frame"
            onTouchStart={handleBannerTouchStart}
            onTouchEnd={handleBannerTouchEnd}
          >
            <img
              key={activeBanner.image}
              src={activeBanner.image}
              alt={activeBanner.title}
              className="mob-banner-img"
              loading="eager"
            />
            <div className="mob-banner-scrim" />

            {/* Quick Touch Nav Arrows on Left & Right */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevBanner(); }}
              className="mob-banner-nav-btn prev"
              aria-label="Previous clinical slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextBanner(); }}
              className="mob-banner-nav-btn next"
              aria-label="Next clinical slide"
            >
              <ChevronRight size={18} />
            </button>

            {/* Floating Bottom Info (Caption on Bottom of Image Container) */}
            <div className="mob-banner-caption">
              <div className="mob-bc-tag">{activeBanner.tag}</div>
              <div className="mob-bc-title">{activeBanner.title}</div>
              {activeBanner.subtitle && (
                <div className="mob-bc-subtitle">{activeBanner.subtitle}</div>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mob-banner-dots">
            {HERO_BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIdx(i)}
                className={`mob-dot ${bannerIdx === i ? 'active' : ''}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM: Headline, Description & Call-to-Actions */}
        <div className="mob-hero-content-bottom">
          {/* Eyebrow Badge */}
          <div className="mob-eyebrow-badge">
            <Sparkles size={13} />
            <span>EXPERT DERMATOLOGY IN SOUTH BENGALURU</span>
          </div>

          {/* H1 Title */}
          <h1 className="mob-hero-title">
            Clearer, Healthier Skin &amp; Hair Care
          </h1>

          {/* Support Description */}
          <p className="mob-hero-support">
            Advanced, personalised clinical skin, hair, laser and aesthetic care, led by <strong>Dr. (Mrs.) Sujay M</strong> (MBBS, DDVL — Bangalore Medical College 2005) near Yelachenahalli Metro Station, South Bengaluru.
          </p>

          {/* Dual Primary & Secondary CTAs */}
          <div className="mob-hero-ctas">
            <button
              className="mob-btn-primary"
              onClick={onOpenBooking}
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="mob-btn-secondary"
            >
              <Phone size={17} />
              <span>Call +91-92428 55707</span>
            </a>
          </div>

          {/* 3 Horizontal Trust Indicators in Liquid Glass Strip */}
          <div className="mob-trust-indicators-row">
            <div className="mob-trust-item">
              <div className="mob-trust-icon-box">
                <Award size={18} color="#153F39" />
              </div>
              <span className="mob-trust-label">Senior Dermatologist (18+ Yrs)</span>
            </div>

            <div className="mob-trust-item">
              <div className="mob-trust-icon-box">
                <Star size={18} fill="#C5A174" color="#C5A174" />
              </div>
              <span className="mob-trust-label">5.0 ★ Google Rating</span>
            </div>

            <div className="mob-trust-item">
              <div className="mob-trust-icon-box">
                <MapPin size={18} color="#153F39" />
              </div>
              <span className="mob-trust-label">Near Yelachenahalli Metro</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          AI-ERA SIGNATURE QUICK-CARDS (Liquid Glass)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-ai-quick-strip">
        <div
          className="mob-quick-feature-card"
          onClick={onOpenNavigator}
        >
          <div className="mob-qf-icon compass-icon">
            <Compass size={22} color="#942876" />
          </div>
          <div className="mob-qf-content">
            <div className="mob-qf-badge">AI SKIN TRIAGE</div>
            <div className="mob-qf-title">Skin Concern Navigator</div>
            <div className="mob-qf-desc">Unsure about your condition? Take our 2-minute clinical triage.</div>
          </div>
          <ChevronRight size={18} className="mob-qf-arrow" />
        </div>

        <div
          className="mob-quick-feature-card"
          onClick={onOpenCostPlanner}
        >
          <div className="mob-qf-icon calc-icon">
            <Calculator size={22} color="#942876" />
          </div>
          <div className="mob-qf-content">
            <div className="mob-qf-badge">TRANSPARENT PRICING</div>
            <div className="mob-qf-title">Treatment Cost Planner</div>
            <div className="mob-qf-desc">Estimate session fees, area options & transparent package costs.</div>
          </div>
          <ChevronRight size={18} className="mob-qf-arrow" />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          INSIDE CLINIC FACILITY TOUR (Mobile Liquid Glass Slider)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-facility-section">
        <div className="mob-section-header">
          <div className="mob-section-badge">
            <Layers size={12} />
            <span>CLINIC TOUR</span>
          </div>
          <h2 className="mob-section-title">Inside Medicare Clinic</h2>
          <p className="mob-section-subtitle">
            Explore our state-of-the-art US-FDA laser suites and private consultation chambers in South Bengaluru.
          </p>
        </div>

        <div className="mob-facility-scroll-row">
          {FACILITY_PHOTOS.map((fac) => (
            <div key={fac.id} className="mob-facility-card">
              <div className="mob-fac-img-wrap">
                <img src={fac.src} alt={fac.title} className="mob-fac-img" />
                <span className="mob-fac-tag">{fac.tag}</span>
              </div>
              <div className="mob-fac-body">
                <h4 className="mob-fac-title">{fac.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          POPULAR CONCERNS & PROCEDURES STRIP (Pixel-Matched to Reference)
      ──────────────────────────────────────────────────────────── */}
      <ClinicalConcernsStrip
        onOpenBooking={onOpenBooking}
        onTabChange={onTabChange}
        onSelectConcern={onSelectTreatment}
      />

      {/* ───────────────────────────────────────────────────────────
          SCREEN 3: TREATMENT CATEGORIES (Liquid Glass)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-categories-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Treatment Categories</h2>
          <p className="mob-section-subtitle">
            Comprehensive care for all your skin, hair, and aesthetic goals.
          </p>
        </div>

        <div className="mob-category-cards-list">
          {/* 1. Skin */}
          <div
            className="mob-category-card"
            onClick={() => onTabChange && onTabChange('skin')}
          >
            <img
              src="/images/imageye___-_imgi_13_Acne-Treatment.webp"
              alt="Skin Care Treatments"
              className="mob-cat-thumb"
            />
            <div className="mob-cat-info">
              <h3 className="mob-cat-name">Skin Dermatology</h3>
              <p className="mob-cat-desc">Acne, pigmentation, allergies & medical conditions</p>
            </div>
            <ChevronRight size={18} className="mob-cat-chevron" />
          </div>

          {/* 2. Hair */}
          <div
            className="mob-category-card"
            onClick={() => onTabChange && onTabChange('hair')}
          >
            <img
              src="/images/imageye___-_imgi_14_Hair-Treatment.webp"
              alt="Hair Fall Treatments"
              className="mob-cat-thumb"
            />
            <div className="mob-cat-info">
              <h3 className="mob-cat-name">Trichology & Hair</h3>
              <p className="mob-cat-desc">Hair fall, thinning & growth factor scalp therapy</p>
            </div>
            <ChevronRight size={18} className="mob-cat-chevron" />
          </div>

          {/* 3. Laser */}
          <div
            className="mob-category-card"
            onClick={() => onTabChange && onTabChange('laser')}
          >
            <img
              src="/images/imageye___-_imgi_12_Laser-Hair-Removal.webp"
              alt="Laser Hair Reduction"
              className="mob-cat-thumb"
            />
            <div className="mob-cat-info">
              <h3 className="mob-cat-name">Laser Suites</h3>
              <p className="mob-cat-desc">Painless diode hair removal & scar resurfacing</p>
            </div>
            <ChevronRight size={18} className="mob-cat-chevron" />
          </div>

          {/* 4. Aesthetics */}
          <div
            className="mob-category-card"
            onClick={() => onTabChange && onTabChange('cosmetic')}
          >
            <img
              src="/images/imageye___-_imgi_8_Botox-and-Fillers-1.webp"
              alt="Aesthetics Treatments"
              className="mob-cat-thumb"
            />
            <div className="mob-cat-info">
              <h3 className="mob-cat-name">Aesthetic Dermatology</h3>
              <p className="mob-cat-desc">Anti-wrinkle, dermal fillers & skin tightening</p>
            </div>
            <ChevronRight size={18} className="mob-cat-chevron" />
          </div>

          {/* 5. Medical Dermatology */}
          <div
            className="mob-category-card"
            onClick={() => onTabChange && onTabChange('treatments')}
          >
            <img
              src="/images/imageye___-_imgi_25_Eczema.webp"
              alt="Medical Dermatology"
              className="mob-cat-thumb"
            />
            <div className="mob-cat-info">
              <h3 className="mob-cat-name">Clinical Dermatology</h3>
              <p className="mob-cat-desc">Eczema, psoriasis, vitiligo & patch tests</p>
            </div>
            <ChevronRight size={18} className="mob-cat-chevron" />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 4: SIGNATURE PROCEDURES (Liquid Glass Grid)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-signature-section" id="mob-our-treatments-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Our Treatments</h2>
          <p className="mob-section-subtitle">
            Doctor-guided aesthetic and dermatological treatments performed by Dr. Sujay M.
          </p>
        </div>

        <div className="mob-signature-grid">
          {SIGNATURE_TREATMENTS.map((item) => (
            <div
              key={item.id}
              className="mob-sig-card"
              onClick={() => {
                if (onSelectTreatment) {
                  onSelectTreatment({
                    id: item.id,
                    title: item.title,
                    desc: item.subtitle,
                    image: item.image,
                    category: item.tag
                  });
                }
              }}
            >
              <div className="mob-sig-thumb-wrap">
                <img src={item.image} alt={item.title} className="mob-sig-thumb" />
                <span className="mob-sig-pill">{item.tag}</span>
              </div>
              <div className="mob-sig-body">
                <h3 className="mob-sig-name">{item.title}</h3>
                <p className="mob-sig-desc">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 5: DOCTOR PROFILE (Dr. Sujay M - Real Photo)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-doctor-section">
        <div className="mob-doctor-card">
          <div className="mob-doctor-photo-wrap">
            <img
              src="/images/dr_sujaya.jpeg"
              alt="Dr. (Mrs.) Sujay M - MBBS, DDVL"
              className="mob-doctor-photo"
              onError={(e) => { e.target.src = "/images/DR%20SUJAYA.jpeg"; }}
            />
            <div className="mob-doc-badge-floating">
              <Award size={15} />
              <span>18+ Years Senior Practice</span>
            </div>
          </div>

          <div className="mob-doctor-header">
            <div className="mob-doc-chip">
              <CheckCircle2 size={13} />
              <span>Senior Consultant Dermatologist</span>
            </div>
            <h2 className="mob-doctor-name">Dr. (Mrs.) Sujay M</h2>
            <div className="mob-doctor-creds">MBBS, DDVL (Dermatology)</div>
            <div className="mob-doctor-role">
              Bangalore Medical College Alumnus (2005)
            </div>
          </div>

          {/* 4 Credential Bullets in Frosted Pills */}
          <div className="mob-doctor-bullets">
            <div className="mob-doc-bullet">
              <Award size={18} className="mob-bullet-icon" />
              <div>
                <strong>18+ Years Clinical Experience</strong>
                <span>Senior consultant in South Bengaluru</span>
              </div>
            </div>

            <div className="mob-doc-bullet">
              <ShieldCheck size={18} className="mob-bullet-icon" />
              <div>
                <strong>MBBS, DDVL Certified</strong>
                <span>Postgraduate from Bangalore Medical College</span>
              </div>
            </div>

            <div className="mob-doc-bullet">
              <Sparkles size={18} className="mob-bullet-icon" />
              <div>
                <strong>Advanced Laser Expertise</strong>
                <span>Specialized in diode lasers and scar revision</span>
              </div>
            </div>

            <div className="mob-doc-bullet">
              <UserCheck size={18} className="mob-bullet-icon" />
              <div>
                <strong>Patient-First Ethos</strong>
                <span>Zero commercial packages; root-cause diagnosis</span>
              </div>
            </div>
          </div>

          <button
            className="mob-btn-primary"
            onClick={onOpenBooking}
            style={{ width: '100%', marginTop: '16px' }}
          >
            <Calendar size={18} />
            <span>Consult with Dr. Sujay M</span>
            <ArrowRight size={18} />
          </button>

          {/* Doctor Quote Card */}
          <div className="mob-doctor-quote-box">
            <p className="mob-doc-quote-text">
              “My philosophy is root-cause medical care first. We personalize every protocol to restore skin health and confidence without commercial pressure.”
            </p>
            <div className="mob-doc-quote-author">— Dr. Sujay M</div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 6: PATIENT REVIEWS (All 14 Google Verified Reviews)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-reviews-section">
        <div className="mob-reviews-top-row">
          <div>
            <h2 className="mob-section-title" style={{ margin: 0 }}>Patient Stories</h2>
            <div className="mob-reviews-counter">
              Review {reviewIdx + 1} of {PATIENT_STORIES.length} · Swipe to explore
            </div>
          </div>
          <div className="mob-reviews-nav-arrows">
            <button
              onClick={() => setReviewIdx((prev) => (prev === 0 ? PATIENT_STORIES.length - 1 : prev - 1))}
              className="mob-rev-nav-btn"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setReviewIdx((prev) => (prev + 1) % PATIENT_STORIES.length)}
              className="mob-rev-nav-btn"
              aria-label="Next review"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Google Score Banner */}
        <div className="mob-google-score-card">
          <div className="mob-g-logo-circle">
            <span style={{ fontWeight: 800, color: '#4285F4', fontSize: '18px' }}>G</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="mob-g-num">5.0 / 5.0</span>
              <div className="mob-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C5A174" color="#C5A174" />
                ))}
              </div>
            </div>
            <div className="mob-g-label">500+ Verified Patient Reviews on Google Maps</div>
          </div>
        </div>

        {/* Active Review Story Card with Touch Swiping */}
        <div
          className="mob-patient-story-card"
          onTouchStart={handleReviewTouchStart}
          onTouchEnd={handleReviewTouchEnd}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', gap: '8px', flexWrap: 'wrap' }}>
            <div className="mob-story-stars">
              {[...Array(PATIENT_STORIES[reviewIdx].stars)].map((_, i) => (
                <Star key={i} size={15} fill="#C5A174" color="#C5A174" />
              ))}
            </div>
            {PATIENT_STORIES[reviewIdx].treatment && (
              <span className="mob-story-treatment-pill">
                {PATIENT_STORIES[reviewIdx].treatment}
              </span>
            )}
          </div>
          <p className="mob-story-text">
            “{PATIENT_STORIES[reviewIdx].text}”
          </p>
          <div className="mob-story-author-row">
            <div className="mob-story-avatar-initial">
              {PATIENT_STORIES[reviewIdx].name.charAt(0)}
            </div>
            <div style={{ flexGrow: 1 }}>
              <div className="mob-story-author-name">{PATIENT_STORIES[reviewIdx].name}</div>
              <div className="mob-story-badge">
                <CheckCircle2 size={12} color="#16A34A" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                <span>{PATIENT_STORIES[reviewIdx].role}</span>
              </div>
            </div>
            <div className="mob-g-mini-badge" title="Google Verified">
              G
            </div>
          </div>
        </div>

        {/* Interactive Dots Pagination */}
        <div className="mob-reviews-dots-row">
          {PATIENT_STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setReviewIdx(i)}
              className={`mob-review-dot ${reviewIdx === i ? 'active' : ''}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 7: CONSULTATION JOURNEY (Liquid Glass)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-journey-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Consultation Journey</h2>
          <p className="mob-section-subtitle">
            A simple, seamless process to get you the right dermatological care.
          </p>
        </div>

        <div className="mob-journey-steps-list">
          <div className="mob-journey-step-card">
            <div className="mob-j-badge">01</div>
            <div className="mob-j-info">
              <h3 className="mob-j-title">Book Appointment</h3>
              <p className="mob-j-desc">Online via smart calendar or instant clinic call</p>
            </div>
          </div>

          <div className="mob-journey-step-card">
            <div className="mob-j-badge">02</div>
            <div className="mob-j-info">
              <h3 className="mob-j-title">Consult Dr. Sujay M</h3>
              <p className="mob-j-desc">Detailed dermoscopic skin assessment and root-cause analysis</p>
            </div>
          </div>

          <div className="mob-journey-step-card">
            <div className="mob-j-badge">03</div>
            <div className="mob-j-info">
              <h3 className="mob-j-title">Personalised Plan</h3>
              <p className="mob-j-desc">Tailored medical prescription and procedure plan</p>
            </div>
          </div>

          <div className="mob-journey-step-card">
            <div className="mob-j-badge">04</div>
            <div className="mob-j-info">
              <h3 className="mob-j-title">Begin Your Recovery</h3>
              <p className="mob-j-desc">Safe procedure delivery with dedicated aftercare follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 8: CLINIC LOCATION & DIRECTIONS (Liquid Glass)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-location-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Our Clinic Location</h2>
          <p className="mob-section-subtitle">
            Conveniently located in South Bengaluru, 2 minutes from Yelachenahalli Metro Station.
          </p>
        </div>

        <div className="mob-location-card">
          <img
            src="/slide-img/98874dd1eae0b34c8798464c6c3f1c7d.jpg"
            alt="Medicare Skin and Cosmetic Clinic Reception"
            className="mob-clinic-facade-img"
          />

          <div className="mob-location-details">
            <h3 className="mob-clinic-name">{CLINIC_INFO.name}</h3>
            <p className="mob-clinic-address">
              {CLINIC_INFO.address}
            </p>

            <div className="mob-clinic-timings">
              <Clock size={16} color="#942876" />
              <span>{CLINIC_INFO.hours}</span>
            </div>

            <a
              href={CLINIC_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mob-btn-secondary"
              style={{ marginTop: '14px', width: '100%', justifyContent: 'center' }}
            >
              <MapPin size={17} />
              <span>Get Directions on Google Maps →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 9: JOURNAL / BLOG (Liquid Glass)
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-blog-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Skin Journal</h2>
          <p className="mob-section-subtitle">
            Dermatologist insights and clinical skincare advice from Dr. Sujay M.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mob-blog-filter-pills" style={{ overflowX: 'auto', display: 'flex', gap: '8px', paddingBottom: '4px' }}>
          {[
            { id: 'all', label: 'All' },
            { id: 'beauty', label: '✨ Beauty' },
            { id: 'laser', label: 'Laser' },
            { id: 'aesthetics', label: 'Glow' },
            { id: 'skin', label: 'Skin' },
            { id: 'hair', label: 'Hair' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveBlogTab(item.id)}
              className={`mob-filter-pill ${activeBlogTab === item.id ? 'active' : ''}`}
              style={{ flexShrink: 0 }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Blog Article Cards */}
        <div className="mob-blog-cards-list">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="mob-blog-card"
              onClick={() => onTabChange && onTabChange('blog')}
            >
              <img src={article.image} alt={article.title} className="mob-blog-thumb" loading="lazy" />
              <div className="mob-blog-body">
                <span
                  className="mob-blog-tag"
                  style={{
                    background: article.tag === 'beauty' ? '#153F39' : 'rgba(21, 63, 57, 0.08)',
                    color: article.tag === 'beauty' ? '#FFFFFF' : '#153F39',
                    border: article.tag === 'beauty' ? '1px solid #C5A174' : 'none'
                  }}
                >
                  {article.category}
                </span>
                <h3 className="mob-blog-title">{article.title}</h3>
                <div className="mob-blog-meta">
                  {article.date} · {article.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Journal CTA */}
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <button
            onClick={() => onTabChange && onTabChange('blog')}
            className="mob-btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>View All Articles in Skin Journal →</span>
          </button>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SCREEN 10: FAQS ACCORDION
      ──────────────────────────────────────────────────────────── */}
      <section className="mob-faqs-section">
        <div className="mob-section-header">
          <h2 className="mob-section-title">Frequently Asked Questions</h2>
          <p className="mob-section-subtitle">
            Common questions answered by Dr. Sujay M and our clinical team.
          </p>
        </div>

        <div className="mob-faqs-list">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`mob-faq-item ${activeFaq === idx ? 'expanded' : ''}`}
            >
              <button
                className="mob-faq-btn"
                onClick={() => toggleFaq(idx)}
              >
                <span>{faq.q}</span>
                {activeFaq === idx ? (
                  <Minus size={18} color="#942876" />
                ) : (
                  <Plus size={18} color="#942876" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="mob-faq-content">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
