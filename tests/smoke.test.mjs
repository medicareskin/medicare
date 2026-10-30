import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const file = (f) => fs.readFileSync(f, 'utf8');

test('Core routes and booking backend present', () => {
  for (const p of [
    'src/app/page.tsx',
    'src/app/treatments/[slug]/page.tsx',
    'src/app/treatments/[slug]/[subslug]/page.tsx',
    'src/app/book-appointment/page.tsx',
    'src/app/api/appointment-requests/route.ts',
    'supabase/001_appointments.sql',
  ]) {
    assert.ok(fs.existsSync(p), `Missing ${p}`);
  }
});

test('Booking never returns misleading booking confirmation', () => {
  const api = file('src/app/api/appointment-requests/route.ts');
  assert.match(api, /status:'requested'/);
  assert.match(file('src/components/BookingForm.tsx'), /not a confirmed appointment/);
  assert.match(api, /TURNSTILE_SECRET_KEY/);
  assert.match(api, /UPSTASH_REDIS_REST_URL/);
});

test('SEO preview index guard and metadata exist', () => {
  assert.match(file('src/lib/site.ts'), /NEXT_PUBLIC_ALLOW_INDEXING/);
  assert.match(file('src/app/robots.ts'), /disallow:'\/'/);
  assert.match(file('src/app/sitemap.ts'), /indexingEnabled/);
});

test('No fake social proof populated', () => {
  const home = file('src/app/page.tsx');
  assert.doesNotMatch(home, /4\.9\/5|500\+ reviews|1000\+ happy patients/);
  assert.match(home, /VERIFIED|AUTHENTIC|REAL|CLINIC/);
});

test('Draft medical articles are not indexed by default', () => {
  const content = file('src/lib/articles.ts');
  assert.match(content, /approved:false/);
  assert.match(file('src/app/journal/[slug]/page.tsx'), /a\.approved/);
});

test('Target hierarchical treatment routes are mapped and available', () => {
  const content = file('src/lib/treatments.ts');
  const targetSlugs = [
    'pigmentation-treatment',
    'q-switched-laser',
    'laser-hair-reduction',
    'hair-loss-treatment',
    'hydrafacial',
    'chemical-peels',
    'prp-gfc',
    'eczema',
    'psoriasis',
    'vitiligo',
  ];
  for (const slug of targetSlugs) {
    assert.match(content, new RegExp(`slug:\\s*'${slug}'`), `Missing slug ${slug}`);
  }
});

test('Master clinical content pack is populated with 10 articles and citations', () => {
  const content = file('src/lib/clinicalContent.ts');
  const targetPairs = [
    'skin/pigmentation-treatment',
    'laser/q-switched-laser',
    'laser/laser-hair-reduction',
    'hair/hair-loss-treatment',
    'aesthetics/hydrafacial',
    'skin/chemical-peels',
    'hair/prp-gfc',
    'medical-dermatology/eczema',
    'medical-dermatology/psoriasis',
    'medical-dermatology/vitiligo',
  ];
  for (const pair of targetPairs) {
    assert.match(content, new RegExp(`'${pair}':`), `Missing clinical article for ${pair}`);
  }
  assert.match(content, /Dr\. \(Mrs\.\) Sujay M/);
  assert.match(content, /aad\.org/);
  assert.match(content, /dermnetnz\.org/);
  assert.match(content, /pubmed\.ncbi\.nlm\.nih\.gov/);
});

test('Skin conditions have unique, condition-specific symptoms, treatments and pricing', () => {
  const profileFile = file('src/data/treatmentClinicalProfiles.js');
  
  // Melasma checks
  assert.match(profileFile, /'melasma-skin':/);
  assert.match(profileFile, /Symmetrical Facial Patches/);
  assert.doesNotMatch(profileFile, /'melasma-skin':[\s\S]*?Pitted \/ Indented Scars/);
  assert.match(profileFile, /'melasma-skin':[\s\S]*?Low-Fluence Q-Switched Toning/);
  assert.match(profileFile, /'melasma-skin':[\s\S]*?₹2,500 – ₹6,000/);

  // Vitiligo checks
  assert.match(profileFile, /'vitiligo-skin':/);
  assert.match(profileFile, /Chalky-White Macules/);
  assert.match(profileFile, /Targeted Phototherapy \(NB-UVB\)/);
  assert.match(profileFile, /'vitiligo-skin':[\s\S]*?₹800 – ₹2,500/);
  assert.doesNotMatch(profileFile, /'vitiligo-skin':[\s\S]*?Fractional Laser, Microneedling, PRP/);

  // Sagging Skin checks
  assert.match(profileFile, /'sagging-skin':/);
  assert.match(profileFile, /Jowl Sagging & Softened Jawline/);
  assert.match(profileFile, /Non-Surgical RF Skin Tightening/);
  assert.match(profileFile, /'sagging-skin':[\s\S]*?₹8,000 – ₹20,000/);
  assert.doesNotMatch(profileFile, /'sagging-skin':[\s\S]*?Pitted \/ Indented Scars/);

  // Acne Scars checks
  assert.match(profileFile, /'acne-scar-skin':/);
  assert.match(profileFile, /Ice-Pick & Boxcar Depressions/);
  assert.match(profileFile, /Surgical Subcision/);

  // TreatmentDetailPage dynamic checks
  const pageFile = file('src/pages/TreatmentDetailPage.jsx');
  assert.match(pageFile, /getTreatmentProfile/);
  assert.match(pageFile, /profile\.symptoms\.map/);
  assert.match(pageFile, /profile\.treatmentOptions\.map/);
  assert.match(pageFile, /profile\.pricing\.description/);
  assert.match(pageFile, /profile\.pricing\.range/);
  assert.doesNotMatch(pageFile, /Pitted \/ Indented Scars/);
});

test('Terms and legal policies are clinic-specific with standardized contact', () => {
  const terms = file('src/app/terms/page.tsx');
  assert.match(terms, /medicareskin\.cosmeticclinic@gmail\.com/);
  assert.match(terms, /\+91 92428 55707/);
  assert.match(terms, /Dr\. \(Mrs\.\) Sujay M/);
  assert.match(terms, /Yelachenahalli Metro Station/);
});

test('next.config.ts contains 301 redirects for legacy URLs', () => {
  const config = file('next.config.ts');
  assert.match(config, /q-switched-laser-melasma-pigmentation-bangalore/);
  assert.match(config, /hydrafacial-bangalore/);
  assert.match(config, /laser-hair-removal/);
  assert.match(config, /prp-hair/);
});

test('Prohibited legacy claims are eliminated', () => {
  const clinicData = file('src/data/clinicData.js');
  assert.doesNotMatch(clinicData, /US-FDA approved/);
  assert.doesNotMatch(clinicData, /permanent reduction in 4-6 sessions/);
  assert.doesNotMatch(clinicData, /plant based enzymes/);
});
