# AGENTS.md

## Overview

`safarism` — the public website for **Safari Supermarket LLC**, a family-run grocery at 1324 Burton St SE, Grand Rapids, MI (operators Odon + Antoinette; Prince is remote admin). Live at **safarism.com** on AWS Amplify (personal account, us-west-2). It is a **brochure site**: hours, address, phone, email, photos, a contact form. That's the whole job — every "store feature" (inventory, online ordering, DoorDash/Uber Eats, accounting) goes through the Clover POS ecosystem, never this site. If you're tempted to add a cart or catalog here, stop.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # must exit 0 before pushing — a push to main IS production
npm run lint
```

## Architecture

- Next.js 15 App Router · React 19 · Tailwind v4 (`@theme` tokens in `app/globals.css`) · TypeScript. Mirrors `repos/lmno`.
- `lib/site.ts` — single source of truth for store facts (name, address, hours, phone, email, Formspree endpoint). Edit here; pages read from it.
- `app/page.tsx` (home), `app/contact/page.tsx` (contact), `app/robots.ts`, `app/sitemap.ts`.
- `app/icon.png` · `app/apple-icon.png` · `app/opengraph-image.png` — **static, checked-in** favicon / touch icon / OG card, generated from the brand assets by `node scripts/brand-assets.mjs` (sharp, already in `node_modules` via next). Next picks them up by filename; don't add manual `icons`/`openGraph.images` metadata.
- `components/` — `wordmark` (mark + live-type wordmark, used by nav and footer), `nav`, `footer`, `store-info` (hours · address · phone/email as typographic blocks; `tone` light/dark, `layout` row/stack — shared by both pages), `contact-form` (client component → Formspree JSON POST, `_subject` tag "Safari Supermarket website").
- `public/brand/mark.png` (transparent landscape mark, 695×430) and `public/brand/lockup.webp` (full lockup: mark + wordmark + address, white ground, trimmed) — the only two logo sources. Prince supplied them; regenerate the `app/*.png` icons if they change.
- `public/photos/store-{1,2,3}.jpg` — the three photos salvaged from the old Squarespace site. `store-1` is the real interior (hero); `store-2` tall shelves; `store-3` family with cart.
- `amplify.yml` — nvm 24 + `npm ci` + `npm run build`, artifacts `.next`.

## Design system (T-2 redesign)

- **Palette** lives in `app/globals.css` `@theme`, every token sampled from the mark and commented: cream ground (`--color-cream`), forest for headings/primary/buttons, forest-deep for the dark "Visit" band, rust for small tracked labels (like "SUPERMARKET" in the lockup), sun/amber **only** as an accent rule (nav top border, band underline) — never as text on cream (contrast). All text pairs ≥ 4.6:1.
- **Type**: `Outfit` (display — headings, wordmark, tracked labels) + `Source Sans 3` (body), both via `next/font/google` in `app/layout.tsx`. Two families, no more.
- **Shape language**: whitespace over boxes, hairline borders (`--color-line`) over shadows, 3–4px radii (no pills, no rounded-2xl cards), photos as `<figure>` with a plain caption. No gradients, no emoji, no icon packs.
- Copy stays plain and warm; store facts always from `lib/site.ts`.

## Conventions

- Deploy = push to `main`; Amplify auto-builds. Watch: `aws amplify list-jobs --app-id <id> --branch-name main --profile personal` (app id in the root `docs/architecture.md`).
- Personal identity only: remote `git@github-personal:MVPrince10/safarism.git`, AWS `--profile personal`. Never Subtotal's.
- Tone: plain, warm, no marketing fluff. Real facts only — if hours/phone change, change `lib/site.ts`.
- Domain `safarism.com` is registered at Squarespace Domains (paid through 2029-02) with nameservers delegated to Route53 — DNS records live in Route53, not Squarespace.
