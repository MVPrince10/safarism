# safarism — Context

**2026-08-15** — Created for T-1 (`safari`): rebuilt the 2-page Squarespace site (home + contact, same facts, same three photos) on Next 15 → Amplify.

Infra state:
- Amplify app `d19tdnpxsxl0d8` (us-west-2, profile personal), auto-deploys `main`. Build needs node 24 + a linux-generated lockfile (`amplify.yml` pins nvm 24; the lock was regenerated in `node:24` because macOS npm omitted sharp's `@emnapi` optional deps and `npm ci` failed).
- Route53 zone `Z0980712B6Q1FSFIJ4MK` — Amplify seeded A alias / www CNAME / ACM validation CNAME; SPF (`v=spf1 -all`), DMARC (reject), empty DKIM replicated from Squarespace. `www` 301→ apex via Amplify custom rule.
- Domain registrar stays **Squarespace Domains** (auto-renews $20/yr, expires 2029-02-23). Only nameservers move.

**Cutover done 2026-08-15:** nameservers at Squarespace Domains → awsdns (17:18 MT); Amplify domain association AVAILABLE (17:33); ACM cert `*.safarism.com` issued; https://safarism.com serves from CloudFront, www 301→apex. Old-resolver caches (4h TTL) may show Squarespace briefly. Note: Squarespace gates any DNS/nameserver edit behind a Google re-verify modal (Prince's login).

Not needed: cancelling Squarespace — the website subscription is already set to lapse 2027-02-23 (auto-renew off).

Open: swap `lib/site.ts` `formspreeEndpoint` to a Safari-specific Formspree form notifying uantoinette@gmail.com (currently reuses lmno's form; submissions tagged `_subject: Safari Supermarket website`).
