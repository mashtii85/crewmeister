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
    <StyledSelect onChange={onChange} id="countries">
      {options.map((item) => {
        return <option value={item.key}>{item.value}</option>
      })}
    </StyledSelect>
  )
}
