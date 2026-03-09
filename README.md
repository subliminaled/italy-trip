# Italy Trip Astro Site

This is an Astro version of the Italy family trip site.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a GitHub repo.
2. Update `astro.config.mjs`:
   - replace `YOUR-USERNAME`
   - replace `/italy-trip-astro` if your repo name is different
3. Push to `main`.
4. In GitHub, go to **Settings → Pages** and choose **GitHub Actions**.

The included workflow will build and deploy automatically.

## Content files

- `src/pages/index.astro` — homepage
- `src/pages/cities/*.astro` — per-city pages
