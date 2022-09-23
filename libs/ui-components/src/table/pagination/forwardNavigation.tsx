/**
 * Table - Pagination - ForwardNavigation
 */

import { Next } from '@crewmeister-code-challenge/assets'

export const ForwardNavigation = ({
  isLastPage,
  currentPage,
  onPageChange
}: {
  currentPage: number
  isLastPage: boolean
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}) => {
  if (isLastPage) {
    return (
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
      >
        <span className="sr-only">Next</span>
        <Next />
      </button>
    )
  }

  return null
}
