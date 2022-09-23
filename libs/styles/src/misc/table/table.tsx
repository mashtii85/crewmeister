/**
 * Misc - Table - Table
 */

import tw from 'tailwind-styled-components'

export const StyledTableContainer = tw.div<any>`
 overflow-x-auto relative shadow-md sm:rounded-lg
 `
export const StyledTaskbar = tw.div<any>`
 bg-gray-200 p-4
 `
export const StyledTable = tw.table<any>`
 w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white
 `
export const StyledActionButton = tw.button<any>`
 font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer
 `

export const StyledTd = tw.td<any>`
px-6
py-4
whitespace-nowrap
text-sm
font-medium
text-gray-900
`
export const StyledTh = tw.th<any>`
text-sm
font-medium
text-white
px-6
py-4
`

export const StyledFlex = tw.div<any>`
flex
flex-col
`
export const StyledHeader = tw.div<any>`
text-sm
`
export const StyledTr = tw.tr<any>`
${({ bgcolor }) => `bg-${bgcolor}-100`} border-b
`

export const StyledEmptyTd = tw.td<any>`
h-[40rem]  bg-slate-200 flex-1 p-3 content-center text-center text-2xl text-gray-400`
