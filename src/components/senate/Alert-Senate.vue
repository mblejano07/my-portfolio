<script setup lang="ts">
/**
 * =============================================================================
 * ALERT COMPONENT - Senate of the Philippines Theme
 * =============================================================================
 *
 * Official Senate alert/message component with government branding.
 * Supports info, success, warning, error variants with dismissible option.
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
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  dismissible?: boolean
  icon?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  title: undefined,
  dismissible: false,
  icon: true,
})

const emit = defineEmits<{
  dismiss: []
}>()

// Variant classes using Senate colors
const variantClasses = {
  info: `
    bg-[#0038A8]/5
    border-l-4 border-[#0038A8]
    text-[#0038A8]
  `,
  success: `
    bg-green-50
    border-l-4 border-green-600
    text-green-800
  `,
  warning: `
    bg-[#FCD116]/10
    border-l-4 border-[#B8860B]
    text-[#B8860B]
  `,
  error: `
    bg-[#CE1126]/5
    border-l-4 border-[#CE1126]
    text-[#CE1126]
  `,
}

// Icon mapping
const icons = {
  info: 'ℹ️',
  success: '✓',
  warning: '⚠️',
  error: '✕',
}
</script>

<template>
  <div
    :class="['relative rounded-md p-4', 'transition-all duration-200 ease-in-out', variantClasses[variant]]"
    role="alert"
    :aria-live="variant === 'error' ? 'assertive' : 'polite'"
  >
    <div class="flex gap-3">
      <!-- Icon -->
      <span v-if="icon" class="flex-shrink-0 text-xl" aria-hidden="true">
        {{ icons[variant] }}
      </span>

      <!-- Content -->
      <div class="min-w-0 flex-1">
        <!-- Title -->
        <h3 v-if="title" class="mb-1 font-semibold">
          {{ title }}
        </h3>

        <!-- Slot content (description) -->
        <div class="text-sm opacity-90">
          <slot />
        </div>
      </div>

      <!-- Dismiss button -->
      <button
        v-if="dismissible"
        @click="emit('dismiss')"
        class="ml-auto flex-shrink-0 rounded p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-1"
        :class="variant === 'info' || variant === 'error' ? 'focus:ring-[#0038A8]' : 'focus:ring-green-600'"
        aria-label="Dismiss alert"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Font family: Source Sans Pro */
div,
h3,
.text-sm {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  div {
    transition: none;
  }
}
</style>

<!--
=============================================================================
USAGE EXAMPLES
=============================================================================

1. INFO ALERT:
```vue
<AlertSenate variant="info" title="Information">
  This is an informational message about Senate proceedings.
</AlertSenate>
```

2. SUCCESS ALERT:
```vue
<AlertSenate variant="success" title="Success!">
  Your document has been submitted successfully.
</AlertSenate>
```

3. WARNING ALERT:
```vue
<AlertSenate variant="warning" title="Warning">
  Please review the document before submission.
</AlertSenate>
```

4. ERROR ALERT:
```vue
<AlertSenate variant="error" title="Error">
  There was a problem processing your request.
</AlertSenate>
```

5. DISMISSIBLE ALERT:
```vue
<AlertSenate 
  variant="info" 
  title="Notice" 
  :dismissible="true"
  @dismiss="closed = true"
>
  Session will resume at 2:00 PM.
</AlertSenate>
```

6. ALERT WITHOUT ICON:
```vue
<AlertSenate variant="success" :icon="false">
  Operation completed successfully.
</AlertSenate>
```

7. ALERT WITH ACTIONS (using slot):
```vue
<AlertSenate variant="error" title="Upload Failed">
  <p class="mb-2">The document could not be uploaded. Please try again.</p>
  <ButtonSenate variant="outline" size="sm">Retry</ButtonSenate>
</AlertSenate>
```

=============================================================================
-->
