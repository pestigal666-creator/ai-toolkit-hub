// Central site settings. Edit the values below, then search the project for
// "REPLACE" to find any other placeholders you should update before launch.

// The site address is picked in this order:
//   1. NEXT_PUBLIC_SITE_URL (set it in Vercel when you connect your own domain)
//   2. Vercel's production address, which Vercel provides automatically
//   3. A placeholder, only used when running locally
// A missing "https://" is added, and any trailing "/" is removed.
function resolveSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://www.aitoolkithub.example";
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export const SITE = {
  name: "AI ToolKit Hub",
  url: resolveSiteUrl(),
  tagline: "Free AI Prompt Generator & Best AI Tools Directory",
  description:
    "Generate ready-to-use AI prompts for free and browse a hand-picked directory of the best free AI tools for video, voice, writing and design.",
  // REPLACE with a real inbox on your own domain.
  email: "contact@aitoolkithub.example",
};

export const LEGAL_UPDATED = "November 20, 2026";
