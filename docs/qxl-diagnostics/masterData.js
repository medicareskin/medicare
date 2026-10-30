/**
 * QXL Diagnostics — Master Clinical & Facility Data
 * Single Source of Truth for Tests, Packages, Facilities & Localities
 */

export const ACCREDITATION = {
  nablCertificate: "MC-6849",
  issueDate: "2024-09-18",
  validUntil: "2026-09-17",
  governingBody: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
  standard: "ISO 15189:2022",
  accreditedFacility: "Kengeri Central Processing Reference Laboratory",
  notice: "Accreditation scope applies to verified tests processed at the Kengeri Central Laboratory. Collection centres operate as specimen collection points under standard pre-analytical transport protocols."
};

export const FACILITIES = [
  {
    id: "kengeri-central",
    name: "QXL Diagnostics Central Laboratory (Kengeri)",
    type: "DiagnosticLab",
    address: {
      streetAddress: "Kengeri Satellite Town, Bangalore",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560060",
      addressCountry: "IN"
    },
    geo: { latitude: 12.9172, longitude: 77.4837 },
    telephone: "+919964639639",
    nablAccredited: true,
    hours: "Mon-Sat: 07:00 - 20:00 | Sun: 07:00 - 13:00"
  },
  {
    id: "north-hub-yelahanka",
    name: "QXL Diagnostics North Hub (Yelahanka)",
    type: "DiagnosticLab",
    address: {
      streetAddress: "Yelahanka New Town, Bangalore",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN"
    },
    geo: { latitude: 13.1007, longitude: 77.5963 },
    telephone: "+919964639639",
    nablAccredited: false, // Feeder / Regional Hub
    hours: "Mon-Sat: 07:30 - 19:30 | Sun: 07:30 - 12:30"
  }
];

export const LOCALITIES_BENGALURU = [
  { name: "Indiranagar", pinCodes: ["560038"], landmark: "100ft Road / CMH Road junction" },
  { name: "Koramangala", pinCodes: ["560034", "560095"], landmark: "Sony World Signal / 80ft Road" },
  { name: "HSR Layout", pinCodes: ["560102"], landmark: "27th Main / Sector 1" },
  { name: "Whitefield", pinCodes: ["560066"], landmark: "ITPL Main Road / Hope Farm" },
  { name: "Jayanagar", pinCodes: ["560011", "560041", "560069"], landmark: "4th Block Complex / South End Circle" },
  { name: "JP Nagar", pinCodes: ["560078"], landmark: "Sarakki Signal / 24th Main" },
  { name: "Electronic City", pinCodes: ["560100"], landmark: "Phase 1 Toll Gate / Wipro Gate" },
  { name: "Marathahalli", pinCodes: ["560037"], landmark: "Bridge junction / Outer Ring Road" },
  { name: "Malleshwaram", pinCodes: ["560003"], landmark: "8th Cross / Sampige Road" },
  { name: "Hebbal", pinCodes: ["560024", "560094"], landmark: "Hebbal Flyover / Esteem Mall" },
  { name: "Yelahanka", pinCodes: ["560064"], landmark: "NES Circle / Yelahanka New Town" },
  { name: "Banashankari", pinCodes: ["560050", "560070", "560085"], landmark: "BSK BDA Complex / 100ft Ring Road" },
  { name: "Sarjapur Road", pinCodes: ["560035", "562125"], landmark: "Wipro Corporate Office / Carmelaram" },
  { name: "BTM Layout", pinCodes: ["560068", "560076"], landmark: "Udupi Garden Signal / 7th Main" },
  { name: "Rajajinagar", pinCodes: ["560010"], landmark: "Navrang Theatre / 1st Block" },
];

export const TESTS = {
  "hba1c": {
    id: "hba1c",
    slug: "hba1c-test-bangalore",
    name: "HbA1c (Glycated Hemoglobin) Test",
    shortName: "HbA1c Test",
    price: 380,
    mrp: 500,
    sample: "EDTA Whole Blood (Lavender Top)",
    fastingRequired: false,
    tatHours: 6,
    parameterCount: 2, // HbA1c% and Estimated Average Glucose (eAG)
    method: "HPLC (High-Performance Liquid Chromatography)",
    clinicalIndications: "Diagnostic assessment and 3-month glycemic control monitoring in Type 1 and Type 2 Diabetes Mellitus.",
    limitations: "Hemoglobinopathies (HbS, HbC), hemolytic anemia, recent blood transfusion, or chronic renal disease can cause clinically misleading results.",
    references: ["American Diabetes Association (ADA) Standards of Care 2026", "ICMR Guidelines for Management of Type 2 Diabetes in India"]
  },
  "cbc": {
    id: "cbc",
    slug: "cbc-test-bangalore",
    name: "Complete Blood Count (CBC) with Automated Differential",
    shortName: "CBC Test",
    price: 280,
    mrp: 400,
    sample: "EDTA Whole Blood",
    fastingRequired: false,
    tatHours: 4,
    parameterCount: 24,
    method: "5-Part Automated Hematology Analyzer with Selective Laser Flow Cytometry",
    clinicalIndications: "Screening for anemia, bacterial/viral infections, platelet disorders, hematological neoplasms, and pre-operative baseline.",
    limitations: "Platelet clumping (EDTA-induced pseudothrombocytopenia) requires peripheral smear review.",
    references: ["WHO Hemoglobin Concentrations for the Diagnosis of Anemia"]
  },
  "lipid-profile": {
    id: "lipid-profile",
    slug: "lipid-profile-test-bangalore",
    name: "Complete Lipid Profile",
    shortName: "Lipid Profile",
    price: 550,
    mrp: 800,
    sample: "Serum (SST Gold Top)",
    fastingRequired: true,
    fastingHours: "10-12 hours overnight fasting",
    tatHours: 6,
    parameterCount: 8,
    method: "Spectrophotometric / Enzymatic End-Point Assay",
    clinicalIndications: "Atherosclerotic cardiovascular risk stratification, dyslipidemia evaluation, and monitoring statin therapy.",
    limitations: "Recent acute illness, pancreatitis, or high-fat meal can transiently skew triglyceride measurements.",
    references: ["Indian Heart Association Guidelines on Dyslipidemia Management"]
  },
  "cardiac-troponin-i": {
    id: "cardiac-troponin-i",
    slug: "cardiac-troponin-i-test-bangalore",
    name: "High-Sensitivity Cardiac Troponin I (hs-cTnI)",
    shortName: "Troponin I Test",
    price: 1100,
    mrp: 1500,
    sample: "Heparinized Plasma or Serum",
    fastingRequired: false,
    tatHours: 3,
    parameterCount: 1,
    method: "Chemiluminescent Microparticle Immunoassay (CMIA)",
    clinicalIndications: "Assessment of myocardial injury. Note: Suspected Acute Coronary Syndrome (chest pain, shortness of breath) requires IMMEDIATE hospital emergency casualty attendance.",
    limitations: "Elevations occur not only in acute MI but also in myocarditis, acute pulmonary embolism, sepsis, strenuous endurance exercise, and severe renal failure.",
    safeguardWarning: "CRITICAL: If you or a family member are experiencing acute chest pressure, radiation of pain to jaw/arm, or unexplained breathlessness, do NOT wait for a home blood collection. Call an emergency ambulance (108) or proceed to the nearest emergency hospital.",
    references: ["Fourth Universal Definition of Myocardial Infarction (ESC/ACC/AHA/WHF)"]
  },
  "food-igg-panel": {
    id: "food-igg-panel",
    slug: "food-intolerance-igg-panel-bangalore",
    name: "Food Sensitivity IgG Antibody Panel (Indicative)",
    shortName: "Food IgG Panel",
    price: 6500,
    mrp: 9000,
    sample: "Serum",
    fastingRequired: false,
    tatHours: 48,
    parameterCount: 64,
    method: "ELISA Microarray",
    clinicalIndications: "Exploratory dietary monitoring. NOT validated for diagnosing true IgE-mediated food allergies or celiac disease.",
    limitations: "Circulating food-specific IgG antibodies indicate past immune exposure and physiological tolerance, NOT food allergy or clinical intolerance. Avoid drastic elimination diets without allergist / dietitian guidance.",
    safeguardWarning: "Medical Advisory: Leading international allergy bodies (AAAAI, EAACI) do not endorse IgG testing as a diagnostic tool for food allergy. For suspected anaphylaxis or true allergy, consult a clinical allergist for skin prick testing or specific IgE assays.",
    references: ["AAAAI Position Statement on Food-Specific IgG Testing"]
  }
};

export const PACKAGES = {
  "quick-fit": {
    id: "quick-fit",
    slug: "quick-fit-health-package-bangalore",
    name: "QXL Quick Fit Health Package",
    price: 1770,
    mrp: 3500,
    measuredParameters: 68,
    calculatedParameters: 12,
    totalParametersDisplayed: 80,
    tatCommitment: "Same-Day Report (Evening) for samples collected before 11:00 AM; Next Morning for afternoon samples",
    sampleType: "Blood & Urine",
    fastingRequired: true,
    fastingHours: "10-12 hours",
    includes: [
      "Complete Blood Count (CBC, 24 params)",
      "Comprehensive Lipid Profile (8 params)",
      "Liver Function Test with Enzymes (11 params)",
      "Renal / Kidney Function Test with eGFR (8 params)",
      "Fasting Blood Sugar (Glucose)",
      "Complete Urine Routine Analysis (16 params)"
    ]
  }
};
