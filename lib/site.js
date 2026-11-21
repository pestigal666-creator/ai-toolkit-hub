// Central site settings. Edit the values below, then search the project for
// "REPLACE" to find any other placeholders you should update before launch.

export const SITE = {
  name: "AI ToolKit Hub",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.aitoolkithub.example").replace(/\/$/, ""),
  tagline: "Free AI Prompt Generator & Best AI Tools Directory",
  description:
    "Generate ready-to-use AI prompts for free and browse a hand-picked directory of the best free AI tools for video, voice, writing and design.",
  // REPLACE with a real inbox on your own domain.
  email: "contact@aitoolkithub.example",
};

export const LEGAL_UPDATED = "November 20, 2026";
