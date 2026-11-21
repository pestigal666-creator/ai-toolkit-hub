import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL_UPDATED, SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Affiliate Disclosure",
  description: `How ${SITE.name} earns money through affiliate links and advertising, and how that does and does not affect our content.`,
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      updated={LEGAL_UPDATED}
      intro={`${SITE.name} is free to use. We cover our costs through affiliate links and advertising. This page explains how that works.`}
    >
      <h2>Affiliate links</h2>
      <p>
        Some links on this website, including many &quot;Visit Tool&quot; buttons, are affiliate links. If you click an
        affiliate link and then sign up for or buy a product, we may receive a commission from the company. This comes at
        no additional cost to you. The price you pay is the same whether you use our link or go to the website directly.
      </p>

      <h2>How we mark affiliate links</h2>
      <p>
        We add a note about affiliate links near the places where they appear, and we mark the links themselves with the
        rel=&quot;sponsored&quot; attribute so that search engines know they are paid or affiliate links. Not every tool
        we list has an affiliate program. Some links may simply go to the tool&apos;s website.
      </p>

      <h2>Independence of our content</h2>
      <p>
        Commissions help us keep the site running, but we do not let them decide what we write. We include tools because
        they are useful for our readers, and we describe limits and downsides next to the strengths. We aim to keep our
        reviews accurate, and we update them when we learn that something has changed.
      </p>

      <h2>Advertising</h2>
      <p>
        We also display advertising, which may include ads served by Google AdSense. Ads are labeled as advertisements
        and are separate from our editorial content. We do not control which ads are shown. For more about how
        advertising and cookies work, see our <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <h2>Your decision is yours</h2>
      <p>
        Prices, free plans and features change often. Please check the tool&apos;s official website for current terms
        before you buy, and decide whether a tool is right for your needs. Nothing on this site is financial, legal or
        professional advice.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this disclosure, you can reach us on the <Link href="/contact">contact page</Link>{" "}
        or at {SITE.email}.
      </p>
    </LegalPage>
  );
}
