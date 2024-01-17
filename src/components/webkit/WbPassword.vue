<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://primevue.org/password/#api
 */
import Password from 'primevue/password'
import { useAttrs, useSlots } from 'vue'

const attrs = useAttrs()
const slots = useSlots()

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
  wrapperClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <!-- @vue-expect-error inputId will be passed dynamically -->
    <label :for="attrs.id" class="text-xs text-surface-500">{{ props.label }}</label>

    <!-- Start Password field-->
    <div class="relative">
      <!-- Start Prepend Icon -->
      <div class="absolute left-3 top-2/4 z-10 -mt-2.5">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <Password
        v-bind="attrs"
        :aria-describedby="`${attrs.id}-help`"
        :class="`h-12 w-full ${attrs.class}`"
        :input-class="`h-12 w-full ${slots['prepend-icon'] ? 'pl-10' : ''} ${props.invalid ? '!ring-error-500' : ''} ${
          attrs.inputClass
        }`"
        panel-class="text-xs font-bold md:mt-4"
      >
        <template #footer>
          <slot name="footer-panel"></slot>
        </template>
      </Password>
    </div>
    <!-- End Password Field -->
    <!-- Start validation messages -->
    <small v-if="props.invalid && props.invalidText" class="ml-0.5 text-xs text-red-500">
      <i class="pi pi-exclamation-triangle mr-0.5"></i>
      {{ props.invalidText }}
    </small>
    <small v-if="props.success && props.successText" class="ml-0.5 text-xs text-green-500">
      <i class="pi pi-check-circle mr-0.5"></i>
      {{ props.successText }}
    </small>
    <!-- End validation messages -->
  </div>
</template>
