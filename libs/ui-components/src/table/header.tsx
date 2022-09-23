/**
 * Table - Header
 */

import { BarsArrowDown, BarsArrowUp, Cog } from '@crewmeister-code-challenge/assets'
import { ITableHeader } from '@crewmeister-code-challenge/types'
import { StyledHeader } from './styles'

export const TableHeader = ({ columns, sortHandler }: ITableHeader) => {
  return (
    <thead className="text-xs text-white uppercase  dark: bg-gray-400 dark:text-gray-400 ">
      <tr>
        <th scope="col" className="py-3 px-3">
          <StyledHeader>#</StyledHeader>
        </th>
        {columns.map((column, index) => {
          if (column.hidden) return null
          return (
            <th key={index} scope="col" className="py-3">
              <div className="flex items-center">
                {column?.sortable && (
                  <div className="pr-3">
                    <a className="hover:cursor-pointer" onClick={() => sortHandler(index, 'ASC')}>
                      <BarsArrowUp />
                    </a>
                    <a className="hover:cursor-pointer" onClick={() => sortHandler(index, 'DES')}>
                      <BarsArrowDown />
                    </a>
                  </div>
                )}
                <StyledHeader>{column.text}</StyledHeader>
              </div>
            </th>
          )
        })}

        <th scope="col" className="py-3 px-6">
          <div className="flex items-center">
            <div className="pr-2">
              <Cog />
            </div>
            <StyledHeader>Action</StyledHeader>
          </div>
        </th>
      </tr>
    </thead>
  )
}
