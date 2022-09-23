/**
 * Misc - Badge
 */

import tw from 'tailwind-styled-components'

export const StyledSpan = tw.span<any>`
 ${({ color }) =>
   `bg-${color}-100`}   text-xs font-semibold mr-2 px-2.5 py-1 rounded dark:bg-green-200 dark:text-green-900
 `
