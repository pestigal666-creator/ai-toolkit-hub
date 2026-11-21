// Shared layout for About, Contact, Privacy Policy and Affiliate Disclosure pages.
export default function LegalPage({ title, updated, intro, children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
      {updated ? <p className="mt-2 text-sm text-slate-400">Last updated: {updated}</p> : null}
      {intro ? <p className="mt-4 text-lg leading-8 text-slate-300">{intro}</p> : null}
      <div className="article mt-6">{children}</div>
    </div>
  );
}
