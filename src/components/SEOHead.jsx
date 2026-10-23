import React, { useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

/**
 * SEOHead - Centralized SEO, AEO & GEO metadata controller
 * Dynamically updates document.title, meta tags, Open Graph, Twitter Cards,
 * canonical link, Geo metadata, and Schema.org JSON-LD structured data.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  schemaData
}) {
  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title
      ? `${title} | Medicare Skin & Cosmetic Clinic`
      : 'Dermatologist in South Bengaluru | Medicare Skin & Cosmetic Clinic | Dr. Sujay M';
    document.title = finalTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard SEO Tags
    const finalDescription = description ||
      'Dermatologist-led skin, hair, and laser care in South Bengaluru near Yelachenahalli Metro. Guided by Dr. Sujay M (MBBS, DDVL, 18+ yrs experience). Book a consultation.';
    setMetaTag('name', 'description', finalDescription);

    const defaultKeywords = 'Dermatologist South Bengaluru, Q-switched laser treatment in Bangalore, Melasma treatment Bangalore, HydraFacial treatment Bangalore, Skin Clinic Yelachenahalli, Dr Sujay M, Kanakapura Road Skin Clinic, JP Nagar Dermatologist, Banashankari Skin Clinic, Jayanagar Dermatologist';
    setMetaTag('name', 'keywords', keywords || defaultKeywords);

    // Canonical Link
    const finalCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://www.medicareskin.com/');
    setLinkTag('canonical', finalCanonical);

    // GEO Tags (Bengaluru, Karnataka)
    setMetaTag('name', 'geo.region', 'IN-KA');
    setMetaTag('name', 'geo.placename', 'Bengaluru, Karnataka, India');
    setMetaTag('name', 'geo.position', '12.8953;77.5684');
    setMetaTag('name', 'ICBM', '12.8953, 77.5684');

    // Dublin Core
    setMetaTag('name', 'DC.title', finalTitle);
    setMetaTag('name', 'DC.creator', 'Dr. Sujay M, MBBS, DDVL');
    setMetaTag('name', 'DC.coverage', 'Bengaluru, Karnataka, India');
    setMetaTag('name', 'DC.publisher', 'Medicare Skin & Cosmetic Clinic');

    // Open Graph
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:site_name', 'Medicare Skin & Cosmetic Clinic');
    setMetaTag('property', 'og:locale', 'en_IN');
    const finalOgImage = ogImage || 'https://www.medicareskin.com/images/q-switched-laser-pigmentation-treatment-bangalore.webp';
    setMetaTag('property', 'og:image', finalOgImage);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalOgImage);

    // Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('dynamic-page-schema');
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-page-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic script tag on unmount if needed
      const dynamicScript = document.getElementById('dynamic-page-schema');
      if (dynamicScript) dynamicScript.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData]);

  return null;
}
