"use client";

import { useMemo, useState } from "react";
import ToolCard from "@/components/ToolCard";
import { TOOL_CATEGORIES } from "@/lib/toolMeta";

export default function ToolsDirectory({ tools }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (category !== "All" && tool.category !== category) return false;
      if (pricing === "free" && tool.pricing === "Paid") return false;
      if (pricing === "paid" && tool.pricing !== "Paid") return false;
      if (!q) return true;
      const haystack = `${tool.name} ${tool.maker} ${tool.category} ${tool.description} ${tool.bestFor}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [tools, query, category, pricing]);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setPricing("all");
  }

  const filters = ["All", ...TOOL_CATEGORIES];

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <label htmlFor="tool-search" className="text-sm font-semibold text-slate-200">
            Search tools
          </label>
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, use case or category"
            className="mt-2 block min-h-[48px] w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />
        </div>
        <div>
          <label htmlFor="tool-pricing" className="text-sm font-semibold text-slate-200">
            Pricing
          </label>
          <select
            id="tool-pricing"
            value={pricing}
            onChange={(event) => setPricing(event.target.value)}
            className="mt-2 block min-h-[48px] w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 md:w-56"
          >
            <option value="all">All pricing</option>
            <option value="free">Has a free plan</option>
            <option value="paid">Paid only</option>
          </select>
        </div>
      </div>

      <div role="group" aria-label="Filter tools by category" className="mt-4 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={category === filter}
            onClick={() => setCategory(filter)}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === filter
                ? "border-violet-500 bg-violet-600 text-white"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-slate-400">
        Showing {visible.length} of {tools.length} tools
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-8 text-center">
          <p className="text-slate-300">No tools match your search.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
