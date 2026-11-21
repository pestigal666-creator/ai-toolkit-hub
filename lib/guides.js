// Guide articles. Each section can have: paragraphs (array), bullets (array),
// code (string shown in a copyable block) and outro (closing paragraph).
// Add new guides by adding another object to GUIDES. The sitemap and
// guide pages update automatically.

export const GUIDES = [
  {
    slug: "how-to-use-ai-for-blog-writing-seo",
    title: "How to Use AI for Blog Writing Without Hurting Your SEO",
    metaTitle: "Use AI for Blog Writing Without Hurting SEO",
    description:
      "A practical workflow for writing blog posts with AI that stay helpful, accurate and original, so they can perform well in search.",
    category: "Blogging",
    date: "2026-11-18",
    relatedTools: ["chatgpt", "claude", "canva"],
    intro:
      "AI can cut the time it takes to research, outline and draft a blog post, but publishing raw AI text is a risky shortcut. Readers can tell when an article says nothing new, and search engines focus on whether content is helpful. This guide gives you a workflow that uses AI for speed while keeping the quality, accuracy and personality that make an article worth ranking.",
    sections: [
      {
        heading: "What search engines say about AI content",
        paragraphs: [
          "Google has said that it focuses on the quality and usefulness of content rather than how it was produced. It has also said that using automation mainly to create large amounts of low-value pages to manipulate rankings goes against its spam policies. In practice, that means AI is allowed as a tool, but mass-produced, unedited and unhelpful pages are a problem.",
          "The safest approach is to write for the reader first. If a human expert would be happy to put their name on the article, you are on the right track.",
        ],
      },
      {
        heading: "Step 1: Start with search intent",
        paragraphs: [
          "Before drafting, search for your target keyword and look at what already ranks. Is the intent to learn, compare or buy? What do the best pages cover, and what do they leave out? Write down the questions readers want answered.",
          "This research is yours to do. AI can help you organize it, but it should not replace it.",
        ],
      },
      {
        heading: "Step 2: Build the outline with AI",
        paragraphs: [
          "Ask the AI for an outline that answers the questions you found, and add your own angle. A good outline has a clear promise in the introduction, sections in a logical order and a short FAQ for related questions.",
          "Edit the outline before you write a single paragraph. A strong outline prevents most quality problems later.",
        ],
      },
      {
        heading: "Step 3: Draft section by section",
        paragraphs: [
          "Drafting one section at a time gives better results than asking for a full article at once. Give the AI the heading, the key points, your audience and the tone. Ask for plain language, short paragraphs and concrete examples.",
          "Do not ask it to invent statistics, quotes or sources. If it offers any, treat them as unverified until you find the original.",
        ],
      },
      {
        heading: "Step 4: Add what AI cannot",
        paragraphs: [
          "This is the step that separates a useful article from a generic one. Add things only you can provide:",
        ],
        bullets: [
          "Personal experience, tests or results",
          "Original examples, screenshots or data",
          "Opinions and recommendations based on your knowledge",
          "Local or niche details that general text will miss",
          "Links to reliable sources you have actually read",
        ],
      },
      {
        heading: "Step 5: Fact-check and edit",
        paragraphs: [
          "Check every claim, number, name and date against a reliable source. AI models can sound sure of themselves while being wrong.",
          "Then edit for voice. Read the article out loud, remove filler and repeated points, and make sure every section earns its place.",
        ],
      },
      {
        heading: "Step 6: Optimize the page",
        paragraphs: ["Once the content is solid, handle the on-page basics:"],
        bullets: [
          "A clear title under about 60 characters that includes your main topic",
          "A meta description under about 155 characters that tells readers what they will get",
          "One H1 and logical H2 and H3 headings",
          "Descriptive image alt text and compressed images",
          "Internal links to related pages on your own site",
        ],
      },
      {
        heading: "Step 7: Publish, measure and update",
        paragraphs: [
          "After publishing, watch how the page performs in Google Search Console and your analytics. Update articles when facts change or when you find a better way to explain something. Fresh, accurate pages tend to serve readers better over time.",
        ],
      },
      {
        heading: "What to avoid",
        bullets: [
          "Publishing unedited AI text",
          "Creating many thin pages on similar topics",
          "Inventing sources, quotes or statistics",
          "Hiding affiliate relationships from readers",
          "Ignoring readers' real questions in favor of keywords",
        ],
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "AI is a strong assistant for blog writing when you stay in charge of the research, the facts and the voice. Use it to move faster, then spend the time you save on making the article genuinely better than what is already out there.",
        ],
      },
    ],
  },
  {
    slug: "midjourney-prompts-for-beginners",
    title: "Midjourney Prompts for Beginners: Subjects, Styles and Parameters",
    metaTitle: "Midjourney Prompts for Beginners",
    description:
      "A beginner-friendly guide to writing Midjourney prompts: what to include, useful parameters, copyable examples and free tools to practice with first.",
    category: "Design",
    date: "2026-11-15",
    relatedTools: ["midjourney", "leonardo-ai", "canva"],
    intro:
      "Midjourney can create striking images from a short text description, but the quality of the result depends heavily on how you write the prompt. This guide breaks a good image prompt into simple parts, explains the most useful parameters and gives examples you can adapt. At the end you will also find free options if you want to practice before paying.",
    sections: [
      {
        heading: "What a good image prompt contains",
        paragraphs: [
          "Think of an image prompt as a short description of a photo or painting. Most good prompts cover the same few things, usually in this order:",
        ],
        bullets: [
          "Subject: what is in the image",
          "Setting: where it happens",
          "Style or medium: photograph, watercolor, 3D render, flat illustration",
          "Lighting and color: soft morning light, neon, muted tones",
          "Composition: close-up, wide shot, overhead view",
        ],
      },
      {
        heading: "Start with a clear subject",
        paragraphs: [
          "Put the main subject first and be specific. 'A red fox' is fine. 'A red fox standing on a snowy hill at sunrise' is better because the AI now knows the setting and the mood.",
          "Avoid piling on too many subjects at once, because the image can become cluttered or confusing.",
        ],
      },
      {
        heading: "Add style, lighting and composition",
        paragraphs: [
          "Style words change the whole feel of an image. Try one style term at a time so you can see what it does. Lighting is one of the fastest ways to improve results: soft natural light, golden hour, studio lighting and dramatic backlight all produce very different moods.",
          "For composition, tell the AI how the camera should see the subject. Close-up portrait, wide landscape, aerial view and low angle shot are all useful phrases.",
        ],
      },
      {
        heading: "Parameters that give you control",
        paragraphs: [
          "Midjourney lets you add parameters to the end of a prompt. Here are some of the most useful ones for beginners:",
        ],
        bullets: [
          "--ar sets the aspect ratio, for example --ar 16:9 for a wide image or --ar 4:5 for a vertical social post",
          "--stylize (or --s) controls how strongly Midjourney applies its own artistic look, with lower values staying closer to your words",
          "--no tells Midjourney what to leave out, for example --no text, watermark",
          "--chaos adds more variety between the results of a single prompt",
        ],
        outro:
          "Parameters and available versions change over time, so check the official Midjourney documentation for the current list.",
      },
      {
        heading: "Example prompts you can adapt",
        paragraphs: ["Use these as starting points and replace the subject with your own idea."],
        code: `a lighthouse on a cliff during a storm, dramatic lighting, high contrast, cinematic composition --ar 16:9 --stylize 250

a cozy coffee shop interior in the morning, warm natural light, soft colors, wide shot --ar 3:2

flat vector illustration of a laptop with floating icons, bright pop colors, simple background --ar 1:1 --no text`,
      },
      {
        heading: "Improve results step by step",
        paragraphs: [
          "Do not rewrite the whole prompt after every attempt. Change one thing at a time, such as the lighting or the aspect ratio, and compare the results.",
          "Use the variation and upscale options on the images you like instead of starting from nothing, and keep notes on the wording that works so you can reuse it.",
        ],
      },
      {
        heading: "Free ways to practice first",
        paragraphs: [
          "Midjourney is a paid service, so many beginners start with a free tool to learn how prompts work. Leonardo AI offers a free plan with limited credits, and Canva includes AI image features that are easy to try. The same prompt skills carry over to every image generator.",
          "Our free prompt generator on the home page can also build a Midjourney-style prompt from a simple topic.",
        ],
      },
      {
        heading: "Use images responsibly",
        paragraphs: [
          "Read the terms of any image tool before using results commercially. Avoid prompts that imitate a living artist's work or show real people in misleading ways, and do not present AI images as photographs of real events. Clear labeling builds trust with your audience.",
        ],
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "Strong image prompts come from clear description, a bit of patience and a habit of changing one variable at a time. Start simple, build a small collection of prompts that work for you and keep experimenting.",
        ],
      },
    ],
  },
  {
    slug: "how-to-write-better-ai-prompts",
    title: "How to Write Better AI Prompts: A Simple Framework for Beginners",
    metaTitle: "How to Write Better AI Prompts",
    description:
      "Learn a simple five-part framework for writing AI prompts that get useful results, with before-and-after examples you can copy.",
    category: "Prompting",
    date: "2026-11-12",
    relatedTools: ["chatgpt", "claude", "google-gemini"],
    intro:
      "If your AI answers feel vague or generic, the problem is usually the prompt, not the tool. AI assistants respond to the details you give them. This guide explains a simple framework for writing prompts that get clear, useful results the first time, plus a few habits that make every prompt better.",
    sections: [
      {
        heading: "Why prompts matter",
        paragraphs: [
          "An AI model predicts a helpful reply based on your message. A short, vague message leaves it guessing about your audience, format and goal, so it falls back on safe, generic answers. A clear prompt removes the guessing.",
        ],
      },
      {
        heading: "The five-part prompt framework",
        paragraphs: [
          "Most strong prompts include five things. You do not need long paragraphs. A line for each is enough:",
        ],
        bullets: [
          "Role: who the AI should act as, for example an experienced email marketer",
          "Context: background about you, your audience and the situation",
          "Task: exactly what you want it to do",
          "Format: how the answer should look, such as a table, five bullets or 300 words",
          "Constraints: things to include or avoid, such as tone, banned phrases or reading level",
        ],
      },
      {
        heading: "A before-and-after example",
        paragraphs: [
          "Compare these two prompts for the same request. The first leaves almost everything open. The second uses the framework.",
        ],
        code: `Before:
Write an email about our new course.

After:
Act as an experienced email marketer.
Context: I run an online course teaching beginners to edit videos on their phone. My audience is hobbyists aged 18 to 35.
Task: Write a launch email announcing the course.
Format: Subject line, then a body of about 150 words with one clear button text.
Constraints: Friendly tone, no hype words like amazing, and no fake urgency.`,
        outro:
          "The second version takes thirty extra seconds to write and saves several rounds of rewriting.",
      },
      {
        heading: "Show the AI what good looks like",
        paragraphs: [
          "Examples are one of the strongest tools you have. Paste a short sample of writing you like and ask the AI to match its style. Or give one example of the output format you want.",
          "If you do not want the AI to copy the content, say so clearly and ask it to copy only the style or structure.",
        ],
      },
      {
        heading: "Iterate instead of starting over",
        paragraphs: [
          "Your first prompt rarely gives the perfect result, and that is normal. Treat the conversation as a back-and-forth. Useful follow-ups include:",
        ],
        bullets: [
          "Make it shorter and more direct",
          "Rewrite this for a complete beginner",
          "Give me three different versions with different angles",
          "What is missing from this answer?",
          "Ask me any questions you need to improve this",
        ],
        outro:
          "That last follow-up is powerful. It lets the AI tell you which details it was missing.",
      },
      {
        heading: "Keep a library of prompts that work",
        paragraphs: [
          "When a prompt works well, save it. Replace the details that change, such as topic and audience, with placeholders in brackets and reuse it.",
          "Our free prompt generator does this for YouTube scripts, blog posts, Midjourney images and marketing copy, so you start with a detailed prompt instead of a blank box.",
        ],
      },
      {
        heading: "Common prompt mistakes",
        bullets: [
          "Being vague about the goal or the audience",
          "Asking for too many things in one message",
          "Not saying what format you want",
          "Accepting facts without checking them",
          "Giving up after one weak answer instead of refining it",
        ],
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "Good prompting is mostly clear thinking. If you can explain who the answer is for, what you need and how it should look, you are already ahead of most users. Start with the five parts, add examples when you can and refine as you go.",
        ],
      },
    ],
  },
  {
    slug: "how-to-write-viral-youtube-scripts-with-ai",
    title: "How to Write Viral YouTube Scripts with AI",
    metaTitle: "Write Viral YouTube Scripts with AI",
    description:
      "A step-by-step method for writing YouTube scripts with AI: strong hooks, a simple structure, a copy-ready prompt and an editing checklist.",
    category: "YouTube",
    date: "2026-11-08",
    relatedTools: ["chatgpt", "elevenlabs", "capcut", "canva"],
    intro:
      "No script can promise views, and nobody can force a video to go viral. What you can control is clarity, pacing and how quickly you give viewers a reason to keep watching. AI can speed up that work a lot. This guide shows a practical way to use AI for YouTube scripts, from the first hook to the final edit, while keeping the result sounding like you.",
    sections: [
      {
        heading: "Start with the viewer, not the topic",
        paragraphs: [
          "Before you write anything, answer three questions: who is this video for, what problem do they have right now, and what will they be able to do after watching? A topic like 'productivity' is too broad. 'How to plan your week in 10 minutes' gives the script a clear promise.",
          "Give the AI these answers. The more specific your inputs, the less generic the draft will be.",
        ],
      },
      {
        heading: "Write the hook first",
        paragraphs: [
          "The first 15 seconds decide whether people stay. Ask the AI for ten different hooks, pick the strongest one and rewrite it in your own words. Good hooks usually follow one of these patterns:",
        ],
        bullets: [
          "Curiosity gap: raise a question the viewer wants answered",
          "Bold claim: state something specific and surprising that you then prove",
          "Problem first: name a frustration the viewer feels right now",
          "Result first: show the outcome, then explain how to get it",
        ],
        outro:
          "Avoid long intros, channel greetings and logo animations before the hook. Get to the point first.",
      },
      {
        heading: "Use a simple script structure",
        paragraphs: ["A reliable structure keeps scripts tight and easy to edit:"],
        bullets: [
          "Hook: 10 to 15 seconds that earn attention",
          "Promise: one sentence on what the viewer gets",
          "Body: three to five clear points with an example each",
          "Payoff: deliver what you promised and recap in a few lines",
          "Call to action: one specific ask, such as a question to answer in the comments",
        ],
      },
      {
        heading: "A prompt you can copy",
        paragraphs: [
          "Here is a prompt template that gives the AI enough context to produce a useful draft. Replace the text in brackets with your own details.",
        ],
        code: `Act as an experienced YouTube scriptwriter.

Write a script for a video titled [TITLE].
Audience: [WHO IT IS FOR]
Goal: [WHAT THE VIEWER WILL BE ABLE TO DO]
Tone: [FRIENDLY / BOLD / FUNNY]
Length: about [NUMBER] minutes

Start with a 15-second hook. Then give a one-sentence promise,
3 to 5 sections with one example each, and a short call to action.
Add [B-ROLL] cues every 30 to 45 seconds.
Mark any claim that needs a source with [CHECK FACT].`,
        outro:
          "You can also use the free prompt generator on our home page to build a detailed YouTube prompt in a few seconds.",
      },
      {
        heading: "Edit the AI draft until it sounds like you",
        paragraphs: [
          "AI drafts tend to sound polished but generic. Read the script out loud and change anything you would not say in a normal conversation. A few edits make a big difference:",
        ],
        bullets: [
          "Replace stiff phrases with the words you really use",
          "Add a personal story, mistake or result that only you have",
          "Cut any sentence that repeats a point",
          "Shorten long sentences so they are easy to say in one breath",
          "Check every fact, number and name",
        ],
      },
      {
        heading: "Check retention before you record",
        paragraphs: [
          "Look at the script as a viewer would. Is there a reason to keep watching at the 30-second mark, the one-minute mark and halfway through? If a section only repeats what you said earlier, cut it. If a section is long and flat, add a visual change, an example or a short story.",
          "After publishing, use your analytics to see where viewers drop off. Those moments show you what to fix in the next script.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        bullets: [
          "Publishing the first AI draft without editing it",
          "Making claims you have not verified",
          "Writing for everyone instead of one specific viewer",
          "Promising more in the title than the video delivers",
          "Copying someone else's script instead of finding your own angle",
        ],
      },
      {
        heading: "Tools that make the process easier",
        paragraphs: [
          "Use ChatGPT or Claude for drafting and editing, ElevenLabs if you want AI narration, CapCut or Descript for editing, and Canva for thumbnails. You can read a review of each one in our tools directory.",
        ],
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "Treat AI as a fast first-draft partner, not an author. The creators who get the most from it use it to move faster on structure and ideas, then add their own experience, voice and accuracy on top.",
        ],
      },
    ],
  },
  {
    slug: "top-free-ai-tools-for-content-creators-2026",
    title: "Top 10 Free AI Tools for Content Creators in 2026",
    metaTitle: "Top 10 Free AI Tools for Creators (2026)",
    description:
      "Ten AI tools with free plans that help creators write, edit video, record voiceovers and design graphics, with tips on building a simple workflow.",
    category: "Tools",
    date: "2026-11-05",
    relatedTools: ["chatgpt", "claude", "google-gemini", "capcut", "descript", "runway", "elevenlabs", "otter-ai", "canva", "leonardo-ai"],
    intro:
      "Making content used to need a team, a studio or a big budget. In 2026, one person can script, narrate, edit and design a week of posts with tools that are free to start. This guide covers ten AI tools with free plans, what each one does best and where the limits usually are, so you can build a simple workflow without paying for anything on day one.",
    sections: [
      {
        heading: "How we picked these tools",
        paragraphs: [
          "Every tool on this list has a free plan or a free way to try it, solves a real step in a creator's workflow and works without technical skills. We also looked at whether the company is established and whether the tool is still actively developed.",
          "Free plans change often. Limits get tighter or looser, and features move between tiers. Treat the notes below as a guide to what each tool is good at, and confirm current limits on the official site before you commit.",
        ],
      },
      {
        heading: "1. ChatGPT: scripts, outlines and brainstorming",
        paragraphs: [
          "ChatGPT is the all-rounder. Use it to turn a rough idea into a video outline, generate ten title options or rewrite a paragraph in a different tone. It works best when you give it context about your audience and ask for a specific format.",
          "Watch out for confident mistakes. Check any fact, number or quote before you publish.",
        ],
      },
      {
        heading: "2. Claude: editing and long documents",
        paragraphs: [
          "Claude is a strong choice when you already have text. Paste in a draft, a transcript or a research document and ask it to tighten, summarize or restructure it. Many writers like its calm, natural tone for second drafts.",
          "Free usage is limited, so save it for tasks where you really need it.",
        ],
      },
      {
        heading: "3. Google Gemini: quick answers inside Google's tools",
        paragraphs: [
          "If you work in Google Docs, Gmail and Drive, Gemini can fit into that routine where it is available. It is handy for fast summaries, brainstorming and research starting points.",
          "Features differ by country and plan, so test what your own account includes.",
        ],
      },
      {
        heading: "4. CapCut: fast short-form video editing",
        paragraphs: [
          "CapCut is built for vertical video. Auto captions, templates and simple effects remove most of the repetitive work from Reels, Shorts and TikToks.",
          "Some premium effects and export options need a paid plan, but the free version covers the basics for most beginners.",
        ],
      },
      {
        heading: "5. Descript: edit video by editing text",
        paragraphs: [
          "Descript transcribes your recording and lets you cut it by deleting words in the transcript. It also helps remove filler words and creates captions. It is a great match for tutorials, interviews and podcasts.",
          "The free plan has limits, so it suits testing and light use.",
        ],
      },
      {
        heading: "6. Runway: AI-generated video clips",
        paragraphs: [
          "Runway generates short clips from text or images and includes AI editing tools. Use it for b-roll, concept visuals and experiments.",
          "Free credits are limited, so write careful prompts and do not waste generations.",
        ],
      },
      {
        heading: "7. ElevenLabs: realistic AI voiceovers",
        paragraphs: [
          "ElevenLabs turns a script into natural-sounding narration. Many faceless channels and course creators use it so they do not need to record their own voice.",
          "Read the license before using audio commercially, and only clone a voice with the owner's permission.",
        ],
      },
      {
        heading: "8. Otter.ai: transcripts and summaries",
        paragraphs: [
          "Otter.ai transcribes interviews, calls and recordings and creates summaries. It is useful for pulling quotes and article ideas out of a long conversation.",
          "Proofread the transcript. Background noise can cause errors.",
        ],
      },
      {
        heading: "9. Canva: thumbnails and social graphics",
        paragraphs: [
          "Canva is the easiest design tool for non-designers. Templates cover thumbnails, social posts, slides and simple videos, and its AI helpers speed up image and text work.",
          "Customize templates with your own colors and fonts so your content does not look like everyone else's.",
        ],
      },
      {
        heading: "10. Leonardo AI: free image generation",
        paragraphs: [
          "Leonardo AI creates images from text prompts and offers a choice of styles and models. It is a good place to experiment with AI images because of the free plan.",
          "Credits run out fast and results vary, so expect to try a few prompts. Check the license terms before commercial use.",
        ],
      },
      {
        heading: "How to combine them into a free creator workflow",
        paragraphs: ["You do not need all ten. A simple stack covers most needs:"],
        bullets: [
          "Idea and script: ChatGPT, Claude or Gemini",
          "Voice: ElevenLabs, or record your own",
          "Editing: CapCut for short clips, Descript for talking-head content",
          "Visuals: Canva for thumbnails, Leonardo AI for custom images",
          "Repurposing: Otter.ai to turn recordings into text for blog posts and captions",
        ],
        outro:
          "Start with one tool per step, learn it well and only add another when you hit a real limit.",
      },
      {
        heading: "Limits to check on any free plan",
        bullets: [
          "Usage caps such as credits, minutes or characters per month",
          "Watermarks or export limits on finished files",
          "Whether commercial use is allowed on the free plan",
          "How your uploads and prompts are stored or used",
        ],
        outro:
          "Reading the terms takes five minutes and can save you from redoing work later.",
      },
      {
        heading: "Final thoughts",
        paragraphs: [
          "AI tools are best treated as assistants. They speed up the repetitive parts so you can spend your time on ideas, accuracy and personality, which are the parts audiences remember.",
          "Pick two or three tools from this list, try them on a real project this week and keep only what actually saves you time. Our free prompt generator can help you get better results from the writing tools on day one.",
        ],
      },
    ],
  },
];

export function getGuide(slug) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function getSortedGuides() {
  return [...GUIDES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getReadingTime(guide) {
  let text = guide.intro;
  for (const section of guide.sections) {
    text += " " + (section.paragraphs || []).join(" ");
    text += " " + (section.bullets || []).join(" ");
    text += " " + (section.outro || "");
  }
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
