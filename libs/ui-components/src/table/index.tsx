/**
 * Table - Index
 */

import { PersonDetails } from '@crewmeister-code-challenge/assets'
import { IColumn, ISetSort, TSort } from '@crewmeister-code-challenge/types'
import { sortObject } from '@crewmeister-code-challenge/utilities'
import {
  StyledActionButton,
  StyledEmptyTd,
  StyledTable,
  StyledTableContainer,
  StyledTaskbar,
  StyledTd,
  StyledTr
} from 'libs/styles/src/misc/table'
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
  detailsHandler: (row: any) => void
  taskbar?: JSX.Element | JSX.Element[]
}) => {
  const pageLimit = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<ISetSort>()
  const [rowsChunk, setRowsChunk] = useState(rows)
  const slice = (currentPage - 1) * pageLimit

  useEffect(() => {
    setCurrentPage(1)
  }, [rows.length])

  useEffect(() => {
    let chunk = rows.slice(slice, slice + pageLimit)

    if (sort) {
      const key = Object.keys(rows[0])[sort.columnIndex].toString()
      sortObject<any>({ array: rows, key, sortType: sort.sortType })
      chunk = rows.slice(slice, slice + pageLimit)
    }
    setRowsChunk(chunk)
  }, [currentPage, sort, rows.length])

  const sortHandler = (columnIndex: number, sortType: TSort) => {
    setSort({ columnIndex, sortType })
  }

  return (
    <StyledTableContainer data-cy="table">
      <StyledTaskbar>{taskbar && taskbar}</StyledTaskbar>
      <StyledTable>
        <TableHeader columns={columns} sortHandler={sortHandler} />
        <tbody>
          {rowsChunk.length === 0 ? (
            <tr>
              <StyledEmptyTd colSpan={columns.length + 1}>Nothing to show</StyledEmptyTd>
            </tr>
          ) : (
            rowsChunk.map((item, index) => {
              return (
                <StyledTr data-cy={`tr-${index}`} key={item['id']} bgcolor={index % 2 === 0 ? 'white' : 'gray'}>
                  <StyledTd>{slice + index + 1}</StyledTd>
                  {Object.values(item).map((row, rowIndex) => {
                    const column = columns[rowIndex]
                    if (column.hidden) return null
                    const record = column.formatter ? column.formatter({ row: item }) : row
                    return (
                      <td key={`${item['id']}${rowIndex}${index}`} data-cy={`td-${rowIndex}`}>
                        {record!}
                      </td>
                    )
                  })}
                  <StyledTd key={`${item['id']}${index}action`}>
                    <StyledActionButton data-cy={`show-action-${index}`} onClick={() => detailsHandler(item)}>
                      <PersonDetails />
                    </StyledActionButton>
                  </StyledTd>
                </StyledTr>
              )
            })
          )}
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
