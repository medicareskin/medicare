import { SITE_ORIGIN } from './clinic-facts';

export const priorityTreatments = [
  { path: '/treatments/skin/pigmentation-treatment/', title: 'Pigmentation Treatment in South Bengaluru', service: false },
  { path: '/treatments/laser/q-switched-laser/', title: 'Q-Switched Laser Consultation in Bengaluru', service: true },
  { path: '/treatments/laser/laser-hair-reduction/', title: 'Laser Hair Reduction in Bengaluru', service: true },
  { path: '/treatments/hair/hair-loss-treatment/', title: 'Hair Loss Assessment in Bengaluru', service: false },
  { path: '/treatments/aesthetics/hydrafacial/', title: 'HydraFacial or Hydrodermabrasion Consultation', service: true },
  { path: '/treatments/skin/chemical-peels/', title: 'Chemical Peel Consultation in Bengaluru', service: true },
  { path: '/treatments/hair/prp-gfc/', title: 'PRP and GFC Hair Therapy Consultation', service: true },
  { path: '/treatments/medical-dermatology/eczema/', title: 'Eczema Consultation in Bengaluru', service: false },
  { path: '/treatments/medical-dermatology/psoriasis/', title: 'Psoriasis Consultation in Bengaluru', service: false },
  { path: '/treatments/medical-dermatology/vitiligo/', title: 'Vitiligo Consultation in Bengaluru', service: false },
] as const;

export const corePaths = [
  '/', '/treatments/', '/concerns/', '/doctors/dr-sujay-m/',
  '/book-appointment/', '/locations/yelachenahalli/',
  '/editorial-policy/', '/privacy-policy/',
  '/contact/', '/faqs/', '/journal/',
];

const csvSet = (value: string | undefined) =>
  new Set((value || '').split(',').map(s => s.trim()).filter(Boolean));

/** An explicit per-route approval; a global flag cannot approve medical copy. */
export function approvedTreatmentPaths(env: NodeJS.ProcessEnv = process.env) {
  const approved = csvSet(env.CLINICALLY_APPROVED_PATHS);
  const services = csvSet(env.VERIFIED_PROCEDURE_PATHS);
  return priorityTreatments.filter(p => approved.has(p.path) && (!p.service || services.has(p.path))).map(p => p.path);
}

/** Verify every core path exists before including it in the live sitemap. */
export function sitemapPaths(env: NodeJS.ProcessEnv = process.env) {
  const liveCore = csvSet(env.PUBLISHED_CORE_PATHS);
  return [...corePaths.filter(p => liveCore.size === 0 || liveCore.has(p)), ...approvedTreatmentPaths(env)];
}

export const absoluteCanonical = (path: string) => new URL(path, SITE_ORIGIN).toString();

export const isApprovedProductionHost = (host: string, env: NodeJS.ProcessEnv = process.env) =>
  host.toLowerCase().replace(/:\d+$/, '') === new URL(SITE_ORIGIN).hostname &&
  env.PUBLIC_LAUNCH_APPROVED === 'true';
