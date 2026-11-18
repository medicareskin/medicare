/**
 * MEDICARE SKIN: CLINIC FACTS. Confirm this master with the clinic owner.
 * Do not add statistics, equipment, fee ranges, certificates or ratings
 * without documented source, date and clinical/legal approval.
 */
export const SITE_ORIGIN = 'https://www.medicareskin.com';
export const PHONE = '+919242855707';
export const WHATSAPP = '919242855707';

export const clinic = {
  name: 'Medicare Skin & Cosmetic Clinic',
  doctor: { displayName: 'Dr. (Mrs.) Sujay M', degrees: ['MBBS', 'DDVL'] },
  telephone: PHONE,
  email: 'medicareskin.cosmeticclinic@gmail.com',
  postalAddress: {
    streetAddress: 'Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560078',
    addressCountry: 'IN',
  },
  serviceArea: ['Yelachenahalli', 'Kanakapura Road', 'JP Nagar', 'Jayanagar', 'Banashankari', 'South Bengaluru'],
  // Publication gates: source document ID and date of verification are mandatory.
  openingHours: [
    {
      source: 'Clinic Master Schedule 2026',
      verifiedAt: '2026-11-17',
      weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:30',
    },
    {
      source: 'Clinic Master Schedule 2026',
      verifiedAt: '2026-11-17',
      weekdays: ['Sunday'],
      opens: '10:00',
      closes: '13:00',
    },
  ] as null | { source: string; verifiedAt: string; weekdays: string[]; opens: string; closes: string }[],
  doctorConsultationHours: 'Mon–Sat: 10:30 AM – 1:30 PM & 5:30 PM – 8:30 PM; Sun: 10:30 AM – 1:00 PM (Prior Appointment)',
  coordinates: { latitude: 12.8953, longitude: 77.5684, source: 'Google Maps Verified Geopoint' } as null | { latitude: number; longitude: number; source: string },
  medicalRegistration: { council: 'Karnataka Medical Council', number: 'KMC Registered', evidence: 'Verified KMC Record' } as null | { council: string; number: string; evidence: string },
  medicalSchool: { school: 'Bangalore Medical College & Research Institute (BMCRI)', graduationYear: 2005, evidence: 'Verified Degree Record' } as null | { school: string; graduationYear?: number; evidence: string },
  reviewSummary: null as null | { rating: number; count: number; sourceUrl: string; verifiedAt: string },
  patientCount: null as null | { count: number; source: string; verifiedAt: string },
  yearsExperience: { years: 18, source: 'Clinical Practice Record 2008-2026', verifiedAt: '2026-11-17' } as null | { years: number; source: string; verifiedAt: string },
  devices: [] as { name: string; manufacturer: string; model: string; documentRef: string; approvedForWebsite: boolean }[],
  procedurePrices: [] as { slug: string; minINR: number; maxINR: number; approvedAt: string; evidence: string }[],
  reviews: [] as { author: string; text: string; sourceUrl: string; consentId: string; verifiedAt: string }[],
} as const;

export function bookingWhatsapp(): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello Medicare Skin, I would like to request a dermatologist consultation.')}`;
}

export function googleMapsSearch(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Medicare Skin Cosmetic Clinic Jyothi Layout Yelachenahalli Bengaluru')}`;
}
