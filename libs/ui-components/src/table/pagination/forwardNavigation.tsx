/**
 * Table - Pagination - ForwardNavigation
 */

import { Next } from '@crewmeister-code-challenge/assets'
import { StyledNextPaginationButton } from 'libs/styles/src/index'

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
      <StyledNextPaginationButton onClick={() => onPageChange(currentPage + 1)} className="">
        <span className="sr-only">Next</span>
        <Next />
      </StyledNextPaginationButton>
    )
  }

  return null
}
