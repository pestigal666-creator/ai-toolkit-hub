import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL_UPDATED, SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects information, including cookies, advertising and affiliate links.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      intro={`This policy explains what information ${SITE.name} ("we", "us") collects when you visit ${SITE.url}, how we use it and the choices you have.`}
    >
      <h2>Information we collect</h2>
      <p>We do not require you to create an account, and we do not ask for payment information. We may collect:</p>
      <ul>
        <li>
          <strong>Usage and device data.</strong> Like most websites, our hosting provider and analytics tools may log
          your IP address, browser type, device type, pages visited and the time of your visit.
        </li>
        <li>
          <strong>Information you send us.</strong> If you contact us by email or through the contact form, we receive
          your name, email address and message.
        </li>
        <li>
          <strong>Cookies and similar technologies.</strong> See the sections below.
        </li>
      </ul>

      <h2>The prompt generator</h2>
      <p>
        The free prompt generator runs in your browser. The topic you type is used to build a prompt on your device and
        is not sent to our servers.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To operate, secure and improve the website</li>
        <li>To understand which pages are useful so we can write better content</li>
        <li>To reply to messages you send us</li>
        <li>To show advertising and measure affiliate referrals</li>
      </ul>

      <h2>Cookies and advertising</h2>
      <p>
        We may use Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on
        your previous visits to this and other websites. Google&apos;s use of advertising cookies enables it and its
        partners to serve ads to you based on your visit to our site and other sites on the internet.
      </p>
      <p>
        We may also show ads from other advertising networks, such as Adsterra. These networks may use cookies and
        similar technologies to show ads, limit how often you see them and measure how well they perform. Please see
        each network&apos;s own privacy policy for details.
      </p>
      <p>
        You can opt out of personalized advertising by visiting{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        . You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at{" "}
        <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
          aboutads.info
        </a>
        . To learn how Google uses data from sites that use its services, see{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          Google&apos;s partner site policy
        </a>
        .
      </p>
      <p>
        Where required by law, such as in the European Economic Area and the United Kingdom, we ask for your consent
        before using cookies for advertising or analytics. You can also block or delete cookies in your browser
        settings, although some parts of the site may work less well.
      </p>

      <h2>Analytics</h2>
      <p>
        We may use analytics services, such as Google Analytics, to learn how visitors use the site. These services
        collect information such as pages viewed, approximate location and device type, and may set cookies. We use this
        information in aggregate to improve the site.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some links on this site are affiliate links. When you click one, the company we link to may set cookies so it
        can tell that you came from our site. If you sign up or buy, we may earn a commission. See our{" "}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link> for details.
      </p>

      <h2>Third-party websites</h2>
      <p>
        Our pages link to other websites. We do not control their content or privacy practices, so please read their
        policies before sharing personal information.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep messages you send us for as long as needed to respond and to keep a record of the conversation. Server
        and analytics data is kept for the period set by the provider that collects it.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to ask for access to the personal information we hold about
        you, to correct or delete it, to object to certain uses or to withdraw consent. Residents of California may also
        have rights under the California Consumer Privacy Act. To make a request, email us at {SITE.email}.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        This website is not directed to children under 13, and we do not knowingly collect personal information from
        children. If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will change the date at the top of this page.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about this policy, email us at {SITE.email}.</p>
    </LegalPage>
  );
}
