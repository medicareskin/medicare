import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const file = (f) => fs.readFileSync(f, 'utf8');

test('Core routes and booking backend present', () => {
  for (const p of [
    'src/app/page.tsx',
    'src/app/treatments/[slug]/page.tsx',
    'src/app/treatments/[category]/[slug]/page.tsx',
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
