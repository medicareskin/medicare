export const site = {
  name: "Medicare Skin & Cosmetic Clinic",
  shortName: "Medicare Skin",
  url: "https://www.medicareskin.com",
  phoneDisplay: "+91 92428 55707",
  phoneE164: "+919242855707",
  whatsappNumber: "919242855707",
  // Confirm with Google Business Profile and clinic owner before production.
  email: "medicareskin.cosmeticclinic@gmail.com",
  address: "Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru 560078",
  addressShort: "Jyothi Layout, near Yelachenahalli Metro Station, Bengaluru 560078",
  doctor: "Dr. (Mrs.) Sujay M",
  qualification: "MBBS, DDVL",
  mapSearch: "Medicare Skin Cosmetic Clinic Jyothi Layout Yelachenahalli Bengaluru",
} as const;
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapSearch)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${encodeURIComponent(site.mapSearch)}&output=embed`;
export const indexingEnabled = () => process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true' && process.env.VERCEL_ENV === 'production' && process.env.NEXT_PUBLIC_SITE_URL === site.url;
export const medicalReviewApproved = process.env.NEXT_PUBLIC_CONTENT_APPROVED === 'true';
