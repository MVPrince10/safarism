import { site, addressLine } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-5xl px-5 py-10 flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between text-sm text-ink-muted">
        <div>
          <p className="font-semibold text-ink">{site.legalName}</p>
          <p>{addressLine}</p>
          <p>
            <a href={site.phoneHref} className="hover:text-ink">{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
          </p>
        </div>
        <p>© {new Date().getFullYear()} {site.legalName}. EBT/SNAP accepted.</p>
      </div>
    </footer>
  );
}
