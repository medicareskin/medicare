// Clinical Treatment Profiles for Medicare Skin & Cosmetic Clinic
// Provides condition-specific symptoms, causes, treatments, candidacy, pricing, and FAQs
// Reviewed in accordance with Dr. (Mrs.) Sujay M, MBBS, DDVL clinical protocols

export const TREATMENT_CLINICAL_PROFILES = {
  // ── 1. MELASMA ───────────────────────────────────────────────────
  'melasma-skin': {
    id: 'melasma-skin',
    title: 'Melasma Treatment',
    overview: 'Melasma is a chronic, hormonally-influenced pigmentation condition causing symmetrical brown or greyish patches predominantly on the cheeks, forehead, bridge of nose, and upper lip. Dr. Sujay M utilizes low-fluence laser toning, specialized depigmentation peels, and medical tyrosinase inhibitors tailored specifically to avoid post-inflammatory rebound hyperpigmentation in Indian skin types.',
    symptoms: [
      { title: 'Symmetrical Facial Patches', desc: 'Brownish or grey-brown macules appearing symmetrically across both cheeks, forehead, and temple regions.' },
      { title: 'Centrofacial & Malar Distribution', desc: 'Distinct pigment concentration along the upper lip (mustache pattern), bridge of the nose, and chin.' },
      { title: 'Light & Heat Darkening', desc: 'Noticeable darkening following brief ultraviolet exposure, high-energy visible light, or kitchen cooking heat.' },
      { title: 'Recurrent Chronic Cycles', desc: 'Pigmentation that repeatedly fluctuates with hormonal shifts or seasonal light changes without medical maintenance.' }
    ],
    causes: [
      { title: 'Ultraviolet & Visible Light Exposure', desc: 'UVA, UVB, and visible blue light stimulate melanocytes to overproduce melanin pigment.' },
      { title: 'Hormonal Fluctuations', desc: 'Pregnancy (chloasma), oral contraceptive pills, hormone therapy, and thyroid variations.' },
      { title: 'Genetic Susceptibility', desc: 'Strong familial predisposition, particularly in Fitzpatrick skin types IV through VI.' },
      { title: 'Subclinical Vascular Inflammation', desc: 'Underlying microvascular dilatation in dermal melasma driving continuous melanogenesis.' }
    ],
    treatmentOptions: [
      { name: 'Low-Fluence Q-Switched Toning', desc: 'Nanosecond Nd:YAG pulses at sub-photothermal fluence to fragment dermal pigment safely without rebound darkening.', img: '/images/q_switched_procedure.jpg' },
      { name: 'Targeted Depigmentation Peels', desc: 'Calibrated lactic, glycolic, and mandelic acid solutions with pigment regulators to gently exfoliate without heat.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Medical Tyrosinase Inhibitors', desc: 'Prescription azelaic acid, tranexamic acid, and supervised topical courses to quiet hyperactive melanocytes.', img: '/images/cat_skin_care.jpg' },
      { name: 'Mineral & Iron Oxide Photoprotection', desc: 'Broad-spectrum mineral SPF 50+ enhanced with iron oxides to shield against visible and blue light rays.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Visible Patch Lightening', desc: 'Significant reduction in the contrast and optical density of facial pigment patches.' },
      { title: 'Safe for Indian Skin', desc: 'Carefully titrated low-energy protocols to prevent post-inflammatory hyperpigmentation (PIH).' },
      { title: 'Skin Barrier Restoration', desc: 'Gentle, anti-inflammatory formulations that strengthen rather than strip delicate facial skin.' },
      { title: 'Relapse Prevention Strategy', desc: 'Long-term maintenance skincare roadmap designed to keep pigment stable through summer and travel.' }
    ],
    suitableFor: [
      'Facial dark patches on cheeks, forehead, or upper lip',
      'Post-pregnancy melasma (chloasma) persisting after delivery',
      'Patients with Fitzpatrick skin types IV–VI seeking gentle toning',
      'Pigmentation resistant to ordinary over-the-counter creams'
    ],
    notRecommended: [
      'Uncontrolled active facial dermatitis or eczema',
      'Recent sun tanning or severe sunburn within past 2 weeks',
      'Patients unwilling to commit to daily broad-spectrum sunblock',
      'Pregnancy (for certain prescription medications and deep peels)'
    ],
    pricing: {
      description: 'Melasma management focuses on a medically supervised plan combining targeted depigmentation peeling, gentle low-fluence laser toning sessions, and personalized topical maintenance. Costs depend on peel formulation and number of sessions.',
      range: '₹2,500 – ₹6,000',
      unit: '/ session',
      factors: [
        'Depth of pigment (epidermal vs dermal)',
        'Clinical peel formulation selected',
        'Low-fluence Q-switched laser inclusion',
        'Total number of monitored sessions',
        'Prescription medical homecare kit',
        'Maintenance review appointments'
      ]
    },
    faqs: [
      { q: 'Can melasma be cured permanently?', a: 'No ethical dermatologist can promise a permanent cure. Melasma is a chronic, hormonally influenced condition prone to relapse with light exposure. However, with consistent medical management and photoprotection, it can be cleared and maintained in remission.' },
      { q: 'Is laser toning safe for melasma in Indian skin?', a: 'Yes, only when performed using low-fluence, multipass Q-switched Nd:YAG protocols. Aggressive high-energy laser treatments can trigger rebound hyperpigmentation or mottled white spots.' },
      { q: 'Why does my melasma darken even when I wear sunscreen?', a: 'Standard sunscreens block UV light, but melasma is also triggered by visible light (blue light) and infrared heat. We prescribe tinted sunscreens containing iron oxides, which block visible light.' }
    ]
  },

  // ── 2. VITILIGO ──────────────────────────────────────────────────
  'vitiligo-skin': {
    id: 'vitiligo-skin',
    title: 'Vitiligo Treatment',
    overview: 'Vitiligo is an autoimmune dermatological condition characterized by the selective loss of melanin-producing melanocytes, resulting in smooth, depigmented chalky-white patches. Dr. Sujay M provides evidence-based medical stabilization, targeted phototherapy (NB-UVB), and specialized surgical punch grafting for stable, refractory patches.',
    symptoms: [
      { title: 'Chalky-White Macules', desc: 'Completely depigmented, smooth patches of skin with sharply defined borders.' },
      { title: 'Leukotrichia (White Hair)', desc: 'Premature whitening or greying of hair strands within affected scalp, eyebrow, or beard patches.' },
      { title: 'Bilateral Symmetrical Distribution', desc: 'Patches appearing simultaneously on both sides of hands, wrists, knees, or perioral zones.' },
      { title: 'Koebner Phenomenon', desc: 'Development of new depigmentation patches at sites of friction, scrapes, or skin trauma.' }
    ],
    causes: [
      { title: 'Autoimmune Melanocyte Destruction', desc: 'The body’s cytotoxic T-cells mistakenly identify and destroy epidermal melanocytes.' },
      { title: 'Genetic & Familial Factors', desc: 'Inherited genetic susceptibility to autoimmune vitiligo and associated immune conditions.' },
      { title: 'Oxidative Cellular Stress', desc: 'Excessive hydrogen peroxide and reactive oxygen species accumulation causing melanocyte apoptosis.' },
      { title: 'Neurogenic & Environmental Triggers', desc: 'Severe emotional stress, chemical contact (phenols), and physical mechanical trauma.' }
    ],
    treatmentOptions: [
      { name: 'Targeted Phototherapy (NB-UVB)', desc: 'Narrowband ultraviolet B (311 nm) rays to stimulate dormant follicular melanocyte reservoirs and trigger repigmentation.', img: '/images/imageye___-_imgi_21_Vitiligo.webp' },
      { name: 'Topical Immunomodulators', desc: 'Calcineurin inhibitors (tacrolimus) and tailored corticosteroid creams to arrest localized immune activity.', img: '/images/cat_skin_care.jpg' },
      { name: 'Systemic Medical Stabilization', desc: 'Short-course oral medications to halt rapidly spreading, active vitiligo flares.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Vitiligo Punch Grafting / Surgery', desc: 'Microsurgical transfer of healthy melanocyte grafts to stable, non-progressing patches.', img: '/images/q_switched_procedure.jpg' }
    ],
    benefits: [
      { title: 'Repigmentation Stimulation', desc: 'Gradual return of natural pigment spots starting around hair follicles and coalescing.' },
      { title: 'Disease Stabilization', desc: 'Halting active disease progression and preventing the appearance of new white patches.' },
      { title: 'Non-Contagious Reassurance', desc: 'Expert medical counseling to alleviate social anxiety and understand the benign nature of vitiligo.' },
      { title: 'Surgical Options for Stable Lesions', desc: 'Definitive repigmentation for stubborn stable patches that have not spread for 12+ months.' }
    ],
    suitableFor: [
      'Localized or generalized depigmented white patches',
      'Patients seeking medical stabilization of active vitiligo',
      'Patients with stable patches desiring phototherapy or punch grafting',
      'Children and adults requiring gentle, non-steroidal topicals'
    ],
    notRecommended: [
      'Surgery during active, unstable, rapidly spreading vitiligo',
      'Patients with photosensitive disorders for phototherapy',
      'Expectations of overnight color restoration (repigmentation takes months)',
      'Self-treatment with unverified caustic herbal remedies'
    ],
    pricing: {
      description: 'Vitiligo treatment is a clinical medical discipline. It starts with an in-depth dermatological examination and Wood’s lamp assessment, followed by topical prescriptions, targeted phototherapy sessions, or surgical grafting for stable patches.',
      range: '₹800 – ₹2,500',
      unit: '/ phototherapy session',
      factors: [
        'Initial clinical diagnosis & Wood’s lamp analysis',
        'Disease stability (active vs stable)',
        'Frequency of targeted NB-UVB phototherapy',
        'Topical immunomodulator prescriptions',
        'Thyroid & autoimmune blood profiling (if needed)',
        'Surgical punch grafting scope (for stable patches)'
      ]
    },
    faqs: [
      { q: 'Is vitiligo contagious or caused by diet?', a: 'No. Vitiligo is strictly an autoimmune condition and is 100% non-contagious. It cannot be transmitted by touch, sharing food, or saliva, and is not caused by drinking milk after eating fish or any other dietary myth.' },
      { q: 'How long does repigmentation take?', a: 'Repigmentation is a gradual process requiring patience. Initial follicular pigment spots typically appear within 6 to 12 weeks of consistent phototherapy or topical treatment, with continued improvement over several months.' },
      { q: 'Can vitiligo be cured with surgery?', a: 'Surgical punch grafting or cellular melanocyte transfer is highly effective for stable vitiligo (patches that have not enlarged or shown new spots for at least one year). It is contraindicated during active, spreading disease.' }
    ]
  },

  // ── 3. SAGGING SKIN & SKIN TIGHTENING ─────────────────────────────
  'sagging-skin': {
    id: 'sagging-skin',
    title: 'Sagging Skin Treatment',
    overview: 'Sagging skin develops as structural collagen and elastin fibers degrade over time, coupled with natural fat pad deflation and gravity. At Medicare Skin, Dr. Sujay M utilizes non-invasive radiofrequency (RF) thermal tightening, HIFU ultrasound lifting, and dermal biostimulators to stimulate deep neocollagenesis and restore firm jawline contours.',
    symptoms: [
      { title: 'Jowl Sagging & Softened Jawline', desc: 'Descent of lower cheek tissue creating jowls and blurring the sharp contour of the mandible.' },
      { title: 'Deepening Nasolabial Folds', desc: 'Pronounced smile lines extending from the nose to the mouth corners due to mid-face volume loss.' },
      { title: 'Skin Crepiness & Loss of Bounce', desc: 'Thinning dermal matrix causing fine wrinkling and delayed recoil upon gentle pinching.' },
      { title: 'Submental & Neck Laxity', desc: 'Loose skin beneath the chin and vertical platysmal bands on the neck.' }
    ],
    causes: [
      { title: 'Depleted Dermal Collagen & Elastin', desc: 'Natural age-related decline in fibroblast activity reducing structural matrix protein density.' },
      { title: 'Facial Fat Compartment Deflation', desc: 'Shrinkage and downward gravitational migration of deep and superficial fat pads.' },
      { title: 'Chronic Photodamage & UV Radiation', desc: 'Solar elastosis caused by UV-induced fragmentation of dermal elastic scaffolding.' },
      { title: 'Facial Skeletal Remodeling', desc: 'Gradual resorption of underlying bone reducing structural projection for soft tissues.' }
    ],
    treatmentOptions: [
      { name: 'Non-Surgical RF Skin Tightening', desc: 'Deep controlled radiofrequency bulk heating to contract existing collagen and trigger intense neocollagenesis.', img: '/images/imageye___-_imgi_9_skin-tightening-01.webp' },
      { name: 'High-Intensity Ultrasound (HIFU)', desc: 'Focused acoustic energy reaching the deep SMAS layer for non-invasive lifting and tightening.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Collagen Biostimulator Therapy', desc: 'Micro-infusions of biostimulatory agents that prompt the skin’s own fibroblasts to rebuild fresh matrix.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Vector Contouring Protocols', desc: 'Doctor-guided multi-tier lifting targeting the midface, jawline, and submental neck zones.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Sharper Jawline & Jowl Lift', desc: 'Visible refinement of the mandibular line and elevation of drooping lower cheek tissue.' },
      { title: 'Restored Elastic Bounce', desc: 'Plumper, firmer dermal architecture with enhanced elastic resilience.' },
      { title: 'Completely Non-Surgical', desc: 'Zero incisions, zero scars, and virtually no downtime compared to surgical rhytidectomy.' },
      { title: 'Progressive Natural Collagen', desc: 'Results build gradually over 2 to 3 months as newly synthesized collagen fibers mature.' }
    ],
    suitableFor: [
      'Mild to moderate facial laxity and early jowl formation',
      'Loose skin on the neck, submental area, or under-eyes',
      'Patients desiring natural tightening without surgery or fillers',
      'Maintenance of skin elasticity in the late 30s, 40s, and 50s'
    ],
    notRecommended: [
      'Severe structural laxity requiring surgical plastic intervention',
      'Active skin infections or open lesions in the treatment area',
      'Presence of pacemakers or implanted electronic devices (for RF)',
      'Pregnancy or severe autoimmune connective tissue disease'
    ],
    pricing: {
      description: 'Pricing for non-surgical skin tightening depends on the anatomical zones treated (lower face, full face, neck, or submental region) and the selected technology (Radiofrequency thermal tightening or HIFU ultrasound).',
      range: '₹8,000 – ₹20,000',
      unit: '/ session',
      factors: [
        'Anatomical zones (Full face, jawline, or neck)',
        'Technology utilized (RF thermal vs HIFU ultrasound)',
        'Number of treatment passes and depth settings',
        'Combination with collagen biostimulator serums',
        'Total planned sessions (typically 2 to 4)',
        'Maintenance protocol intervals'
      ]
    },
    faqs: [
      { q: 'Is RF skin tightening painful?', a: 'No. Modern RF and ultrasound systems feature continuous contact surface cooling. Patients feel a deep, warm sensation as energy reaches the collagen layers, but treatment is comfortable and requires no anesthesia.' },
      { q: 'When do I see results from skin tightening?', a: 'You may notice an immediate subtle contraction of collagen fibers right after the session. However, the most significant tightening and lifting emerge between 6 to 12 weeks as new collagen matures.' },
      { q: 'How long do the results last?', a: 'Results typically last 12 to 18 months, as newly stimulated collagen is your own natural tissue. An annual maintenance session is recommended to sustain firmness against natural aging.' }
    ]
  },

  // ── 4. ACNE SCARS ────────────────────────────────────────────────
  'acne-scar-skin': {
    id: 'acne-scar-skin',
    title: 'Acne Scar Treatment',
    overview: 'Acne scars form when deep inflammatory acne lesions rupture into the dermis, causing fibrous tethering and collagen loss. Dr. Sujay M performs multi-modal scar revision combining surgical subcision to release tethered fibrous bands, Microneedling Radiofrequency (MNRF), and fractional laser resurfacing calibrated for Indian skin.',
    symptoms: [
      { title: 'Ice-Pick & Boxcar Depressions', desc: 'Deep, narrow punctate pits or sharply demarcated geometric crater-like scars.' },
      { title: 'Rolling Scars with Sloping Edges', desc: 'Broad, undulating depressions anchored to the deep fascia by fibrotic tethered bands.' },
      { title: 'Post-Inflammatory Erythema & Pigment', desc: 'Persistent red, purple, or dark brown macular discoloration overlying scarred areas.' },
      { title: 'Uneven Light Reflection', desc: 'Loss of smooth skin texture, creating shadows and coarse roughness in directional lighting.' }
    ],
    causes: [
      { title: 'Severe Cystic & Nodular Breakouts', desc: 'Deep inflammatory acne destroying underlying dermal collagen and supportive architecture.' },
      { title: 'Delayed Medical Treatment', desc: 'Prolonged active inflammation causing progressive tissue necrosis and defective healing.' },
      { title: 'Manual Trauma & Picking', desc: 'Squeezing or scratching lesions, triggering localized micro-tears and disorganized fibrosis.' },
      { title: 'Deficient Collagen Synthesis', desc: 'Inadequate or disordered neocollagenesis during the final tissue healing cascade.' }
    ],
    treatmentOptions: [
      { name: 'Surgical Subcision', desc: 'Blunt micro-cannula dissection beneath rolling scars to sever tethered fibrotic bands and elevate depressions.', img: '/images/imageye___-_imgi_11_acne-scar-treatment.webp' },
      { name: 'Microneedling RF (MNRF)', desc: 'Gold-insulated micro-pins delivering fractional RF thermal energy directly into the scar bed without epidermal burns.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Fractional Resurfacing Laser', desc: 'Microscopic thermal treatment columns vaporizing damaged scar tissue and prompting fresh collagen matrix synthesis.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'TCA CROSS Technique', desc: 'Focal high-concentration trichloroacetic acid application directly inside ice-pick scars to close deep pits.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Depression Elevation', desc: 'Visible smoothing of indented, crater-like, and rolling scars across the cheeks and temples.' },
      { title: 'Skin Texture Refinement', desc: 'Restoration of smooth dermal texture and uniform light reflection under overhead lighting.' },
      { title: 'Permanent Structural Repair', desc: 'Newly remodeled collagen is permanent tissue and does not dissolve away over time.' },
      { title: 'Custom Multi-Modal Protocol', desc: 'Each scar type (ice-pick, boxcar, rolling) is treated with its specific gold-standard modality.' }
    ],
    suitableFor: [
      'Indented ice-pick, boxcar, or rolling acne scars',
      'Textural irregularities and enlarged post-acne pores',
      'Patients with resolved active acne ready for scar reconstruction',
      'All Indian skin tones seeking safe, post-inflammatory-free resurfacing'
    ],
    notRecommended: [
      'Active severe cystic acne flare-ups in the treatment zone',
      'Patients currently taking oral isotretinoin (wait 3 to 6 months)',
      'History of true keloidal tendencies across facial skin',
      'Unrealistic expectations of 100% scar erasure in a single session'
    ],
    pricing: {
      description: 'Acne scar revision is multi-modal because most patients have a combination of rolling, boxcar, and ice-pick scars. Pricing depends on scar severity, surface area, and whether subcision, MNRF, or fractional laser are combined in a session.',
      range: '₹5,000 – ₹14,000',
      unit: '/ session',
      factors: [
        'Severity grade and scar depth mapping',
        'Combination of subcision + MNRF / Fractional Laser',
        'Full face vs cheek-temple localized treatment',
        'TCA CROSS focal application inclusion',
        'Total sessions planned (typically 3 to 5)',
        'Post-procedure medical healing kits'
      ]
    },
    faqs: [
      { q: 'Can acne scars be 100% removed?', a: 'Complete 100% scar erasure is clinically impossible with any technology. However, our multi-modal combination protocols achieve 60% to 80%+ visible textural improvement, transforming harsh shadows into smooth, radiant skin.' },
      { q: 'What is subcision and why is it necessary?', a: 'Rolling scars are pulled down by tough fibrotic bands tethering the skin to the fat below. Subcision uses a fine micro-instrument to release these tethers; without subcision, lasers alone cannot lift the depression.' },
      { q: 'What is the downtime after an acne scar session?', a: 'Typically 2 to 4 days of mild redness and micro-crusting. Patients can resume office work with moisturizer and sunscreen within 24 to 48 hours.' }
    ]
  },

  // ── 5. PIMPLES & ACNE TREATMENT ──────────────────────────────────
  'pimples-acne': {
    id: 'pimples-acne',
    title: 'Pimples / Acne Treatment',
    overview: 'Acne vulgaris is an inflammatory disorder of the pilosebaceous unit caused by sebum overproduction, follicular hyperkeratinization, and Cutibacterium acnes colonization. Dr. Sujay M prescribes medical topical retinoids, systemic therapies, and clinical salicylic/mandelic peels to clear active breakouts and prevent permanent scarring.',
    symptoms: [
      { title: 'Inflammatory Papules & Pustules', desc: 'Tender red bumps with central purulent yellow tops on the cheeks, jaw, and forehead.' },
      { title: 'Deep Painful Nodulocysts', desc: 'Subcutaneous inflammatory lumps that ache on touch and carry a high risk of scarring.' },
      { title: 'Open & Closed Comedones', desc: 'Clogged follicles presenting as persistent blackheads and bumpy whiteheads.' },
      { title: 'Post-Acne Red / Brown Macules', desc: 'Erythematous or pigmented macular marks left behind as active lesions heal.' }
    ],
    causes: [
      { title: 'Sebaceous Hyperactivity', desc: 'Excess oil production driven by androgenic hormones, stress, and lifestyle factors.' },
      { title: 'Follicular Hyperkeratinization', desc: 'Sticky dead skin cells failing to shed normally, creating keratin plugs in pore openings.' },
      { title: 'Cutibacterium acnes Colonization', desc: 'Bacterial proliferation inside oxygen-deprived follicles triggering inflammatory cascades.' },
      { title: 'Comedogenic Skincare & Diet', desc: 'Heavy occlusive cosmetics, hair oils, high-glycemic foods, and friction (acne mechanica).' }
    ],
    treatmentOptions: [
      { name: 'Clinical Salicylic & Mandelic Peels', desc: 'Lipophilic beta-hydroxy acid peels that dissolve deep follicular sebum and calm inflammation rapidly.', img: '/images/imageye___-_imgi_13_Acne-Treatment.webp' },
      { name: 'Prescription Retinoid & Antimicrobial Care', desc: 'Custom dermatological topicals to normalize follicular turnover and suppress acne bacteria.', img: '/images/cat_skin_care.jpg' },
      { name: 'Painless Comedone Extraction', desc: 'Aseptic clinical extraction of stubborn blackheads and whiteheads to prevent inflammatory rupture.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Targeted Blue Light Phototherapy', desc: 'Specific wavelength light that selectively destroys acne bacteria and regulates sebum secretion.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Rapid Flare Suppression', desc: 'Quick resolution of painful, inflamed red bumps and pustules within days.' },
      { title: 'Scar Prevention', desc: 'Early medical intervention prevents deep dermal tissue destruction and permanent scarring.' },
      { title: 'Sebum & Shine Control', desc: 'Long-term reduction in greasy facial shine and oiliness without stripping skin.' },
      { title: 'Clear Pore Architecture', desc: 'Gentle, thorough clearing of blackheads and microcomedones before they turn into pimples.' }
    ],
    suitableFor: [
      'Persistent teenage or adult hormonal acne',
      'Stubborn blackheads, whiteheads, and congested skin',
      'Recurrent breakouts along the jawline, chin, and cheeks',
      'Patients experiencing post-acne dark marks and redness'
    ],
    notRecommended: [
      'Self-medicating with over-the-counter steroid-combination creams',
      'Aggressive scrub exfoliation which ruptures inflamed follicles',
      'Pregnant patients for oral retinoids and high-strength peels',
      'Unregistered salon bleaching facials during active breakouts'
    ],
    pricing: {
      description: 'Acne management begins with a doctor consultation to diagnose acne grade and root triggers. Treatment combines prescription medication with clinical salicylic or clarifying chemical peels to clear active breakouts.',
      range: '₹1,500 – ₹3,500',
      unit: '/ peel session',
      factors: [
        'Acne severity grade (Grade I comedonal to Grade IV cystic)',
        'Clinical chemical peel formulation (Salicylic / Mandelic / Glycolic)',
        'Clinical comedone extraction & purification inclusion',
        'Prescription topical & oral medication protocol',
        'Number of monitored flare-control sessions',
        'Post-acne mark clearing strategy'
      ]
    },
    faqs: [
      { q: 'Why shouldn’t I use pharmacy steroid creams for pimples?', a: 'Over-the-counter triple-combination steroid creams provide temporary illusion of improvement but cause severe steroid-induced rosacea, skin thinning, dilated blood vessels, and rebound cystic acne. Always consult a qualified dermatologist.' },
      { q: 'How long does medical acne treatment take to show results?', a: 'Most patients observe significant reduction in active pimples within 3 to 6 weeks. Complete clearing and regulation of skin oiliness typically takes 8 to 12 weeks of consistent medical care.' },
      { q: 'Does food cause pimples?', a: 'While diet alone is not the sole cause, high-glycemic foods (sugary snacks, refined flour) and excessive dairy can spike insulin and IGF-1, stimulating oil glands and aggravating breakouts in susceptible individuals.' }
    ]
  },

  // ── 6. PIGMENTATION & DARK SPOTS ─────────────────────────────────
  'pigmentation-skin': {
    id: 'pigmentation-skin',
    title: 'Pigmentation Treatment',
    overview: 'Facial pigmentation refers to localized or generalized darkening caused by excess melanin production following UV damage, post-inflammatory healing, or hormonal factors. Dr. Sujay M assesses the specific depth and pattern of pigment to formulate a personalized plan combining gentle chemical peels, low-fluence Q-switched lasers, and medical photoprotection.',
    symptoms: [
      { title: 'Post-Acne Macular Marks (PIH)', desc: 'Flat red, purple, or dark brown spots persisting for months after pimples have resolved.' },
      { title: 'Uneven, Blotchy Skin Tone', desc: 'Patchy localized discoloration and loss of uniform radiant optical reflection.' },
      { title: 'Solar Lentigines & Freckles', desc: 'Discrete pigmented macules triggered by cumulative ultraviolet and sun tanning.' },
      { title: 'Dull, Weathered Epidermis', desc: 'Oxidative surface damage and melanin clustering resulting in a tired facial appearance.' }
    ],
    causes: [
      { title: 'Post-Inflammatory Hyperpigmentation', desc: 'Melanocytes depositing excess melanin in the basal layer following acne, rash, or injury.' },
      { title: 'Cumulative Sun & UV Radiation', desc: 'Unprotected sunlight exposure triggering tyrosinase enzyme activity and melanin accumulation.' },
      { title: 'Harsh Chemicals & Bleaching', desc: 'Over-the-counter fairness creams and irritating salon scrubs causing inflammatory darkening.' },
      { title: 'Visible & High-Energy Light', desc: 'Indoor computer screens, mobile devices, and visible blue light stimulating pigment cells.' }
    ],
    treatmentOptions: [
      { name: 'Customized Brightening Peels', desc: 'Lactic, glycolic, and arginine solutions designed to gently lift superficial epidermal pigment.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Low-Fluence Q-Switched Toning', desc: 'Photoacoustic laser pulses shattering dermal pigment clusters without heating the skin.', img: '/images/q_switched_procedure.jpg' },
      { name: 'Dermatological Tyrosinase Blockers', desc: 'Prescription azelaic acid, kojic complexes, and stabilized Vitamin C to prevent new melanin.', img: '/images/cat_skin_care.jpg' },
      { name: 'Clinical Barrier Photoprotection', desc: 'Tinted physical SPF 50+ formulations with iron oxides protecting against UV and visible light.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Uniform Radiant Complexion', desc: 'Clear, balanced facial skin tone with noticeable fading of stubborn dark spots.' },
      { title: 'No Skin Thinning', desc: 'Safe dermatological protocols that preserve and nourish the epidermal skin barrier.' },
      { title: 'Post-Acne Mark Clearance', desc: 'Accelerated fading of brown marks that otherwise linger for 6 to 12 months.' },
      { title: 'Long-Term Photoprotection Routine', desc: 'Personalized guidance on maintaining clarity through outdoor activities and summer seasons.' }
    ],
    suitableFor: [
      'Dark spots lingering after acne breakouts or eczema',
      'Sun-induced tanning, freckles, and localized dark patches',
      'Patients with sensitive Indian skin tones fearing laser burns',
      'Dull, uneven skin tone needing medical clarification'
    ],
    notRecommended: [
      'Self-treatment with acidic lemon juice or harsh baking soda pastes',
      'Unsupervised use of hydroquinone for extended continuous periods',
      'Active infected skin lesions or open burns in the treatment zone',
      'Patients currently tanning outdoors without broad-spectrum SPF'
    ],
    pricing: {
      description: 'Pigmentation treatment cost depends on whether the pigment is superficial (epidermal) or deep (dermal), and whether medical chemical peels, prescription skincare, or Q-switched laser toning are recommended.',
      range: '₹2,500 – ₹5,500',
      unit: '/ session',
      factors: [
        'Depth of pigment (epidermal vs dermal)',
        'Clinical peel formulation selected',
        'Q-switched Nd:YAG laser toning inclusion',
        'Surface area (full face vs localized spots)',
        'Prescription homecare brightening kit',
        'Total sessions planned (typically 3 to 5)'
      ]
    },
    faqs: [
      { q: 'How is post-acne dark marks different from acne scars?', a: 'Post-acne marks (PIH) are flat color changes in the skin with no loss of tissue. Acne scars involve actual physical indentations or depressions (loss of collagen). Marks respond very well to chemical peels and topicals, whereas indented scars require subcision or lasers.' },
      { q: 'Will laser make my pigmentation worse?', a: 'In inexperienced hands or with high energy, lasers can cause rebound hyperpigmentation in Indian skin. Dr. Sujay M uses strictly low-fluence toning protocols specifically validated for dark skin to avoid thermal burns.' },
      { q: 'Can lemon juice remove dark spots at home?', a: 'Never apply lemon juice to your face. Its high acidity causes chemical irritation, phytophotodermatitis, and severe rebound hyperpigmentation when exposed to sunlight.' }
    ]
  },

  // ── 7. SKIN ALLERGIES & DERMATITIS ───────────────────────────────
  'allergies': {
    id: 'allergies',
    title: 'Skin Allergies & Dermatitis',
    overview: 'Skin allergies and contact dermatitis occur when the immune system mounts a hypersensitivity reaction to cosmetic ingredients, metals, fragrances, or environmental allergens. Dr. Sujay M performs clinical diagnostic assessment, patch testing, and anti-inflammatory restorative regimens to calm irritation and heal the skin barrier.',
    symptoms: [
      { title: 'Intense Pruritus & Itching', desc: 'Persistent, distressing itching that worsens with heat, sweating, or friction.' },
      { title: 'Erythematous Rashes & Hives', desc: 'Raised red, pink, or violaceous inflamed plaques and transient urticarial wheals.' },
      { title: 'Skin Weeping or Dry Cracking', desc: 'Micro-vesicles oozing clear fluid in acute flares, or severe dryness and fissures in chronic stages.' },
      { title: 'Cutaneous Warmth & Swelling', desc: 'Localized edema, burning sensation, and hypersensitivity to touch or everyday water.' }
    ],
    causes: [
      { title: 'Allergic Contact Triggers', desc: 'Sensitization to cosmetic fragrances, preservatives (parabens, MIT), hair dyes (PPD), or nickel jewelry.' },
      { title: 'Irritant Environmental Exposures', desc: 'Harsh surfactants, detergents, industrial solvents, and frequent repeated handwashing.' },
      { title: 'Airborne & Food Allergens', desc: 'Pollen, dust mites, pet dander, or systemic food hypersensitivities triggering urticaria.' },
      { title: 'Compromised Skin Barrier', desc: 'Defective stratum corneum allowing external allergens to penetrate deep into epidermal layers.' }
    ],
    treatmentOptions: [
      { name: 'Diagnostic Allergy Evaluation', desc: 'Systematic clinical history, patch testing, and trigger identification to eliminate root allergens.', img: '/images/imageye___-_imgi_23_Allergies.webp' },
      { name: 'Topical Anti-Inflammatory Therapy', desc: 'Non-steroidal calcineurin inhibitors and tailored short-term corticosteroid creams for acute relief.', img: '/images/cat_skin_care.jpg' },
      { name: 'Non-Sedating Antihistamine Protocols', desc: 'Targeted second-generation H1-blockers to quench histamine-mediated pruritus and hives.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Skin Barrier Lipid Restoration', desc: 'Medical-grade ceramide, cholesterol, and fatty acid creams to rebuild the defensive epidermal envelope.', img: '/images/luxury_indian_skin_model.png' }
    ],
    benefits: [
      { title: 'Rapid Itch Relief', desc: 'Prompt reduction in distressing itching, restoring comfort and uninterrupted night sleep.' },
      { title: 'Root Trigger Identification', desc: 'Pinpointing the exact cosmetic or environmental culprit to prevent recurring allergic episodes.' },
      { title: 'Barrier Defense Repair', desc: 'Long-term fortification of fragile skin so everyday products no longer sting or irritate.' },
      { title: 'Safe Steroid Stewardship', desc: 'Carefully monitored short courses to avoid steroid dependency, skin thinning, or rebound flares.' }
    ],
    suitableFor: [
      'Recurrent facial rashes, eyelid swelling, or lip dermatitis',
      'Chronic hand eczema caused by soaps or occupational chemicals',
      'Sudden hives, wheals, or persistent itching of unknown cause',
      'Patients with hypersensitive skin reacting to most commercial creams'
    ],
    notRecommended: [
      'Self-treatment with strong over-the-counter steroid creams without doctor oversight',
      'Applying fragranced herbal ointments or essential oils to inflamed rashes',
      'Hot water baths or vigorous towel rubbing which exacerbate histamine release',
      'Ignoring potential severe systemic allergic reactions (seek immediate emergency care if breathing is affected)'
    ],
    pricing: {
      description: 'Skin allergy management begins with a doctor consultation and clinical examination. Most allergies are successfully managed with targeted medical prescriptions, antihistamines, and barrier repair creams.',
      range: '₹600 – ₹1,200',
      unit: '/ medical consultation',
      factors: [
        'Severity and surface area of the allergic reaction',
        'Clinical allergy history & trigger elimination roadmap',
        'Diagnostic patch testing (if indicated for contact dermatitis)',
        'Prescription topical anti-inflammatory formulations',
        'Systemic antihistamine and oral therapy (if needed)',
        'Barrier-repair medical emollient kit'
      ]
    },
    faqs: [
      { q: 'Is a skin allergy contagious?', a: 'No, absolutely not. Skin allergies and contact dermatitis are internal immune reactions and cannot be spread from person to person through touch or shared clothing.' },
      { q: 'How can I figure out what I am allergic to?', a: 'Dr. Sujay M conducts a detailed clinical review of your daily skincare, makeup, hair dyes, detergents, and occupational contacts. When needed, specialized patch testing is conducted to identify specific chemical sensitivities.' },
      { q: 'Why do my rashes return every time I stop steroid cream?', a: 'Over-the-counter steroids provide temporary suppression without addressing the root cause or restoring the lipid barrier. When stopped abruptly, skin rebounds with worse inflammation. We provide a step-down regimen with non-steroidal barrier healers.' }
    ]
  },

  // ── 8. PSORIASIS ─────────────────────────────────────────────────
  'psoriasis-skin': {
    id: 'psoriasis-skin',
    title: 'Psoriasis Treatment',
    overview: 'Psoriasis is a chronic, immune-mediated inflammatory skin disorder characterized by accelerated epidermal cell proliferation, resulting in well-demarcated plaques covered with silvery-white micaceous scales. Dr. Sujay M provides compassionate, long-term dermatological management including topical keratolytics, targeted phototherapy (NB-UVB), and systemic monitoring.',
    symptoms: [
      { title: 'Well-Defined Scaly Plaques', desc: 'Thickened, raised erythematous or violaceous patches capped with silvery-white micaceous scale.' },
      { title: 'Elbow, Knee & Lumbosacral Predilection', desc: 'Classic plaque distribution across extensor surfaces, lower back, scalp, and umbilicus.' },
      { title: 'Scalp Psoriasis & Flaking', desc: 'Thick, adherent plaques along the hairline that shed stubborn dandruff-like scales.' },
      { title: 'Psoriatic Nail Changes', desc: 'Small pitted depressions, oil-drop discoloration, subungual thickening, or crumbling nail plates.' }
    ],
    causes: [
      { title: 'Autoimmune T-Cell Dysregulation', desc: 'Hyperactive T-lymphocytes release cytokines (IL-17, IL-23, TNF-alpha) driving rapid skin turnover.' },
      { title: 'Accelerated Cell Turnover', desc: 'Epidermal skin cells mature and reach the surface in 3 to 5 days instead of the normal 28 days.' },
      { title: 'Genetic Susceptibility', desc: 'Strong hereditary predisposition linked to specific HLA alleles (such as HLA-Cw6).' },
      { title: 'Flare Triggers', desc: 'Emotional stress, streptococcal throat infections, skin injury (Koebner response), and smoking.' }
    ],
    treatmentOptions: [
      { name: 'Targeted Keratolytics & Topicals', desc: 'Prescription vitamin D analogues (calcipotriol), coal tar, and tailored corticosteroids to dissolve scale.', img: '/images/imageye___-_imgi_24_Psoriasis.webp' },
      { name: 'Narrowband UVB Phototherapy', desc: 'Supervised 311 nm ultraviolet phototherapy sessions to slow epidermal cell proliferation naturally.', img: '/images/cat_skin_care.jpg' },
      { name: 'Scalp Descaling & Solution Regimens', desc: 'Targeted medicated shampoos and non-greasy lotion solutions to clear thick scalp plaques.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Systemic Monitoring & Comorbidity Care', desc: 'Screening for psoriatic arthritis flags (joint stiffness, dactylitis) and holistic lifestyle counseling.', img: '/images/skin_elasticity_cheek_touch.png' }
    ],
    benefits: [
      { title: 'Visible Plaque Clearance', desc: 'Substantial flattening of thick plaques, clearing scale, and reducing visible redness.' },
      { title: 'Intense Itch & Flake Relief', desc: 'Elimination of distressing scaling, shedding, and pruritus for confident everyday clothing.' },
      { title: 'Joint Preservation Screening', desc: 'Early detection of psoriatic arthritis before irreversible joint damage can occur.' },
      { title: 'Safe Long-Term Control', desc: 'Structured rotation protocols that keep psoriasis under control without medication toxicity.' }
    ],
    suitableFor: [
      'Chronic plaque psoriasis on elbows, knees, or body',
      'Stubborn scalp psoriasis resistant to ordinary anti-dandruff shampoos',
      'Psoriatic nail pitting, thickening, and discoloration',
      'Patients seeking dermatologist-monitored phototherapy'
    ],
    notRecommended: [
      'Sudden unmonitored cessation of systemic corticosteroids (can trigger severe erythrodermic flare)',
      'Aggressive scraping or picking of silvery scales (induces Koebner phenomenon)',
      'Sunbed tanning with uncontrolled broadband UV radiation',
      'Unverified promises of "100% permanent Ayurvedic cure" without medical evidence'
    ],
    pricing: {
      description: 'Psoriasis care is an ongoing medical relationship. Treatment focuses on doctor consultations, prescription topical therapies, and targeted narrowband UVB phototherapy sessions for plaque clearance.',
      range: '₹800 – ₹2,500',
      unit: '/ phototherapy session',
      factors: [
        'Severity grade (Psoriasis Area & Severity Index - PASI)',
        'Anatomical distribution (plaque, scalp, palmoplantar, nail)',
        'Frequency of narrowband UVB phototherapy sessions',
        'Prescription topical ointments & scalp solutions',
        'Systemic laboratory screening (if indicated)',
        'Joint involvement & rheumatology co-management'
      ]
    },
    faqs: [
      { q: 'Is psoriasis contagious?', a: 'No, never. Psoriasis is completely non-contagious. It is an autoimmune genetic condition and cannot be transmitted to anyone through touching, swimming pools, or sharing utensils.' },
      { q: 'Can psoriasis be cured permanently?', a: 'Psoriasis is a chronic autoimmune condition with no permanent cure. However, modern dermatological treatments can clear plaques completely and maintain long remissions where skin looks and feels entirely normal.' },
      { q: 'Why do my joints ache with psoriasis?', a: 'Up to 30% of psoriasis patients develop psoriatic arthritis, causing morning joint stiffness, swollen sausage-like fingers (dactylitis), or heel pain. Inform Dr. Sujay M immediately if you experience joint symptoms.' }
    ]
  },

  // ── 9. ROSACEA ───────────────────────────────────────────────────
  'rosacea-skin': {
    id: 'rosacea-skin',
    title: 'Rosacea Treatment',
    overview: 'Rosacea is a chronic neurovascular facial disorder characterized by persistent facial redness, flushing episodes, telangiectasias (broken blood vessels), and inflammatory papules that mimic acne. Dr. Sujay M provides gentle vascular-stabilizing topicals, oral anti-inflammatory therapies, and trigger management for sensitive Indian skin.',
    symptoms: [
      { title: 'Persistent Centrofacial Erythema', desc: 'Flushed red or violaceous appearance across the cheeks, nose, chin, and central forehead.' },
      { title: 'Telangiectasias (Broken Capillaries)', desc: 'Visible, dilated superficial micro-vessels branching across the nasal bridge and cheeks.' },
      { title: 'Inflammatory Papulopustules', desc: 'Acne-like red bumps and small pustules occurring without blackheads or comedones.' },
      { title: 'Facial Stinging & Burning Sensations', desc: 'Extreme sensitivity, warmth, and stinging triggered by ordinary water, sunlight, or mild skincare.' }
    ],
    causes: [
      { title: 'Neurovascular Hyper-Reactivity', desc: 'Dysregulated cutaneous microvascular tone causing prolonged vasodilation and flushing.' },
      { title: 'Demodex Folliculorum Mites', desc: 'Overpopulation of microscopic Demodex mites triggering immune inflammatory reactions.' },
      { title: 'Environmental & Dietary Triggers', desc: 'Spicy foods, hot beverages, sunlight, wind, alcohol, and extreme temperature changes.' },
      { title: 'Inappropriate Steroid Use', desc: 'Steroid-induced rosacea caused by applying over-the-counter hydrocortisone or fairness creams.' }
    ],
    treatmentOptions: [
      { name: 'Targeted Anti-Parasitic & Soothing Topicals', desc: 'Prescription ivermectin, metronidazole, and azelaic acid to suppress Demodex and calm inflammation.', img: '/images/imageye___-_imgi_20_Connective-Tissue-Disorders.webp' },
      { name: 'Low-Dose Anti-Inflammatory Regimens', desc: 'Sub-antimicrobial dose oral medications that calm vascular hyperactivity without antibiotic resistance.', img: '/images/cat_skin_care.jpg' },
      { name: 'Gentle Calming Light Therapy', desc: 'Non-thermal soothing light wavelengths that reduce microvascular congestion and redness.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Neurovascular Barrier Defense Skincare', desc: 'Ultra-gentle, fragrance-free, lipid-replenishing formulations that restore skin tolerance.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Calmed Facial Redness & Flushing', desc: 'Significant reduction in the frequency and intensity of uncomfortable facial flushing episodes.' },
      { title: 'Clearance of Bumps & Pimples', desc: 'Smooth skin clearance of rosacea papules without the dryness caused by harsh acne products.' },
      { title: 'Elimination of Stinging & Burning', desc: 'Restored epidermal tolerance so everyday cleansing and sunscreen feel comfortable.' },
      { title: 'Prevention of Ocular Complications', desc: 'Early evaluation to prevent gritty, dry, or inflamed ocular rosacea symptoms.' }
    ],
    suitableFor: [
      'Facial blushing, redness, and visible broken capillaries',
      'Acne-like bumps that do not respond to regular pimple creams',
      'Patients experiencing stinging and sensitivity to most cosmetics',
      'Steroid-induced rosacea after stopping fairness creams'
    ],
    notRecommended: [
      'Using harsh acne scrubs, alcohol toners, or mechanical facial brushes',
      'Chemical peels formulated with high-concentration glycolic acid',
      'Applying over-the-counter corticosteroid creams',
      'Saunas, steam rooms, and extreme sun exposure without physical protection'
    ],
    pricing: {
      description: 'Rosacea care starts with a comprehensive consultation to differentiate rosacea from acne or lupus. Treatment focuses on prescription anti-inflammatory topicals, oral microvascular modulators, and ultra-gentle barrier skincare.',
      range: '₹600 – ₹1,200',
      unit: '/ medical consultation',
      factors: [
        'Rosacea subtype (Erythematotelangiectatic vs Papulopustular)',
        'Presence of steroid-induced rosacea rebound',
        'Prescription topical ivermectin / azelaic acid therapies',
        'Sub-antimicrobial systemic medication course',
        'Gentle vascular calming light sessions',
        'Hypoallergenic barrier-repair medical skincare'
      ]
    },
    faqs: [
      { q: 'Is rosacea the same as acne?', a: 'No. While papulopustular rosacea produces red bumps, it has no comedones (blackheads or whiteheads) and is a vascular-inflammatory condition. Using harsh acne treatments like benzoyl peroxide will severely burn and irritate rosacea skin.' },
      { q: 'What is steroid-induced rosacea?', a: 'Applying over-the-counter triple-combination steroid creams for fairness or pimples weakens facial blood vessels, causing severe persistent redness, burning, and pimple eruptions when stopped. Dr. Sujay M specializes in gentle steroid withdrawal protocols.' },
      { q: 'Can diet trigger rosacea flares?', a: 'Yes. Common triggers include spicy foods, hot soups/coffee, alcohol, and citrus fruits. Keeping a personal food and flare diary helps you identify and avoid your specific triggers.' }
    ]
  },

  // ── 10. WRINKLES & FINE LINES ────────────────────────────────────
  'wrinkle-skin': {
    id: 'wrinkle-skin',
    title: 'Wrinkle Treatment',
    overview: 'Wrinkles develop through a combination of repetitive dynamic facial muscle contractions, progressive depletion of dermal collagen and hyaluronic acid, and environmental photoaging. Dr. Sujay M offers precision clinical neuromodulators, hyaluronic acid dermal hydration, and non-ablative collagen remodeling tailored for a natural, refreshed appearance.',
    symptoms: [
      { title: 'Dynamic Forehead & Glabellar Furrows', desc: 'Horizontal forehead creases and vertical "11" frown lines that appear with expression.' },
      { title: 'Periorbital Crow’s Feet', desc: 'Radiating fine lines at the outer corners of the eyes noticeable when smiling or laughing.' },
      { title: 'Static Creases & Deep Folds', desc: 'Permanent etched lines visible even when facial muscles are completely at rest.' },
      { title: 'Fine Epidermal Crepiness', desc: 'Micro-crinkling and textural dehydration across the cheeks, neck, and under-eye zones.' }
    ],
    causes: [
      { title: 'Repetitive Mimetic Muscle Action', desc: 'Thousands of daily facial contractions folding the overlying epidermis repeatedly.' },
      { title: 'Age-Related Collagen Depletion', desc: 'Annual 1% loss of dermal collagen synthesis starting in your mid-20s.' },
      { title: 'Ultraviolet Photoaging (Solar Elastosis)', desc: 'Sun-induced free radicals breaking down structural elastic fibers prematurely.' },
      { title: 'Skin Dehydration & Glycation', desc: 'Depleted glycosaminoglycans and sugar-protein cross-linking causing dermal stiffness.' }
    ],
    treatmentOptions: [
      { name: 'Precision Anti-Wrinkle Micro-Injections', desc: 'Targeted neuromodulator injections to relax hyperactive wrinkle-causing muscles naturally without a frozen look.', img: '/images/imageye___-_imgi_8_Botox-and-Fillers-1.webp' },
      { name: 'Skin-Booster Hyaluronic Hydration', desc: 'Micro-droplet stabilized hyaluronic acid infusions restoring deep dermal moisture and plumpness.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Collagen Remodeling Lasers', desc: 'Fractional thermal stimulation triggering new dermal collagen matrix deposition.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Medical Retinoid Prescriptions', desc: 'Dermatologist-prescribed pure tretinoin or retinaldehyde to accelerate cellular renewal.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Smoothed Expression Lines', desc: 'Noticeable softening of forehead lines, frown furrows, and crow’s feet.' },
      { title: 'Completely Natural Expressions', desc: 'Carefully measured micro-dosing that preserves your authentic facial expressions and warmth.' },
      { title: 'Prevention of Deep Static Etching', desc: 'Relaxing dynamic tension prevents temporary lines from becoming permanent scars.' },
      { title: 'Enhanced Skin Hydration & Plumpness', desc: 'Restoration of radiant bounce, dermal firmness, and optical glow.' }
    ],
    suitableFor: [
      'Forehead wrinkles, frown lines, and crow’s feet',
      'Early fine lines around the eyes, mouth, or neck',
      'Patients seeking preventative anti-aging in their 30s and 40s',
      'Textural crepiness desiring natural skin hydration'
    ],
    notRecommended: [
      'Pregnancy and breastfeeding (for injectable neuromodulators)',
      'Underlying neuromuscular disorders (e.g. myasthenia gravis)',
      'Active infection or open lesions at injection sites',
      'Desire for unnatural, frozen, or completely immobile facial results'
    ],
    pricing: {
      description: 'Wrinkle treatment is customized based on whether dynamic expression lines (treated with precision neuromodulators) or static collagen loss (treated with skin boosters or RF remodeling) are addressed.',
      range: '₹6,000 – ₹18,000',
      unit: '/ treatment area',
      factors: [
        'Treatment modality (Precision neuromodulators vs Skin Boosters vs Lasers)',
        'Anatomical areas treated (Forehead, frown lines, crow’s feet)',
        'Number of clinical units or filler volume required',
        'Severity and depth of static etched wrinkles',
        'Combination with collagen biostimulator serums',
        'Doctor-administered precision safety protocols'
      ]
    },
    faqs: [
      { q: 'Will anti-wrinkle injections make my face look frozen or fake?', a: 'No. Dr. Sujay M practices conservative, micro-targeted dosing. The goal is to soften harsh lines and relax tension while preserving your full, natural facial expressions and emotional warmth.' },
      { q: 'How long do anti-wrinkle results last?', a: 'Neuromodulator treatments typically last 4 to 6 months, after which muscle activity gradually returns. Skin boosters and laser collagen remodeling provide lasting structural improvements for 9 to 12 months.' },
      { q: 'When is the best age to start preventative wrinkle care?', a: 'Most patients begin preventative treatments in their late 20s or early 30s when dynamic lines start leaving faint shadows at rest. Starting early prevents lines from etching deep into the dermis.' }
    ]
  },

  // ── 11. BACTERIAL, FUNGAL & VIRAL INFECTIONS ─────────────────────
  'bacterial-fungal-viral': {
    id: 'bacterial-fungal-viral',
    title: 'Skin Infections (Bacterial, Fungal & Viral)',
    overview: 'Cutaneous infections require precise dermatological diagnosis to differentiate between fungal ringworm (tinea), bacterial folliculitis/impetigo, and viral lesions (herpes, warts, mollusca). Dr. Sujay M utilizes clinical microscopy and evidence-based targeted antimicrobials, strictly avoiding harmful OTC steroid-combination creams.',
    symptoms: [
      { title: 'Annular Scaly Rings (Fungal / Tinea)', desc: 'Spreading red or brown circular patches with an active scaly border and central clearing.' },
      { title: 'Follicular Pustules (Bacterial Folliculitis)', desc: 'Small, tender pus-filled bumps surrounding individual hair follicles on the beard, chest, or scalp.' },
      { title: 'Clustered Painful Vesicles (Viral Herpes)', desc: 'Tender fluid-filled blisters on an erythematous base accompanied by tingling or burning.' },
      { title: 'Crusted Honey-Colored Sores (Impetigo)', desc: 'Superficial contagious erosions covered with characteristic golden-yellow crusts.' }
    ],
    causes: [
      { title: 'Dermatophyte Fungal Proliferation', desc: 'Trichophyton species thriving in warm, humid microenvironments, tight clothes, and gym gear.' },
      { title: 'Staphylococcal Bacterial Invasion', desc: 'Staphylococcus aureus entering micro-abrasions, shaving nicks, or hair follicle openings.' },
      { title: 'Herpes Simplex / Zoster Reactivation', desc: 'Viral reactivation triggered by stress, fever, sun exposure, or localized immunosuppression.' },
      { title: 'Misuse of Topical Steroid Creams', desc: 'Applying OTC fairness or itch creams creating "Tinea Incognito"—a severe, disguised fungal flare.' }
    ],
    treatmentOptions: [
      { name: 'Targeted Clinical Antifungal Protocols', desc: 'Prescription systemic and topical allylamine/azole antimycotics with strict curative courses.', img: '/images/imageye___-_imgi_22_Bacterial-Fungal-Skin-Infections.webp' },
      { name: 'Culture-Directed Antibiotic Therapy', desc: 'Narrow-spectrum topical and oral antibiotics targeting specific bacterial pathogens.', img: '/images/cat_skin_care.jpg' },
      { name: 'Antiviral Medical Regimens', desc: 'Acyclovir or valacyclovir therapy to abort acute viral replication and relieve neural pain.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Steroid-Detoxification Protocols', desc: 'Specialized weaning and clearance for chronic resistant fungal infections masked by steroid abuse.', img: '/images/luxury_indian_skin_model.png' }
    ],
    benefits: [
      { title: 'Accurate Clinical Diagnosis', desc: 'Targeted microscopic evaluation ensures the right drug for the right pathogen.' },
      { title: 'Complete Eradication & Cure', desc: 'Structured regimens designed to eliminate spores and prevent chronic recurrence.' },
      { title: 'Steroid Abuse Reversal', desc: 'Safe resolution of severe steroid-damaged skin without prolonged withdrawal flares.' },
      { title: 'Household Transmission Prevention', desc: 'Hygiene and laundry guidance to safeguard family members from fungal transmission.' }
    ],
    suitableFor: [
      'Spreading ringworm (tinea cruris, tinea corporis, tinea faciei)',
      'Recurrent boils, pus bumps, or shaving folliculitis',
      'Painful cold sores, fever blisters, or shingles rashes',
      'Chronic resistant fungal infections that worsen with pharmacy creams'
    ],
    notRecommended: [
      'Applying over-the-counter creams containing clobetasol, betamethasone, or hydrocortisone',
      'Sharing towels, bedsheets, or soap bars with family members',
      'Stopping antifungal medication prematurely as soon as itching subsides',
      'Applying harsh home remedies like garlic, battery acid, or detergent pastes'
    ],
    pricing: {
      description: 'Treatment for skin infections is a direct medical consultation with targeted prescription medicines. Diagnostic scraping or microscopy is conducted when needed to prescribe the exact antimicrobial agent.',
      range: '₹600 – ₹1,000',
      unit: '/ medical consultation',
      factors: [
        'Pathogen type (Fungal tinea vs Bacterial vs Viral)',
        'Extensiveness of cutaneous involvement',
        'History of prior topical steroid abuse (Tinea Incognito)',
        'Diagnostic KOH scraping examination (if performed)',
        'Prescription systemic and topical antimicrobial course',
        'Follow-up cure verification consultation'
      ]
    },
    faqs: [
      { q: 'Why did my fungal ringworm spread after using an ointment from the pharmacy?', a: 'Most over-the-counter creams sold for itching contain potent corticosteroids. Steroids suppress your skin’s immunity, making the fungus flourish into a severe, widespread condition known as "Tinea Incognito." We provide medical detox regimens.' },
      { q: 'How can I prevent fungal infections from coming back?', a: 'Always complete the full course of prescribed antifungal medication even after the rash vanishes. Wear loose cotton clothing, keep body folds thoroughly dry, wash clothes in hot water, and iron them inside out to destroy fungal spores.' },
      { q: 'Is cold sore (herpes) curable?', a: 'Herpes simplex resides dormant in sensory nerve ganglia after initial infection. While the virus cannot be completely eradicated from nerves, oral antiviral therapy shortens outbreaks, stops blistering, and prevents frequent recurrences.' }
    ]
  },

  // ── 12. NAIL INFECTIONS ──────────────────────────────────────────
  'nail-infections': {
    id: 'nail-infections',
    title: 'Nail Infections (Onychomycosis & Paronychia)',
    overview: 'Nail disorders include fungal onychomycosis, bacterial paronychia (painful nail fold infection), and nail psoriasis. Because fungal spores embed deep beneath the thick keratin nail plate, standard skin creams cannot penetrate. Dr. Sujay M prescribes medical lacquers, systemic oral antifungals, and nail restoration protocols.',
    symptoms: [
      { title: 'Subungual Hyperkeratosis (Nail Thickening)', desc: 'Thick, hardened, crumbly debris accumulating beneath the nail plate.' },
      { title: 'Yellowish-Brown Discoloration', desc: 'Opaque yellow, white, or brown streaks spreading along the length of the nail.' },
      { title: 'Brittle, Crumbled Nail Borders', desc: 'Distal nail plate splitting, flaking, or eroding irregularly during clipping.' },
      { title: 'Painful Erythematous Nail Folds (Paronychia)', desc: 'Throbbing redness, swelling, and purulent discharge along the cuticle border.' }
    ],
    causes: [
      { title: 'Dermatophyte Fungal Nail Invasion', desc: 'Trichophyton rubrum penetrating through the hyponychium into the nail bed.' },
      { title: 'Chronic Moisture & Closed Footwear', desc: 'Warm, damp microenvironments in closed shoes fostering fungal and yeast proliferation.' },
      { title: 'Salon Manicure / Pedicure Trauma', desc: 'Aggressive cuticle pushing or unsterilized instruments creating portals for infection.' },
      { title: 'Underlying Diabetes & Poor Circulation', desc: 'Reduced peripheral microcirculation impairing immune defense in toe nails.' }
    ],
    treatmentOptions: [
      { name: 'Prescription Antifungal Lacquers', desc: 'High-penetration medical nail lacquers (amorolfine/ciclopirox) that bind to keratin and destroy spores.', img: '/images/imageye___-_imgi_22_Bacterial-Fungal-Skin-Infections.webp' },
      { name: 'Systemic Pulse Antifungal Therapy', desc: 'Doctor-monitored oral antifungal courses that incorporate directly into the emerging nail matrix.', img: '/images/cat_skin_care.jpg' },
      { name: 'Acute Paronychia Drainage & Antibiotics', desc: 'Medical drainage of acute nail fold abscesses combined with targeted oral antibiotics.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Protective Cuticle Health Regimens', desc: 'Restoration of the protective cuticle seal to shield the growing nail matrix from water and bacteria.', img: '/images/luxury_indian_skin_model.png' }
    ],
    benefits: [
      { title: 'Clear, Healthy Nail Regrowth', desc: 'Gradual emergence of clear, smooth, transparent nail plate from the proximal lunula.' },
      { title: 'Elimination of Nail Pain & Pressure', desc: 'Relief from throbbing shoe pressure caused by thickened, distorted toenails.' },
      { title: 'Prevention of Fungal Spread to Skin', desc: 'Halting the reservoir of fungus that continually seeds athlete’s foot and body ringworm.' },
      { title: 'Restored Cosmetic Appearance', desc: 'Confident display of open footwear and bare feet with restored nail clarity.' }
    ],
    suitableFor: [
      'Thickened, discolored, or crumbling toenails and fingernails',
      'Painful, throbbing, swollen cuticles (acute or chronic paronychia)',
      'Nail infections resistant to ordinary home vinegar soaks',
      'Diabetic patients requiring medical foot and nail hygiene'
    ],
    notRecommended: [
      'Applying regular skin creams onto nails (they cannot penetrate the hard nail plate)',
      'Aggressively cutting out or ripping away infected nail corners',
      'Wearing damp closed shoes or synthetic socks for long hours',
      'Covering infected nails with artificial acrylic extensions or dark polish'
    ],
    pricing: {
      description: 'Nail infection care begins with a medical consultation to diagnose whether onychomycosis, bacterial paronychia, or nail psoriasis is present. Treatment involves specialized antifungal lacquers and oral pulse therapy.',
      range: '₹600 – ₹1,200',
      unit: '/ medical consultation',
      factors: [
        'Number of fingernails or toenails involved',
        'Degree of subungual nail bed thickening',
        'Prescription medical lacquer formulation',
        'Systemic oral antifungal pulse therapy duration',
        'Liver function baseline monitoring (for oral therapy)',
        'Nail plate debridement or partial avulsion (if necessary)'
      ]
    },
    faqs: [
      { q: 'Why does toenail fungus take so long to clear?', a: 'Toenails grow at an average rate of only 1 to 1.5 millimeters per month. The infected portion cannot "heal" like skin—it must slowly grow out completely while new, healthy nail replaces it. This requires 6 to 9 months for fingernails and 9 to 12 months for toenails.' },
      { q: 'Can nail polish cure fungal nails?', a: 'No. Cosmetic nail polish creates an occlusive, dark seal that accelerates fungal growth. We prescribe specialized medical antifungal lacquers that contain active drug molecules designed to penetrate keratin.' },
      { q: 'What causes swollen, throbbing red cuticles?', a: 'This is paronychia, an infection of the tissue adjacent to the nail, often caused by cuticle damage, nail biting, or frequent dishwashing. It requires prescription medical antibiotics and avoidance of water immersion.' }
    ]
  }
};

// Smart fallback profile generator for any unmapped condition
export function getTreatmentProfile(item) {
  if (!item) return null;
  
  const key = item.id || item.slug || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '');
  
  // Direct match
  if (TREATMENT_CLINICAL_PROFILES[key]) {
    return TREATMENT_CLINICAL_PROFILES[key];
  }
  
  // Keyword partial match
  const lowerKey = key.toLowerCase();
  for (const [profKey, profile] of Object.entries(TREATMENT_CLINICAL_PROFILES)) {
    if (lowerKey.includes(profKey) || profKey.includes(lowerKey)) {
      return profile;
    }
  }
  
  // Specific keyword fallbacks
  if (lowerKey.includes('melasma')) return TREATMENT_CLINICAL_PROFILES['melasma-skin'];
  if (lowerKey.includes('vitiligo')) return TREATMENT_CLINICAL_PROFILES['vitiligo-skin'];
  if (lowerKey.includes('sagging') || lowerKey.includes('tighten')) return TREATMENT_CLINICAL_PROFILES['sagging-skin'];
  if (lowerKey.includes('scar')) return TREATMENT_CLINICAL_PROFILES['acne-scar-skin'];
  if (lowerKey.includes('acne') || lowerKey.includes('pimple')) return TREATMENT_CLINICAL_PROFILES['pimples-acne'];
  if (lowerKey.includes('pigment')) return TREATMENT_CLINICAL_PROFILES['pigmentation-skin'];
  if (lowerKey.includes('allerg')) return TREATMENT_CLINICAL_PROFILES['allergies'];
  if (lowerKey.includes('psoriasis')) return TREATMENT_CLINICAL_PROFILES['psoriasis-skin'];
  if (lowerKey.includes('rosacea')) return TREATMENT_CLINICAL_PROFILES['rosacea-skin'];
  if (lowerKey.includes('wrinkle') || lowerKey.includes('aging')) return TREATMENT_CLINICAL_PROFILES['wrinkle-skin'];
  if (lowerKey.includes('infect') || lowerKey.includes('fungal') || lowerKey.includes('bacterial')) return TREATMENT_CLINICAL_PROFILES['bacterial-fungal-viral'];
  if (lowerKey.includes('nail')) return TREATMENT_CLINICAL_PROFILES['nail-infections'];

  // Dynamic clinical fallback customized to the item's title & category
  const title = item.title || 'Dermatology Condition';
  const category = item.category || 'Clinical Dermatology';
  
  return {
    id: key,
    title: title,
    overview: item.fullText || item.summary || `${title} is managed with evidence-based dermatological protocols at Medicare Skin & Cosmetic Clinic. Dr. Sujay M conducts comprehensive in-person evaluations to identify root triggers and prescribe targeted medical therapies tailored to Indian skin types.`,
    symptoms: [
      { title: `Characteristic ${title} Changes`, desc: `Noticeable cutaneous variations in surface texture, pigmentation, or tissue comfort associated with ${title}.` },
      { title: 'Localized Skin Sensitivity', desc: 'Mild irritation, redness, or discomfort exacerbated by environmental factors, heat, or cosmetic products.' },
      { title: 'Texture & Barrier Variations', desc: 'Compromised epidermal smoothness leading to dry flaking, congestion, or localized tissue laxity.' },
      { title: 'Recurrent Chronic Episodes', desc: 'Symptoms that fluctuate over time and require a structured maintenance and photoprotective regimen.' }
    ],
    causes: [
      { title: 'Cutaneous Biological Triggers', desc: 'Underlying cellular and inflammatory mechanisms driving epidermal or dermal variations.' },
      { title: 'Ultraviolet & Environmental Damage', desc: 'Cumulative solar radiation, ambient pollution, and oxidative stress affecting skin resilience.' },
      { title: 'Skin Barrier Impairment', desc: 'Depleted epidermal lipid architecture allowing external irritants to trigger localized reactions.' },
      { title: 'Hormonal & Lifestyle Factors', desc: 'Endocrine fluctuations, stress-induced cytokines, and product sensitivities influencing skin health.' }
    ],
    treatmentOptions: [
      { name: 'Targeted Clinical Formulations', desc: 'Dermatologist-prescribed active topicals tailored to address the specific pathophysiology.', img: item.image || '/images/cat_skin_care.jpg' },
      { name: 'Calibrated In-Clinic Procedures', desc: 'Evidence-based in-clinic treatments (peels, lasers, or regenerative therapies) when clinically indicated.', img: '/images/luxury_indian_skin_model.png' },
      { name: 'Skin Barrier Restoration', desc: 'Medical-grade ceramide and lipid replenishment to restore epidermal defense and comfort.', img: '/images/skin_elasticity_cheek_touch.png' },
      { name: 'Long-Term Maintenance Plan', desc: 'Personalized homecare roadmap designed to sustain clinical results and prevent future flares.', img: '/images/poreless_glass_skin_glow.jpg' }
    ],
    benefits: [
      { title: 'Accurate Dermatological Diagnosis', desc: `In-person assessment by Dr. Sujay M ensures precise diagnosis rather than guesswork.` },
      { title: 'Personalized Clinical Roadmap', desc: 'A care plan customized to your exact skin type, symptom duration, and personal lifestyle.' },
      { title: 'Safe for Indian Skin', desc: 'Protocols carefully chosen to prevent post-inflammatory hyperpigmentation or irritation.' },
      { title: 'Evidence-Based Transparency', desc: 'Realistic expectations with no exaggerated claims or universal packaged promises.' }
    ],
    suitableFor: [
      `Patients experiencing persistent symptoms of ${title}`,
      'Skin concerns unresolved by standard over-the-counter products',
      'Patients seeking dermatologist-monitored medical treatment',
      'All Indian skin tones desiring safe, conservative care'
    ],
    notRecommended: [
      'Self-treatment with unverified high-strength over-the-counter steroid creams',
      'Aggressive scrub exfoliation or irritating home remedies',
      'Unsupervised cosmetic salon treatments during active flares',
      'Patients expecting overnight resolution without following prescribed routines'
    ],
    pricing: {
      description: `Pricing for ${title} care depends on whether medical consultation, prescription skincare, or procedural sessions are recommended following diagnostic examination.`,
      range: '₹600 – ₹3,500',
      unit: '/ consultation & treatment plan',
      factors: [
        'Doctor diagnostic examination & history evaluation',
        'Severity grade and surface area involved',
        'Prescription medical homecare formulation',
        'In-clinic procedure requirement (if indicated)',
        'Number of monitored follow-up reviews',
        'Preventative maintenance protocol'
      ]
    },
    faqs: [
      { q: `What is the first step in treating ${title}?`, a: `The first step is always an accurate in-person dermatological examination with Dr. Sujay M. Understanding the exact underlying cause ensures you receive targeted treatment rather than trial-and-error products.` },
      { q: 'How many visits are typically required?', a: 'Mild conditions often respond well to prescription topicals and a single review. Chronic or procedural treatments may involve 2 to 4 planned visits spaced several weeks apart.' },
      { q: 'Are the treatments safe for sensitive skin?', a: 'Yes. All clinical protocols at Medicare Skin are calibrated specifically for Indian skin types (Fitzpatrick IV–VI) to avoid post-inflammatory pigmentation and support skin barrier health.' }
    ]
  };
}
