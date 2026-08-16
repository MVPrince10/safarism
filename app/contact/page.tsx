import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import StoreInfo from "@/components/store-info";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Safari Supermarket in Grand Rapids, MI — questions about specialty imports, stock checks, hours and directions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20">
      <div className="max-w-2xl">
        <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-rust">
          Contact
        </p>
        <h1 className="mt-4 font-display font-semibold text-forest text-[2.4rem] sm:text-[3rem] leading-[1.06]">
          Ask us anything about the store.
        </h1>
        <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-[52ch]">
          Looking for a particular import, or want to check if something is in
          stock? Send a note and we&apos;ll reply within a day — or call{" "}
          <a href={site.phoneHref} className="text-forest font-medium underline underline-offset-4 decoration-1 tabular-nums">
            {site.phone}
          </a>{" "}
          during opening hours.
        </p>
      </div>

      <div className="mt-12 sm:mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="max-w-xl">
          <ContactForm />
        </div>
        <aside className="lg:border-l lg:border-line lg:pl-14">
          <StoreInfo tone="light" layout="stack" />
        </aside>
      </div>
    </div>
  );
}
