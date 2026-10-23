# Medicare Skin feature implementation matrix

This software is an IMPLEMENTATION FOUNDATION, not a claim that every operational requirement is live. The original checklist's 128 points cover software, clinic data, medical review, legal policies and third-party setup. A codebase alone cannot deliver all of them.

| Area | In repository | Clinic / developer still must supply |
|---|---|---|
| Design | Responsive design tokens, header, navigation, footer, mobile CTA bar | Actual brand assets; clinical photographs; Figma QA |
| Home | Patient-first information architecture and CTAs | Real trust signals and equipment information |
| Treatments | 25+ topic records, server-side pages, metadata, safety, FAQ | Clinician editorial approval, exact services, photos, pricing |
| Doctor | Physician profile template and entity markup | Registration number, approved biography and real photo |
| Local | Dedicated Yelachenahalli page, contact and maps search link | Confirm NAP/hours/GBP pin against business records |
| Booking | Multi-step request form, server validation, Turnstile verification, Supabase persistence | Supabase project and SQL, Turnstile keys, staff response process, CRM/calendar connection |
| Reporting | UTM fields stored with requests | GA4 key with consent, reporting dashboard, CRM conversion stages |
| Medical journal | Four draft articles, draft noindex behavior | Reviewer, references, publish dates, approvals |
| SEO | Metadata, JSON-LD, sitemap, robots, canonical and environment indexing guard | Production Search Console, redirects, source URL export, submit URLs |
| Results | Placeholder page refusing fabricated reviews/results | Proper informed consent, authentic imagery and verification |
| Technology | Safety page with no unsupported approvals | Equipment inventory, genuine pictures, correct device regulatory status |
| Price guidance | Pricing-factor content, no fictional numbers | Approved price catalog, finance terms for future calculator |
| Skin quiz | Non-diagnostic concern-selection navigator | Clinician-approved interactive decision tree before expansion |
| Portal | Not included: needs private authentication and data protection architecture | PMS/API, access control, encryption, audit logs, legal review |
| WhatsApp | One-click enquiry link | Official Business Platform for automated reminders after opt-in |
| Security | Security response headers, server-only key access, RLS schema, captcha | Upstash rate-limit keys, WAF, security testing, backups, retention and privacy program |
| SEO analytics | Sitemap and site search structure | Measurement, local rankings, actual keyword research, competitor monitoring |

**Do not flip service `available: true` without confirming the real clinical service and obtaining content approval.**
**Do not set `NEXT_PUBLIC_ALLOW_INDEXING=true` until production launch, audit and canonical domain configuration.**
**Website policies are templates requiring legal approval.**

Price planner code lives in `src/components/CostEstimator.tsx` with an **empty** approved pricing array in `src/lib/pricing.ts`. No price is displayed without explicit tariff approval.
