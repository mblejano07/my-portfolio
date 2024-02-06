<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://primevue.org/calendar/#api
 */

import Calendar from 'primevue/calendar'

defineOptions({
  inheritAttrs: false,
})

/** Props */
type WbCalendarProps = {
  label: string
  invalid?: boolean
  invalidText?: string
  success?: boolean
  successText?: string
  wrapperClass?: string
  labelClass?: string
  validationErrorMessageClass?: string
  validationSuccessMessageClass?: string
}

const props = withDefaults(defineProps<WbCalendarProps>(), {
  invalid: false,
  invalidText: '',
  success: false,
  successText: '',
  wrapperClass: '',
  labelClass: '',
  validationErrorMessageClass: '',
  validationSuccessMessageClass: '',
})
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <label :for="$.uid.toString()" :class="`${props.labelClass || 'text-xs text-surface-800'}`">{{ props.label }}</label>

    <div :class="`relative ${$attrs.disabled ? 'hover:cursor-not-allowed' : ''}`">
      <!-- Start Prepend Icon -->
      <div :class="`absolute left-3 top-2/4 z-10 -mt-3 ${$attrs.disabled ? 'text-surface-300' : 'text-surface-500'}`">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <!-- Start Calendar -->
      <Calendar
        v-bind="$attrs"
        :aria-describedby="`${$.uid.toString()}-help`"
        :class="`h-12 w-full ${$attrs.class}`"
        :input-class="`h-12 w-full ${$slots['prepend-icon'] ? 'pl-10' : ''} ${props.invalid ? '!ring-error-500' : ''} ${
          $attrs.inputClass
        }`"
      />
    </div>
    <!-- End Calendar -->
    <!-- Start validation messages -->
    <small
      v-if="props.invalid && props.invalidText"
      :class="`ml-0.5 ${props.validationErrorMessageClass || 'text-xs text-error-500'}`"
    >
      <i class="pi pi-exclamation-triangle mr-0.5"></i>
      {{ props.invalidText }}
    </small>
    <small
      v-if="props.success && props.successText"
      :class="`ml-0.5 ${props.validationSuccessMessageClass || 'text-xs text-green-500'}`"
    >
      <i class="pi pi-check-circle mr-0.5"></i>
      {{ props.successText }}
    </small>
    <!-- End validation messages -->
  </div>
</template>
