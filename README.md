# GLITCH — Digital Studio · Software · Innovation

Official website for **GLITCH**, a digital studio that designs and builds
software, applications and digital solutions.

Product names such as NovaDocs and NovaMobile remain the official names of
individual software projects.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** 3
- **Framer Motion**
- **Firebase** (download analytics)
- **Vercel Analytics**
- Italian / English i18n

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # lint
```

## Production domain (required before release)

SEO metadata, sitemap, robots and JSON-LD read from `NEXT_PUBLIC_SITE_URL`
via `src/lib/site.ts`.

If the variable is unset, the site falls back to the placeholder
`https://nova.example.com`. **Do not ship with the placeholder.**

Set the confirmed GLITCH domain in the deployment environment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-confirmed-domain.example
```

Also configure Firebase keys from `.env.example` as needed.

## Brand assets

- Primary logo: `public/images/logo.png`
- Replace with the master GLITCH artwork when a higher-resolution official
  export is available.

## Project structure (high level)

```
src/
  app/                 # routes, metadata, sitemap, robots
  components/          # studio homepage + product/legal shells
  context/             # language provider
  lib/                 # brand, studio copy, ecosystem/product data, legal
public/images/         # logo and product screenshots
```

Homepage sections: Hero → About → Services → Projects → Process → Contact.

Product downloads, Labs, legal pages and Firebase download tracking are
preserved.
