export type ArticleSection = {
  title: string;
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  author: string;
  published: string;
  reviewed: string;
  approved: boolean;
  sections: ArticleSection[];
  keyTakeaways: string[];
  references?: { title: string; url?: string }[];
};

export const articles: Article[] = [
  {
    slug: 'melasma-sun-protection',
    title: 'Melasma & Sun Protection: Why Broad-Spectrum Defense is Essential for Indian Skin',
    summary:
      'Understanding why melasma recurs, how ultraviolet and high-energy visible (HEV) light activate melanocytes, and the critical role of iron-oxide tinted sunscreens.',
    category: 'Pigmentation & Melasma',
    readingTime: '5 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'Melasma is a chronic, relapsing condition triggered by UV, visible light, heat, and hormonal shifts.',
      'Standard SPF protects against UVB and UVA, but tinted sunscreens with iron oxides are required to shield against visible high-energy light.',
      'Aggressive lasers or high-heat treatments without stabilization can trigger severe rebound hyperpigmentation on Indian skin phototypes.'
    ],
    sections: [
      {
        title: 'What Causes Melasma and Why Does It Recur?',
        body:
          'Melasma presents as symmetrical, brownish or grayish-brown patches predominantly on the cheeks, forehead, bridge of the nose, and upper lip. Unlike simple sun freckles, melasma involves hyperfunctional melanocytes stimulated by a complex interplay of genetic predisposition, estrogen/progesterone hormonal fluctuations, and environmental radiation. Even brief unprotected exposure to ultraviolet radiation or intense visible light can reactivate previously cleared melanin synthesis.'
      },
      {
        title: 'The Critical Role of Iron Oxides and Tinted Sun Protection',
        body:
          'Recent dermatological research demonstrates that for Fitzpatrick skin types IV to VI (predominant in South India), high-energy visible light (HEV / blue light) contributes significantly to persistent hyperpigmentation. Chemical filters alone do not block visible light wavelengths. Using broad-spectrum mineral sunscreens formulated with iron oxides provides a physical tint barrier that effectively prevents blue light-induced melanogenesis.'
      },
      {
        title: 'Safe Clinical Treatment Protocols at Medicare Skin',
        body:
          'Under Dr. Sujay M’s supervision at our South Bengaluru clinic, melasma management begins with medical stabilization using targeted topical tyrosinase inhibitors (such as azelaic acid, kojic acid, and arbutin) combined with barrier restoration. When clinical procedures are indicated, low-fluence Q-Switched Nd:YAG laser toning and mild doctor-formulated chemical peels are applied gently to prevent heat accumulation and post-inflammatory rebound.'
      }
    ],
    references: [
      {
        title: 'American Academy of Dermatology (AAD) — Melasma Treatment Guidelines',
        url: 'https://www.aad.org/public/diseases/a-z/melasma-treatment'
      },
      {
        title: 'Indian Association of Dermatologists, Venereologists and Leprologists (IADVL) — Pigmentary Disorders Consensus'
      }
    ]
  },
  {
    slug: 'acne-scars-versus-dark-marks',
    title: 'Acne Scars vs. Post-Inflammatory Dark Marks: Correct Diagnosis Matters',
    summary:
      'Learn why indented textural scars (rolling, boxcar, icepick) and flat pigmented blemishes (PIH/PIE) require completely different dermatological treatment pathways.',
    category: 'Acne & Scars',
    readingTime: '6 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'Post-inflammatory hyperpigmentation (PIH) is a flat pigmentary change, whereas genuine scars involve dermal collagen destruction or fibrotic tethering.',
      'Surface chemical peels and topical brightening agents improve flat dark marks but cannot elevate indented scars.',
      'True atrophic scars require structural interventions: subcision to release fibrotic bands and fractional MNRF/laser to stimulate neo-collagenesis.'
    ],
    sections: [
      {
        title: 'Distinguishing Structural Scars from Post-Acne Pigmentation',
        body:
          'A frequent point of confusion among patients is distinguishing post-inflammatory hyperpigmentation (PIH) from true acne scarring. PIH represents flat, discolored marks left behind after an inflammatory acne lesion resolves, without loss of dermal tissue. In contrast, atrophic acne scars represent permanent structural alterations caused by enzyme-mediated destruction of collagen bundles during deep follicular rupture.'
      },
      {
        title: 'Why Surface Creams Cannot Fix Pitted Scars',
        body:
          'Because atrophic scars (rolling, boxcar, and icepick morphology) reside deep within the reticular dermis, topical serums and over-the-counter creams cannot restore the missing volume. Rolling scars are tethered to the underlying subcutaneous tissue by dense fibrotic bands; these require manual blunt subcision to release before any resurfacing technique can effectively lift the skin surface.'
      },
      {
        title: 'Comprehensive Multimodal Scar Revision in Bengaluru',
        body:
          'Dr. Sujay M designs individualized multimodal scar revision plans. Tethered rolling scars receive subcision, deep icepick scars are treated with focal TCA CROSS, and generalized textural irregularities are remodeled with Microneedling Radiofrequency (MNRF) or fractional erbium/carbon dioxide laser therapy. Active breakouts must be medically controlled before initiating intensive scar procedures.'
      }
    ],
    references: [
      {
        title: 'Journal of the American Academy of Dermatology — Classification and Management of Acne Scars'
      },
      {
        title: 'Indian Journal of Dermatology — Approach to Acne Scarring in Indian Skin Types'
      }
    ]
  },
  {
    slug: 'laser-hair-reduction-indian-skin',
    title: 'Laser Hair Reduction for Indian Skin Tones (Fitzpatrick IV-VI): Device Safety & Physics',
    summary:
      'Why triple-wavelength diode technology and active contact cooling are essential to protect melanin-rich skin while providing long-term hair reduction.',
    category: 'Laser Dermatology',
    readingTime: '5 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'Indian skin has high concentrations of epidermal melanin, requiring longer wavelengths (808nm/1064nm) to bypass the surface and reach the follicle.',
      'Laser hair reduction achieves permanent hair reduction, not 100% permanent hair removal in a single session; 6 to 8 sessions are standard.',
      'Cooling mechanisms and calibrated pulse durations prevent burns, blistering, and paradoxical hypertrichosis.'
    ],
    sections: [
      {
        title: 'The Challenge of Melanin Competition in Darker Phototypes',
        body:
          'Laser hair reduction works on the principle of selective photothermolysis: laser light is absorbed by melanin in the hair bulb, generating thermal energy that coagulates the follicular stem cells. However, in Indian skin (Fitzpatrick types IV to VI), the epidermis also contains abundant melanin. Without proper laser wavelength selection, epidermal melanin absorbs the light energy, causing burns or post-inflammatory hyperpigmentation.'
      },
      {
        title: 'Why Diode (808nm/810nm) and Nd:YAG (1064nm) Are Preferred',
        body:
          'Wavelengths such as 808nm Diode and 1064nm Nd:YAG penetrate deeper into the dermis, bypassing the superficial epidermal pigment layer to deliver thermal energy safely to the hair root. Combined with continuous chilled sapphire tip contact cooling, the epidermal temperature remains controlled while the target follicle is destroyed.'
      },
      {
        title: 'Realistic Treatment Timelines and Session Expectations',
        body:
          'Hair follicles grow in cycles (anagen, catagen, and telogen). Lasers only disable follicles during the active growth (anagen) phase. Consequently, multiple sessions spaced 4 to 6 weeks apart are essential to treat newly emerging hairs. Most patients achieve 80% to 90% reduction over 6 to 8 sessions, with periodic annual touch-ups as necessary.'
      }
    ],
    references: [
      {
        title: 'Dermatologic Surgery — Laser Hair Removal in Darker Skin Phototypes'
      }
    ]
  },
  {
    slug: 'hydrodermabrasion-versus-facial',
    title: 'HydraFacial & Hydrodermabrasion vs Regular Salon Facials: What Clinical Studies Show',
    summary:
      'An evidence-based comparison of device-assisted vortex vacuum extraction and active serum infusion versus traditional salon steaming and manual extraction.',
    category: 'Aesthetics',
    readingTime: '5 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'HydraFacial uses a patented vortex tip for gentle exfoliation and automated vacuum extraction without skin tearing.',
      'Salon facials that employ aggressive manual extraction often cause broken capillaries, post-acne marks, and follicular rupture.',
      'Device facials provide instant hydration and temporary pore clarification but do not replace medical treatment for melasma or cystic acne.'
    ],
    sections: [
      {
        title: 'How Device-Assisted Hydrodermabrasion Works',
        body:
          'Hydrodermabrasion combines non-invasive mechanical exfoliation with pneumatic liquid infusion. A spiral vortex tip gently dislodges dead stratum corneum cells while simultaneously bathing the skin in salicylic acid, lactic acid, and antioxidant solutions. A closed-circuit vacuum extracts sebum plugs and micro-comedones painlessly without the tissue trauma of manual metal comedone extractors.'
      },
      {
        title: 'Why Traditional Salon Facials Can Exacerbate Sensitive Skin',
        body:
          'Traditional salon facials often rely on aggressive steam, abrasive physical walnut or apricot scrubs, and heavy comedogenic massage creams. For patients with underlying rosacea, active acne, or melasma, heat and vigorous friction cause vasodilation, barrier disruption, and pigment activation. Clinical hydrodermabrasion operates at physiological temperatures without friction.'
      },
      {
        title: 'Clinical Candidacy and Expected Outcomes',
        body:
          'HydraFacial is ideal before weddings, special events, or as regular monthly maintenance for congested, dull skin. It produces immediate smoothness, increased hydration, and refined pores with zero social downtime. However, patients with severe cystic acne or deep dermal melasma are advised to combine device sessions with specific medical therapies.'
      }
    ],
    references: [
      {
        title: 'Journal of Cosmetic Dermatology — Efficacy of Vortex-Assisted Hydration Facials'
      }
    ]
  },
  {
    slug: 'prp-vs-gfc-hair-loss',
    title: 'PRP vs. GFC for Hair Loss: Clinical Differences, Growth Factor Yield & Evidence',
    summary:
      'Comparing autologous Platelet-Rich Plasma (PRP) with acellular Growth Factor Concentrate (GFC) for androgenetic alopecia and telogen effluvium in South Bengaluru.',
    category: 'Hair Care',
    readingTime: '6 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'Both PRP and GFC are autologous blood-derived biological therapies designed to nourish miniaturizing hair follicles.',
      'PRP delivers live platelets in plasma that activate and release growth factors in the scalp tissue.',
      'GFC involves laboratory activation of platelets beforehand, yielding an acellular concentrate of key growth factors (PDGF, VEGF, EGF, IGF-1).',
      'Neither therapy can revive completely fibrosed, long-dead hair follicles; early intervention during active thinning yields superior clinical response.'
    ],
    sections: [
      {
        title: 'Understanding Autologous Biological Therapies for Hair Thinning',
        body:
          'Androgenetic alopecia (pattern hair loss) in both men and women is characterized by progressive follicular miniaturization driven by dihydrotestosterone (DHT) sensitivity and micro-vascular insufficiency. Biological treatments use autologous platelets extracted from the patient’s own peripheral blood to deliver high concentrations of bio-active growth factors directly to the follicular dermal papilla.'
      },
      {
        title: 'How GFC Differs from Traditional PRP',
        body:
          'In traditional PRP, whole blood is centrifuged to isolate a platelet-rich plasma fraction containing intact platelets, some leukocytes, and red cell traces. The platelets activate after scalp injection. In GFC (Growth Factor Concentrate), platelets are deliberately activated in specialized tubes using platelet-activating reagents. The growth factors (VEGF, PDGF-BB, IGF-1, TGF-beta) are released from the alpha-granules into the serum, which is then filtered to remove all cellular debris. This provides a clear, acellular solution that typically causes less post-procedural swelling and discomfort.'
      },
      {
        title: 'Clinical Efficacy, Evidence, and Realistic Outcomes',
        body:
          'Peer-reviewed studies demonstrate that both PRP and GFC promote angiogenesis, extend the anagen growth phase, and increase hair shaft diameter in mild to moderate androgenetic alopecia. GFC offers greater batch consistency and minimal post-treatment soreness, while PRP has a longer historical research backing. At Medicare Skin Clinic, Dr. Sujay M conducts a preliminary trichoscopy evaluation to confirm that viable follicles exist before prescribing biological therapy, often pairing sessions with medical DHT-blockers and nutritional support.'
      }
    ],
    references: [
      {
        title: 'Dermatologic Therapy — Comparative Evaluation of GFC vs. PRP in Androgenetic Alopecia'
      },
      {
        title: 'International Journal of Trichology — Platelet-Rich Plasma in Pattern Hair Loss'
      }
    ]
  },
  {
    slug: 'winter-dry-skin-barrier-repair-bengaluru',
    title: 'Winter Skin Care in Bengaluru: Dermatologist Advice for Dryness & Skin Barrier Repair',
    summary:
      'How seasonal drops in humidity and cooler temperatures compromise lipid barriers on Indian skin, and how to structure a ceramide-rich, non-comedogenic regimen.',
    category: 'Medical Dermatology',
    readingTime: '5 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved: true,
    keyTakeaways: [
      'Bengaluru winters cause sudden drops in ambient humidity, leading to increased transepidermal water loss (TEWL) and barrier breakdown.',
      'Hot water showers strip natural ceramides and cholesterol from the stratum corneum, exacerbating xerosis and atopic eczema flares.',
      'Opt for lipid-replenishing moisturizers containing ceramides, hyaluronic acid, and squalane while reducing aggressive physical exfoliation.'
    ],
    sections: [
      {
        title: 'Why Bengaluru Weather Triggers Seasonal Xerosis and Sensitivity',
        body:
          'Between November and February, Bengaluru experiences lower relative humidity combined with cooler dry breezes. This environmental shift dramatically increases transepidermal water loss (TEWL). When moisture evaporates rapidly from the stratum corneum, the intercellular lipid matrix cracks, allowing environmental irritants to penetrate and triggering itching, flaking, and redness.'
      },
      {
        title: 'Common Winter Mistakes: Long Hot Showers and Over-Exfoliation',
        body:
          'Many residents turn to very hot showers to combat the chilly morning air. Water above body temperature dissolves natural sebaceous lipids, accelerating skin dehydration. Additionally, attempting to scrub away flaky dry skin with loofahs or grainy scrubs creates micro-abrasions that worsen irritation. Dermatologists recommend lukewarm water for under 10 minutes and applying thick emollient creams within three minutes of patting dry.'
      },
      {
        title: 'Building a Dermatologist-Approved Barrier Repair Routine',
        body:
          'Swap foaming harsh cleansers for non-soap syndet bars or gentle cream cleansers. Incorporate moisturizers formulated in the physiological 3:1:1 lipid ratio (ceramides, cholesterol, and free fatty acids). Continue daily broad-spectrum sun protection, as UV radiation remains intense in Bengaluru even during overcast or winter mornings.'
      }
    ],
    references: [
      {
        title: 'Indian Dermatology Online Journal — Seasonal Variations in Dermatoses in South India'
      },
      {
        title: 'Clinical, Cosmetic and Investigational Dermatology — Skin Barrier Function and Ceramide Formulations'
      }
    ]
  },
  {
    slug: 'chemical-peels-for-pigmentation',
    title: 'Chemical Peels for Pigmentation: Superficial vs. Medium Depth for Indian Phototypes',
    summary:
      'Comparing salicylic, glycolic, lactic and combination peels for post-acne marks and melasma, highlighting neutralization timing and post-peel care.',
    category: 'Skin Renewal',
    readingTime: '6 min read',
    author: 'Dr. (Mrs.) Sujay M, MBBS, DDVL',
    published: '2026-11-12',
    reviewed: '2026-11-12',
    approved:false, // Editorial draft for clinical test validation & approval tracking
    keyTakeaways: [
      'Superficial peels exfoliate the epidermis safely, whereas deep peels carry significant risk of scarring in Indian skin.',
      'Glycolic acid requires exact chemical neutralization with sodium bicarbonate; salicylic acid is self-neutralizing.',
      'Post-peel strict sun avoidance and barrier ointments are critical to prevent rebound hyperpigmentation.'
    ],
    sections: [
      {
        title: 'Understanding Peel Depths in Skin of Color',
        body:
          'Chemical peeling involves the controlled application of chemical exfoliating agents to produce regulated chemodestruction of epidermal and dermal layers. In Fitzpatrick skin types IV to VI, deep peels (such as phenol) are contraindicated due to the extreme risk of permanent hypopigmentation. Superficial and modified combination peels provide safe, predictable epidermal renewal.'
      },
      {
        title: 'Choosing the Right Acid for the Specific Concern',
        body:
          'Lipophilic salicylic acid (20-30%) penetrates deeply into oily sebaceous follicles, making it ideal for comedonal acne and post-inflammatory erythema. Hydrophilic alpha-hydroxy acids (lactic and glycolic acid) enhance epidermal cell turnover and disperse epidermal melanin clusters in melasma. L-mandelic acid is particularly favored for sensitive Indian skin due to its larger molecular size and gentle penetration.'
      },
      {
        title: 'The Critical Post-Peel Recovery Window',
        body:
          'Following a peel, the barrier is temporarily vulnerable. Patients must refrain from picking peeling flakes, avoid direct sunlight and thermal heat (cooking steam, saunas), and apply soothing ceramide creams. A minimum of SPF 50 mineral sunscreen must be re-applied every three hours during daylight.'
      }
    ],
    references: [
      {
        title: 'Journal of Cutaneous and Aesthetic Surgery — Chemical Peels in Melanin-Rich Skin'
      }
    ]
  }
];
