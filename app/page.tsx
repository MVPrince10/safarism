import Image from "next/image";
import Link from "next/link";
import StoreInfo from "@/components/store-info";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="pt-12 sm:pt-16 pb-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-green mb-4">
            {site.address.city}, {site.address.state}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Your neighborhood grocery, with the imports you can&apos;t find anywhere else.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-prose">
            {site.name} is a family-run store on Burton St SE — everyday
            staples, fresh essentials, and shelves of African and international
            specialty foods. Come by, or call ahead and we&apos;ll check if
            it&apos;s in stock.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green text-white px-5 py-2.5 text-sm font-medium hover:bg-green-dark transition-colors"
            >
              Get directions
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-ink-muted transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border">
          <Image
            src="/photos/store-1.jpg"
            alt="Inside Safari Supermarket — aisles of imported goods with flags overhead"
            fill
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <StoreInfo />

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
          <Image
            src="/photos/store-2.jpg"
            alt="Shelves stocked with snacks and specialty imports"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
          <Image
            src="/photos/store-3.jpg"
            alt="A family shopping together with a cart of fresh produce"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
