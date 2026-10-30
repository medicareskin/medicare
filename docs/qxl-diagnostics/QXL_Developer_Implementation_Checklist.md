# QXL Diagnostics — Developer Implementation Checklist & Remediation Register

**Reference Domain:** `https://www.qxldiagnostics.com`  
**Target:** Bengaluru Laboratory Digital & Clinical Search Leadership  
**Priority Hierarchy:** P0 = Immediate Release Blocker | P1 = Next Sprint (Days 16–45) | P2 = Strategic Expansion (Days 46–90)

---

## 1. Master Priority Implementation Tracker (20 Tasks)

| Task ID | Level | Implementation Item | Requirement & Acceptance Criteria | Owner | Target Date | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **QXL-P0-01** | **P0** | **Crawl & Indexation** | Verify robots.txt, sitemap.xml, canonical tags, HTTP 200 statuses, and server-rendered HTML for all key URLs. | Dev Lead | Day 3 | Complete (Config Ready) |
| **QXL-P0-02** | **P0** | **Master Data Consistency** | Connect price, MRP, TAT, parameter count, and center hours to single source of truth `masterData.js`. | CMS / Dev | Day 5 | Complete |
| **QXL-P0-03** | **P0** | **Medical Claim Validation** | Run automated CI validator to purge legacy MC-10025, "100% precision", and blanket signatory claims. | Medical / QA | Day 7 | Complete (Validator Built) |
| **QXL-P0-04** | **P0** | **SSR Test Directory** | Deploy crawlable `/tests/` index page with category filters and zero-JS link discovery. | Frontend Dev | Day 10 | Ready for Integration |
| **QXL-P0-05** | **P0** | **Booking Conversion** | Audit mobile booking from test selection to confirmed slot; measure drop-offs and API errors. | Backend / UX | Day 12 | In Review |
| **QXL-P0-06** | **P0** | **Google Search Console** | Audit indexing status, canonical selection, crawl errors, and query impressions. | SEO Lead | Day 15 | Scheduled |
| **QXL-P1-01** | **P1** | **Core Test Pages** | Publish initial 26 high-intent validated test pages with clinical indications and pre-analytics. | Content / Dev | Day 25 | Spec Complete |
| **QXL-P1-02** | **P1** | **Health Symptom Hub** | Connect `/health/` symptom guides to specific laboratory investigations and doctor profiles. | Medical Ed | Day 30 | Spec Complete |
| **QXL-P1-03** | **P1** | **Location Entities** | Align Kengeri Central Lab and North Hub website entities, GBP listings, hours, and geo coordinates. | Local SEO | Day 35 | In Progress |
| **QXL-P1-04** | **P1** | **Structured Data Graph** | Deploy Schema.org `MedicalOrganization`, `DiagnosticLab`, and `MedicalTest` JSON-LD graphs. | Dev Lead | Day 38 | Complete (Generator Built) |
| **QXL-P1-05** | **P1** | **Core Web Vitals** | Optimize mobile LCP ($\le 2.5\text{s}$), INP ($\le 200\text{ms}$), and CLS ($\le 0.1$) on test templates. | Performance | Day 40 | Target Set |
| **QXL-P1-06** | **P1** | **Medical E-E-A-T** | Add pathologist credentials, editorial review timestamps, and clinical guideline citations. | Medical Lead | Day 42 | Blueprint Ready |
| **QXL-P1-07** | **P1** | **Search Snippets** | Draft unique titles, meta descriptions, and semantic headings; avoid repetitive city-keyword spam. | SEO Copy | Day 45 | Guidelines Defined |
| **QXL-P1-08** | **P1** | **Independent Authority** | Establish citations and outbound references to ICMR, WHO, ADA, and hospital referral networks. | PR / Outreach | Day 50 | Backlog |
| **QXL-P1-09** | **P1** | **AI Discovery Testing** | Monitor brand citations in ChatGPT Search, Perplexity, Gemini, and Claude for 100 fixed queries. | SEO Lead | Day 55 | Benchmark Ready |
| **QXL-P2-01** | **P2** | **Advanced Diagnostics** | Build pages for specialized biochemistry, molecular diagnostics, and liquid chromatography. | Laboratory Lead| Day 65 | Backlog |
| **QXL-P2-02** | **P2** | **Multilingual Content** | Pilot Kannada & English landing journeys for high-volume preventive checkups in Bengaluru. | Localization | Day 70 | Planning |
| **QXL-P2-03** | **P2** | **B2B Hospital Services** | Build Hospital Laboratory Management (HLM) and referral partner landing portal. | Commercial | Day 75 | Architecture Ready |
| **QXL-P2-04** | **P2** | **Original Clinical Insights** | Publish anonymized Bengaluru epidemiology trends (e.g. HbA1c and Vitamin D patterns). | Pathology Team | Day 80 | Backlog |
| **QXL-P2-05** | **P2** | **Conversion Experiments** | A/B test booking CTAs, pricing breakdowns, and WhatsApp home collection booking flows. | Growth Team | Day 90 | Planning |

---

## 2. URL-by-URL Status & Remediation Register

| URL Path | Type | Current Status | Identified Defect | Required Remediation | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `https://www.qxldiagnostics.com/` | Homepage | Needs Review | Unqualified 60-min home collection promise across all Bengaluru | Add "eligible PIN codes subject to slot confirmation"; link to verified locality directory. | Rendered HTML text grep |
| `https://www.qxldiagnostics.com/packages/quick-fit/` | Package | Conflicting data | Parameter count listed as 12+, 68, or 80 across pages | Standardize to 68 measured + 12 calculated = 80 total; price ₹1,770; TAT defined. | `validatePage()` in CI |
| `https://www.qxldiagnostics.com/tests/hba1c-test-bangalore/` | Test Page | Live | Missing analytical limitations (hemoglobinopathies) | Add clinical interpretation, sample tube color, HPLC method, ADA guidelines. | Rich Results & HTML audit |
| `https://www.qxldiagnostics.com/tests/cardiac-troponin-i/` | Test Page | Critical Risk | Absence of immediate emergency department warning | Add mandatory emergency red banner for acute crushing chest pain / ACS. | Automated safeguard regex |
| `https://www.qxldiagnostics.com/tests/food-intolerance-igg/` | Test Page | Medical Risk | Marketed as true allergy diagnostic panel | Add AAAAI advisory note stating IgG measures physiological immune tolerance. | Automated safeguard regex |
| `https://www.qxldiagnostics.com/quality-accreditation/` | Policy | Outdated | Mentions legacy MC-10025 reference | Replace with certificate MC-6849, ISO 15189:2022, and clarify Kengeri lab scope. | Legal / NABL audit |
| `https://www.qxldiagnostics.com/locations/kengeri/` | Hub | Needs Alignment | Missing geo coordinates and opening hours in JSON-LD | Embed `DiagnosticLab` schema with latitude 12.9172, longitude 77.4837. | Schema Validator |
| `https://www.qxldiagnostics.com/locations/yelahanka/` | Hub | Needs Alignment | Advertised as independently NABL accredited | Identify as North Hub / Regional Collection Centre operating under central lab protocols. | Compliance Review |

---

## 3. Developer Execution Instructions

1. **Import Master Data:** Link frontend pages directly to `/docs/qxl-diagnostics/masterData.js`.
2. **Execute Automated Quality Gate:**
   ```bash
   node tests/qxl-diagnostics.test.mjs
   ```
3. **Verify Robots & AI Crawlers:** Ensure server returns `docs/qxl-diagnostics/crawlerRules.js` output at `/robots.txt`.
4. **Deploy Structured Data:** Integrate `docs/qxl-diagnostics/schemaGenerator.js` into page templates.
