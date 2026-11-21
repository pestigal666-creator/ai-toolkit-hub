import Link from "next/link";
import { SITE } from "@/lib/site";

const EXPLORE = [
  { href: "/#generator", label: "Free Prompt Generator" },
  { href: "/tools", label: "AI Tools Directory" },
  { href: "/guides", label: "Guides" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
            A free prompt generator and a hand-picked directory of AI tools for creators, writers and marketers.
          </p>
        </div>
        <nav aria-label="Explore">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Explore</p>
          <ul className="mt-3 space-y-2">
            {EXPLORE.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company and legal">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Company</p>
          <ul className="mt-3 space-y-2">
            {COMPANY.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs leading-5 text-slate-500">
          <p>
            &copy; {year} {SITE.name}. All rights reserved. Some links on this site are affiliate links. We may earn a
            commission if you buy through them, at no extra cost to you.
          </p>
          <p className="mt-1">
            Tool names and logos belong to their respective owners. Pricing and features change, so confirm details on
            each tool&apos;s official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
