<template>
  <ToolLayout
    v-if="calculator"
    :title="pageTitle"
    :subtitle="pageDescription"
  >
    <template #calculator-form>
      <CalculatorForm
        title="Calculator tool"
        description="Enter your values to calculate the recommended selling price."
        @submit="handleSubmit"
      >
        <div class="column q-gutter-md">
          <q-input
            v-model.number="formState.productCost"
            type="number"
            label="Product cost"
            outlined
            min="0"
            step="0.01"
          />
          <q-input
            v-model.number="formState.shipping"
            type="number"
            label="Shipping"
            outlined
            min="0"
            step="0.01"
          />
          <q-input
            v-model.number="formState.feePercent"
            type="number"
            label="Marketplace fee (%)"
            outlined
            min="0"
            max="99.99"
            step="0.01"
          />
          <q-input
            v-model.number="formState.desiredProfit"
            type="number"
            label="Desired profit"
            outlined
            min="0"
            step="0.01"
          />
        </div>
      </CalculatorForm>
    </template>

    <template #result>
      <CalculationResult
        title="Result"
        description="Estimated outputs based on your inputs."
        :rows="resultRows"
      />
    </template>

    <template #example>
      <ExampleCalculation
        title="Example calculation"
        :scenario="exampleScenario"
        :inputs="exampleInputs"
        :result="exampleResult"
      >
        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-xs">Compute</div>
          <div class="text-body2 text-grey-8">SP = (20 + 6 + 10) / (1 - 0.16)</div>
          <div class="text-body2 text-grey-8">SP = 36 / 0.84</div>
          <div class="text-body2 text-grey-8">SP = 42.86</div>
        </div>

        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-xs">Verify Profit</div>
          <div class="text-body2 text-grey-8">Fee: 42.86 × 0.16 = 6.86</div>
          <div class="text-body2 text-grey-8">42.86 - 6.86 - 20 - 6 = 10</div>
          <div class="text-body2 text-positive text-weight-medium">Correct.</div>
        </div>
      </ExampleCalculation>
    </template>

    <template #platform-info>
      <PlatformInfo
        title="Marketplace explanation"
        :summary="marketplaceSummary"
        :highlights="platformHighlights"
      >
        <p
          v-if="marketplaceNotice"
          class="text-caption text-grey-7 q-mt-md q-mb-none"
        >
          {{ marketplaceNotice }}
        </p>
      </PlatformInfo>
    </template>

    <template #faq>
      <FAQSection :items="faqItems" />
    </template>
  </ToolLayout>

  <ToolLayout
    v-else
    title="Calculator"
  >
    <q-banner
      class="bg-red-1 text-negative"
      rounded
    >
      Unknown platform: {{ platform }}
    </q-banner>
  </ToolLayout>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useMeta } from "quasar"
import { useRoute } from "vue-router"
import CalculatorForm from "src/components/CalculatorForm.vue"
import CalculationResult from "src/components/CalculationResult.vue"
import ExampleCalculation from "src/components/ExampleCalculation.vue"
import FAQSection from "src/components/FAQSection.vue"
import PlatformInfo from "src/components/PlatformInfo.vue"
import ToolLayout from "src/components/ToolLayout.vue"
import { calculators } from "src/data/calculators"

const route = useRoute()

const platform = computed(() => String(route.params.platform || ""))
const calculator = computed(() => calculators.find((item) => item.slug === platform.value))

const formState = ref(createInitialFormState())

const submitted = ref(false)

watch(platform, () => {
  resetCalculatorState()
})

const currencyConfig = computed(() => {
  if (calculator.value?.slug === "mercado-livre") {
    return {
      locale: "pt-BR",
      currency: "BRL"
    }
  }

  return {
    locale: "en-US",
    currency: "USD"
  }
})

const pageTitle = computed(() => {
  if (!calculator.value) {
    return "Calculator"
  }

  return calculator.value.toolName || `${calculator.value.name} Calculator`
})

const pageDescription = computed(() => {
  if (!calculator.value) {
    return ""
  }

  return `Calculate the ideal selling price for ${calculator.value.name} listings.`
})

const marketplaceSummary = computed(() => {
  if (!calculator.value?.marketplaceInfo?.description) {
    return ""
  }

  return calculator.value.marketplaceInfo.description
})

const platformHighlights = computed(
  () =>
    calculator.value?.marketplaceInfo?.highlights || [
      "Formula: (cost + shipping + desiredProfit) / (1 - feePercent/100)",
      "Marketplace fee is applied on selling price.",
      "Result includes recommended price and profit margin."
    ]
)

const marketplaceNotice = computed(() => calculator.value?.marketplaceInfo?.notice || "")

const sanitizedInputs = computed(() => ({
  productCost: normalizeNumber(formState.value.productCost),
  shipping: normalizeNumber(formState.value.shipping),
  desiredProfit: normalizeNumber(formState.value.desiredProfit),
  feePercent: normalizeNumber(formState.value.feePercent)
}))

const recommendedPrice = computed(() => {
  const { productCost, shipping, desiredProfit, feePercent } = sanitizedInputs.value

  if (feePercent >= 100) {
    return 0
  }

  return calculatePrice(productCost, shipping, desiredProfit, feePercent)
})

const marketplaceFeeValue = computed(() => recommendedPrice.value * (sanitizedInputs.value.feePercent / 100))
const realizedProfit = computed(
  () =>
    recommendedPrice.value -
    marketplaceFeeValue.value -
    sanitizedInputs.value.productCost -
    sanitizedInputs.value.shipping
)
const profitMargin = computed(() => {
  if (recommendedPrice.value <= 0) {
    return 0
  }

  return (realizedProfit.value / recommendedPrice.value) * 100
})

const resultRows = computed(() => {
  if (!submitted.value || recommendedPrice.value <= 0) {
    return []
  }

  return [
    { label: "Recommended price", value: formatCurrency(recommendedPrice.value) },
    { label: "Profit margin", value: formatPercent(profitMargin.value) },
    { label: "Marketplace fee", value: formatCurrency(marketplaceFeeValue.value) },
    { label: "Expected profit", value: formatCurrency(realizedProfit.value) }
  ]
})

const exampleScenario = computed(
  () => "Inputs: product_cost = 20, shipping = 6, profit = 10, fee = 16% (0.16)."
)
const exampleInputs = computed(() => [
  "product_cost = 20",
  "shipping = 6",
  "profit = 10",
  "fee = 16% (0.16)"
])

const exampleSellPrice = calculatePrice(20, 6, 10, 16)
const exampleProfit = 10
const exampleProfitMargin = (exampleProfit / exampleSellPrice) * 100

const exampleResult = computed(
  () =>
    `Recommended price: ${formatCurrency(exampleSellPrice)} | Profit margin: ${formatPercent(exampleProfitMargin)}`
)

const faqItems = computed(() => [
  {
    question: `What is the ${calculator.value?.name || "marketplace"} fee?`,
    answer:
      calculator.value?.marketplaceInfo?.description ||
      "Marketplace fee is a percentage over the final selling price and may include fixed components."
  },
  {
    question: "How do I calculate profit margin?",
    answer: "Profit margin (%) = ((sellingPrice - fees - cost - shipping) / sellingPrice) × 100."
  },
  {
    question: "How much should I sell my product for?",
    answer: "Use SP = (cost + shipping + desiredProfit) / (1 - feePercent/100)."
  }
])

const faqSchemaJson = computed(() =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.value.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  })
)

useMeta(() => ({
  title: calculator.value ? `${pageTitle.value} | PriceZ` : "Calculator | PriceZ",
  meta: {
    description: {
      name: "description",
      content: pageDescription.value || "Marketplace calculator."
    }
  },
  script: {
    faqSchema: {
      id: "calculator-faq-schema",
      type: "application/ld+json",
      innerHTML: faqSchemaJson.value
    }
  }
}))

function handleSubmit () {
  submitted.value = true
}

function calculatePrice (cost, shipping, desiredProfit, feePercent) {
  const fee = feePercent / 100
  return (cost + shipping + desiredProfit) / (1 - fee)
}

function formatCurrency (value) {
  const number = Number(value || 0)
  const { locale, currency } = currencyConfig.value

  return number.toLocaleString(locale, {
    style: "currency",
    currency
  })
}

function formatPercent (value) {
  const number = Number(value || 0)
  return `${number.toFixed(2)}%`
}

function normalizeNumber (value) {
  const parsed = Number(value)
  if (Number.isNaN(parsed) || parsed < 0) {
    return 0
  }

  return parsed
}

function createInitialFormState () {
  return {
    productCost: null,
    shipping: null,
    desiredProfit: null,
    feePercent: null
  }
}

function resetCalculatorState () {
  formState.value = createInitialFormState()
  submitted.value = false
}
</script>
