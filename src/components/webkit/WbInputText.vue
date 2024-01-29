<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://primevue.org/steps/#pt
 */
import InputText from 'primevue/inputtext'

defineOptions({
  inheritAttrs: false,
})

/** Props */
type WbInputTextProps = {
  label: string
  invalid?: boolean
  invalidText?: string
  success?: boolean
  successText?: string
  wrapperClass?: string
  labelClass?: string
}

const props = withDefaults(defineProps<WbInputTextProps>(), {
  invalid: false,
  invalidText: '',
  success: false,
  successText: '',
  wrapperClass: '',
  labelClass: '',
})
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <!-- @vue-expect-error inputId will be passed dynamically -->
    <label :for="$attrs.id" :class="`${props.labelClass || 'text-xs text-surface-500'}`">{{ props.label }}</label>

    <!-- Start InputText-->
    <div :class="`relative ${$attrs.disabled ? 'hover:cursor-not-allowed' : ''}`">
      <!-- Start Prepend Icon -->
      <div :class="`absolute left-3 top-2/4 z-10 -mt-3 ${$attrs.disabled ? 'text-surface-300' : 'text-surface-500'}`">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <InputText
        v-bind="$attrs"
        :aria-describedby="`${$attrs.id}-help`"
        :class="`h-12 w-full ${$slots['prepend-icon'] ? 'pl-10' : ''} ${props.invalid ? '!ring-error-500' : ''}`"
      />
    </div>
    <!-- End InputTex -->
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
