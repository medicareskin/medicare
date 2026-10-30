# QXL Diagnostics — Developer Code Pack & Implementation Guide
**Bengaluru #1 Digital Leadership Blueprint | 30 October 2026**  
**Target Domain:** `https://www.qxldiagnostics.com`  
**Accreditation:** NABL Certificate MC-6849 (Issued 18 Sept 2024; scope & validity governance)

---

## 1. What is Included in this Pack

| Module | Location | Description |
|---|---|---|
| **Master Data** | `masterData.js` | Unified pricing, parameter counts, TAT, specimen, preparation & clinical safeguards. |
| **Facility Data** | `masterData.js` | Kengeri lab, North Hub (Yelahanka), and 15 Bengaluru locality coverage records. |
| **Data Validator** | `validator.js` | Automated CI checks preventing forbidden legacy claims (`MC-10025`, `100% precision`, etc.). |
| **Schema Generator** | `schemaGenerator.js` | Valid `MedicalOrganization`, `DiagnosticLab`, `LocalBusiness`, and `BreadcrumbList` JSON-LD. |
| **Crawler Matrix** | `crawlerRules.js` | Granular AI & search bot access configuration (Googlebot, OAI-SearchBot, PerplexityBot, Claude). |
| **Audit Blueprint** | `QXL_GEO_Audit_and_Page_Blueprint.md` | Complete written audit, competitor benchmark, 15 localities, and clinical safeguards. |
| **Execution Plan** | `QXL_Developer_Implementation_Checklist.md` | 90-day execution order, URL-by-URL remediation register, and acceptance criteria. |
| **Automated Tests** | `tests/qxl-diagnostics.test.mjs` | Automated test suite verifying data integrity and crawler compliance. |

---

## 2. Developer Execution Order

1. **Import Master Data:** Import `masterData.js` into QXL's CMS / database as the single source of truth for test prices, TAT, parameter counts, and preparation guidelines.
2. **Eliminate Legacy Claims:** Run `validator.js` across all rendered page templates to block forbidden claims (e.g. outdated MC-10025, unsupported 60-min guarantees, 100% precision statements).
3. **Deploy Schema Graph:** Integrate `schemaGenerator.js` to emit server-rendered JSON-LD on all test, package, and location pages.
4. **Configure Search & AI Crawlers:** Apply the robots directives from `crawlerRules.js` in your production hosting / reverse proxy.
5. **Clinical Content Safeguards:** Ensure high-risk clinical pages (Cardiac Troponin, Whole Body Cancer Screening, Food IgG) carry mandatory clinical warnings.
6. **Execute Tests:** Run `node tests/qxl-diagnostics.test.mjs` to ensure 100% pass rate before staging deployment.
