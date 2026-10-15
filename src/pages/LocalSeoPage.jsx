import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Navigation, Phone, Calendar, CheckCircle2, ShieldCheck, Award, Star, Clock } from 'lucide-react';

export default function LocalSeoPage({ initialLocality = 'kanakapura-road', onOpenBooking }) {
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);

  const localities = [
    {
      id: 'kanakapura-road',
      slug: '/dermatologist-kanakapura-road/',
      name: 'Kanakapura Road',
      headline: 'Dermatologist and Skin Clinic on Kanakapura Road, Bangalore',
      tagline: 'Premier Dermatology & Cosmetic Care Directly at Yelachenahalli Metro Station',
      distance: '0.2 km (2 mins walking from Yelachenahalli Metro Gate 2)',
      landmark: 'Kanakapura Main Road, Opposite Metro Pillar',
      intro: 'Medicare Skin & Cosmetic Clinic is Kanakapura Road’s trusted dermatology center, located right on Kanakapura Main Road near Yelachenahalli Metro Station. Under the leadership of Dr. Sujay M (MBBS, DDVL), an experienced dermatologist with over 18+ years of clinical practice, our clinic offers comprehensive solutions for acne, pigmentation, hair loss, laser hair removal, and cosmetic skin care.',
      treatmentsAvailable: [
        'Acne & Acne Scar Revision (Subcision + Fractional RF)',
        'US-FDA Diode Laser Hair Removal',
        'Chemical Peels & Instant Skin Glow',
        'Growth Factor Hair Restoration (GFT)',
        'Anti-Wrinkle & Hyaluronic Dermal Fillers',
        'Surgical Vitiligo Punch Grafting'
      ],
      whyUs: [
        'Prime location on Kanakapura Main Road with ample parking & metro access',
        '18+ Years of dermatological experience by Dr. Sujay M (Bangalore Medical College)',
        'US-FDA approved laser technology for all Indian skin types',
        'Over 10,100+ procedures successfully completed with 5.0 Google Rating'
      ]
    },
    {
      id: 'jp-nagar',
      slug: '/dermatologist-jp-nagar/',
      name: 'JP Nagar',
      headline: 'Dermatologist near JP Nagar (Phases 1-8), Bangalore',
      tagline: 'Top-Rated Skin Specialist & Aesthetic Clinic accessible within 5-10 mins from JP Nagar',
      distance: '1.2 km (5 mins drive from JP Nagar 6th/7th Phase)',
      landmark: 'Direct connection via Kanakapura Main Road & Metro',
      intro: 'Residents of JP Nagar searching for an expert dermatologist near JP Nagar 1st to 8th Phase find Medicare Skin & Cosmetic Clinic to be the most convenient and highly rated choice. Situated just minutes away near Yelachenahalli Metro Station, Dr. Sujay M provides personalized clinical dermatology and non-surgical aesthetic transformations.',
      treatmentsAvailable: [
        'Comprehensive Acne & Melasma Treatment',
        'Painless Facial & Body Laser Hair Reduction',
        'Hair Loss & Scalp Health Solutions (PRP & GFT)',
        'Anti-Aging RF Skin Tightening',
        'Mole, Wart & Skin Tag Removal',
        'Eczema, Psoriasis & Allergy Management'
      ],
      whyUs: [
        'Only 5 minutes drive from JP Nagar 6th Phase signal',
        '5.0 Rated Clinic with over 420K+ lives touched',
        '100% medically supervised procedures by senior dermatologist Dr. Sujay M',
        'Transparent pricing with zero hidden consultation fees'
      ]
    },
    {
      id: 'banashankari',
      slug: '/skin-clinic-banashankari/',
      name: 'Banashankari',
      headline: 'Skin and Cosmetic Treatments Accessible from Banashankari, Bangalore',
      tagline: 'Advanced Clinical & Laser Dermatology for Banashankari 2nd, 3rd Stage & BSK 6th Stage',
      distance: '2.2 km (8 mins drive via Outer Ring Road / Kanakapura Road)',
      landmark: 'Connected via Green Line Metro (Banashankari to Yelachenahalli)',
      intro: 'Medicare Skin & Cosmetic Clinic serves Banashankari residents seeking top-tier skin, hair, and cosmetic treatments. Just 2 metro stops from Banashankari Metro Station or an 8-minute drive along Kanakapura Main Road, our clinic is equipped with cutting-edge lasers and FDA-approved cosmetic devices for visible, long-lasting results.',
      treatmentsAvailable: [
        'Fractional Laser Acne Scar Smoothing',
        'Medical Grade Chemical Peels for Glow & Pigmentation',
        'Painless Diode Laser Permanent Hair Reduction',
        'Growth Factor Hair Fall Therapy',
        'Vitiligo & Psoriasis Clinical Care',
        'Non-Surgical Face Contour & Dermal Fillers'
      ],
      whyUs: [
        'Direct 2-stop Green Line Metro commute from Banashankari TTMC',
        'Expert guidance by Dr. Sujay M (MBBS, DDVL - 18+ Years Experience)',
        'Clean, hygienic, state-of-the-art procedure rooms',
        'Personalized treatment schedules tailored to your routine'
      ]
    },
    {
      id: 'jayanagar',
      slug: '/dermatologist-jayanagar/',
      name: 'Jayanagar',
      headline: 'Dermatologist & Aesthetic Consultation for Jayanagar Residents',
      tagline: 'Trusted Skin Care & Cosmetic Excellence Conveniently Accessible for Jayanagar 4th, 7th & 9th Block',
      distance: '3.1 km (10 mins via Metro from Jayanagar Station)',
      landmark: 'Direct Green Line Metro line to Yelachenahalli Station',
      intro: 'For Jayanagar residents desiring expert skin and hair consultation without navigating congested city traffic, Medicare Skin & Cosmetic Clinic offers effortless access right off Yelachenahalli Metro Station on Kanakapura Main Road. Dr. Sujay M (MBBS, DDVL) brings over 18 years of clinical expertise to address complex dermatological conditions and aesthetic refinements.',
      treatmentsAvailable: [
        'Dermatologist-Led Pigmentation & Melasma Reversal',
        'Precision Subcision & Microneedling RF for Acne Scars',
        'US-FDA Diode Laser Hair Removal',
        'Growth Factor Scalp Rejuvenation',
        'Anti-Wrinkle Injections & Youth Restorative Fillers',
        'Clinical Allergy Patch Testing & Eczema Relief'
      ],
      whyUs: [
        'Quick 10-minute metro ride from Jayanagar Metro Station',
        'Trusted by thousands of Jayanagar families for over 18 years',
        'Customized skin care regimen tailored to South Asian skin tones',
        'Consistently rated 5.0 Stars across all patient reviews'
      ]
    },
    {
      id: 'areas-we-serve',
      slug: '/areas-we-serve/',
      name: 'ISRO Layout, BTM Layout & Surrounding Neighborhoods',
      headline: 'Areas We Serve: ISRO Layout, BTM Layout, Kumaraswamy Layout & Surrounding Neighborhoods',
      tagline: 'Comprehensive Local Dermatology Network Across South Bangalore Suburbs',
      distance: 'Serving ISRO Layout (1.0 km), BTM Layout (3.5 km), Kumaraswamy Layout (1.8 km)',
      landmark: 'Near Yelachenahalli Metro Station & Kanakapura Main Road Junction',
      intro: 'Medicare Skin & Cosmetic Clinic is proud to be the designated clinical dermatology home for patients across ISRO Layout, BTM Layout, Kumaraswamy Layout, Yelachenahalli, Konanakunte, and Anjanapura. Our clinic brings world-class skin and cosmetic treatments right to your neighborhood with minimal travel time.',
      treatmentsAvailable: [
        'Full Body & Facial Laser Hair Removal',
        'Acne, Pimple & Scar Management',
        'Hair Loss, Dandruff & Scalp GFT Therapy',
        'Skin Whitening & Anti-Pigmentation Peels',
        'Mole, Skin Tag & Cyst Removal',
        'Vitiligo Punch Grafting & Auto-Immune Skin Care'
      ],
      whyUs: [
        'Central South Bangalore hub accessible from all neighboring layouts',
        'Direct phone line (+91-92428 55707) and instant WhatsApp booking',
        'Evening clinic hours until 8:30 PM for working professionals',
        'Transparent consultation and affordable treatment plans'
      ]
    }
  ];

  const currentLocality = localities.find(l => l.id === selectedLocality) || localities[0];

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Locality Selector Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 40px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '8px 22px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '14px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            📍 South Bangalore Local Dermatology Guide
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', color: '#2B1B4D', marginBottom: '14px', lineHeight: '1.25' }}>
            {currentLocality.headline}
          </h1>
          <p style={{ fontSize: '16px', color: '#942876', fontWeight: '600', marginBottom: '12px' }}>
            {currentLocality.tagline}
          </p>
          <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: '1.7' }}>
            {currentLocality.intro}
          </p>
        </div>

        {/* Locality Navigation Pills */}
        <div className="category-tags-row" style={{ marginBottom: '40px', justifyContent: 'center' }}>
          {localities.map((loc) => (
            <button
              key={loc.id}
              className={`category-tag-btn ${selectedLocality === loc.id ? 'active' : ''}`}
              onClick={() => setSelectedLocality(loc.id)}
              style={{ fontSize: '14px', padding: '10px 18px' }}
            >
              📍 {loc.name}
            </button>
          ))}
        </div>

        {/* Locality Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', marginBottom: '50px' }}>
          {/* Card 1: Key Info & Why Choose */}
          <div className="location-card-box" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFB800', marginBottom: '16px', fontSize: '14px', fontWeight: '700' }}>
                <Star fill="#FFB800" size={18} /> 5.0 Rating | 18+ Years Experience | 10.1K+ Procedures
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#2B1B4D', marginBottom: '16px' }}>
                Why Patients from {currentLocality.name} Trust Dr. Sujay M
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
            </div>
          </div>

          {/* Card 2: Treatments & Local Accessibility */}
          <div className="location-card-box" style={{ padding: '36px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '16px' }}>
              Treatments Available for {currentLocality.name} Residents
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '24px' }}>
              {currentLocality.treatmentsAvailable.map((treat, idx) => (
                <div key={idx} style={{ padding: '10px 14px', background: '#FBF4F8', borderRadius: '10px', fontSize: '14px', fontWeight: '600', color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={16} color="#942876" /> {treat}
                </div>
              ))}
            </div>

            <div style={{ padding: '16px', background: '#F4EFF7', borderRadius: '12px', borderLeft: '4px solid #942876' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#942876', marginBottom: '4px' }}>
                📍 Travel & Distance Info
              </div>
              <div style={{ fontSize: '14px', color: '#2B1B4D', fontWeight: '600', marginBottom: '2px' }}>
                {currentLocality.distance}
              </div>
              <div style={{ fontSize: '12px', color: '#5C5268' }}>
                Landmark: {currentLocality.landmark}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="location-card-box" style={{ padding: '24px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '16px', textAlign: 'center' }}>
            Find Medicare Skin & Cosmetic Clinic on Google Maps
          </h3>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px' }}>
            <iframe
              title={`Medicare Skin Clinic - ${currentLocality.name}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3787720935544!2d77.5684724!3d12.8839846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1534b8bbbbbb%3A0x0!2sYelachenahalli%20Metro%20Station!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
