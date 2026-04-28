/**
 * =============================================================================
 * TAILWINDCSS THEME CONFIGURATION - Portfolio v2 Design System
 * =============================================================================
 *
 * Extends TailwindCSS with both Cyber and Corporate themes.
 *
 * Usage:
 * 1. Copy this config to your tailwind.config.ts
 * 2. Import design-tokens.css in your main CSS file
 * 3. Use theme classes in templates:
 *    - class="bg-cyber-bg-primary text-cyber-text-primary" (Cyber)
 *    - class="bg-corporate-bg-primary text-corporate-text-primary" (Corporate)
 *
 * Theme Switching:
 * - Add class to body: <body class="theme-cyber"> or <body class="theme-corporate">
 * - Or use theme-switcher.js utility for runtime toggling
 *
 * Author: Designer Specialist (WebAppKit)
 * Created: April 28, 2026
 * Version: 1.0
 * =============================================================================
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './docs/mockups/v2-preview/*.html'],
  theme: {
    extend: {
      /**
       * =======================================================================
       * COLORS
       * =======================================================================
       */
      colors: {
        /**
         * 🚀 CYBER THEME - Dark Futuristic
         */
        cyber: {
          bg: {
            primary: '#0f172a', // Dark slate
            secondary: '#1e293b', // Slate 800
            tertiary: '#334155', // Slate 700
            elevated: 'rgba(30, 41, 59, 0.95)',
          },
          primary: {
            indigo: '#6366f1',
            'indigo-hover': '#4f46e5',
            'indigo-light': '#818cf8',
          },
          accent: {
            cyan: '#00d9ff',
            'cyan-dark': '#0891b2',
            purple: '#7c3aed',
          },
          functional: {
            success: '#10b981',
            'success-dark': '#059669',
            error: '#ef4444',
            'error-dark': '#dc2626',
            warning: '#f59e0b',
            info: '#06b6d4',
          },
          text: {
            primary: '#ffffff',
            secondary: '#e2e8f0',
            tertiary: '#94a3b8',
            muted: '#64748b',
          },
          border: {
            subtle: 'rgba(99, 102, 241, 0.2)',
            default: 'rgba(99, 102, 241, 0.3)',
            hover: 'rgba(0, 217, 255, 0.6)',
            focus: 'rgba(0, 217, 255, 0.8)',
          },
        },

        /**
         * 💼 CORPORATE THEME - Professional Clean
         */
        corporate: {
          bg: {
            primary: '#ffffff', // White
            secondary: '#f8fafc', // Light gray
            tertiary: '#f1f5f9', // Lighter gray
            dark: '#1E3A5F', // Navy
            elevated: 'rgba(255, 255, 255, 0.95)',
          },
          primary: {
            navy: '#1E3A5F',
            'navy-hover': '#152a45',
            'navy-light': '#2C5282',
          },
          accent: {
            steel: '#7F8C8D',
            'steel-dark': '#5a6768',
            gold: '#D4AC0D',
            'gold-hover': '#B7950B',
            blue: '#3498DB',
          },
          functional: {
            success: '#27ae60',
            'success-dark': '#219a52',
            error: '#e74c3c',
            'error-dark': '#c0392b',
            warning: '#f39c12',
            info: '#3498db',
          },
          text: {
            primary: '#1a202c',
            secondary: '#4a5568',
            tertiary: '#718096',
            muted: '#a0aec0',
            inverse: '#ffffff',
          },
          border: {
            subtle: '#e2e8f0',
            default: '#cbd5e0',
            hover: '#a0aec0',
            focus: '#3498db',
            dark: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },

      /**
       * =======================================================================
       * FONTS
       * =======================================================================
       */
      fontFamily: {
        // Cyber Theme
        'cyber-heading': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'cyber-body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],

        // Corporate Theme
        'corporate-heading': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'corporate-body': ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],

        // Default (can be overridden)
        heading: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },

      /**
       * =======================================================================
       * FONT SIZES
       * =======================================================================
       */
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.875rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.5rem', { lineHeight: '3rem' }], // 40px
      },

      /**
       * =======================================================================
       * FONT WEIGHTS
       * =======================================================================
       */
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      /**
       * =======================================================================
       * SPACING
       * =======================================================================
       */
      spacing: {
        xs: '0.25rem', // 4px
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '3rem', // 48px
        '3xl': '4rem', // 64px
      },

      /**
       * =======================================================================
       * BORDER RADIUS
       * =======================================================================
       */
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
        full: '9999px',
      },

      /**
       * =======================================================================
       * BOX SHADOWS
       * =======================================================================
       */
      boxShadow: {
        // Cyber Theme - Glows
        'cyber-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'cyber-md': '0 4px 6px rgba(0, 0, 0, 0.4)',
        'cyber-lg': '0 10px 15px rgba(0, 0, 0, 0.5)',
        'cyber-xl': '0 20px 25px rgba(0, 0, 0, 0.6)',
        'cyber-glow-cyan': '0 0 15px rgba(0, 217, 255, 0.5)',
        'cyber-glow-indigo': '0 0 15px rgba(99, 102, 241, 0.5)',
        'cyber-glow-purple': '0 0 15px rgba(124, 58, 237, 0.5)',
        'cyber-glow-strong': '0 0 25px rgba(0, 217, 255, 0.7)',
        'cyber-glow-button': '0 4px 20px rgba(0, 217, 255, 0.3)',
        'cyber-card-hover': '0 0 30px rgba(0, 217, 255, 0.3)',

        // Corporate Theme - Subtle
        'corporate-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'corporate-md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'corporate-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'corporate-xl': '0 20px 25px rgba(0, 0, 0, 0.12)',
        'corporate-2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'corporate-card-hover': '0 10px 20px rgba(0, 0, 0, 0.1)',
      },

      /**
       * =======================================================================
       * TRANSITIONS
       * =======================================================================
       */
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },

      /**
       * =======================================================================
       * TRANSFORMS
       * =======================================================================
       */
      transform: {
        'cyber-lift': 'translateY(-6px)',
        'corporate-lift': 'translateY(-4px)',
      },

      /**
       * =======================================================================
       * BACKDROP BLUR
       * =======================================================================
       */
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },

      /**
       * =======================================================================
       * GRADIENTS (Custom utilities needed)
       * =======================================================================
       * Note: Tailwind doesn't support custom gradient names natively.
       * Use these as arbitrary values or add to your CSS file:
       *
       * Cyber Gradients:
       * bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)]
       * bg-[linear-gradient(135deg,#6366f1_0%,#00d9ff_100%)]
       *
       * Corporate Gradients:
       * bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]
       * bg-[linear-gradient(135deg,#1E3A5F_0%,#2C5282_100%)]
       */
    },
  },
  plugins: [],
}

export default config

/**
 * =============================================================================
 * USAGE EXAMPLES
 * =============================================================================
 *
 * 1. CYBER THEME BUTTON:
 * ```vue
 * <button class="
 *   bg-cyber-primary-indigo
 *   hover:bg-cyber-primary-indigo-hover
 *   text-white
 *   font-semibold
 *   py-2 px-4
 *   rounded-lg
 *   shadow-cyber-glow-button
 *   hover:shadow-cyber-glow-strong
 *   transform hover:translate-y-[-6px]
 *   transition-all duration-300
 * ">
 *   Click Me
 * </button>
 * ```
 *
 * 2. CORPORATE THEME CARD:
 * ```vue
 * <div class="
 *   bg-corporate-bg-primary
 *   border border-corporate-border-default
 *   rounded-xl
 *   shadow-corporate-lg
 *   hover:shadow-corporate-card-hover
 *   transform hover:translate-y-[-4px]
 *   transition-all duration-300
 * ">
 *   Card Content
 * </div>
 * ```
 *
 * 3. THEME SWITCHING:
 * ```vue
 * <!-- In your layout component -->
 * <template>
 *   <div :class="[currentTheme === 'cyber' ? 'theme-cyber' : 'theme-corporate']">
 *     <slot />
 *   </div>
 * </template>
 *
 * <script setup>
 * import { ref } from 'vue'
 * const currentTheme = ref('cyber') // or 'corporate'
 * </script>
 * ```
 *
 * 4. USING CSS VARIABLES (Alternative):
 * ```vue
 * <style scoped>
 * .my-component {
 *   background-color: var(--cyber-bg-primary);
 *   color: var(--cyber-text-primary);
 *   box-shadow: var(--cyber-glow-cyan);
 * }
 * </style>
 * ```
 *
 * =============================================================================
 */
