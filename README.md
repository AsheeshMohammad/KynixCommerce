# AquaServe Commerce

A responsive AquaServe storefront and service-booking demo built with React, TypeScript, and Vite.

## Project structure

```text
src/
  components/   Shared UI such as the header, icons, product cards, and illustrations
  data/         Product, category, and service catalog data
  pages/        Login, storefront, service booking, cart, and confirmation screens
  utils/        Shared formatting and date helpers
  App.tsx       App-level state and page navigation
  App.css       Login page styles
  Commerce.css  Storefront and booking page styles
  types.ts      Shared TypeScript types
```

Page-specific UI and behavior live in `pages/`. Repeated UI lives in `components/`, while shared catalog data and helpers are kept outside the page components.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run build
npm run lint
```

## Deploy to Vercel

This project uses Vite. In the Vercel project settings, use:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |
| Environment Variables | None required |

These settings are also recorded in `vercel.json`. Make sure the Vercel project is connected to the repository root containing `package.json`.

Login, cart checkout, and service booking currently demonstrate front-end interactions only; they are not connected to authentication, payment, or booking APIs.
