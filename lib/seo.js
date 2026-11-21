import { SITE } from "@/lib/site";

// Builds a complete metadata object for a page. Relative URLs are resolved
// against metadataBase, which is set in app/layout.js.
export function pageMeta({ title, description, path, type = "website", publishedTime }) {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
