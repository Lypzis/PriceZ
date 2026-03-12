<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>
      <p
        v-if="props.summary"
        class="text-body2 text-grey-7 q-mt-sm q-mb-none"
      >
        {{ props.summary }}
      </p>

      <ul
        v-if="props.highlights.length"
        class="q-mt-md q-mb-none"
      >
        <li
          v-for="item in props.highlights"
          :key="item"
          class="q-mb-xs"
        >
          {{ item }}
        </li>
      </ul>

      <slot />
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Platform Info"
  },
  summary: {
    type: String,
    default: ""
  },
  highlights: {
    type: Array,
    default: () => []
  }
})
</script>
