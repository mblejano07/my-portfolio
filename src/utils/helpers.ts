/**
 * @description Halt code execution for x seconds
 * @example
 * import { useSleep } from '@/composables/helpers.ts'
 * const sleep = useSleep()
 * await sleep(2)
 */
export const useSleep = (): ((seconds: number) => Promise<boolean>) => {
  return (seconds: number): Promise<boolean> => {
    return new Promise((res) => {
      setTimeout(() => {
        res(true)
      }, seconds * 1000)
    })
  }
}
