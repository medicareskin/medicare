/**
 * QXL Diagnostics — AI & Search Engine Crawler Governance
 * Provides standardized robots.txt configuration and crawler decision tree.
 */

export const CRAWLER_POLICY = {
  // Conversational Search Bots (Must Allow for discovery & real-time citation)
  searchBots: [
    { name: "Googlebot", purpose: "Google Search indexing & AI Overviews", allow: true },
    { name: "Bingbot", purpose: "Bing Search & Copilot indexing", allow: true },
    { name: "OAI-SearchBot", purpose: "ChatGPT Search indexation & live linking", allow: true },
    { name: "ChatGPT-User", purpose: "ChatGPT user-initiated real-time browsing", allow: true },
    { name: "PerplexityBot", purpose: "Perplexity search engine answer generation", allow: true },
    { name: "Claude-Web", purpose: "Claude real-time web-enabled search", allow: true },
    { name: "Applebot", purpose: "Apple Intelligence & Siri search", allow: true }
  ],
  // Model Training Scrapers (Optional / Disallowable without hurting search visibility)
  trainingBots: [
    { name: "GPTBot", purpose: "OpenAI foundation model training", allow: false },
    { name: "Google-Extended", purpose: "Google Gemini model training data", allow: false },
    { name: "CCBot", purpose: "Common Crawl repository scraping", allow: false },
    { name: "Bytespider", purpose: "ByteDance foundation training scraper", allow: false }
  ]
};

/**
 * Generate standard production robots.txt content
 * @param {string} baseUrl
 * @returns {string}
 */
export function generateRobotsTxt(baseUrl = "https://www.qxldiagnostics.com") {
  return `# QXL Diagnostics — Production Robots Policy
# Medically Governed Diagnostic Search & AI Discovery

# General Search Engines & Conversational AI Bots
User-agent: Googlebot
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Claude-Web
User-agent: Applebot
Allow: /
Disallow: /api/
Disallow: /booking-status/
Disallow: /internal/
Disallow: /portal/

# Foundation Model Bulk Training Scrapers (Disallowed without affecting live search ranking)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

# Fallback for all other agents
User-agent: *
Allow: /
Disallow: /api/
Disallow: /booking-status/
Disallow: /internal/
Disallow: /portal/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-tests.xml
Sitemap: ${baseUrl}/sitemap-locations.xml
`;
}
