<template>
  <q-page class="index-page">
    <section class="hero-section">
      <div class="content-wrapper">
        <p class="text-overline text-primary text-weight-bold q-mb-sm">PriceZ</p>
        <h1 class="text-h2 text-weight-bold q-my-none">
          Smart pricing calculators for marketplace sellers
        </h1>
        <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg">
          Compare marketplace fees, estimate margins, and choose profitable prices before you publish
          listings.
        </p>
        <div class="row q-gutter-sm">
          <q-btn
            color="primary"
            no-caps
            label="Start with a calculator"
            :to="primaryCalculatorLink"
          />
          <q-btn
            outline
            color="primary"
            no-caps
            label="Learn more"
            to="/about"
          />
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="content-wrapper">
        <h2 class="text-h4 q-mt-none q-mb-sm">What is PriceZ?</h2>
        <p class="text-body1 text-grey-8 q-ma-none">
          PriceZ is a calculator hub for marketplace sellers who need fast pricing decisions. Use one
          interface to estimate platform fees, check gross margin, and plan your selling price for
          Mercado Livre, Shopee, Amazon, Etsy, and Shopify.
        </p>
      </div>
    </section>

    <section
      id="calculators"
      class="section-block"
    >
      <div class="content-wrapper">
        <h2 class="text-h4 q-mt-none q-mb-sm">Tools</h2>
        <p class="text-body1 text-grey-8 q-mt-none q-mb-lg">
          Pick a calculator by platform:
        </p>

        <div class="calculator-grid">
          <q-card
            v-for="calculator in calculatorCards"
            :key="calculator.slug"
            flat
            bordered
            class="calculator-card"
          >
            <q-card-section>
              <div class="text-h6">{{ calculator.title }}</div>
              <p class="text-body2 text-grey-7 q-mt-sm q-mb-none">
                {{ calculator.summary }}
              </p>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn
                flat
                color="primary"
                no-caps
                label="Open calculator"
                :to="calculator.to"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="content-wrapper">
        <FAQSection
          title="FAQ"
          :items="faqItems"
        />
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { computed } from "vue"
import { useMeta } from "quasar"
import FAQSection from "src/components/FAQSection.vue"
import { calculators } from "src/data/calculators"

const faqItems = [
  {
    question: "What is a marketplace pricing calculator?",
    answer:
      "It estimates selling price, fees, and profit margin so you can price products with a target profit."
  },
  {
    question: "Which marketplaces are supported by PriceZ?",
    answer: "PriceZ currently supports Mercado Livre, Shopee, Amazon, Etsy, and Shopify."
  },
  {
    question: "How do I choose the right selling price?",
    answer:
      "Use your product cost, shipping, marketplace fee, and desired profit. PriceZ computes a recommended selling price from these inputs."
  }
]

useMeta(() => ({
  title: "PriceZ | Smart pricing calculators for marketplace sellers",
  meta: {
    description: {
      name: "description",
      content:
        "PriceZ offers marketplace fee and profit calculators for Mercado Livre, Shopee, Amazon, Etsy, and Shopify."
    },
    keywords: {
      name: "keywords",
      content:
        "marketplace calculator, amazon fee calculator, shopee calculator, etsy fee calculator, shopify profit calculator, mercado livre calculator"
    }
  }
}))

const calculatorCards = computed(() =>
  calculators.map((calculator) => ({
    slug: calculator.slug,
    title: calculator.toolName || `${calculator.name} Calculator`,
    summary: calculator.summary,
    to: `/calculators/${calculator.slug}`
  }))
)

const primaryCalculatorLink = computed(() => calculatorCards.value[0]?.to || "/")
</script>

<style scoped>
.index-page {
  background: #f8fafc;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}

.hero-section {
  padding: 56px 0 40px;
  background: linear-gradient(180deg, #edf3ff 0%, #f8fafc 100%);
}

.section-block {
  padding: 40px 0;
}

.calculator-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.calculator-card {
  height: 100%;
}

@media (min-width: 700px) {
  .calculator-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 72px 0 52px;
  }

  .calculator-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
