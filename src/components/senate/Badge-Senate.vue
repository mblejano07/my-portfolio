<script setup lang="ts">
/**
 * =============================================================================
 * BADGE COMPONENT - Senate of the Philippines Theme
 * =============================================================================
 *
 * Official Senate badge/tag component with government branding.
 * Supports variants, sizes, colors, and pulse animation for "new"/"live" states.
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
  variant?: 'default' | 'outline' | 'filled' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'red' | 'gold' | 'green' | 'gray'
  icon?: string
  clickable?: boolean
  pulse?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  color: 'blue',
  icon: undefined,
  clickable: false,
  pulse: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

// Size classes
const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

// Color mappings using Senate colors
const colorClasses = {
  blue: {
    default: 'text-[#0038A8] bg-[#0038A8]/10 border-[#0038A8]/20',
    outline: 'text-[#0038A8] border border-[#0038A8]',
    filled: 'text-white bg-[#0038A8]',
    soft: 'text-[#0038A8] bg-[#0038A8]/5',
  },
  red: {
    default: 'text-[#CE1126] bg-[#CE1126]/10 border-[#CE1126]/20',
    outline: 'text-[#CE1126] border border-[#CE1126]',
    filled: 'text-white bg-[#CE1126]',
    soft: 'text-[#CE1126] bg-[#CE1126]/5',
  },
  gold: {
    default: 'text-[#B8860B] bg-[#FCD116]/10 border-[#FCD116]/20',
    outline: 'text-[#B8860B] border border-[#FCD116]',
    filled: 'text-[#000000] bg-[#FCD116]',
    soft: 'text-[#B8860B] bg-[#FCD116]/5',
  },
  green: {
    default: 'text-green-700 bg-green-100 border-green-200',
    outline: 'text-green-700 border border-green-700',
    filled: 'text-white bg-green-600',
    soft: 'text-green-700 bg-green-50',
  },
  gray: {
    default: 'text-gray-700 bg-gray-100 border-gray-200',
    outline: 'text-gray-700 border border-gray-700',
    filled: 'text-white bg-gray-600',
    soft: 'text-gray-700 bg-gray-50',
  },
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-md font-medium',
      'transition-all duration-200 ease-in-out',
      'border',
      sizeClasses[size],
      colorClasses[color][variant],
      {
        'cursor-pointer hover:-translate-y-0.5 hover:bg-opacity-80': clickable,
        'focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:ring-offset-2': clickable,
        'animate-pulse': pulse,
      },
    ]"
    :tabindex="clickable ? 0 : undefined"
    role="clickable ? 'button' : undefined"
    @click="clickable && $emit('click', $event)"
    @keydown.enter="clickable && $emit('click', $event)"
    @keydown.space.prevent="clickable && $emit('click', $event)"
  >
    <!-- Icon (if provided) -->
    <span v-if="icon" class="text-sm" aria-hidden="true">{{ icon }}</span>

    <!-- Badge content -->
    <slot />
  </span>
</template>

<style scoped>
/* Font family: Source Sans Pro */
span {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

span:focus-visible {
  outline: 2px solid #0038a8;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  span {
    transition: none;
    transform: none;
  }

  span:hover {
    transform: none;
  }

  .animate-pulse {
    animation: none;
  }
}
</style>

<!--
=============================================================================
USAGE EXAMPLES
=============================================================================

1. DEFAULT BADGE:
```vue
<BadgeSenate color="blue" size="md">
  Senate Bill
</BadgeSenate>
```

2. FILLED BADGE (STATUS):
```vue
<BadgeSenate variant="filled" color="green" size="sm">
  ✓ Approved
</BadgeSenate>
```

3. OUTLINE BADGE:
```vue
<BadgeSenate variant="outline" color="red">
  Urgent
</BadgeSenate>
```

4. SOFT BADGE (SUBTLE):
```vue
<BadgeSenate variant="soft" color="gold">
  Featured
</BadgeSenate>
```

5. PULSE BADGE (LIVE/NEW):
```vue
<BadgeSenate color="red" :pulse="true">
  ● LIVE
</BadgeSenate>
```

6. CLICKABLE BADGE (FILTER):
```vue
<BadgeSenate 
  variant="default" 
  color="blue" 
  :clickable="true"
  @click="filterByCategory('legislation')"
>
  Legislation
</BadgeSenate>
```

7. BADGE WITH ICON:
```vue
<BadgeSenate color="gold" icon="★">
  Priority
</BadgeSenate>
```

=============================================================================
-->
