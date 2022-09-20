/**
 * Table - Index
 */

import { IColumn } from '@crewmeister-code-challenge/types'
import { useEffect, useState } from 'react'
import { Pagination } from './pagination/index'

export const Table = ({ rows, columns, isLoading }: { rows: any[]; columns: IColumn<any>[]; isLoading?: boolean }) => {
  const pageLimit = 10
  const [currentPage, setCurrentPage] = useState(1)

  const [rowsChunk, setRowsChunk] = useState(rows)
  const slice = (currentPage - 1) * pageLimit

  useEffect(() => {
    const chunk = rows.slice(slice, slice + pageLimit)

    setRowsChunk(chunk)
  }, [currentPage])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    #
                  </th>
                  {columns.map((column, index) => {
                    if (column.hidden) return null
                    return (
                      <th key={index} scope="col" className="text-sm font-medium text-white px-6 py-4">
                        {column.text}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {rowsChunk.map((item, index) => {
                  return (
                    <tr key={item['id']} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {slice + index + 1}
                      </td>
                      {Object.values(item).map((row, rowIndex) => {
                        const column = columns[rowIndex]
                        if (column.hidden) return null
                        const record = column.formatter ? column.formatter({ row }) : row
                        return (
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record!}</td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
              <Pagination
                currentPage={currentPage}
                limit={pageLimit}
                columnLength={columns.length}
                total={rows.length}
                key={'key'}
                onPageChange={setCurrentPage}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
