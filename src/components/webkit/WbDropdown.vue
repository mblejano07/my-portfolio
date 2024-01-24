<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://primevue.org/dropdown/#api
 */
import Dropdown from 'primevue/dropdown'

defineOptions({
  inheritAttrs: false,
})

/** Props */
type WbDropdownProps = {
  label: string
  invalid?: boolean
  invalidText?: string
  success?: boolean
  successText?: string
  wrapperClass?: string
}

const props = withDefaults(defineProps<WbDropdownProps>(), {
  invalid: false,
  invalidText: '',
  success: false,
  successText: '',
  wrapperClass: '',
})
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <!-- @vue-expect-error inputId will be passed dynamically -->
    <label :for="$attrs.id" class="text-xs text-surface-500">{{ props.label }}</label>

    <div :class="`relative ${$attrs.disabled ? 'hover:cursor-not-allowed' : ''}`">
      <!-- Start Prepend Icon -->
      <div :class="`absolute left-3 top-2/4 z-10 -mt-2.5 ${$attrs.disabled ? 'text-surface-300' : 'text-surface-500'}`">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <!-- Start Calendar -->
      <Dropdown
        v-bind="$attrs"
        :aria-describedby="`${$attrs.id}-help`"
        :class="`h-12 !w-full ${$attrs.class}`"
        :input-class="`h-12 !w-full flex items-center ${$slots['prepend-icon'] ? 'pl-10' : ''} ${
          props.invalid ? '!ring-error-500' : ''
        } ${$attrs.inputClass}`"
      />
    </div>
    <!-- End Calendar -->
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
