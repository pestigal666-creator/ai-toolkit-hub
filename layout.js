import "./globals.css";
import Script from "next/script";
import { ADSENSE, GOOGLE_VERIFICATION } from "@/site.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const defaultTitle = `${SITE.name} | ${SITE.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "free AI prompt generator",
    "best free AI tools",
    "AI tools directory",
    "ChatGPT prompts",
    "Midjourney prompts",
    "YouTube script prompts",
    "AI tools for creators",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: defaultTitle,
    description: SITE.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  ...(GOOGLE_VERIFICATION ? { verification: { google: GOOGLE_VERIFICATION } } : {}),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <AdSlot variant="header" />
        </div>
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={websiteSchema} />
        {ADSENSE.enabled && ADSENSE.publisherId ? (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE.publisherId}`}
          />
        ) : null}
      </body>
    </html>
  );
}
