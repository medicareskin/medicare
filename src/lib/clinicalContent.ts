// Medicare Skin — Master Clinical Content Pack
// Generated from authoritative clinical source documents in docs/content-pack/
// Research based on American Academy of Dermatology (AAD), DermNet NZ, and published clinical trials.

export type ClinicalSection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type ClinicalReference = {
  title: string;
  url: string;
};

export type ClinicalInternalLink = {
  href: string;
  note?: string;
};

export type ClinicalFAQ = {
  q: string;
  a: string;
};

export type ClinicalArticle = {
  filename?: string;
  categorySlug: string;
  treatmentSlug: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  primaryIntent: string;
  secondaryIntent: string;
  publishingStatus: string;
  quickAnswer: {
    question: string;
    answer: string;
    consultationPrompt: string;
  };
  sections: ClinicalSection[];
  faqs: ClinicalFAQ[];
  references: ClinicalReference[];
  internalLinks: ClinicalInternalLink[];
  medicalReviewer: {
    name: string;
    qualification: string;
    clinic: string;
    location: string;
    phone: string;
    date: string;
  };
};

export const clinicalArticles: Record<string, ClinicalArticle> = {
  'skin/pigmentation-treatment': {
  "filename": "01-skin-pigmentation-treatment.md",
  "categorySlug": "skin",
  "treatmentSlug": "pigmentation-treatment",
  "h1": "Pigmentation Treatment in South Bengaluru: Dark Spots, Melasma & Uneven Skin Tone",
  "seoTitle": "Pigmentation Treatment in Bangalore | Medicare Skin",
  "metaDescription": "Understand causes of dark spots, melasma and post-acne marks. Explore dermatologist-led pigmentation treatment near Yelachenahalli, South Bengaluru.",
  "primaryIntent": "pigmentation treatment Bangalore; dermatologist for dark spots South Bengaluru.",
  "secondaryIntent": "pigmentation on face, melasma vs sunspots, dark spots after pimples, pigmentation treatment cost, Indian skin pigmentation.",
  "publishingStatus": "Core dermatology topic. Confirm the exact treatments offered and doctor approval.",
  "quickAnswer": {
    "question": "What is the best treatment for facial pigmentation?",
    "answer": "Facial pigmentation means that some areas of skin appear darker than the surrounding skin. The right treatment depends on why the pigment developed: melasma, marks after acne, sun-related spots, freckles and other conditions may require different approaches. A dermatologist may recommend daily sun protection, prescription skincare and, in selected cases, procedures such as chemical peels or pigment-targeting lasers. There is no single cream or procedure that works best for everyone.",
    "consultationPrompt": "Book a pigmentation consultation: Call +91 92428 55707 or request an appointment with Dr. (Mrs.) Sujay M, MBBS, DDVL, at Medicare Skin & Cosmetic Clinic, near Yelachenahalli Metro Station, South Bengaluru."
  },
  "sections": [
    {
      "heading": "Why does facial pigmentation develop?",
      "paragraphs": [
        "Melanin is the natural pigment that gives skin its colour. Darker spots may develop when inflammation, sunlight, visible light, hormones or other factors increase melanin production or change its distribution. The pattern and history often help the dermatologist identify the cause.",
        "Melasma: Usually symmetrical brown or grey-brown patches on cheeks, forehead or upper lip. Hormonal factors, sunlight and visible light may contribute. Melasma is prone to recurrence.",
        "Post-inflammatory hyperpigmentation (PIH): Flat marks after acne, eczema, skin irritation, burns or cosmetic procedures. These are not necessarily acne scars.",
        "Sunspots and freckles: Pigmented areas related to cumulative sunlight or genetic factors. Certain spots need evaluation before cosmetic treatment.",
        "Pigmentation from products or medications: Irritating creams, fragrances, inappropriate steroid combinations or some medicines can cause or worsen discolouration.",
        "Other disorders: Facial pigmentation can sometimes be confused with lichen planus pigmentosus, acanthosis nigricans or other skin conditions."
      ],
      "listItems": []
    },
    {
      "heading": "Melasma vs post-acne marks: why diagnosis matters",
      "paragraphs": [
        "Melasma is often chronic, triggered by light and hormones, and can return after apparently successful treatment. Post-acne marks result from inflammation and may slowly fade after active acne is controlled. Treating both identically—with aggressive peels or indiscriminate laser toning—may irritate the skin and worsen pigmentation.",
        "A dermatologist looks at the distribution, colour, depth, history of acne, pregnancy or hormonal changes, sun exposure and previous treatments. If a spot changes in size, shape or colour, bleeds, or looks unusual, it should be medically assessed before any pigment-removal procedure."
      ],
      "listItems": []
    },
    {
      "heading": "How is pigmentation assessed at Medicare Skin?",
      "paragraphs": [
        "A consultation typically includes skin examination, questions about your skincare products, sun exposure, medication and any previous procedures. The dermatologist may use additional examination techniques if needed. Blood tests are not routinely required for every pigmentation concern; they are considered only if the clinical history suggests another underlying issue.",
        "The plan should explain the likely diagnosis, the expected improvement, a realistic timeline and whether medical creams or procedural treatments are appropriate.",
        "Treatment options your dermatologist may discuss"
      ],
      "listItems": []
    },
    {
      "heading": "1. Sunscreen and gentle skincare",
      "paragraphs": [
        "Daily broad-spectrum SPF 30 or higher, shade and sun-protective clothing help prevent worsening. For melasma and pigmentation in darker skin tones, tinted sunscreen containing iron oxides can offer additional visible-light protection. Avoid products that sting, burn or repeatedly irritate the skin."
      ],
      "listItems": []
    },
    {
      "heading": "2. Prescription and dermatologist-recommended products",
      "paragraphs": [
        "Depending on the diagnosis, options may include azelaic acid, retinoids, hydroquinone-based treatment for appropriate short or supervised courses, or other pigment-modulating formulations. Some ingredients can irritate skin or are unsuitable during pregnancy. Do not start prescription bleaching or steroid-combination creams on your own."
      ],
      "listItems": []
    },
    {
      "heading": "3. Chemical peels",
      "paragraphs": [
        "Selected superficial peels may help certain pigmentation patterns or acne-associated marks. Peel depth, formulation and interval must suit the patient's skin tone and condition. Incorrect use can cause burns, rebound pigmentation or scarring."
      ],
      "listItems": []
    },
    {
      "heading": "4. Laser-based treatment",
      "paragraphs": [
        "A pigment-targeting laser, such as a Q-switched system, may be considered for certain spots. Laser is not automatically the first choice for melasma; outcomes can be variable, and melasma may worsen or recur. Device type and suitability must be confirmed before offering this procedure."
      ],
      "listItems": []
    },
    {
      "heading": "5. Treating the underlying cause",
      "paragraphs": [
        "If acne, eczema or another inflammatory condition is still active, controlling that disease is often essential to preventing new dark marks."
      ],
      "listItems": []
    },
    {
      "heading": "When will pigmentation improve?",
      "paragraphs": [
        "Superficial post-inflammatory dark marks may fade gradually over months, while deeper pigmentation can take longer. Melasma often needs ongoing management and may recur despite improvement. Some procedures involve several visits; the number should be determined after evaluation rather than advertised as a universal package. Photos taken under consistent lighting can help document progress."
      ],
      "listItems": []
    },
    {
      "heading": "What can go wrong with pigmentation treatments?",
      "paragraphs": [
        "Aggressive exfoliation, unregulated bleaching creams and poorly selected lasers can lead to irritation, burns, post-inflammatory hyperpigmentation, lighter patches or scarring. People with medium-to-deep skin tones may be especially concerned about a treatment causing further colour changes. Inform the dermatologist about pregnancy, allergy, active rashes, recent tanning, previous keloids and all current products."
      ],
      "listItems": []
    },
    {
      "heading": "Pigmentation treatment cost in Bengaluru",
      "paragraphs": [
        "Cost depends on the diagnosis, size of the affected area, medicines, whether a peel or laser is appropriate and the number of required visits. A medically suitable treatment plan may be less intensive than a commercial multi-session package. Medicare Skin should quote current approved prices after assessment; do not publish unverified promotional rates."
      ],
      "listItems": []
    },
    {
      "heading": "Why consider Medicare Skin in South Bengaluru?",
      "paragraphs": [
        "Patients can seek dermatologist-led evaluation with Dr. (Mrs.) Sujay M, MBBS, DDVL, at Medicare Skin & Cosmetic Clinic near Yelachenahalli Metro Station, Kanakapura Main Road. The clinic is accessible from JP Nagar, Banashankari, Kumaraswamy Layout and nearby areas. The emphasis of this page is understanding the condition before choosing a procedure."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Can facial pigmentation be removed permanently?",
      "a": "Some specific spots may respond well, but melasma and post-inflammatory pigmentation can return. Maintenance and sun protection are often needed."
    },
    {
      "q": "Is melasma the same as dark spots after acne?",
      "a": "No. They can look similar but have different causes and treatment priorities."
    },
    {
      "q": "Which cream is best for pigmentation?",
      "a": "It depends on the cause, skin type, pregnancy status and previous irritation. A dermatologist may suggest prescription or nonprescription ingredients suitable for the diagnosis."
    },
    {
      "q": "Does sunscreen really reduce pigmentation?",
      "a": "It prevents further light-triggered darkening and supports other treatment. Tinted formulations with iron oxides can help protect against visible light relevant to melasma."
    },
    {
      "q": "Can I undergo laser treatment for pigmentation?",
      "a": "Possibly, but suitability depends on the type of pigmentation and the exact device. Melasma in particular may flare after laser exposure."
    },
    {
      "q": "Are home remedies like lemon juice safe for dark spots?",
      "a": "Acidic or irritating home remedies can inflame skin and worsen discoloration; avoid applying them to the face."
    },
    {
      "q": "Does pigmentation mean I have a vitamin deficiency?",
      "a": "Not usually. Some conditions require investigations, but routine supplement panels are not necessary for every dark spot."
    },
    {
      "q": "How many sessions will I need?",
      "a": "A dermatologist can estimate this only after diagnosis. Cream-based treatment may be sufficient for some patients."
    },
    {
      "q": "Can pigmentation occur during pregnancy?",
      "a": "Yes. Melasma can be associated with hormonal changes. Pregnancy also affects which medicines and procedures are appropriate."
    },
    {
      "q": "When should a dark spot be examined urgently?",
      "a": "Seek prompt assessment if a spot is changing, irregular, bleeding, ulcerated or different from nearby spots."
    }
  ],
  "references": [
    {
      "title": "AAD",
      "url": "https://www.aad.org/public/diseases/a-z/melasma-treatment"
    },
    {
      "title": "AAD self-care",
      "url": "https://www.aad.org/public/diseases/a-z/melasma-self-care"
    },
    {
      "title": "AAD darker skin",
      "url": "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/fade-dark-spots"
    },
    {
      "title": "DermNet",
      "url": "https://dermnetnz.org/topics/melasma"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/skin/chemical-peels/",
      "note": ""
    },
    {
      "href": "/treatments/laser/q-switched-laser/",
      "note": "(only if verified and published)"
    },
    {
      "href": "/treatments/medical-dermatology/eczema/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": "(confirm final doctor URL)"
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'laser/q-switched-laser': {
  "filename": "02-laser-q-switched-laser.md",
  "categorySlug": "laser",
  "treatmentSlug": "q-switched-laser",
  "h1": "Q-Switched Laser Treatment in Bengaluru: Pigmentation, Dark Spots & Melasma Questions",
  "seoTitle": "Q-Switched Laser in Bangalore | Pigmentation Consultation",
  "metaDescription": "Learn how Q-switched lasers target selected pigment spots, their risks for Indian skin and why melasma may recur. Dermatologist consultation in South Bengaluru.",
  "primaryIntent": "Q-switched laser Bangalore; Q-switched Nd:YAG for pigmentation.",
  "secondaryIntent": "laser toning for melasma safe, Q-switched laser sessions, Q-switched laser dark spots cost, laser side effects Indian skin.",
  "publishingStatus": "HOLD AS A BOOKABLE SERVICE until the clinic confirms that the exact Q-switched device, protocol, staff competence and indication are available. Otherwise present as a general education page without a procedure-specific booking promise.",
  "quickAnswer": {
    "question": "What does a Q-switched laser do?",
    "answer": "A Q-switched laser emits very short, high-energy light pulses. Depending on its wavelength and settings, it may target pigment particles in selected skin lesions. Q-switched Nd:YAG lasers have been used for some pigmentation conditions and tattoo removal. Their use in melasma is selective and carries meaningful relapse and pigment-change risks; Q-switched treatment should not be assumed necessary merely because someone has dark facial patches.",
    "consultationPrompt": "Ask a dermatologist about suitability: +91 92428 55707. Medicare Skin's general consultation is near Yelachenahalli Metro Station, Bengaluru."
  },
  "sections": [
    {
      "heading": "Which pigmentation concerns may be assessed for laser?",
      "paragraphs": [
        "A dermatologist may consider pigment lasers for selected benign pigmented lesions, freckles or sun-related spots, depending on diagnosis and examination. Melasma requires more caution. Post-acne marks may benefit from controlling acne and topical care without laser. Suspicious, changing or bleeding pigmented lesions require diagnosis first, not cosmetic laser removal."
      ],
      "listItems": []
    },
    {
      "heading": "Q-switched laser vs long-pulsed hair-removal laser",
      "paragraphs": [
        "These are not interchangeable procedures. Q-switching produces nanosecond-scale pulses intended for particular pigment-targeting applications. Long-pulsed lasers deliver energy over longer intervals to heat hair follicles and are designed for hair reduction. A Q-switched laser device should not automatically be advertised as the clinic's laser-hair-reduction equipment."
      ],
      "listItems": []
    },
    {
      "heading": "How does a Q-switched pigmentation procedure work?",
      "paragraphs": [
        "Consultation: The dermatologist reviews pigmentation type, skin tone, treatment history, recent sun exposure, medications, pregnancy considerations, active infection and prior abnormal healing. They discuss whether topical management would be preferable.",
        "Pre-procedure planning: The patient receives realistic information about expected improvement, relapse, possible test spots, eye protection, settings and alternatives.",
        "Procedure: The skin is prepared and protective eyewear is used. Controlled laser pulses are delivered to the appropriate area. A snapping or warm sensation may occur.",
        "Aftercare: Depending on the protocol, redness, sensitivity, temporary darkening or crusting can occur. Use the approved aftercare plan and avoid picking or irritating the area. Sun protection is critical.",
        "Review: The clinician evaluates improvement and adverse effects before suggesting further sessions. Repetition should not be automatic, especially for melasma.",
        "Is Q-switched laser suitable for melasma?",
        "Melasma is a recurrent disorder associated with light exposure and other triggers. Guidelines emphasise daily photoprotection and appropriate topical therapy. Lasers may be added for carefully selected patients, but low-fluence laser toning can cause relapse, rebound darkening or mottled hypopigmentation, particularly with repeated exposure. Therefore, a laser-only melasma cure is not an evidence-based promise."
      ],
      "listItems": []
    },
    {
      "heading": "What risks should patients know?",
      "paragraphs": [
        "Possible adverse effects include temporary redness, swelling and discomfort; post-inflammatory hyperpigmentation; light-coloured patches; crusting, blistering or scarring; and recurrence or worsening of the original condition. Risks vary with skin type, device and operator technique. Patients with recent tanning, active infection or significant skin inflammation may need treatment delayed.",
        "Does Q-switched laser work on Indian skin tones?",
        "Skin tone does not automatically rule out laser treatment, but the risk of pigment alteration warrants careful device selection and settings. A dermatologist experienced in treating pigmented lesions in darker skin should explain alternative options and any patch-testing strategy. No universal setting is appropriate for every patient."
      ],
      "listItems": []
    },
    {
      "heading": "How many sessions, what downtime and how much does it cost?",
      "paragraphs": [
        "These depend on the diagnosis, lesion depth, size, device and response. Some benign spots respond differently from widespread, recurrent melasma. Downtime may be brief for some protocols but longer when crusting or irritation occurs. Cost should be quoted using the real clinic rate card after the doctor identifies the appropriate plan. Do not promise a fixed number of sessions or a percentage of clearing."
      ],
      "listItems": []
    },
    {
      "heading": "Important advice before booking",
      "paragraphs": [
        "Bring details of products and previous procedures. Tell your clinician about tanning, recent peel/laser sessions, isotretinoin or other medicines, pregnancy, tendency toward pigment changes or scarring, and active rashes. The doctor may recommend medical treatment before or instead of a laser."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Is Q-switched laser the best treatment for melasma?",
      "a": "Not generally as a first-line approach. Sun protection and medical skincare are central; laser is a selected adjunct in suitable cases."
    },
    {
      "q": "Is melasma permanently cured by laser?",
      "a": "No reliable permanent cure can be promised. Melasma often returns and may worsen after inappropriate laser treatment."
    },
    {
      "q": "Does laser toning cause white spots?",
      "a": "It can in some cases, especially with repeated low-fluence treatment; discuss the risk of mottled hypopigmentation."
    },
    {
      "q": "Can I return to work after the procedure?",
      "a": "Often yes after certain protocols, but visible redness or crusting is possible. Ask about the specific treatment planned."
    },
    {
      "q": "Is treatment painful?",
      "a": "Patients may feel warmth or snapping sensations. Comfort measures depend on the protocol."
    },
    {
      "q": "Can all dark spots be removed with laser?",
      "a": "No. Some need medical evaluation, some respond to creams or peels, and suspicious lesions must not be cosmetically removed without diagnosis."
    },
    {
      "q": "Is Q-switched laser the same as laser hair removal?",
      "a": "No. They use different pulse approaches and treatment objectives."
    },
    {
      "q": "Can the procedure be done during pregnancy?",
      "a": "Elective cosmetic laser treatment is commonly deferred; ask the treating clinician for individualized advice."
    },
    {
      "q": "What if pigmentation becomes darker after treatment?",
      "a": "Contact the treating dermatologist promptly for assessment rather than adding unapproved home bleaching products."
    },
    {
      "q": "How do I know which device is used?",
      "a": "Ask the clinic for the manufacturer, model, wavelength and relevant regulatory status; do not rely on a generic “FDA-approved” badge."
    }
  ],
  "references": [
    {
      "title": "AAD",
      "url": "https://www.aad.org/public/diseases/a-z/melasma-treatment"
    },
    {
      "title": "DermNet",
      "url": "https://dermnetnz.org/topics/melasma"
    },
    {
      "title": "DermNet lasers and darker skin",
      "url": "https://dermnetnz.org/topics/laser-therapy-in-skin-of-colour"
    },
    {
      "title": "DermNet Nd:YAG",
      "url": "https://dermnetnz.org/topics/ndyag-laser-treatment"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/skin/chemical-peels/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'laser/laser-hair-reduction': {
  "filename": "03-laser-laser-hair-reduction.md",
  "categorySlug": "laser",
  "treatmentSlug": "laser-hair-reduction",
  "h1": "Laser Hair Reduction in South Bengaluru: Face, Underarms, Legs & More",
  "seoTitle": "Laser Hair Reduction in Bangalore | Medicare Skin",
  "metaDescription": "Learn about laser hair reduction for face, underarms, legs and body, including sessions, safety for Indian skin and aftercare. South Bengaluru dermatologist.",
  "primaryIntent": "laser hair removal Bangalore; laser hair reduction near JP Nagar.",
  "secondaryIntent": "laser hair removal for dark skin, full body laser cost Bangalore, facial hair PCOS laser, underarm laser sessions, laser hair removal permanent.",
  "publishingStatus": "Laser hair removal is listed on the existing clinic website. Verify the current device, settings, exact areas and trained personnel.",
  "quickAnswer": {
    "question": "Is laser hair removal permanent?",
    "answer": "Laser hair reduction uses light energy absorbed by pigment in hair to damage follicles during active growth phases. A series of sessions can provide long-lasting reduction in hair growth. Remaining or returning hair is often finer, but ongoing maintenance may be required—particularly on hormonally influenced facial areas. Results vary with hair colour, thickness, skin tone, hormones and device type.",
    "consultationPrompt": "For a skin and hair consultation at Medicare Skin, near Yelachenahalli Metro Station, call +91 92428 55707."
  },
  "sections": [
    {
      "heading": "What areas can be treated?",
      "paragraphs": [
        "Depending on suitability and device availability, common areas include the upper lip, chin, underarms, arms, legs, back, chest and bikini line. A clinician should confirm the safety of each area and any treatment-specific precautions. Laser is generally more effective for dark, coarse hair than very fine, light, grey or white hair.",
        "Does laser hair reduction work for brown and darker Indian skin?",
        "Yes, modern devices can be used for a range of skin tones when the operator chooses suitable equipment and settings. Long-pulsed 1064-nm Nd:YAG is frequently considered for deeply pigmented skin; diode systems may also be appropriate in selected patients. Device quality, epidermal cooling, hair type and professional technique matter. Burns or pigment changes are possible if settings are unsuitable."
      ],
      "listItems": []
    },
    {
      "heading": "What happens before your first session?",
      "paragraphs": [
        "The dermatologist evaluates the skin and hair, examines the treatment area and asks about recent tanning, photosensitising medicines, prior burns or scarring, cold sores, pregnancy considerations and expected results. Increased facial hair in women may sometimes be related to a hormonal disorder such as polycystic ovary syndrome (PCOS), so the clinician may recommend evaluation before or alongside cosmetic treatment.",
        "Follow clinic instructions about shaving, avoiding waxing/plucking (which removes the follicular target), avoiding tanning and using sunscreen. The timing differs by device and practitioner guidance."
      ],
      "listItems": []
    },
    {
      "heading": "What happens during the session?",
      "paragraphs": [
        "The area is prepared, appropriate eye protection is provided and a cooled handpiece delivers laser pulses. Patients may feel brief warmth or a rubber-band snapping sensation. Session duration depends on the treatment area. Temporary perifollicular redness and swelling can occur.",
        "After treatment, cool compresses and gentle skincare may be advised. Protect exposed skin from sun and follow instructions about active products, heat exposure and friction."
      ],
      "listItems": []
    },
    {
      "heading": "How many sessions are needed?",
      "paragraphs": [
        "Hair grows in cycles, so more than one session is usually needed. Many people require around six or more treatments, while the interval and total number vary by area, hair cycle, device and hormonal factors. Facial hair can need additional maintenance. Your clinician should give an individualized estimate instead of guaranteeing “100% permanent removal.”",
        "Is laser hair reduction painful? What are the side effects?",
        "Most patients describe tolerable brief discomfort. Common short-term effects are redness, swelling and sensitivity. Less common but important complications include burns, blisters, scarring, infection, hyperpigmentation or hypopigmentation. Some people can develop paradoxical increased fine hair growth in particular circumstances. Contact your clinic promptly for severe pain, blisters or unexpected colour change.",
        "Laser vs waxing, shaving and electrolysis",
        "Shaving cuts hair without changing follicles and must be repeated. Waxing removes the hair shaft temporarily but can irritate some skin types and must be stopped before certain laser sessions. Laser seeks long-term reduction over a series of visits, while electrolysis targets individual follicles and may be useful for some hair types or small areas. Your dermatologist can discuss which option best fits the treatment area and hair characteristics.",
        "Laser hair reduction costs in Bengaluru",
        "Pricing varies by body area, hair density, session count and package terms. Request a written estimate clarifying whether consultation, test spot, repeat sessions, taxes and any maintenance are included. Do not publish fictional “full-body” or “per-session” prices."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Can laser remove white or grey hair?",
      "a": "It is generally much less effective because these hairs contain little pigment."
    },
    {
      "q": "Is six sessions enough?",
      "a": "Not for everyone. Six or more treatments are common; facial or hormonal hair growth may need more."
    },
    {
      "q": "Does laser hair removal make hair grow thicker?",
      "a": "It usually reduces coarse hair, but rare paradoxical increased hair growth can occur, particularly in certain facial regions."
    },
    {
      "q": "Can I shave between sessions?",
      "a": "Often yes, following clinician instructions. Waxing or plucking may interfere with treatment."
    },
    {
      "q": "What is the best laser for darker Indian skin?",
      "a": "Long-pulsed Nd:YAG is a commonly preferred option, but selection depends on individual factors and actual available equipment."
    },
    {
      "q": "Is it safe for women with PCOS?",
      "a": "It may reduce visible hair, but underlying hormonal factors may cause regrowth. PCOS care may require broader medical management."
    },
    {
      "q": "Can laser hair reduction be done over tattoos?",
      "a": "Lasers can interact with tattoo pigment and cause injury; the operator needs to avoid or specially assess tattooed areas."
    },
    {
      "q": "Can I get laser treatment while pregnant?",
      "a": "Elective cosmetic laser treatment is generally postponed; discuss with your clinician."
    },
    {
      "q": "Do I need to avoid sunlight?",
      "a": "Yes, follow the clinic's sun-protection and tanning precautions before and after treatment."
    },
    {
      "q": "Is it cheaper to buy a package?",
      "a": "Value depends on honest per-area pricing, exclusions and whether the anticipated number of visits is appropriate for you."
    }
  ],
  "references": [
    {
      "title": "AAD laser overview",
      "url": "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-overview/"
    },
    {
      "title": "AAD laser FAQs",
      "url": "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs"
    },
    {
      "title": "AAD prep",
      "url": "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation"
    },
    {
      "title": "DermNet skin of colour",
      "url": "https://dermnetnz.org/topics/laser-therapy-in-skin-of-colour"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/hair/hair-loss-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'hair/hair-loss-treatment': {
  "filename": "04-hair-hair-loss-treatment.md",
  "categorySlug": "hair",
  "treatmentSlug": "hair-loss-treatment",
  "h1": "Hair Loss Treatment in South Bengaluru: Find the Cause of Hair Fall & Thinning",
  "seoTitle": "Hair Loss Treatment in Bangalore | Medicare Skin",
  "metaDescription": "Hair fall, widening parting or patchy hair loss? Learn about diagnosis, targeted blood tests, medicines and PRP options with a South Bengaluru dermatologist.",
  "primaryIntent": "hair fall treatment Bangalore; hair loss dermatologist South Bangalore.",
  "secondaryIntent": "female hair loss causes, telogen effluvium vs pattern loss, thyroid blood test hair loss, post-partum hair fall, minoxidil hair growth, alopecia.",
  "publishingStatus": "Hair loss and thinning are described on the clinic's existing site. Verify which in-clinic procedures are currently offered.",
  "quickAnswer": {
    "question": "What is the right treatment for hair loss?",
    "answer": "The best treatment for hair loss depends on the diagnosis—not the number of hairs you find on your pillow. Pattern hair loss, temporary shedding after illness or childbirth, autoimmune patchy alopecia, scalp infection, traction from tight hairstyles and scarring hair loss all require different approaches. A dermatologist first examines the scalp and hair pattern, then recommends targeted treatment, with blood tests when clinically indicated.",
    "consultationPrompt": "Hair and scalp consultations: Medicare Skin & Cosmetic Clinic, near Yelachenahalli Metro Station. Call +91 92428 55707."
  },
  "sections": [
    {
      "heading": "Hair fall vs hair thinning: what's the difference?",
      "paragraphs": [
        "Hair shedding means more hairs enter the resting or shedding phase, sometimes after a trigger. Hair thinning often refers to progressive miniaturization of follicles, with a wider parting or receding hairline. Both can occur together. A person may notice suddenly increased shedding with normal scalp coverage or slowly reduced density without much hair fall in the shower.",
        "Common causes of hair loss in women and men",
        "Androgenetic (pattern) hair loss: Gradual thinning related to inherited susceptibility and androgen signalling, often at the crown, temples or central part.",
        "Telogen effluvium: Increased shedding following fever, major illness, childbirth, surgery, weight loss, severe stress or some medicines; often begins weeks to months after a trigger.",
        "Alopecia areata: Immune-mediated, frequently causing rounded patches; nails and other body hair may also be affected.",
        "Scalp disorders: Inflammation, fungal infection, psoriasis or some scarring alopecias may contribute to loss.",
        "Nutritional or endocrine issues: Iron deficiency, thyroid disorders or hormonal concerns may contribute in selected patients.",
        "Traction or breakage: Tight hairstyles, harsh processing or repeated physical stress can injure follicles or hair shafts.",
        "Seek earlier assessment for rapidly progressing patches, scalp pain, redness, scaling, sores, broken hairs, loss of eyebrows or suspected scarring because some causes can permanently damage follicles."
      ],
      "listItems": []
    },
    {
      "heading": "What happens during a hair loss consultation?",
      "paragraphs": [
        "The dermatologist asks about the onset, shedding pattern, recent illnesses, childbirth, weight changes, medicines, diet, family history, menstrual or hormonal symptoms and haircare routines. Examination may include trichoscopy (scalp magnification), gentle hair-pull testing and assessment for inflammation or miniaturization."
      ],
      "listItems": []
    },
    {
      "heading": "Which blood tests are useful?",
      "paragraphs": [
        "Tests are not the same for every patient. Based on symptoms and examination, a dermatologist may order a complete blood count, ferritin/iron assessment, thyroid tests or other investigations. Selected individuals may need vitamin, hormonal or additional work-up. Routine large “hair fall panels” are not necessary for everyone, and supplements should ideally target a documented deficiency rather than be taken indefinitely.",
        "Treatment options after diagnosis",
        "Evidence-based medicines",
        "Topical minoxidil is commonly used for pattern hair loss and generally needs consistent long-term use before judging response. Appropriate prescription medicines, such as finasteride for eligible men or selected therapies for women, depend on age, pregnancy potential, other medical conditions and contraindications. These are not universal treatments and should be prescribed after review of risks and benefits.",
        "Treatment of underlying triggers",
        "If the cause is a scalp infection, dermatitis, nutritional deficiency or reversible shedding trigger, treating that factor can be more useful than a cosmetic injection. Some post-illness or postpartum shedding improves as the hair cycle normalizes.",
        "PRP or other injection procedures",
        "Platelet-rich plasma may help some patients with pattern hair loss as an adjunct. Evidence is variable across preparation methods and patients. Growth factor concentrate (GFC) is a developing option with less robust comparative evidence; it should not be advertised as proven superior to PRP or approved medication.",
        "Hair transplantation and other procedures",
        "Appropriate candidates with stable donor hair and suitable diagnoses may consider transplant consultation if that service is offered. Active scarring alopecia or unstable loss may need disease treatment before planning surgery."
      ],
      "listItems": []
    },
    {
      "heading": "How soon can treatment work?",
      "paragraphs": [
        "Hair grows slowly. Many medical options take several months to show measurable change, and maintaining benefit may require continued treatment. Standardized scalp photographs help assess real change more reliably than day-to-day shedding counts. Regrowth cannot be promised in every type of alopecia.",
        "Hair fall treatment price in Bangalore",
        "Costs depend on diagnostic work-up, prescription treatment, review visits and any chosen procedures. Start with diagnosis rather than purchasing a multi-session injection package without knowing the cause. Medicare Skin should provide current pricing and describe what is included."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "How much hair fall is normal?",
      "a": "Daily hair shedding varies; the pattern, trend and visible thinning matter more than a fixed count alone."
    },
    {
      "q": "Can stress cause hair loss?",
      "a": "Major physical or emotional stress can contribute to telogen effluvium, but other causes may coexist."
    },
    {
      "q": "Does hair grow back after fever or childbirth?",
      "a": "Often, if the trigger resolves and follicles remain healthy; the timeline varies."
    },
    {
      "q": "Should I test thyroid, iron and vitamin D for hair fall?",
      "a": "These may be appropriate in selected patients. Your dermatologist should choose tests from history and examination."
    },
    {
      "q": "Is minoxidil permanent?",
      "a": "Benefits generally require ongoing use for pattern loss. Response and side effects should be reviewed medically."
    },
    {
      "q": "Can PRP cure baldness?",
      "a": "No. It may improve density in selected patients; it does not reliably restore a completely bald scalp."
    },
    {
      "q": "Can dandruff lead to hair fall?",
      "a": "Inflammation and scratching may contribute to shedding or breakage; other causes should also be considered."
    },
    {
      "q": "Is oiling enough to treat female-pattern loss?",
      "a": "Oil may condition hair shafts but does not reverse follicle miniaturization."
    },
    {
      "q": "Can women use hair loss medicines?",
      "a": "Yes, some, under clinician guidance. Pregnancy planning and other risks change the choices."
    },
    {
      "q": "When is a scalp biopsy needed?",
      "a": "Occasionally when scarring or unclear inflammatory loss is suspected."
    }
  ],
  "references": [
    {
      "title": "AAD",
      "url": "https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat/"
    },
    {
      "title": "AAD",
      "url": "https://www.aad.org/public/diseases/psoriasis/treatment/genitals/scalp-treatment"
    },
    {
      "title": "PRP systematic review",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40944844/"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/hair/prp-gfc/",
      "note": ""
    },
    {
      "href": "/treatments/medical-dermatology/psoriasis/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'aesthetics/hydrafacial': {
  "filename": "05-aesthetics-hydrafacial.md",
  "categorySlug": "aesthetics",
  "treatmentSlug": "hydrafacial",
  "h1": "HydraFacial or Hydrodermabrasion in South Bengaluru: Hydration, Glow & Skin Texture",
  "seoTitle": "HydraFacial in Bangalore | Hydration & Skin Glow Guide",
  "metaDescription": "Explore device-assisted cleansing, exfoliation and hydration for dull skin. Benefits, suitability, aftercare and costs explained by a South Bengaluru dermatology clinic.",
  "primaryIntent": "HydraFacial Bangalore; facial for skin glow South Bangalore.",
  "secondaryIntent": "hydrodermabrasion vs HydraFacial, HydraFacial for dry skin, facial before wedding, HydraFacial cost and downtime.",
  "publishingStatus": "VERIFY DEVICE AND BRAND. Publish as “HydraFacial” only for an authentic eligible branded system; otherwise rename headline, URL if necessary and copy to “Hydrodermabrasion Facial.” Verify service availability before adding Book Treatment.",
  "quickAnswer": {
    "question": "What is HydraFacial/hydrodermabrasion?",
    "answer": "Hydrodermabrasion is a device-assisted cosmetic treatment combining cleansing, gentle exfoliation, suction-based extraction and hydrating solutions. It may temporarily improve how smooth, fresh and hydrated the skin looks. HydraFacial is the name of a particular branded system, not a synonym that automatically applies to every similar device. The procedure does not change natural skin colour permanently or treat all causes of pigmentation and acne.",
    "consultationPrompt": "For a skin evaluation at Medicare Skin near Yelachenahalli Metro Station, call +91 92428 55707. Confirm the exact facial service offered when booking."
  },
  "sections": [
    {
      "heading": "Who may consider an exfoliating and hydrating facial?",
      "paragraphs": [
        "Individuals concerned about surface dullness, mild roughness, superficial pore congestion or dehydrated-looking skin may discuss this treatment. It may be chosen for cosmetic maintenance or ahead of an occasion, but sensitive or actively inflamed skin requires caution. A dermatologist may recommend a different procedure or medical therapy when acne, rosacea, eczema or melasma is the main concern."
      ],
      "listItems": []
    },
    {
      "heading": "How does the facial work?",
      "paragraphs": [
        "1. Skin assessment: The clinician checks for irritation, active infection, recent procedures, allergies and medications, and chooses suitable solutions.",
        "2. Cleansing and exfoliation: Surface debris and dead skin cells are loosened with a device and approved products.",
        "3. Extraction: Gentle suction may remove some superficial pore debris. It is not a substitute for medical treatment of inflammatory acne.",
        "4. Hydration step: A suitable topical solution is delivered or applied to support temporary skin hydration.",
        "5. Aftercare: Patients are advised on gentle skincare and sun protection, especially if exfoliating ingredients were used."
      ],
      "listItems": []
    },
    {
      "heading": "What results can you reasonably expect?",
      "paragraphs": [
        "Some patients report smoother-feeling, more hydrated or brighter-looking skin shortly after treatment. Small studies of hydradermabrasion suggest potential short-term improvement in cosmetic skin parameters, but study populations and devices differ, and high-quality evidence for durable results is limited. Do not advertise permanent whitening, guaranteed pore elimination, acne cure or medical-grade outcomes for every patient.",
        "Is it good for melasma, acne or open pores?",
        "Superficial cleansing can temporarily improve the appearance of congestion. It does not replace medical treatment for melasma, persistent acne, rosacea or eczema. Pore size depends in part on skin structure and oil production and cannot be permanently “closed” by suction. If you have active inflamed lesions, dermatitis or a compromised skin barrier, the clinician may postpone the procedure."
      ],
      "listItems": []
    },
    {
      "heading": "How long is a session and is there downtime?",
      "paragraphs": [
        "Duration depends on the actual device and protocol and may be around half an hour or longer. Many people return to routine activity promptly, although temporary redness, tightness, sensitivity or irritation can occur. For a first-ever session before an event, leave room for possible reactions rather than booking immediately before photographs or a celebration."
      ],
      "listItems": []
    },
    {
      "heading": "What should I disclose before a facial?",
      "paragraphs": [
        "Tell the clinician about contact allergies, active rashes, cold sores, open wounds, recent peels or lasers, strong retinoids or other exfoliants, pregnancy or breastfeeding, and medicines affecting skin sensitivity. A tailored approach matters more than promotional “all skin types” claims.",
        "HydraFacial vs regular facial vs chemical peel",
        "A traditional facial may include manual cleansing, masks and massage. Device-assisted hydrodermabrasion includes controlled mechanical exfoliation, extraction and hydration steps. A chemical peel applies a carefully selected chemical exfoliant and may target particular concerns. A dermatologist can help choose the least irritating option for the patient's goals."
      ],
      "listItems": []
    },
    {
      "heading": "Treatment cost in Bengaluru",
      "paragraphs": [
        "Pricing depends on device authenticity, approved solutions, boosters, treatment duration and any bundled services. Provide the real clinic rate card and clearly explain extras. Do not invent “launch offers,” discounts or an EMI plan."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Is HydraFacial the same as hydrodermabrasion?",
      "a": "HydraFacial is a specific brand within the broader device-assisted facial category. Verify the equipment before using its name commercially."
    },
    {
      "q": "Does it make skin lighter?",
      "a": "It may improve surface radiance; it cannot safely or permanently change natural skin colour."
    },
    {
      "q": "Can it cure acne?",
      "a": "No. Inflammatory acne may need prescribed medicine and a different treatment plan."
    },
    {
      "q": "Does it permanently remove blackheads and pores?",
      "a": "No. Superficial congestion may temporarily improve; pores remain normal structures."
    },
    {
      "q": "Is there downtime?",
      "a": "Often little, but redness or sensitivity is possible."
    },
    {
      "q": "Can I do it one day before my wedding?",
      "a": "First-time users should leave time for unexpected irritation and take advice from the clinician."
    },
    {
      "q": "Is it safe for dry skin?",
      "a": "Sometimes, but dermatitis or an impaired skin barrier can require medical treatment first."
    },
    {
      "q": "Can people with darker Indian skin have the treatment?",
      "a": "The treatment may be considered across skin tones, but active ingredients and exfoliation intensity must be individualized."
    },
    {
      "q": "How often should it be repeated?",
      "a": "There is no single evidence-based interval appropriate for everyone; discuss goals, response and cost with the clinic."
    },
    {
      "q": "How can I verify the machine?",
      "a": "Ask for the manufacturer, device model and official branded status if advertised as HydraFacial."
    }
  ],
  "references": [
    {
      "title": "Study on hydrodermabrasion imaging",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10983707/"
    },
    {
      "title": "Small treatment study",
      "url": "https://pubmed.ncbi.nlm.nih.gov/38357748/"
    },
    {
      "title": "Manufacturer definition",
      "url": "https://www.hydrafacial.com/pages/privacy-policy-en"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/skin/chemical-peels/",
      "note": ""
    },
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/medical-dermatology/eczema/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'skin/chemical-peels': {
  "filename": "06-skin-chemical-peels.md",
  "categorySlug": "skin",
  "treatmentSlug": "chemical-peels",
  "h1": "Chemical Peel Treatment in South Bengaluru: Acne Marks, Texture & Pigmentation",
  "seoTitle": "Chemical Peels in Bangalore | Acne Marks & Skin Texture",
  "metaDescription": "Learn about chemical peel types, benefits, downtime and pigmentation risks in Indian skin. Dermatologist-guided peel consultation near Yelachenahalli.",
  "primaryIntent": "chemical peel treatment Bangalore; face peel dermatologist Bengaluru.",
  "secondaryIntent": "glycolic peel for pigmentation, salicylic peel acne, chemical peel side effects dark skin, chemical peel recovery, chemical peel price.",
  "publishingStatus": "Chemical peels listed on existing site. Confirm products and training before mentioning particular formulations as available.",
  "quickAnswer": {
    "question": "What does a chemical peel do?",
    "answer": "A chemical peel applies a controlled exfoliating solution to the skin to remove some damaged outer layers and encourage renewal. Superficial peels may help selected acne marks, roughness, uneven tone and certain acne patterns. Stronger peels act deeper and require greater recovery and risk management. The right peel depends on the diagnosis, skin tone, previous reactions and goals—not merely on a promise of “instant fairness.”",
    "consultationPrompt": "For a dermatology consultation at Medicare Skin near Yelachenahalli Metro Station, call +91 92428 55707."
  },
  "sections": [
    {
      "heading": "Which skin concerns may benefit?",
      "paragraphs": [
        "Certain acne-related marks and superficial discoloration.",
        "Mild uneven surface texture or dull-looking skin.",
        "Some comedonal acne patterns where peeling is appropriate.",
        "Selected sun-related changes or fine surface lines.",
        "A peel is not necessarily effective for deep acne scars, persistent melasma or all inflammatory skin conditions. Some diagnoses need prescription treatment first."
      ],
      "listItems": []
    },
    {
      "heading": "Types of peels explained in plain language",
      "paragraphs": [
        "Superficial peel: Works mainly in the top skin layers; often involves milder glycolic, salicylic, lactic or other suitable formulations. Can cause temporary tingling, dryness or mild shedding.",
        "Medium-depth peel: Penetrates deeper, requiring more preparation, recovery and medical supervision; can trigger significant colour changes in darker skin.",
        "Deep peel: A specialized medical procedure with substantial risk, recovery and monitoring requirements. It should never be described as a routine “lunchtime facial.”",
        "The actual acid, concentration, pH, number of coats and preparation protocol must be selected by a qualified clinician. Avoid copy-and-paste instructions encouraging home application of professional-strength peels."
      ],
      "listItems": []
    },
    {
      "heading": "What happens at a peel appointment?",
      "paragraphs": [
        "The dermatologist first checks whether the concern is acne, pigmentation, texture or another condition. They review current retinoids, past isotretinoin use, allergy, herpes history, skin-barrier condition, pregnancy considerations and recent treatments. A skincare preparation plan may be required.",
        "During a superficial peel, the skin is cleansed and a controlled solution is applied for an appropriate period, then neutralized or removed as the protocol requires. Tingling or warmth may occur. Aftercare can include gentle moisturizer, strict sun protection and temporarily avoiding irritating actives."
      ],
      "listItems": []
    },
    {
      "heading": "Recovery and aftercare",
      "paragraphs": [
        "Superficial peels may lead to mild dryness, redness or flaking. Stronger peels can result in more noticeable peeling, swelling and longer recovery. Do not pick, scrub or prematurely remove peeling skin. Avoid tanning and use prescribed moisturization and sunscreen. Call the clinic for severe pain, increasing redness, blisters, discharge or concerning colour changes."
      ],
      "listItems": []
    },
    {
      "heading": "Chemical peels for Indian skin: important risks",
      "paragraphs": [
        "Skin of colour can develop post-inflammatory hyperpigmentation or, less often, hypopigmentation and scarring after incorrectly selected or applied peels. Experienced assessment, conservative protocol choice and adherence to aftercare help reduce—but cannot eliminate—risk. Never combine multiple strong acids at home because online influencers recommend them.",
        "How many sessions will I need?",
        "The target condition, product and response determine the plan. Several superficial sessions may be suggested for certain cosmetic concerns, while other patients may need a different treatment entirely. Results are not necessarily permanent; ongoing sun protection and acne management may be important."
      ],
      "listItems": []
    },
    {
      "heading": "Chemical peel cost in South Bengaluru",
      "paragraphs": [
        "Cost varies by peel formulation, clinician expertise, extent of the area, preparation products and follow-up visits. Patients should receive an accurate price and potential additional costs rather than a generic fixed “skin whitening” package."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Do chemical peels remove acne scars?",
      "a": "Superficial peels may help post-acne colour marks or texture; deep depressed scars often require other treatments."
    },
    {
      "q": "Is a chemical peel painful?",
      "a": "Tingling, warmth or stinging may occur; discomfort depends on the solution and depth."
    },
    {
      "q": "Can chemical peels cause dark spots?",
      "a": "Yes, especially if a peel irritates or injures skin. Post-inflammatory pigmentation is an important risk in deeper skin tones."
    },
    {
      "q": "Can I go to work after a peel?",
      "a": "Often after a superficial peel, though redness or flaking may be visible. Stronger peels can require more downtime."
    },
    {
      "q": "Can I use retinol immediately afterward?",
      "a": "Do not restart irritating actives until the clinician says it is safe."
    },
    {
      "q": "Is a peel good for melasma?",
      "a": "Sometimes as part of a broader plan, but melasma may relapse or worsen from irritation. Photoprotection and suitable medicine remain central."
    },
    {
      "q": "Can I use an online chemical peel at home?",
      "a": "Professional-strength peels can cause serious chemical burns and should not be self-administered."
    },
    {
      "q": "How often can I repeat peels?",
      "a": "The appropriate interval depends on peel depth, healing and the clinical plan."
    },
    {
      "q": "Is a chemical peel better than HydraFacial?",
      "a": "They have different mechanisms and goals; the best option depends on examination and risk tolerance."
    },
    {
      "q": "When should I postpone a peel?",
      "a": "Active infection, significant irritation, recent tanning and certain medications or medical situations may require delay."
    }
  ],
  "references": [
    {
      "title": "AAD overview",
      "url": "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-overview"
    },
    {
      "title": "AAD FAQs",
      "url": "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs"
    },
    {
      "title": "AAD melasma",
      "url": "https://www.aad.org/public/diseases/a-z/melasma-treatment"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/aesthetics/hydrafacial/",
      "note": "(if verified)"
    },
    {
      "href": "/treatments/laser/q-switched-laser/",
      "note": "(if verified)"
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'hair/prp-gfc': {
  "filename": "07-hair-prp-gfc.md",
  "categorySlug": "hair",
  "treatmentSlug": "prp-gfc",
  "h1": "PRP vs GFC Hair Treatment in South Bengaluru: Benefits, Evidence, Cost & Safety",
  "seoTitle": "PRP vs GFC Hair Treatment Bangalore | Medicare Skin",
  "metaDescription": "Understand PRP and GFC hair injections, evidence for pattern hair loss, side effects, sessions and cost. Get a dermatologist-led hair assessment in Bengaluru.",
  "primaryIntent": "PRP hair treatment Bangalore; GFC hair treatment Bangalore.",
  "secondaryIntent": "PRP vs GFC which is better, PRP hair regrowth sessions, GFC hair loss cost, PRP injection painful, platelet therapy Indian hair.",
  "publishingStatus": "Confirm PRP and GFC service availability, preparation system, sterile technique and actual approved protocols before publishing as bookable procedures.",
  "quickAnswer": {
    "question": "Is GFC better than PRP for hair loss?",
    "answer": "There is not enough high-quality evidence to say GFC is consistently better than PRP. Both use components derived from the patient's blood and are marketed as regenerative approaches for certain types of hair loss. Published studies suggest PRP may improve hair density in some people with androgenetic (pattern) alopecia. Research comparing GFC with PRP remains smaller and more heterogeneous, so claims such as “GFC gives twice the growth” or “one guaranteed session” are not justified.\n\nBefore considering either injection, the more useful first step is an accurate hair-loss diagnosis. Medicare Skin consultations are available near Yelachenahalli Metro Station: +91 92428 55707.",
    "consultationPrompt": ""
  },
  "sections": [
    {
      "heading": "What is PRP for hair loss?",
      "paragraphs": [
        "Platelet-rich plasma (PRP) involves taking a sample of the patient's blood and using a defined preparation method to concentrate platelet-containing plasma. A clinician injects appropriately prepared material into selected scalp areas. Platelets release biologically active factors that may influence the follicle environment. The concentration, preparation kit, number of injections and schedule vary widely between clinics and studies."
      ],
      "listItems": []
    },
    {
      "heading": "What is GFC hair therapy?",
      "paragraphs": [
        "Growth factor concentrate (GFC) generally refers to methods that process blood-derived material to prepare a fraction enriched for selected growth factors, often using proprietary kits. Different systems are not necessarily identical. GFC should not be described as a stem-cell transplant or a guaranteed “new follicle” treatment, and the exact kit must be explained to patients."
      ],
      "listItems": []
    },
    {
      "heading": "Who might be considered for PRP or GFC?",
      "paragraphs": [
        "Patients with early or moderate pattern hair loss may discuss injection treatment as an adjunct after medical evaluation. These procedures generally do not replace the need to treat iron deficiency, thyroid problems, inflammatory alopecia or other identified causes. They are also unlikely to restore dense growth in areas with long-standing scarring or absent viable follicles."
      ],
      "listItems": []
    },
    {
      "heading": "What happens during treatment?",
      "paragraphs": [
        "Diagnosis: Your clinician examines the scalp and discusses alternative treatments and expected outcomes.",
        "Blood collection and processing: A blood sample is collected using sterile procedures. The selected kit/process is used according to the manufacturer's protocol.",
        "Scalp injection: The material is injected at planned sites, with appropriate infection prevention and comfort measures. Discomfort or pressure can occur.",
        "Follow-up: The dermatologist reviews shedding, density, side effects and standardized photographs. Any further sessions should follow a medically reasoned schedule rather than an automatic sales package."
      ],
      "listItems": []
    },
    {
      "heading": "What results can be expected and when?",
      "paragraphs": [
        "Hair grows slowly, so changes may take months to become measurable. Some patients see reduced shedding or improved density; others show little benefit. PRP research includes positive trials and systematic reviews, but results differ because techniques and study quality vary. Repeat procedures and maintenance may be needed, and no session count guarantees growth.",
        "PRP vs GFC at a glance",
        "Source: Both generally use material obtained from the patient's own blood.",
        "Preparation: PRP concentrates platelet-rich plasma; GFC processing concentrates selected growth-factor components using a specific method.",
        "Evidence: PRP has a larger clinical-trial literature. GFC has promising but limited comparative evidence; superiority is unproven.",
        "Sensation and recovery: Both involve scalp injection and potential temporary soreness.",
        "Cost: Varies with kit, number of sessions and whether follow-up or medication is included.",
        "Best candidate: Determined by hair-loss diagnosis, medical suitability, expectations and shared decision-making.",
        "Risks and patients who may not be suitable",
        "Possible effects include pain, pinpoint bleeding, bruising, scalp tenderness, temporary headache and rare infection. People with relevant bleeding disorders, platelet-related issues, active scalp infection or certain medical conditions may not be suitable. Inform the dermatologist about anticoagulant or antiplatelet medicines; do not stop prescribed medication without the managing clinician's approval."
      ],
      "listItems": []
    },
    {
      "heading": "Do I still need minoxidil or another medicine?",
      "paragraphs": [
        "Possibly. For pattern hair loss, evidence-based medical therapies may remain the cornerstone, with injections considered as an adjunct in selected cases. Do not stop effective prescribed treatment because an injection package promises permanent correction.",
        "PRP or GFC hair treatment cost in Bangalore",
        "Ask for a written quotation explaining kit/procedure, planned visits, estimated total cost, separate consultation or medication charges, and what happens if response is limited. The website should not show invented prices or guarantee outcomes based on package size."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Which works faster: PRP or GFC?",
      "a": "There is no established, reliable rule across products and patients; comparisons are limited."
    },
    {
      "q": "Does PRP work for all types of alopecia?",
      "a": "No. The best studied use is selected pattern loss. Other causes need different diagnosis and management."
    },
    {
      "q": "How many sessions will I need?",
      "a": "Protocols vary, and the clinician must explain the recommendation and review milestones."
    },
    {
      "q": "Will hair regrow on a fully bald, scarred area?",
      "a": "These treatments are unlikely to regenerate follicles that are no longer viable."
    },
    {
      "q": "Is PRP painful?",
      "a": "Injections can cause short-lived pain or scalp tenderness; comfort methods vary."
    },
    {
      "q": "Are there side effects?",
      "a": "Bruising, discomfort, pinpoint bleeding and rare infection are possible."
    },
    {
      "q": "Can PRP replace minoxidil or finasteride?",
      "a": "Not necessarily; management depends on diagnosis and treatment suitability."
    },
    {
      "q": "Can women receive PRP?",
      "a": "Selected women may be candidates after proper evaluation, including pregnancy and health considerations."
    },
    {
      "q": "Does GFC contain stem cells?",
      "a": "It is not the same as stem-cell transplantation and should not be advertised as such."
    },
    {
      "q": "How will progress be measured?",
      "a": "Standardized scalp photographs, consistent parting and clinical assessment are preferable to unsupported “percent regrowth” claims."
    }
  ],
  "references": [
    {
      "title": "PRP RCT meta-analysis",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40944844/"
    },
    {
      "title": "2026 PRP vs GFC review",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42838026/"
    },
    {
      "title": "AAD hair loss management",
      "url": "https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat/"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/hair/hair-loss-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/medical-dermatology/psoriasis/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'medical-dermatology/eczema': {
  "filename": "08-medical-dermatology-eczema.md",
  "categorySlug": "medical-dermatology",
  "treatmentSlug": "eczema",
  "h1": "Eczema Treatment in South Bengaluru: Dry, Itchy, Inflamed Skin & Flare Prevention",
  "seoTitle": "Eczema Treatment in Bangalore | Itchy Skin Dermatologist",
  "metaDescription": "Understand eczema symptoms, triggers, moisturizers, steroid creams and newer treatment options. Dermatologist consultation near Yelachenahalli, Bengaluru.",
  "primaryIntent": "eczema doctor Bangalore; eczema treatment dermatologist South Bengaluru.",
  "secondaryIntent": "atopic dermatitis in children, eczema vs fungal infection, moisturizer for eczema, steroid creams safe, eczema contagious, eczema flare triggers.",
  "publishingStatus": "Medical dermatology consult page. Confirm age groups treated and referral policy for severe disease.",
  "quickAnswer": {
    "question": "Can eczema be cured permanently?",
    "answer": "Eczema is a group of conditions that cause itchy, inflamed or irritated skin. Atopic dermatitis, a common type, often follows a chronic relapsing course. While there may not be a permanent cure, effective skin-barrier care and appropriate anti-inflammatory treatment can control symptoms, reduce flare frequency and improve sleep and comfort. Different rashes can look like eczema, so persistent or widespread cases deserve examination.",
    "consultationPrompt": "Consult Dr. (Mrs.) Sujay M, MBBS, DDVL, at Medicare Skin near Yelachenahalli Metro Station. Call +91 92428 55707."
  },
  "sections": [
    {
      "heading": "How does eczema look and feel?",
      "paragraphs": [
        "Common features include itching, dryness, roughness, recurrent redness or skin-colour change, scaling, cracking and sometimes oozing. In darker skin, inflamed patches may look brown, purple or grey rather than bright red. Repeated rubbing can thicken the skin and cause pigmentation after inflammation.",
        "Location differs by age and type: eczema may affect the face, neck, elbow/knee creases, hands or other sites. Hand eczema can overlap with irritant or allergic contact dermatitis."
      ],
      "listItems": []
    },
    {
      "heading": "What causes eczema and what triggers flares?",
      "paragraphs": [
        "Eczema reflects interaction between skin-barrier function, immune responses, inherited predisposition and environmental exposure. Possible triggers include fragranced products, detergents, sweat, heat, dryness, repeated washing, irritating fabrics and certain allergens. Eczema is not caused simply by poor hygiene, and routine food elimination is not indicated without an appropriate clinical history."
      ],
      "listItems": []
    },
    {
      "heading": "How is eczema diagnosed?",
      "paragraphs": [
        "A dermatologist examines the distribution and appearance, asks about itch, childhood history, exposures and previous medicines, and checks for infection or other causes. Some patients may need patch testing for suspected allergic contact dermatitis, fungal testing or a biopsy when the diagnosis is unclear or treatment fails. Routine allergy panels are not indicated for every patient.",
        "Eczema vs psoriasis vs fungal infection",
        "Eczema often causes intense itch and poorly defined inflamed patches, psoriasis more often shows well-demarcated plaques with scale, and fungal infections may have a different border or distribution. These descriptions overlap. Self-treating a fungal rash with an inappropriate steroid combination can make it harder to recognize and treat correctly."
      ],
      "listItems": []
    },
    {
      "heading": "Treatment: what actually helps?",
      "paragraphs": [
        "Daily moisturizer and gentle bathing",
        "Apply a fragrance-free cream or ointment regularly, especially after a brief lukewarm shower or handwash. Avoid fragranced soaps, harsh scrubs and aggressive exfoliation. A simple, consistent routine often makes prescription treatment more effective.",
        "Control of inflammation",
        "Topical corticosteroids, topical calcineurin inhibitors and other anti-inflammatory treatments may be prescribed based on age, body area and severity. Correct strength, duration and application site matter; a steroid appropriate for a thick limb plaque may be unsafe for unsupervised long-term facial use.",
        "Persistent or severe eczema",
        "If eczema disrupts sleep, covers large areas or fails optimized topical therapy, a dermatologist may consider phototherapy or systemic/biologic treatment depending on local access, safety and individual eligibility. Newer therapies have expanded options, but no one drug is best for everyone.",
        "Infection management",
        "Signs such as increasing pain, warmth, yellow crust, pus, rapidly worsening redness or fever need medical assessment. Not every flare requires antibiotics.",
        "Can children and pregnant patients be treated?",
        "Yes, eczema management should be adapted to age and pregnancy/breastfeeding considerations. Parents should not apply adult-strength prescription steroids or unverified herbal mixtures to a baby's skin without advice. Severe disease and suspected infection warrant prompt review.",
        "Simple home habits that reduce irritation",
        "Use short lukewarm baths, pat rather than rub skin dry, moisturize while the skin remains slightly damp, choose fragrance-free laundry products and keep nails short if scratching occurs. Identify individual triggers rather than avoiding every food or abandoning bathing."
      ],
      "listItems": []
    },
    {
      "heading": "Eczema treatment cost in Bengaluru",
      "paragraphs": [
        "The overall cost depends on consultation, moisturizers, prescribed therapies, diagnostic testing where necessary and follow-up. Some patients can be managed with basic barrier care and topical medication; more severe disease may require specialist treatment pathways. Provide confirmed prices only."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Is eczema contagious?",
      "a": "No. You cannot catch atopic eczema from another person."
    },
    {
      "q": "Why is eczema worse at night?",
      "a": "Itch can become more noticeable at night and disturb sleep; effective disease control and gentle skincare help."
    },
    {
      "q": "Can eczema cause dark marks?",
      "a": "Yes. Inflammation and scratching can leave pigment changes, particularly in darker skin."
    },
    {
      "q": "Are steroid creams harmful?",
      "a": "They can be very effective when prescribed appropriately, but unsupervised use of strong preparations on the face or folds can cause harm."
    },
    {
      "q": "Is it always a food allergy?",
      "a": "No. Food allergy is not the cause of most eczema flares; exclusion diets should be medically justified."
    },
    {
      "q": "Is eczema the same as a fungal infection?",
      "a": "No, although some rashes look similar; correct diagnosis matters."
    },
    {
      "q": "Do I need patch testing?",
      "a": "Only for selected suspected contact allergy or persistent cases, not for all eczema."
    },
    {
      "q": "Can eczema be treated without medicine?",
      "a": "Mild disease may improve with skin-barrier care, while inflammation often needs treatment; severe disease requires medical assessment."
    },
    {
      "q": "When is eczema an emergency?",
      "a": "Fever with rapidly spreading painful skin, extensive blisters or eye-area infection calls for urgent care."
    },
    {
      "q": "Can eczema affect adults for the first time?",
      "a": "Yes. Adult-onset dermatitis occurs, and other causes should be assessed when presentation is atypical."
    }
  ],
  "references": [
    {
      "title": "AAD clinical guideline 2025 update",
      "url": "https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis"
    },
    {
      "title": "AAD treatment",
      "url": "https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis/treatment"
    },
    {
      "title": "AAD moisturizer",
      "url": "https://www.aad.org/public/diseases/eczema/insider/moisturizer-reduce-flares"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/medical-dermatology/psoriasis/",
      "note": ""
    },
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    },
    {
      "href": "/contact/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'medical-dermatology/psoriasis': {
  "filename": "09-medical-dermatology-psoriasis.md",
  "categorySlug": "medical-dermatology",
  "treatmentSlug": "psoriasis",
  "h1": "Psoriasis Treatment in South Bengaluru: Skin, Scalp, Nails & Joint Symptoms",
  "seoTitle": "Psoriasis Treatment in Bangalore | Medicare Skin",
  "metaDescription": "Learn psoriasis causes, plaques, scalp and nail symptoms, treatment choices and psoriatic arthritis warning signs. Dermatologist in South Bengaluru.",
  "primaryIntent": "psoriasis dermatologist Bangalore; psoriasis treatment South Bengaluru.",
  "secondaryIntent": "scalp psoriasis vs dandruff, psoriasis contagious, psoriasis cure, psoriasis joints, psoriasis biologic injections, psoriasis nails.",
  "publishingStatus": "Medical dermatology content; confirm scope of in-clinic phototherapy/systemic services and referral arrangements.",
  "quickAnswer": {
    "question": "Can psoriasis be cured?",
    "answer": "Psoriasis is a chronic, immune-mediated inflammatory disease that may cause thick, scaly patches on the skin and also affect the scalp, nails and joints. There is no universal permanent cure, but many treatments can control plaques, relieve itching and substantially improve quality of life. Treatment ranges from topical medication to phototherapy and systemic medicines for appropriate patients.",
    "consultationPrompt": "If you have persistent scaly plaques or scalp/nail concerns, contact Medicare Skin & Cosmetic Clinic, South Bengaluru: +91 92428 55707."
  },
  "sections": [
    {
      "heading": "What does psoriasis look like on Indian skin?",
      "paragraphs": [
        "Typical plaque psoriasis produces well-defined areas of thickened skin and scale. On lighter skin it may appear pink or red; on medium-to-dark skin it may look violet, brown or grey with a silvery or whitish scale. Lesions may occur on elbows, knees, lower back, scalp or other areas. It can also involve skin folds, palms/soles and nails."
      ],
      "listItems": []
    },
    {
      "heading": "What causes psoriasis and is it contagious?",
      "paragraphs": [
        "Psoriasis is associated with immune-system activity and genetic susceptibility. Flare triggers may include infection, stress, injury to the skin, smoking, certain medicines and other factors. It is not contagious, and it is not caused by being unclean. Family members may have a predisposition but cannot catch it through touch or shared surfaces.",
        "Can psoriasis affect the scalp and nails?",
        "Yes. Scalp psoriasis can cause scaling, itch and sometimes temporary shedding; it can be mistaken for dandruff or seborrhoeic dermatitis. Nail signs include small pits, separation, thickening, discoloration or crumbling. Nail changes can sometimes coexist with psoriatic arthritis or infection, making evaluation important.",
        "Psoriatic arthritis: symptoms not to ignore",
        "Tell the dermatologist if you have painful or swollen joints, stiffness in the morning, sausage-like swelling of a finger or toe, heel pain or new difficulty using your hands. Psoriatic arthritis may damage joints if missed. Appropriate rheumatology assessment is important when symptoms suggest joint involvement."
      ],
      "listItems": []
    },
    {
      "heading": "How is psoriasis diagnosed?",
      "paragraphs": [
        "Clinical examination of skin, scalp and nails plus symptom history is usually central. Occasionally a skin biopsy is needed to distinguish another condition. The clinician may ask about joint symptoms, family history, medicines and other medical conditions. No single routine blood test confirms skin psoriasis. More tests may be required before systemic therapy or for comorbidities."
      ],
      "listItems": []
    },
    {
      "heading": "How is psoriasis treated?",
      "paragraphs": [
        "Mild or localized disease",
        "Moisturizers and site-appropriate topical treatments, such as corticosteroids, vitamin D analogues or other prescribed agents, may reduce scale and inflammation. Sensitive areas need different products than thick plaques on elbows or knees.",
        "Scalp and nail disease",
        "Prescription scalp solutions, medicated shampoos, scale-softening approaches or systemic treatment may be discussed. Nails often need longer treatment and careful infection assessment.",
        "Widespread or difficult psoriasis",
        "For moderate-to-severe disease, dermatologist-supervised phototherapy, traditional systemic medicines, oral targeted therapies or biologic medicines may be appropriate. Choice depends on severity, joint involvement, infection screening, pregnancy planning and medical history. Do not claim the clinic administers biologics or phototherapy unless actually available; referral may be appropriate.",
        "Skin care between appointments",
        "Use gentle moisturizer, avoid trauma from picking plaques, follow the prescribed plan and discuss likely triggers. Avoid abrupt discontinuation of prescribed treatment and unregulated steroid mixtures. Maintain general health, including appropriate cardiovascular and metabolic risk management in consultation with your physician."
      ],
      "listItems": []
    },
    {
      "heading": "How long does treatment take?",
      "paragraphs": [
        "Many topical therapies require consistent use and review. Systemic therapies and biologics also require monitoring. Even when plaques clear, psoriasis may recur, so management is often long-term. A plan should aim at itch relief and function as well as visible clearing."
      ],
      "listItems": []
    },
    {
      "heading": "Psoriasis care cost in Bengaluru",
      "paragraphs": [
        "Expenses vary by disease severity, medication, monitoring tests, phototherapy and follow-up. Discuss the most appropriate plan rather than purchasing one-size-fits-all packages."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Is psoriasis contagious?",
      "a": "No, it cannot spread to another person through touch."
    },
    {
      "q": "Is psoriasis just severe dandruff?",
      "a": "Not necessarily. Scalp psoriasis is a distinct inflammatory disease and may need prescription therapy."
    },
    {
      "q": "Is psoriasis caused by eating the wrong food?",
      "a": "No single diet causes psoriasis. Some lifestyle factors may influence disease control, but restrictive diets should not replace treatment."
    },
    {
      "q": "Can psoriasis affect nails?",
      "a": "Yes, with pitting, thickening, separation or discoloration. Nail infections can look similar."
    },
    {
      "q": "Does psoriasis cause arthritis?",
      "a": "Some people develop psoriatic arthritis; new joint pain or morning stiffness needs evaluation."
    },
    {
      "q": "Can psoriasis go away forever?",
      "a": "It may have long remissions, but recurrence remains possible."
    },
    {
      "q": "What is the best cream for psoriasis?",
      "a": "It depends on body area, severity, age and contraindications; facial or fold psoriasis is treated differently from thick limb plaques."
    },
    {
      "q": "Are biologics safe?",
      "a": "They may be effective for selected patients, but require clinical screening, appropriate infection assessment and monitoring."
    },
    {
      "q": "Can psoriasis cause hair loss?",
      "a": "Scalp inflammation, scratching and associated factors may lead to shedding; the follicles often recover once inflammation is controlled, depending on cause."
    },
    {
      "q": "Should I stop my prescribed medicine once the rash improves?",
      "a": "Follow your dermatologist's maintenance plan; changes should be supervised."
    }
  ],
  "references": [
    {
      "title": "AAD psoriasis treatment",
      "url": "https://www.aad.org/public/diseases/psoriasis/treatment/treatment"
    },
    {
      "title": "AAD guideline",
      "url": "https://www.aad.org/member/clinical-quality/guidelines/psoriasis"
    },
    {
      "title": "AAD biologics",
      "url": "https://www.aad.org/public/diseases/psoriasis/treatment/medications/biologics"
    },
    {
      "title": "AAD nail psoriasis",
      "url": "https://www.aad.org/public/diseases/psoriasis/treatment/genitals/nails"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/medical-dermatology/eczema/",
      "note": ""
    },
    {
      "href": "/treatments/hair/hair-loss-treatment/",
      "note": ""
    },
    {
      "href": "/treatments/medical-dermatology/vitiligo/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
  'medical-dermatology/vitiligo': {
  "filename": "10-medical-dermatology-vitiligo.md",
  "categorySlug": "medical-dermatology",
  "treatmentSlug": "vitiligo",
  "h1": "Vitiligo Treatment in South Bengaluru: White Patches, Diagnosis & Repigmentation",
  "seoTitle": "Vitiligo Treatment in Bangalore | White Patch Dermatologist",
  "metaDescription": "White patches on your skin? Learn how vitiligo is diagnosed, its treatment options, phototherapy and realistic repigmentation expectations in Bengaluru.",
  "primaryIntent": "vitiligo treatment Bangalore; dermatologist for white patches South Bengaluru.",
  "secondaryIntent": "vitiligo is it contagious, white patches thyroid, vitiligo phototherapy, tacrolimus vitiligo, vitiligo surgery, can vitiligo spread.",
  "publishingStatus": "Existing Medicare Skin site mentions vitiligo surgery; verify current availability, referral pathways and exact approved procedures.",
  "quickAnswer": {
    "question": "Is vitiligo contagious and can it be treated?",
    "answer": "Vitiligo is not contagious. It occurs when pigment-producing cells (melanocytes) are lost or stop functioning in parts of the skin, often associated with an autoimmune process. It causes lighter or white patches and can affect hair colour. There is no guaranteed permanent cure, but treatments can help slow activity and encourage repigmentation in some patients. Response varies greatly by patch location, duration and disease stability.",
    "consultationPrompt": "For assessment of white skin patches in South Bengaluru, contact Medicare Skin at +91 92428 55707."
  },
  "sections": [
    {
      "heading": "Why do white patches appear?",
      "paragraphs": [
        "Not every pale patch is vitiligo. Some are due to fungal infection, post-inflammatory changes, pityriasis alba, chemical exposure or other skin conditions. A dermatologist distinguishes them through history, examination and sometimes use of a Wood's lamp or selected tests. Avoid treating every white patch with antifungals, steroids or “pigment booster” creams without diagnosis."
      ],
      "listItems": []
    },
    {
      "heading": "What causes vitiligo?",
      "paragraphs": [
        "Vitiligo is commonly associated with immune-mediated loss of melanocytes and genetic susceptibility. It can occur at any age and on any skin tone; contrast may be more visible in darker skin. Vitiligo is not an infection, punishment, or a result of poor hygiene. It cannot spread to family members by touching or sharing meals.",
        "Types and patterns of vitiligo",
        "Non-segmental vitiligo: Often occurs on both sides of the body and can develop new patches over time.",
        "Segmental vitiligo: Often affects one side or region and may follow a different course.",
        "Localized disease: One or a few patches; treatment choice depends on site and activity.",
        "The dermatologist also assesses whether patches are stable or expanding and whether hair within them has turned white."
      ],
      "listItems": []
    },
    {
      "heading": "Do I need blood tests for thyroid disease?",
      "paragraphs": [
        "Vitiligo can be associated with other autoimmune conditions, including thyroid disorders. The dermatologist may enquire about symptoms and family history and decide whether thyroid or other tests are appropriate. Not every patient needs a broad autoimmune screening panel; test decisions should follow clinical evaluation and local guidelines."
      ],
      "listItems": []
    },
    {
      "heading": "What treatment options may be discussed?",
      "paragraphs": [
        "Prescription creams or ointments",
        "Suitable topical anti-inflammatory medicines, including corticosteroids or calcineurin inhibitors such as tacrolimus, may be considered for selected sites. Treatment strength and duration vary, especially for face, children or skin folds.",
        "Targeted or whole-body phototherapy",
        "Narrowband UVB phototherapy and selected targeted light-based approaches may stimulate repigmentation for some patients. Multiple appointments over months are often needed, and responses are typically better on face/neck than fingertips or lips. Professional monitoring is essential.",
        "Newer topical treatments",
        "Topical JAK inhibitors such as ruxolitinib cream have supporting clinical evidence and authorization for specific vitiligo indications in some jurisdictions. Availability, licensing and prescribing rules in India must be checked before listing it as a clinic treatment. This page does not recommend self-prescribing it.",
        "Surgical or grafting approaches",
        "For appropriately selected stable vitiligo, specialist surgical techniques may be considered when topical/light treatments are insufficient. Surgical treatment is not suitable for active spreading disease and requires careful counseling about graft success, scars and uneven repigmentation. Medicare Skin must verify whether its advertised vitiligo surgery service remains available before making a booking claim.",
        "Camouflage and psychological support",
        "Cosmetic camouflage is a valid choice, not a failure of treatment. Vitiligo can affect confidence and social experiences, and support for emotional impact is part of holistic care.",
        "Does vitiligo spread, and can treatment stop it?",
        "Some patches remain stable, while others enlarge or new spots appear. Response is unpredictable. A dermatologist may offer treatment aimed at controlling active disease, but no approach guarantees prevention of all new patches. Keep a record of new areas and tell your clinician about rapid progression."
      ],
      "listItems": []
    },
    {
      "heading": "How long will repigmentation take?",
      "paragraphs": [
        "Treatment often takes months, and colour returns gradually, if at all. Sites differ in response: facial areas tend to respond better than fingertips and lips. Even after improvement, some patches can lose pigment again. Monitoring and maintenance may be needed.",
        "Everyday skincare and sun protection",
        "Unpigmented patches can burn more easily; use shade, protective clothing and suitable broad-spectrum sunscreen. Avoid intentional tanning to “even out” colour. Do not scrub or chemically burn the patches with home remedies. Ask your clinician about gentle skincare and ways to camouflage lesions if desired."
      ],
      "listItems": []
    },
    {
      "heading": "Vitiligo treatment cost in Bengaluru",
      "paragraphs": [
        "Costs vary by location and extent of patches, topical medicines, repeated phototherapy visits, monitoring and any specialised procedure. Patients should receive an individual plan and a realistic discussion of treatment commitment rather than a permanent-cure guarantee."
      ],
      "listItems": []
    }
  ],
  "faqs": [
    {
      "q": "Is vitiligo contagious?",
      "a": "No. It cannot pass between people through touch, shared clothes or food."
    },
    {
      "q": "Is vitiligo the same as fungal white patches?",
      "a": "No. Several causes can produce pale areas, so diagnosis is important."
    },
    {
      "q": "Does every white patch mean vitiligo?",
      "a": "No. A dermatologist can evaluate other common causes, especially in children."
    },
    {
      "q": "Can vitiligo be permanently cured?",
      "a": "There is no reliably permanent cure; treatments may restore some pigment and reduce disease activity."
    },
    {
      "q": "Is vitiligo hereditary?",
      "a": "Family susceptibility can play a role, but many patients have no affected close relative."
    },
    {
      "q": "Can vitiligo affect children?",
      "a": "Yes; therapy is tailored to age, affected sites and disease behavior."
    },
    {
      "q": "Do I need thyroid tests?",
      "a": "Sometimes, based on symptoms, history and clinician judgment."
    },
    {
      "q": "Does sunlight cure vitiligo?",
      "a": "No. Uncontrolled sun exposure can burn depigmented patches; medically supervised phototherapy is different."
    },
    {
      "q": "Is ruxolitinib cream available in India?",
      "a": "Regulatory and local availability must be checked; approval in another country does not guarantee local access."
    },
    {
      "q": "Can surgery cure vitiligo?",
      "a": "Selected stable patches may respond to grafting techniques, but there are limits and risks; surgery is not an all-purpose cure."
    },
    {
      "q": "Can I use cosmetic camouflage?",
      "a": "Yes, it is a legitimate option alongside or instead of medical treatment."
    }
  ],
  "references": [
    {
      "title": "AAD FAQ",
      "url": "https://www.aad.org/public/diseases/a-z/vitiligo-overview"
    },
    {
      "title": "AAD treatment",
      "url": "https://www.aad.org/public/diseases/a-z/vitiligo-treatment"
    },
    {
      "title": "NHS",
      "url": "https://www.nhs.uk/conditions/vitiligo/treatment/"
    }
  ],
  "internalLinks": [
    {
      "href": "/treatments/medical-dermatology/eczema/",
      "note": ""
    },
    {
      "href": "/treatments/medical-dermatology/psoriasis/",
      "note": ""
    },
    {
      "href": "/treatments/skin/pigmentation-treatment/",
      "note": ""
    },
    {
      "href": "/doctors/dr-sujay-m/",
      "note": ""
    }
  ],
  "medicalReviewer": {
    "name": "Dr. (Mrs.) Sujay M",
    "qualification": "MBBS, DDVL",
    "clinic": "Medicare Skin & Cosmetic Clinic",
    "location": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078",
    "phone": "+91 92428 55707",
    "date": "October 2026"
  }
},
};

export function getClinicalArticle(categorySlug: string, treatmentSlug: string): ClinicalArticle | undefined {
  return clinicalArticles[`${categorySlug}/${treatmentSlug}`];
}

export function getAllClinicalArticles(): ClinicalArticle[] {
  return Object.values(clinicalArticles);
}
