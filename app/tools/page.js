import ToolsDirectory from "@/components/ToolsDirectory";
import AdSlot from "@/components/AdSlot";
import AffiliateNotice from "@/components/AffiliateNotice";
import JsonLd from "@/components/JsonLd";
import { TOOLS, toCardData } from "@/lib/tools";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Best Free AI Tools Directory",
  description:
    "Search and filter 12 popular AI tools for video, voice, writing and design. Read reviews with features, pros, cons and pricing notes.",
  path: "/tools",
});

export default function ToolsPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Free AI Tools Directory",
    itemListElement: TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${SITE.url}/tools/${tool.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white">Best Free AI Tools Directory</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
        {TOOLS.length} popular AI tools for video, voice, writing and design. Search by name or use case, filter by
        category and pricing, and open a review to see features, pros, cons and what the free plan includes.
      </p>

      <div className="mt-8">
        <ToolsDirectory tools={TOOLS.map(toCardData)} />
      </div>

      <AdSlot variant="inContent" className="my-12" />
      <AffiliateNotice />
      <JsonLd data={listSchema} />
    </div>
  );
}
