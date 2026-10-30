import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const file = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

console.log('====================================================');
console.log('MEDICARE SKIN — RELEASE & CRAWLABILITY VERIFICATION');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function check(title, fn) {
  try {
    fn();
    console.log(`  [PASS] ${title}`);
    passCount++;
  } catch (err) {
    console.error(`  [FAIL] ${title}: ${err.message}`);
    failCount++;
  }
}

// 1. Ten Priority Treatment Pages
const PRIORITY_TREATMENTS = [
  { path: 'treatments/skin/pigmentation-treatment', name: 'Pigmentation Treatment' },
  { path: 'treatments/laser/q-switched-laser', name: 'Q-Switched Laser' },
  { path: 'treatments/laser/laser-hair-reduction', name: 'Laser Hair Reduction' },
  { path: 'treatments/hair/hair-loss-treatment', name: 'Hair Loss Treatment' },
  { path: 'treatments/aesthetics/hydrafacial', name: 'HydraFacial' },
  { path: 'treatments/skin/chemical-peels', name: 'Chemical Peels' },
  { path: 'treatments/hair/prp-gfc', name: 'PRP / GFC' },
  { path: 'treatments/medical-dermatology/eczema', name: 'Eczema' },
  { path: 'treatments/medical-dermatology/psoriasis', name: 'Psoriasis' },
  { path: 'treatments/medical-dermatology/vitiligo', name: 'Vitiligo' },
];

console.log('1. Checking 10 Priority Treatment Routes & Clinical Content...');
const clinicalContent = file('src/lib/clinicalContent.ts');
const treatmentsData = file('src/lib/treatments.ts');

for (const t of PRIORITY_TREATMENTS) {
  check(`Treatment route mapped: /${t.path}/`, () => {
    const key = t.path.replace('treatments/', '');
    if (!clinicalContent.includes(`'${key}':`)) {
      throw new Error(`Missing clinical article in clinicalContent.ts for ${key}`);
    }
  });
}

// 2. Doctor and Clinic Identity
console.log('\n2. Checking Doctor & Clinic Identity Standards...');
check('Doctor credentials standardized to MBBS, DDVL with authentic experience', () => {
  const siteConfig = file('src/lib/site.ts');
  if (!siteConfig.includes('Dr. (Mrs.) Sujay M')) throw new Error('Missing Dr. (Mrs.) Sujay M');
  if (!siteConfig.includes('MBBS, DDVL')) throw new Error('Missing MBBS, DDVL');
  if (!siteConfig.includes('+91 92428 55707')) throw new Error('Incorrect telephone number');
  if (!siteConfig.includes('medicareskin.cosmeticclinic@gmail.com')) throw new Error('Incorrect official email');
});

// 3. Absence of Unverified / Legacy Claims
console.log('\n3. Verifying Absence of Prohibited Legacy Claims...');
const filesToCheck = [
  'src/data/clinicData.js',
  'src/app/about/page.tsx',
  'src/app/terms/page.tsx',
  'src/components/Footer.tsx',
  'src/components/Footer.jsx',
  'src/components/FAQSection.tsx',
  'src/pages/LocalSeoPage.jsx',
];

for (const f of filesToCheck) {
  const content = file(f);
  check(`No 'FDA approved' in ${f}`, () => {
    if (/FDA approved/i.test(content)) throw new Error(`Found 'FDA approved' in ${f}`);
  });
  check(`No 'plant based enzymes' in ${f}`, () => {
    if (/plant based enzymes/i.test(content)) throw new Error(`Found 'plant based enzymes' in ${f}`);
  });
  check(`No 'info@website.com' or generic template placeholders in ${f}`, () => {
    if (/info@website\.com/i.test(content)) throw new Error(`Found template email in ${f}`);
  });
}

// 4. Crawlability, Robots & Sitemap
console.log('\n4. Checking Crawlability, Robots.txt & Sitemap.xml...');
check('Robots.txt configures Googlebot and AI Search crawlers', () => {
  const robots = file('src/app/robots.ts');
  if (!robots.includes('Googlebot')) throw new Error('Missing Googlebot in robots.ts');
  if (!robots.includes('OAI-SearchBot')) throw new Error('Missing OAI-SearchBot in robots.ts');
  if (!robots.includes('sitemap.xml')) throw new Error('Missing sitemap.xml reference in robots.ts');
});

check('Sitemap.xml contains treatments, legal, and clinic pages', () => {
  const sitemap = file('src/app/sitemap.ts');
  if (!sitemap.includes('/terms/')) throw new Error('Missing /terms/ in sitemap.ts');
  if (!sitemap.includes('/privacy-policy/')) throw new Error('Missing /privacy-policy/ in sitemap.ts');
  if (!sitemap.includes('treatments')) throw new Error('Missing treatments in sitemap.ts');
});

// 5. 301 Redirects in next.config.ts
console.log('\n5. Checking 301 Permanent Redirects Configuration...');
check('next.config.ts contains legacy 301 redirects for flat and retired URLs', () => {
  const nextConfig = file('next.config.ts');
  if (!nextConfig.includes('/treatments/laser/q-switched-laser/')) throw new Error('Missing q-switched redirect');
  if (!nextConfig.includes('/treatments/aesthetics/hydrafacial/')) throw new Error('Missing hydrafacial redirect');
  if (!nextConfig.includes('/treatments/laser/laser-hair-reduction/')) throw new Error('Missing laser-hair redirect');
  if (!nextConfig.includes('/treatments/hair/prp-gfc/')) throw new Error('Missing prp/gfc redirect');
});

console.log('\n====================================================');
console.log(`VERIFICATION COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('All automated release verification checks passed successfully!\n');
}
