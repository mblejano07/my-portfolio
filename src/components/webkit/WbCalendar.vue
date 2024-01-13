<script setup lang="ts">
/** @see https://tailwind.primevue.org/guides/building-ui-library/ */

import Calendar from 'primevue/calendar'
import { useAttrs } from 'vue'

const attrs = useAttrs()

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  invalidText: {
    type: String,
    default: null,
  },
  success: {
    type: Boolean,
    default: false,
  },
  successText: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- @vue-expect-error inputId will be passed dynamically -->
    <label :for="attrs.id" class="text-xs text-surface-500">{{ props.label }}</label>

    <!-- Start InputText-->
    <!-- End Prepend Icon -->
    <Calendar v-bind="attrs" :aria-describedby="`${attrs.id}-help`" />
    <!-- End InputTex -->
    <!-- Start validation messages -->
    <small v-if="props.invalid && props.invalidText" class="text-theme-error ml-1 mt-1.5 text-xs">
      <i class="pi pi-times-circle"></i>
      {{ props.invalidText }}
    </small>
    <small v-if="props.success && props.successText" class="text-theme-success ml-1 mt-1.5 text-xs">
      <i class="pi pi-check-circle"></i>
      {{ props.successText }}
    </small>
    <!-- End validation messages -->
  </div>
</template>

<style scoped></style>
