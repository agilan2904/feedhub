# FeedHub

> Your voice shapes what comes next.

## Overview

FeedHub is a feedback platform prototype with three pages:

- **Home** explains the product.
- **Active** collects a response.
- **Results** explains the data.

**It is frontend-only with hardcoded data.** There is no backend, database, auth or API.

## Features

- Home landing page with a looping, CSS/React-built product demo, How it works, Features and a live preview.
- Centred navigation with a sliding active indicator and a mobile dropdown menu.
- Active poll: staggered options, animated selection, keyboard shortcuts 1–5, submitting state, drawn check mark, animated results.
- Results: KPI count-ups, distribution bars, participation trend line chart with hover, recent polls filter, skeletons, empty state.
- Route transitions, scroll-reveal animations, reduced-motion support.

## Tech Stack

React 18, JavaScript, Vite 8, React Router 7, lucide-react, plain CSS tokens. Motion is CSS plus small hooks (IntersectionObserver, phase loops, count-up); no animation library is needed.

## Project Structure

```
src/
  components/  Navbar, Logo, Hero, HeroDemo, HowItWorks, FeatureCard, FeedbackPreview,
               PollCard, PollOption, SubmitButton, SuccessState, ResultsCard, ResultsChart,
               ProgressBar, KpiCard, RecentPollCard, StatusBadge, States, Reveal, Footer
  pages/       Home, Active, Results
  hooks/       useMotion.js, useCountUp.js
  data/        pollData.js
  styles/      globals.css
  App.jsx, main.jsx
design.md
```

## Running Locally

```bash
npm install
npm run dev
```

Routes: `/`, `/active`, `/results`.

## Building for Production

```bash
npm install
npm run build
```

Static files are output to `dist/` and can be served by any static host.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run format` | Format source files with Prettier |

## Deployment

This is a single-page application (SPA). Any route should fall back to `index.html` so React Router can handle it.

### Vercel

A `vercel.json` is included. Connect your Git repository to Vercel and use the default Vite settings, or run:

```bash
npx vercel --prod
```

### Netlify

A `netlify.toml` is included. Connect your Git repository to Netlify, or run:

```bash
npx netlify deploy --prod --dir=dist
```

### Docker

Build and run a containerized version with Nginx:

```bash
docker build -t feedhub .
docker run -p 8080:80 feedhub
```

The app will be available at `http://localhost:8080`.

### Static Hosting / CDN

Upload the contents of `dist/` to any static host (AWS S3 + CloudFront, Cloudflare Pages, GitHub Pages, etc.). Configure the host to serve `index.html` for all unknown paths.

## Interaction Flow

Home → Give Feedback → Active → select → Submit → "Thanks for sharing." → View Results → Results page shows "Your response".

## Design System

See [design.md](design.md).

## Future Improvements

Real backend and persistence, authentication, poll authoring, live updates, CSV export, per-poll detail routes.
