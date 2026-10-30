import type { MetadataRoute } from 'next';
import { indexingEnabled, site } from '@/lib/site';
import { treatments, categoryToSlug } from '@/lib/treatments';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled()) return [];
  const paths = [
    '/',
    '/about/',
    '/contact/',
    '/concerns/',
    '/treatments/',
    '/doctors/dr-sujay-m/',
    '/locations/yelachenahalli/',
    '/journal/',
    '/book-appointment/',
    '/patient-information/',
    '/medical-disclaimer/',
    '/treatment-cost-guide/',
    '/terms/',
    '/privacy-policy/',
  ];
  const treatmentUrls = treatments
    .filter((t) => t.available)
    .map((t) => `/treatments/${categoryToSlug(t.category)}/${t.slug}/`);
  const articleUrls = articles
    .filter((a) => a.approved)
    .map((a) => `/journal/${a.slug}/`);
  const filtered = [...paths, ...treatmentUrls, ...articleUrls];
  return filtered.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date('2026-10-30'),
    changeFrequency: 'monthly' as const,
    priority: p === '/' ? 1.0 : p.startsWith('/treatments/') ? 0.8 : 0.6,
  }));
}
