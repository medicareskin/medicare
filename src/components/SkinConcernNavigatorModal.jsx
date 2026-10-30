import React, { useState } from 'react';
import { X, Sparkles, ChevronRight, ChevronLeft, Calendar, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    title: "What is your primary dermatological or hair concern?",
    subtitle: "Select the area you would like Dr. Sujay M to evaluate",
    options: [
      { id: "acne-active", label: "Active Acne & Pimples", icon: "•", desc: "Breakouts, whiteheads, blackheads, inflammation" },
      { id: "acne-scars", label: "Acne Scars & Enlarged Pores", icon: "•", desc: "Ice-pick, boxcar, rolling scars, uneven texture" },
      { id: "pigmentation", label: "Pigmentation & Melasma", icon: "•", desc: "Dark spots, sun damage, hormonal brown patches" },
      { id: "hair-loss", label: "Hair Fall & Scalp Thinning", icon: "•", desc: "Excessive shedding, patchy loss, receding crown" },
      { id: "laser-hair", label: "Unwanted Facial or Body Hair", icon: "•", desc: "Permanent hair reduction with US-FDA cooling laser" },
      { id: "medical-derm", label: "Skin Allergies, Eczema or Psoriasis", icon: "•", desc: "Itching, rashes, flaking, chronic skin conditions" }
    ]
  },
  {
    id: 2,
    title: "How long have you experienced this concern?",
    subtitle: "Understanding chronicity helps determine the appropriate therapeutic tier",
    options: [
      { id: "acute", label: "Recent onset (Less than 1 month)", icon: "•", desc: "Sudden flare-up or acute seasonal reaction" },
      { id: "subacute", label: "1 to 6 months", icon: "•", desc: "Persistent or gradually worsening over recent months" },
      { id: "chronic", label: "6 months to 2 years", icon: "•", desc: "Long-standing concern requiring structured medical plan" },
      { id: "recurrent", label: "2+ years / Recurring cycles", icon: "•", desc: "Stubborn condition with periodic relapses" }
    ]
  },
  {
    id: 3,
    title: "Which symptoms are most noticeable right now?",
    subtitle: "Identifies clinical priority for rapid comfort and long-term resolution",
    options: [
      { id: "sym-breakouts", label: "Active inflammation & tenderness", icon: "•", desc: "Sore pimples, redness, active pus lesions" },
      { id: "sym-darkness", label: "Uneven discoloration & dark marks", icon: "•", desc: "Post-inflammatory hyperpigmentation or melasma" },
      { id: "sym-shedding", label: "Severe shedding during washing/brushing", icon: "•", desc: "Noticeable hair volume loss and visible scalp" },
      { id: "sym-texture", label: "Pitted scars & rough skin depth", icon: "•", desc: "Dermal indentation that doesn't smooth with makeup" },
      { id: "sym-itching", label: "Intense itching, burning or flaking", icon: "•", desc: "Discomfort triggered by temperature or skincare" }
    ]
  },
  {
    id: 4,
    title: "What treatments have you tried previously?",
    subtitle: "Helps avoid duplicated therapies and guides advanced prescription",
    options: [
      { id: "prior-none", label: "None yet / First time consulting a specialist", icon: "•", desc: "Looking for an expert first-line medical opinion" },
      { id: "prior-otc", label: "Over-the-counter serums & home remedies", icon: "•", desc: "Salicylic acid, niacinamide, oils, commercial creams" },
      { id: "prior-salon", label: "Beauty parlour facials or salon treatments", icon: "•", desc: "Temporary glow without clinical root-cause diagnosis" },
      { id: "prior-rx", label: "Doctor-prescribed oral/topical medications", icon: "•", desc: "Partial relief; seeking specialized intervention" },
      { id: "prior-procs", label: "Prior in-clinic lasers, peels or microneedling", icon: "•", desc: "Need advanced revision or maintenance care" }
    ]
  },
  {
    id: 5,
    title: "What is your primary treatment objective?",
    subtitle: "Aligns your personal timeline with clinical expectations",
    options: [
      { id: "goal-rapid", label: "Fast symptomatic relief & calm skin", icon: "•", desc: "Stop active breakouts, itching, or sudden hair fall" },
      { id: "goal-cure", label: "Permanent clinical correction of root cause", icon: "•", desc: "Dermal remodeling, scar release, long-term stabilization" },
      { id: "goal-aesthetic", label: "Aesthetic enhancement, glow & even tone", icon: "•", desc: "Radiant, youthful complexion for upcoming events/life" },
      { id: "goal-prevent", label: "Preventative dermatology & long-term health", icon: "•", desc: "Barrier repair, anti-aging, and UV protection maintenance" }
    ]
  },
  {
    id: 6,
    title: "What is your preferred consultation mode?",
    subtitle: "Medicare Clinic is conveniently located near Yelachenahalli Metro",
    options: [
      { id: "mode-clinic", label: "In-Clinic Consultation (Yelachenahalli, South Bengaluru)", icon: "•", desc: "Full dermoscopic imaging, physical examination, procedure booking" },
      { id: "mode-video", label: "Online Video Dermatological Assessment", icon: "•", desc: "Initial clinical review and medical prescription from home" }
    ]
  }
];

export default function SkinConcernNavigatorModal({ isOpen, onClose, onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUESTIONS[currentStep];

  const handleSelectOption = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Clinician-reviewed non-diagnostic guidance rules (Section 5.1 & 7.7 of spec)
  const getGuidance = () => {
    const concernId = answers[1]?.id || 'acne-active';
    switch (concernId) {
      case 'acne-scars':
        return {
          title: "Dermal Scar Revision & Subcision Protocol",
          recommendations: [
            "Subcision to release tethered fibrous scar bands beneath the dermis",
            "Micro-Needling Radiofrequency (MNRF) or Fractional Resurfacing to stimulate neocollagenesis",
            "Medical TCA CROSS or gentle chemical peels for localized scar base elevation"
          ],
          clinicalNote: "Acne scars cannot be resolved with topical cosmetics alone because the fibrous tethers sit deep in the reticular dermis. Dr. Sujay M assesses scar depth and skin phototype before choosing the optimal multi-modality procedure."
        };
      case 'pigmentation':
        return {
          title: "Targeted Melanin Regulation & Depigmentation Suite",
          recommendations: [
            "Clinical Dermoscopy to distinguish epidermal melasma from dermal melanosis",
            "Q-Switched Laser Toning for selective photothermolysis of pigment clusters",
            "Medical Grade Glycolic / Arbutin Peels and broad-spectrum UVA/UVB barrier protection"
          ],
          clinicalNote: "Pigmentation has varied vascular, hormonal, and UV causes. Injudicious use of OTC steroid creams worsens melasma. A clinician assessment prevents rebound darkening."
        };
      case 'hair-loss':
        return {
          title: "Digital Trichoscopy & Scalp Rejuvenation Pathway",
          recommendations: [
            "Digital Trichoscopy assessment of miniaturized follicular density",
            "Autologous Growth Factor Therapy (GFT) / Peptide Mesotherapy to reactivate hair papillae",
            "Serum nutritional profiling (Ferritin, Vit D3, B12, Thyroid) combined with topical DHT blockers"
          ],
          clinicalNote: "Hair shedding often stems from a mix of telogen effluvium and androgenetic miniaturization. Early clinical intervention preserves dormant follicles before permanent scarring."
        };
      case 'laser-hair':
        return {
          title: "Medical Diode Laser Hair Reduction",
          recommendations: [
            "Contact-cooled chilled sapphire tip for safe, comfortable treatment on Indian skin types (Fitzpatrick III-V)",
            "Targeting follicle growth phase (Anagen) across 6 to 8 scheduled sessions",
            "Safe for face, chin, underarms, arms, legs, and full body with zero downtime"
          ],
          clinicalNote: "Our US-FDA cleared diode laser safely protects surface melanin with active contact chilling while thermally disabling the deeper hair bulb."
        };
      case 'medical-derm':
        return {
          title: "Evidence-Based Medical Dermatology & Allergy Evaluation",
          recommendations: [
            "Standardized Clinical Patch Testing to isolate contact allergens",
            "Non-steroidal topical immunomodulators and barrier lipid restorative emulsions",
            "Targeted phototherapy or dermatological biopsy where definitive histological grading is needed"
          ],
          clinicalNote: "Chronic eczema, psoriasis, and dermatitis require medical supervision to achieve sustained symptom control without long-term steroid atrophy."
        };
      default:
        return {
          title: "Comprehensive Clinical Acne & Barrier Care",
          recommendations: [
            "Gentle comedone extraction and medical beta-hydroxy peels",
            "Prescription topical retinoids combined with targeted anti-inflammatory therapy",
            "Non-comedogenic barrier restoration to prevent post-inflammatory hyperpigmentation (PIH)"
          ],
          clinicalNote: "Active acne is an inflammatory disease of the pilosebaceous unit. Early treatment prevents long-term scarring and textural pitting."
        };
    }
  };

  const guidance = getGuidance();

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(43, 27, 77, 0.45)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="modal-content-box"
        style={{
          maxWidth: '680px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(36px) saturate(200%)',
          WebkitBackdropFilter: 'blur(36px) saturate(200%)',
          borderRadius: '30px',
          border: '2px solid rgba(255, 255, 255, 0.98)',
          boxShadow: '0 32px 80px rgba(148, 40, 118, 0.28), inset 0 2px 3px rgba(255, 255, 255, 1)',
          padding: '36px 40px',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(148, 40, 118, 0.08)',
            border: '1px solid rgba(148, 40, 118, 0.15)',
            color: '#942876',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          title="Close Navigator"
        >
          <X size={20} />
        </button>

        {!isCompleted ? (
          <div>
            {/* Step Progress Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span
                style={{
                  background: 'rgba(148, 40, 118, 0.08)',
                  color: '#942876',
                  padding: '5px 14px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={14} color="#942876" />
                SKIN CONCERN NAVIGATOR • STEP {currentStep + 1} OF {QUESTIONS.length}
              </span>

              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#942876',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ChevronLeft size={16} /> Back
                </button>
              )}
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '6px', background: 'rgba(148, 40, 118, 0.1)', borderRadius: '3px', marginBottom: '28px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #942876 0%, #C8509B 100%)',
                  borderRadius: '3px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>

            {/* Question Details */}
            <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '26px', fontWeight: 650, color: '#153F39', margin: '0 0 8px', lineHeight: 1.3 }}>
              {currentQ.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#6B5872', margin: '0 0 28px' }}>
              {currentQ.subtitle}
            </p>

            {/* Options Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentQ.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(currentQ.id, opt)}
                  className="navigator-option-btn btn-3d-tactile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 20px',
                    borderRadius: '18px',
                    background: answers[currentQ.id]?.id === opt.id
                      ? 'rgba(148, 40, 118, 0.08)'
                      : 'rgba(255, 255, 255, 0.85)',
                    border: answers[currentQ.id]?.id === opt.id
                      ? '2px solid #942876'
                      : '1.5px solid rgba(148, 40, 118, 0.15)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(148, 40, 118, 0.04)'
                  }}
                >
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{opt.icon}</span>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#2B1B4D', marginBottom: '2px' }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#73617A' }}>
                      {opt.desc}
                    </div>
                  </div>
                  <ChevronRight size={18} color="#942876" style={{ flexShrink: 0 }} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Results & Educational Guidance View */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span
                style={{
                  background: 'rgba(148, 40, 118, 0.08)',
                  color: '#942876',
                  padding: '6px 18px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '12px'
                }}
              >
                <ShieldCheck size={16} color="#942876" />
                CLINICIAN-REVIEWED EDUCATIONAL GUIDANCE
              </span>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '28px', fontWeight: 650, color: '#153F39', margin: '0 0 8px' }}>
                {guidance.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#6B5872', maxWidth: '520px', margin: '0 auto' }}>
                Based on your profile, here is an educational summary of clinical procedures typically evaluated by Dr. Sujay M.
              </p>
            </div>

            {/* Recommended Procedure Pathway */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1.5px solid rgba(148, 40, 118, 0.2)',
                borderRadius: '20px',
                padding: '20px 24px',
                marginBottom: '20px',
                boxShadow: '0 8px 24px rgba(148, 40, 118, 0.06)'
              }}
            >
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>
                Procedures Evaluated for This Profile:
              </h4>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {guidance.recommendations.map((rec, rIdx) => (
                  <li key={rIdx} style={{ fontSize: '13.5px', color: '#2B1B4D', lineHeight: 1.5 }}>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Note & Mandatory Safeguard (Section 5.1 of spec) */}
            <div
              style={{
                background: 'rgba(148, 40, 118, 0.04)',
                borderLeft: '4px solid #942876',
                padding: '14px 18px',
                borderRadius: '8px',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <AlertCircle size={18} color="#942876" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Non-Diagnostic Guidance (Medical Disclaimer)
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#5C4D68', lineHeight: 1.5, marginTop: '4px' }}>
                    {guidance.clinicalNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="btn-primary btn-3d-tactile"
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }}
                style={{ flex: 1, padding: '16px 24px', justifyContent: 'center' }}
              >
                <Calendar size={18} /> Book Consultation with Dr. Sujay M
              </button>

              <button
                className="btn-secondary btn-3d-tactile"
                onClick={handleReset}
                style={{ padding: '16px 20px' }}
              >
                Retake Navigator
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
