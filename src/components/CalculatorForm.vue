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

    <q-form
      class="q-pa-md"
      @submit.prevent="handleSubmit"
    >
      <slot />

      <div class="row justify-end q-mt-md">
        <q-btn
          color="primary"
          type="submit"
          :label="props.submitLabel"
          :loading="props.loading"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Calculator Form"
  },
  description: {
    type: String,
    default: ""
  },
  submitLabel: {
    type: String,
    default: "Calculate"
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["submit"])

function handleSubmit () {
  emit("submit")
}
</script>
