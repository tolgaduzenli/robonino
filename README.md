# Robonino Website

Next.js 14 (App Router) rebuild of the Robonino marketing site, in English and Turkish.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — you'll be redirected to `/en` or `/tr` automatically based on your browser language (there's no separate root page; `middleware.ts` handles the redirect).

## How the bilingual setup works

- Every real page lives under `/en/...` or `/tr/...` (see `app/[locale]/`).
- `middleware.ts` decides which locale a first-time visitor lands on: an explicit `NEXT_LOCALE` cookie (set once someone picks a language) takes priority, then the `x-vercel-ip-country` header (Turkey → `/tr`, once deployed on Vercel), then the browser's `Accept-Language` header, then English as the fallback.
- Translated strings live in `messages/en.json` and `messages/tr.json`, loaded via `lib/i18n/dictionaries.ts`. Non-text content (images, icon names, colors) lives in `lib/content/*.ts` and is zipped together with the translated copy at render time.
- Everything renders as a Server Component by default (SSR + full HTML on first load, good for SEO); only `Header` and `ContactForm` are Client Components, since they need browser state (mobile menu, form status).
- `generateMetadata` on every page sets a translated `<title>`/description and `hreflang` alternates between `/en/...` and `/tr/...`. `app/sitemap.ts` and `app/robots.ts` are generated automatically.

## Adding or editing copy

Edit the matching key in both `messages/en.json` and `messages/tr.json` — the two files must stay structurally identical (the TypeScript types are inferred from `en.json`).

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which emails each submission to `CONTACT_TO_EMAIL` through [Resend](https://resend.com). Spam is filtered by a hidden honeypot field, a minimum fill time and, optionally, Google reCAPTCHA v3. Copy `.env.example` to `.env.local` for local development; without `RESEND_API_KEY` submissions are only logged to the console. Set the same variables in the Vercel project for production.

## Partner schools

UK partner language schools are listed in `lib/content/partnerSchools.ts` (name, website, logo) with their location and description in `partnerSchools.items` in both message files. They appear on the Study UK page and the home page, each linking to the school's website. Entries marked `placeholder: true` show only in `npm run dev`, never in production.

## Images

Photos are self-hosted in `public/images/`. The Robotics workshop gallery still uses Unsplash placeholders (`lib/content/robotics.ts`), which is why `images.unsplash.com` is allowed in `next.config.mjs`. Photo credits required by Unsplash/Pixabay are listed in `lib/content/credits.ts` and shown in the footer.

## Deploying

Built for Vercel (`next build` / `next start`). Country-based locale detection via `x-vercel-ip-country` only has real data once deployed there; locally it falls back to the `Accept-Language` header.
