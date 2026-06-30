# Ekron — landing page

A single-page marketing site for Ekron, an AI-native ERP for FMCG distribution.

The page is one self-contained HTML document (`Ekron.dc.html`) rendered by a
small client-side runtime (`support.js`), which loads React from a CDN and
mounts the `<x-dc>` template. There is no build step for the page itself.

```
Ekron.dc.html   ← editable source of truth (the page)
support.js      ← runtime that renders it (loads React/Babel from unpkg)
assets/         ← images, videos, posters, OG image, favicon (shipped)
uploads/        ← raw source originals, NOT published (kept for reference)
```

## Deploying to GitHub Pages

Publishing is automated by `.github/workflows/deploy-pages.yml`. On every push
to `main` it assembles a clean site (copies `Ekron.dc.html` to `index.html`,
includes `support.js` and `assets/`, adds `.nojekyll`, and excludes the large
`uploads/` folder) and deploys it.

**One-time setup:** in the repository, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**. Then push to `main` (or
run the workflow manually from the **Actions** tab). The site publishes to:

```
https://rarminr.github.io/ekron-landing-page/
```

> Using a custom domain instead? Update the absolute `og:`/`canonical` URLs in
> the `<head>` of `Ekron.dc.html` so social previews resolve correctly.

## Local preview

The runtime needs an HTTP server (the `assets/` and `support.js` paths are
relative) and internet access (React loads from a CDN):

```sh
python3 -m http.server 8000
# then open http://localhost:8000/Ekron.dc.html
```

## Editing

Edit `Ekron.dc.html`. The visible markup lives inside `<x-dc>`; page metadata
(title, description, Open Graph tags, favicon) lives in the static `<head>` so
search engines and social scrapers can read it without running JavaScript.
