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

export const snakeCaseToTitleCase = (s: string) =>
  s.replace(/^_*(.)|_+(.)/g, (_s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()))
