import Link from "next/link";
import Wordmark from "@/components/wordmark";
import { site, addressLine } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-[auto_1fr_auto] sm:items-start">
        <div className="space-y-4">
          <Wordmark size="sm" />
          <p className="text-sm text-ink-muted max-w-[30ch]">
            Family-run grocery and specialty imports on Burton St SE.
          </p>
        </div>

        <address className="not-italic text-[15px] leading-relaxed sm:justify-self-center sm:text-center">
          <p className="font-medium text-ink">{site.legalName}</p>
          <p className="text-ink-soft">{addressLine}</p>
          <p className="text-ink-soft">
            <a href={site.phoneHref} className="hover:text-forest tabular-nums">{site.phone}</a>
            <span aria-hidden className="mx-2 text-line">|</span>
            <a href={`mailto:${site.email}`} className="hover:text-forest">{site.email}</a>
          </p>
        </address>

        <div className="text-[15px] sm:text-right space-y-1.5">
          <p>
            <Link href="/#visit" className="text-ink-soft hover:text-forest">Hours</Link>
            <span aria-hidden className="mx-2 text-line">|</span>
            <Link href="/contact" className="text-ink-soft hover:text-forest">Contact</Link>
          </p>
          <p className="text-ink-muted">EBT/SNAP accepted.</p>
          <p className="text-ink-muted">© {new Date().getFullYear()} {site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
