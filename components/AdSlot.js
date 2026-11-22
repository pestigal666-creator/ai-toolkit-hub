"use client";

import { useEffect, useRef, useState } from "react";
import { ADSENSE, ADSTERRA } from "@/site.config";

// Shows a real ad when site.config.js is set up, and a clearly labeled
// placeholder box otherwise.
// Variants: "header" (leaderboard), "inContent" (in-article), "sidebar" (tall).
// Priority for each box: Adsterra, then AdSense, then placeholder.

const VARIANTS = {
  header: { label: "Header Banner", size: "728 x 90 (responsive)", box: "min-h-[90px]" },
  inContent: { label: "In-Content", size: "336 x 280 (responsive)", box: "min-h-[250px]" },
  sidebar: { label: "Sidebar", size: "300 x 600", box: "min-h-[250px] lg:min-h-[600px]" },
};

// Builds the small page that runs an Adsterra "Banner" unit inside an iframe.
function bannerDocument(unit) {
  const options = JSON.stringify({
    key: unit.key,
    format: "iframe",
    height: unit.height,
    width: unit.width,
    params: {},
  });
  return (
    '<!doctype html><html><head><meta charset="utf-8">' +
    "<style>html,body{margin:0;padding:0;background:transparent}</style></head><body>" +
    "<script>atOptions = " +
    options +
    ";<\/script>" +
    '<script src="' +
    unit.scriptSrc +
    '"><\/script>' +
    "</body></html>"
  );
}

export default function AdSlot({ variant = "inContent", className = "" }) {
  const config = VARIANTS[variant] || VARIANTS.inContent;

  const unit = ADSTERRA.enabled && ADSTERRA.slots ? ADSTERRA.slots[variant] : null;
  const isBanner = Boolean(unit && unit.type === "banner" && unit.key && unit.scriptSrc && unit.width && unit.height);
  const isNative = Boolean(unit && unit.type === "native" && unit.scriptSrc && unit.containerId);
  const useAdsterra = isBanner || isNative;

  const adsenseSlot = ADSENSE.slots ? ADSENSE.slots[variant] : "";
  const useAdsense = Boolean(!useAdsterra && ADSENSE.enabled && ADSENSE.publisherId && adsenseSlot);

  const asideRef = useRef(null);
  const nativeWrap = useRef(null);
  const adsensePushed = useRef(false);
  const [fits, setFits] = useState(true);

  // A fixed-size banner is hidden when the screen is narrower than the banner.
  useEffect(() => {
    if (!isBanner) return undefined;
    const el = asideRef.current;
    if (!el) return undefined;
    const check = () => setFits(el.clientWidth >= unit.width);
    check();
    if (typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isBanner, unit && unit.width]);

  // Native banner: add the script after the container exists.
  useEffect(() => {
    if (!isNative) return undefined;
    const wrap = nativeWrap.current;
    if (!wrap) return undefined;

    const container = wrap.querySelector("[data-adsterra-container]");
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = unit.scriptSrc;
    wrap.appendChild(script);

    return () => {
      script.remove();
      if (container) container.innerHTML = "";
    };
  }, [isNative]);

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
  let showLabel = true;

  if (isBanner) {
    if (fits) {
      content = (
        <div className="flex w-full justify-center overflow-hidden">
          <iframe
            title="Advertisement"
            width={unit.width}
            height={unit.height}
            scrolling="no"
            frameBorder="0"
            style={{ border: 0, display: "block", maxWidth: "100%" }}
            srcDoc={bannerDocument(unit)}
          />
        </div>
      );
    } else {
      content = null;
      showLabel = false;
    }
  } else if (isNative) {
    content = (
      <div ref={nativeWrap} className="flex w-full justify-center overflow-hidden">
        <div id={unit.containerId} data-adsterra-container="true" />
      </div>
    );
  } else if (useAdsense) {
    content = (
      <ins
        className="adsbygoogle block w-full overflow-hidden"
        style={{ display: "block" }}
        data-ad-client={ADSENSE.publisherId}
        data-ad-slot={adsenseSlot}
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
    <aside ref={asideRef} aria-label="Advertisement" data-ad-slot={variant} className={`w-full ${className}`}>
      {showLabel ? (
        <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-slate-500">Advertisement</p>
      ) : null}
      {content}
    </aside>
  );
}
