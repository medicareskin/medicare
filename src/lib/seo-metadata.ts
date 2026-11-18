import type { Metadata } from 'next';
import { absoluteCanonical } from './publication';

/** Call on every unique page. Production release gate is separate from the preview X-Robots-Tag. */
export function createPageMetadata(args: {
  title: string;
  description: string;
  path: string;
  medicalApproval: boolean;
}): Metadata {
  const canonical = absoluteCanonical(args.path);
  const index = args.medicalApproval && process.env.PUBLIC_LAUNCH_APPROVED === 'true';
  return {
    title: args.title,
    description: args.description,
    alternates: { canonical },
    openGraph: { type: 'website', title: args.title, description: args.description, url: canonical },
    robots: { index, follow: index },
  };
}
