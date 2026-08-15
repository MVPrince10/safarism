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
- `app/page.tsx` (home), `app/contact/page.tsx` (contact), `app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx` (generated favicon).
- `components/` — `nav`, `footer`, `store-info` (location + hours cards, shared by both pages), `contact-form` (client component → Formspree JSON POST, `_subject` tag "Safari Supermarket website").
- `public/photos/store-{1,2,3}.jpg` — the three photos salvaged from the old Squarespace site.
- `amplify.yml` — nvm 20 + `npm ci` + `npm run build`, artifacts `.next`.

## Conventions

- Deploy = push to `main`; Amplify auto-builds. Watch: `aws amplify list-jobs --app-id <id> --branch-name main --profile personal` (app id in the root `docs/architecture.md`).
- Personal identity only: remote `git@github-personal:MVPrince10/safarism.git`, AWS `--profile personal`. Never Subtotal's.
- Tone: plain, warm, no marketing fluff. Real facts only — if hours/phone change, change `lib/site.ts`.
- Domain `safarism.com` is registered at Squarespace Domains (paid through 2029-02) with nameservers delegated to Route53 — DNS records live in Route53, not Squarespace.
