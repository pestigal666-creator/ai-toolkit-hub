import Link from "next/link";
import PromptGenerator from "@/components/PromptGenerator";
import ToolsGrid from "@/components/ToolsGrid";
import GuideCard from "@/components/GuideCard";
import AdSlot from "@/components/AdSlot";
import AffiliateNotice from "@/components/AffiliateNotice";
import JsonLd from "@/components/JsonLd";
import { getFeaturedTools, toCardData, TOOLS } from "@/lib/tools";
import { getSortedGuides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = {
  ...pageMeta({
    title: "Free AI Prompt Generator & Best AI Tools Directory",
    description: SITE.description,
    path: "/",
  }),
  title: { absolute: `${SITE.name} | ${SITE.tagline}` },
};

const STEPS = [
  {
    title: "Choose a category",
    text: "Pick YouTube Script, Blog Post, Midjourney Image or Marketing Copy so the prompt uses the right structure.",
  },
  {
    title: "Describe your topic",
    text: "Type a short topic and choose a tone. The generator adds the audience, format and rules for you.",
  },
  {
    title: "Copy and refine",
    text: "Copy the prompt into your favorite AI tool, fill in anything in [BRACKETS] and ask follow-up questions to improve the result.",
  },
];

export default function HomePage() {
  const featured = getFeaturedTools().map(toCardData);
  const guides = getSortedGuides().slice(0, 3);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free AI Prompt Generator",
    url: `${SITE.url}/#generator`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    description:
      "Generate detailed prompts for YouTube scripts, blog posts, Midjourney images and marketing copy. Runs in your browser.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <section id="generator" className="scroll-mt-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">
              100% free. No sign-up.
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Free AI Prompt Generator
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Pick a category, enter your topic and get a detailed, ready-to-use prompt for YouTube scripts, blog
              posts, Midjourney images and marketing copy. It runs in your browser, so nothing you type is sent to a
              server.
            </p>
          </div>
          <div className="mt-10">
            <PromptGenerator />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <AdSlot variant="inContent" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="top-tools-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="top-tools-heading" className="text-3xl font-bold tracking-tight text-white">
              Top Free AI Tools
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Hand-picked tools with a free plan for video, voice, writing and design. Filter by category to find the
              right one.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-violet-300 hover:text-violet-200"
          >
            Browse all {TOOLS.length} tools
            <span aria-hidden="true">&nbsp;&rarr;</span>
          </Link>
        </div>
        <div className="mt-8">
          <ToolsGrid tools={featured} />
        </div>
        <AffiliateNotice className="mt-6" />
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-white">
            How the prompt generator works
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="guides-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="guides-heading" className="text-3xl font-bold tracking-tight text-white">
              Latest guides
            </h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Practical, step-by-step articles on prompts, scripts, images and tools.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex min-h-[44px] items-center text-sm font-semibold text-violet-300 hover:text-violet-200"
          >
            All guides
            <span aria-hidden="true">&nbsp;&rarr;</span>
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      <JsonLd data={appSchema} />
    </>
  );
}
