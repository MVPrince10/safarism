# safarism — Context

**2026-08-15** — Repo created (T-1). Site rebuilt from the 2-page Squarespace original (home + contact, same facts, same three photos), `npm run build` green. Next: Amplify app + Route53 zone, repoint nameservers at Squarespace Domains, verify live, then cancel the Squarespace *website* subscription (keep the domain registration).

Open: swap `lib/site.ts` `formspreeEndpoint` to a Safari-specific Formspree form that notifies uantoinette@gmail.com (currently reuses lmno's form; submissions are tagged `_subject: Safari Supermarket website`).
