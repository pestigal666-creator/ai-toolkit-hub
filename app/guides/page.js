import GuideCard from "@/components/GuideCard";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { getSortedGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "AI Guides for Creators: Prompts, Scripts, Images and Tools",
  description:
    "Practical, step-by-step AI guides: write better prompts, plan YouTube scripts, create images with Midjourney, blog with AI and pick the best free tools.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getSortedGuides();

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Guides for Creators",
    url: `${SITE.url}/guides`,
    hasPart: guides.map((guide) => ({
      "@type": "Article",
      headline: guide.title,
      url: `${SITE.url}/guides/${guide.slug}`,
      datePublished: guide.date,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white">AI Guides for Creators</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
        Clear, practical articles on writing prompts, planning scripts, making images and choosing the right AI tools.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
          <AdSlot variant="inContent" className="mt-10" />
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="sidebar" />
        </aside>
      </div>

      <JsonLd data={listSchema} />
    </div>
  );
}
