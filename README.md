# 🚀 PriceZ

Smart pricing calculators for marketplace sellers.

PriceZ is a Quasar + Vue SPA focused on fee and pricing calculators for:
- Mercado Livre
- Shopee
- Amazon
- Etsy
- Shopify

---

## ✨ Features

- Dynamic calculator route: `/calculators/:platform`
- Reusable calculator UI components
- Platform-specific info + FAQ
- FAQ structured data (JSON-LD) on calculator pages
- SEO-ready page structure
- Shared site footer and clean responsive navigation

---

## 🧰 Tech Stack

- [Quasar](https://quasar.dev/) (Vue 3 + Vite)
- Vue Router
- pnpm / npm

---

## 🏁 Quick Start

### Install dependencies

```bash
pnpm install
# or
npm install
```

### Run in development mode

```bash
pnpm dev
# or
npm run dev
```

---

## 🗺️ Routes

Main pages:
- `/`
- `/about`
- `/privacy-policy`
- `/terms`
- `/contact`

Calculator page:
- `/calculators/:platform`

Compatibility redirects:
- `/calculator/:platform` -> `/calculators/:platform`
- `/terms-of-service` -> `/terms`

---

## 🧩 Project Structure

```text
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
```

---

## ➕ Adding a New Calculator Platform

1. Open `src/data/calculators.js`
2. Add a new platform object with:
   - `slug`
   - `name`
   - `toolName`
   - `summary`
   - `marketplaceInfo` (`description`, `highlights`, optional `notice`)
3. Done. The new platform automatically appears in:
   - Navigation
   - Home tools list
   - Dynamic calculator page (`/calculators/{slug}`)

---

## 📝 Notes

- This repository is currently MVP-focused.
- Contact email in the contact page is placeholder: `me@example.com`.
- Fee policies change frequently; always validate against official marketplace docs.

---

## ❤️ Author

Built by **Lypzis**.
