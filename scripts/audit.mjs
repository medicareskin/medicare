const origin = (process.argv[2] ?? "https://www.medicareskin.com").replace(/\/$/, "");
const paths = [
  "/",
  "/treatments/",
  "/doctors/dr-sujay-m/",
  "/locations/yelachenahalli/",
  "/book-appointment/",
  "/robots.txt",
  "/sitemap.xml",
  "/treatments/skin/pigmentation-treatment/",
  "/treatments/laser/q-switched-laser/",
  "/treatments/laser/laser-hair-reduction/",
  "/treatments/hair/hair-loss-treatment/",
  "/treatments/aesthetics/hydrafacial/",
  "/treatments/skin/chemical-peels/",
  "/treatments/hair/prp-gfc/",
  "/treatments/medical-dermatology/eczema/",
  "/treatments/medical-dermatology/psoriasis/",
  "/treatments/medical-dermatology/vitiligo/",
  "/laser-vs-hydrafacial/",
  "/editorial-policy/",
  "/cancellation-policy/",
  "/faqs/",
  "/journal/",
  "/journal/prp-vs-gfc-hair-loss/",
  "/journal/winter-dry-skin-barrier-repair-bengaluru/"
];

console.log(`Auditing target origin: ${origin}\n`);

let failures = 0;
for (const path of paths) {
  const url = origin + path;
  try {
    const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    const body = await response.text();
    const isHtml = (response.headers.get("content-type") ?? "").includes("text/html");
    const title = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
    const h1 = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
    const canonical = body.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0] ?? "";
    const placeholder = /info@website\.com|info@email\.com|Have a Project\?/i.test(body);
    const passed = response.ok && (!isHtml || (Boolean(title) && Boolean(h1) && Boolean(canonical) && !placeholder));
    console.log({
      path,
      http: response.status,
      title: title ? (title.length > 50 ? title.slice(0, 50) + "..." : title) : "(none)",
      h1: h1 ? (h1.length > 40 ? h1.slice(0, 40) + "..." : h1) : "(none)",
      canonical: Boolean(canonical),
      placeholder,
      passed
    });
    if (!passed) failures++;
  } catch (error) {
    failures++;
    console.error(path, String(error));
  }
}

console.log(`\nAudit completed. Total failures: ${failures}`);
process.exitCode = failures === 0 ? 0 : 1;

