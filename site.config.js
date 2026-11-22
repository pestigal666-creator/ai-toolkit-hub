// =====================================================================
//  SITE CONFIG: paste your Affiliate Links and AdSense details here.
//  This is the only file you need to edit for monetization.
// =====================================================================

// ---------------------------------------------------------------------
// 1. AFFILIATE LINKS
// ---------------------------------------------------------------------
// Paste your affiliate link between the quotes for each tool.
// If you leave a tool empty (""), its "Visit Tool" button goes to the
// tool's official website instead, so nothing breaks.
//
// Example:  chatgpt: "https://your-affiliate-network.com/click?id=12345",

export const AFFILIATE_LINKS = {
  chatgpt: "https://whop.com/toolsuite/buy-vip?a=sohailumar",
  claude: "https://whop.com/toolsuite/buy-vip?a=sohailumar",
  "google-gemini": "https://google.com",
  capcut: "https://capcut.com",
  runway: "https://runwayml.com",
  descript: "https://descript.com",
  elevenlabs: "https://try.elevenlabs.io/tl9r2b0ip5ye", // empty: uses the official site
  "murf-ai": "https://murf.ai",
  "otter-ai": "https://otter.ai",
  canva: "https://canva.com",
  "leonardo-ai": "https://leonardo.ai",
  midjourney: "https://whop.com/toolsuite/buy-vip?a=sohailumar",
};

// Fallback used when an affiliate link above is empty.
export const OFFICIAL_URLS = {
  chatgpt: "https://chatgpt.com",
  claude: "https://claude.ai",
  "google-gemini": "https://gemini.google.com",
  capcut: "https://www.capcut.com",
  runway: "https://runwayml.com",
  descript: "https://www.descript.com",
  elevenlabs: "https://elevenlabs.io",
  "murf-ai": "https://murf.ai",
  "otter-ai": "https://otter.ai",
  canva: "https://www.canva.com",
  "leonardo-ai": "https://leonardo.ai",
  midjourney: "https://www.midjourney.com",
};

// ---------------------------------------------------------------------
// 2. GOOGLE ADSENSE
// ---------------------------------------------------------------------
// Steps:
//   1. Set enabled to true.
//   2. Paste your Publisher ID. In AdSense it looks like: ca-pub-1234567890123456
//      (find it in AdSense under Account > Settings > Account information).
//   3. Create 3 display ad units in AdSense (Ads > By ad unit > Display ads).
//      Copy each unit's numeric "data-ad-slot" value into the slots below.
//
// While enabled is false, or a slot is empty, the site shows a clearly
// labeled placeholder box instead of an ad. That is useful before approval.
//
// This file also creates /ads.txt automatically from your Publisher ID.

// ---------------------------------------------------------------------
// GOOGLE SEARCH CONSOLE (HTML tag method)
// ---------------------------------------------------------------------
// In Search Console choose "HTML tag". Google shows a tag like:
//   <meta name="google-site-verification" content="AbCdEf123..." />
// Paste ONLY the content value below (without quotes inside the quotes).
// Leave empty to skip. The file method (public/google....html) still works too.

export const GOOGLE_VERIFICATION = "9iNs-VNr-hz4JVhilPK7P6ULKP5JDUi1p2TKCyc-CaI";

// ---------------------------------------------------------------------
// 3. ADSTERRA
// ---------------------------------------------------------------------
// Your Adsterra code has two parts: a <script src="..."> and a
// <div id="container-...">. Paste only the src URL and the div id below.
//
// placement: which ad box on each page shows Adsterra instead of the
// AdSense/placeholder box. Use "inContent", "sidebar" or "header".
// Keep it to ONE placement, because the container id can appear only
// once per page.

export const ADSTERRA = {
  enabled: true,
  placement: "inContent",
  scriptSrc: "https://bauval.org/21/0472eb139ef8c67e51d9be97bcf0ab04",
  containerId: "container-0472eb139ef8c67e51d9be97bcf0ab04",
};

export const ADSENSE = {
  enabled: false,
  publisherId: "ca-pub-0000000000000000",
  slots: {
    header: "", // Header banner, e.g. "1234567890"
    inContent: "", // In-article / between sections
    sidebar: "", // Sidebar (desktop)
  },
};
