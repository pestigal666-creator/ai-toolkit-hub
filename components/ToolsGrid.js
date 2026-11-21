"use client";

import { useState } from "react";
import ToolCard from "@/components/ToolCard";
import { TOOL_CATEGORIES } from "@/lib/toolMeta";

export default function ToolsGrid({ tools }) {
  const [active, setActive] = useState("All");
  const filters = ["All", ...TOOL_CATEGORIES];
  const visible = active === "All" ? tools : tools.filter((tool) => tool.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter tools by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === filter
                ? "border-violet-500 bg-violet-600 text-white"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
