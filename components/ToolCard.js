import Link from "next/link";
import { PRICING_LABELS } from "@/lib/toolMeta";

export default function ToolCard({ tool }) {
  const isPaid = tool.pricing === "Paid";

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{tool.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{tool.name}</h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${
            isPaid
              ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
              : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {PRICING_LABELS[tool.pricing] || tool.pricing}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{tool.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          Visit Tool
          <span className="sr-only"> {tool.name} (opens in a new tab)</span>
        </a>
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          Read review
          <span className="sr-only"> of {tool.name}</span>
        </Link>
      </div>
    </article>
  );
}
