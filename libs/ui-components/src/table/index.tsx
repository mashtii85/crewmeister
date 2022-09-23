/**
 * Table - Index
 */

import { PersonDetails } from '@crewmeister-code-challenge/assets'
import { IColumn, ISetSort, TSort } from '@crewmeister-code-challenge/types'
import { sortObject } from '@crewmeister-code-challenge/utility'
import { StyledActionButton, StyledTable, StyledTableContainer, StyledTaskbar, StyledTd } from 'libs/styles/src/index'
import { useEffect, useState } from 'react'
import { TableHeader } from './header'
import { Pagination } from './pagination/index'

export const Table = ({
  rows,
  columns,
  isLoading,
  detailsHandler,
  taskbar
}: {
  rows: any[]
  columns: IColumn<any>[]
  isLoading?: boolean
  detailsHandler?: (row: any) => void
  taskbar?: JSX.Element | JSX.Element[]
}) => {
  const pageLimit = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<ISetSort>()
  const [rowsChunk, setRowsChunk] = useState(rows)
  const slice = (currentPage - 1) * pageLimit

  useEffect(() => {
    setCurrentPage(1)
    console.log('len', rows.length)
  }, [rows.length])

  useEffect(() => {
    const chunk = rows.slice(slice, slice + pageLimit)

    if (sort) {
      const key = Object.keys(rows[0])[sort.columnIndex].toString()
      sortObject<any>({ array: chunk, key, sortType: sort.sortType })
    }
    console.log('chunk', rows.length)
    setRowsChunk(chunk)
  }, [currentPage, sort, rows.length])

  const sortHandler = (columnIndex: number, sortType: TSort) => {
    setSort({ columnIndex, sortType })
  }

  return (
    <StyledTableContainer>
      <StyledTaskbar>{taskbar && taskbar}</StyledTaskbar>
      <StyledTable>
        <TableHeader columns={columns} sortHandler={sortHandler} />
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
                  <StyledActionButton onClick={() => detailsHandler(item)}>
                    <PersonDetails />
                  </StyledActionButton>
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
      </StyledTable>
    </StyledTableContainer>
  )
}
