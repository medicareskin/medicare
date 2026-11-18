import { clinic } from '../lib/clinic-facts';

/** Shows a genuine device or price only after master-data approval. */
export function VerifiedProcedureFacts({ slug }: { slug: string }) {
  const matchingDevice = clinic.devices.find((d) => d.approvedForWebsite && d.documentRef && d.model);
  const price = clinic.procedurePrices.find((p) => p.slug === slug && p.approvedAt && p.evidence);
  return (
    <aside className="msc-facts">
      <h2>Procedure suitability and costs</h2>
      <p>Availability, risks, likely number of sessions and final costs are discussed after a dermatologist assessment.</p>
      {matchingDevice ? <p>Verified device: {matchingDevice.manufacturer} {matchingDevice.model}.</p> : null}
      {price ? (
        <p>
          Clinic-approved indicative price: ₹{price.minINR.toLocaleString('en-IN')}–₹{price.maxINR.toLocaleString('en-IN')}.
        </p>
      ) : (
        <p>Please contact the clinic for the current consultation or procedure fee.</p>
      )}
      <p><strong>Important:</strong> All procedures may have side effects, limitations or recovery time; suitability varies.</p>
    </aside>
  );
}

export default VerifiedProcedureFacts;
