import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-300">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Page not found</h1>
      <p className="mt-4 text-lg text-slate-300">
        The page you are looking for does not exist or has moved. Try the prompt generator, the tools directory or our
        guides instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500"
        >
          Back to home
        </Link>
        <Link
          href="/tools"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
        >
          Browse tools
        </Link>
      </div>
    </div>
  );
}
