import Link from "next/link";

export default function AffiliateNotice({ className = "" }) {
  return (
    <p className={`text-xs leading-5 text-slate-400 ${className}`}>
      Some links on this page are affiliate links. We may earn a commission if you sign up through them, at no extra
      cost to you.{" "}
      <Link href="/affiliate-disclosure" className="underline hover:text-white">
        Read our affiliate disclosure
      </Link>
      .
    </p>
  );
}
