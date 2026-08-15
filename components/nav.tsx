import Link from "next/link";
import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="border-b border-border bg-bg/90 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-5xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <span className="inline-block h-3 w-3 rounded-full bg-green" aria-hidden />
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-ink-soft">
          <Link href="/#hours" className="hover:text-ink transition-colors">
            Hours
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
          <a
            href={site.phoneHref}
            className="hidden sm:inline-block rounded-full bg-green text-white px-4 py-1.5 hover:bg-green-dark transition-colors"
          >
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
