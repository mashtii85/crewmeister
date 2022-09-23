/**
 * Table - Pagination - Index
 */

import { StyledPaginationContent, StyledPaginationNav, StyledTfoot } from 'libs/styles/src/misc/table'
import { BackwardNavigation } from './backwardNavigation'
import { ForwardNavigation } from './forwardNavigation'
import { PaginationItem } from './item'
import { PageInfo } from './pageInfo'

const range = (start: number, end: number) => {
  const arr = new Array(end)
  return [...arr.keys()].map((el) => el + start)
}

export const Pagination = ({
  currentPage,
  total,
  limit,
  onPageChange,
  columnLength
}: {
  currentPage: number
  total: number
  limit: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
  columnLength: number
}) => {
  const pageCount = Math.ceil(total / limit)
  const pages = range(1, pageCount)
  const toPage = total > 10 ? (currentPage * limit > total ? total : currentPage * limit) : total
  const fromPage = (currentPage - 1) * limit + 1

  return (
    <StyledTfoot>
      <tr>
        <td className="p-3" colSpan={columnLength}>
          <StyledPaginationContent>
            <PageInfo fromPage={fromPage} toPage={toPage} total={total} />
            <div>
              <StyledPaginationNav aria-label="Pagination">
                <BackwardNavigation currentPage={currentPage} onPageChange={onPageChange} />

                {pages.map((page) => (
                  <PaginationItem currentPage={currentPage} page={page} key={page} onPageChange={onPageChange} />
                ))}

                <ForwardNavigation
                  currentPage={currentPage}
                  isLastPage={currentPage * limit < total}
                  onPageChange={onPageChange}
                />
              </StyledPaginationNav>
            </div>
          </StyledPaginationContent>
        </td>
      </tr>
    </StyledTfoot>
  )
}
