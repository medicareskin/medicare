import { SITE_URL, clinic, verifiedGeo, verifiedHours } from "./clinic";

const clinicId = `${SITE_URL}/#clinic`;
const doctorId = `${SITE_URL}/#dr-sujay-m`;

export function getMedicalSchema() {
  const clinicNode = {
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: clinic.name,
    url: SITE_URL,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      ...clinic.address
    },
    medicalSpecialty: "https://schema.org/Dermatologic",
    areaServed: clinic.areasServed.map((name) => ({
      "@type": "Place",
      name
    })),
    ...(verifiedGeo && Number.isFinite(verifiedGeo.latitude) && Number.isFinite(verifiedGeo.longitude)
      ? {
          geo: {
            "@type": "GeoCoordinates",
            ...verifiedGeo
          }
        }
      : {}),
    ...(Array.isArray(verifiedHours) ? { openingHoursSpecification: verifiedHours } : {}),
    founder: {
      "@id": doctorId
    }
  };

  const doctor = {
    "@type": "Person",
    "@id": doctorId,
    name: clinic.doctor.name,
    honorificPrefix: "Dr.",
    url: clinic.doctor.profileUrl,
    jobTitle: clinic.doctor.role,
    worksFor: {
      "@id": clinicId
    },
    hasCredential: clinic.doctor.degrees.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
      credentialCategory: "Degree"
    })),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bangalore Medical College and Research Institute (BMCRI)"
    }
  };

  const physicianPractice = {
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician-practice`,
    name: "Dr. (Mrs.) Sujay M — Dermatology & Aesthetic Consultation",
    url: clinic.doctor.profileUrl,
    medicalSpecialty: "https://schema.org/Dermatologic",
    employee: {
      "@id": doctorId
    },
    parentOrganization: {
      "@id": clinicId
    }
  };

  return {
    "@context": "https://schema.org",
    "@graph": [clinicNode, doctor, physicianPractice]
  };
}

export function clinicSchema() {
  return getMedicalSchema();
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function getProcedureSchema(name: string, url: string, description: string, faqs: Array<{ question: string; answer: string }> = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#procedure`,
        name,
        url,
        bodyLocation: "Skin and hair-bearing areas",
        description,
        procedureType: "https://schema.org/NoninvasiveProcedure"
      },
      ...(faqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }] : [])
    ]
  };
}

