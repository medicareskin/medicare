# Medicare Skin — Mandatory Developer & Clinical Release Checklist
**October 2026 Release Gate | Medicare Skin & Cosmetic Clinic**  
*Target Domain:* https://www.medicareskin.com

---

## 1. Before Legal & Clinical Approval

- [ ] **Physician Identity Verification:** Verify name and spelling: Dr. (Mrs.) Sujay M, MBBS, DDVL; avoid male AI-generated physician photos.
- [ ] **Credentials Check:** Confirm medical registration, experience claims, and qualifications against internal Karnataka Medical Council records.
- [ ] **NAP Consistency:** Confirm clinic postal address, operating hours, and telephone (+91 92428 55707) against the live Google Business Profile and production footer.
- [ ] **Treatment Availability:** Verify each treatment is currently performed and supported by clinical training, consent SOP, and current equipment.
- [ ] **Device Status Accuracy:** Confirm the device make/model and correct regulatory status (FDA clearance and approval are not interchangeable).
- [ ] **Trademark Protection:** HydraFacial is trademarked; confirm real branded system/authorization, otherwise use "Hydrodermabrasion Facial".
- [ ] **No Unrealistic Guarantees:** No guaranteed permanent melasma cure, no zero-risk cosmetic laser, no guaranteed hair regrowth.
- [ ] **PRP vs GFC Integrity:** Claims of GFC superiority over PRP removed unless new robust clinical evidence supports them.
- [ ] **Advanced Therapy Scoping:** Psoriasis, eczema, and vitiligo references to advanced therapies (biologics, phototherapy, surgery) do not imply in-clinic availability if absent.
- [ ] **Regulatory Check for New Actives:** Regulatory approval and availability of vitiligo JAK creams (e.g. ruxolitinib) in India checked before any offer.
- [ ] **Authentic Clinical Photography:** Add real patient photographs only with documented informed consent and consistent conditions.
- [ ] **Zero Fabricated Social Proof:** Remove fictional prices, promotional offers, reviews, transformations, and clinical statistics.

---

## 2. Page Metadata & Content Architecture

- [ ] **Single H1 Hierarchy:** Use exactly one meaningful H1 matching search intent (not stuffed with every neighborhood).
- [ ] **Title & Description:** Set unique title (ideally 45–65 characters) and concise, compelling meta description.
- [ ] **Answer-First (AEO/GEO):** Put a direct, medically sound patient answer within the opening paragraphs (Quick Clinical Answer).
- [ ] **Visible Risks & Safety:** Keep risks, contraindications, recurrence, and limitations visible rather than buried.
- [ ] **Patient FAQs:** Include 8–12 relevant, non-duplicative patient questions per page (101 FAQs provided in library).
- [ ] **Clinical Byline:** Add byline only after genuine medical review; display date of publication and clinical update.
- [ ] **Topic Cluster Linking:** Link within the topical cluster and to the real doctor, clinic, and booking pages.
- [ ] **Citations & References:** Cite medical sources (AAD, DermNet NZ, PubMed, NHS) in a concise, transparent further-reading section.
- [ ] **Verified CTAs:** Validate that all public CTAs reflect real services and consultation appointment requests.
- [ ] **Educational Distinction:** Distinguish educational content from a procedure availability claim.

---

## 3. Search, AEO/GEO & Technical Performance

- [ ] **URL Audit:** Audit original domains (`.com`, `.in`, Vercel) in Google Search Console and export existing indexed pages.
- [ ] **301 Redirect Mapping:** 301 redirect retired URLs on a page-matched basis and confirm canonical tags point to hierarchical routes.
- [ ] **Crawlability:** SSR/SSG visible main content and crawlable internal links; no gated clinical pages.
- [ ] **SEO Essentials:** Canonical tags, OpenGraph images, and correct production-domain `sitemap.xml` and `robots.txt`.
- [ ] **Schema.org Structured Data:** Add accurate `MedicalClinic`, `Physician`, `BreadcrumbList`, and `MedicalWebPage` structured data.
- [ ] **No FAQ Rich Result Promises:** Do not promise FAQ rich snippet stars (Google retired the feature in 2026).
- [ ] **Image Optimization:** Optimize true alt text, descriptive image filenames, and modern responsive formats (`.webp`).
- [ ] **Core Web Vitals:** Verify LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 at 75th percentile where measurable.
- [ ] **Consent & Privacy:** Connect GA4/Search Console and booking CRM with user consent; omit diagnosis from advertising pixels.
- [ ] **Form & API Hardening:** Test form success, errors, rate limiting, and sensitive-data handling; never fake a confirmed appointment.
- [ ] **Cross-Device Testing:** Compare performance at 360px, 390px, 768px, 1024px, 1440px and verify assistive technology / keyboard navigation.

---

## 4. Measurement & Governance

- [ ] **Search Console Baseline:** Baseline Search Console impressions and clicks for each treatment cluster and variants (Bangalore vs Bengaluru).
- [ ] **True Query Demand:** Record top query families in real GSC rather than fabricate search volumes.
- [ ] **Conversion Tracking:** Track booking requests, contact phone taps, and attended consultations per landing page.
- [ ] **AI Citation Monitoring:** Monitor indexing, qualified patient inquiries, and actual AI referrals/citations where measurable.
