/**
 * Table - Pagination - ForwardNavigation
 */

import { Next } from '@crewmeister-code-challenge/assets'
import { StyledNextPaginationButton } from 'libs/styles/src/misc/table'

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
      <StyledNextPaginationButton data-cy="nav-forward" onClick={() => onPageChange(currentPage + 1)}>
        <span className="sr-only">Next</span>
        <Next />
      </StyledNextPaginationButton>
    )
  }

  return null
}
