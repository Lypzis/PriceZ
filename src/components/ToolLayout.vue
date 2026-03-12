<template>
  <q-page padding>
    <div class="tool-layout q-mx-auto">
      <header class="q-mb-lg">
        <h1 class="text-h4 q-my-none">{{ props.title }}</h1>
        <p
          v-if="props.subtitle"
          class="text-body1 text-grey-7 q-mt-sm"
        >
          {{ props.subtitle }}
        </p>
      </header>

      <div class="column q-gutter-lg">
        <slot name="calculator-form" />
        <slot name="result" />
        <slot name="example" />
        <slot name="platform-info" />
        <slot name="faq" />
        <slot />
      </div>
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Calculator"
  },
  subtitle: {
    type: String,
    default: ""
  }
})
</script>

<style scoped>
.tool-layout {
  max-width: 960px;
}
</style>
