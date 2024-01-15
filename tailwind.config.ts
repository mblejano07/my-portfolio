import plugin = require('tailwindcss/plugin')

const withOpacity = (variableName: string): (({ opacityValue }: { opacityValue: string }) => string) => {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}) / ${opacityValue})`
    }
    return `rgba(var(${variableName}))`
  }
}

const tailwindConfig = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [{ pattern: /(bg-primary-|bg-surface-)./ }, { pattern: /(text-surface-|text-primary-)./ }, { pattern: /(w-|h-)./ }],
  theme: {
    extend: {
      fontFamily: {
        menu: ['Comfortaa', 'sans-serif'],
        content: ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-50': withOpacity('primary-50'),
        'primary-100': withOpacity('--primary-100'),
        'primary-200': withOpacity('--primary-200'),
        'primary-300': withOpacity('--primary-300'),
        'primary-400': withOpacity('--primary-400'),
        'primary-500': withOpacity('--primary-500'),
        'primary-600': withOpacity('--primary-600'),
        'primary-700': withOpacity('--primary-700'),
        'primary-800': withOpacity('--primary-800'),
        'primary-900': withOpacity('--primary-900'),
        'primary-950': withOpacity('--primary-950'),
        'surface-0': withOpacity('--surface-0'),
        'surface-50': withOpacity('--surface-50'),
        'surface-100': withOpacity('--surface-100'),
        'surface-200': withOpacity('--surface-200'),
        'surface-300': withOpacity('--surface-300'),
        'surface-400': withOpacity('--surface-400'),
        'surface-500': withOpacity('--surface-500'),
        'surface-600': withOpacity('--surface-600'),
        'surface-700': withOpacity('--surface-700'),
        'surface-800': withOpacity('--surface-800'),
        'surface-900': withOpacity('--surface-900'),
        'surface-950': withOpacity('--surface-950'),
        'error-500': withOpacity('--error-500'),
      },
      keyframes: {
        'spin-up': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1', borderRadius: '0' },
          '100%': { transform: 'translateY(-1000px) rotate(720deg)', opacity: '0', borderRadius: '50%' },
        },
      },
      animation: {
        'float-up': 'spin-up 25s linear infinite',
      },
    },
  },
  plugins: [
    // Animation Delay
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
    // Animation Duration
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animation-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}

export default tailwindConfig
