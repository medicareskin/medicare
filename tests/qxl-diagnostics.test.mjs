import test from 'node:test';
import assert from 'node:assert/strict';
import { ACCREDITATION, FACILITIES, LOCALITIES_BENGALURU, TESTS, PACKAGES } from '../docs/qxl-diagnostics/masterData.js';
import { validatePage, validateBatch } from '../docs/qxl-diagnostics/validator.js';
import { generateOrganizationSchema, generateTestPageSchema, generateBreadcrumbSchema } from '../docs/qxl-diagnostics/schemaGenerator.js';
import { generateRobotsTxt, CRAWLER_POLICY } from '../docs/qxl-diagnostics/crawlerRules.js';

test('QXL Master Data has verified NABL and facility records', () => {
  assert.equal(ACCREDITATION.nablCertificate, 'MC-6849');
  assert.equal(ACCREDITATION.standard, 'ISO 15189:2022');
  assert.ok(FACILITIES.length >= 2, 'Should have at least 2 facilities');
  assert.equal(FACILITIES[0].id, 'kengeri-central');
  assert.equal(FACILITIES[0].nablAccredited, true);
  assert.equal(FACILITIES[1].id, 'north-hub-yelahanka');
  assert.equal(FACILITIES[1].nablAccredited, false); // feeder hub distinction
});

test('QXL Master Data has 15 core Bengaluru localities with valid PINs', () => {
  assert.equal(LOCALITIES_BENGALURU.length, 15);
  for (const loc of LOCALITIES_BENGALURU) {
    assert.ok(loc.name, 'Locality must have a name');
    assert.ok(loc.pinCodes.length > 0, `Locality ${loc.name} must have PIN codes`);
    assert.ok(loc.landmark, `Locality ${loc.name} must have a landmark`);
  }
});

test('QXL Quick Fit package reconciles parameters and price', () => {
  const qf = PACKAGES['quick-fit'];
  assert.ok(qf, 'Quick fit package must exist');
  assert.equal(qf.price, 1770);
  assert.equal(qf.measuredParameters, 68);
  assert.equal(qf.calculatedParameters, 12);
  assert.equal(qf.totalParametersDisplayed, 80);
});

test('QXL Validator catches forbidden legacy claims', () => {
  const badPage1 = {
    url: 'https://www.qxldiagnostics.com/old-page',
    title: 'Diagnostic Lab Test',
    canonical: 'https://www.qxldiagnostics.com/old-page',
    renderedText: 'We are certified under NABL MC-10025 with 100% precision.'
  };
  const res1 = validatePage(badPage1);
  assert.equal(res1.valid, false);
  assert.ok(res1.errors.some((e) => e.includes('MC-10025')));
  assert.ok(res1.errors.some((e) => e.includes('100% precision')));

  const badPage2 = {
    url: 'https://www.qxldiagnostics.com/another-page',
    title: 'Blood Collection',
    canonical: 'https://www.qxldiagnostics.com/another-page',
    renderedText: 'Offering 100% pathologist authorization with 60-minute home collection across all Bengaluru.'
  };
  const res2 = validatePage(badPage2);
  assert.equal(res2.valid, false);
  assert.ok(res2.errors.some((e) => e.includes('100% pathologist')));
  assert.ok(res2.errors.some((e) => e.includes('Unqualified 60-minute')));
});

test('QXL Validator catches price and parameter mismatches against master data', () => {
  const mismatchedPage = {
    url: 'https://www.qxldiagnostics.com/tests/hba1c',
    title: 'HbA1c Test in Bangalore',
    canonical: 'https://www.qxldiagnostics.com/tests/hba1c',
    testId: 'hba1c',
    price: 450, // actual is 380
    parameterCount: 5, // actual is 2
    renderedText: 'HbA1c test details under NABL MC-6849.'
  };
  const res = validatePage(mismatchedPage);
  assert.equal(res.valid, false);
  assert.ok(res.errors.some((e) => e.includes('Price Mismatch')));
  assert.ok(res.errors.some((e) => e.includes('Parameter Mismatch')));
});

test('QXL Validator warns on missing clinical emergency safeguards for troponin', () => {
  const missingEmergencyPage = {
    url: 'https://www.qxldiagnostics.com/tests/troponin',
    title: 'Troponin Test in Bangalore',
    canonical: 'https://www.qxldiagnostics.com/tests/troponin',
    testId: 'cardiac-troponin-i',
    price: 1100,
    parameterCount: 1,
    renderedText: 'Book Troponin test for home collection under NABL MC-6849.'
  };
  const res = validatePage(missingEmergencyPage);
  assert.ok(res.warnings.some((w) => w.includes('Clinical Safeguard Warning')));
});

test('QXL Schema generator creates valid JSON-LD graphs', () => {
  const org = generateOrganizationSchema();
  assert.equal(org['@type'], 'MedicalOrganization');
  assert.equal(org.name, 'QXL Diagnostics');
  assert.ok(org.subOrganization.length >= 2);

  const testSchema = generateTestPageSchema(TESTS['hba1c']);
  assert.equal(testSchema['@type'], 'MedicalWebPage');
  assert.equal(testSchema.offers.price, 380);
  assert.equal(testSchema.offers.priceCurrency, 'INR');

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tests', url: '/tests/' },
    { name: 'HbA1c Test', url: '/tests/hba1c/' }
  ]);
  assert.equal(breadcrumbs['@type'], 'BreadcrumbList');
  assert.equal(breadcrumbs.itemListElement.length, 3);
});

test('QXL Crawler policy allows AI search bots and protects foundation data', () => {
  const robots = generateRobotsTxt();
  assert.match(robots, /User-agent: Googlebot/);
  assert.match(robots, /User-agent: OAI-SearchBot/);
  assert.match(robots, /User-agent: ChatGPT-User/);
  assert.match(robots, /User-agent: PerplexityBot/);
  assert.match(robots, /User-agent: Claude-Web/);

  // Training scrapers must be disallowed
  assert.match(robots, /User-agent: GPTBot\s+Disallow: \//);
  assert.match(robots, /User-agent: Google-Extended\s+Disallow: \//);
  assert.match(robots, /User-agent: CCBot\s+Disallow: \//);
});
