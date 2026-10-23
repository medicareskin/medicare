# Medicare Skin — Complete Responsive Next.js Website Foundation

**Target production domain:** https://www.medicareskin.com  
**Designed for:** Next.js 16 App Router, TypeScript, Vercel, Supabase Postgres, Cloudflare Turnstile, Upstash Redis.  
**Status:** Deployable architecture and code foundation. **Not a claim that all clinical/operational features are activated.**

## What is included

- Clinical-luxury responsive UI, desktop navigation/mobile hamburger, keyboard access, sticky mobile Call/WhatsApp/Book bar.
- Homepage, doctor profile, 25+ condition/procedure records, concern-based service browser, dedicated treatment pages, device-safety page, local Yelachenahalli page, contact, about, journal drafts, results transparency page and legal templates.
- Medical-content scaffolds for Q-switched laser/melasma and hydrodermabrasion, with appropriate safety warnings and flags that stop unverified procedures from being indexed.
- Four-step appointment **request** flow; server-side validation, Cloudflare Turnstile, Upstash rate limiting and Supabase persistence, optional operational notification via Resend. **Never pretends a time is available or booking is confirmed.**
- Explicit opt-in GA4 analytics, metadata, canonical, JSON-LD, sitemap and robots with safe staging/production indexing rules.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Preview pages work without credentials; **appointment submissions return HTTP 503 until secure services are configured**, by design. Do not change this fail-closed behavior to fake success.

## Configure booking (required before production)

1. Create an approved clinic-controlled Supabase project. In Supabase SQL editor, apply `supabase/001_appointments.sql`.
2. Set `SUPABASE_URL` and server-only `SUPABASE_SERVICE_ROLE_KEY` in Vercel environment settings. Never add service-role keys to `NEXT_PUBLIC_*` variables.
3. Create a Cloudflare Turnstile site + secret and enter `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
4. Setup Upstash Redis; enter `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and a long random `RATE_LIMIT_HASH_SECRET`. The API limits to five attempts/hour per salted IP hash. Add WAF at Vercel too.
5. Optional: configure Resend with `RESEND_API_KEY`, `FROM_EMAIL`, `OPERATIONS_EMAIL`. Alert email contains only the request reference, not patient details.
6. Test Turnstile failure, 503 failures, request storage, privacy access controls and clinic response SLA.
7. Assign authorized clinic staff to follow up requests; the portal is *not* a live scheduling backend and must not be advertised as one.
8. A CRM/calendar API integration can be added after written agreement on provider schema, security, patient opt-in, errors and booking capacity.

## Clinic data, images and approvals

- Confirm doctor identity, qualification, medical registration, experience, hours, exact Google Business Profile address, telephone and email in `src/lib/site.ts`.
- Replace photo placeholders with licensed authentic images, then use `next/image` and descriptive truthful alt text and dimensions. Never use illustrative male doctor photos or AI-generated before/after imagery as evidence.
- Review `src/lib/treatments.ts`: `available:false` makes a treatment page noindex and excludes it from the sitemap. Do **not** set true until clinical staff verify service/equipment and approve copy.
- `src/lib/articles.ts`: `approved:false` makes draft articles noindex. Approve and add true publication/review dates and medical references before indexing.
- Privacy and Terms are *legal drafts* and stay noindex; replace with lawyer-approved texts and change metadata when signed off.
- Do not insert claims about US FDA approval, review totals, free consultations, treatment prices, rankings, celebrity endorsements or guaranteed results unless verified.

## Indexing and domain migration

- Before launch, inspect old `.com` and `.in` URLs and export Search Console/backlinks. Create a **manual URL-to-URL redirect map**. Do not enable blanket redirects or lose ranking pages.
- Preview Vercel projects: keep `NEXT_PUBLIC_ALLOW_INDEXING=false`. In the actual production deployment, set:

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.medicareskin.com
NEXT_PUBLIC_ALLOW_INDEXING=true
```

- `src/lib/site.ts` additionally checks `VERCEL_ENV=production`; previews remain `noindex`. `app/robots.ts` disallows preview crawling and `app/sitemap.ts` emits only when indexing enabled.
- Verify every canonical, sitemap, heading and search snippet through Google Search Console, along with schema validator and live-page inspection.
- See `docs/CONTENT_AND_MIGRATION.md` and `docs/DEPLOYMENT_CHECKLIST.md`.

## QA

This workspace could verify TypeScript parsing and built-in smoke tests, but could not install npm dependencies for an end-to-end build (package registry access timed out). The deployment team **must** run `npm install`, `npm run typecheck`, `npm run build` and browser acceptance tests before using the site.


```bash
npm run typecheck
npm test
npm run build
npm run preflight # must fail until all clinic approvals and credentials are present
```

Test at widths 360, 390, 768, 1024 and 1440; target LCP <=2.5s, INP <=200ms and CLS <=0.1 (actual real-user 75th percentile). The website is not guaranteed to rank #1; rankings and AI referrals depend on competition and independently measured results.

## Advanced features not automatically made live

- Guided concern navigation is implemented and non-diagnostic; **camera-based AI diagnosis is not**.
- Price information is a safe guideline page; interactive quote generation requires an approved tariff feed.
- Patient portal needs SSO/authentication, audit logs, access policy and approved PMS integration; a mock login is deliberately excluded.
- Automated SMS/WhatsApp reminders need official Business Platform integration and explicit patient consent.
- Actual Google review widgets and before/after galleries must use genuine verified data.

See `docs/FEATURE_MATRIX.md` for exact delivered versus pending capabilities, and `docs/DEPLOYMENT_CHECKLIST.md` for acceptance criteria.
