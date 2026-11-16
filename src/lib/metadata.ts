import type { Metadata } from 'next';
import { indexingEnabled, site } from './site';

export function meta(title: string, description: string, path: string, approved = true): Metadata {
  const index = indexingEnabled() && approved;
  const canonicalUrl = `${site.url}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: 'en_IN'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: {
      index,
      follow: index
    }
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const physicianEntity = {
  '@type': 'Physician',
  '@id': `${site.url}/doctors/dr-sujay-m/#doctor`,
  name: site.doctor,
  honorificPrefix: 'Dr.',
  description: `Consultant Dermatologist & Dermatosurgeon with ${site.qualification} qualifications and 18+ years of clinical practice in South Bengaluru`,
  medicalSpecialty: 'https://schema.org/Dermatologic',
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'MBBS', credentialCategory: 'Degree' },
    { '@type': 'EducationalOccupationalCredential', name: 'DDVL', credentialCategory: 'Degree' }
  ],
  worksFor: { '@id': `${site.url}/#clinic` }
};

export const clinicEntity = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${site.url}/#clinic`,
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  priceRange: '₹₹',
  medicalSpecialty: 'https://schema.org/Dermatologic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560078',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.8953,
    longitude: 77.5684
  },
  areaServed: [
    'Yelachenahalli',
    'Kanakapura Road',
    'JP Nagar',
    'Jayanagar',
    'Banashankari',
    'Kumaraswamy Layout',
    'Padmanabhanagar',
    'BTM Layout',
    'Konanakunte',
    'South Bengaluru'
  ],
  hasMap: 'https://maps.google.com/?q=Medicare+Skin+and+Cosmetic+Clinic+Yelachenahalli',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:30',
      closes: '13:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:30',
      closes: '20:30'
    }
  ],
  knowsAbout: [
    'Clinical Dermatology',
    'Acne Scar Treatment',
    'MNRF Radiofrequency',
    'Subcision',
    'Melasma & Pigmentation Management',
    'Q-Switched Nd:YAG Laser',
    'HydraFacial Vortex Infusion',
    'Chemical Peels',
    'Laser Hair Reduction',
    'Growth Factor Therapy (GFT)',
    'PRP Hair Treatment',
    'Dermatology in South Bengaluru'
  ],
  employee: { '@id': `${site.url}/doctors/dr-sujay-m/#doctor` }
};

export function breadcrumbs(parts: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: parts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      item: `${site.url}${p.path}`
    }))
  };
}
