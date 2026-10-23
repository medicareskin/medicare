/** Fill only with signed-off clinic fees. Keep empty until written approval. */
export type ApprovedPrice={id:string;name:string;currency:'INR';min:number;max:number;unit:string;approvedAt:string;approvedBy:string};
export const approvedPrices:ApprovedPrice[]=[];
export function validatedPriceCatalog(rows:ApprovedPrice[]){return rows.filter(r=>r.currency==='INR'&&r.min>0&&r.max>=r.min&&r.approvedAt&&r.approvedBy)}
