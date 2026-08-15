import { site, addressLine } from "@/lib/site";

export default function StoreInfo() {
  return (
    <div id="hours" className="grid gap-6 sm:grid-cols-2 scroll-mt-24">
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
          Location
        </h2>
        <p className="text-lg font-medium leading-snug">{addressLine}</p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-medium text-green hover:text-green-dark"
        >
          Open in Google Maps →
        </a>
        <div className="mt-5 pt-5 border-t border-border text-sm space-y-1">
          <p>
            <a href={site.phoneHref} className="hover:text-green">{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-green">{site.email}</a>
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
          Hours
        </h2>
        <dl className="space-y-3">
          {site.hours.map((h) => (
            <div key={h.days} className="flex items-baseline justify-between gap-4">
              <dt className="font-medium">{h.days}</dt>
              <dd className="text-ink-soft tabular-nums">{h.time}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 pt-5 border-t border-border text-sm text-ink-muted">
          Open 7 days a week. We accept EBT/SNAP.
        </p>
      </section>
    </div>
  );
}
