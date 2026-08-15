# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js 14 (App Router) marketing site for **Robonino**, a UK-based company offering three services under one brand: robotics & coding education for kids (Young Engineers franchisee), school placement / study-abroad consultancy for families (partnered with Education Advisers, see `Partnership Context.txt`), and corporate team-building workshops. The site is bilingual (English / Turkish) and targets Turkish families and companies as its primary audience. `Young Engineers Context.txt` and `Partnership Context.txt` in the repo root hold background on the two franchise/partner relationships that some page copy is sourced from — read them if you're asked to update copy on the Robotics or Study-UK pages.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also runs typecheck + eslint)
npm run start    # serve the production build
npm run lint     # eslint only
```

There is no test suite configured in this repo.

## Bilingual routing architecture

This is the one thing worth understanding before touching any page:

- Every real page lives under `/en/...` or `/tr/...`. There is no unprefixed root page — `middleware.ts` redirects `/` to a locale based on (in priority order): an existing `NEXT_LOCALE` cookie → `x-vercel-ip-country` header (`TR` → `/tr`, only populated on Vercel) → the browser's `Accept-Language` header → English as the default.
- All non-home pages are served by the single catch-all route `app/[locale]/[slug]/page.tsx`. It does NOT map slugs 1:1 to English route names — each page has a **translated slug per locale** (e.g. `robotics` is `/en/robotics` but `/tr/robotik-kodlama`). This mapping lives in `lib/i18n/routes.ts`:
  - `routeKeys` — the canonical list of page identifiers (`studyUk`, `robotics`, `events`, `about`, `contact`, `privacy`, `terms`)
  - `slugs` — `{ routeKey: { en: '...', tr: '...' } }`
  - `getPath(key, locale)` / `getSlug(key, locale)` / `getRouteKeyFromSlug(slug, locale)` — use these instead of hand-building URLs anywhere you link between pages, so links stay correct in both languages
- **To add a new page**: add its key to `routeKeys` + slugs in `lib/i18n/routes.ts`, add a `<name>Metadata()` + `<Name>View` export in a new `components/views/<Name>View.tsx`, wire both into the switch statements in `app/[locale]/[slug]/page.tsx`, and add its copy to both `messages/en.json` and `messages/tr.json`. If it should appear in the header nav / sitemap, add it to `lib/content/nav.ts` (`navItems`) too — `app/sitemap.ts` otherwise already includes every `routeKey` automatically. Legal-only pages like Privacy/Terms are deliberately left out of `navItems` (linked only from the footer) but still appear in `app/[locale]/[slug]/page.tsx` and the sitemap.
- Home (`app/[locale]/page.tsx`) is the one exception — it's not part of the `[slug]` catch-all since it has no slug (`getPath('home', locale)` returns `/${locale}`).

## Content: copy vs. non-text data

Two separate places, and both **must be kept in sync**:

- **Translated copy** (headings, body text, button labels, metadata) lives in `messages/en.json` and `messages/tr.json`, typed via `lib/i18n/dictionaries.ts` (`Dictionary` type is inferred from `en.json`, so `tr.json` must stay structurally identical or it'll silently fall back to wrong types, not a build error). Fetch it in a view with `getDictionary(locale).<pageKey>`.
- **Non-text content** (image URLs, icon names, tint colors, ordered id lists like team members) lives in `lib/content/*.ts`, one file per page (e.g. `lib/content/about.ts`, `lib/content/robotics.ts`). Views zip the two together at render time — e.g. `AboutView` maps `dict.team.members` (names/roles, translated) against `content.team` (photo paths, by `id`) in the same array order.
- Section text that mixes paragraphs and bullet lists (the two legal pages) uses a lightweight block format instead of a components/content split: each section in the JSON dict is `{ heading, blocks }` where each block is either a `string` (paragraph) or a `string[]` (bullet list), rendered generically by `components/ui/LegalContent.tsx`.

## Rendering & component conventions

- Everything is a Server Component by default. `components/Header.tsx` and `components/ContactForm.tsx` are Client Components (`'use client'`) because they need browser state (mobile menu, form status); `components/SetHtmlLang.tsx` is a tiny Client Component that corrects `<html lang>` after hydration (see root layout note below).
- **Root layout split**: `app/layout.tsx` is the true root layout — Next.js requires it to unconditionally render `<html>`/`<body>`, since it's what renders (alone) for paths that don't resolve into `app/[locale]/...` (invalid locale segments, the auto-generated 404/error boundary). It can't know the locale (params for `[locale]` aren't available above that segment) so it hardcodes `lang="en"`; `app/[locale]/layout.tsx` renders *inside* that body with the real Header/Footer/`<head>` extras, and mounts `SetHtmlLang` to fix the `lang` attribute client-side. Do not move `<html>`/`<body>` back into the nested layout — Next.js does not merge them across layouts for the non-happy-path cases, which is what silently breaks this if "simplified" back.
- Every page view (`components/views/*View.tsx`) exports two things: a `<name>Metadata(locale)` function (title/description/hreflang alternates via `getPath`) and the `<Name>View({ locale })` component itself. Both are called from `app/[locale]/[slug]/page.tsx` (or `app/[locale]/page.tsx` for home).
- Colors are OKLCH strings from `lib/content/colors.ts` (`colors`, `tint`), applied via inline `style`, not Tailwind color classes — this was a deliberate choice (see comment in that file) to avoid relying on Tailwind's color-mix/opacity-modifier handling of `oklch()` in a project that can't be build-tested in the design tool. `tailwind.config.ts` also defines `rn-*` color tokens (used for a handful of pseudo-class states like hover, e.g. `.rn-flink:hover`, in `app/globals.css`), but for one-off element styling prefer the `colors`/`tint` objects. Fonts: `font-poppins` for headings/UI labels, `font-nunito` (default body) for everything else.
- Reusable page-building blocks live in `components/ui/` (`SectionHeading`, `IconCard`/`FeatureRow`, `CTABand`, `Blobs` for the decorative hero background, etc.) — check there before writing a new one-off section layout.

## Other integration points

- Contact form (`components/ContactForm.tsx`) posts to `app/api/contact/route.ts`, which validates and currently only `console.log`s the submission — wiring a real email/CRM provider is the marked `TODO` there.
- Images are all still hotlinked to Unsplash (`images.unsplash.com`, allow-listed in `next.config.mjs`) per the original design handoff; swapping to licensed/self-hosted assets only requires editing the relevant `lib/content/*.ts` file plus `next.config.mjs` if the host changes.
- Deploy target is Vercel; country-based locale detection in `middleware.ts` only has real data there (falls back to `Accept-Language` locally).
