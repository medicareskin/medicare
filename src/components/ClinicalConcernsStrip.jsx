import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, X, Phone, Calendar } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   AUTHENTIC LINE-ART DERMATOLOGY SVGS (Pixel-matched to Reference)
────────────────────────────────────────────────────────────── */

// 1. Wrinkles Icon: Elegant face profile with magnifying loupe inspecting fine lines & crow's feet
function WrinklesIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="concern-svg"
      aria-hidden="true"
    >
      {/* Face profile & jawline */}
      <path
        d="M26 14C23 18 20 24 20 31C20 37 22 41 24 45C26.5 50 31 53 36 54C41 55 45 52 47 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Forehead & hairline curve */}
      <path
        d="M32 12C28 12 24 14 22 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Closed serene eye & eyelash */}
      <path
        d="M25 32C27 34 30 34 32 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M27 34L26 36.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M30 34L31 36.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Gentle nose bridge */}
      <path
        d="M22 28C21.5 32 21 35 22 37C23 39 25 39.5 26 39.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Lip curve */}
      <path
        d="M26 44C28 44.5 30 44.5 32 44"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Ear contour */}
      <path
        d="M44 33C45.5 33 47 35 46.5 38C46 41 44 43 42 43"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Hair strands sweeping behind */}
      <path
        d="M36 12C44 14 50 20 50 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Magnifying Loupe placed over eye / temple */}
      <circle
        cx="44"
        cy="25"
        r="14"
        stroke="currentColor"
        strokeWidth="1.7"
        fill="white"
        fillOpacity="0.8"
      />
      {/* Loupe handle */}
      <path
        d="M54 35L62 43"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Magnified Wrinkle & Crow's Feet Lines inside Loupe */}
      <path
        d="M37 20C40 19 44 19.5 48 19"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M36 24C41 23.5 45 24 50 23.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 28C42 28.5 46 28 50 29"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Radiating Crow's feet fan */}
      <path
        d="M48 24L52 21"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M49 26L53 27"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Melasma Icon: Serene face with pigmentation spots & magnifying loupe examining melanin cluster
function MelasmaIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="concern-svg"
      aria-hidden="true"
    >
      {/* Frontal oval face outline */}
      <path
        d="M24 24C24 16 28 12 36 12C44 12 48 16 48 24C48 36 46 48 36 53C28 49 24 37 24 24Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Eyebrows */}
      <path
        d="M28 22C30 21 32 21 34 22"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M38 22C40 21 42 21 44 22"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Closed serene eyes */}
      <path
        d="M29 26C30.5 27.5 32.5 27.5 34 26"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M38 26C39.5 27.5 41.5 27.5 43 26"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Small nose contour */}
      <path
        d="M36 28V33C35 34 37 34 36 34"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Lips */}
      <path
        d="M33 39C35 40 37 40 39 39"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Melasma / Hyperpigmentation Spots on Face */}
      <circle cx="30" cy="32" r="1" fill="currentColor" />
      <circle cx="32" cy="35" r="0.9" fill="currentColor" />
      <circle cx="28" cy="36" r="1.1" fill="currentColor" />
      <circle cx="31" cy="38" r="0.8" fill="currentColor" />
      <circle cx="34" cy="17" r="0.8" fill="currentColor" />
      <circle cx="37" cy="18" r="1" fill="currentColor" />

      {/* Magnifying Loupe over cheek melasma patch */}
      <circle
        cx="48"
        cy="38"
        r="14"
        stroke="currentColor"
        strokeWidth="1.7"
        fill="white"
        fillOpacity="0.85"
      />
      {/* Loupe handle */}
      <path
        d="M58 48L64 54"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Magnified Pigmentation clusters inside Loupe */}
      <circle cx="44" cy="34" r="2.2" fill="currentColor" />
      <circle cx="50" cy="33" r="1.6" fill="currentColor" />
      <circle cx="47" cy="39" r="2.8" fill="currentColor" />
      <circle cx="52" cy="40" r="1.8" fill="currentColor" />
      <circle cx="43" cy="43" r="1.4" fill="currentColor" />
      <circle cx="49" cy="44" r="1.2" fill="currentColor" />
    </svg>
  );
}

// 3. Premature Grey Hair Icon: Elegant silhouette of cascading wavy long hair
function PrematureGreyHairIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="concern-svg"
      aria-hidden="true"
    >
      {/* Woman's head silhouette profile looking right */}
      <path
        d="M44 26C45 27 46 28 46 30C46 32 44.5 33 43.5 33.5C42.5 34 43 35.5 43.5 36.5C44 37.5 43 39 41 39.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Serene face profile line */}
      <path
        d="M41 24C41 22 40 20 38 18C35 15 30 15 28 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Flowing Cascading Hair Waves (Matching Reference Line-Art) */}
      <path
        d="M32 15C36 12 43 14 45 18C47 22 45 28 41 32C37 36 34 41 36 47C38 52 42 55 43 60"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M28 19C33 18 39 20 40 25C41 30 38 34 34 38C30 42 28 47 30 53C32 58 37 60 38 63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 25C30 26 34 29 35 34C36 39 33 43 29 47C25 51 24 56 27 60C29 63 32 64 34 65"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Deep inner wave flourishes */}
      <path
        d="M35 17C38 20 37 25 33 28C29 31 27 36 28 42C29 47 34 50 35 55"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M43 21C46 25 45 30 41 34C37 38 37 43 39 48"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4. Microdermabrasion Icon: Face with hair in bun treated by aesthetic handpiece wand
function MicrodermabrasionIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="concern-svg"
      aria-hidden="true"
    >
      {/* Hair Bun on top */}
      <circle
        cx="34"
        cy="13"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M31 13C33 11.5 35 11.5 37 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Headband across hairline */}
      <path
        d="M23 23C27 19 41 19 45 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Serene face profile / front */}
      <path
        d="M24 24C24 35 27 47 34 51C41 47 44 35 44 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Serene closed eyes */}
      <path
        d="M28 29C29.5 30.5 31.5 30.5 33 29"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M35 29C36.5 30.5 38.5 30.5 40 29"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Nose and lips */}
      <path
        d="M34 32V36H35"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M32 40C33.5 41 35 41 36.5 40"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Aesthetic Microdermabrasion / HydraFacial Wand Device */}
      {/* Wand Tip touching cheek */}
      <path
        d="M40 37L45 35.5L46 39L41 40L40 37Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Wand Main Body Handpiece */}
      <path
        d="M46 36L56 32L58 37L48 41L46 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="white"
      />
      {/* Grip grooves on wand */}
      <line x1="50" y1="34" x2="51" y2="39" stroke="currentColor" strokeWidth="1.2" />
      <line x1="53" y1="33" x2="54" y2="38" stroke="currentColor" strokeWidth="1.2" />

      {/* Wand suction/infusion cord */}
      <path
        d="M58 35C62 36 64 40 62 44C60 48 64 51 67 52"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Gentle dermal vortex / infusion waves at contact point */}
      <path
        d="M37 36C36.5 37.5 36.5 39 37 40.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M35 34.5C34 37 34 39.5 35 42"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   CLINICAL CONCERNS DATA DEFINITION
────────────────────────────────────────────────────────────── */

export const POPULAR_CONCERNS_DATA = [
  {
    id: 'wrinkles',
    title: 'Wrinkles',
    category: 'Skin Care & Anti-Ageing',
    icon: <WrinklesIcon />,
    description: 'Fine lines, crow’s feet, and expression creases addressed through medical Botox, dermal fillers, and collagen induction RF.',
    targetTab: 'skin',
    actionType: 'booking',
    prefillConcern: 'Wrinkles & Anti-Ageing Assessment',
    highlightBadge: 'Anti-Ageing & Contouring'
  },
  {
    id: 'melasma',
    title: 'Melasma',
    category: 'Laser & Pigmentation',
    icon: <MelasmaIcon />,
    description: 'Doctor-guided Q-Switched Nd:YAG laser toning & clinical depigmentation peels engineered for deep dermal hyperpigmentation.',
    targetTab: 'q-switched-laser',
    actionType: 'navigate',
    prefillConcern: 'Melasma & Laser Pigmentation Toning',
    highlightBadge: 'Q-Switched Laser Toning'
  },
  {
    id: 'premature-grey-hair',
    title: 'Premature Grey Hair',
    category: 'Trichology & Hair Care',
    icon: <PrematureGreyHairIcon />,
    description: 'Comprehensive dermatological trichology evaluation targeting follicular oxidative stress, nutritional deficiencies & scalp health.',
    targetTab: 'hair',
    actionType: 'navigate',
    prefillConcern: 'Premature Grey Hair & Trichology Evaluation',
    highlightBadge: 'Trichology & Scalp Care'
  },
  {
    id: 'microdermabrasion',
    title: 'Microdermabrasion',
    category: 'Aesthetic Exfoliation',
    icon: <MicrodermabrasionIcon />,
    description: 'Advanced medical hydradermabrasion & HydraFacial diamond vortex technology for instant glass-skin radiance and pore refinement.',
    targetTab: 'hydrafacial',
    actionType: 'navigate',
    prefillConcern: 'Microdermabrasion & HydraFacial Session',
    highlightBadge: 'Vortex Deep Cleansing'
  }
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT: ClinicalConcernsStrip
────────────────────────────────────────────────────────────── */

export default function ClinicalConcernsStrip({
  onSelectConcern,
  onOpenBooking,
  onTabChange
}) {
  const [selectedConcern, setSelectedConcern] = useState(null);

  const handleClick = (item) => {
    if (onSelectConcern) {
      onSelectConcern(item);
    }

    if (item.actionType === 'navigate' && onTabChange) {
      onTabChange(item.targetTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.actionType === 'booking' && onOpenBooking) {
      onOpenBooking({ concern: item.prefillConcern });
    } else if (onTabChange) {
      onTabChange(item.targetTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="clinical-concerns-strip-wrap" aria-label="Clinical Concerns and Procedures">
      <div className="concerns-strip-container">
        <div className="concerns-strip-grid" role="list">
          {POPULAR_CONCERNS_DATA.map((item) => (
            <div
              key={item.id}
              className="concern-col-item"
              role="listitem"
              tabIndex={0}
              onClick={() => handleClick(item)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(item)}
              aria-label={`Learn about ${item.title} treatment`}
            >
              {/* Minimalist Medical Line-Art Icon */}
              <div className="concern-icon-wrapper" aria-hidden="true">
                {item.icon}
              </div>

              {/* Classy Editorial Serif Title */}
              <h3 className="concern-serif-title">{item.title}</h3>

              {/* Minimalist Centered Arrow */}
              <div className="concern-arrow-action">
                <span className="concern-arrow-symbol" aria-hidden="true">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
