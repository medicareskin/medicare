import {redirect, notFound} from 'next/navigation';
import {treatments, treatmentsBySlug, categoryToSlug} from '@/lib/treatments';

export function generateStaticParams() {
  const params: {slug: string}[] = [];
  for (const t of treatments) {
    params.push({slug: t.slug});
    if (t.aliases) {
      for (const a of t.aliases) {
        params.push({slug: a});
      }
    }
  }
  return params;
}

export default async function FlatTreatmentRoute({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const t = treatmentsBySlug[slug];
  if (!t) notFound();
  const catSlug = categoryToSlug(t.category);
  redirect(`/treatments/${catSlug}/${t.slug}/`);
}
