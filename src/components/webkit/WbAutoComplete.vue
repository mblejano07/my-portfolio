<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://tailwind.primevue.org/autocomplete/
 */
import AutoComplete, { AutoCompleteCompleteEvent, AutoCompleteItemSelectEvent } from 'primevue/autocomplete'
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

/** Emits **/
export type WbAutoCompleteOptionTrueValue = string | number | null
const emit = defineEmits<{
  (e: 'onTrueValueComputed', value: WbAutoCompleteOptionTrueValue): void
}>()

/** Props */
export type WbAutoCompleteOption = {
  value: string | number
  label: string
  parent_value?: string | number
}

export type WbAutoCompleteOptionKey = 'value' | 'label'

type WbAutoCompleteProps = {
  label: string
  suggestions: WbAutoCompleteOption[]
  trueValueKey?: WbAutoCompleteOptionKey
  invalid?: boolean
  invalidText?: string
  success?: boolean
  successText?: string
  wrapperClass?: string
  labelClass?: string
  validationErrorMessageClass?: string
  validationSuccessMessageClass?: string
}

const props = withDefaults(defineProps<WbAutoCompleteProps>(), {
  trueValueKey: 'value',
  invalid: false,
  invalidText: '',
  success: false,
  successText: '',
  wrapperClass: '',
  labelClass: '',
  validationErrorMessageClass: '',
  validationSuccessMessageClass: '',
})

/** Search functionality */
const filteredSuggestions = ref<WbAutoCompleteOption[]>()
const search = (event: AutoCompleteCompleteEvent): void => {
  if (!event.query.trim().length) {
    filteredSuggestions.value = [...props.suggestions]
    return
  }

  filteredSuggestions.value = props.suggestions.filter((suggestion) => {
    return suggestion.label.toLowerCase().replace(/\s+/g, '').includes(event.query.toLowerCase().replace(/\s+/g, ''))
  })
}

/** Send back the true value of an object to the parent */
const handleItemSelect = (event: AutoCompleteItemSelectEvent): void => {
  const selectedOption: WbAutoCompleteOption = event.value
  emit('onTrueValueComputed', selectedOption[props.trueValueKey])
}

/** We send back null as the true value when the clear event is emitted */
const handleItemClear = (): void => {
  emit('onTrueValueComputed', null)
}
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <label :for="$.uid.toString()" :class="`${props.labelClass || 'text-xs text-surface-800'}`">
      {{ props.label }}
    </label>
    <!-- Start AutoComplete-->
    <div :class="`relative ${$attrs.disabled ? 'hover:cursor-not-allowed' : ''}`">
      <!-- Start Prepend Icon -->
      <div :class="`absolute left-3 top-2/4 z-10 -mt-3 ${$attrs.disabled ? 'text-surface-300' : 'text-surface-500'}`">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <AutoComplete
        v-bind="$attrs"
        :aria-describedby="`${$.uid.toString()}-help`"
        :class="`h-12 w-full ${$attrs.class}`"
        :input-class="`h-12 w-full ${$slots['prepend-icon'] ? 'pl-10' : ''}
        ${props.invalid ? '!ring-error-500 border-error-500' : ''}
        ${$attrs.inputClass}`"
        @complete="search"
        :suggestions="filteredSuggestions"
        @item-select="(event: AutoCompleteItemSelectEvent) => handleItemSelect(event)"
        @clear="handleItemClear"
      />
    </div>
    <!-- End AutoComplete -->
    <!-- Start Validation Messages -->
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
    <!-- End Validation Messages -->
  </div>
</template>
