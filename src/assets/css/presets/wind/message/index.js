export default {
  root: ({ props }) => ({
    class: [
      // Spacing and Shape
      'my-2 mx-0',
      'rounded-md',
      'ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0',

      // Colors
      {
        'bg-info-50 dark:bg-surface-800 text-info-500 !ring-info-500 dark:ring-2 dark:!ring-info-300 dark:bg-surface-800 dark:text-info-300':
          props.severity === 'info',
        'bg-success-50 dark:bg-surface-800 text-success-500 !ring-success-500 dark:ring-2 dark:!ring-success-300  dark:text-success-300':
          props.severity === 'success',
        'bg-warn-50 dark:bg-surface-800 text-warn-500 !ring-warn-500 dark:ring-2 dark:!ring-warn-300  dark:text-warn-300':
          props.severity === 'warn',
        'bg-error-50 dark:bg-surface-800 text-error-500 !ring-error-500 dark:ring-2 dark:!ring-error-300 dark:text-error-300':
          props.severity === 'error',
      },
    ],
  }),
  wrapper: {
    class: [
      // Flexbox
      'flex items-center',

      // Spacing
      'p-4',
    ],
  },
  icon: {
    class: [
      // Sizing and Spacing
      'w-5 h-5',
      'mr-3 shrink-0',
    ],
  },
  text: {
    class: [
      // Font and Text
      'text-sm leading-none',
      'font-medium',
    ],
  },
  button: ({ props }) => ({
    class: [
      // Flexbox
      'flex items-center justify-center',

      // Size
      'w-6 h-6',

      // Spacing and Misc
      'ml-auto relative',

      // Shape
      'rounded-full',

      // Colors
      {
        'text-error-500 dark:text-error-300': props.severity === 'error',
        'text-warn-500 dark:text-warn-300': props.severity === 'warn',
        'text-info-500 dark:text-info-300': props.severity === 'info',
        'text-success-500 dark:text-success-300': props.severity === 'success',
      },

      'text-error-500 dark:text-error-300',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:bg-surface-100 dark:hover:bg-surface-700',
      'outline-none focus:ring-1 focus:ring-inset',
      'focus:ring-primary-500 dark:focus:ring-primary-400',

      // Misc
      'overflow-hidden',
    ],
  }),
  closeicon: {
    class: [
      // Sizing and Spacing
      'w-3 h-3',
      'shrink-0',
    ],
  },
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-300',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
    leaveToClass: 'max-h-0 opacity-0 !m-0',
  },
}
