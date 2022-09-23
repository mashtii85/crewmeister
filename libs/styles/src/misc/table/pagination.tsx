import tw from 'tailwind-styled-components'

/**
 * Misc - Table - Pagination
 */

export const StyledBackPaginationButton = tw.button<any>`
 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20
 `
export const StyledNextPaginationButton = tw.button<any>`
 relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20
 `
export const StyledTfoot = tw.tfoot<any>`
 w-full border-b dark: bg-gray-200 text-sm font-medium text-white px-6 py-4 shadow-md sm:rounded-lg
 `
export const StyledPaginationContent = tw.div<any>`
 hidden sm:flex sm:flex-1 sm:items-center sm:justify-between`

export const StyledPaginationNav = tw.nav<any>`
 isolate inline-flex -space-x-px rounded-md shadow-sm`

export const StyledPageInfoSpan = tw.span<any>`
font-medium
`
