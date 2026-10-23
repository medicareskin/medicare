import React, { useState } from 'react';
import { X, Calculator, Calendar, ShieldCheck, AlertCircle, Info, Sparkles } from 'lucide-react';

const TREATMENTS_COST_DATA = [
  {
    id: "acne-scars",
    name: "Acne Scar Revision (Subcision + MNRF)",
    basePrice: 4500,
    unit: "session",
    areas: [
      { id: "cheeks", name: "Cheeks & Temples", multiplier: 1.0 },
      { id: "full-face", name: "Full Face", multiplier: 1.35 },
      { id: "face-neck", name: "Face & Neck", multiplier: 1.6 }
    ],
    desc: "Targeted subcision release of tethered fibrous scars combined with insulated RF microneedling"
  },
  {
    id: "laser-hair",
    name: "US-FDA Diode Laser Hair Reduction",
    basePrice: 2000,
    unit: "session",
    areas: [
      { id: "underarms", name: "Underarms or Upper Lip", multiplier: 1.0 },
      { id: "full-face", name: "Full Face & Neck", multiplier: 1.8 },
      { id: "arms-legs", name: "Full Arms & Underarms", multiplier: 2.8 },
      { id: "full-body", name: "Full Body Laser Suite", multiplier: 5.5 }
    ],
    desc: "Triple wavelength chilled diode laser for permanent hair follicle miniaturization"
  },
  {
    id: "chemical-peels",
    name: "Clinical Dermatological Chemical Peels",
    basePrice: 1800,
    unit: "session",
    areas: [
      { id: "face", name: "Full Face (Glow / Acne)", multiplier: 1.0 },
      { id: "face-neck", name: "Face & Neck Depigmentation", multiplier: 1.3 },
      { id: "back", name: "Back or Upper Chest", multiplier: 1.8 }
    ],
    desc: "Customized medical AHA/BHA and arbutin formulations for cellular turnover and glow"
  },
  {
    id: "hair-gft",
    name: "Growth Factor Scalp Therapy (GFT)",
    basePrice: 3800,
    unit: "session",
    areas: [
      { id: "crown", name: "Crown / Vertex Region", multiplier: 1.0 },
      { id: "frontal-crown", name: "Frontal Hairline & Crown", multiplier: 1.25 },
      { id: "full-scalp", name: "Full Scalp Protocol", multiplier: 1.5 }
    ],
    desc: "Autologous high-concentration growth factor cocktail for follicular bio-stimulation"
  },
  {
    id: "qswitch-laser",
    name: "Q-Switched Nd:YAG Laser Toning / Carbon Peel",
    basePrice: 3200,
    unit: "session",
    areas: [
      { id: "face", name: "Full Face Toning", multiplier: 1.0 },
      { id: "face-neck", name: "Face, Neck & Decollete", multiplier: 1.4 }
    ],
    desc: "Sub-nanosecond acoustic photo-acoustic breakdown of deep dermal hyperpigmentation"
  }
];

export default function TreatmentCostPlannerModal({ isOpen, onClose, onOpenBooking }) {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(TREATMENTS_COST_DATA[0].id);
  const [selectedAreaId, setSelectedAreaId] = useState(TREATMENTS_COST_DATA[0].areas[0].id);
  const [sessionsCount, setSessionsCount] = useState(3);

  if (!isOpen) return null;

  const currentTreatment = TREATMENTS_COST_DATA.find((t) => t.id === selectedTreatmentId) || TREATMENTS_COST_DATA[0];
  const currentArea = currentTreatment.areas.find((a) => a.id === selectedAreaId) || currentTreatment.areas[0];

  // Calculate pricing with package savings
  const singleSessionCost = Math.round(currentTreatment.basePrice * currentArea.multiplier);
  const packageDiscount = sessionsCount === 6 ? 0.20 : sessionsCount === 3 ? 0.10 : 0.0;
  const totalCost = Math.round(singleSessionCost * sessionsCount * (1 - packageDiscount));
  const minEstimate = Math.round(totalCost * 0.95);
  const maxEstimate = Math.round(totalCost * 1.10);

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
          background: 'rgba(255, 255, 255, 0.95)',
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
          title="Close Cost Planner"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
              marginBottom: '10px'
            }}
          >
            <Calculator size={15} color="#942876" />
            TREATMENT COST & PROTOCOL PLANNER
          </span>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '28px', fontWeight: 650, color: '#153F39', margin: '0 0 8px' }}>
            Transparent Clinical Fee Estimator
          </h3>
          <p style={{ fontSize: '13.5px', color: '#6B5872', maxWidth: '520px', margin: '0 auto' }}>
            Explore indicative session fees and protocol packages backed by Dr. Sujay M. Honest pricing with zero hidden charges.
          </p>
        </div>

        {/* Form Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
          {/* Treatment Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
              1. Select Clinical Treatment:
            </label>
            <select
              value={selectedTreatmentId}
              onChange={(e) => {
                setSelectedTreatmentId(e.target.value);
                const nextT = TREATMENTS_COST_DATA.find((t) => t.id === e.target.value);
                if (nextT) setSelectedAreaId(nextT.areas[0].id);
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '14px',
                border: '1.5px solid rgba(148, 40, 118, 0.25)',
                background: 'rgba(255, 255, 255, 0.85)',
                fontSize: '14px',
                color: '#2B1B4D',
                fontWeight: 600
              }}
            >
              {TREATMENTS_COST_DATA.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <div style={{ fontSize: '12px', color: '#73617A', marginTop: '6px' }}>
              {currentTreatment.desc}
            </div>
          </div>

          {/* Area Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
              2. Select Treatment Area:
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {currentTreatment.areas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedAreaId(area.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: selectedAreaId === area.id ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)' : 'rgba(255, 255, 255, 0.8)',
                    color: selectedAreaId === area.id ? '#FFF' : '#2B1B4D',
                    border: selectedAreaId === area.id ? '1px solid transparent' : '1px solid rgba(148, 40, 118, 0.2)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {area.name}
                </button>
              ))}
            </div>
          </div>

          {/* Session Package Protocol */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#2B1B4D', marginBottom: '8px' }}>
              3. Recommended Protocol & Sessions:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {[
                { count: 1, label: "Single Session", badge: "Standard" },
                { count: 3, label: "3-Session Protocol", badge: "10% Package Savings" },
                { count: 6, label: "6-Session Complete", badge: "20% Package Savings" }
              ].map((pkg) => (
                <button
                  key={pkg.count}
                  type="button"
                  onClick={() => setSessionsCount(pkg.count)}
                  style={{
                    padding: '12px 10px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: sessionsCount === pkg.count ? 'rgba(148, 40, 118, 0.08)' : 'rgba(255, 255, 255, 0.8)',
                    border: sessionsCount === pkg.count ? '2px solid #942876' : '1.5px solid rgba(148, 40, 118, 0.15)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#2B1B4D' }}>
                    {pkg.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#942876', fontWeight: 600, marginTop: '2px' }}>
                    {pkg.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estimated Price Card with 3D Depth */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(148, 40, 118, 0.06) 0%, rgba(200, 80, 155, 0.1) 100%)',
            border: '1.5px solid rgba(148, 40, 118, 0.25)',
            borderRadius: '24px',
            padding: '24px 28px',
            marginBottom: '22px',
            boxShadow: '0 12px 32px rgba(148, 40, 118, 0.08)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#942876', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Indicative Estimate Range ({sessionsCount} {sessionsCount === 1 ? 'Session' : 'Sessions'})
              </div>
              <div style={{ fontSize: '32px', fontFamily: "'Fraunces', Georgia, serif", fontWeight: 650, color: '#153F39', margin: '4px 0 0' }}>
                ₹{minEstimate.toLocaleString()} – ₹{maxEstimate.toLocaleString()}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(148, 40, 118, 0.2)', color: '#942876', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700 }}>
                Dr. Sujay M Supervised
              </span>
            </div>
          </div>

          {/* Included Features */}
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(148, 40, 118, 0.15)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            <div style={{ fontSize: '12px', color: '#5C4D68' }}>
              ✓ Dermatologist Evaluation Included
            </div>
            <div style={{ fontSize: '12px', color: '#5C4D68' }}>
              ✓ Sterile Single-Use Consumables
            </div>
            <div style={{ fontSize: '12px', color: '#5C4D68' }}>
              ✓ Post-Procedure Soothing Pack
            </div>
            <div style={{ fontSize: '12px', color: '#5C4D68' }}>
              ✓ Digital Follow-up Review
            </div>
          </div>
        </div>

        {/* Mandatory Safeguard & Disclaimer (Section 5.2 of spec) */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            borderLeft: '4px solid #942876',
            padding: '12px 16px',
            borderRadius: '6px',
            marginBottom: '26px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <AlertCircle size={16} color="#942876" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '12px', color: '#5C4D68', lineHeight: 1.5 }}>
              <strong>Clinical & Fee Disclaimer:</strong> Indicative only — final treatment plan and accurate quote follows direct consultation and clinical diagnosis by Dr. Sujay M. No generic packages are enforced without patient consent.
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            className="btn-primary btn-3d-tactile"
            onClick={() => {
              onClose();
              if (onOpenBooking) onOpenBooking();
            }}
            style={{ flex: 1, padding: '16px 24px', justifyContent: 'center' }}
          >
            <Calendar size={18} /> Book Consultation with This Plan
          </button>
          <button
            className="btn-secondary btn-3d-tactile"
            onClick={onClose}
            style={{ padding: '16px 20px' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
