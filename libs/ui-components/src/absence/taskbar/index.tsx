/**
 * Absence - Taskbar
 */

import { AbsenceType } from '@crewmeister-code-challenge/types'
import { ISelect } from '@crewmeister-code-challenge/types'
import { Select } from '../../select'
// import DatePicker from 'tailwind-react-datepicker'
import { useState } from 'react'

export const AbsenceTaskbar = ({ onChange }: { onChange: React.ChangeEventHandler<any> | undefined }) => {
  const [startDate, setStartDate] = useState(new Date())
  const absencOptions: ISelect[] = [
    { key: 'none', value: 'Absence Type/None' },
    { key: AbsenceType.SICKNESS, value: AbsenceType.SICKNESS.toLocaleUpperCase() },
    { key: AbsenceType.VACACTION, value: AbsenceType.VACACTION.toLocaleUpperCase() }
  ]

  return (
    <div className="">
      <div className="pb-3">filters</div>
      <Select onChange={onChange} options={absencOptions} />
      <span className="pr-3"></span>
      <Select onChange={onChange} options={absencOptions} />
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} /> */}
    </div>
  )
}
