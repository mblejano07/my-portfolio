<script setup lang="ts">
/**
 * =============================================================================
 * CARD COMPONENT - Senate of the Philippines Theme
 * =============================================================================
 *
 * Official Senate card component with government branding.
 * Supports multiple layouts: content, stat, profile cards.
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
  variant?: 'default' | 'stat' | 'profile' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  elevated?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false,
  elevated: false,
})

// Padding classes
const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
}

// Variant classes
const variantClasses = {
  default: `
    bg-white
    border border-gray-200
    shadow-sm
  `,
  stat: `
    bg-white
    border-l-4 border-[#0038A8]
    shadow-md
  `,
  profile: `
    bg-white
    border border-gray-200
    shadow-md
    text-center
  `,
  interactive: `
    bg-white
    border border-gray-200
    shadow-sm
    cursor-pointer
  `,
}

// Elevated modifier
const elevatedClass = elevated ? 'shadow-lg' : ''
</script>

<template>
  <article
    :class="[
      'relative overflow-hidden rounded-md',
      'transition-all duration-200 ease-in-out',
      paddingClasses[padding],
      variantClasses[variant],
      elevatedClass,
      {
        'hover:-translate-y-1 hover:shadow-lg': hoverable || variant === 'interactive',
        'focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2': hoverable || variant === 'interactive',
      },
    ]"
    :tabindex="hoverable || variant === 'interactive' ? 0 : -1"
  >
    <!-- Header slot (optional) -->
    <header v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </header>

    <!-- Main content -->
    <div class="relative z-10">
      <slot />
    </div>

    <!-- Footer slot (optional) -->
    <footer v-if="$slots.footer" class="mt-4 border-t border-gray-200 pt-4">
      <slot name="footer" />
    </footer>

    <!-- Decorative top bar for stat cards -->
    <div
      v-if="variant === 'stat'"
      class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0038A8] to-[#0038A8]/50"
      aria-hidden="true"
    />
  </article>
</template>

<style scoped>
/* Font family: Source Sans Pro */
article,
header,
footer,
:deep(*) {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

article:focus-visible {
  outline: 2px solid #0038a8;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  article {
    transition: none;
    transform: none;
  }

  article:hover {
    transform: none;
  }
}
</style>

<!--
=============================================================================
USAGE EXAMPLES
=============================================================================

1. DEFAULT CARD:
```vue
<CardSenate padding="md">
  <h3 class="text-lg font-semibold mb-2">Committee Report</h3>
  <p class="text-gray-600">
    The Committee on Justice approved Senate Bill No. 1234...
  </p>
</CardSenate>
```

2. STAT CARD (METRIC DISPLAY):
```vue
<CardSenate variant="stat" padding="md">
  <div class="text-sm text-gray-500 mb-1">Total Bills Filed</div>
  <div class="text-3xl font-bold text-[#0038A8]">1,247</div>
  <div class="text-xs text-green-600 mt-2">↑ 12% from last session</div>
</CardSenate>
```

3. PROFILE CARD:
```vue
<CardSenate variant="profile" padding="lg">
  <img src="/senator.jpg" alt="Senator Name" class="w-24 h-24 rounded-full mx-auto mb-4" />
  <h3 class="text-lg font-semibold">Hon. Juan Dela Cruz</h3>
  <p class="text-gray-600 text-sm">Senate President</p>
  <div class="flex gap-2 mt-4 justify-center">
    <ButtonSenate variant="outline" size="sm">Profile</ButtonSenate>
    <ButtonSenate variant="primary" size="sm">Contact</ButtonSenate>
  </div>
</CardSenate>
```

4. INTERACTIVE CARD (CLICKABLE):
```vue
<CardSenate variant="interactive" :hoverable="true" @click="navigateToBill">
  <h3 class="text-lg font-semibold mb-2">SB 2024-0156</h3>
  <p class="text-gray-600 text-sm">
    An act promoting renewable energy development...
  </p>
  <BadgeSenate color="blue" class="mt-3">Pending</BadgeSenate>
</CardSenate>
```

5. CARD WITH HEADER AND FOOTER:
```vue
<CardSenate padding="md">
  <template #header>
    <div class="flex items-center justify-between">
      <h3 class="font-semibold">Session Calendar</h3>
      <BadgeSenate color="gold">Today</BadgeSenate>
    </div>
  </template>
  
  <p class="text-gray-600">
    Regular session resumes at 2:00 PM in the Plenary Hall.
  </p>
  
  <template #footer>
    <ButtonSenate variant="outline" size="sm" class="w-full">
      View Full Calendar
    </ButtonSenate>
  </template>
</CardSenate>
```

6. ELEVATED CARD:
```vue
<CardSenate :elevated="true" padding="md">
  <h3 class="text-lg font-semibold mb-2">Featured Legislation</h3>
  <p class="text-gray-600">
    Priority bills for the 19th Congress...
  </p>
</CardSenate>
```

=============================================================================
-->
