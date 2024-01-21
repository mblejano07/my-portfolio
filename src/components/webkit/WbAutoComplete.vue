<script setup lang="ts">
/**
 * @see https://tailwind.primevue.org/guides/building-ui-library/
 * @see https://tailwind.primevue.org/autocomplete/
 */
import AutoComplete, { AutoCompleteCompleteEvent, AutoCompleteItemSelectEvent } from 'primevue/autocomplete'
import { ref, useAttrs, useSlots, PropType } from 'vue'

const attrs = useAttrs()
const slots = useSlots()

defineOptions({
  inheritAttrs: false,
})

type Option = {
  value: string
  label: string
}
type OptionKey = 'value' | 'label'

const emit = defineEmits(['trueValue'])
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  suggestions: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  trueValueKey: {
    type: String as PropType<OptionKey>,
    default: 'value',
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

/** Search functionality */
const filteredSuggestions = ref<Option[]>()
const search = (event: AutoCompleteCompleteEvent) => {
  if (!event.query.trim().length) {
    return (filteredSuggestions.value = [...props.suggestions])
  }

  filteredSuggestions.value = props.suggestions.filter((suggestion) => {
    return suggestion.label.toLowerCase().replace(/\s+/g, '').includes(event.query.toLowerCase().replace(/\s+/g, ''))
  })
}

/** Send back the true value of an object to the parent */
const handleTrueValueEmit = (event: AutoCompleteItemSelectEvent) => {
  const selectedOption: Option = event.value
  emit('trueValue', selectedOption[props.trueValueKey])
}
</script>

<template>
  <div :class="`flex w-full flex-col gap-2 ${wrapperClass}`">
    <!-- @vue-expect-error inputId will be passed dynamically -->
    <label :for="attrs.id" class="text-xs text-surface-500">{{ props.label }}</label>
    <!-- Start AutoComplete-->
    <div class="relative">
      <!-- Start Prepend Icon -->
      <div class="absolute left-3 top-2/4 z-10 -mt-2.5">
        <slot name="prepend-icon"></slot>
      </div>
      <!-- End Prepend Icon -->
      <AutoComplete
        v-bind="attrs"
        :aria-describedby="`${attrs.id}-help`"
        :class="`h-12 w-full ${attrs.class}`"
        :input-class="`h-12 w-full ${slots['prepend-icon'] ? 'pl-10' : ''}
        ${props.invalid ? '!ring-error-500' : ''}
        ${attrs.inputClass}`"
        @complete="search"
        :suggestions="filteredSuggestions"
        @item-select="(event: AutoCompleteItemSelectEvent) => handleTrueValueEmit(event)"
      />
    </div>
    <!-- End AutoComplete -->
    <!-- Start Validation Messages -->
    <small v-if="props.invalid && props.invalidText" class="ml-0.5 text-xs text-red-500">
      <i class="pi pi-exclamation-triangle mr-0.5"></i>
      {{ props.invalidText }}
    </small>
    <small v-if="props.success && props.successText" class="ml-0.5 text-xs text-green-500">
      <i class="pi pi-check-circle mr-0.5"></i>
      {{ props.successText }}
    </small>
    <!-- End Validation Messages -->
  </div>
</template>
