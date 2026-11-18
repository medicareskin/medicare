import { clinic, SITE_ORIGIN } from './clinic-facts';

export function clinicJsonLd() {
  const clinicId = `${SITE_ORIGIN}/#clinic`;
  const doctorId = `${SITE_ORIGIN}/doctors/dr-sujay-m/#doctor`;
  const address = { '@type': 'PostalAddress', ...clinic.postalAddress };
  const clinicNode: Record<string, unknown> = {
    '@type': 'MedicalClinic',
    '@id': clinicId,
    name: clinic.name,
    url: SITE_ORIGIN,
    telephone: clinic.telephone,
    email: clinic.email,
    address,
    medicalSpecialty: 'https://schema.org/Dermatologic',
    areaServed: clinic.serviceArea.map((name) => ({ '@type': 'Place', name })),
    employee: { '@id': doctorId },
  };
  if (clinic.coordinates && Number.isFinite(clinic.coordinates.latitude) && Number.isFinite(clinic.coordinates.longitude)) {
    clinicNode.geo = { '@type': 'GeoCoordinates', latitude: clinic.coordinates.latitude, longitude: clinic.coordinates.longitude };
  }
  if (clinic.openingHours) {
    clinicNode.openingHoursSpecification = clinic.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.weekdays,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  const doctor: Record<string, unknown> = {
    '@type': 'Person',
    '@id': doctorId,
    name: clinic.doctor.displayName,
    url: `${SITE_ORIGIN}/doctors/dr-sujay-m/`,
    jobTitle: 'Dermatologist',
    worksFor: { '@id': clinicId },
    hasCredential: clinic.doctor.degrees.map((name) => ({ '@type': 'EducationalOccupationalCredential', name })),
  };
  if (clinic.medicalRegistration) {
    doctor.identifier = { '@type': 'PropertyValue', name: clinic.medicalRegistration.council, value: clinic.medicalRegistration.number };
  }
  if (clinic.medicalSchool) {
    doctor.alumniOf = { '@type': 'CollegeOrUniversity', name: clinic.medicalSchool.school };
  }
  // Do not add clinic-controlled review/aggregateRating rich-result claims without third-party platform verification.
  return { '@context': 'https://schema.org', '@graph': [clinicNode, doctor] };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_ORIGIN).toString(),
    })),
  };
}
