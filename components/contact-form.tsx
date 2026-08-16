"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-[3px] border border-line bg-white px-3.5 py-2.5 text-[16px] text-ink placeholder:text-ink-muted/70 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      _subject: "Safari Supermarket website — new message",
    };

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Couldn't send your message. Please try again or call us.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[4px] border border-line bg-white p-8">
        <p className="font-display font-semibold text-forest text-lg">Message sent.</p>
        <p className="mt-1 text-ink-soft">Thanks — we&apos;ll get back to you within a day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[15px] font-medium text-ink mb-1.5">Name</label>
        <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-[15px] font-medium text-ink mb-1.5">Email</label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-[15px] font-medium text-ink mb-1.5">Message</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Looking for something specific? Ask us." />
      </div>
      {status === "error" && <p className="text-[15px] text-rust">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-[3px] bg-forest text-cream px-6 py-3 text-[15px] font-semibold hover:bg-forest-deep disabled:opacity-50 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
