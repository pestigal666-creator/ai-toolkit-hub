import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import AffiliateNotice from "@/components/AffiliateNotice";
import GuideCard from "@/components/GuideCard";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import { GUIDES, getGuide, getReadingTime, getSortedGuides, formatDate } from "@/lib/guides";
import { getTool } from "@/lib/tools";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.metaTitle || guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    type: "article",
    publishedTime: guide.date,
  });
}

function Section({ section }) {
  return (
    <section>
      <h2>{section.heading}</h2>
      {(section.paragraphs || []).map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      {section.code ? (
        <pre>
          <code>{section.code}</code>
        </pre>
      ) : null}
      {section.bullets ? (
        <ul>
          {section.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.outro ? <p>{section.outro}</p> : null}
    </section>
  );
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const relatedTools = guide.relatedTools.map((slug) => getTool(slug)).filter(Boolean);
  const moreGuides = getSortedGuides()
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3);
  const firstSections = guide.sections.slice(0, 2);
  const remainingSections = guide.sections.slice(2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    mainEntityOfPage: `${SITE.url}/guides/${guide.slug}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <Link href="/guides" className="hover:text-white">
          Guides
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-200">{guide.category}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">{guide.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              <time dateTime={guide.date}>{formatDate(guide.date)}</time> &middot; {getReadingTime(guide)} min read
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">{guide.intro}</p>
          </header>

          <div className="article">
            {firstSections.map((section) => (
              <Section key={section.heading} section={section} />
            ))}
          </div>

          <AdSlot variant="inContent" className="my-10" />

          <div className="article">
            {remainingSections.map((section) => (
              <Section key={section.heading} section={section} />
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-violet-500/30 bg-violet-500/10 p-6">
            <h2 className="text-lg font-semibold text-white">Try the free AI prompt generator</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Turn a topic into a detailed prompt for YouTube scripts, blog posts, Midjourney images or marketing copy
              in a few seconds. No sign-up needed.
            </p>
            <Link
              href="/#generator"
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500"
            >
              Open the generator
            </Link>
          </div>

          {relatedTools.length > 0 ? (
            <section className="mt-12" aria-labelledby="mentioned-tools-heading">
              <h2 id="mentioned-tools-heading" className="text-2xl font-bold tracking-tight text-white">
                Tools mentioned in this guide
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {relatedTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
              <AffiliateNotice className="mt-4" />
            </section>
          ) : null}
        </article>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="sidebar" />
        </aside>
      </div>

      <section className="mt-16 border-t border-slate-800 pt-10" aria-labelledby="more-guides-heading">
        <h2 id="more-guides-heading" className="text-2xl font-bold tracking-tight text-white">
          More guides
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {moreGuides.map((item) => (
            <GuideCard key={item.slug} guide={item} />
          ))}
        </div>
      </section>

      <JsonLd data={articleSchema} />
    </div>
  );
}
