import Link from "next/link";
import Wordmark from "@/components/wordmark";
import { site } from "@/lib/site";

export default function Nav() {
  return (
    <header className="border-t-[3px] border-t-sun border-b border-b-line bg-cream sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">
        <Wordmark />
        <nav className="flex items-center gap-5 sm:gap-7 text-[15px] font-medium text-ink-soft">
          <Link href="/#visit" className="hover:text-forest transition-colors">
            Hours
          </Link>
          <Link href="/contact" className="hover:text-forest transition-colors">
            Contact
          </Link>
          <a
            href={site.phoneHref}
            className="hidden sm:inline-block rounded-[3px] border border-forest text-forest px-4 py-1.5 font-semibold tabular-nums hover:bg-forest hover:text-cream transition-colors"
          >
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
