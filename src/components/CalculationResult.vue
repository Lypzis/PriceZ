<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>
      <div
        v-if="props.description"
        class="text-body2 text-grey-7 q-mt-xs"
      >
        {{ props.description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-list v-if="props.rows.length">
      <q-item
        v-for="row in props.rows"
        :key="row.label"
      >
        <q-item-section>
          <q-item-label>{{ row.label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-weight-medium">{{ row.value }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-card-section
      v-else
      class="text-grey-7"
    >
      {{ props.emptyMessage }}
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Calculation Result"
  },
  description: {
    type: String,
    default: ""
  },
  rows: {
    type: Array,
    default: () => []
  },
  emptyMessage: {
    type: String,
    default: "Run a calculation to see results."
  }
})
</script>
