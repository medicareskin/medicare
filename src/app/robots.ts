import type { MetadataRoute } from 'next';
import { indexingEnabled, site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled()) {
    return {
      rules: {
        userAgent: '*',
        disallow:'/',
      },
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Explicit AI search discovery (ChatGPT Search, Perplexity, Claude Web)
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Claude-Web'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
