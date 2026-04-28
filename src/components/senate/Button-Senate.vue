<script setup lang="ts">
/**
 * =============================================================================
 * BUTTON COMPONENT - Senate of the Philippines Theme
 * =============================================================================
 *
 * Official Senate button component with government branding.
 * Supports all variants, sizes, loading states, and animations.
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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconRight?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  icon: undefined,
  iconRight: undefined,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

// Size classes
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

// Variant classes using Senate colors
const variantClasses = {
  primary: `
    bg-[#0038A8]
    text-white
    border border-transparent
    shadow-md
    hover:bg-[#002d8a]
    active:bg-[#002575]
    focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2
  `,
  secondary: `
    bg-white
    text-[#0038A8]
    border border-[#0038A8]
    shadow-sm
    hover:bg-gray-50
    active:bg-gray-100
    focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2
  `,
  outline: `
    bg-transparent
    text-[#0038A8]
    border border-[#0038A8]
    hover:bg-[#0038A8]/5
    active:bg-[#0038A8]/10
    focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2
  `,
  ghost: `
    bg-transparent
    text-[#0038A8]
    border border-transparent
    hover:bg-[#0038A8]/5
    active:bg-[#0038A8]/10
    focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2
  `,
  danger: `
    bg-[#CE1126]
    text-white
    border border-transparent
    shadow-md
    hover:bg-[#b80f22]
    active:bg-[#9c0d1d]
    focus:ring-2 focus:ring-[#CE1126] focus:ring-offset-2
  `,
}
</script>

<template>
  <button
    :class="[
      'relative inline-flex items-center justify-center gap-2',
      'rounded-md font-semibold',
      'transition-all duration-200 ease-in-out',
      'transform hover:-translate-y-0.5 active:translate-y-0',
      'focus:outline-none',
      sizeClasses[size],
      variantClasses[variant],
      {
        'transform-none cursor-not-allowed opacity-50': disabled || loading,
        'cursor-pointer': !disabled && !loading,
      },
    ]"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    @click="$emit('click', $event)"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <svg class="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>

    <!-- Content -->
    <span
      :class="{
        invisible: loading,
        'flex items-center gap-2': true,
      }"
    >
      <!-- Left Icon -->
      <span v-if="icon" class="text-lg" aria-hidden="true">{{ icon }}</span>

      <!-- Slot content -->
      <slot />

      <!-- Right Icon -->
      <span v-if="iconRight" class="text-lg" aria-hidden="true">{{ iconRight }}</span>
    </span>

    <!-- Ripple effect container (visual enhancement) -->
    <span v-if="!disabled && !loading" class="pointer-events-none absolute inset-0 overflow-hidden rounded-md" aria-hidden="true">
      <span class="absolute inset-0 bg-white/0 transition-colors duration-200 hover:bg-white/10" />
    </span>
  </button>
</template>

<style scoped>
/* Font family: Source Sans Pro */
button {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

button:focus-visible {
  outline: 2px solid #0038a8;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
    transform: none;
  }

  button:hover {
    transform: none;
  }
}
</style>

<!--
=============================================================================
USAGE EXAMPLES
=============================================================================

1. PRIMARY BUTTON:
```vue
<ButtonSenate variant="primary" size="md">
  Submit
</ButtonSenate>
```

2. SECONDARY BUTTON WITH ICON:
```vue
<ButtonSenate variant="secondary" icon="📄">
  View Document
</ButtonSenate>
```

3. DANGER BUTTON:
```vue
<ButtonSenate variant="danger" icon="⚠️">
  Delete Record
</ButtonSenate>
```

4. LOADING STATE:
```vue
<ButtonSenate variant="primary" :loading="true">
  Saving...
</ButtonSenate>
```

5. DISABLED STATE:
```vue
<ButtonSenate variant="primary" :disabled="true">
  Unavailable
</ButtonSenate>
```

6. OUTLINE BUTTON:
```vue
<ButtonSenate variant="outline" iconRight="→">
  Learn More
</ButtonSenate>
```

=============================================================================
-->
