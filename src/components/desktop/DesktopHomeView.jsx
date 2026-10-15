import React, { useState, useEffect } from 'react';
import {
  Sparkles, Calendar, Phone, Award, Star, MapPin, ChevronRight,
  ShieldCheck, Check, ArrowRight, Clock, ChevronLeft, UserCheck,
  Compass, Calculator, FileText, CheckCircle2, Play, Layers, Mail,
  Send, ExternalLink, HelpCircle, HeartHandshake, CheckCircle,
  Sun, Heart, Zap, Stethoscope
} from 'lucide-react';
import { CLINIC_INFO, GOOGLE_REVIEWS } from '../../data/clinicData';

// ── Continuous Condition Ticker Items (From Authentic Live Site) ────────────
const TICKER_ITEMS = [
  'Pimples & Active Acne',
  'Acne Scar Treatment',
  'Wrinkles & Anti-Ageing',
  'Melasma & Pigmentation',
  'Hairfall & Scalp PRP/GFC',
  'Laser Hair Removal',
  'Clinical Chemical Peels',
  'Dermal Fillers & Anti-Wrinkle Injections',
  'Mole & Wart Removal',
  'Vitiligo Surgery'
];

// ── Screen 3: Treatment Categories (From Image 3 Blueprint) ─────────────────
const TREATMENT_CATEGORIES = [
  {
    id: 'skin',
    title: 'Skin Treatments',
    desc: 'Acne, pigmentation, skin renewal and more',
    image: '/images/imageye___-_imgi_13_Acne-Treatment.webp',
    tags: ['Acne & Scars', 'Pigmentation', 'Melasma', 'Skin Glow'],
    tab: 'skin'
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    desc: 'Hair fall, thinning, scalp disorders',
    image: '/images/imageye___-_imgi_14_Hair-Treatment.webp',
    tags: ['Hair Fall', 'PRP / GFC', 'Dandruff', 'Scalp Health'],
    tab: 'hair'
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    desc: 'Laser hair reduction, scar treatment',
    image: '/images/imageye___-_imgi_12_Laser-Hair-Removal.webp',
    tags: ['Diode Hair Reduction', 'CO2 Resurfacing', 'Tattoo Removal'],
    tab: 'laser'
  },
  {
    id: 'aesthetics',
    title: 'Aesthetics & Anti-Ageing',
    desc: 'Anti-ageing, skin rejuvenation, injectables',
    image: '/images/imageye___-_imgi_8_Botox-and-Fillers-1.webp',
    tags: ['Botox / Fillers', 'Skin Tightening', 'Thread Lift'],
    tab: 'cosmetic'
  },
  {
    id: 'medical-derm',
    title: 'Medical Dermatology',
    desc: 'Eczema, psoriasis, allergies and more',
    image: '/images/imageye___-_imgi_23_Allergies.webp',
    tags: ['Skin Allergies', 'Infections', 'Vitiligo', 'Psoriasis'],
    tab: 'skin'
  },
  {
    id: 'cosmetic-concerns',
    title: 'Cosmetic Concerns',
    desc: 'Pigmentation, fine lines, uneven skin tone',
    image: '/images/imageye___-_imgi_7_Chemical-Peel.webp',
    tags: ['Chemical Peels', 'Dark Circles', 'Tan Removal', 'Radiance'],
    tab: 'cosmetic'
  }
];

// ── Screen 4: Signature Treatments Row (From Image 3 Blueprint) ─────────────
const SIGNATURE_TREATMENTS = [
  {
    id: 'acne-scar-treatment',
    title: 'Acne Scars',
    desc: 'Advanced treatments for smoother skin',
    image: '/images/imageye___-_imgi_11_acne-scar-treatment.webp',
    tab: 'skin'
  },
  {
    id: 'chemical-peels',
    title: 'Pigmentation',
    desc: 'Even skin tone, brighter complexion',
    image: '/images/imageye___-_imgi_7_Chemical-Peel.webp',
    tab: 'skin'
  },
  {
    id: 'hair-fall-treatment',
    title: 'Hair Loss',
    desc: 'Comprehensive hair restoration',
    image: '/images/imageye___-_imgi_31_Hair-Fall.webp',
    tab: 'hair'
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Reduction',
    desc: 'Safe, effective long-term results',
    image: '/images/imageye___-_imgi_12_Laser-Hair-Removal.webp',
    tab: 'laser'
  },
  {
    id: 'dermal-fillers',
    title: 'Anti-Wrinkle Care',
    desc: 'Look youthful, natural results',
    image: '/images/imageye___-_imgi_8_Botox-and-Fillers-1.webp',
    tab: 'cosmetic'
  },
  {
    id: 'skin-tightening',
    title: 'Chemical Peels',
    desc: 'Renew and rejuvenate skin',
    image: '/images/imageye___-_imgi_9_skin-tightening-01.webp',
    tab: 'cosmetic'
  }
];

// ── Screen 6: Verified Patient Reviews (From Image 3 Blueprint) ─────────────
const BLUEPRINT_REVIEWS = [
  {
    id: 1,
    author: 'Priya S',
    source: 'Google Review',
    rating: 5,
    text: 'Dr. Sujay is extremely patient and explains everything in detail. My skin has improved so much. Highly recommend Medicare Skin!'
  },
  {
    id: 2,
    author: 'Rahul M',
    source: 'Google Review',
    rating: 5,
    text: 'Very professional and friendly clinic. The laser treatment results have been amazing. Clean and modern facilities.'
  },
  {
    id: 3,
    author: 'Ananya R',
    source: 'Google Review',
    rating: 5,
    text: 'Best dermatologist in South Bengaluru. Dr. Sujay truly listens and suggests the right treatment. Excellent experience!'
  }
];

// ── Screen 7: Consultation Journey Steps ────────────────────────────────────
const JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Book Appointment',
    desc: 'Online or call us directly'
  },
  {
    number: '02',
    title: 'Consult with Dr. Sujay M',
    desc: 'Detailed clinical evaluation'
  },
  {
    number: '03',
    title: 'Personalised Treatment Plan',
    desc: 'Tailored to your unique needs'
  },
  {
    number: '04',
    title: 'Begin Your Journey',
    desc: 'Expert care & regular follow-up'
  }
];

// ── Screen 8: Skin Journal Articles (From Image 3 Blueprint) ────────────────
const SKIN_JOURNAL_ARTICLES = [
  {
    id: 'acne-scars-expert-options',
    category: 'SKIN CARE',
    title: 'How to Treat Acne Scars: Expert Options That Work',
    date: 'Apr 10, 2024',
    readTime: '5 min read',
    image: '/images/imageye___-_imgi_11_acne-scar-treatment.webp',
    excerpt: 'Explore dermatological options from subcision to fractional RF microneedling and lasers for smoother skin.'
  },
  {
    id: 'causes-hair-fall',
    category: 'HAIR CARE',
    title: 'Common Causes of Hair Fall and How to Manage It',
    date: 'Mar 28, 2024',
    readTime: '4 min read',
    image: '/images/imageye___-_imgi_31_Hair-Fall.webp',
    excerpt: 'Understanding nutritional, hormonal, and scalp factors behind hair thinning and growth factor therapy options.'
  },
  {
    id: 'chemical-peels-guide',
    category: 'AESTHETICS',
    title: 'Chemical Peels: Benefits, Process and What to Expect',
    date: 'Mar 15, 2024',
    readTime: '4 min read',
    image: '/images/imageye___-_imgi_7_Chemical-Peel.webp',
    excerpt: 'How medical-grade exfoliating peels gently renew skin, soften hyperpigmentation, and restore radiant glow.'
  }
];

// ── Feature 1: Clinical Concern Matcher Diagnostic Data ──────────────────────
const MATCHER_DATA = {
  'acne-scars': {
    title: 'Acne Scars & Pitted Texture',
    badge: 'Gold Standard for Pitted Depth',
    recommendation: 'Fractional RF Microneedling + Subcision & Growth Factors',
    sessions: '3 to 5 Sessions (spaced 4-6 weeks apart)',
    timeline: 'Noticeable collagen smoothing in 4 to 8 weeks',
    clinicalObservation: 'Subcision mechanically frees deep fibrous tethers, while fractional radiofrequency stimulates dense new collagen synthesis for long-term dermal elevation.',
    tab: 'skin'
  },
  'pigmentation': {
    title: 'Melasma, Sun Spots & Hyper-Pigmentation',
    badge: 'Clinical Melanin Clearance',
    recommendation: 'Targeted Medical Chemical Peels & Barrier Repair Regimen',
    sessions: '4 to 6 Sessions',
    timeline: 'Gradual, uniform brightening from session 2',
    clinicalObservation: 'Medical-grade exfoliating acids gently accelerate epidermal turnover to clear melanin clusters without triggering inflammatory rebound hyperpigmentation.',
    tab: 'skin'
  },
  'hair-loss': {
    title: 'Excessive Hair Fall & Scalp Thinning',
    badge: 'Autologous Follicular Activation',
    recommendation: 'Autologous GFC (Growth Factor Concentrate) & Scalp PRP',
    sessions: '4 to 6 Monthly Sessions',
    timeline: 'Shedding stabilizes in 3 weeks; new root density in 10-12 weeks',
    clinicalObservation: 'High concentrations of autologous PDGF and VEGF revitalize dormant miniaturized hair follicles, extending the anagen (growth) phase of your hair cycle.',
    tab: 'hair'
  },
  'laser-hair': {
    title: 'Unwanted Facial or Body Hair',
    badge: 'US-FDA Approved Safety',
    recommendation: 'Triple-Wavelength Diode Laser with Continuous Contact Ice-Cooling',
    sessions: '6 to 8 Sessions',
    timeline: '70% reduction within 3 sessions; smooth, long-term freedom',
    clinicalObservation: 'Selective photothermolysis destroys follicular germ cells safely across Indian skin phototypes (Fitzpatrick IV-V) while integrated sapphire chill tips prevent surface thermal injury.',
    tab: 'laser'
  },
  'anti-aging': {
    title: 'Fine Lines, Wrinkles & Volume Depletion',
    badge: 'Natural Facial Sculpting',
    recommendation: 'Hyaluronic Acid Dermal Fillers & Anti-Wrinkle Injections',
    sessions: 'Single In-Clinic Session (12-18 Month Longevity)',
    timeline: 'Immediate contour elevation & smoothed dynamic lines',
    clinicalObservation: 'Precision micro-droplet injection by Dr. Sujay M restores natural anatomical volume and softens hyperdynamic facial creases while preserving natural expression.',
    tab: 'cosmetic'
  },
  'medical-derm': {
    title: 'Skin Allergies, Eczema, Psoriasis & Vitiligo',
    badge: '18+ Years Clinical Expertise',
    recommendation: 'Dermoscopic Diagnostic Evaluation & Structured Medical Therapy',
    sessions: 'Tailored Clinical Protocol & Follow-up Checks',
    timeline: 'Rapid symptomatic itching relief within 48-72 hours',
    clinicalObservation: 'Dr. Sujay M performs root-cause dermatological evaluation to address underlying immune and environmental triggers with evidence-based medical regimens.',
    tab: 'treatments'
  }
};

// ── Feature 2: Authentic Before & After Patient Transformations ──────────────
const BEFORE_AFTER_CASES = [
  {
    id: 'acne-case',
    category: 'Skin',
    concern: 'Severe Rolling & Boxcar Acne Scars',
    beforeImg: '/images/imageye___-_imgi_13_Acne-Treatment.webp',
    afterImg: '/images/imageye___-_imgi_11_acne-scar-treatment.webp',
    protocol: 'Subcision + Fractional Laser Resurfacing & PRP',
    timeline: '4 Sessions · 12 Weeks',
    outcome: '85% Scar Depth Elevation & Smoother Surface',
    doctorNote: 'Patient presented with stubborn fibrotic scars. Combination subcision and fractional resurfacing released dermal tethers with remarkable textural improvement.'
  },
  {
    id: 'hair-case',
    category: 'Hair',
    concern: 'Crown Thinning & Androgenetic Alopecia Grade 2',
    beforeImg: '/images/imageye___-_imgi_31_Hair-Fall.webp',
    afterImg: '/images/imageye___-_imgi_14_Hair-Treatment.webp',
    protocol: 'Autologous GFC (Growth Factor Concentrate) Therapy',
    timeline: '4 Sessions · 16 Weeks',
    outcome: 'Visible Follicle Density & Scalp Coverage',
    doctorNote: 'Noticeable reduction in hair pull test shedding after session 2; robust active root proliferation across the vertex.'
  },
  {
    id: 'peel-case',
    category: 'Cosmetic',
    concern: 'Hormonal Melasma & Epidermal Sun Damage',
    beforeImg: '/images/imageye___-_imgi_23_Allergies.webp',
    afterImg: '/images/imageye___-_imgi_7_Chemical-Peel.webp',
    protocol: 'Medical-Grade Chemical Peels & Barrier Repair',
    timeline: '3 Sessions · 6 Weeks',
    outcome: '90% Melanin Dispersion & Luminous Glass Tone',
    doctorNote: 'Even pigment dispersal achieved without any post-inflammatory rebound hyperpigmentation. Skin barrier noticeably strengthened.'
  },
  {
    id: 'laser-case',
    category: 'Laser',
    concern: 'Persistent Facial & Chin Hirsutism',
    beforeImg: '/images/imageye___-_imgi_26_Unwanted-Facial-Hair.webp',
    afterImg: '/images/imageye___-_imgi_12_Laser-Hair-Removal.webp',
    protocol: 'Triple-Wavelength Diode Laser with Ice-Cooling',
    timeline: '6 Sessions · 24 Weeks',
    outcome: '95% Permanent Hair Reduction',
    doctorNote: 'Completely painless sessions with sapphire contact chilling; zero ingrown hairs or follicular irritation reported.'
  }
];

// ── Full-Width Majestic Hero Carousel Slides (5 Verified High-Resolution Suites) ──
const HERO_SLIDES_DATA = [
  {
    id: 'clinic-welcome',
    image: '/images/hero_slide_1_welcome.jpg',
    eyebrow: 'WELCOME TO MEDICARE SKIN · DR. SUJAY M (MBBS, DDVL)',
    title: 'Dermatologist-Led Skin, Hair & Laser Care',
    subtitle: 'Comprehensive, evidence-based dermatological therapies in South Bengaluru backed by 18+ years of clinical excellence.',
    badgeHighlight: '18+ Years Clinical Excellence',
    primaryBtn: { text: 'Book Consultation', action: 'book' },
    secondaryBtn: { text: 'Call +91 92428 55707', action: 'call' }
  },
  {
    id: 'acne-reversal',
    image: '/images/hero_slide_2_acne.jpg',
    eyebrow: 'MNRF · SUBCISION · CLINICAL PEELS',
    title: 'Noticeable Acne Scar & Pigmentation Reversal',
    subtitle: 'Doctor-supervised multi-modal scar revision protocols engineered for stubborn rolling scars, pitted blemishes, and deep melasma.',
    badgeHighlight: 'Noticeable Texture Revival',
    primaryBtn: { text: 'Book Acne Assessment', action: 'book' },
    secondaryBtn: { text: 'View Scar Treatments', action: 'tab:skin' }
  },
  {
    id: 'hair-prp',
    image: '/images/hero_slide_3_hair.jpg',
    eyebrow: 'SPECIALISED TRICHOLOGY & SCALP CLINIC',
    title: 'Advanced Hair Fall Control & GFC Therapy',
    subtitle: 'High-concentration Growth Factor Therapy and precision trichoscopy to revive dormant follicles and stimulate natural regrowth.',
    badgeHighlight: 'Doctor-Administered GFC & PRP',
    primaryBtn: { text: 'Consult for Hair Loss', action: 'book' },
    secondaryBtn: { text: 'Explore Hair Care', action: 'tab:hair' }
  },
  {
    id: 'laser-hair',
    image: '/images/hero_slide_4_laser.jpg',
    eyebrow: 'PAINLESS SAPPHIRE CHILLING · ZERO DOWNTIME',
    title: 'Triple-Wavelength Laser Hair Reduction',
    subtitle: 'Safe, effective, and doctor-calibrated diode laser technology specially tailored for South Asian and Indian skin types.',
    badgeHighlight: 'Safe for Indian Skin',
    primaryBtn: { text: 'Book Laser Session', action: 'book' },
    secondaryBtn: { text: 'Explore Laser Tech', action: 'tab:laser' }
  },
  {
    id: 'clinic-facility',
    image: '/images/hero_slide_5_results.jpg',
    eyebrow: '10,000+ SATISFIED PATIENTS · SOUTH BENGALURU',
    title: 'Trusted Dermatological Care & Proven Results',
    subtitle: 'Experience doctor-guided skin and hair transformations with personalised treatment plans and state-of-the-art clinical safety.',
    badgeHighlight: '10,000+ Happy Patients',
    primaryBtn: { text: 'Schedule Assessment', action: 'book' },
    secondaryBtn: { text: 'View Clinic Location', action: 'tab:contact' }
  }
];


export default function DesktopHomeView({
  onOpenBooking,
  onOpenNavigator,
  onOpenCostPlanner,
  onSelectTreatment,
  onTabChange
}) {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    issue: ''
  });
  const [inquirySent, setInquirySent] = useState(false);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');
  const [matcherConcern, setMatcherConcern] = useState('acne-scars');
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState('acne-case');
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const signatureScrollRef = React.useRef(null);
  const reviewsScrollRef = React.useRef(null);

  // Auto-advance hero slider every 5.5s unless hovered
  useEffect(() => {
    if (isHeroHovered) return;
    const interval = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % HERO_SLIDES_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHeroHovered]);

  const handleHeroPrev = () => {
    setHeroSlideIdx((prev) => (prev - 1 + HERO_SLIDES_DATA.length) % HERO_SLIDES_DATA.length);
  };

  const handleHeroNext = () => {
    setHeroSlideIdx((prev) => (prev + 1) % HERO_SLIDES_DATA.length);
  };

  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const handleHeroTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleHeroTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleHeroTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleHeroNext();
    } else if (diff < -45) {
      handleHeroPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const scrollSignature = (direction) => {
    if (signatureScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      signatureScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollReviews = (direction) => {
    if (reviewsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      reviewsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.name.trim() || !inquiryForm.phone.trim()) return;
    setInquirySent(true);
  };

  const navigateToTab = (tabId) => {
    if (onTabChange) onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="desk-blueprint-home">
      {/* ───────────────────────────────────────────────────────────
          1. DESKTOP HOME / HERO (Liquid Glass & Luxury Aesthetics)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-hero-section">
        <div
          className="desk-hero-full-slider"
          onMouseEnter={() => setIsHeroHovered(true)}
          onMouseLeave={() => setIsHeroHovered(false)}
          onTouchStart={handleHeroTouchStart}
          onTouchMove={handleHeroTouchMove}
          onTouchEnd={handleHeroTouchEnd}
        >
          {HERO_SLIDES_DATA.map((slide, idx) => {
            const isActive = idx === heroSlideIdx;
            return (
              <div
                key={slide.id}
                className={`desk-hero-slide-pane ${isActive ? 'active' : ''}`}
              >
                {/* Full-width majestic photographic background */}
                <div className="desk-hero-slide-bg-frame">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="desk-hero-bg-img"
                  />
                  {/* Luminous Liquid Glass Scrim */}
                  <div className="desk-hero-scrim-layer" />
                </div>

                {/* Clean Containerless Hero Typography Overlay */}
                <div className="desk-hero-slide-container">
                  <div className="desk-hero-slide-content">
                    <div className="desk-slide-eyebrow-row">
                      <span className="desk-eyebrow-badge">
                        {slide.eyebrow}
                      </span>
                      <span className="desk-slide-highlight-pill">
                        {slide.badgeHighlight}
                      </span>
                    </div>

                    <h1 className="desk-hero-slide-title">
                      {slide.title}
                    </h1>

                    <p className="desk-hero-slide-sub">
                      {slide.subtitle}
                    </p>

                    <div className="desk-hero-slide-actions">
                      <button
                        className="desk-btn-primary"
                        onClick={slide.primaryBtn.action === 'book' ? onOpenBooking : () => navigateToTab(slide.primaryBtn.action.replace('tab:', ''))}
                        id="hero-book-consult-btn"
                      >
                        <Calendar size={18} />
                        <span>{slide.primaryBtn.text}</span>
                        <ArrowRight size={17} />
                      </button>

                      {slide.secondaryBtn.action === 'call' ? (
                        <a
                          href={`tel:${CLINIC_INFO.rawPhone}`}
                          className="desk-btn-call"
                          id="hero-call-btn"
                        >
                          <Phone size={16} />
                          <span>{slide.secondaryBtn.text}</span>
                        </a>
                      ) : (
                        <button
                          className="desk-btn-call"
                          onClick={() => navigateToTab(slide.secondaryBtn.action.replace('tab:', ''))}
                        >
                          <span>{slide.secondaryBtn.text}</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slider Left & Right Chevrons */}
          <button
            className="desk-hero-nav-arrow prev"
            onClick={handleHeroPrev}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="desk-hero-nav-arrow next"
            onClick={handleHeroNext}
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicator Dots with Progress */}
          <div className="desk-hero-dots-row">
            {HERO_SLIDES_DATA.map((s, idx) => (
              <button
                key={s.id}
                className={`desk-hero-dot-btn ${idx === heroSlideIdx ? 'active' : ''}`}
                onClick={() => setHeroSlideIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="dot-fill" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. TREATMENT CATEGORIES GRID (Blueprint Screen 3)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-categories-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">CLINICAL DIRECTORY</span>
              <h2 className="desk-section-title">Our Treatment Categories</h2>
              <p className="desk-section-sub">
                Comprehensive care for all your skin, hair and aesthetic goals under Dr. Sujay M.
              </p>
            </div>
            <button
              className="desk-link-btn"
              onClick={() => navigateToTab('treatments')}
            >
              <span>View All Treatments</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="desk-filter-tabs-bar">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'skin', label: 'Skin Care & Scars' },
              { id: 'hair', label: 'Hair Restoration & PRP' },
              { id: 'laser', label: 'Laser Technology' },
              { id: 'cosmetic', label: 'Aesthetics & Anti-Ageing' }
            ].map(tab => (
              <button
                key={tab.id}
                className={`desk-glass-tab-btn ${selectedCategoryTab === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedCategoryTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="desk-categories-grid">
            {(selectedCategoryTab === 'all'
              ? TREATMENT_CATEGORIES
              : TREATMENT_CATEGORIES.filter(c => c.tab === selectedCategoryTab)
            ).map((cat) => (
              <div
                key={cat.id}
                className="desk-category-card"
                onClick={() => navigateToTab(cat.tab)}
              >
                <div className="desk-cat-img-box">
                  <img src={cat.image} alt={cat.title} />
                  <span className="desk-cat-arrow-btn">
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="desk-cat-info">
                  <h3 className="desk-cat-title">{cat.title}</h3>
                  <p className="desk-cat-desc">{cat.desc}</p>
                  <div className="desk-cat-tags">
                    {cat.tags.map((t, idx) => (
                      <span key={idx} className="desk-cat-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Clinical Specialisations Statement Box (WordPress Content) */}
          <div className="desk-speciality-statement-box">
            <div className="desk-speciality-badge">
              <Sparkles size={14} color="#D4AF37" />
              <span>FULL CLINICAL SPECIALISATIONS</span>
            </div>
            <h3 className="desk-speciality-box-title">What We Specialise in Treating</h3>
            <p className="desk-speciality-box-desc">
              We specialise in treating your skin allergies, skin infections (bacterial, fungal, viral), acne, scars, hair loss, hair thinning, premature ageing, wrinkles, saggy skin, cellulite, hair fall, balding, dull skin, dark circles, freckles, tan, melasma, birthmarks, stretch marks, warts, moles, laser treatment for unwanted body hair, dermal fillers / anti-wrinkle injections, fillers, thread lift &amp; many more.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          NEW FEATURE: 60-SECOND SKIN & HAIR CONCERN MATCHER (Interactive Clinical Tool)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-matcher-section">
        <div className="desk-container">
          <div className="desk-matcher-glass-card">
            <div className="desk-matcher-top-row">
              <div>
                <span className="desk-section-badge">INTERACTIVE DIAGNOSTIC MATCHER</span>
                <h2 className="desk-matcher-heading">
                  Find the Right Treatment for Your Skin &amp; Hair in 60 Seconds
                </h2>
                <p className="desk-matcher-desc">
                  Select your primary concern below to view Dr. Sujay M's clinically recommended therapy, session timeline, and expected outcomes.
                </p>
              </div>
              <button
                className="desk-btn-call"
                onClick={onOpenNavigator}
                title="Open Complete 6-Step Clinical Assessment"
              >
                <Compass size={16} />
                <span>Full Diagnosis Tool</span>
              </button>
            </div>

            {/* Concern Selector Glass Pills */}
            <div className="desk-matcher-selector-grid">
              {[
                { id: 'acne-scars', icon: Sparkles, label: 'Acne Scars & Texture' },
                { id: 'pigmentation', icon: Sun, label: 'Melasma & Pigmentation' },
                { id: 'hair-loss', icon: Heart, label: 'Hair Fall & Scalp Thinning' },
                { id: 'laser-hair', icon: Zap, label: 'Laser Hair Reduction' },
                { id: 'anti-aging', icon: Award, label: 'Anti-Ageing & Fillers' },
                { id: 'medical-derm', icon: Stethoscope, label: 'Medical Dermatology' }
              ].map(item => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`desk-matcher-choice-btn ${matcherConcern === item.id ? 'active' : ''}`}
                    onClick={() => setMatcherConcern(item.id)}
                  >
                    <span className="matcher-btn-icon">
                      <IconComponent size={16} />
                    </span>
                    <span className="matcher-btn-label">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Matched Result Card */}
            <div className="desk-matcher-result-panel">
              <div className="desk-matcher-result-head">
                <span className="desk-matcher-res-badge">
                  {MATCHER_DATA[matcherConcern].badge}
                </span>
                <span className="desk-matcher-protocol-badge">
                  <CheckCircle2 size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  Doctor-Supervised Protocol · Dr. Sujay M (MBBS, DDVL)
                </span>
              </div>

              <h3 className="desk-matcher-res-title">
                {MATCHER_DATA[matcherConcern].title}
              </h3>

              <div className="desk-matcher-details-grid">
                <div className="desk-matcher-col">
                  <span className="matcher-col-label">Recommended Clinical Procedure:</span>
                  <strong className="matcher-col-val highlight">
                    {MATCHER_DATA[matcherConcern].recommendation}
                  </strong>
                </div>

                <div className="desk-matcher-col">
                  <span className="matcher-col-label">Typical Sessions:</span>
                  <strong className="matcher-col-val">
                    {MATCHER_DATA[matcherConcern].sessions}
                  </strong>
                </div>

                <div className="desk-matcher-col">
                  <span className="matcher-col-label">Expected Results Timeline:</span>
                  <strong className="matcher-col-val">
                    {MATCHER_DATA[matcherConcern].timeline}
                  </strong>
                </div>
              </div>

              <div className="desk-matcher-observation-box">
                <span className="obs-label">Clinical Doctor Observation:</span>
                <p className="obs-text">
                  “{MATCHER_DATA[matcherConcern].clinicalObservation}”
                </p>
              </div>

              <div className="desk-matcher-actions-bar">
                <button
                  className="desk-btn-primary"
                  onClick={onOpenBooking}
                  id="matcher-book-btn"
                >
                  <Calendar size={18} />
                  <span>Book Consultation for {MATCHER_DATA[matcherConcern].title}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="desk-btn-call"
                  onClick={() => navigateToTab(MATCHER_DATA[matcherConcern].tab)}
                  title="Explore specific department page"
                >
                  <span>Explore Full Procedure Details</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ───────────────────────────────────────────────────────────
          3. SIGNATURE TREATMENTS ROW (Blueprint Screen 4 with Swipe / Scroll)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-signature-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">POPULAR PROCEDURES</span>
              <h2 className="desk-section-title">Our Signature Treatments</h2>
              <p className="desk-section-sub">
                Highlight popular and high-converting treatments with clear visuals and clinically validated outcomes.
              </p>
            </div>
            <div className="desk-head-actions-row">
              <div className="desk-scroll-controls">
                <button
                  className="desk-glass-scroll-btn"
                  onClick={() => scrollSignature('left')}
                  title="Scroll Left"
                  aria-label="Previous Treatment"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="desk-glass-scroll-btn"
                  onClick={() => scrollSignature('right')}
                  title="Scroll Right"
                  aria-label="Next Treatment"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <button
                className="desk-link-btn"
                onClick={() => navigateToTab('treatments')}
              >
                <span>View All Treatments</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="desk-signature-grid swipeable-track" ref={signatureScrollRef}>
            {SIGNATURE_TREATMENTS.map((item) => (
              <div
                key={item.id}
                className="desk-signature-card"
                onClick={() => navigateToTab(item.tab)}
              >
                <div className="desk-sig-thumb-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4 className="desk-sig-title">{item.title}</h4>
                <p className="desk-sig-desc">{item.desc}</p>
                <span className="desk-sig-link">
                  <span>Learn More</span>
                  <ChevronRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          NEW FEATURE: REAL PATIENT TRANSFORMATIONS (BEFORE & AFTER SHOWCASE)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-before-after-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">CLINICAL DOCUMENTATION</span>
              <h2 className="desk-section-title">Real Patient Transformations</h2>
              <p className="desk-section-sub">
                Dermatologist-monitored outcomes achieved at Medicare Skin &amp; Cosmetic Clinic, South Bengaluru.
              </p>
            </div>
            <button
              className="desk-link-btn"
              onClick={() => navigateToTab('gallery')}
            >
              <span>View Full Clinical Gallery</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Transformation Case Selector Tabs */}
          <div className="desk-filter-tabs-bar">
            {BEFORE_AFTER_CASES.map(c => (
              <button
                key={c.id}
                className={`desk-glass-tab-btn ${activeBeforeAfterTab === c.id ? 'active' : ''}`}
                onClick={() => setActiveBeforeAfterTab(c.id)}
              >
                {c.concern}
              </button>
            ))}
          </div>

          {/* Active Case Display Card */}
          {(() => {
            const activeCase = BEFORE_AFTER_CASES.find(c => c.id === activeBeforeAfterTab) || BEFORE_AFTER_CASES[0];
            return (
              <div className="desk-ba-showcase-card">
                <div className="desk-ba-visuals-col">
                  <div className="desk-ba-img-pair">
                    <div className="desk-ba-img-box before">
                      <span className="desk-ba-tag before">BEFORE</span>
                      <img src={activeCase.beforeImg} alt={`Before ${activeCase.concern}`} />
                    </div>
                    <div className="desk-ba-divider-pill">
                      <ArrowRight size={14} color="#942876" />
                    </div>
                    <div className="desk-ba-img-box after">
                      <span className="desk-ba-tag after">AFTER</span>
                      <img src={activeCase.afterImg} alt={`After ${activeCase.concern}`} />
                    </div>
                  </div>
                  <span className="desk-ba-sessions-chip">
                    <Clock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
                    Protocol Duration: {activeCase.timeline}
                  </span>
                </div>

                <div className="desk-ba-info-col">
                  <div className="desk-ba-badge-row">
                    <span className="desk-ba-cat-badge">{activeCase.category} Dermatology</span>
                    <span className="desk-ba-verified-badge">
                      <CheckCircle2 size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                      Verified Patient Outcome
                    </span>
                  </div>

                  <h3 className="desk-ba-title">{activeCase.concern}</h3>

                  <div className="desk-ba-metrics-box">
                    <div className="ba-metric-item">
                      <span className="metric-label">Treatment Protocol:</span>
                      <strong className="metric-val">{activeCase.protocol}</strong>
                    </div>
                    <div className="ba-metric-item">
                      <span className="metric-label">Measured Clinical Result:</span>
                      <strong className="metric-val gold-text">{activeCase.outcome}</strong>
                    </div>
                  </div>

                  <div className="desk-ba-quote-box">
                    <strong>Doctor's Clinical Observation:</strong>
                    <p>“{activeCase.doctorNote}”</p>
                    <span>— Dr. (Mrs.) Sujay M, MBBS, DDVL</span>
                  </div>

                  <div className="desk-ba-actions">
                    <button className="desk-btn-primary" onClick={onOpenBooking}>
                      <Calendar size={18} />
                      <span>Consult Dr. Sujay for Similar Results</span>
                      <ArrowRight size={16} />
                    </button>
                    <a href={`tel:${CLINIC_INFO.rawPhone}`} className="desk-btn-call">
                      <Phone size={16} />
                      <span>Call Reception</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>


      {/* ───────────────────────────────────────────────────────────
          4. DOCTOR PROFILE SECTION (Blueprint Screen 5 with Real Photo)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-doctor-section">
        <div className="desk-container">
          <div className="desk-doctor-card">
            {/* Left Column: Real Doctor Portrait Photo */}
            <div className="desk-doc-portrait-wrap">
              <div className="desk-doc-glass-frame">
                <img
                  src="/images/dr_sujay_avatar.jpg"
                  alt="Dr. (Mrs.) Sujay M MBBS DDVL Chief Dermatologist in South Bengaluru"
                  className="desk-doc-img"
                />
              </div>
              <div className="desk-doc-caption-strip">
                <strong>Dr. (Mrs.) Sujay M</strong>
                <span>Founder &amp; Chief Dermatologist · MBBS, DDVL</span>
              </div>
            </div>

            {/* Right Column: Credentials, Specializations & Quote */}
            <div className="desk-doc-details">
              <span className="desk-section-badge">OUR DERMATOLOGIST</span>
              <h2 className="desk-doc-name">Meet Dr. Sujay M</h2>
              <p className="desk-doc-role">
                MBBS, DDVL — Consultant Dermatologist &amp; Hair Transplant Surgeon
              </p>

              {/* Key Credentials Grid */}
              <div className="desk-doc-credentials-grid">
                <div className="desk-cred-item">
                  <Award size={18} color="#D4AF37" />
                  <div>
                    <strong>18+ Years Experience</strong>
                    <span>BMCRI Post-Graduate Alumni (2005)</span>
                  </div>
                </div>

                <div className="desk-cred-item">
                  <UserCheck size={18} color="#8B096C" />
                  <div>
                    <strong>10,000+ Happy Patients</strong>
                    <span>Treated across South Bengaluru</span>
                  </div>
                </div>

                <div className="desk-cred-item">
                  <ShieldCheck size={18} color="#D4AF37" />
                  <div>
                    <strong>MBBS, DDVL Qualified</strong>
                    <span>Medical Council of India Certified</span>
                  </div>
                </div>

                <div className="desk-cred-item">
                  <Sparkles size={18} color="#D4AF37" />
                  <div>
                    <strong>Advanced Laser Training</strong>
                    <span>Dermato-surgery &amp; Hair Restoration</span>
                  </div>
                </div>
              </div>

              {/* Personal Message Quote Box */}
              <div className="desk-doc-quote-card">
                <p className="desk-doc-quote-text">
                  “My goal is to help every patient feel confident in their skin, with care that is safe, effective and tailored to their needs.”
                </p>
                <span className="desk-doc-quote-author">— Dr. Sujay M</span>
              </div>

              <div className="desk-doc-actions">
                <button
                  className="desk-btn-primary"
                  onClick={onOpenBooking}
                  id="doctor-book-btn"
                >
                  <Calendar size={18} />
                  <span>Book a Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="desk-btn-secondary"
                >
                  <Phone size={16} color="#8B096C" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. PATIENT REVIEWS & TRUST SIGNALS (Swipe / Scrollable)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-reviews-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">TESTIMONIALS</span>
              <h2 className="desk-section-title">Patient Stories</h2>
              <p className="desk-section-sub">
                Real patient stories, Google rating and key trust indicators.
              </p>
            </div>
            <div className="desk-head-actions-row">
              <div className="desk-scroll-controls">
                <button
                  className="desk-glass-scroll-btn"
                  onClick={() => scrollReviews('left')}
                  title="Scroll Reviews Left"
                  aria-label="Previous Review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="desk-glass-scroll-btn"
                  onClick={() => scrollReviews('right')}
                  title="Scroll Reviews Right"
                  aria-label="Next Review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="desk-google-rating-badge">
                <span className="desk-g-icon">G</span>
                <div>
                  <strong>4.9 / 5 Average rating on Google</strong>
                  <div className="desk-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="desk-reviews-grid swipeable-track" ref={reviewsScrollRef}>
            {BLUEPRINT_REVIEWS.map((rev) => (
              <div key={rev.id} className="desk-review-card">
                <div className="desk-rev-top">
                  <div className="desk-rev-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <span className="desk-rev-source">{rev.source}</span>
                </div>
                <p className="desk-rev-quote">“{rev.text}”</p>
                <div className="desk-rev-author-box">
                  <div className="desk-rev-avatar">{rev.author.charAt(0)}</div>
                  <div>
                    <strong className="desk-rev-name">{rev.author}</strong>
                    <span className="desk-rev-status">Verified Patient</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Strip at Bottom of Reviews */}
          <div className="desk-trust-strip">
            <div className="desk-strip-item">
              <strong>500+</strong>
              <span>Happy Patients</span>
            </div>
            <div className="desk-strip-divider" />
            <div className="desk-strip-item">
              <strong>4.9/5</strong>
              <span>Google Rating</span>
            </div>
            <div className="desk-strip-divider" />
            <div className="desk-strip-item">
              <strong>Evidence-Based</strong>
              <span>Treatments</span>
            </div>
            <div className="desk-strip-divider" />
            <div className="desk-strip-item">
              <strong>Safe &amp; Modern</strong>
              <span>Clinic</span>
            </div>
            <div className="desk-strip-divider" />
            <div className="desk-strip-item">
              <strong>Personalised</strong>
              <span>Care Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. YOUR CONSULTATION JOURNEY (Blueprint Screen 7)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-journey-section">
        <div className="desk-container">
          <div className="desk-journey-center">
            <span className="desk-section-badge center">STEP-BY-STEP PROCESS</span>
            <h2 className="desk-section-title center">Your Consultation Journey</h2>
            <p className="desk-section-sub center">
              A simple, seamless process to get the right care for your skin and hair.
            </p>
          </div>

          <div className="desk-journey-grid">
            {JOURNEY_STEPS.map((step) => (
              <div key={step.number} className="desk-journey-card">
                <div className="desk-journey-number-badge">{step.number}</div>
                <h4 className="desk-journey-step-title">{step.title}</h4>
                <p className="desk-journey-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="desk-journey-actions">
            <button
              className="desk-btn-primary"
              onClick={onOpenBooking}
              id="journey-book-btn"
            >
              <Calendar size={18} />
              <span>Book a Dermatologist Consultation</span>
              <ArrowRight size={16} />
            </button>
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="desk-btn-call-inline"
            >
              <Phone size={16} color="#8B096C" />
              <span>Call +91 92428 55707</span>
            </a>
          </div>

          {/* Trust Highlights Below Journey */}
          <div className="desk-journey-trust-row">
            <span className="desk-j-trust-chip">
              <CheckCircle size={15} color="#8B096C" />
              <span>Online / Call Booking</span>
            </span>
            <span className="desk-j-trust-chip">
              <CheckCircle size={15} color="#8B096C" />
              <span>Expert Consultation with Dr. Sujay M</span>
            </span>
            <span className="desk-j-trust-chip">
              <CheckCircle size={15} color="#8B096C" />
              <span>Personalised Plans</span>
            </span>
            <span className="desk-j-trust-chip">
              <CheckCircle size={15} color="#8B096C" />
              <span>Follow-up Support</span>
            </span>
          </div>
        </div>
      </section>




      {/* ───────────────────────────────────────────────────────────
          7. SKIN JOURNAL / BLOG LISTING (Blueprint Screen 8)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-journal-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">DERMATOLOGY EDUCATION</span>
              <h2 className="desk-section-title">Skin Journal</h2>
              <p className="desk-section-sub">
                Expert insights, tips and updates from our dermatology team.
              </p>
            </div>
            <button
              className="desk-link-btn"
              onClick={() => navigateToTab('blog')}
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="desk-journal-grid">
            {SKIN_JOURNAL_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="desk-journal-card"
                onClick={() => navigateToTab('blog')}
              >
                <div className="desk-journal-img-frame">
                  <img src={art.image} alt={art.title} />
                  <span className="desk-journal-cat-pill">{art.category}</span>
                </div>
                <div className="desk-journal-content">
                  <div className="desk-journal-meta">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="desk-journal-title">{art.title}</h4>
                  <p className="desk-journal-excerpt">{art.excerpt}</p>
                  <span className="desk-journal-read-link">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. CLINIC LOCATION, ACCESSIBILITY & INQUIRY (Blueprint Screen 9)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-location-section">
        <div className="desk-container">
          <div className="desk-location-head">
            <span className="desk-section-badge center">VISIT OUR CLINIC</span>
            <h2 className="desk-section-title center">Our Clinic Location</h2>
            <p className="desk-section-sub center">
              Conveniently located in South Bengaluru, with easy access from Yelachenahalli Metro Station.
            </p>
          </div>

          <div className="desk-location-split-card">
            {/* Left: Office Address, Transit & Actions */}
            <div className="desk-loc-info-col">
              <span className="desk-loc-badge">MEDICARE SKIN AND COSMETIC CLINIC</span>
              <h3 className="desk-loc-heading">Kanakapura Main Road, Bengaluru</h3>

              <div className="desk-address-highlight-card">
                <MapPin size={22} color="#8B096C" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong className="desk-addr-title">Office Address:</strong>
                  <p className="desk-addr-text">
                    Jyothi Kendriya Vidyalaya Back gate, 2nd Main, 2nd Cross Jyothi Layout, Near Yelachenahalli Metro Station, Kanakapura Main Rd, Bangalore – 560 078
                  </p>
                </div>
              </div>

              {/* Transit & Accessibility Highlights */}
              <div className="desk-transit-chips-row">
                <span className="desk-transit-chip">
                  <Compass size={14} color="#8B096C" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Near Yelachenahalli Metro Station
                </span>
                <span className="desk-transit-chip">
                  <ShieldCheck size={14} color="#8B096C" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Dedicated Parking Available
                </span>
                <span className="desk-transit-chip">
                  <MapPin size={14} color="#8B096C" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Easy Access from JP Nagar &amp; Jayanagar
                </span>
              </div>

              <div className="desk-contact-quick-row">
                <a href={`tel:${CLINIC_INFO.rawPhone}`} className="desk-contact-pill">
                  <Phone size={15} color="#8B096C" />
                  <span>+91 92428 55707</span>
                </a>
                <a href={`mailto:${CLINIC_INFO.email}`} className="desk-contact-pill">
                  <Mail size={15} color="#8B096C" />
                  <span>{CLINIC_INFO.email}</span>
                </a>
                <div className="desk-contact-pill">
                  <Clock size={15} color="#D4AF37" />
                  <span>Mon-Sat: 10:00 AM - 7:00 PM</span>
                </div>
              </div>

              <div className="desk-loc-actions-bar">
                <a
                  href={CLINIC_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="desk-btn-primary"
                >
                  <MapPin size={17} />
                  <span>Get Directions</span>
                  <ExternalLink size={15} />
                </a>
                <a
                  href="https://web.whatsapp.com/send?phone=919242855707"
                  target="_blank"
                  rel="noreferrer"
                  className="desk-btn-whatsapp"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Google Map Embed & Quick Inquiry Form */}
            <div className="desk-loc-map-col">
              <div className="desk-map-frame">
                <iframe
                  title="Medicare Skin Clinic Google Map"
                  src={CLINIC_INFO.mapEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Inquiry / Describe Your Issue Form */}
              <div className="desk-quick-inquiry-box">
                <h4 className="desk-inquiry-title">Describe Your Issue</h4>
                <p className="desk-inquiry-subtitle">
                  Send a direct inquiry to Dr. Sujay M's clinical team.
                </p>

                {inquirySent ? (
                  <div className="desk-inquiry-success">
                    <CheckCircle2 size={32} color="#8B096C" />
                    <strong>Thank you, {inquiryForm.name}!</strong>
                    <p>We received your inquiry and will call you at {inquiryForm.phone} shortly.</p>
                    <a
                      href={`https://web.whatsapp.com/send?phone=919242855707&text=${encodeURIComponent(
                        `Hi Medicare Skin Clinic, my name is ${inquiryForm.name}. Concern: ${inquiryForm.issue || 'Skin Consultation'}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="desk-btn-whatsapp-solid"
                    >
                      <span>Continue via WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="desk-inquiry-form">
                    <div className="desk-inquiry-fields-grid">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={inquiryForm.name}
                        onChange={handleInquiryChange}
                        className="desk-inquiry-input"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                        value={inquiryForm.phone}
                        onChange={handleInquiryChange}
                        className="desk-inquiry-input"
                      />
                    </div>
                    <textarea
                      name="issue"
                      rows={2}
                      placeholder="Describe your issue (e.g. acne scars, melasma, hair fall)..."
                      required
                      value={inquiryForm.issue}
                      onChange={handleInquiryChange}
                      className="desk-inquiry-textarea"
                    />
                    <button type="submit" className="desk-btn-primary full-width">
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. FOOTER + FINAL CTA BANNER (Blueprint Screen 10)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-final-cta-section">
        <div className="desk-container">
          <div className="desk-cta-banner-card">
            <div className="desk-cta-content">
              <span className="desk-cta-badge">START TODAY</span>
              <h2 className="desk-cta-title">
                Ready to Start Your Skin Confidence Journey?
              </h2>
              <p className="desk-cta-desc">
                Consult with Dr. Sujay M for personalised, expert dermatology and aesthetic care in South Bengaluru.
              </p>

              <div className="desk-cta-buttons">
                <button
                  className="desk-btn-primary-white"
                  onClick={onOpenBooking}
                  id="final-cta-book-btn"
                >
                  <Calendar size={18} />
                  <span>Book a Dermatologist Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="desk-btn-outline-white"
                >
                  <Phone size={16} />
                  <span>Call +91 92428 55707</span>
                </a>
              </div>

              {/* 4 Feature Badges in CTA */}
              <div className="desk-cta-features-strip">
                <span>
                  <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Expert Care
                </span>
                <span>
                  <Award size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Advanced Technology
                </span>
                <span>
                  <CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  Personalised Treatment
                </span>
                <span>
                  <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                  South Bengaluru
                </span>
              </div>
            </div>

            <div className="desk-cta-image-col">
              <img
                src="/images/radiant_skin_glow.jpg"
                alt="Radiant Glowing Healthy Skin"
                className="desk-cta-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

