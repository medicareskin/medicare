import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import SEOHead from '../components/SEOHead';
import {
  MapPin,
  Navigation,
  Phone,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Star,
  Clock,
  Train,
  Car,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function LocalSeoPage({ initialLocality = 'kanakapura-road', onOpenBooking, onNavigatePage }) {
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (initialLocality) {
      setSelectedLocality(initialLocality);
    }
  }, [initialLocality]);

  const localities = [
    {
      id: 'yelachenahalli',
      slug: '/dermatologist-yelachenahalli/',
      name: 'Yelachenahalli & Jyothi Layout',
      headline: 'Dermatologist in Yelachenahalli & Jyothi Layout, South Bengaluru',
      tagline: 'Directly at Yelachenahalli Metro Station, Kanakapura Main Road',
      distance: '0.1 km (1 min walk from Yelachenahalli Metro Station Gate 2)',
      commuteInfo: '1 minute walk from Yelachenahalli Metro (Green Line). Dedicated customer parking available right outside the clinic.',
      landmark: 'Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout',
      intro: 'Medicare Skin & Cosmetic Clinic is the neighborhood dermatology hub for Yelachenahalli, Jyothi Layout, and Kanakapura Road. Senior Dermatologist Dr. Sujay M (MBBS, DDVL) provides clinical expertise in melasma, acne scar reconstruction, HydraFacial skin hydration, Q-switched laser toning, and trichology with over 18 years of dedicated practice.',
      treatmentsAvailable: [
        'Q-Switched Nd:YAG Laser Toning for Melasma & Pigmentation',
        'HydraFacial Skin Glow & Deep Hydration Treatment',
        'Acne & Acne Scar Revision (Subcision + Fractional RF)',
        'US-FDA Diode Laser Permanent Hair Reduction',
        'Medical Chemical Peels & Radiance Glow',
        'Growth Factor Hair Restoration (GFT & PRP)'
      ],
      whyUs: [
        'Direct 1-minute walk from Yelachenahalli Metro Station with dedicated parking',
        'Led by Dr. Sujay M (MBBS, DDVL) with 18+ years clinical excellence',
        'US-FDA approved laser technology calibrated for South Asian skin tones',
        'Over 10,100+ proven procedures with 5.0 Google Star Rating'
      ],
      localFaqs: [
        {
          q: 'Where is Medicare Skin Clinic located in Yelachenahalli?',
          a: 'Medicare Skin & Cosmetic Clinic is located at Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, Yelachenahalli, South Bengaluru 560078. It is just a 1-minute walk from Yelachenahalli Metro Station on the Green Line.'
        },
        {
          q: 'Is parking available at the clinic in Yelachenahalli?',
          a: 'Yes, dedicated 2-wheeler and 4-wheeler parking spaces are available directly in front of the clinic for our patients.'
        },
        {
          q: 'Who is the chief dermatologist at Medicare Skin Clinic in Yelachenahalli?',
          a: 'Dr. (Mrs.) Sujay M, MBBS, DDVL, an alumnus of Bangalore Medical College with over 18 years of clinical dermatology experience, personally oversees all consultations and procedures.'
        }
      ]
    },
    {
      id: 'kanakapura-road',
      slug: '/dermatologist-kanakapura-road/',
      name: 'Kanakapura Main Road',
      headline: 'Dermatologist and Skin Clinic on Kanakapura Road, Bangalore',
      tagline: 'Premier Dermatology & Cosmetic Care Directly at Yelachenahalli Metro Station',
      distance: '0.2 km (2 mins walking from Yelachenahalli Metro Gate 2)',
      commuteInfo: 'Easily accessible via Kanakapura Main Road corridor. Connected to Konanakunte Cross, JP Nagar, and NICE Road interchange.',
      landmark: 'Kanakapura Main Road, Opposite Metro Pillar 110-120 vicinity',
      intro: 'Medicare Skin & Cosmetic Clinic is Kanakapura Road’s trusted dermatology center, located right on Kanakapura Main Road near Yelachenahalli Metro Station. Under the leadership of Dr. Sujay M (MBBS, DDVL), our clinic offers comprehensive solutions for melasma, HydraFacial glow, acne scars, hair loss, and laser treatments.',
      treatmentsAvailable: [
        'Q-Switched Nd:YAG Laser Toning for Melasma & Dark Spots',
        'HydraFacial 5-Step Deep Cleansing & Antioxidant Hydration',
        'Acne & Acne Scar Revision (Subcision + Fractional RF)',
        'US-FDA Diode Laser Hair Removal',
        'Chemical Peels & Instant Skin Glow',
        'Growth Factor Hair Restoration (GFT)'
      ],
      whyUs: [
        'Prime location on Kanakapura Main Road with ample parking & metro access',
        '18+ Years of dermatological experience by Dr. Sujay M (Bangalore Medical College)',
        'US-FDA approved laser technology for all Indian skin types',
        'Over 10,100+ procedures successfully completed with 5.0 Google Rating'
      ],
      localFaqs: [
        {
          q: 'Why choose Medicare Skin Clinic on Kanakapura Road?',
          a: 'Dr. Sujay M offers honest, doctor-led clinical dermatology without commercial pressure. With 18+ years of expertise and US-FDA approved lasers, patients receive personalized, medically sound treatments on Kanakapura Road.'
        },
        {
          q: 'How do I reach the clinic from NICE Road junction on Kanakapura Road?',
          a: 'From NICE Road interchange, head north towards Bengaluru city center along Kanakapura Main Road for approximately 4.5 km. The clinic is on your left near Yelachenahalli Metro Station.'
        }
      ]
    },
    {
      id: 'jp-nagar',
      slug: '/dermatologist-jp-nagar/',
      name: 'JP Nagar (Phases 1-8)',
      headline: 'Dermatologist near JP Nagar (Phases 1-8), Bangalore',
      tagline: 'Top-Rated Skin Specialist & Aesthetic Clinic accessible within 5-10 mins from JP Nagar',
      distance: '1.2 km (5 mins drive from JP Nagar 6th/7th Phase)',
      commuteInfo: '5 minutes drive via 100 Feet Ring Road / Kanakapura Road, or 1 stop on the Green Line Metro from Jaya Prakash Nagar Metro Station.',
      landmark: 'Direct connection via Kanakapura Main Road & Metro',
      intro: 'Residents of JP Nagar searching for an expert dermatologist near JP Nagar 1st to 8th Phase find Medicare Skin & Cosmetic Clinic to be the most convenient and highly rated choice. Situated just minutes away near Yelachenahalli Metro Station, Dr. Sujay M provides personalized clinical dermatology and non-surgical aesthetic transformations.',
      treatmentsAvailable: [
        'Q-Switched Laser for Melasma & Post-Acne Pigmentation',
        'HydraFacial Skin Rejuvenation for Immediate Glow',
        'Comprehensive Acne & Melasma Treatment',
        'Painless Facial & Body Laser Hair Reduction',
        'Hair Loss & Scalp Health Solutions (PRP & GFT)',
        'Eczema, Psoriasis & Allergy Management'
      ],
      whyUs: [
        'Only 5 minutes drive from JP Nagar 6th Phase signal',
        '5.0 Rated Clinic with over 420K+ lives touched',
        '100% medically supervised procedures by senior dermatologist Dr. Sujay M',
        'Transparent pricing with zero hidden consultation fees'
      ],
      localFaqs: [
        {
          q: 'How far is Medicare Skin Clinic from JP Nagar 6th Phase?',
          a: 'The clinic is only 1.2 km (about a 5-minute drive) from JP Nagar 6th Phase via Kanakapura Main Road.'
        },
        {
          q: 'Can I take the metro from JP Nagar to the clinic?',
          a: 'Yes, take the Green Line Metro from Jaya Prakash Nagar station south towards Yelachenahalli or Silk Institute. Yelachenahalli is just 1-2 stops away, and the clinic is 100 meters from the exit.'
        }
      ]
    },
    {
      id: 'banashankari',
      slug: '/skin-clinic-banashankari/',
      name: 'Banashankari (BSK 2nd & 3rd Stage)',
      headline: 'Skin and Cosmetic Treatments Accessible from Banashankari, Bangalore',
      tagline: 'Advanced Clinical & Laser Dermatology for Banashankari 2nd, 3rd Stage & BSK 6th Stage',
      distance: '2.2 km (8 mins drive via Outer Ring Road / Kanakapura Road)',
      commuteInfo: '2 metro stops from Banashankari TTMC Metro Station to Yelachenahalli Metro Station on the Green Line (under 6 minutes ride).',
      landmark: 'Connected via Green Line Metro (Banashankari to Yelachenahalli)',
      intro: 'Medicare Skin & Cosmetic Clinic serves Banashankari residents seeking top-tier skin, hair, and cosmetic treatments. Just 2 metro stops from Banashankari Metro Station or an 8-minute drive along Kanakapura Main Road, our clinic is equipped with cutting-edge lasers and FDA-approved cosmetic devices for visible, long-lasting results.',
      treatmentsAvailable: [
        'Q-Switched Laser Toning & Sun Spot Removal',
        'HydraFacial Hydradermabrasion & Pore Extraction',
        'Fractional Laser Acne Scar Smoothing',
        'Medical Grade Chemical Peels for Glow & Pigmentation',
        'Painless Diode Laser Permanent Hair Reduction',
        'Growth Factor Hair Fall Therapy'
      ],
      whyUs: [
        'Direct 2-stop Green Line Metro commute from Banashankari TTMC',
        'Expert guidance by Dr. Sujay M (MBBS, DDVL - 18+ Years Experience)',
        'Clean, hygienic, state-of-the-art procedure rooms',
        'Personalized treatment schedules tailored to your routine'
      ],
      localFaqs: [
        {
          q: 'How do Banashankari residents commute to Medicare Skin Clinic?',
          a: 'The fastest way is taking the Namma Metro Green Line from Banashankari Station directly to Yelachenahalli Station (6 minutes). The clinic is 1 minute on foot from the station.'
        }
      ]
    },
    {
      id: 'jayanagar',
      slug: '/dermatologist-jayanagar/',
      name: 'Jayanagar (4th, 7th & 9th Block)',
      headline: 'Dermatologist & Aesthetic Consultation for Jayanagar Residents',
      tagline: 'Trusted Skin Care & Cosmetic Excellence Conveniently Accessible for Jayanagar 4th, 7th & 9th Block',
      distance: '3.1 km (10 mins via Metro from Jayanagar Station)',
      commuteInfo: 'Direct Green Line Metro line from Jayanagar 4th Block or South End Circle to Yelachenahalli Station without changing trains.',
      landmark: 'Direct Green Line Metro line to Yelachenahalli Station',
      intro: 'For Jayanagar residents desiring expert skin and hair consultation without navigating congested city traffic, Medicare Skin & Cosmetic Clinic offers effortless access right off Yelachenahalli Metro Station on Kanakapura Main Road. Dr. Sujay M (MBBS, DDVL) brings over 18 years of clinical expertise to address complex dermatological conditions and aesthetic refinements.',
      treatmentsAvailable: [
        'Q-Switched Laser for Melasma & Pigmentation',
        'HydraFacial Skin Rejuvenation for Dull & Dehydrated Skin',
        'Dermatologist-Led Pigmentation & Melasma Reversal',
        'Precision Subcision & Microneedling RF for Acne Scars',
        'US-FDA Diode Laser Hair Removal',
        'Growth Factor Scalp Rejuvenation'
      ],
      whyUs: [
        'Quick 10-minute metro ride from Jayanagar Metro Station',
        'Trusted by thousands of Jayanagar families for over 18 years',
        'Customized skin care regimen tailored to South Asian skin tones',
        'Consistently rated 5.0 Stars across all patient reviews'
      ],
      localFaqs: [
        {
          q: 'Why do Jayanagar patients prefer Dr. Sujay M?',
          a: 'Dr. Sujay M completed her dermatological training at prestigious Bangalore Medical College and has served South Bengaluru for nearly two decades, offering patients unbiased medical advice.'
        }
      ]
    },
    {
      id: 'kumaraswamy-layout',
      slug: '/dermatologist-kumaraswamy-layout/',
      name: 'Kumaraswamy Layout & ISRO Layout',
      headline: 'Dermatologist near Kumaraswamy Layout & ISRO Layout, South Bengaluru',
      tagline: 'Leading Skin & Hair Clinic Just 1.5 km from Dayananda Sagar Institutions (DSI)',
      distance: '1.5 km (4 mins drive via 15th Cross Road / Kanakapura Road)',
      commuteInfo: 'Convenient 4-minute commute from ISRO Layout and Kumaraswamy Layout 1st & 2nd Stage via Kanakapura Main Road.',
      landmark: 'Near Dayananda Sagar College and Yelachenahalli Metro Station',
      intro: 'Medicare Skin & Cosmetic Clinic is the neighborhood clinical destination for residents and students of Kumaraswamy Layout, ISRO Layout, and Dayananda Sagar Institutions. From acute acne flare-ups and acne scar revision to HydraFacial treatments and laser hair removal, Dr. Sujay M provides evidence-based aesthetic and medical dermatology.',
      treatmentsAvailable: [
        'Q-Switched Nd:YAG Laser for Acne Marks & Tan Removal',
        'HydraFacial Deep Pore Clarification for Young & Sensitive Skin',
        'Acne Management & Chemical Peels for College Students & Professionals',
        'Growth Factor Therapy for Early Hair Thinning & Hair Fall',
        'Laser Hair Removal for Face, Underarms & Full Body'
      ],
      whyUs: [
        'Only 4 minutes from Kumaraswamy Layout police station and DSI campus',
        'Affordable, transparent pricing tailored for students and families',
        'Evidence-based acne protocols with no unnecessary oral medications',
        'Weekend and evening appointments available until 7:00 PM'
      ],
      localFaqs: [
        {
          q: 'Is Medicare Skin Clinic close to Dayananda Sagar College in Kumaraswamy Layout?',
          a: 'Yes, it is only 1.5 km away (under 5 minutes by auto or bike) straight down to Kanakapura Main Road at Yelachenahalli.'
        }
      ]
    },
    {
      id: 'konanakunte',
      slug: '/dermatologist-konanakunte/',
      name: 'Konanakunte & Anjanapura',
      headline: 'Dermatologist near Konanakunte Cross & Anjanapura, Bangalore',
      tagline: 'Premier Skin Clinic near Forum South Bangalore Mall & Konanakunte Cross Metro',
      distance: '1.0 km (3 mins drive or 1 metro stop to Yelachenahalli)',
      commuteInfo: '1 metro stop north from Konanakunte Cross Metro Station or a 3-minute drive along Kanakapura Main Road.',
      landmark: 'Near Forum South Bangalore Mall / Konanakunte Cross junction',
      intro: 'Serving the rapidly growing residential communities of Konanakunte, Anjanapura, and Doddakallasandra, Medicare Skin & Cosmetic Clinic provides top-tier dermatology care just 3 minutes from Konanakunte Cross. Dr. Sujay M offers advanced laser toning for melasma, HydraFacial skin hydration, and medically proven hair loss therapies.',
      treatmentsAvailable: [
        'Q-Switched Laser Toning for Melasma & Pigmentation',
        'HydraFacial Skin Rejuvenation for Immediate Radiance',
        'Diode Laser Hair Reduction for Permanent Smoothness',
        'Subcision and Microneedling RF for Stubborn Acne Scars',
        'Eczema, Psoriasis & Fungal Skin Infections Treatment'
      ],
      whyUs: [
        'Located just 1 metro stop north of Konanakunte Cross',
        'Convenient for shoppers and residents near Forum South Bangalore Mall',
        'Complete medical and cosmetic dermatology under one roof',
        'Friendly, compassionate care with 18+ years track record'
      ],
      localFaqs: [
        {
          q: 'How close is the clinic to Forum South Bangalore Mall in Konanakunte?',
          a: 'The clinic is only 1 km north along Kanakapura Main Road from Forum South Bangalore Mall, directly near Yelachenahalli Metro Station.'
        }
      ]
    },
    {
      id: 'padmanabhanagar',
      slug: '/dermatologist-padmanabhanagar/',
      name: 'Padmanabhanagar & Uttarahalli',
      headline: 'Dermatologist near Padmanabhanagar & Uttarahalli, Bangalore',
      tagline: 'Comprehensive Skin, Hair & Laser Clinic Accessible via Kadirenahalli Underpass',
      distance: '2.5 km (8 mins drive via Outer Ring Road & Kanakapura Road)',
      commuteInfo: 'Quick 8-minute drive via Kadirenahalli underpass and Kanakapura Main Road directly to Yelachenahalli.',
      landmark: 'Near Deve Gowda Petrol Bunk / Kadirenahalli Underpass',
      intro: 'Families in Padmanabhanagar, Uttarahalli, and Chikkallasandra trust Medicare Skin & Cosmetic Clinic for professional dermatological care. Located just a short drive down Kanakapura Road near Yelachenahalli Metro Station, Dr. Sujay M provides patient-centered solutions for complex skin allergies, melasma, acne, and anti-aging treatments.',
      treatmentsAvailable: [
        'Q-Switched Laser Melasma & Sun Damage Management',
        'HydraFacial Gentle Exfoliation for Sensitive Skin',
        'Acne Scars, Keloids & Cyst Treatments',
        'Growth Factor Hair Restoration (PRP / GFT)',
        'Anti-Wrinkle Injections & Dermal Fillers'
      ],
      whyUs: [
        'Direct 8-minute commute without heavy city traffic',
        'Senior doctor consultation with zero junior resident handoffs',
        'State-of-the-art US-FDA certified laser systems',
        'Convenient appointment scheduling via phone and WhatsApp'
      ],
      localFaqs: [
        {
          q: 'What is the easiest route from Padmanabhanagar to Medicare Skin Clinic?',
          a: 'Take the route through Kadirenahalli underpass onto Kanakapura Main Road and drive south for 1.8 km to Yelachenahalli Metro Station.'
        }
      ]
    },
    {
      id: 'btm-layout',
      slug: '/dermatologist-btm-layout/',
      name: 'BTM Layout & Silk Board Corridor',
      headline: 'Dermatologist accessible from BTM Layout & Silk Board, Bangalore',
      tagline: 'Leading Skin Specialist Accessible via Outer Ring Road & Green Line Metro',
      distance: '3.8 km (12 mins drive via Outer Ring Road)',
      commuteInfo: '12 minutes drive via Outer Ring Road or easily accessible from BTM 1st and 2nd Stage via Jayadeva / Kanakapura Road junction.',
      landmark: 'Outer Ring Road to Kanakapura Main Road corridor',
      intro: 'For IT professionals and families living in BTM Layout (1st & 2nd Stage), Medicare Skin & Cosmetic Clinic offers world-class laser and cosmetic dermatology without the exorbitant corporate hospital charges. Senior Dermatologist Dr. Sujay M delivers results-oriented care for dark spots, uneven pigmentation, acne scars, and hair loss.',
      treatmentsAvailable: [
        'Q-Switched Nd:YAG Laser for Stubborn Pigmentation & Melasma',
        'HydraFacial Glow Facial for Pollution & Stress Relief',
        'Diode Laser Hair Reduction for Working Professionals',
        'Chemical Peels & Instant Brightening Before Events',
        'Platelet-Rich Plasma (PRP) & Growth Factor Hair Therapy'
      ],
      whyUs: [
        'Evening consultation hours up to 7:00 PM for working tech professionals',
        'Fast procedure times with zero downtime for busy schedules',
        'Proven outcomes backed by hundreds of 5-star patient testimonials',
        'Honest clinical guidance with zero aggressive sales pitches'
      ],
      localFaqs: [
        {
          q: 'Can BTM Layout residents book evening appointments?',
          a: 'Yes, Medicare Skin & Cosmetic Clinic is open until 7:00 PM from Monday to Saturday to accommodate busy working professionals.'
        }
      ]
    }
  ];

  const currentLocality = localities.find(l => l.id === selectedLocality) || localities[0];

  const handleLocalityChange = (locId) => {
    setSelectedLocality(locId);
    const loc = localities.find(l => l.id === locId);
    if (loc && typeof window !== 'undefined') {
      window.history.pushState({ locality: locId }, '', loc.slug);
    }
  };

  // Structured Data Schema for LocalBusiness / MedicalClinic
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': `Medicare Skin & Cosmetic Clinic - ${currentLocality.name}`,
    'description': currentLocality.intro,
    'url': `https://www.medicareskin.com${currentLocality.slug}`,
    'telephone': '+91-9242855707',
    'medicalSpecialty': ['Dermatology', 'CosmeticDermatology'],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '560078',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 12.8953,
      'longitude': 77.5684
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': currentLocality.name
    },
    'physician': {
      '@type': 'Physician',
      'name': 'Dr. Sujay M',
      'medicalSpecialty': 'Dermatology',
      'hasCredential': 'MBBS, DDVL'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'reviewCount': '285'
    }
  };

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      {/* Dynamic SEO, AEO & GEO Metadata Manager */}
      <SEOHead
        title={currentLocality.headline}
        description={`${currentLocality.intro.slice(0, 155)}... Consult Dr. Sujay M (MBBS, DDVL) near Yelachenahalli Metro.`}
        keywords={`Dermatologist in ${currentLocality.name}, Skin Clinic ${currentLocality.name}, Melasma Treatment ${currentLocality.name}, HydraFacial ${currentLocality.name}, Dr Sujay M, South Bengaluru`}
        canonicalUrl={`https://www.medicareskin.com${currentLocality.slug}`}
        schemaData={localSchema}
      />

      <div className="container">
        {/* Locality Selector Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 36px' }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            color: '#942876',
            padding: '8px 22px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: '700',
            display: 'inline-block',
            marginBottom: '14px',
            boxShadow: '0 4px 14px rgba(148, 40, 118, 0.08)'
          }}>
            📍 South Bangalore Local Dermatology &amp; Laser Hub
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '38px', color: '#153F39', marginBottom: '14px', lineHeight: '1.25' }}>
            {currentLocality.headline}
          </h1>
          <p style={{ fontSize: '16px', color: '#942876', fontWeight: '600', marginBottom: '12px' }}>
            {currentLocality.tagline}
          </p>
          <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: '1.75' }}>
            {currentLocality.intro}
          </p>
        </div>

        {/* Locality Navigation Pills (Horizontal Scrollable Grid) */}
        <div className="category-tags-row" style={{ marginBottom: '36px', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
          {localities.map((loc) => (
            <button
              key={loc.id}
              className={`category-tag-btn ${selectedLocality === loc.id ? 'active' : ''}`}
              onClick={() => handleLocalityChange(loc.id)}
              style={{
                fontSize: '13px',
                padding: '9px 16px',
                cursor: 'pointer',
                borderRadius: '24px',
                fontWeight: selectedLocality === loc.id ? '700' : '500'
              }}
            >
              📍 {loc.name}
            </button>
          ))}
        </div>

        {/* Locality Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
          {/* Card 1: Key Info & Why Choose */}
          <div className="location-card-box" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFB800', marginBottom: '16px', fontSize: '14px', fontWeight: '700' }}>
                <Star fill="#FFB800" size={18} /> 5.0 Rating | 18+ Years Experience | 10.1K+ Procedures
              </div>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '26px', color: '#153F39', marginBottom: '16px' }}>
                Why Patients from {currentLocality.name} Choose Dr. Sujay M
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                {currentLocality.whyUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#5C5268', lineHeight: '1.5' }}>
                    <CheckCircle2 color="#942876" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid #F0E6EE' }}>
              <button className="btn-primary" onClick={onOpenBooking} style={{ background: '#942876' }}>
                <Calendar size={18} /> Book Consultation
              </button>
              <a href="https://maps.google.com/?q=Medicare+Skin+Clinic+Yelachenahalli+Bangalore" target="_blank" rel="noreferrer" className="btn-secondary" style={{ color: '#2B1B4D' }}>
                <Navigation size={16} /> Get Directions
              </a>
              <a href={`tel:${CLINIC_INFO.rawPhone}`} className="btn-secondary" style={{ color: '#942876', borderColor: '#942876' }}>
                <Phone size={16} /> Call Clinic
              </a>
            </div>
          </div>

          {/* Card 2: Treatments & Local Commute Info */}
          <div className="location-card-box" style={{ padding: '36px', borderRadius: '24px' }}>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', marginBottom: '16px' }}>
              Treatments for {currentLocality.name} Residents
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '24px' }}>
              {currentLocality.treatmentsAvailable.map((treat, idx) => (
                <div key={idx} style={{ padding: '10px 14px', background: '#FBF4F8', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={16} color="#942876" /> {treat}
                </div>
              ))}
            </div>

            {/* Commute and Transit Box */}
            <div style={{ padding: '18px', background: '#F4EFF7', borderRadius: '16px', borderLeft: '4px solid #942876' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: '#942876', marginBottom: '6px' }}>
                <Train size={16} /> Commute &amp; Distance from {currentLocality.name}
              </div>
              <div style={{ fontSize: '14px', color: '#2B1B4D', fontWeight: '700', marginBottom: '4px' }}>
                {currentLocality.distance}
              </div>
              <p style={{ fontSize: '13px', color: '#5C5268', margin: '0 0 8px', lineHeight: '1.5' }}>
                {currentLocality.commuteInfo}
              </p>
              <div style={{ fontSize: '12px', color: '#7A6C82' }}>
                <strong>Landmark:</strong> {currentLocality.landmark}
              </div>
            </div>
          </div>
        </div>

        {/* Localized FAQ Section (AEO - Answer Engine Optimization) */}
        {currentLocality.localFaqs && currentLocality.localFaqs.length > 0 && (
          <div className="location-card-box" style={{ padding: '36px', borderRadius: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <HelpCircle size={22} color="#942876" />
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', color: '#153F39', margin: 0 }}>
                Frequently Asked Questions from {currentLocality.name} Patients
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentLocality.localFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #EBE0EA',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: isOpen ? '#FAF5F9' : '#FFFFFF',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#2B1B4D'
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={18} color="#942876" /> : <ChevronDown size={18} color="#942876" />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#5C5268', lineHeight: '1.65' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Embedded Map Section */}
        <div className="location-card-box" style={{ padding: '28px', borderRadius: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', color: '#153F39', margin: 0 }}>
                Find Medicare Skin &amp; Cosmetic Clinic on Google Maps
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#7A6C82' }}>
                Centrally situated at Yelachenahalli Metro Station, serving all of South Bangalore
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Medicare+Skin+Clinic+Yelachenahalli+Bangalore"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '13px', padding: '8px 18px' }}
            >
              <Navigation size={14} /> Open in Google Maps
            </a>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '380px' }}>
            <iframe
              title={`Medicare Skin Clinic - ${currentLocality.name}`}
              src={CLINIC_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
