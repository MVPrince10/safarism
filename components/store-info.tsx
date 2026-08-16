import { site, addressLine } from "@/lib/site";

/**
 * Hours · address · phone/email as typographic blocks (no cards).
 * `tone="dark"` is for the forest band on the home page; `tone="light"` for
 * the cream ground on /contact. `layout="row"` spreads the three blocks
 * across columns; `layout="stack"` runs them down one column with hairlines.
 */
export default function StoreInfo({
  tone = "light",
  layout = "row",
}: {
  tone?: "light" | "dark";
  layout?: "row" | "stack";
}) {
  const dark = tone === "dark";
  const label = `font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
    dark ? "text-sun" : "text-rust"
  }`;
  const body = dark ? "text-cream-on-dark" : "text-ink";
  const soft = dark ? "text-cream-on-dark-soft" : "text-ink-soft";
  const rule = dark ? "border-forest" : "border-line";
  const link = dark ? "text-cream-on-dark hover:text-sun" : "text-forest hover:text-forest-deep";

  const wrap =
    layout === "row"
      ? "grid gap-10 sm:grid-cols-3"
      : `divide-y ${rule} [&>section]:py-8 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0`;

  return (
    <div className={wrap}>
      <section>
        <h2 className={label}>Hours</h2>
        <dl className={`mt-4 space-y-2 ${body}`}>
          {site.hours.map((h) => (
            <div key={h.days} className="flex items-baseline justify-between gap-6 max-w-[22rem]">
              <dt className="font-medium">{h.days}</dt>
              <dd className={`tabular-nums ${soft}`}>{h.time}</dd>
            </div>
          ))}
        </dl>
        <p className={`mt-4 text-[15px] ${soft}`}>Open seven days a week.</p>
      </section>

      <section>
        <h2 className={label}>Address</h2>
        <p className={`mt-4 ${body}`}>
          {site.address.street}
          <br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-block text-[15px] font-medium underline underline-offset-4 decoration-1 ${link}`}
        >
          Directions in Google Maps
        </a>
        <span className="sr-only">{addressLine}</span>
      </section>

      <section>
        <h2 className={label}>Phone &amp; email</h2>
        <p className={`mt-4 ${body}`}>
          <a href={site.phoneHref} className={`tabular-nums ${link}`}>{site.phone}</a>
        </p>
        <p className={`mt-1 ${body}`}>
          <a href={`mailto:${site.email}`} className={link}>{site.email}</a>
        </p>
        <p className={`mt-4 text-[15px] ${soft}`}>We accept EBT/SNAP.</p>
      </section>
    </div>
  );
}
