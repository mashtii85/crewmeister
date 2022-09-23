/**
 * Table - Pagination - Index
 */

import tw from 'tailwind-styled-components'
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
    <tfoot className="w-full border-b dark: bg-white text-sm font-medium text-white px-6 py-4 shadow-md sm:rounded-lg">
      <tr>
        <td className="p-3" colSpan={columnLength}>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <PageInfo fromPage={fromPage} toPage={toPage} total={total} />
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <BackwardNavigation currentPage={currentPage} onPageChange={onPageChange} />

                {pages.map((page) => (
                  <PaginationItem currentPage={currentPage} page={page} key={page} onPageChange={onPageChange} />
                ))}

                <ForwardNavigation
                  currentPage={currentPage}
                  isLastPage={currentPage * limit < total}
                  onPageChange={onPageChange}
                />
              </nav>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}
