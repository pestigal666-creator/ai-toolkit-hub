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
  elevenlabs: "", // empty: uses the official site
  "murf-ai": "https://murf.ai",
  "otter-ai": "https://otter.ai",
  canva: "https://canva.com",
  "leonardo-ai": "https://leonardo.ai",
  midjourney: "https://whop.com/toolsuite/buy-vip?a=sohailumar",
};

// Custom button text for tools whose link does NOT go to the tool's own
// official site (for example, a bundle or reseller page). It is used only
// while that tool has a link pasted above. Tools not listed here keep the
// normal "Visit Tool" button.
export const LINK_LABELS = {
  chatgpt: {
    label: "Get via ToolSuite VIP",
    note: "Opens ToolSuite VIP, a third-party bundle. This is not the official ChatGPT site.",
  },
  claude: {
    label: "Get via ToolSuite VIP",
    note: "Opens ToolSuite VIP, a third-party bundle. This is not the official Claude site.",
  },
  midjourney: {
    label: "Get via ToolSuite VIP",
    note: "Opens ToolSuite VIP, a third-party bundle. This is not the official Midjourney site.",
  },
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
// Each ad box on the site (header, sidebar, inContent) can show one Adsterra
// ad unit. Two kinds are supported:
//
//   type "banner" (Adsterra "Banner", iframe code with atOptions):
//       key, width, height, scriptSrc
//       (copy them from the atOptions block and the <script src> line)
//   type "native" (Adsterra "Native Banner", code with a container div):
//       scriptSrc, containerId
//       Use a native unit in only ONE box, since a container id can appear
//       only once per page.
//
// To turn one box back to AdSense or the placeholder, delete its entry.
// To turn off all Adsterra ads, set enabled to false.

export const ADSTERRA = {
  enabled: true,
  slots: {
    // 728x90 banner at the top of every page (hidden on narrow screens)
    header: {
      type: "banner",
      key: "1af48d8f58a0df25edb00bf7af43c2f0",
      width: 728,
      height: 90,
      scriptSrc: "https://bauval.org/22/1af48d8f58a0df25edb00bf7af43c2f0",
    },
    // 160x600 banner in the sidebar
    sidebar: {
      type: "banner",
      key: "b8d4d0df55d0ffcfb5172be7df1fb340",
      width: 160,
      height: 600,
      scriptSrc: "https://bauval.org/22/b8d4d0df55d0ffcfb5172be7df1fb340",
    },
    // Native banner inside articles and lists
    inContent: {
      type: "native",
      scriptSrc: "https://bauval.org/21/c59795c2e5457e3e85d30d70378ed0b4",
      containerId: "container-c59795c2e5457e3e85d30d70378ed0b4",
    },
  },
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
