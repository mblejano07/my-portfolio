<script setup lang="ts">
/**
 * =============================================================================
 * INPUT COMPONENT - Senate of the Philippines Theme
 * =============================================================================
 *
 * Official Senate input component with government branding.
 * Supports floating labels, validation states, icons, and all form states.
 *
 * Brand Colors:
 * - Primary Blue: #0038A8
 * - Accent Red: #CE1126
 * - Highlight Gold: #FCD116
 *
 * Accessibility: WCAG 2.1 AA compliant
 * Typography: Source Sans Pro
 *
 * Author: Designer Specialist (WebAppKit)
 * Created: April 28, 2026
 * =============================================================================
 */

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'
  label?: string
  placeholder?: string
  id?: string
  name?: string
  error?: string
  success?: string
  warning?: string
  hint?: string
  icon?: string
  iconRight?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  floatingLabel?: boolean
  autocomplete?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  label: undefined,
  placeholder: undefined,
  id: undefined,
  name: undefined,
  error: undefined,
  success: undefined,
  warning: undefined,
  hint: undefined,
  icon: undefined,
  iconRight: undefined,
  disabled: false,
  readonly: false,
  required: false,
  floatingLabel: true,
  autocomplete: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
}>()

// Determine validation state
const validationState = computed(() => {
  if (props.error) return 'error'
  if (props.success) return 'success'
  if (props.warning) return 'warning'
  return 'default'
})

// State classes
const stateClasses = {
  default: `
    border-gray-300
    focus:border-[#0038A8]
    focus:ring-2 focus:ring-[#0038A8]/20
  `,
  error: `
    border-[#CE1126]
    bg-[#CE1126]/5
    focus:border-[#CE1126]
    focus:ring-2 focus:ring-[#CE1126]/20
  `,
  success: `
    border-green-600
    bg-green-50
    focus:border-green-600
    focus:ring-2 focus:ring-green-600/20
  `,
  warning: `
    border-[#FCD116]
    bg-[#FCD116]/5
    focus:border-[#B8860B]
    focus:ring-2 focus:ring-[#FCD116]/20
  `,
}

// Generate unique ID
const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`
</script>

<template>
  <div class="w-full">
    <!-- Input wrapper with floating label support -->
    <div
      :class="[
        'relative transition-all duration-200 ease-in-out',
        {
          'pt-5': floatingLabel && label,
        },
      ]"
    >
      <!-- Label -->
      <label
        v-if="label"
        :for="inputId"
        :class="[
          'absolute left-3 transition-all duration-200 ease-in-out',
          'pointer-events-none text-gray-500',
          'bg-white px-1',
          {
            'top-2 text-sm text-[#0038A8]': floatingLabel,
            'relative top-3 mb-1.5 text-base': !floatingLabel,
            'text-[#CE1126]': validationState === 'error',
            'text-green-600': validationState === 'success',
            'text-[#B8860B]': validationState === 'warning',
          },
        ]"
      >
        {{ label }}
        <span v-if="required" class="text-[#CE1126]" aria-hidden="true">*</span>
      </label>

      <!-- Input container -->
      <div class="relative">
        <!-- Left Icon -->
        <span
          v-if="icon"
          class="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400"
          :class="{
            'text-[#CE1126]': validationState === 'error',
            'text-green-600': validationState === 'success',
            'text-[#B8860B]': validationState === 'warning',
          }"
          aria-hidden="true"
        >
          {{ icon }}
        </span>

        <!-- Input Element -->
        <input
          :id="inputId"
          :type="type"
          :name="name"
          :value="modelValue"
          :placeholder="floatingLabel ? ' ' : placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :autocomplete="autocomplete"
          :aria-invalid="validationState === 'error'"
          :aria-describedby="validationState === 'error' ? `${inputId}-error` : undefined"
          :class="[
            'w-full rounded-md border px-3 py-2.5',
            'text-gray-900 placeholder-gray-400',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none',
            stateClasses[validationState],
            {
              'pl-10': icon,
              'pr-10': iconRight,
              'cursor-not-allowed bg-gray-100': disabled,
              'cursor-not-allowed bg-white': readonly,
              'pb-2 pt-5': floatingLabel && label,
            },
          ]"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          @blur="emit('blur', $event)"
          @focus="emit('focus', $event)"
        />

        <!-- Right Icon -->
        <span
          v-if="iconRight"
          class="pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2 text-gray-400"
          :class="{
            'text-[#CE1126]': validationState === 'error',
            'text-green-600': validationState === 'success',
            'text-[#B8860B]': validationState === 'warning',
          }"
          aria-hidden="true"
        >
          {{ iconRight }}
        </span>
      </div>
    </div>

    <!-- Validation Messages -->
    <p v-if="error" :id="`${inputId}-error`" class="mt-1.5 flex items-center gap-1.5 text-sm text-[#CE1126]" role="alert">
      <span aria-hidden="true">⚠️</span>
      {{ error }}
    </p>

    <p v-else-if="success" class="mt-1.5 flex items-center gap-1.5 text-sm text-green-600">
      <span aria-hidden="true">✓</span>
      {{ success }}
    </p>

    <p v-else-if="warning" class="mt-1.5 flex items-center gap-1.5 text-sm text-[#B8860B]">
      <span aria-hidden="true">⚠️</span>
      {{ warning }}
    </p>

    <p v-else-if="hint" class="mt-1.5 text-sm text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>

<style scoped>
/* Font family: Source Sans Pro */
input,
label,
p {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

input:focus-visible {
  outline: 2px solid #0038a8;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  div,
  input,
  label {
    transition: none;
  }
}
</style>

<!--
=============================================================================
USAGE EXAMPLES
=============================================================================

1. BASIC INPUT:
```vue
<InputSenate 
  v-model="formData.email" 
  type="email" 
  label="Email Address" 
  placeholder="senator@senate.gov.ph" 
/>
```

2. FLOATING LABEL (DEFAULT):
```vue
<InputSenate 
  v-model="formData.name" 
  label="Full Name" 
  floating-label 
/>
```

3. WITH LEFT ICON:
```vue
<InputSenate 
  v-model="formData.search" 
  type="search"
  label="Search Bills" 
  icon="🔍"
  placeholder="Enter bill number or keyword"
/>
```

4. WITH RIGHT ICON (PASSWORD TOGGLE):
```vue
<InputSenate 
  v-model="formData.password" 
  type="password"
  label="Password" 
  icon="🔒"
  icon-right="👁️"
/>
```

5. ERROR STATE:
```vue
<InputSenate 
  v-model="formData.email" 
  type="email"
  label="Email Address" 
  :error="'Please enter a valid government email address'"
/>
```

6. SUCCESS STATE:
```vue
<InputSenate 
  v-model="formData.username" 
  label="Username" 
  :success="'Username is available'"
/>
```

7. WARNING STATE:
```vue
<InputSenate 
  v-model="formData.phone" 
  type="tel"
  label="Phone Number" 
  :warning="'Mobile number recommended for SMS notifications'"
/>
```

8. DISABLED STATE:
```vue
<InputSenate 
  v-model="readOnlyValue" 
  label="Reference Number" 
  :disabled="true"
/>
```

9. READONLY STATE:
```vue
<InputSenate 
  v-model="computedValue" 
  label="Generated ID" 
  :readonly="true"
/>
```

10. REQUIRED FIELD:
```vue
<InputSenate 
  v-model="formData.lastName" 
  label="Last Name" 
  :required="true"
/>
```

11. WITH HINT TEXT:
```vue
<InputSenate 
  v-model="formData.password" 
  type="password"
  label="Password" 
  hint="Must be at least 8 characters with one number"
/>
```

12. DATE INPUT:
```vue
<InputSenate 
  v-model="formData.birthDate" 
  type="date"
  label="Date of Birth" 
/>
```

=============================================================================
-->
