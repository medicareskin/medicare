import { clinic } from '../lib/clinic-facts';

/** Only credentials and location are shown by default; no fabricated metrics. */
export function TruthGatedTrust() {
  const facts = [
    { title: 'MBBS, DDVL', detail: 'Physician qualifications' },
    { title: 'South Bengaluru', detail: 'Near Yelachenahalli Metro' },
    { title: 'Diagnosis first', detail: 'Medical suitability and risks discussed' },
  ];
  if (clinic.yearsExperience) facts.push({ title: `${clinic.yearsExperience.years}+ Years`, detail: 'Clinically verified experience' });
  if (clinic.patientCount) facts.push({ title: `${clinic.patientCount.count.toLocaleString('en-IN')}+`, detail: 'Documented patient consultations' });
  if (clinic.reviewSummary) facts.push({ title: `${clinic.reviewSummary.rating.toFixed(1)} / 5`, detail: `${clinic.reviewSummary.count} reviews, source verified` });
  return (
    <section className="msc-trust" aria-label="Clinic facts">
      {facts.map((f) => (
        <div key={f.title}>
          <strong>{f.title}</strong>
          <span>{f.detail}</span>
        </div>
      ))}
    </section>
  );
}

export default TruthGatedTrust;
