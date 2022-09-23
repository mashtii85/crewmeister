/**
 * Select
 */

import { ISelect } from '@crewmeister-code-challenge/types'
import { ChangeEventHandler } from 'react'
import tw from 'tailwind-styled-components'

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

const StyledSelect = tw.select`
  form-select form-select-sm mb-3
  px-4
  py-2
  text-sm
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`
