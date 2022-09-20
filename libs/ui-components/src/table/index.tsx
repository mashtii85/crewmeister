/**
 * Table - Index
 */

import { IColumn, ISetSort, TSort } from '@crewmeister-code-challenge/types'
import { useEffect, useState } from 'react'
import { TableHealder } from './header'
import { Pagination } from './pagination/index'
import { StyledTd } from './styles'

export const Table = ({ rows, columns, isLoading }: { rows: any[]; columns: IColumn<any>[]; isLoading?: boolean }) => {
  const pageLimit = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<ISetSort>()
  const [rowsChunk, setRowsChunk] = useState(rows ?? [])
  const slice = (currentPage - 1) * pageLimit

  useEffect(() => {
    const chunk = rows.slice(slice, slice + pageLimit)

    if (sort) {
      const key = Object.keys(rows[0])[sort.columnIndex].toString()
      chunk.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
    }

    setRowsChunk(chunk)
  }, [currentPage, sort])

  const sortHandler = (columnIndex: number, sortType: TSort) => {
    setSort({ columnIndex, sortType })
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHealder columns={columns} sortHandler={sortHandler} />
        <tbody>
          {rowsChunk.map((item, index) => {
            return (
              <tr key={item['id']} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                <StyledTd>{slice + index + 1}</StyledTd>
                {Object.values(item).map((row, rowIndex) => {
                  const column = columns[rowIndex]
                  if (column.hidden) return null
                  const record = column.formatter ? column.formatter({ row }) : row
                  return <td>{record!}</td>
                })}
                <StyledTd>
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </StyledTd>
              </tr>
            )
          })}
        </tbody>
        <Pagination
          currentPage={currentPage}
          limit={pageLimit}
          columnLength={columns.length + 1}
          total={rows.length}
          onPageChange={setCurrentPage}
        />
      </table>
    </div>
  )
}
