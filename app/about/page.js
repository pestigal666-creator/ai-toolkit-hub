import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Us",
  description: `Learn what ${SITE.name} is, how we choose AI tools, how the site is funded and how to get in touch.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <LegalPage
      title={`About ${SITE.name}`}
      intro="We help creators, writers and small businesses get more from AI tools without spending money or time on trial and error."
    >
      <h2>What we do</h2>
      <p>
        {SITE.name} has three parts. A free prompt generator turns a short topic into a detailed, ready-to-use prompt.
        A tools directory lists popular AI tools for video, voice, writing and design with plain-language reviews. And
        our guides explain how to use AI well, from writing prompts to planning YouTube scripts.
      </p>

      <h2>Our free prompt generator</h2>
      <p>
        The generator runs entirely in your browser using built-in templates. It does not call a paid AI service and
        does not send the topic you type to our servers.
      </p>

      <h2>How we choose tools</h2>
      <p>We include a tool when it meets most of these points:</p>
      <ul>
        <li>It has a free plan or a free way to try it</li>
        <li>It solves a real step in a creator&apos;s workflow</li>
        <li>It is usable without technical skills</li>
        <li>The company is established and the product is actively maintained</li>
      </ul>
      <p>
        Our reviews summarize what each tool is designed to do, its main strengths and limits, and how its pricing
        works. Plans and features change often, so always confirm current details on the tool&apos;s official website
        before you pay for anything.
      </p>

      <h2>How the site is funded</h2>
      <p>
        {SITE.name} is free to use. We earn money through advertising and through affiliate links, which means we may
        receive a commission if you sign up for a tool through one of our links. This never costs you extra. Read the
        full details on our <Link href="/affiliate-disclosure">affiliate disclosure</Link> page.
      </p>

      <h2>Corrections and feedback</h2>
      <p>
        If you spot an error, an out-of-date price or a broken link, please let us know. You can reach us on the{" "}
        <Link href="/contact">contact page</Link> or at {SITE.email}. We update pages when tools change.
      </p>
    </LegalPage>
  );
}
