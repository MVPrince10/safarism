import Image from "next/image";
import Link from "next/link";
import StoreInfo from "@/components/store-info";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-14 sm:pb-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-center">
        <div className="max-w-xl">
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-rust">
            Family-run · {site.address.city}, {site.address.state}
          </p>
          <h1 className="mt-5 font-display font-semibold text-forest text-[2.5rem] leading-[1.06] sm:text-[3.35rem]">
            Everyday groceries and the imports you can&apos;t find anywhere else.
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-[52ch]">
            {site.name} is a neighborhood grocery on Burton St SE — the staples
            you pick up every week, plus shelves of African and international
            specialty foods. If you&apos;re after something particular, call ahead
            and we&apos;ll check the shelf for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] bg-forest text-cream px-6 py-3 text-[15px] font-semibold hover:bg-forest-deep transition-colors"
            >
              Get directions
            </a>
            <Link
              href="/contact"
              className="text-[15px] font-semibold text-forest underline underline-offset-4 decoration-1 hover:text-forest-deep"
            >
              Contact us
            </Link>
          </div>
          <p className="mt-8 text-[15px] text-ink-muted">
            Open seven days a week · EBT/SNAP accepted
          </p>
        </div>

        <figure className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-line bg-cream-deep">
            <Image
              src="/photos/store-1.jpg"
              alt="Inside Safari Supermarket — a shopper at the counter, aisles of imported goods and a row of flags overhead"
              fill
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-ink-muted">
            Inside the store on Burton St SE.
          </figcaption>
        </figure>
      </section>

      {/* Visit band */}
      <section id="visit" className="bg-forest-deep text-cream-on-dark scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
          <div className="border-b border-forest pb-8 mb-10">
            <h2 className="font-display font-semibold text-[1.6rem] sm:text-[1.9rem] text-cream-on-dark">
              Visit us
            </h2>
            <span aria-hidden className="mt-4 block h-[3px] w-12 bg-sun" />
          </div>
          <StoreInfo tone="dark" layout="row" />
        </div>
      </section>

      {/* What we carry — photos treated editorially */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <figure className="order-2 lg:order-1 min-w-0">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[4px] border border-line bg-cream-deep">
            <Image
              src="/photos/store-2.jpg"
              alt="Tall shelves stocked with tins, sauces, snacks and specialty imports"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-ink-muted">Specialty imports, aisle by aisle.</figcaption>
        </figure>

        <div className="order-1 lg:order-2 min-w-0 lg:pt-4">
          <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-rust">
            What we carry
          </p>
          <h2 className="mt-4 font-display font-semibold text-forest text-[1.9rem] sm:text-[2.35rem] leading-[1.12] max-w-[20ch]">
            The weekly shop, and the things you grew up with.
          </h2>
          <div className="mt-6 space-y-5 text-ink-soft leading-relaxed max-w-[54ch]">
            <p>
              Everyday staples and fresh essentials sit alongside African and
              international specialty foods — the ingredients that are hard to
              find in a regular supermarket.
            </p>
            <p>
              We&apos;re a small family store, so if you can&apos;t see something,
              ask. And if we don&apos;t have it, we&apos;ll tell you plainly.
            </p>
          </div>

          <figure className="mt-10 min-w-0">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[4px] border border-line bg-cream-deep">
              <Image
                src="/photos/store-3.jpg"
                alt="A family shopping together, pushing a cart of fresh produce down an aisle"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-muted">Fresh essentials for the week.</figcaption>
          </figure>
        </div>
      </section>

      {/* Closing line */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 mt-16 sm:mt-24">
        <div className="border-t border-line pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-display font-semibold text-forest text-[1.35rem] sm:text-[1.6rem] max-w-[28ch] leading-snug">
            {site.address.street}, {site.address.city}. Come by any day of the week.
          </p>
          <div className="flex items-center gap-x-7">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] bg-forest text-cream px-6 py-3 text-[15px] font-semibold hover:bg-forest-deep transition-colors"
            >
              Get directions
            </a>
            <a href={site.phoneHref} className="text-[15px] font-semibold text-forest underline underline-offset-4 decoration-1 hover:text-forest-deep tabular-nums">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
