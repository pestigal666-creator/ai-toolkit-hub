import Link from "next/link";
import { formatDate, getReadingTime } from "@/lib/guides";

export default function GuideCard({ guide }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600">
      <p className="text-xs font-medium uppercase tracking-wide text-violet-300">{guide.category}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
        <Link href={`/guides/${guide.slug}`} className="hover:text-violet-200">
          {guide.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{guide.description}</p>
      <p className="mt-4 text-xs text-slate-400">
        {formatDate(guide.date)} &middot; {getReadingTime(guide)} min read
      </p>
    </article>
  );
}
