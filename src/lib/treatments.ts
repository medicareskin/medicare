export type TreatmentCategory = 'Skin' | 'Hair' | 'Laser' | 'Aesthetics' | 'Medical Dermatology';

export type Treatment = {
  slug: string;
  title: string;
  category: TreatmentCategory;
  summary: string;
  description: string;
  causes: string[];
  suitability: string[];
  process: string[];
  benefits: string[];
  risks: string[];
  aftercare: string[];
  pricing: string;
  faqs: { q: string; a: string }[];
  available: boolean;
  metaTitle: string;
  metaDescription: string;
  aliases?: string[];
  related?: string[];
};

export const categoryToSlug = (cat: string): string => cat.toLowerCase().replace(/\s+/g, '-');

export const slugToCategory: Record<string, TreatmentCategory> = {
  skin: 'Skin',
  hair: 'Hair',
  laser: 'Laser',
  aesthetics: 'Aesthetics',
  'medical-dermatology': 'Medical Dermatology',
};

export const treatmentPath = (t: Treatment): string =>
  `/treatments/${categoryToSlug(t.category)}/${t.slug}/`;

const make = (
  p: Partial<Treatment> & Pick<Treatment, 'slug' | 'title' | 'category' | 'summary'>
): Treatment => ({
  description:
    'A dermatologist examines the concern, explains appropriate treatments, possible side effects and realistic outcomes. Not everyone requires a procedure.',
  causes: [
    'Individual skin and medical history',
    'Environmental or lifestyle factors',
    'The specific underlying condition',
  ],
  suitability: [
    'Concerns that persist despite routine skincare',
    'Patients seeking an informed diagnosis and treatment discussion',
  ],
  process: [
    'Clinical history and examination',
    'Review suitability, alternatives and risks',
    'Agree on an individual care plan',
    'Follow-up according to clinical need',
  ],
  benefits: [
    'A clearer understanding of your concern',
    'Individualized medical guidance',
    'A plan matched to your skin and goals',
  ],
  risks: [
    'All procedures have possible side effects',
    'Response depends on diagnosis and individual factors',
  ],
  aftercare: [
    'Follow clinician-provided instructions',
    'Use suitable skincare and sun protection',
    'Seek advice for unexpected symptoms',
  ],
  pricing:
    'Consultation and procedure fees depend on the diagnosis, technology, area treated and number of sessions. Request current approved fees from the clinic.',
  faqs: [
    {
      q: 'How many sessions will I need?',
      a: 'The number varies by diagnosis and treatment selected. Your dermatologist will explain what is reasonable for you.',
    },
    {
      q: 'Will results be permanent?',
      a: 'Outcomes vary and some conditions recur. Long-term maintenance may be necessary.',
    },
    {
      q: 'How do I know if this treatment is right for me?',
      a: 'A medical assessment is the best starting point; do not choose procedures based only on advertising.',
    },
  ],
  available: false,
  metaTitle: `${p.title} in South Bengaluru | Medicare Skin`,
  metaDescription: `Understand ${p.title.toLowerCase()}, suitability, treatment options and safety at Medicare Skin near Yelachenahalli Metro Station in Bengaluru.`,
  ...p,
});

export const treatments: Treatment[] = [
  // 1. SKIN
  make({
    slug: 'acne-treatment',
    title: 'Acne Treatment',
    category: 'Skin',
    summary: 'Assessment and evidence-based management of active pimples and breakouts.',
    available: true,
    description:
      'Acne is an inflammatory condition affecting hair follicles and oil glands. Care depends on severity, lesion type, scarring risk and medical history.',
    causes: [
      'Blocked follicles and excess sebum',
      'Inflammation and hormonal influences',
      'Certain medicines or comedogenic products',
    ],
    risks: [
      'Irritation from some topical therapies',
      'Risk of scarring with untreated severe acne',
      'Pregnancy-related restrictions for certain treatments',
    ],
    faqs: [
      {
        q: 'Do facials cure acne?',
        a: 'No. Medical acne treatment may be needed, particularly for painful or inflammatory acne.',
      },
      {
        q: 'When should I see a dermatologist?',
        a: 'Seek assessment for painful nodules, scarring, persistent outbreaks or significant distress.',
      },
    ],
  }),
  make({
    slug: 'acne-scar-treatment',
    title: 'Acne Scar Treatment',
    category: 'Skin',
    summary: 'Dermatologist-led planning for pitted scars and uneven skin texture.',
    available: true,
    description:
      'Acne scars may be depressed, raised or accompanied by pigment change. Scar type and Indian skin tone matter when considering subcision, microneedling and laser approaches.',
    causes: [
      'Previous inflammatory acne',
      'Individual scar-healing response',
      'Untreated or delayed acne care',
    ],
    risks: [
      'Temporary redness or downtime',
      'Post-inflammatory pigmentation',
      'Incomplete response and variable improvement',
    ],
    faqs: [
      {
        q: 'Can acne scars be removed completely?',
        a: 'Complete removal cannot be guaranteed. The aim is realistic improvement.',
      },
      {
        q: 'Are dark marks the same as scars?',
        a: 'No. Flat pigment changes differ from depressed texture scars and need different care.',
      },
    ],
  }),
  make({
    slug: 'melasma-treatment',
    title: 'Melasma Treatment',
    category: 'Skin',
    summary: 'Diagnosis-first management of facial melasma and recurring brown patches.',
    available: true,
    description:
      'Melasma causes brown or grey-brown facial patches, often on cheeks, forehead and upper lip. Sun and visible-light exposure, hormones and genetic factors contribute. Topical treatment and photoprotection are usually foundational.',
    causes: [
      'Ultraviolet and visible light',
      'Hormonal influences and heredity',
      'Skin irritation or inappropriate treatments',
    ],
    benefits: [
      'Correctly differentiating melasma from other causes',
      'A feasible sun-protection and skin-care plan',
      'Discussion of carefully selected procedures if appropriate',
    ],
    risks: [
      'Melasma frequently recurs',
      'Irritating treatments may make pigmentation worse',
      'Lasers can cause rebound pigmentation or hypopigmentation',
    ],
    aftercare: [
      'Apply broad-spectrum sunscreen regularly',
      'Consider tinted iron-oxide sunscreen with dermatologist guidance',
      'Avoid harsh procedures unless clinically advised',
    ],
    faqs: [
      {
        q: 'Can melasma come back?',
        a: 'Yes. Long-term sun protection and maintenance are often necessary.',
      },
      {
        q: 'Is Q-switched laser always the best option?',
        a: 'No. Laser therapy is selected cautiously and is not routinely first-line care.',
      },
    ],
  }),
  make({
    slug: 'pigmentation-treatment',
    title: 'Pigmentation & Dark Spot Treatment',
    category: 'Skin',
    summary: 'Find out why dark spots appear and which dermatologist approaches may help.',
    available: true,
    description:
      'Pigmentation has several causes including sun exposure, post-acne inflammation, melasma, and other dermatologic conditions. A clinical examination determines whether pigment is epidermal, dermal, or mixed before choosing targeted care.',
    causes: [
      'Sun and UV radiation exposure',
      'Post-inflammatory hyperpigmentation after acne or injury',
      'Hormonal changes and genetic predisposition',
    ],
    risks: [
      'Skin irritation from over-the-counter bleaching agents',
      'Rebound darkening with unsuitable chemical treatments',
      'Missed diagnosis of an atypical or dysplastic skin lesion',
    ],
    faqs: [
      {
        q: 'Are all dark spots harmless?',
        a: 'No. New, changing, bleeding or irregular lesions need clinical dermatological assessment rather than cosmetic removal.',
      },
      {
        q: 'How long does pigmentation take to fade?',
        a: 'Epidermal pigment may lighten over several weeks to months, while deeper dermal pigment requires structured clinical care.',
      },
    ],
  }),
  make({
    slug: 'chemical-peels',
    title: 'Chemical Peels',
    category: 'Skin',
    summary: 'Clinician-selected exfoliating treatments for texture, congestion, and tone.',
    available: true,
    description:
      'A medical chemical peel uses calibrated acids (such as glycolic, salicylic, lactic, or mandelic) to exfoliate specific skin layers under dermatologist supervision. Formulations and concentrations are tailored precisely for Indian skin tones.',
    causes: [
      'Superficial dead skin accumulation',
      'Mild post-acne blemishes and congestion',
      'Uneven texture and surface roughness',
    ],
    risks: [
      'Temporary redness, tightness, and mild peeling',
      'Post-inflammatory hyperpigmentation if improperly neutralized or sun-exposed',
      'Risk of burns or irritation with unmonitored home peel kits',
    ],
    faqs: [
      {
        q: 'Will my skin peel visibly?',
        a: 'Mild superficial peels cause minimal or microscopic flaking, whereas medium-depth peels involve visible flaking for 3 to 5 days.',
      },
      {
        q: 'How should I prepare for a chemical peel?',
        a: 'Discontinue retinoids and active exfoliants 3 to 5 days prior to your session, and maintain strict sun protection.',
      },
    ],
  }),
  make({
    slug: 'skin-rejuvenation',
    title: 'Skin Rejuvenation Consultation',
    category: 'Skin',
    summary: 'Explore practical options for skin texture, radiance and ageing-related concerns.',
    available: true,
  }),
  make({
    slug: 'rosacea',
    title: 'Rosacea Assessment',
    category: 'Skin',
    summary: 'Evaluation of persistent facial redness, flushing, and sensitivity.',
    available: true,
    risks: [
      'Self-treatment with steroid creams may worsen symptoms',
      'Certain procedures may trigger flushing or sensitivity',
    ],
  }),

  // 2. LASER
  make({
    slug: 'q-switched-laser',
    title: 'Q-Switched Laser for Melasma & Pigmentation',
    category: 'Laser',
    summary: 'Selected pigment-targeting laser care with special precautions for melasma.',
    available: true,
    aliases: ['q-switched-laser-pigmentation'],
    description:
      'Q-switched Nd:YAG laser systems use brief nanosecond pulses of light to selectively target pigment particles. In Indian skin tones (Fitzpatrick skin types III-V), parameters must be chosen with extreme care to avoid post-inflammatory hyperpigmentation or hypopigmentation. While low-fluence Q-switched laser can help selected epidermal and dermal pigment concerns, melasma requires ongoing sun protection and topical maintenance.',
    causes: [
      'Melasma and hormonal or environmental triggers',
      'Sun-related spots and lentigines',
      'Post-inflammatory pigmentation and dermal melanocytosis',
    ],
    suitability: [
      'Specific pigmented lesions diagnosed by a dermatologist',
      'Patients able to maintain consistent daily sun protection',
      'People informed of recurrence risks and realistic expectations',
    ],
    process: [
      'Doctor evaluates pigment depth, skin tone, and trigger factors',
      'Confirm exact laser device, spot size, and wavelength',
      'Protective eyewear and test patch when indicated',
      'Gentle post-procedure cooling, sun protection, and scheduled review',
    ],
    benefits: [
      'Targets specific pigmented lesions without breaking surface skin',
      'Selected candidates notice gradual lightening of stubborn spots',
      'Non-ablative procedure with minimal social downtime',
    ],
    risks: [
      'Rebound or worsening pigmentation if over-treated',
      'Hypopigmentation (mottled white spots) or hyperpigmentation',
      'Mild redness, pinpoint petechiae, or swelling',
    ],
    aftercare: [
      'Strict daily broad-spectrum sunscreen and visible-light protection',
      'Follow prescribed barrier creams; avoid harsh actives for 5 to 7 days',
      'Return for review if new darkening or lighter patches develop',
    ],
    faqs: [
      {
        q: 'Does Q-switched laser permanently cure melasma?',
        a: 'No. Melasma can recur and sometimes worsen following laser exposure. Photoprotection and medical skincare remain essential.',
      },
      {
        q: 'Is Q-switched laser safe for Indian skin?',
        a: 'It can be used for selected indications, but conservative energy parameters and experienced physician oversight are necessary.',
      },
      {
        q: 'How many sessions are typically needed?',
        a: 'Usually 4 to 6 sessions spaced 3 to 4 weeks apart, customized based on your clinical assessment.',
      },
    ],
  }),
  make({
    slug: 'laser-hair-reduction',
    title: 'Laser Hair Reduction',
    category: 'Laser',
    summary: 'Safe, device-based long-term reduction of unwanted facial and body hair for Indian skin tones.',
    available: true,
    description:
      'Laser hair reduction uses concentrated beams of light absorbed by hair follicle melanin, disabling future growth through selective photothermolysis. Contact cooling systems protect the epidermis, making the procedure comfortable and safe across diverse skin tones.',
    causes: [
      'Genetic or hormonal hair growth patterns (e.g., PCOD/PCOS)',
      'Ingrown hairs, folliculitis, and shaving irritation',
      'Desire for long-term reduction in shaving or waxing frequency',
    ],
    suitability: [
      'Adults with dark pigmented terminal hair',
      'Both men and women seeking facial or full-body hair management',
      'Patients troubled by recurrent razor bumps or ingrown hairs',
    ],
    process: [
      'Dermatologist assessment of hair thickness, density, and skin type',
      'Shaving the area flush with skin surface prior to treatment',
      'Application of cooling gel and calibrated laser passes',
      'Post-treatment soothing gel and sunscreen application',
    ],
    benefits: [
      'Long-term hair reduction of 70% to 90% over a complete course',
      'Elimination of painful ingrown hairs and razor bumps',
      'Smoother skin texture over successive sessions',
    ],
    risks: [
      'Mild redness and small bumps (perifollicular edema) for a few hours',
      'Risk of pigment changes or superficial burns if skin is freshly tanned',
    ],
    aftercare: [
      'Avoid hot showers, saunas, gym sessions, and swimming for 24 hours',
      'Do not wax, pluck, or thread between sessions (shaving only)',
      'Apply daily sunscreen on treated exposed areas',
    ],
    faqs: [
      {
        q: 'How many sessions are necessary?',
        a: 'Typically 6 to 8 sessions because hair grows in cycles (anagen, catagen, telogen) and lasers only destroy actively growing follicles.',
      },
      {
        q: 'Is laser hair reduction painful?',
        a: 'Most patients feel a slight rubber-band sensation combined with active cooling from the chilled laser tip.',
      },
      {
        q: 'Will hair reduction be 100% permanent?',
        a: 'No laser guarantees 100% permanent hair removal. It achieves significant long-term reduction with occasional touch-up sessions.',
      },
    ],
  }),
  make({
    slug: 'laser-acne-scars',
    title: 'Laser Treatment for Acne Scars',
    category: 'Laser',
    summary: 'A possible approach for selected scar patterns after individual assessment.',
  }),

  // 3. HAIR
  make({
    slug: 'hair-loss-treatment',
    title: 'Hair Loss & Thinning Assessment',
    category: 'Hair',
    summary: 'Understand common causes of hair fall and available clinical treatments.',
    available: true,
    description:
      'Hair loss may relate to genetics, scalp disease, nutrition, hormones, medications or other causes. A focused history, dermoscopy, and examination guide appropriate investigations and therapy.',
    causes: [
      'Androgenetic pattern hair loss (male and female)',
      'Telogen effluvium (diffuse shedding post-illness or stress)',
      'Nutritional deficiencies (iron, vitamin D, B12)',
      'Alopecia areata and scalp inflammatory conditions',
    ],
    faqs: [
      {
        q: 'Do all patients need blood tests?',
        a: 'No. Tests should be selected based on medical history, physical exam, and dermoscopic evaluation.',
      },
      {
        q: 'When should I seek medical help for hair fall?',
        a: 'Consult when shedding exceeds 100 hairs daily for over a month, when a widening partition appears, or when coin-sized bald spots emerge.',
      },
    ],
  }),
  make({
    slug: 'prp-gfc',
    title: 'PRP & GFC Hair Treatment',
    category: 'Hair',
    summary: 'Autologous platelet-rich plasma and growth factor concentrate therapy for hair rejuvenation.',
    available: true,
    aliases: ['prp-hair', 'gfc-hair'],
    description:
      "PRP (Platelet-Rich Plasma) and next-generation GFC (Growth Factor Concentrate) are evidence-based regenerative treatments using high concentrations of natural growth factors derived from the patient's own blood. These growth factors (PDGF, VEGF, EGF, IGF-1) stimulate hair follicle stem cells, prolong the anagen (growth) phase, and enhance blood supply to miniaturized follicles.",
    causes: [
      'Androgenetic alopecia (male and female pattern hair loss)',
      'Telogen effluvium and post-illness hair shedding',
      'Early-stage follicular miniaturization and thinning',
    ],
    suitability: [
      'Patients in early to moderate stages of hair thinning with viable follicles',
      'Individuals seeking to complement oral and topical hair therapies',
      'Post-hair-transplant patients optimizing graft survival',
    ],
    process: [
      'Blood draw (10-20 ml) using specialized sterile separator tubes',
      'Centrifugation to isolate concentrated platelets and activate growth factors',
      'Application of topical numbing spray or cream for maximum comfort',
      'Microinjections directly into the dermal layer across thinning scalp zones',
    ],
    benefits: [
      'Uses your own biological growth factors with zero risk of allergic reaction',
      'Helps arrest excessive daily hair shedding within 2 to 3 sessions',
      'Thickens fine miniaturized hair shafts and boosts hair density',
    ],
    risks: [
      'Mild scalp tenderness, swelling, or redness for 24-48 hours',
      'Minor temporary bruising at injection sites',
    ],
    aftercare: [
      'Do not wash hair or apply scalp tonics for 24 hours',
      'Avoid strenuous exercise and sauna on the day of treatment',
      'Continue dermatologist-recommended medical therapies as advised',
    ],
    faqs: [
      {
        q: 'What is the difference between PRP and GFC?',
        a: 'GFC is an advanced acellular preparation derived from activated platelets that isolates pure growth factors without red or white blood cells, typically resulting in less post-procedure inflammation.',
      },
      {
        q: 'How many sessions are recommended?',
        a: 'Usually an initial protocol of 3 to 4 sessions spaced one month apart, followed by maintenance sessions every 4 to 6 months.',
      },
      {
        q: 'Does it hurt?',
        a: 'Topical anesthetic sprays and vibration devices make the microinjections very tolerable.',
      },
    ],
  }),
  make({
    slug: 'dandruff-scalp',
    title: 'Dandruff & Scalp Conditions',
    category: 'Hair',
    summary: 'Assessment of scalp flaking, irritation and inflammatory conditions.',
    available: true,
  }),
  make({
    slug: 'hair-transplant',
    title: 'Hair Transplant Consultation',
    category: 'Hair',
    summary: 'Discuss hair restoration suitability, donor areas and realistic expectations.',
  }),

  // 4. AESTHETICS
  make({
    slug: 'hydrafacial',
    title: 'HydraFacial & Medical Hydrodermabrasion',
    category: 'Aesthetics',
    summary: 'Device-assisted multi-step deep pore cleansing, gentle exfoliation, and antioxidant hydration.',
    available: true,
    aliases: ['hydrodermabrasion-skin-glow'],
    description:
      'Medical hydrodermabrasion and HydraFacial protocols use vortex suction technology combined with targeted botanical and peptide serums. It gently dislodges impurities, clears blackheads, and delivers deep hydration without the physical irritation of traditional microdermabrasion.',
    causes: [
      'Dehydrated or dull skin',
      'Superficial dead skin accumulation and environmental pollutants',
      'Mild pore congestion and excess sebum production',
    ],
    suitability: [
      'Patients seeking refreshed, luminous skin before events',
      'Congested, oily, or combination skin types',
      'Individuals wanting gentle exfoliation without peeling downtime',
    ],
    process: [
      'Skin suitability and barrier check',
      'Vortex cleansing and gentle lactic/glycolic acid exfoliation',
      'Painless vacuum extraction of blackheads and sebum',
      'Infusion of hyaluronic acid, antioxidants, and protective peptides',
    ],
    benefits: [
      'Noticeable instant radiance and refined skin texture',
      'Painless blackhead and pore clearing',
      'Zero required downtime—resume normal activities immediately',
    ],
    risks: [
      'Mild temporary redness lasting 15 to 30 minutes',
      'Not suitable during active flare-ups of cystic acne, herpes simplex, or eczema',
    ],
    aftercare: [
      'Avoid heavy makeup or sweaty workouts for 12 hours',
      'Use gentle hydrating cleansers and broad-spectrum sunscreen',
      'Do not apply retinol or exfoliating acids for 48 hours',
    ],
    faqs: [
      {
        q: 'Is HydraFacial suitable for sensitive skin?',
        a: 'Yes. Treatment serums and suction levels can be customized by your dermatologist for sensitive skin.',
      },
      {
        q: 'How often can I get a HydraFacial?',
        a: 'A monthly treatment is standard for maintaining clear pores and optimal skin hydration.',
      },
      {
        q: 'Can HydraFacial treat active inflammatory acne?',
        a: 'Active cystic or pustular acne must be medically managed first to prevent spreading bacteria.',
      },
    ],
  }),
  make({
    slug: 'anti-wrinkle-injections',
    title: 'Anti-Wrinkle Injection Consultation',
    category: 'Aesthetics',
    summary: 'Understand medically supervised options for expression lines.',
  }),
  make({
    slug: 'dermal-fillers',
    title: 'Dermal Fillers Consultation',
    category: 'Aesthetics',
    summary: 'Review filler suitability and significant potential adverse events.',
    risks: [
      'Swelling, bruising, asymmetry',
      'Rare but serious vascular complications including tissue injury and vision loss',
    ],
  }),
  make({
    slug: 'microneedling',
    title: 'Microneedling Consultation',
    category: 'Aesthetics',
    summary: 'Collagen-induction procedures for selected skin concerns.',
  }),
  make({
    slug: 'mnrf',
    title: 'MNRF Skin Treatment',
    category: 'Aesthetics',
    summary: 'Microneedling radiofrequency: indications, safety and downtime.',
  }),

  // 5. MEDICAL DERMATOLOGY
  make({
    slug: 'eczema',
    title: 'Eczema Treatment',
    category: 'Medical Dermatology',
    summary: 'Professional assessment of itchy, inflamed or dry skin.',
    available: true,
  }),
  make({
    slug: 'psoriasis',
    title: 'Psoriasis Consultation',
    category: 'Medical Dermatology',
    summary: 'Assessment and long-term management of inflammatory plaques.',
    available: true,
  }),
  make({
    slug: 'vitiligo',
    title: 'Vitiligo Assessment',
    category: 'Medical Dermatology',
    summary: 'Diagnosis and care planning for depigmented skin patches.',
    available: true,
  }),
  make({
    slug: 'skin-allergies',
    title: 'Skin Allergy Assessment',
    category: 'Medical Dermatology',
    summary: 'Evaluation of recurrent reactions, urticaria and contact dermatitis.',
    available: true,
  }),
  make({
    slug: 'fungal-infections',
    title: 'Fungal Skin Infections',
    category: 'Medical Dermatology',
    summary: 'Clinical diagnosis and appropriate antifungal treatment.',
    available: true,
  }),
  make({
    slug: 'mole-evaluation',
    title: 'Mole & Pigmented Lesion Assessment',
    category: 'Medical Dermatology',
    summary: 'Review changing or concerning skin lesions before cosmetic removal.',
    available: true,
  }),
];

// Build treatment lookup mapping primary slug and any aliases
const lookup: Record<string, Treatment> = {};
for (const t of treatments) {
  lookup[t.slug] = t;
  if (t.aliases) {
    for (const alias of t.aliases) {
      lookup[alias] = t;
    }
  }
}
export const treatmentsBySlug = lookup;

export function getTreatment(categorySlug: string, slug: string): Treatment | undefined {
  const t = treatmentsBySlug[slug];
  if (!t) return undefined;
  if (categoryToSlug(t.category) !== categorySlug.toLowerCase()) return undefined;
  return t;
}

export const categories = [
  { name: 'Skin', icon: '✧', caption: 'Acne, scars, pigmentation and skin health' },
  { name: 'Hair', icon: '⌁', caption: 'Hair fall and scalp conditions' },
  { name: 'Laser', icon: '✳', caption: 'Procedure options and safety' },
  { name: 'Aesthetics', icon: '◌', caption: 'Texture, radiance and anti-ageing' },
  { name: 'Medical Dermatology', icon: '✚', caption: 'Eczema, psoriasis, infections and more' },
] as const;
