import LegalPage from "@/components/LegalPage";
import ContactForm from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Us",
  description: `Get in touch with the ${SITE.name} team for questions, corrections, partnership requests or feedback.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      intro="Have a question, a correction or a suggestion for a tool we should cover? We would like to hear from you."
    >
      <h2>Email</h2>
      <p>
        You can write to us at <strong>{SITE.email}</strong>. We try to reply within a few business days.
      </p>

      <h2>Send a message</h2>
      <div className="mt-4">
        <ContactForm />
      </div>

      <h2>What to contact us about</h2>
      <ul>
        <li>Corrections or out-of-date information</li>
        <li>Suggestions for tools or guides</li>
        <li>Advertising and partnership questions</li>
        <li>Privacy requests, such as asking us to delete data you sent us</li>
      </ul>
    </LegalPage>
  );
}
