# AI ToolKit Hub

A free AI prompt generator and AI tools directory built with Next.js 14 (App Router) and Tailwind CSS 3. The prompt generator runs fully in the browser with built-in templates, so it needs no paid API.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node.js 18.17 or newer. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain. It is used for canonical URLs, Open Graph tags and `sitemap.xml`.

> This project was written without being able to run `npm install` or `next build` in the environment where it was created (no network access). Run `npm run build` once on your machine and fix anything it reports before you deploy.

## What is included

| Route | What it is |
| --- | --- |
| `/` | Dark hero with the prompt generator, featured tools grid with category filters, latest guides |
| `/tools` | Searchable and filterable directory of 12 tools |
| `/tools/[slug]` | Review page for each tool (pros, cons, pricing note, verdict) |
| `/guides` and `/guides/[slug]` | 5 full guide articles with Article structured data |
| `/about`, `/contact`, `/privacy-policy`, `/affiliate-disclosure` | Pages that AdSense and affiliate programs ask for |
| `/sitemap.xml`, `/robots.txt` | Generated from the data files |
| `/opengraph-image` | Generated share image |

## Replace these before launch

Search the project for `REPLACE` and `example.com` to find them.

1. **Affiliate links and AdSense: edit `site.config.js` only.** Paste each tool's affiliate link in `AFFILIATE_LINKS` (an empty one falls back to the tool's official site). In `ADSENSE`, set `enabled: true`, paste your Publisher ID (`ca-pub-...`) and the three ad unit slot IDs (header, in-content, sidebar). The AdSense script, the ad units and `/ads.txt` are all generated from those values. Until then, labeled placeholder boxes are shown.
2. **Contact email and site name.** Edit `lib/site.js`.
3. **Domain.** Set `NEXT_PUBLIC_SITE_URL`.
4. **Legal pages.** The privacy policy and affiliate disclosure are general templates. Review them, make sure they match what you really use (analytics, ad networks, email tools) and have them checked by a qualified person if you need legal certainty.
5. **Contact form.** It opens the visitor's email app, because the site has no backend. To receive messages in a dashboard instead, connect a form service in `components/ContactForm.js`.

## Add tools and guides

- **New tool:** add an object to `TOOLS` in `lib/tools.js`. The directory, review page, sitemap and filters update automatically. Set `featured: true` to show it on the home page.
- **New guide:** add an object to `GUIDES` in `lib/guides.js`. Each section accepts `paragraphs`, `bullets`, `code` and `outro`.
- **New prompt type:** add a category and a template function in `lib/promptTemplates.js`.

## Notes for AdSense and SEO

- The starter articles give you a solid base, but approval and rankings favor original value. Add your own experience, screenshots, test results and opinions to the guides and tool reviews, and keep prices and free-plan details current.
- After deploying, submit `https://your-domain.com/sitemap.xml` in Google Search Console.
- Pricing and free-plan limits change often. Re-check each tool's `pricingNote` regularly.

## Project structure

```
app/            Routes, layout, sitemap, robots, Open Graph image
components/     Header, footer, ad slots, prompt generator, tool cards, filters
lib/            Site settings, tools data, guides data, prompt templates, SEO helper
```
