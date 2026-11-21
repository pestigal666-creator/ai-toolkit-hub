import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import AffiliateNotice from "@/components/AffiliateNotice";
import { TOOLS, getTool } from "@/lib/tools";
import { PRICING_LABELS } from "@/lib/toolMeta";
import { getSortedGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }) {
  const tool = getTool(params.slug);
  if (!tool) return {};
  return pageMeta({
    title: `${tool.name} Review: Pros, Cons and Pricing`,
    description: `${tool.description} See features, pros, cons and pricing notes in our ${tool.name} review.`,
    path: `/tools/${tool.slug}`,
  });
}

const visitClass =
  "inline-flex min-h-[48px] items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400";

function VisitButton({ tool }) {
  return (
    <a href={tool.affiliateUrl} target="_blank" rel="sponsored nofollow noopener noreferrer" className={visitClass}>
      Visit {tool.name}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function ToolPage({ params }) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  const isPaid = tool.pricing === "Paid";
  const related = TOOLS.filter((item) => item.category === tool.category && item.slug !== tool.slug).slice(0, 3);
  const guides = getSortedGuides()
    .filter((guide) => guide.relatedTools.includes(tool.slug))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <Link href="/tools" className="hover:text-white">
          Tools
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-200">{tool.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          <header>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{tool.category}</span>
              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                  isPaid
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                    : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                }`}
              >
                {PRICING_LABELS[tool.pricing] || tool.pricing}
              </span>
              <span className="text-xs text-slate-400">By {tool.maker}</span>
            </div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white">{tool.name} Review</h1>
            <p className="mt-3 text-lg leading-8 text-slate-300">{tool.description}</p>
            <div className="mt-6">
              <VisitButton tool={tool} />
            </div>
            <AffiliateNotice className="mt-3" />
          </header>

          <div className="article">
            <h2>Overview</h2>
            <p>{tool.overview}</p>
            <h2>Key features</h2>
            <ul>
              {tool.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <AdSlot variant="inContent" className="my-10" />

          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-lg font-semibold text-white">Pros</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300 marker:text-emerald-400">
                {tool.pros.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-lg font-semibold text-white">Cons</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300 marker:text-amber-400">
                {tool.cons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="article">
            <h2>Best for</h2>
            <p>{tool.bestFor}</p>
            <h2>Pricing</h2>
            <p>{tool.pricingNote}</p>
            <h2>Our verdict</h2>
            <p>{tool.verdict}</p>
          </div>

          <div className="mt-8">
            <VisitButton tool={tool} />
          </div>
        </article>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="sidebar" />

          {related.length > 0 ? (
            <section aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-base font-semibold text-white">
                More {tool.category.toLowerCase()} tools
              </h2>
              <ul className="mt-3 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/tools/${item.slug}`}
                      className="block rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 hover:border-slate-600 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {guides.length > 0 ? (
            <section aria-labelledby="related-guides-heading">
              <h2 id="related-guides-heading" className="text-base font-semibold text-white">
                Related guides
              </h2>
              <ul className="mt-3 space-y-2">
                {guides.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="block rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-medium leading-5 text-slate-200 hover:border-slate-600 hover:text-white"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
