"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-green transition-colors";

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
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="font-semibold text-green mb-1">Message sent!</p>
        <p className="text-sm text-ink-muted">Thanks — we&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-soft mb-1.5">Name</label>
        <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-1.5">Email</label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-soft mb-1.5">Message</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder="Looking for something specific? Ask us." />
      </div>
      {status === "error" && <p className="text-sm text-red-700">{errorMessage}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-green text-white px-6 py-2.5 text-sm font-medium hover:bg-green-dark disabled:opacity-50 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
