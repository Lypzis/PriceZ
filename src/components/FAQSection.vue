<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>
    </q-card-section>

    <q-separator />

    <q-list v-if="props.items.length">
      <q-expansion-item
        v-for="item in props.items"
        :key="item.question"
        icon="help_outline"
        :label="item.question"
      >
        <q-card>
          <q-card-section class="text-body2 text-grey-8">
            {{ item.answer }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <q-card-section
      v-else
      class="text-grey-7"
    >
      No FAQ items yet.
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Frequently Asked Questions"
  },
  items: {
    type: Array,
    default: () => []
  }
})
</script>
