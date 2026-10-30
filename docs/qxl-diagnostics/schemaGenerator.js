/**
 * QXL Diagnostics — Structured Data & JSON-LD Schema Generator
 * Generates valid Schema.org graphs for MedicalOrganization, DiagnosticLab, MedicalTest, and BreadcrumbList.
 */

import { ACCREDITATION, FACILITIES } from "./masterData.js";

const BASE_URL = "https://www.qxldiagnostics.com";

/**
 * Generate Main MedicalOrganization Schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${BASE_URL}/#organization`,
    "name": "QXL Diagnostics",
    "alternateName": "QXL Diagnostic Laboratory Bengaluru",
    "url": `${BASE_URL}/`,
    "logo": `${BASE_URL}/images/qxl-logo.png`,
    "telephone": "+919964639639",
    "email": "care@qxldiagnostics.com",
    "medicalSpecialty": [
      "Laboratory Medicine",
      "Clinical Biochemistry",
      "Clinical Pathology",
      "Hematology",
      "Immunology"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Accreditation",
        "name": `NABL ISO 15189:2022 Accreditation (${ACCREDITATION.nablCertificate})`,
        "recognizedBy": {
          "@type": "Organization",
          "name": ACCREDITATION.governingBody
        },
        "validIn": {
          "@type": "AdministrativeArea",
          "name": "India"
        }
      }
    ],
    "subOrganization": FACILITIES.map((f) => ({
      "@type": "DiagnosticLab",
      "@id": `${BASE_URL}/locations/#${f.id}`,
      "name": f.name,
      "telephone": f.telephone,
      "address": {
        "@type": "PostalAddress",
        ...f.address
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": f.geo.latitude,
        "longitude": f.geo.longitude
      }
    }))
  };
}

/**
 * Generate Diagnostic Lab Facility Schema
 */
export function generateFacilitySchema(facility) {
  return {
    "@context": "https://schema.org",
    "@type": "DiagnosticLab",
    "@id": `${BASE_URL}/locations/#${facility.id}`,
    "name": facility.name,
    "url": `${BASE_URL}/locations/${facility.id}/`,
    "telephone": facility.telephone,
    "address": {
      "@type": "PostalAddress",
      ...facility.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": facility.geo.latitude,
      "longitude": facility.geo.longitude
    },
    "openingHours": facility.hours,
    "parentOrganization": {
      "@id": `${BASE_URL}/#organization`
    }
  };
}

/**
 * Generate MedicalTest Page Schema
 */
export function generateTestPageSchema(test, facility = FACILITIES[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": `${test.name} in Bengaluru – Price, Preparation & Booking`,
    "url": `${BASE_URL}/tests/${test.slug}/`,
    "about": {
      "@type": "MedicalTest",
      "name": test.name,
      "code": {
        "@type": "MedicalCode",
        "code": test.id,
        "codingSystem": "Internal-QXL"
      },
      "usedToDiagnose": [
        {
          "@type": "MedicalCondition",
          "name": test.clinicalIndications
        }
      ],
      "signDetected": [
        {
          "@type": "MedicalSignOrSymptom",
          "name": test.shortName
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": test.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "DiagnosticLab",
        "name": facility.name,
        "telephone": facility.telephone
      }
    },
    "mainEntity": {
      "@type": "MedicalTest",
      "name": test.name,
      "howPerformed": test.method
    }
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${BASE_URL}${item.url}` : undefined
    }))
  };
}
