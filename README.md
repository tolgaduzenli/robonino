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

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which validates the payload and currently just logs it. Wire in a real email provider (Resend, Postmark, etc.) or CRM webhook where the `TODO` is marked in that file.

## Images

All photos are still pointing at Unsplash's CDN (as in the original design handoff). Swap these for licensed/self-hosted copies in `lib/content/*.ts` before going live — `next.config.mjs` already allows `images.unsplash.com` as a remote image source, so this is the only file that needs updating if you move the assets.

## Deploying

Built for Vercel (`next build` / `next start`). Country-based locale detection via `x-vercel-ip-country` only has real data once deployed there; locally it falls back to the `Accept-Language` header.
