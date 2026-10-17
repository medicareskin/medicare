import React, { useState, useEffect } from 'react';
import {
  Sparkles, Calendar, Phone, Award, Star, MapPin, ChevronRight,
  ShieldCheck, Check, ArrowRight, Clock, ChevronLeft, UserCheck,
  Compass, Calculator, FileText, CheckCircle2, Play, Layers, Mail,
  Send, ExternalLink, HelpCircle, HeartHandshake, CheckCircle,
  Sun, Heart, Zap, Stethoscope, ChevronDown, ChevronUp, BookOpen
} from 'lucide-react';
import {
  CLINIC_INFO,
  GOOGLE_REVIEWS,
  SKIN_CONDITIONS,
  HAIR_CONDITIONS,
  COSMETIC_TREATMENTS,
  LASER_TREATMENTS,
  MEDICAL_DERMATOLOGY_TREATMENTS
} from '../../data/clinicData';
import ClinicalConcernsStrip from '../ClinicalConcernsStrip';

const ALL_TREATMENTS = [
  ...SKIN_CONDITIONS,
  ...HAIR_CONDITIONS,
  ...COSMETIC_TREATMENTS,
  ...LASER_TREATMENTS,
  ...MEDICAL_DERMATOLOGY_TREATMENTS
];

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

// ── Screen 3: Treatment Categories (High-End Clinical Directory) ────────────
const TREATMENT_CATEGORIES = [
  {
    id: 'skin',
    badge: 'CLINICAL DERMATOLOGY',
    title: 'Skin Treatments',
    desc: 'Targeted protocols for active acne, deep scars, melasma & textural renewal.',
    image: '/images/luxury_indian_skin_model.png',
    tags: ['Acne & Scars', 'Pigmentation', 'Melasma', 'Glass Skin Glow'],
    tab: 'skin',
    count: '15+ Treatments',
    icon: Sparkles
  },
  {
    id: 'hair',
    badge: 'TRICHOLOGY SUITE',
    title: 'Hair Treatments',
    desc: 'Science-backed restoration for hair fall, thinning, scalp health & PRP/GFC therapy.',
    image: '/images/radiant_hair_smile_woman.png',
    tags: ['Hair Fall Control', 'PRP / GFC', 'Dandruff Therapy', 'Scalp Health'],
    tab: 'hair',
    count: '8+ Procedures',
    icon: HeartHandshake
  },
  {
    id: 'laser',
    badge: 'US FDA-APPROVED',
    title: 'Laser Treatments',
    desc: 'Precision diode laser hair reduction, fractionated scar resurfacing & tattoo removal.',
    image: '/images/poreless_glass_skin_glow.jpg',
    tags: ['Diode Hair Reduction', 'CO2 Resurfacing', 'Tattoo Removal', 'Pigment Laser'],
    tab: 'laser',
    count: '10+ Technologies',
    icon: Zap
  },
  {
    id: 'aesthetics',
    badge: 'AESTHETIC CLINIC',
    title: 'Aesthetics & Anti-Ageing',
    desc: 'Natural facial contouring, wrinkle softening, volume restoration & skin elasticity.',
    image: '/images/skin_elasticity_cheek_touch.png',
    tags: ['Botox / Fillers', 'Skin Tightening', 'Elasticity Boost', 'Collagen Lift'],
    tab: 'cosmetic',
    count: '12+ Aesthetic Plans',
    icon: Award
  },
  {
    id: 'medical-derm',
    badge: 'DOCTOR-LED CARE',
    title: 'Medical Dermatology',
    desc: 'Evidence-based clinical care for eczema, psoriasis, vitiligo & chronic allergies.',
    image: '/images/hero_skin_clinic_woman.jpg',
    tags: ['Skin Allergies', 'Infections', 'Vitiligo Surgery', 'Psoriasis Care'],
    tab: 'skin',
    count: 'Clinical Diagnosis',
    icon: Stethoscope
  },
  {
    id: 'cosmetic-concerns',
    badge: 'RADIANCE & GLOW',
    title: 'Cosmetic Concerns',
    desc: 'Clinical medifacials, dermatological peels, dark circle correction & tan removal.',
    image: '/images/radiant_skin_glow.jpg',
    tags: ['Chemical Peels', 'Dark Circles', 'Tan Removal', 'Radiant Medifacial'],
    tab: 'cosmetic',
    count: 'Instant Glow',
    icon: Sun
  }
];

// ── Screen 4: Our Treatments Row (With Authentic URLs & SEO Links) ─────────────
const OUR_TREATMENTS = [
  {
    id: 'acne-laser',
    title: 'Acne Scar Treatment',
    url: '/acne-laser/',
    fullUrl: 'https://medicareskin.com/acne-laser/',
    desc: 'Multi-modal scar revision suite combining subcision, MNRF, and TCA cross for rolling, boxcar, and ice-pick scars.',
    image: '/images/hero_slide_2_acne.jpg',
    tag: 'Acne Laser & Scars',
    tab: 'skin',
    category: 'Skin Care',
    summary: 'Doctor-guided scar revision protocols engineered for stubborn rolling scars, pitted blemishes, and deep melasma.'
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Removal',
    url: '/hair-care/',
    fullUrl: 'https://medicareskin.com/hair-care/',
    desc: 'US-FDA approved painless diode laser technology with contact cooling for permanent face and body hair reduction.',
    image: '/images/cat_laser_care.jpg',
    tag: 'Diode Laser Tech',
    tab: 'laser',
    category: 'Laser Services',
    summary: 'US-FDA approved painless diode laser technology for permanent facial and body hair reduction.'
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    url: '/chemical-peels/',
    fullUrl: 'https://medicareskin.com/chemical-peels/',
    desc: 'Custom dermatological medipeels targeting active breakouts, sun tan, dark spots, and dull skin texture.',
    image: '/images/luxury_indian_skin_model.png',
    tag: 'Medi-Peels & Glow',
    tab: 'cosmetic',
    category: 'Aesthetics',
    summary: 'Custom dermatological peels designed for glow, acne reduction, hyperpigmentation, and anti-aging.'
  },
  {
    id: 'dermal-fillers-anti-wrinkle-injections',
    title: 'Dermal Fillers/Anti-wrinkle Injections',
    url: '/dermal-fillers-anti-wrinkle-injections/',
    fullUrl: 'https://medicareskin.com/dermal-fillers-anti-wrinkle-injections/',
    desc: 'Precision micro-droplet anti-wrinkle injections and hyaluronic dermal fillers for natural contouring and youthful volume.',
    image: '/images/radiant_skin_model.jpg',
    tag: 'Aesthetics & Volume',
    tab: 'cosmetic',
    category: 'Aesthetics',
    summary: 'Non-surgical aesthetic injections for volume restoration, wrinkle smoothing, and youthful contouring.'
  },
  {
    id: 'microneedling-for-skin-tightening',
    title: 'Skin Tightening',
    url: '/microneedling-for-skin-tightening/',
    fullUrl: 'https://medicareskin.com/microneedling-for-skin-tightening/',
    desc: 'Non-surgical radiofrequency and microneedling (MNRF) collagen stimulation to lift sagging skin and restore elasticity.',
    image: '/images/radiant_skin_glow.jpg',
    tag: 'Collagen Remodeling',
    tab: 'cosmetic',
    category: 'Aesthetics',
    summary: 'RF and ultrasound non-invasive therapies to stimulate collagen and firm sagging facial and neck skin.'
  },
  {
    id: 'vitiligo-surgery',
    title: 'Vitiligo Surgery',
    url: '/vitiligo-surgery/',
    fullUrl: 'https://medicareskin.com/vitiligo-surgery/',
    desc: 'Specialised melanocyte transfer, punch grafting, and blister grafting for stable vitiligo repigmentation.',
    image: '/images/hero_slide_5_results.jpg',
    tag: 'Surgical Dermatology',
    tab: 'skin',
    category: 'Medical Dermatology',
    summary: 'Specialised punch grafting and melanocyte transfer procedures for stable vitiligo repigmentation.'
  },
  {
    id: 'q-switched-laser-melasma-pigmentation-bangalore',
    title: 'Melasma & Pigmentation',
    url: '/q-switched-laser-melasma-pigmentation-bangalore/',
    fullUrl: 'https://medicareskin.com/q-switched-laser-melasma-pigmentation-bangalore/',
    desc: 'Q-Switched Nd:YAG laser toning & dark spot clearing engineered for stubborn dermal pigmentation.',
    image: '/images/q_switched_procedure.jpg',
    tag: 'Laser Toning',
    tab: 'q-switched-laser',
    category: 'Laser Services',
    summary: 'Gold-standard Nd:YAG laser toning to clear stubborn melasma, dark spots, sun tanning, and hyperpigmentation.'
  },
  {
    id: 'hydrafacial-bangalore',
    title: 'HydraFacial Glow & Brightness',
    url: '/hydrafacial-bangalore/',
    fullUrl: 'https://medicareskin.com/hydrafacial-bangalore/',
    desc: 'Deep vortex hydration, pore detox & instant glass-skin radiance with hyaluronic infusion.',
    image: '/images/hydrafacial_procedure.jpg',
    tag: 'Hydra Glow',
    tab: 'hydrafacial',
    category: 'Aesthetics',
    summary: 'Medical hydradermabrasion for instant glass-skin radiance, deep vortex pore cleansing, and intense hydration.'
  }
];

const SIGNATURE_TREATMENTS = OUR_TREATMENTS;

// ── Screen 6: Verified Patient Reviews (All 14 Authentic Google Reviews) ─────
const BLUEPRINT_REVIEWS = GOOGLE_REVIEWS.map((rev) => ({
  id: rev.id,
  author: rev.author || rev.name || 'Verified Patient',
  source: rev.role || 'Google Review',
  rating: rev.rating || 5,
  treatment: rev.treatment || rev.tag || 'Dermatology Care',
  text: rev.text
}));

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
    id: 'q-switched-laser-melasma-pigmentation-guide',
    category: 'LASER TREATMENTS',
    title: 'Q-Switched Laser for Melasma & Pigmentation: Dermatologist Guide',
    date: 'Oct 16, 2026',
    readTime: '7 min read',
    image: '/images/q-switched-laser-pigmentation-treatment-bangalore.webp',
    tab: 'q-switched-laser',
    excerpt: 'How low-fluence photoacoustic Q-switched laser toning clears deep dermal pigment safely without rebound PIH in Indian skin.'
  },
  {
    id: 'hydrafacial-skin-hydration-glow-bangalore',
    category: 'AESTHETICS & GLOW',
    title: 'HydraFacial Treatment for Glowing, Hydrated & Brighter Skin',
    date: 'Oct 15, 2026',
    readTime: '6 min read',
    image: '/images/hydrafacial-skin-hydration-treatment-bangalore.webp',
    tab: 'hydrafacial',
    excerpt: 'The 5-step device-assisted facial combining gentle vortex exfoliation, vacuum extraction, and antioxidant peptide hydration.'
  },
  {
    id: 'q-switched-laser-vs-hydrafacial-comparison',
    category: 'TREATMENT GUIDES',
    title: 'Q-Switched Laser vs. HydraFacial: Which One Do You Need?',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    image: '/images/luxury_indian_skin_model.png',
    tab: 'comparison',
    excerpt: 'Comparing photoacoustic pigment clearance against surface vortex hydration, and Dr. Sujay M\'s combination synergy protocol.'
  },
  {
    id: 'acne-scars-expert-options',
    category: 'SKIN CARE',
    title: 'How to Treat Acne Scars: Expert Options That Work',
    date: 'Oct 10, 2026',
    readTime: '5 min read',
    image: '/images/skin_elasticity_cheek_touch.png',
    tab: 'skin',
    excerpt: 'Explore dermatological options from subcision to fractional RF microneedling and medical peels for smoother skin.'
  }
];

// ── Frequently Asked Questions for Home Screen ──────────────────────────────
const HOME_FAQS = [
  {
    q: "Can Q-Switched laser safely treat melasma and dark spots on Indian skin?",
    a: "Yes, when performed with low-fluence Nd:YAG protocols. Indian skin tones (Fitzpatrick IV–VI) have higher melanin content and can experience rebound darkening if treated with high heat. Dr. Sujay M utilizes calibrated sub-thermolytic energy parameters to gently shatter melanin clusters without heat buildup, backed by strict photoprotection protocols."
  },
  {
    q: "What is HydraFacial and how does it differ from a regular beauty parlour facial?",
    a: "HydraFacial is a medical device treatment combining vortex vacuum suction, gentle salicylic/glycolic chemical exfoliation, painless extraction, and concentrated antioxidant-peptide infusion. Unlike salon facials that involve manual steaming, physical pinching, and abrasive scrubs that can cause micro-tears or broken capillaries, HydraFacial uses calibrated fluidics to purify pores and restore dewy hydration with zero downtime."
  },
  {
    q: "Is Laser Hair Removal permanent and safe for Indian skin tones?",
    a: "Yes! Our clinic utilizes US-FDA approved Diode Laser technology operating at 808nm wavelength with integrated sapphire contact cooling. It selectively targets melanin in hair follicles safely without affecting surrounding skin, delivering 85%-95% permanent reduction over 6 to 8 sessions."
  },
  {
    q: "What is the expected recovery time after Acne Scar Subcision?",
    a: "Subcision combined with fractional microneedling RF may cause mild swelling or pinpoint redness for 24-48 hours. Most patients resume regular work and daily activities the very next day with broad-spectrum sunscreen and doctor-prescribed barrier recovery creams."
  },
  {
    q: "How does Growth Factor Therapy (GFT) treat severe hair fall?",
    a: "GFT concentrates natural autologous growth factors from your own blood plasma and micro-infuses them into dormant hair follicles, halting shedding and triggering thick hair shaft regrowth within 3 to 4 clinical sessions."
  },
  {
    q: "Do I need a prior appointment before visiting Medicare Skin Clinic?",
    a: "While walk-ins are accommodated based on doctor availability, prior booking via our website or WhatsApp (+91 92428 55707) is strongly recommended to eliminate waiting times and guarantee your dedicated consultation slot with Dr. Sujay M."
  },
  {
    q: "Where is Medicare Skin Clinic located and how can I reach by Metro?",
    a: "We are situated in Jyothi Layout, Kanakapura Main Road, right near Yelachenahalli Metro Station Gate 2 in South Bengaluru. It is a convenient 5-10 minute commute from JP Nagar, Jayanagar, Banashankari, Kumaraswamy Layout, and Konanakunte."
  }
];

// ── Full-Width Majestic Hero Carousel Slides (5 Verified High-Resolution Suites) ──
const HERO_SLIDES_DATA = [
  {
    id: 'clinic-welcome',
    image: '/images/hero_slide_1_welcome.jpg',
    imagePosition: 'right center',
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
    imagePosition: 'right center',
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
    imagePosition: 'right center',
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
    imagePosition: 'right center',
    eyebrow: 'PAINLESS SAPPHIRE CHILLING · ZERO DOWNTIME',
    title: 'Triple-Wavelength Laser Hair Reduction',
    subtitle: 'Safe, effective, and doctor-calibrated diode laser technology specially tailored for South Asian and Indian skin types.',
    badgeHighlight: 'Safe for Indian Skin',
    primaryBtn: { text: 'Book Laser Session', action: 'book' },
    secondaryBtn: { text: 'Explore Laser Tech', action: 'tab:laser' }
  },
  {
    id: 'clinic-facility',
    image: '/images/clinic_interior_reception.jpg',
    imagePosition: '70% center',
    eyebrow: '10,000+ SATISFIED PATIENTS · SOUTH BENGALURU',
    title: 'Trusted Dermatological Care & Proven Results',
    subtitle: 'Experience doctor-guided skin and hair transformations with personalised treatment plans and state-of-the-art clinical safety.',
    badgeHighlight: '10,000+ Happy Patients',
    primaryBtn: { text: 'Book Consultation', action: 'book' },
    secondaryBtn: { text: 'Visit Clinic in Jayanagar', action: 'location' }
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
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
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
                    style={{ objectPosition: slide.imagePosition || 'right center' }}
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
          POPULAR CONCERNS & PROCEDURES STRIP (Minimalist Luxury Aesthetic)
      ──────────────────────────────────────────────────────────── */}
      <ClinicalConcernsStrip
        onOpenBooking={onOpenBooking}
        onTabChange={navigateToTab}
        onSelectConcern={onSelectTreatment}
      />

      {/* ───────────────────────────────────────────────────────────
          2. TREATMENT CATEGORIES GRID (Blueprint Screen 3 - Clinical Directory)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-categories-section">
        <div className="desk-container">
          <div className="desk-clinical-directory-panel">
            {/* Master Header with Clinical Badges, Title & View All Action */}
            <div className="desk-directory-header-row">
              <div className="desk-directory-header-left">
                <div className="desk-directory-badges-group">
                  <span className="desk-section-badge">
                    <Sparkles size={13} color="#8B096C" />
                    CLINICAL DIRECTORY
                  </span>
                  <span className="desk-directory-trust-pill">
                    <Award size={13} color="#D4AF37" />
                    18+ Yrs Experience
                  </span>
                  <span className="desk-directory-trust-pill">
                    <Star size={13} fill="#D4AF37" color="#D4AF37" />
                    5.0 Google Rating (1,044+ Reviews)
                  </span>
                </div>
                <h2 className="desk-section-title">Our Treatment Categories</h2>
                <p className="desk-section-sub">
                  Doctor-supervised clinical protocols across medical dermatology, advanced aesthetic contouring, medical lasers &amp; trichology led by Dr. Sujay M.
                </p>
              </div>

              <div className="desk-directory-header-right">
                <button
                  className="desk-link-btn"
                  onClick={() => navigateToTab('treatments')}
                >
                  <span>View All 24+ Procedures</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Filter Tabs Capsule Segmented Track */}
            <div className="desk-filter-tabs-bar">
              {[
                { id: 'all', label: 'All Categories', count: TREATMENT_CATEGORIES.length },
                { id: 'skin', label: 'Skin Care & Scars', count: TREATMENT_CATEGORIES.filter(c => c.tab === 'skin').length },
                { id: 'hair', label: 'Hair Restoration & PRP', count: TREATMENT_CATEGORIES.filter(c => c.tab === 'hair').length },
                { id: 'laser', label: 'Laser Technology', count: TREATMENT_CATEGORIES.filter(c => c.tab === 'laser').length },
                { id: 'cosmetic', label: 'Aesthetics & Anti-Ageing', count: TREATMENT_CATEGORIES.filter(c => c.tab === 'cosmetic').length }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`desk-glass-tab-btn ${selectedCategoryTab === tab.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategoryTab(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="desk-tab-count-pill">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Treatment Categories Grid */}
            <div className="desk-categories-grid">
              {(selectedCategoryTab === 'all'
                ? TREATMENT_CATEGORIES
                : TREATMENT_CATEGORIES.filter(c => c.tab === selectedCategoryTab)
              ).map((cat) => (
                <div
                    key={cat.id}
                    className="desk-category-card"
                    onClick={() => navigateToTab(cat.tab)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && navigateToTab(cat.tab)}
                  >
                    <div className="desk-cat-img-box">
                      <img src={cat.image} alt={cat.title} loading="lazy" />
                      <div className="desk-cat-img-gradient" />
                    </div>
                    <div className="desk-cat-info">
                      <div className="desk-cat-head-row">
                        <h3 className="desk-cat-title">{cat.title}</h3>
                        <span className="desk-cat-arrow-btn" aria-label="Explore treatments">
                          <ArrowRight size={15} />
                        </span>
                      </div>
                      <p className="desk-cat-desc">{cat.desc}</p>
                      <div className="desk-cat-tags">
                        {cat.tags.map((t, idx) => (
                          <span key={idx} className="desk-cat-tag-pill">{t}</span>
                        ))}
                      </div>
                      <div className="desk-cat-footer-action">
                        <span className="desk-cat-footer-label">Explore Procedures</span>
                        <span className="desk-cat-footer-arrow">
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Authentic Clinical Specialisations Statement Box (WordPress Content) */}
            <div className="desk-speciality-statement-box">
              <div className="desk-speciality-head-row">
                <div className="desk-speciality-badge">
                  <Sparkles size={14} color="#D4AF37" />
                  <span>FULL CLINICAL SPECIALISATIONS</span>
                </div>
                <span className="desk-speciality-meta">Direct In-Clinic Protocols · Yelachenahalli Metro</span>
              </div>
              <h3 className="desk-speciality-box-title">What We Specialise in Treating</h3>
              <p className="desk-speciality-box-desc">
                We specialise in treating your skin allergies, skin infections (bacterial, fungal, viral), acne, scars, hair loss, hair thinning, premature ageing, wrinkles, saggy skin, cellulite, hair fall, balding, dull skin, dark circles, freckles, tan, melasma, birthmarks, stretch marks, warts, moles, laser treatment for unwanted body hair, dermal fillers / anti-wrinkle injections, fillers, thread lift &amp; many more.
              </p>
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
              <span className="desk-section-badge">EVIDENCE-BASED PROCEDURES</span>
              <h2 className="desk-section-title">Our Treatments</h2>
              <p className="desk-section-sub">
                Doctor-guided aesthetic and dermatological treatments performed by Dr. Sujay M with US-FDA approved technologies.
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
            {OUR_TREATMENTS.map((item) => (
              <a
                key={item.id}
                href={item.fullUrl}
                className="desk-signature-card"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectTreatment) {
                    onSelectTreatment(item);
                  } else {
                    navigateToTab(item.tab);
                  }
                }}
                title={`${item.title} - Medicare Skin & Cosmetic Clinic`}
              >
                <div className="desk-sig-thumb-frame">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="desk-sig-tag-pill">{item.tag}</span>
                </div>
                <h4 className="desk-sig-title">{item.title}</h4>
                <p className="desk-sig-desc">{item.desc}</p>
                <span className="desk-sig-link">
                  <span>Explore Procedure</span>
                  <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
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
                  src="/images/dr_sujaya.jpeg"
                  alt="Dr. (Mrs.) Sujay M MBBS DDVL Chief Dermatologist in South Bengaluru"
                  className="desk-doc-img"
                  onError={(e) => { e.target.src = "/images/DR%20SUJAYA.jpeg"; }}
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
          9. CLINICAL BLOGS & DOCTOR INSIGHTS (Screen 9)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-blogs-section" id="desk-blogs-section">
        <div className="desk-container">
          <div className="desk-section-head-row">
            <div>
              <span className="desk-section-badge">
                <FileText size={14} /> CLINICAL DERMATOLOGY JOURNAL
              </span>
              <h2 className="desk-section-title">
                Latest Skin & Laser Insights by Dr. Sujay M
              </h2>
              <p className="desk-section-sub">
                Evidence-based dermatology guides on advanced laser toning, medical facials, acne scar revision protocols, and hair restoration.
              </p>
            </div>
            <button
              className="desk-link-btn"
              onClick={() => onTabChange('blog')}
              id="desk-view-all-blogs-btn"
            >
              <span>View All 5+ Clinical Articles</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="desk-blogs-grid">
            {SKIN_JOURNAL_ARTICLES.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="desk-blog-card"
                onClick={() => {
                  if (post.tab) {
                    onTabChange(post.tab);
                  } else {
                    onTabChange('blog');
                  }
                }}
              >
                <div className="desk-blog-img-box">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="desk-blog-img"
                    loading="lazy"
                  />
                  <div className="desk-blog-badge-overlay">
                    <span className="desk-blog-cat-badge">{post.category}</span>
                  </div>
                </div>

                <div className="desk-blog-body">
                  <div className="desk-blog-meta">
                    <span className="desk-blog-meta-item">
                      <Clock size={13} /> {post.readTime}
                    </span>
                    <span className="desk-blog-meta-dot">•</span>
                    <span className="desk-blog-meta-item">
                      <Calendar size={13} /> {post.date}
                    </span>
                  </div>

                  <h3 className="desk-blog-title">{post.title}</h3>
                  <p className="desk-blog-excerpt">{post.excerpt}</p>

                  <div className="desk-blog-footer">
                    <div className="desk-blog-author">
                      <div className="desk-blog-avatar-ring">
                        <img
                          src="/images/dr_sujaya.jpeg"
                          alt="Dr. Sujay M"
                          className="desk-blog-author-avatar"
                          onError={(e) => { e.target.src = "/images/DR%20SUJAYA.jpeg"; }}
                        />
                      </div>
                      <div className="desk-blog-author-info">
                        <span className="desk-blog-author-name">Dr. Sujay M</span>
                        <span className="desk-blog-author-role">MBBS, DDVL</span>
                      </div>
                    </div>

                    <span className="desk-blog-read-cta">
                      <span>Read Guide</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Comparison & Treatment Guides Pill Row */}
          <div className="desk-blogs-quick-links">
            <span className="desk-quick-label">
              <Sparkles size={14} /> Quick Clinical Guides:
            </span>
            <button
              className="desk-quick-chip"
              onClick={() => onTabChange('q-switched-laser')}
            >
              Q-Switched Laser Guide
            </button>
            <button
              className="desk-quick-chip"
              onClick={() => onTabChange('hydrafacial')}
            >
              HydraFacial Protocol
            </button>
            <button
              className="desk-quick-chip"
              onClick={() => onTabChange('comparison')}
            >
              Laser vs HydraFacial Comparison
            </button>
            <button
              className="desk-quick-chip"
              onClick={() => onTabChange('skin')}
            >
              Acne Scar Subcision Guide
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. PATIENT FREQUENTLY ASKED QUESTIONS (Screen 10)
      ──────────────────────────────────────────────────────────── */}
      <section className="desk-section desk-faqs-section" id="desk-faqs-section">
        <div className="desk-container">
          <div className="desk-section-head-center">
            <span className="desk-section-badge center">
              <HelpCircle size={14} /> PATIENT CLARIFICATIONS & SAFETY
            </span>
            <h2 className="desk-section-title center">
              Frequently Asked Questions
            </h2>
            <p className="desk-section-sub center">
              Clear, evidence-based answers to common questions about treatment safety, laser technology for Indian skin, downtime, and consultation appointments with Dr. Sujay M.
            </p>
          </div>

          <div className="desk-faqs-wrapper">
            <div className="desk-faqs-accordion">
              {HOME_FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`desk-faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      className="desk-faq-question"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="desk-faq-q-left">
                        <span className="desk-faq-num">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="desk-faq-q-text">{faq.q}</span>
                      </div>
                      <div className="desk-faq-icon-pill">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="desk-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Ask / Consultation Card Below FAQs */}
            <div className="desk-faq-assistance-card">
              <div className="desk-faq-assist-icon">
                <HelpCircle size={28} />
              </div>
              <div className="desk-faq-assist-info">
                <h4>Have a specific skin or hair question?</h4>
                <p>
                  Every skin concern requires individual diagnosis. Connect directly with our clinic desk or schedule an in-depth clinical consultation.
                </p>
              </div>
              <div className="desk-faq-assist-actions">
                <button
                  className="desk-btn-primary"
                  onClick={onOpenBooking}
                  id="faq-book-consult-btn"
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="desk-btn-secondary"
                >
                  <Phone size={16} />
                  <span>Call +91 92428 55707</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          11. FOOTER + FINAL CTA BANNER (Blueprint Screen 10)
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

