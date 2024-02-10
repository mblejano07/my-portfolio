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

/**
 * @description Get the 2-letter initials from the full name
 * @example
 * import { getAvatarDisplayNamePlaceholder } from '@/composables/helpers.ts'
 * const placeholder = getAvatarDisplayNamePlaceholder('Juan Luna') // returns JL
 */
export const getAvatarDisplayNamePlaceholder = (fullName: string) => {
  if (!fullName) return null

  // we'll display the initials for the fake avatar
  const names = fullName.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}
