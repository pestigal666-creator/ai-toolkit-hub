"use client";

import { useEffect, useRef } from "react";
import { ADSENSE, ADSTERRA } from "@/site.config";

// Shows a real ad when site.config.js is set up, and a clearly labeled
// placeholder box otherwise.
// Variants: "header" (leaderboard), "inContent" (in-article), "sidebar" (tall).
// Priority: Adsterra (for its chosen placement), then AdSense, then placeholder.

const VARIANTS = {
  header: { label: "Header Banner", size: "728 x 90 (responsive)", box: "min-h-[90px]" },
  inContent: { label: "In-Content", size: "336 x 280 (responsive)", box: "min-h-[250px]" },
  sidebar: { label: "Sidebar", size: "300 x 600", box: "min-h-[250px] lg:min-h-[600px]" },
};

export default function AdSlot({ variant = "inContent", className = "" }) {
  const config = VARIANTS[variant] || VARIANTS.inContent;

  const useAdsterra = Boolean(
    ADSTERRA.enabled && ADSTERRA.scriptSrc && ADSTERRA.containerId && ADSTERRA.placement === variant
  );

  const slotId = ADSENSE.slots ? ADSENSE.slots[variant] : "";
  const useAdsense = Boolean(!useAdsterra && ADSENSE.enabled && ADSENSE.publisherId && slotId);

  const adsterraWrap = useRef(null);
  const adsensePushed = useRef(false);

  useEffect(() => {
    if (!useAdsterra) return undefined;
    const wrap = adsterraWrap.current;
    if (!wrap) return undefined;

    const container = wrap.querySelector("[data-adsterra-container]");
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = ADSTERRA.scriptSrc;
    wrap.appendChild(script);

    return () => {
      script.remove();
      if (container) container.innerHTML = "";
    };
  }, [useAdsterra]);

  useEffect(() => {
    if (!useAdsense || adsensePushed.current) return;
    adsensePushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // Ad blockers or a not-yet-loaded script can throw. The page still works.
    }
  }, [useAdsense]);

  let content;
  if (useAdsterra) {
    content = (
      <div ref={adsterraWrap} className="flex w-full justify-center overflow-hidden">
        <div id={ADSTERRA.containerId} data-adsterra-container="true" />
      </div>
    );
  } else if (useAdsense) {
    content = (
      <ins
        className="adsbygoogle block w-full overflow-hidden"
        style={{ display: "block" }}
        data-ad-client={ADSENSE.publisherId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  } else {
    content = (
      <div
        className={`flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-900/50 px-4 text-center ${config.box}`}
      >
        <p className="text-sm font-medium text-slate-300">Ad {config.label} placeholder</p>
        <p className="mt-1 text-xs text-slate-500">{config.size}</p>
      </div>
    );
  }

  return (
    <aside aria-label="Advertisement" data-ad-slot={variant} className={`w-full ${className}`}>
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-slate-500">Advertisement</p>
      {content}
    </aside>
  );
}
