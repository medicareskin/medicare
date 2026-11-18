'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TreatmentCard {
  id: string;
  category: 'Skin' | 'Hair' | 'Laser & Aesthetics';
  badge: string;
  badgeBg: string;
  title: string;
  description: string;
  feature1: string;
  feature2: string;
  href: string;
  image: string;
}

const TREATMENTS_DATA: TreatmentCard[] = [
  {
    id: 'acne-scar',
    category: 'Skin',
    badge: 'Most Popular',
    badgeBg: '#C026D3',
    title: 'Acne Scar Treatment',
    description: 'Multi-modality approach combining subcision, Microneedling RF, and fractional resurfacing to smooth out rolling, boxcar, and ice-pick acne scars.',
    feature1: 'Subcision & Collagen Induction',
    feature2: 'Visible 70-85% scar reduction',
    href: '/treatments/skin/acne-scar-treatment/',
    image: '/images/acne_scar_treatment_new.jpg'
  },
  {
    id: 'laser-hair',
    category: 'Laser & Aesthetics',
    badge: 'US FDA Approved',
    badgeBg: '#4F46E5',
    title: 'Laser Hair Removal',
    description: 'Painless, permanent reduction of unwanted body & facial hair using state-of-the-art triple-wavelength laser technology safe for all Indian skin types.',
    feature1: 'In-motion painless cooling tip',
    feature2: 'Silky smooth, ingrown-free skin',
    href: '/treatments/laser/laser-hair-reduction/',
    image: '/images/slide_laser_new.jpg'
  },
  {
    id: 'chemical-peels',
    category: 'Skin',
    badge: 'Instant Radiance',
    badgeBg: '#EA580C',
    title: 'Chemical Peels & Glow',
    description: 'Medical-grade dermatological peels tailored to treat hyperpigmentation, melasma, sun damage, and dull skin for a refreshed, luminous glow.',
    feature1: 'Glycolic, Salicylic & Yellow peels',
    feature2: 'Evens skin tone & unclogs pores',
    href: '/treatments/aesthetics/chemical-peels/',
    image: '/images/slide_peel_new.jpg'
  },
  {
    id: 'botox-fillers',
    category: 'Laser & Aesthetics',
    badge: 'Anti-Aging',
    badgeBg: '#9333EA',
    title: 'Botox & Dermal Fillers',
    description: "Expert non-surgical facial sculpting to soften crow's feet, forehead furrows, and restore youthful volume to cheeks, lips, and smile lines.",
    feature1: 'Natural-looking expressive results',
    feature2: 'Certified, highly experienced doctor',
    href: '/treatments/aesthetics/skin-tightening/',
    image: '/images/imageye___-_imgi_9_skin-tightening-01.webp'
  },
  {
    id: 'skin-tightening',
    category: 'Laser & Aesthetics',
    badge: 'Non-Surgical Lift',
    badgeBg: '#0284C7',
    title: 'Skin Tightening (HIFU / RF)',
    description: 'High-intensity focused ultrasound and radiofrequency technologies that activate deep collagen remodeling to firm loose skin and sharpen the jawline.',
    feature1: 'Tightens jowls, neck & cheeks',
    feature2: 'Minimal downtime & no surgical incisions',
    href: '/treatments/aesthetics/skin-tightening/',
    image: '/images/slide_scar_model_new.jpg'
  },
  {
    id: 'vitiligo-surgery',
    category: 'Skin',
    badge: 'Clinical Dermatology',
    badgeBg: '#0D9488',
    title: 'Vitiligo Surgery & Therapy',
    description: 'Comprehensive medical therapy, targeted phototherapy, and specialized surgical punch grafting for stable vitiligo patches to restore natural skin pigmentation.',
    feature1: 'Advanced cellular melanocyte grafting',
    feature2: 'Evidence-based repigmentation plans',
    href: '/treatments/medical-dermatology/vitiligo/',
    image: '/images/imageye___-_imgi_21_Vitiligo.webp'
  },
  {
    id: 'hair-fall-prp',
    category: 'Hair',
    badge: 'Trichology Gold',
    badgeBg: '#D97706',
    title: 'Hair Fall & PRP Therapy',
    description: 'Platelet-Rich Plasma and concentrated Growth Factor Therapy to awaken dormant follicles, halt acute hair thinning, and accelerate dense new hair growth.',
    feature1: 'Own biological growth factors',
    feature2: 'Strengthens roots & increases hair shaft width',
    href: '/treatments/hair/hair-loss-treatment/',
    image: '/images/slide_hair_new.jpg'
  },
  {
    id: 'dandruff-scalp',
    category: 'Hair',
    badge: 'Scalp Health',
    badgeBg: '#16A34A',
    title: 'Dandruff & Scalp Dermatitis',
    description: 'Clinical diagnostic identification of underlying seborrheic dermatitis, malassezia overgrowth, and targeted medicated scalp detoxification treatments.',
    feature1: 'Eliminates stubborn flaking & itch',
    feature2: 'Restores healthy scalp microbiome',
    href: '/treatments/hair/hair-loss-treatment/',
    image: '/images/card_hair_fall.jpg'
  },
  {
    id: 'premature-grey',
    category: 'Hair',
    badge: 'Root Nutrition',
    badgeBg: '#475569',
    title: 'Premature Grey & Brittle Hair',
    description: 'Targeted nutritional, peptide, and antioxidant therapy to halt premature hair melanin loss, repair cuticle damage, and restore tensile hair strength.',
    feature1: 'Dermoscopic hair strand analysis',
    feature2: 'Restores elasticity & prevents breakage',
    href: '/treatments/hair/prp-gfc/',
    image: '/images/slide_hair_radiant.jpg'
  },
  {
    id: 'pcos-facial-hair',
    category: 'Laser & Aesthetics',
    badge: 'Precision Care',
    badgeBg: '#BE185D',
    title: 'Unwanted Facial Hair (PCOS)',
    description: 'Specialized hormonal hirsutism and facial hair reduction using gentle facial diode lasers, targeting upper lip, chin, and sideburns safely without irritation.',
    feature1: 'Safe on sensitive facial areas',
    feature2: 'Reduces hormonal coarse hair growth',
    href: '/treatments/laser/laser-hair-reduction/',
    image: '/images/slide_hydra_glow_new.jpg'
  },
  {
    id: 'fungal-bacterial',
    category: 'Skin',
    badge: 'Medical Dermatology',
    badgeBg: '#B91C1C',
    title: 'Fungal & Bacterial Infections',
    description: 'Accurate microbiological assessment and targeted systemic & topical antifungal/antibacterial regimens that resolve recurrent skin infections permanently.',
    feature1: 'Ringworm, folliculitis & candidiasis',
    feature2: 'Prevents chronic flare-ups',
    href: '/treatments/medical-dermatology/skin-allergies/',
    image: '/images/cat_medical_dermatology.jpg'
  },
  {
    id: 'eczema-dermatitis',
    category: 'Skin',
    badge: 'Relief & Restoration',
    badgeBg: '#2563EB',
    title: 'Eczema & Contact Dermatitis',
    description: 'Comprehensive barrier repair therapy, patch testing, and anti-inflammatory protocols designed to soothe intense itching, redness, and dry, cracked skin.',
    feature1: 'Non-steroidal barrier restoration',
    feature2: 'Personalized allergen trigger plan',
    href: '/treatments/medical-dermatology/eczema/',
    image: '/images/card_acne_pimples.jpg'
  }
];

export function SpecializedClinicalCare() {
  const [activeTab, setActiveTab] = useState<'All' | 'Skin' | 'Hair' | 'Laser & Aesthetics'>('All');

  const filtered = activeTab === 'All'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => t.category === activeTab);

  return (
    <section className="specialized-care-section" id="specialized-care">
      <div className="container">
        {/* Section Head */}
        <div className="section-head center">
          <span className="eyebrow-pill">SPECIALIZED CLINICAL CARE</span>
          <h2 className="section-title">
            Advanced Treatments for Radiant Skin &amp; Healthy Hair
          </h2>
          <p className="hero-lede center-block">
            From stubborn acne scars and unwanted hair reduction to hair fall reversal and non-surgical facial rejuvenation, Dr. Sujay M crafts science-backed clinical protocols that yield real results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="specialized-care-tabs" role="tablist" aria-label="Filter treatments by category">
          {(['All', 'Skin', 'Hair', 'Laser & Aesthetics'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`care-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'All' ? 'All Treatments' : tab === 'Skin' ? 'Skin Treatments' : tab === 'Hair' ? 'Hair Treatments' : 'Laser & Aesthetics'}
            </button>
          ))}
        </div>

        {/* 12 Treatments Grid */}
        <div className="specialized-treatments-grid">
          {filtered.map((item) => (
            <article className="specialized-card" key={item.id}>
              {/* Thumbnail */}
              <div className="specialized-card-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="specialized-card-img"
                />
                <span
                  className="specialized-card-badge"
                  style={{ backgroundColor: item.badgeBg }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="specialized-card-body">
                <h3 className="specialized-card-title">{item.title}</h3>
                <p className="specialized-card-desc">{item.description}</p>

                {/* Clinical Highlights */}
                <div className="specialized-card-features">
                  <div className="feature-bullet">
                    <span className="bullet-check">✓</span>
                    <span>{item.feature1}</span>
                  </div>
                  <div className="feature-bullet">
                    <span className="bullet-check">✓</span>
                    <span>{item.feature2}</span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="specialized-card-footer">
                  <Link href={item.href} className="btn-book-treatment">
                    <span>Book Treatment</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="center space-top">
          <Link href="/treatments/" className="btn outline">
            Explore All 25+ Clinical Dermatology Treatments →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SpecializedClinicalCare;
