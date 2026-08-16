import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Mark + HTML wordmark. The wordmark is set in live type (Outfit) rather than
 * cropped from the lockup so it stays crisp at every width; the colours match
 * the lockup (forest "SAFARI", rust "SUPERMARKET").
 */
export default function Wordmark({ size = "md" }: { size?: "md" | "sm" }) {
  const markH = size === "md" ? 44 : 34;
  const markW = Math.round(markH * (695 / 430));
  return (
    <Link href="/" className="inline-flex items-center gap-3 shrink-0" aria-label={`${site.name} — home`}>
      <Image
        src="/brand/mark.png"
        alt=""
        width={markW}
        height={markH}
        priority={size === "md"}
        sizes={`${markW}px`}
        className="shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-forest tracking-[0.02em] ${
            size === "md" ? "text-[1.45rem]" : "text-[1.15rem]"
          }`}
        >
          SAFARI
        </span>
        <span
          className={`font-display font-semibold text-rust tracking-[0.26em] mt-1 ${
            size === "md" ? "text-[0.6rem]" : "text-[0.5rem]"
          }`}
        >
          SUPERMARKET
        </span>
      </span>
    </Link>
  );
}
