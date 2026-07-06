# PUPA Center website

The new website for PUPA Center (pupacenter.org), replacing the Squarespace site.

- Built with [Astro](https://astro.build) — a fast static site generator
- Bilingual: English at `/`, Indonesian at `/id/`
- Hosted for free on Cloudflare Pages

## Editing content

- Homepage text (both languages): `src/i18n/home.ts`
- Menu and footer text (both languages): `src/i18n/ui.ts`
- Pages live in `src/pages/` (English) and `src/pages/id/` (Indonesian)

## Running locally (optional, for developers)

```
npm install
npm run dev
```

## Deployment

Cloudflare Pages builds automatically on every push to `main`.
Build command: `npm run build` · Output directory: `dist`

## Images

All images are self-hosted in `public/images/` — the site has ZERO dependency on
Squarespace. To add a new photo: optimize it to max 1600px, place it in
`public/images/`, and reference it as `/images/filename.jpg`.
