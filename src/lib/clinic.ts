export const SITE_URL = "https://www.medicareskin.com";

export const clinic = {
  id: `${SITE_URL}/#clinic`,
  name: "Medicare Skin & Cosmetic Clinic",
  phone: "+919242855707",
  phoneDisplay: "+91 92428 55707",
  email: "medicareskin.cosmeticclinic@gmail.com",
  locationName: "Yelachenahalli, South Bengaluru",
  address: {
    streetAddress: "Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN"
  },
  doctor: {
    name: "Dr. (Mrs.) Sujay M",
    degrees: ["MBBS", "DDVL"],
    role: "Dermatologist & Cosmetologist",
    profileUrl: `${SITE_URL}/doctors/dr-sujay-m/`,
    profilePath: "/doctors/dr-sujay-m/"
  },
  areasServed: [
    "Yelachenahalli",
    "Kanakapura Road",
    "JP Nagar",
    "Jayanagar",
    "Banashankari",
    "Kumaraswamy Layout",
    "ISRO Layout",
    "South Bengaluru"
  ]
} as const;

// Add only coordinates confirmed against the real clinic pin.
export const verifiedGeo = process.env.CLINIC_LATITUDE && process.env.CLINIC_LONGITUDE ? {
  latitude: Number(process.env.CLINIC_LATITUDE),
  longitude: Number(process.env.CLINIC_LONGITUDE)
} : {
  latitude: 12.8953,
  longitude: 77.5684
};

// Add official clinic hours once checked.
export const verifiedHours = (() => {
  if (!process.env.CLINIC_HOURS_JSON) return null;
  try {
    return JSON.parse(process.env.CLINIC_HOURS_JSON);
  } catch {
    return null;
  }
})();

