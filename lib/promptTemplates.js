// Smart prompt templates for the free prompt generator.
// Everything runs in the browser. No API calls, no cost.

export const PROMPT_CATEGORIES = [
  { id: "youtube", label: "YouTube Script", placeholder: "e.g. How to start a faceless YouTube channel" },
  { id: "blog", label: "Blog Post", placeholder: "e.g. Best budget laptops for students" },
  { id: "midjourney", label: "Midjourney Image", placeholder: "e.g. a lighthouse on a cliff during a storm" },
  { id: "marketing", label: "Marketing Copy", placeholder: "e.g. an eco-friendly water bottle for hikers" },
];

export const TONES = [
  { id: "friendly", label: "Friendly", text: "friendly and conversational" },
  { id: "professional", label: "Professional", text: "professional and authoritative" },
  { id: "bold", label: "Bold", text: "bold and energetic" },
  { id: "funny", label: "Funny", text: "playful with light humor" },
];

const MIDJOURNEY_STYLES = {
  friendly: "warm color palette, soft natural light, inviting mood, gentle depth of field",
  professional: "clean composition, studio lighting, neutral palette, crisp detail, minimal background",
  bold: "high contrast, dramatic lighting, vivid saturated colors, cinematic composition",
  funny: "playful illustration style, exaggerated expressions, bright pop colors, whimsical details",
};

function cleanTopic(topic) {
  return String(topic || "").replace(/\s+/g, " ").trim();
}

function toneText(toneId) {
  const match = TONES.find((t) => t.id === toneId);
  return match ? match.text : TONES[0].text;
}

function youtubePrompt(topic, tone) {
  return [
    "Act as an experienced YouTube scriptwriter who specializes in retention-focused videos.",
    "",
    `Write a complete video script about: "${topic}".`,
    "",
    "Details:",
    `- Tone: ${tone}`,
    "- Length: 8 to 10 minutes (about 1,200 to 1,500 spoken words)",
    "- Audience: beginners who clicked because they want a clear, practical answer",
    "",
    "Structure the script like this:",
    "1. Hook (first 15 seconds): open with a bold claim, a surprising fact, or a question the viewer cares about. No greetings and no channel intro.",
    "2. Promise: one sentence that says what the viewer will get by the end of the video.",
    "3. Main content: 3 to 5 sections. Give each a short heading, one clear point, one example or short story, and a one-line recap.",
    "4. Pattern interrupts: every 30 to 45 seconds add a cue for a visual or topic change, written as [B-ROLL: ...] or [ON-SCREEN TEXT: ...].",
    "5. Call to action: invite viewers to subscribe and to answer one specific question about the topic in the comments.",
    "",
    "Also provide:",
    "- 5 title ideas under 60 characters",
    "- 3 thumbnail concepts (image idea plus 3 words of text)",
    "- A 150-word video description that includes natural keywords",
    "",
    "Rules: use short sentences and everyday language, avoid filler phrases, and mark any claim that needs a source with [CHECK FACT].",
  ].join("\n");
}

function blogPrompt(topic, tone) {
  return [
    "Act as an expert SEO content writer and editor who writes helpful, people-first articles.",
    "",
    `Write a complete, original blog post about: "${topic}".`,
    "",
    "Details:",
    `- Primary keyword: ${topic}`,
    `- Tone: ${tone}`,
    "- Length: about 1,500 words",
    "- Reader: someone searching Google for a clear, trustworthy answer",
    "",
    "Deliver these parts in order:",
    "1. SEO title (under 60 characters) and meta description (under 155 characters)",
    "2. H1 headline",
    "3. Introduction (about 100 words) that opens with a hook and states what the reader will learn",
    "4. 5 to 7 H2 sections. Use H3 subheadings, short paragraphs, and bullet lists or a table where they make the content easier to scan.",
    "5. FAQ section with 4 questions people really ask, each answered in 2 to 3 sentences",
    "6. Conclusion with a short summary and one clear next step",
    "7. 3 suggestions for internal links and 3 ideas for images with alt text",
    "",
    "Rules: give concrete examples instead of vague advice, do not invent statistics or quotes, mark anything that needs a source with [CHECK FACT], and avoid repeating the keyword unnaturally.",
  ].join("\n");
}

function midjourneyPrompt(topic, toneId) {
  const style = MIDJOURNEY_STYLES[toneId] || MIDJOURNEY_STYLES.friendly;
  return [
    `/imagine prompt: ${topic}, ${style}, detailed textures, sharp focus, balanced framing --ar 16:9 --stylize 250`,
    "",
    "Variations to try:",
    `1. Vertical format for social posts: /imagine prompt: ${topic}, ${style}, vertical composition, subject centered --ar 4:5 --stylize 250`,
    `2. Square format for profile images or thumbnails: /imagine prompt: ${topic}, ${style}, close-up, strong focal point --ar 1:1 --stylize 250`,
    `3. Cleaner result with fewer surprises: /imagine prompt: ${topic}, ${style}, simple background --ar 16:9 --stylize 100 --no text, watermark, clutter`,
    "",
    "Tips: put the main subject first, add one style term and one lighting term, and change only one thing per run so you can see what each change does. Use --no to exclude things you do not want in the image.",
  ].join("\n");
}

function marketingPrompt(topic, tone) {
  return [
    "Act as a senior direct-response copywriter who writes clear, honest, high-converting copy.",
    "",
    `Write marketing copy for: "${topic}".`,
    "",
    "Details:",
    `- Tone: ${tone}`,
    "- Audience: people who have the problem this offer solves but have not yet decided to buy",
    "- Goal: get the reader to take one clear next step",
    "",
    "Deliver:",
    "1. 5 headlines under 10 words, each with a different angle: benefit, curiosity, urgency, social proof, and problem",
    "2. 3 short ad captions (125 characters or fewer) written with the AIDA framework: Attention, Interest, Desire, Action",
    "3. A landing page hero section with a headline, a subheadline, 3 benefit bullets, and button text",
    "4. One promotional email: subject line plus a 120-word body written with the PAS framework: Problem, Agitate, Solution",
    "",
    "Rules: do not make claims that cannot be verified, do not invent testimonials, and use [BRACKETS] for details I need to fill in, such as brand name, price, and offer.",
  ].join("\n");
}

export function generatePrompt({ category, tone, topic }) {
  const cleaned = cleanTopic(topic);
  if (!cleaned) return "";
  const text = toneText(tone);

  switch (category) {
    case "youtube":
      return youtubePrompt(cleaned, text);
    case "blog":
      return blogPrompt(cleaned, text);
    case "midjourney":
      return midjourneyPrompt(cleaned, tone);
    case "marketing":
      return marketingPrompt(cleaned, text);
    default:
      return "";
  }
}
