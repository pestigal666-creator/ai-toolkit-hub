import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { GUIDES } from "@/lib/guides";

// Served at /sitemap.xml. It is built from the data files, so new tools and
// guides appear here automatically.
export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/tools", changeFrequency: "weekly", priority: 0.9 },
    { path: "/guides", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "yearly", priority: 0.4 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.4 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/affiliate-disclosure", changeFrequency: "yearly", priority: 0.3 },
  ].map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const toolPages = TOOLS.map((tool) => ({
    url: `${SITE.url}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guidePages = GUIDES.map((guide) => ({
    url: `${SITE.url}/guides/${guide.slug}`,
    lastModified: new Date(`${guide.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages, ...guidePages];
}
