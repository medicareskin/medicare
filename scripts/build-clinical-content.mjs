import fs from 'node:fs';
import path from 'node:path';

const contentDir = path.resolve('docs/content-pack');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md')).sort();

function parseMarkdownFile(filename) {
  const fullPath = path.join(contentDir, filename);
  const text = fs.readFileSync(fullPath, 'utf8');
  const lines = text.split('\n');

  // URL & Slugs
  const urlMatch = text.match(/Proposed URL:\s*(.*)/);
  const url = urlMatch ? urlMatch[1].trim() : '';
  const cleanPath = url.replace('https://www.medicareskin.com/treatments/', '').replace(/\/$/, '');
  const [categorySlug, treatmentSlug] = cleanPath.split('/');

  const seoTitle = (text.match(/SEO title:\s*(.*)/)?.[1] || '').trim();
  const metaDescription = (text.match(/Meta description:\s*(.*)/)?.[1] || '').trim();
  const primaryIntent = (text.match(/Primary intent:\s*(.*)/)?.[1] || '').trim();
  const secondaryIntent = (text.match(/Secondary intent:\s*(.*)/)?.[1] || '').trim();
  const publishingStatus = (text.match(/Publishing status:\s*(.*)/)?.[1] || '').trim();
  
  // H1 title (line 3 usually, or first meaningful line after page header)
  const h1 = lines.find(l => {
    const s = l.trim();
    return s.length > 0 && !s.startsWith('PAGE') && !s.startsWith('Proposed URL') && !s.startsWith('SEO') && !s.startsWith('Meta') && !s.startsWith('Primary') && !s.startsWith('Secondary') && !s.startsWith('Publishing');
  })?.trim() || '';

  // Quick Answer
  const quickQMatch = text.match(/Quick answer:\s*([^\n]+)/);
  const quickQuestion = quickQMatch ? quickQMatch[1].trim() : '';

  // Body slices
  const quickIdx = text.indexOf('Quick answer:');
  const faqIdx = text.indexOf('Frequently asked questions');
  const bodyText = text.slice(quickIdx, faqIdx);
  const blocks = bodyText.split('\n\n').map(b => b.trim()).filter(b => b.length > 0);

  // Extract quick answer paragraph(s) and consultation prompt
  let quickAnswerParagraphs = [];
  let consultationPrompt = '';
  let bodyStartBlockIdx = 1;

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.startsWith('Quick answer:')) {
      const rest = b.replace(/^Quick answer:[^\n]+\n*/, '').trim();
      if (rest) quickAnswerParagraphs.push(rest);
    } else if (
      b.startsWith('Book a ') ||
      b.startsWith('Ask a dermatologist') ||
      b.startsWith('For a dermatology consultation') ||
      b.startsWith('Call +91') ||
      (b.length < 180 && (b.includes('92428 55707') || b.includes('Yelachenahalli Metro')))
    ) {
      consultationPrompt = b;
      bodyStartBlockIdx = i + 1;
      break;
    } else if (quickAnswerParagraphs.length === 0) {
      quickAnswerParagraphs.push(b);
    } else {
      // If we encounter a section heading, stop
      if (b.endsWith('?') || /^[0-9]\.\s+[A-Za-z]/.test(b) || b.startsWith('Why ') || b.startsWith('What ') || b.startsWith('Which ') || b.startsWith('How ') || b.startsWith('Types of ') || b.startsWith('Melasma vs')) {
        bodyStartBlockIdx = i;
        break;
      }
      quickAnswerParagraphs.push(b);
    }
  }

  // Parse Sections
  const sections = [];
  let currentSection = null;

  for (let i = bodyStartBlockIdx; i < blocks.length; i++) {
    const b = blocks[i];
    if (!b) continue;

    // Is this a section heading?
    const isHeading = (
      (b.endsWith('?') && b.length < 95 && !b.startsWith('Can') && !b.startsWith('Is') && !b.startsWith('Does') && !b.startsWith('Which cream') && !b.startsWith('Are') && !b.startsWith('How many sessions will')) ||
      (/^[0-9]\.\s+[A-Za-z]/.test(b) && b.length < 80) ||
      (b.endsWith(':') && b.length < 80 && !b.includes('. ') && !b.startsWith('Note:') && !b.startsWith('Hero:') && !b.startsWith('Other:')) ||
      (b.length < 75 && (
        b.startsWith('Melasma vs') ||
        b.startsWith('Q-switched laser vs') ||
        b.startsWith('Types of peels') ||
        b.startsWith('Recovery and aftercare') ||
        b.startsWith('Chemical peels for Indian skin') ||
        b.startsWith('Chemical peel cost') ||
        b.startsWith('Why consider Medicare Skin') ||
        b.startsWith('Important advice before booking') ||
        b.startsWith('Treatment: what actually helps') ||
        b.startsWith('Sun protection and gentle') ||
        b.startsWith('Prescription and dermatologist') ||
        b.startsWith('Treating the underlying cause') ||
        b.startsWith('Cost of ') ||
        b.includes('cost in South Bengaluru') ||
        b.includes('cost in Bengaluru')
      ))
    );

    if (isHeading) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: b, paragraphs: [], listItems: [] };
    } else {
      if (!currentSection) {
        currentSection = { heading: 'Clinical Overview & Details', paragraphs: [], listItems: [] };
      }
      // Check for bullet list or structured sub-items
      if (b.includes('\n• ') || b.includes('\n- ') || b.startsWith('• ') || b.startsWith('- ')) {
        const lines = b.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        for (const line of lines) {
          if (line.startsWith('• ') || line.startsWith('- ')) {
            currentSection.listItems.push(line.replace(/^[•\-]\s*/, '').trim());
          } else {
            currentSection.paragraphs.push(line);
          }
        }
      } else {
        currentSection.paragraphs.push(b);
      }
    }
  }
  if (currentSection) sections.push(currentSection);

  // FAQs
  const stopMarkers = ['Book a dermatologist', 'Book an assessment', 'Recommended internal links', 'Clinic: Medicare Skin', 'Image requirements', 'FINAL QA'];
  let endFaqIdx = text.length;
  for (const m of stopMarkers) {
    const idx = text.indexOf(m, faqIdx);
    if (idx !== -1 && idx < endFaqIdx) endFaqIdx = idx;
  }
  const faqBlock = text.slice(faqIdx, endFaqIdx);
  const faqLines = faqBlock.split('\n').map(l => l.trim()).filter(l => l.length > 0 && l !== 'Frequently asked questions');
  const faqs = [];
  for (const l of faqLines) {
    const match = l.match(/^([^?]+\?)\s*(.*)$/);
    if (match) {
      faqs.push({ q: match[1].trim(), a: match[2].trim() });
    }
  }

  // Clinical references
  const refIdx = text.indexOf('Clinical references');
  const refStopMarkers = ['FINAL QA', 'Image requirements', 'Recommended internal links'];
  let endRefIdx = text.length;
  if (refIdx !== -1) {
    for (const m of refStopMarkers) {
      const idx = text.indexOf(m, refIdx);
      if (idx !== -1 && idx < endRefIdx) endRefIdx = idx;
    }
  }
  const refBlock = refIdx !== -1 ? text.slice(refIdx, endRefIdx) : '';
  const refLines = refBlock.split('\n').map(l => l.trim()).filter(l => l.length > 0 && l !== 'Clinical references');
  const references = [];
  for (const l of refLines) {
    const m = l.match(/^(.*?):\s*(https?:\/\/[^\s]+)$/);
    if (m) {
      references.push({ title: m[1].trim(), url: m[2].trim() });
    } else if (l.startsWith('http')) {
      references.push({ title: 'Clinical Evidence Source', url: l.trim() });
    }
  }

  // Internal links
  const linkIdx = text.indexOf('Recommended internal links');
  const linkStopMarkers = ['Image requirements', 'Clinical references', 'FINAL QA'];
  let endLinkIdx = text.length;
  if (linkIdx !== -1) {
    for (const m of linkStopMarkers) {
      const idx = text.indexOf(m, linkIdx);
      if (idx !== -1 && idx < endLinkIdx) endLinkIdx = idx;
    }
  }
  const linkBlock = linkIdx !== -1 ? text.slice(linkIdx, endLinkIdx) : '';
  const internalLinks = linkBlock
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.startsWith('/'))
    .map(l => {
      const href = l.split(' ')[0];
      const note = l.includes('(') ? l.slice(l.indexOf('(')) : '';
      return { href, note };
    });

  return {
    filename,
    categorySlug,
    treatmentSlug,
    h1,
    seoTitle,
    metaDescription,
    primaryIntent,
    secondaryIntent,
    publishingStatus,
    quickAnswer: {
      question: quickQuestion,
      answer: quickAnswerParagraphs.join('\n\n'),
      consultationPrompt,
    },
    sections,
    faqs,
    references,
    internalLinks,
  };
}

const parsedArticles = files.map(parseMarkdownFile);

const tsOutput = `// Medicare Skin — Master Clinical Content Pack
// Generated from authoritative clinical source documents in docs/content-pack/
// Research based on American Academy of Dermatology (AAD), DermNet NZ, and published clinical trials.

export type ClinicalSection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type ClinicalReference = {
  title: string;
  url: string;
};

export type ClinicalInternalLink = {
  href: string;
  note?: string;
};

export type ClinicalFAQ = {
  q: string;
  a: string;
};

export type ClinicalArticle = {
  filename?: string;
  categorySlug: string;
  treatmentSlug: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  primaryIntent: string;
  secondaryIntent: string;
  publishingStatus: string;
  quickAnswer: {
    question: string;
    answer: string;
    consultationPrompt: string;
  };
  sections: ClinicalSection[];
  faqs: ClinicalFAQ[];
  references: ClinicalReference[];
  internalLinks: ClinicalInternalLink[];
  medicalReviewer: {
    name: string;
    qualification: string;
    clinic: string;
    location: string;
    phone: string;
    date: string;
  };
};

export const clinicalArticles: Record<string, ClinicalArticle> = {
${parsedArticles.map(a => `  '${a.categorySlug}/${a.treatmentSlug}': ${JSON.stringify({
  ...a,
  medicalReviewer: {
    name: 'Dr. (Mrs.) Sujay M',
    qualification: 'MBBS, DDVL',
    clinic: 'Medicare Skin & Cosmetic Clinic',
    location: 'Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Road, Bengaluru 560078',
    phone: '+91 92428 55707',
    date: 'October 2026',
  }
}, null, 2)},`).join('\n')}
};

export function getClinicalArticle(categorySlug: string, treatmentSlug: string): ClinicalArticle | undefined {
  return clinicalArticles[\`\${categorySlug}/\${treatmentSlug}\`];
}

export function getAllClinicalArticles(): ClinicalArticle[] {
  return Object.values(clinicalArticles);
}
`;

fs.writeFileSync('src/lib/clinicalContent.ts', tsOutput, 'utf8');
console.log(`Successfully generated src/lib/clinicalContent.ts with ${parsedArticles.length} articles!`);
