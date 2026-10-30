/**
 * QXL Diagnostics — Automated CI Quality & Claim Validation Engine
 * Validates rendered page HTML/text against Master Data and Medical Governance rules.
 */

import { TESTS, PACKAGES, ACCREDITATION } from "./masterData.js";

export const FORBIDDEN_CLAIMS = [
  { pattern: /MC-10025/i, message: "Prohibited legacy NABL reference MC-10025. Must use active certificate MC-6849." },
  { pattern: /100%\s*precision/i, message: "Prohibited absolute accuracy claim '100% precision'. Must use validated analytical coefficient / pre-analytical compliance." },
  { pattern: /100%\s*pathologist\s*authori[sz]ation/i, message: "Prohibited marketing claim '100% pathologist authorization'. Reports are authorized under standard NABL laboratory signature authority rules." },
  { pattern: /every\s*single\s*report.*pathologist/i, message: "Prohibited claim 'every single report... pathologist'. High-throughput automated assays follow validated delta-check and auto-release rules with pathologist review of abnormal flags." },
  { pattern: /multi-level\s*MD\s*doctor\s*verification/i, message: "Prohibited unverified marketing claim 'multi-level MD doctor verification'." },
  { pattern: /100%\s*(accurate|guaranteed|safe)/i, message: "Prohibited absolute medical claim '100% accurate/guaranteed/safe'." },
  { pattern: /60[- ]minute.*(entire|across all)\s*bengaluru/i, message: "Unqualified 60-minute home collection claim across all Bengaluru. Must state 'subject to slot confirmation and serviceable PIN codes'." },
  { pattern: /plant[- ]based\s*enzymes/i, message: "Prohibited erroneous medical claim 'plant based enzymes' for autologous growth factor therapies." }
];

/**
 * Validate a page object or rendered DOM node against Master Data and Compliance Rules
 * @param {Object} page - The page object to validate
 * @param {string} page.url - Page URL
 * @param {string} page.renderedText - Text content extracted from the rendered page
 * @param {string} [page.title] - Page title
 * @param {string} [page.canonical] - Canonical tag href
 * @param {string} [page.testId] - Associated test ID from masterData
 * @param {string} [page.packageId] - Associated package ID from masterData
 * @param {number} [page.price] - Price displayed on the page
 * @param {number} [page.parameterCount] - Number of parameters advertised on the page
 * @returns {{ valid: boolean, errors: string[], warnings: string[] }}
 */
export function validatePage(page) {
  const errors = [];
  const warnings = [];

  if (!page || typeof page !== "object") {
    return { valid: false, errors: ["Invalid page object provided for validation"], warnings: [] };
  }

  const text = page.renderedText || "";

  // 1. Forbidden Legacy Claim Checks
  for (const { pattern, message } of FORBIDDEN_CLAIMS) {
    if (pattern.test(text)) {
      errors.push(`[Prohibited Claim]: ${message}`);
    }
  }

  // 2. Canonical & SEO Checks
  if (!page.canonical) {
    errors.push("[Missing Meta]: Missing canonical URL link tag.");
  }
  if (!page.title) {
    errors.push("[Missing Meta]: Missing <title> tag.");
  } else if (page.title.length < 15) {
    warnings.push("[SEO Warning]: Title tag is suspiciously short (< 15 chars).");
  }

  // 3. Test Master Data Consistency
  if (page.testId) {
    const test = TESTS[page.testId];
    if (!test) {
      errors.push(`[Data Error]: Unknown testId '${page.testId}' not found in master catalogue.`);
    } else {
      if (page.price !== undefined && page.price !== test.price) {
        errors.push(`[Price Mismatch]: Page displays ₹${page.price}, but masterData specifies ₹${test.price}.`);
      }
      if (page.parameterCount !== undefined && page.parameterCount !== test.parameterCount) {
        errors.push(`[Parameter Mismatch]: Page lists ${page.parameterCount} parameters, masterData specifies ${test.parameterCount}.`);
      }
      // Check required clinical safeguard warnings
      if (test.safeguardWarning) {
        if (!text.toLowerCase().includes("emergency") && !text.toLowerCase().includes("advisory") && !text.toLowerCase().includes("caution")) {
          warnings.push(`[Clinical Safeguard Warning]: Assay '${test.id}' requires emergency or medical advisory disclosure in rendered copy.`);
        }
      }
    }
  }

  // 4. Package Master Data Consistency
  if (page.packageId) {
    const pkg = PACKAGES[page.packageId];
    if (!pkg) {
      errors.push(`[Data Error]: Unknown packageId '${page.packageId}' not found in master packages catalogue.`);
    } else {
      if (page.price !== undefined && page.price !== pkg.price) {
        errors.push(`[Price Mismatch]: Package displays ₹${page.price}, but masterData specifies ₹${pkg.price}.`);
      }
      if (page.parameterCount !== undefined) {
        // Discrepancy checks: ensure measured vs calculated is respected
        if (page.parameterCount !== pkg.totalParametersDisplayed && page.parameterCount !== pkg.measuredParameters) {
          errors.push(`[Package Parameter Inconsistency]: Page lists ${page.parameterCount} parameters. Master package specifies ${pkg.measuredParameters} measured + ${pkg.calculatedParameters} calculated = ${pkg.totalParametersDisplayed} total.`);
        }
      }
    }
  }

  // 5. NABL Certificate Check
  if (text.includes("NABL") || text.includes("MC-")) {
    if (!text.includes(ACCREDITATION.nablCertificate)) {
      warnings.push(`[NABL Verification Warning]: Page mentions NABL but does not cite active certificate number '${ACCREDITATION.nablCertificate}'.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Batch validator for a list of pages
 * @param {Array<Object>} pages
 * @returns {{ total: number, passed: number, failed: number, results: Array }}
 */
export function validateBatch(pages) {
  const results = pages.map((p) => ({
    url: p.url,
    ...validatePage(p)
  }));

  const passed = results.filter((r) => r.valid).length;
  const failed = results.length - passed;

  return {
    total: pages.length,
    passed,
    failed,
    results
  };
}
