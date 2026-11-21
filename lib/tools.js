// Tool directory data.
//
// Affiliate links are NOT set here. Paste them in site.config.js. The
// affiliateUrl values below are placeholders that site.config.js overrides.
// Pricing and free-plan limits change often, so re-check each tool before you
// publish and update the pricingNote text when needed.

import { AFFILIATE_LINKS, OFFICIAL_URLS } from "@/site.config";

export { TOOL_CATEGORIES, PRICING_LABELS } from "@/lib/toolMeta";

const RAW_TOOLS = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    maker: "OpenAI",
    category: "Writing",
    pricing: "Freemium",
    featured: true,
    description: "A versatile AI assistant for brainstorming, drafting scripts, outlining articles and editing your writing.",
    affiliateUrl: "https://example.com/go/chatgpt",
    features: [
      "Drafts and rewrites text in any tone",
      "Brainstorms ideas, titles and outlines",
      "Explains topics and summarizes long text",
      "Helps with spreadsheets and basic code",
    ],
    overview:
      "ChatGPT, made by OpenAI, is one of the most widely used AI assistants. You type a request in plain language and it replies with text you can refine through follow-up messages. For creators, it works well as a first-draft partner: it can turn a rough idea into a video outline, a blog structure or ten headline options in seconds.",
    pros: [
      "Handles a very wide range of writing tasks",
      "Easy to refine results with follow-up instructions",
      "Large community with plenty of tutorials and prompt examples",
    ],
    cons: [
      "Can state incorrect facts with confidence, so check important claims",
      "Free usage has limits that vary by demand and plan",
      "Drafts often need editing to sound like you",
    ],
    bestFor: "Script outlines, blog drafts, brainstorming and rewriting.",
    pricingNote:
      "A free plan is available with usage limits. Paid plans raise limits and add features (also available inside ToolSuite VIP).",
    verdict:
      "A strong all-round starting point if you only want to learn one AI writing tool. Treat every draft as a starting point and edit it.",
  },
  {
    slug: "claude",
    name: "Claude",
    maker: "Anthropic",
    category: "Writing",
    pricing: "Freemium",
    featured: false,
    description: "An AI assistant known for careful writing, long-document analysis and natural-sounding drafts.",
    affiliateUrl: "https://example.com/go/claude",
    features: [
      "Works with long documents and large amounts of text",
      "Rewrites and edits while keeping your meaning",
      "Summarizes articles, reports and transcripts",
      "Helps with analysis, planning and coding",
    ],
    overview:
      "Claude is an AI assistant from Anthropic. Many writers like it for editing and long-form work because it can read a lot of text at once and respond in a measured, natural tone. It is useful for tightening a draft, summarizing research or turning a transcript into an article outline.",
    pros: [
      "Good at editing and rewriting existing text",
      "Handles long inputs such as reports and transcripts",
      "Natural, readable tone that needs less cleanup",
    ],
    cons: [
      "Free usage limits can be reached during long sessions",
      "Output still needs fact-checking and your own voice",
    ],
    bestFor: "Editing drafts, summarizing long documents and structured writing.",
    pricingNote:
      "A free plan is available with usage limits. Paid plans offer higher limits (also included in ToolSuite VIP).",
    verdict:
      "A great second opinion next to your main writing tool, especially when you work with long text.",
  },
  {
    slug: "google-gemini",
    name: "Google Gemini",
    maker: "Google",
    category: "Writing",
    pricing: "Freemium",
    featured: true,
    description: "Google's AI assistant for answers, drafting and brainstorming, connected to the Google ecosystem.",
    affiliateUrl: "https://example.com/go/google-gemini",
    features: [
      "Drafts, summarizes and brainstorms",
      "Connects with Google services where available",
      "Useful for research-style questions",
      "Works with a regular Google account",
    ],
    overview:
      "Gemini is Google's AI assistant. If you already live in Google Docs, Gmail and Drive, it can feel like a natural fit because it connects with those tools in some plans and regions. It handles everyday drafting, summarizing and brainstorming, and many people use it as a quick research starting point.",
    pros: [
      "Simple to start with a Google account",
      "Fits well into a Google-based workflow",
      "Good for quick questions and summaries",
    ],
    cons: [
      "Feature availability can differ by country and plan",
      "Answers should be double-checked against reliable sources",
    ],
    bestFor: "People who already use Google Workspace and want a free assistant.",
    pricingNote:
      "A free tier is available. Paid plans add more capability. Check Google's site for what is included today.",
    verdict:
      "Worth trying alongside ChatGPT or Claude, since each tool has different strengths.",
  },
  {
    slug: "capcut",
    name: "CapCut",
    maker: "ByteDance",
    category: "Video",
    pricing: "Freemium",
    featured: true,
    description: "A free-to-start video editor with AI captions, templates and quick edits for short-form content.",
    affiliateUrl: "https://example.com/go/capcut",
    features: [
      "Automatic captions",
      "Templates for short videos",
      "Background removal and basic effects",
      "Mobile, desktop and web versions",
    ],
    overview:
      "CapCut is a video editor made by ByteDance, the company behind TikTok. It is popular for short-form video because it makes common tasks fast: auto captions, ready-made templates, transitions and simple effects. You can start editing for free and decide later whether the paid features are worth it.",
    pros: [
      "Fast workflow for Reels, Shorts and TikToks",
      "Beginner-friendly interface",
      "Captions and templates save a lot of time",
    ],
    cons: [
      "Some effects, assets and export options need a paid plan",
      "Available features can differ between mobile, desktop and web",
    ],
    bestFor: "Short-form video creators who want quick edits with captions.",
    pricingNote:
      "Free to start. Some premium features require a paid plan. Check the official site for current details.",
    verdict:
      "The easiest place to start if you make vertical videos and want captions without extra work.",
  },
  {
    slug: "runway",
    name: "Runway",
    maker: "Runway AI",
    category: "Video",
    pricing: "Freemium",
    featured: true,
    description: "AI video generation and editing tools that turn text and images into short video clips.",
    affiliateUrl: "https://example.com/go/runway",
    features: [
      "Generates short video clips from text or images",
      "AI editing tools such as background removal",
      "Browser-based workspace",
      "Credit-based usage",
    ],
    overview:
      "Runway is an AI creative platform focused on video. You can generate short clips from a text prompt or an image and use AI-assisted editing tools inside a browser. It is a good way to experiment with AI video for b-roll, concepts and social content.",
    pros: [
      "Powerful AI video generation in the browser",
      "Useful for b-roll and visual experiments",
      "Regular updates and new features",
    ],
    cons: [
      "Free credits are limited, so you will use them quickly",
      "Generated clips are short and may need several attempts",
    ],
    bestFor: "Experimenting with AI-generated b-roll and concept clips.",
    pricingNote:
      "Free plan with limited credits. Paid plans add credits and features. Check the official site for current limits.",
    verdict:
      "Fun and genuinely useful for short visual clips, but plan on a paid tier if you use it often.",
  },
  {
    slug: "descript",
    name: "Descript",
    maker: "Descript",
    category: "Video",
    pricing: "Freemium",
    featured: false,
    description: "Edit video and podcasts by editing the transcript, with AI filler-word removal and captions.",
    affiliateUrl: "https://example.com/go/descript",
    features: [
      "Transcript-based editing",
      "Filler word removal",
      "Automatic captions",
      "Screen and audio recording",
    ],
    overview:
      "Descript lets you edit audio and video by editing text. It transcribes your recording, and deleting a word from the transcript removes it from the media. That makes it great for talking-head videos, interviews, tutorials and podcasts.",
    pros: [
      "Editing by text is fast and easy to learn",
      "Helpful for removing filler words and pauses",
      "Good for repurposing long recordings into clips",
    ],
    cons: [
      "Free plan has limits on exports and features",
      "Less suited to heavily designed, effects-driven videos",
    ],
    bestFor: "Talking-head videos, tutorials, interviews and podcasts.",
    pricingNote:
      "A free plan is available with limits. Paid plans unlock more transcription and export features. Check the official site for current plans.",
    verdict:
      "A big time-saver if most of your content is someone talking to a camera or microphone.",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    maker: "ElevenLabs",
    category: "Voice",
    pricing: "Freemium",
    featured: true,
    description: "Realistic AI text-to-speech and voice tools for narration, voiceovers and audio content.",
    affiliateUrl: "https://example.com/go/elevenlabs",
    features: [
      "Natural-sounding text-to-speech",
      "Many voices and languages",
      "Voice cloning on supported plans",
      "Tools for narration and dubbing",
    ],
    overview:
      "ElevenLabs is known for natural-sounding AI voices. You paste a script, pick a voice and get narration you can use in videos, audiobooks or podcasts. It is a popular choice for faceless channels and creators who prefer not to record their own voice.",
    pros: [
      "Voices sound natural compared with many alternatives",
      "Quick way to produce narration from a script",
      "Supports many languages",
    ],
    cons: [
      "Free plan has a small monthly allowance",
      "Check the licensing terms before using audio commercially",
      "Cloning a voice requires the right permissions and consent",
    ],
    bestFor: "Narration for faceless videos, explainers and audio content.",
    pricingNote:
      "Free plan with a limited monthly allowance. Commercial use may require a paid plan, so read the terms before publishing.",
    verdict:
      "One of the best options for realistic voiceovers. Use voices ethically and check the license first.",
  },
  {
    slug: "murf-ai",
    name: "Murf AI",
    maker: "Murf",
    category: "Voice",
    pricing: "Freemium",
    featured: false,
    description: "A studio-style AI voiceover tool with many voices for presentations, videos and training content.",
    affiliateUrl: "https://example.com/go/murf-ai",
    features: [
      "Library of AI voices",
      "Simple voiceover studio",
      "Pitch, speed and emphasis controls",
      "Suited to explainers and training material",
    ],
    overview:
      "Murf AI is a voiceover platform aimed at presentations, explainers and e-learning. You write or paste your script, choose a voice and adjust pacing and emphasis in a simple studio view. It suits business-style narration more than character acting.",
    pros: [
      "Easy studio interface for beginners",
      "Good fit for explainers and training videos",
      "Adjustable pace and emphasis",
    ],
    cons: [
      "Free access is limited and mainly meant for trying the tool",
      "Downloads and commercial use may need a paid plan",
    ],
    bestFor: "Corporate-style voiceovers, tutorials and course content.",
    pricingNote:
      "A free plan or trial is available for testing. Paid plans unlock downloads and more features. Check the official site for current terms.",
    verdict:
      "A solid choice if you want a clean, professional voice for course or business content.",
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    maker: "Otter.ai",
    category: "Voice",
    pricing: "Freemium",
    featured: true,
    description: "An AI meeting assistant that records, transcribes and summarizes conversations and interviews.",
    affiliateUrl: "https://example.com/go/otter-ai",
    features: [
      "Live transcription",
      "Automatic summaries and action items",
      "Searchable transcripts",
      "Works with common meeting apps",
    ],
    overview:
      "Otter.ai turns spoken audio into searchable text. Creators use it to transcribe interviews, podcasts and calls, then pull quotes, outlines and article ideas from the transcript. It also creates summaries so you do not need to rewatch long recordings.",
    pros: [
      "Fast, searchable transcripts",
      "Summaries save time after long recordings",
      "Useful for repurposing interviews into articles",
    ],
    cons: [
      "Free plan has monthly transcription limits",
      "Accuracy drops with background noise, so always proofread",
    ],
    bestFor: "Interviews, podcasts, meetings and turning talks into text.",
    pricingNote:
      "A free plan is available with monthly limits. Paid plans add minutes and features. Check the official site for current limits.",
    verdict:
      "Very handy for turning recorded conversations into written content.",
  },
  {
    slug: "canva",
    name: "Canva",
    maker: "Canva",
    category: "Design",
    pricing: "Freemium",
    featured: true,
    description: "An easy design platform with AI image, text and editing tools for thumbnails, social posts and presentations.",
    affiliateUrl: "https://example.com/go/canva",
    features: [
      "Templates for social posts, thumbnails and slides",
      "AI-powered design and writing helpers",
      "Drag-and-drop editor",
      "Team sharing and brand kits on some plans",
    ],
    overview:
      "Canva is a drag-and-drop design platform that now includes a range of AI features. It is one of the easiest ways to produce thumbnails, social graphics, slides and simple videos without design training, thanks to a large template library.",
    pros: [
      "Very easy for beginners",
      "Huge template library",
      "Handles many formats in one place",
    ],
    cons: [
      "Some AI features and premium assets need a paid plan",
      "Popular templates can look alike unless you customize them",
    ],
    bestFor: "YouTube thumbnails, social posts, slides and simple branding.",
    pricingNote:
      "A generous free plan is available. Paid plans add premium templates, assets and AI features. Check the official site for current details.",
    verdict:
      "The simplest design tool for non-designers, with enough power for most creator needs.",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    maker: "Leonardo.Ai",
    category: "Design",
    pricing: "Freemium",
    featured: true,
    description: "An AI image generator with a free plan, good for art, concept visuals and design assets.",
    affiliateUrl: "https://example.com/go/leonardo-ai",
    features: [
      "Text-to-image generation",
      "Style and model options",
      "Image editing and upscaling tools",
      "Web-based workspace",
    ],
    overview:
      "Leonardo AI is a web-based image generator that offers a choice of models and styles. It is popular for game art, concept visuals, social images and product mockups. You can try it on a free plan with limited credits before deciding on an upgrade.",
    pros: [
      "Free plan lets you experiment",
      "Many style and model choices",
      "Includes editing and upscaling features",
    ],
    cons: [
      "Free credits run out quickly",
      "Results vary, so expect to try several prompts",
      "Check the license terms before commercial use",
    ],
    bestFor: "Concept art, social visuals and design assets.",
    pricingNote:
      "Free plan with limited credits. Paid plans offer more generations and features. Check the official site for current limits and licensing.",
    verdict:
      "A good free way to explore AI images before paying for a more specialized tool.",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    maker: "Midjourney",
    category: "Design",
    pricing: "Paid",
    featured: false,
    description: "A leading AI image generator known for striking, artistic results from text prompts.",
    affiliateUrl: "https://example.com/go/midjourney",
    features: [
      "High-quality artistic images from prompts",
      "Parameters for aspect ratio and style",
      "Variations and upscaling",
      "Active community and prompt sharing",
    ],
    overview:
      "Midjourney is an image generator that people often choose for its distinctive, polished look. You describe an image in a prompt, add optional parameters such as aspect ratio and stylize, and receive several options to vary or upscale. It has a learning curve, but the results can be impressive.",
    pros: [
      "Strong visual quality and style",
      "Powerful parameters for control",
      "Large community with shared prompts",
    ],
    cons: [
      "A paid subscription is needed to generate images",
      "Learning curve for prompts and parameters",
      "Licensing terms apply, so read them before commercial use",
    ],
    bestFor: "Artwork, concept visuals and eye-catching marketing images.",
    pricingNote:
      "Paid plans only. Check the official site for current plans (also included in ToolSuite VIP).",
    verdict:
      "Worth paying for if image quality is your top priority. Beginners may prefer to start with a free tool first.",
  },
];

// Uses your affiliate link from site.config.js, or the official site if empty.
export const TOOLS = RAW_TOOLS.map((tool) => ({
  ...tool,
  affiliateUrl:
    (AFFILIATE_LINKS[tool.slug] || "").trim() || OFFICIAL_URLS[tool.slug] || tool.affiliateUrl,
}));

export function getTool(slug) {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getFeaturedTools() {
  return TOOLS.filter((tool) => tool.featured);
}

// Only the fields that tool cards and the directory filter need. Keeps the
// data sent to the browser small.
export function toCardData(tool) {
  return {
    slug: tool.slug,
    name: tool.name,
    maker: tool.maker,
    category: tool.category,
    pricing: tool.pricing,
    description: tool.description,
    bestFor: tool.bestFor,
    affiliateUrl: tool.affiliateUrl,
  };
}
