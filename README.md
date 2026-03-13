# PriceZ

PriceZ is a marketplace pricing calculator built for sellers who need fast margin and fee estimates before publishing products.

This public repository reflects the original MVP version of the project.

Live site: `https://pricezapp.com`

## What PriceZ Does

PriceZ helps estimate:
- selling price
- marketplace fees
- expected profit margin

Supported platforms in the MVP:
- Mercado Livre
- Shopee
- Amazon
- Etsy
- Shopify

## MVP Features

- Marketplace calculator pages by platform
- Reusable calculator UI components
- Platform-specific summaries and FAQs
- Responsive layout
- FAQ structured data on calculator pages
- Basic SEO-ready page structure

## Tech Stack

- [Quasar](https://quasar.dev/)
- Vue 3
- Vue Router
- Vite
- pnpm / npm

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Routes

### Main pages:

- /
- /about
- /privacy-policy
- /terms
- /contact

### Calculator page:

/calculators/:platform

### Legacy redirects:

- /calculator/:platform -> /calculators/:platform
- /terms-of-service -> /terms



## Project Structure

src/
  components/
    CalculatorForm.vue
    CalculationResult.vue
    ExampleCalculation.vue
    FAQSection.vue
    PlatformInfo.vue
    SiteFooter.vue
    ToolLayout.vue
  data/
    calculators.js
  layouts/
    MainLayout.vue
  pages/
    IndexPage.vue
    AboutPage.vue
    PrivacyPolicyPage.vue
    TermsOfServicePage.vue
    ContactPage.vue
    calculator/
      CalculatorPlatformPage.vue


## Notes

- This repository is the public MVP snapshot of PriceZ.
- The live product continued evolving after this version.
- Marketplace fee policies change often, so values should always be validated against official platform documentation.

## Live Product
If you want to see the current public version of the app, visit:

https://pricezapp.com

### Author
Built by Lypzis.


