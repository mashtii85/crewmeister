/**
 * Select
 */

import { ISelect } from '@crewmeister-code-challenge/type'
import { StyledSelect } from 'libs/styles/src/misc/select'
import { ChangeEventHandler } from 'react'

export const Select = ({
  options,
  onChange
}: {
  options: ISelect[]
  onChange: ChangeEventHandler<any> | undefined
}) => {
  return (
    <StyledSelect onChange={onChange}>
      {options.map((item) => {
        return (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        )
      })}
    </StyledSelect>
  )
}
