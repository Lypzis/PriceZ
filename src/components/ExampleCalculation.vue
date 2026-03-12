<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>

      <div v-if="props.scenario" class="q-mt-sm">
        <div class="text-subtitle2">Scenario</div>
        <div class="text-body2 text-grey-7">{{ props.scenario }}</div>
      </div>

      <div v-if="props.inputs.length" class="q-mt-md">
        <div class="text-subtitle2 q-mb-xs">Inputs</div>
        <ul class="q-my-none">
          <li
            v-for="item in props.inputs"
            :key="item"
            class="q-mb-xs"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="props.result" class="q-mt-md">
        <div class="text-subtitle2">Expected Result</div>
        <div class="text-body2 text-grey-7">{{ props.result }}</div>
      </div>

      <slot />
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Example Calculation"
  },
  scenario: {
    type: String,
    default: ""
  },
  inputs: {
    type: Array,
    default: () => []
  },
  result: {
    type: String,
    default: ""
  }
})
</script>
