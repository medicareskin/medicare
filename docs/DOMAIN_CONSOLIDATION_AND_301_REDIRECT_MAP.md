# Medicare Skin — Domain Consolidation & 301 Redirect Mapping Plan

**Production Canonical Domain:** `https://www.medicareskin.com`  
**Consolidation Date:** 30 October 2026  
**Applicable Items:** P0-01, P0-02, P0-03, P0-04, P0-05, P0-06, P0-07, P0-08

---

## 1. Executive Strategy & Single Production Identity

Medicare Skin previously maintained fragmented public presences across three separate web properties:
1. `medicareskin.com` (Original legacy website)
2. `medicareskin.in` (Secondary domain with duplicate content and obsolete claims)
3. `medicareskin.vercel.app` (Staging / preview build deployment)

### Decisions & Directives:
- **Canonical Production Identity:** `https://www.medicareskin.com` is established as the sole indexable production address.
- **Apex Domain Handling:** `https://medicareskin.com` permanently 301 redirects to `https://www.medicareskin.com`.
- **Legacy `.in` Domain:** Set up full-domain HTTP 301 permanent redirect rules at DNS/Cloudflare level routing all `medicareskin.in/*` requests directly to corresponding `https://www.medicareskin.com/*` paths.
- **Vercel Previews (`*.vercel.app`):** Retain `X-Robots-Tag: noindex, nofollow` on preview deployments to prevent index pollution and split-domain penalties.

---

## 2. One-to-One 301 Redirect Inventory

Every historical indexed URL from `.com` and `.in` is mapped to an authoritative, clinically reviewed hierarchical page. **No blind redirects to homepage.**

| Legacy / Historical URL | Target Canonical URL | HTTP Status | Rationale |
|---|---|---|---|
| `/q-switched-laser-melasma-pigmentation-bangalore/` | `/treatments/laser/q-switched-laser/` | `301 Permanent` | Maps old flat URL to hierarchical laser department URL. |
| `/q-switched-laser/` | `/treatments/laser/q-switched-laser/` | `301 Permanent` | Direct alias redirect. |
| `/pigmentation-treatment/` | `/treatments/skin/pigmentation-treatment/` | `301 Permanent` | Maps to clinically reviewed pigmentation guide. |
| `/hydrafacial-bangalore/` | `/treatments/aesthetics/hydrafacial/` | `301 Permanent` | Maps legacy landing page to aesthetics department. |
| `/hydrafacial/` | `/treatments/aesthetics/hydrafacial/` | `301 Permanent` | Direct alias redirect. |
| `/laser-hair-removal/` | `/treatments/laser/laser-hair-reduction/` | `301 Permanent` | Standardizes medical terminology (reduction vs removal). |
| `/hair-loss-treatment/` | `/treatments/hair/hair-loss-treatment/` | `301 Permanent` | Direct alias redirect. |
| `/chemical-peels/` | `/treatments/skin/chemical-peels/` | `301 Permanent` | Direct alias redirect. |
| `/prp-hair/` | `/treatments/hair/prp-gfc/` | `301 Permanent` | Maps platelet therapy to combined PRP/GFC clinical guide. |
| `/gfc-hair/` | `/treatments/hair/prp-gfc/` | `301 Permanent` | Maps growth factor therapy to combined PRP/GFC clinical guide. |
| `/growth-factor-therapy/` | `/treatments/hair/prp-gfc/` | `301 Permanent` | Replaces obsolete "plant based enzyme" legacy page. |
| `/eczema/` | `/treatments/medical-dermatology/eczema/` | `301 Permanent` | Direct alias redirect. |
| `/psoriasis/` | `/treatments/medical-dermatology/psoriasis/` | `301 Permanent` | Direct alias redirect. |
| `/vitiligo/` | `/treatments/medical-dermatology/vitiligo/` | `301 Permanent` | Direct alias redirect. |
| `/about-doctor/` | `/doctors/dr-sujay-m/` | `301 Permanent` | Maps to authenticated Dr. (Mrs.) Sujay M profile. |
| `/about-us/` | `/about/` | `301 Permanent` | Standardizes about page URL. |
| `/contact-us/` | `/contact/` | `301 Permanent` | Standardizes contact page URL. |
| `/book-appointment-online/` | `/book-appointment/` | `301 Permanent` | Standardizes consultation booking request URL. |
| `/skin-treatments/` | `/treatments/?category=Skin` | `301 Permanent` | Preserves category navigation intent. |
| `/hair-treatments/` | `/treatments/?category=Hair` | `301 Permanent` | Preserves category navigation intent. |
| `/laser-treatments/` | `/treatments/?category=Laser` | `301 Permanent` | Preserves category navigation intent. |
| `/cosmetic-treatments/` | `/treatments/?category=Aesthetics` | `301 Permanent` | Preserves category navigation intent. |

---

## 3. Implementation in Code

Configured in `next.config.ts`:
```typescript
async redirects() {
  return [
    {
      source: '/q-switched-laser-melasma-pigmentation-bangalore',
      destination: '/treatments/laser/q-switched-laser/',
      permanent: true,
    },
    {
      source: '/hydrafacial-bangalore',
      destination: '/treatments/aesthetics/hydrafacial/',
      permanent: true,
    },
    // ... complete table above
  ];
}
```

---

## 4. Google Search Console Migration Steps

1. **Verify All Properties:** Add `https://www.medicareskin.com`, `https://medicareskin.com`, `https://medicareskin.in`, and `https://www.medicareskin.in` in Google Search Console (Domain Property verification via DNS TXT record).
2. **Change of Address Tool:** In the `medicareskin.in` Search Console property, submit a Change of Address request designating `https://www.medicareskin.com` as the new destination.
3. **Submit Sitemap:** Submit `https://www.medicareskin.com/sitemap.xml` in GSC for immediate crawl queueing.
4. **Inspect High-Value URLs:** Use URL Inspection to test rendered HTML, canonical declaration, and schema markup on the 10 priority treatment URLs.
