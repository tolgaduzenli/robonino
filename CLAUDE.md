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
  - `getPath(key, locale)` / `getSlug(key, locale)` / `getRouteKeyFromSlug(slug, locale)`: use these instead of hand-building URLs anywhere you link between pages, so links stay correct in both languages
- **To add a new page**: add its key to `routeKeys` + slugs in `lib/i18n/routes.ts`, add a `<name>Metadata()` + `<Name>View` export in a new `components/views/<Name>View.tsx`, wire both into the switch statements in `app/[locale]/[slug]/page.tsx`, and add its copy to both `messages/en.json` and `messages/tr.json`. If it should appear in the header nav / sitemap, add it to `lib/content/nav.ts` (`navItems`) too — `app/sitemap.ts` otherwise already includes every `routeKey` automatically. Legal-only pages like Privacy/Terms are deliberately left out of `navItems` (linked only from the footer) but still appear in `app/[locale]/[slug]/page.tsx` and the sitemap.
- Home (`app/[locale]/page.tsx`) is the one exception — it's not part of the `[slug]` catch-all since it has no slug (`getPath('home', locale)` returns `/${locale}`).

## Content: copy vs. non-text data

Two separate places, and both **must be kept in sync**:

- **Translated copy** (headings, body text, button labels, metadata) lives in `messages/en.json` and `messages/tr.json`, typed via `lib/i18n/dictionaries.ts`. The `Dictionary` type is inferred from `en.json` and `tr.json` is checked against it, so a key missing from `tr.json` fails the build, but a key only in `tr.json` or an array with a different length (e.g. 3 items vs 4) does not. Keep both files structurally identical by hand. Fetch copy in a view with `getDictionary(locale).<pageKey>`.
- Copy shared by more than one page gets its own top-level key instead of living under a page key: `partnerSchools` is used by both Home and Study UK.
- **Non-text content** (image URLs, icon names, tint colors, ordered id lists like team members) lives in `lib/content/*.ts`, one file per page (e.g. `lib/content/about.ts`, `lib/content/robotics.ts`). Views zip the two together at render time — e.g. `AboutView` maps `dict.team.members` (names/roles, translated) against `content.team` (photo paths, by `id`) in the same array order.
- Arrays are zipped **by index**, so when you add, remove or reorder an item, change the JSON array in both languages and the matching `lib/content/*.ts` array together.
- Section text that mixes paragraphs and bullet lists (the two legal pages) uses a lightweight block format instead of a components/content split: each section in the JSON dict is `{ heading, blocks }` where each block is either a `string` (paragraph) or a `string[]` (bullet list), rendered generically by `components/ui/LegalContent.tsx`.

## Rendering & component conventions

- Everything is a Server Component by default. `components/Header.tsx` and `components/ContactForm.tsx` are Client Components (`'use client'`) because they need browser state (mobile menu, form status); `components/SetHtmlLang.tsx` is a tiny Client Component that corrects `<html lang>` after hydration (see root layout note below). The footer newsletter, if it gets re-enabled, will need a Client Component for its form too.
- **Root layout split**: `app/layout.tsx` is the true root layout — Next.js requires it to unconditionally render `<html>`/`<body>`, since it's what renders (alone) for paths that don't resolve into `app/[locale]/...` (invalid locale segments, the auto-generated 404/error boundary). It can't know the locale (params for `[locale]` aren't available above that segment) so it hardcodes `lang="en"`; `app/[locale]/layout.tsx` renders *inside* that body with the real Header/Footer/`<head>` extras, and mounts `SetHtmlLang` to fix the `lang` attribute client-side. Never render a `<head>` from `app/[locale]/layout.tsx`: it lands inside `<body>` and causes a hydration error on every page. Global `<head>` tags (the Material Symbols icon font) go in the root layout; the JSON-LD `<script>` sits in the locale layout's body, which is valid. Do not move `<html>`/`<body>` back into the nested layout — Next.js does not merge them across layouts for the non-happy-path cases, which is what silently breaks this if "simplified" back.
- Every page view (`components/views/*View.tsx`) exports two things: a `<name>Metadata(locale)` function (title/description/hreflang alternates via `getPath`) and the `<Name>View({ locale })` component itself. Both are called from `app/[locale]/[slug]/page.tsx` (or `app/[locale]/page.tsx` for home).
- Colors are OKLCH strings from `lib/content/colors.ts` (`colors`, `tint`), applied via inline `style`, not Tailwind color classes — this was a deliberate choice (see comment in that file) to avoid relying on Tailwind's color-mix/opacity-modifier handling of `oklch()` in a project that can't be build-tested in the design tool. `tailwind.config.ts` also defines `rn-*` color tokens (used for a handful of pseudo-class states like hover, e.g. `.rn-flink:hover`, in `app/globals.css`), but for one-off element styling prefer the `colors`/`tint` objects. Fonts: `font-poppins` for headings/UI labels, `font-nunito` (default body) for everything else.
- Reusable page-building blocks live in `components/ui/` (`SectionHeading`, `IconCard`/`FeatureRow`, `CTABand`, `Blobs` for the decorative hero background, `PartnerSchoolCard`/`PartnerSchoolChip`, etc.). Check there before writing a new one-off section layout.

## Disabled sections

Several sections were switched off because there was no real content for them yet. They are kept in the code as JSX comments (their copy is still in both JSON files) so they can be switched back on:

- Testimonials: Home (`app/[locale]/page.tsx`), and the single testimonial on Study UK, Robotics and Events. The quotes and names in the JSON are **placeholders from the design handoff, not real customers**. Replace them with real, permission-cleared quotes before re-enabling.
- Events gallery (`EventsView.tsx`): waiting for real event photos.
- Home hero stat badge (`1,200+ students & families`): the number isn't verified.
- Secondary hero buttons on Study UK / Robotics / Events, and the "Direct contact" card on Contact (email/phone deliberately not shown publicly to avoid spam).
- Footer newsletter band: gated by `SHOW_NEWSLETTER` in `components/Footer.tsx`. It has no backend yet (planned: Mailjet). Don't enable it until the signup actually goes somewhere.

## Partner schools

`lib/content/partnerSchools.ts` holds the UK partner schools (currently Haileybury, MPW, Oxford International Study Centre, EF): name, website and optional logo path. Each school's translated location line (`city`) and description (`desc`) are in `partnerSchools.items` in both JSON files, in the same order. The section renders in full on Study UK (`#partner-schools` anchor, each card has a "Visit website" button) and as a compact strip on Home (each tile links to the school's site); both hide themselves when the list is empty. The company only has a London address; don't reintroduce Brighton anywhere. Entries flagged `placeholder: true` only render in `npm run dev` and are filtered out of production builds. Logos live in `public/images/partners/` (originals are in `../social_media/`). The Haileybury SVG is supplied white-on-transparent, so the copy here has its fill changed to `#1a1a1a` to show on white cards; redo that if the file is replaced.

Each school also has a detail page one level under Study UK, at `/<locale>/<studyUk slug>/<school id>` (e.g. `/tr/ingilterede-egitim/haileybury`, `/en/study-uk/haileybury`):
- The route is `app/[locale]/[slug]/[school]/page.tsx` (`dynamicParams = false`; any parent slug other than Study UK 404s) and the view is `components/views/SchoolView.tsx`. Build links with `getSchoolPath(id, locale)`. The school id is the same in both languages, and the Header's language switcher carries it across.
- Page copy lives in `schoolPages.<id>` (keyed by id, not index): `tagline`, `intro[]`, `facts[]`, `programmes[]`, `highlights[]`. Its type, `SchoolPageCopy` in `lib/i18n/dictionaries.ts`, is written by hand so that empty arrays type-check. Shared labels live in `schoolPage`.
- Photos go in `public/images/schools/<id>/`, listed as `heroImage` and `gallery` in `lib/content/partnerSchools.ts`.
- Empty sections are hidden in production. In dev they show a dashed "Draft" note.
- A page only goes live once `detailPage: true` is set on the school. Until then it renders in `npm run dev` only. The "Learn more" buttons (Study UK), the Home chip links and the sitemap entries all follow the same flag.

## Writing copy

Copy is written for Turkish parents first. Turkish copy follows the `robonino-voice` skill (speak to the parent, "İngiltere" not "UK", no "â/î", no invented facts). Both languages avoid AI-sounding patterns: no em dashes as connectors (`|` in meta titles), no "not X but Y", no inflated claims. Never invent numbers, ages, prices or partner names: ask Tolga. Privacy and Terms are legal text; don't restyle them.

## Other integration points

- Contact form (`components/ContactForm.tsx`) posts to `app/api/contact/route.ts`, which emails the submission to `CONTACT_TO_EMAIL` via **Resend** (reply-to set to the sender). Without `RESEND_API_KEY` it only `console.log`s. Spam defenses: honeypot field (`company`), a minimum fill time (2.5s), and optional reCAPTCHA v3 (active once `RECAPTCHA_SECRET_KEY` / `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` are set). All env vars are documented in `.env.example`; production values live in the Vercel project settings.
- Images: most are self-hosted under `public/images/` (`brand/`, `destinations/`, `others/`, `team/`). The exceptions are the Robotics workshop gallery (`lib/content/robotics.ts`) and the disabled Events gallery (`lib/content/events.ts`), which still hotlink Unsplash placeholders; `images.unsplash.com` stays allow-listed in `next.config.mjs` until those are replaced. Free-license photos need attribution: add them to `lib/content/credits.ts`, which the footer renders.
- `files/` holds the Markdown source of the Privacy Policy and Terms (EN + TR). Nothing imports it; the live pages render from the JSON dictionaries, so edit both when the legal text changes.
- `design-notes.txt` is the owner's running to-do list (in Turkish).
- Deploy target is Vercel; country-based locale detection in `middleware.ts` only has real data there (falls back to `Accept-Language` locally).
