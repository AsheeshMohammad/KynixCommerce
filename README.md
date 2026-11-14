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

Login, cart checkout, and service booking currently demonstrate front-end interactions only; they are not connected to authentication, payment, or booking APIs.
