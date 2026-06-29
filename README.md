# Jesse Karanga Kimani — Architect Portfolio

A modern, animated single-page portfolio for **Arch. Jesse Karanga Kimani**
(M.AAK, Reg. No. A1690), built with **Next.js 16 (static export)**, **Tailwind CSS v4**,
**GSAP + ScrollTrigger** and **Lenis** smooth scroll.

Aesthetic: editorial architectural minimalism — bone / ink / clay palette,
Fraunces display serif + Inter + Space Mono.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs a static site to ./out
```

## Deploying

### GitHub Pages (automatic)
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`GITHUB_PAGES=true` (so asset paths are prefixed with `/jesse-portfolio`) and
publishes `./out` to GitHub Pages.

> In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions.**

### cPanel (later)
cPanel serves from a domain root, so build **without** the GitHub Pages prefix:

```bash
npm run build            # GITHUB_PAGES is unset -> empty basePath
```

Then upload everything inside `./out` to your cPanel `public_html` (or a
subfolder) via File Manager / FTP. No Node runtime is required on the server —
it is plain static HTML, CSS, JS and images.

## Updating content

- **Projects** — edit `app/data/projects.ts`.
- **Project photos** — drop real images into `public/projects/` and point each
  project's `image` field at the new filename (currently architecture stock
  photos used as placeholders).
- **Certificates** — `public/certs/` (real scans from the profile).
- **Contact / credentials** — `components/Contact.tsx`, `components/Credentials.tsx`.
