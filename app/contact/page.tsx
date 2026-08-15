import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import StoreInfo from "@/components/store-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Safari Supermarket in Grand Rapids, MI — questions about specialty imports, stock checks, hours and directions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 sm:pt-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact us</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Have a question about our specialty imports, or want to check if an
          item is in stock? Fill out the form and we&apos;ll get back to you
          within 24 hours — or just call.
        </p>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="max-w-xl">
          <ContactForm />
        </div>
        <div>
          <StoreInfo />
        </div>
      </div>
    </div>
  );
}
