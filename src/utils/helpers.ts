/**
 * @description Halt code execution for x seconds
 * @example
 * import { sleep } from '@/composables/helpers.ts'
 * await sleep(2)
 */
export const sleep = (seconds: number): Promise<boolean> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, seconds * 1000)
  })
}

/**
 * @description Stringify a Date object to the following formats:
 * - yyyy-mm-dd (2023-01-02)
 * - yyyy-mm-dd 12:04 AM
 */
export const formatDateTime = (dateTime: Date, formatWithTime = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  if (formatWithTime) {
    options.hour = 'numeric'
    options.minute = 'numeric'
  }

  return new Intl.DateTimeFormat('default', options).format(new Date(dateTime))
}
