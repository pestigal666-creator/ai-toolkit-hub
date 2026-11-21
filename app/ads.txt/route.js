import { ADSENSE } from "@/site.config";

// Serves /ads.txt automatically from the Publisher ID in site.config.js.
export const dynamic = "force-static";

export function GET() {
  const id = String(ADSENSE.publisherId || "").replace(/^ca-/, "");
  const valid = ADSENSE.enabled && /^pub-\d{10,}$/.test(id) && id !== "pub-0000000000000000";
  const body = valid
    ? `google.com, ${id}, DIRECT, f08c47fec0942fa0\n`
    : "# Add your AdSense Publisher ID in site.config.js to generate this file.\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
