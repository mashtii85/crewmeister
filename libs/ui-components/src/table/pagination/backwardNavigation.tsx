/**
 * Table - Pagination - BackwardNavigation
 */

import { Prev } from '@crewmeister-code-challenge/assets'
import { StyledBackPaginationButton } from 'libs/styles/src/misc/table'

export const BackwardNavigation = ({
  currentPage,
  onPageChange
}: {
  currentPage: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}) => {
  if (currentPage > 1) {
    return (
      <StyledBackPaginationButton data-cy="nav-back" onClick={() => onPageChange(currentPage - 1)}>
        <span className="sr-only">Previous</span>
        <Prev />
      </StyledBackPaginationButton>
    )
  }

  return null
}
