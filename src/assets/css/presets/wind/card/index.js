export default {
  root: {
    class: [
      //Shape
      'rounded-lg',
      'shadow-md',

      //Color
      'bg-surface-0 dark:bg-surface-900',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  body: {
    class: 'py-5',
  },
  title: {
    class: 'text-lg font-medium mb-2 px-5 md:px-6',
  },
  subtitle: {
    class: [
      //Spacing
      'mb-1 px-5 md:px-6',

      //Color
      'text-surface-600 dark:text-surface-0/60',
    ],
  },
  content: {
    class: 'py-6 px-5 md:px-6',
  },
}
