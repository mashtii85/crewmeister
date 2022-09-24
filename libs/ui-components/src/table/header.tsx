/**
 * Table - Header
 */

import { BarsArrowDown, BarsArrowUp, Cog } from '@crewmeister-code-challenge/assets'
import { ITableHeader } from '@crewmeister-code-challenge/type'
import { StyledHeader } from 'libs/styles/src/misc/table'
import { StyledSortButton, StyledSortContainer, StyledThead } from 'libs/styles/src/misc/table/header'

export const TableHeader = ({ columns, sortHandler }: ITableHeader) => {
  return (
    <StyledThead>
      <tr>
        <th scope="col" className="py-3 px-3">
          <StyledHeader>#</StyledHeader>
        </th>
        {columns.map((column, index) => {
          if (column.hidden) return null
          return (
            <th data-cy={`${column.text.toLowerCase()}-header`} key={index} scope="col" className="py-3">
              <StyledSortContainer>
                {column?.sortable && (
                  <div className="pr-3">
                    <StyledSortButton data-cy="asc-sort" onClick={() => sortHandler(index, 'ASC')}>
                      <BarsArrowUp />
                    </StyledSortButton>
                    <StyledSortButton data-cy="des-sort" onClick={() => sortHandler(index, 'DES')}>
                      <BarsArrowDown />
                    </StyledSortButton>
                  </div>
                )}
                <StyledHeader>{column.text}</StyledHeader>
              </StyledSortContainer>
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
    </StyledThead>
  )
}
