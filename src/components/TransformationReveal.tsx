'use client';
import { useState } from 'react';
import Link from 'next/link';

interface StorySlide {
  image: string;
  badge: string;
  title: string;
  description: string;
  protocol: string;
}

const STORY_SLIDES: StorySlide[] = [
  {
    image: '/images/medicare_clinic_reception.jpg',
    badge: 'Clinical Care Philosophy',
    title: 'Diagnosis-First Dermatology Care',
    description: 'At Medicare Skin, we don’t offer temporary salon facials or unscientific fixes. Every treatment is prescribed and customized after evaluating your skin barrier, hormones, and medical history.',
    protocol: 'Dermatologist Evaluation & Root-Cause Protocol'
  },
  {
    image: '/images/cat_skin_care.jpg',
    badge: 'Step 1: Identifying Skin Fatigue',
    title: 'Addressing Dull, Tired & Uneven Skin',
    description: 'Pollution, UV radiation, and stress impair cellular turnover. We diagnose underlying oxidative stress and pigment accumulation before recommending targeted resurfacing.',
    protocol: 'Medical Peels & Hydration Rebalancing'
  },
  {
    image: '/images/card_acne_pimples.jpg',
    badge: 'Step 2: Calming Inflammation',
    title: 'Clearing Breakouts & Active Pimples',
    description: 'Treating active acne without damaging surrounding healthy tissue. We use medical-grade topicals and gentle comedone clearance to prevent deep scarring and PIH.',
    protocol: 'Acne Defense & Anti-Inflammatory Protocol'
  },
  {
    image: '/images/slide_hair_radiant.jpg',
    badge: 'Step 3: Clinical Radiance',
    title: 'Calm, Clear & Resilient Results',
    description: 'Restored skin barrier integrity, refined texture, and long-lasting glow through science-backed clinical treatments overseen directly by Dr. Sujay M.',
    protocol: 'Long-term Maintenance & Sun Protection'
  }
];

const CLINICAL_CASES = [
  {
    title: 'Full Facial Glow & Texture Refinement',
    category: 'Skin Resurfacing',
    image: '/slide-img/glow_transformation_clean.jpg',
    badge: 'Dull & Uneven → Glowing & Hydrated',
    notes: 'HydraFacial Vortex Infusion + Gentle Mandelic Acid Peel'
  },
  {
    title: 'Severe Acne & Textured Skin Revision',
    category: 'Acne Protocol',
    image: '/slide-img/98874dd1eae0b34c8798464c6c3f1c7d.jpg',
    badge: 'Active Breakouts → Clear & Smooth',
    notes: 'Medical Comedone Clearance + Salicylic Peel + Oral Therapy'
  },
  {
    title: 'Post-Acne Scars & Texture Smoothing',
    category: 'Scar Revision',
    image: '/slide-img/Scar Treatment.jpg',
    badge: 'Depressed Scars → Collagen Remodeling',
    notes: 'Subcision + Microneedling RF (MNRF) Protocol'
  },
  {
    title: 'Pigmentation & Melasma Lightening',
    category: 'Laser Dermatology',
    image: '/slide-img/melasma_transformation_clean.jpg',
    badge: 'Uneven Tone → Clear & Radiant',
    notes: 'US FDA Q-Switched Nd:YAG Laser + Depigmenting Serums'
  }
];

export function TransformationReveal() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="transformation-section" aria-label="Clinical transformation stories">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading-center">
          <span className="eyebrow-pill">PATIENT RESULTS & EVIDENCE</span>
          <h2 className="section-title-large">Real Skin Transformations Through Dermatologist Care</h2>
          <p className="section-subtitle">
            Ethical dermatology focuses on measurable skin health and safety. Observe our step-by-step approach from diagnosis to clear, resilient skin.
          </p>
        </div>

        {/* Interactive Slide Story Walkthrough */}
        <div className="story-walkthrough-card">
          <div className="story-walkthrough-grid">
            {/* Left: Active Story Visual */}
            <div className="story-image-column">
              <div className="story-image-frame">
                <img 
                  src={STORY_SLIDES[activeStep].image} 
                  alt={STORY_SLIDES[activeStep].title} 
                  className="story-main-img"
                />
                <span className="story-phase-badge">{STORY_SLIDES[activeStep].badge}</span>
              </div>
            </div>

            {/* Right: Step Navigator & Details */}
            <div className="story-content-column">
              <div className="story-step-pills">
                {STORY_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`story-step-pill ${activeStep === idx ? 'active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    Phase 0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="story-text-body">
                <span className="story-tagline">Clinical Journey · Step {activeStep + 1} of {STORY_SLIDES.length}</span>
                <h3 className="story-title">{STORY_SLIDES[activeStep].title}</h3>
                <p className="story-desc">{STORY_SLIDES[activeStep].description}</p>

                <div className="story-protocol-box">
                  <svg className="protocol-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
                  <div>
                    <small>Prescribed Approach</small>
                    <strong>{STORY_SLIDES[activeStep].protocol}</strong>
                  </div>
                </div>

                <div className="story-actions">
                  <Link href="/book-appointment/" className="btn primary">
                    Schedule Your Assessment →
                  </Link>
                  <Link href="/doctors/dr-sujay-m/" className="btn outline">
                    Meet Dr. Sujay M
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Case Comparisons Grid */}
        <div className="clinical-cases-grid">
          {CLINICAL_CASES.map((item) => (
            <div key={item.title} className="clinical-case-card">
              <div className="case-image-wrap">
                <img src={item.image} alt={item.title} className="case-img" loading="lazy" />
                <span className="case-badge-pill">{item.badge}</span>
              </div>
              <div className="case-card-body">
                <span className="case-category">{item.category}</span>
                <h4 className="case-title">{item.title}</h4>
                <p className="case-notes"><strong>Protocol:</strong> {item.notes}</p>
                <Link href="/book-appointment/" className="case-link">
                  Consult Doctor About This Condition →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
