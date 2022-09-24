/**
 * Absence - Taskbar
 */
import { AbsenceType, ISelect } from '@crewmeister-code-challenge/types'
import { Select } from '../../select'
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'
import { DatePicker } from '../../date_picker'
import { StyledResetButton } from 'libs/styles/src/absence'

export const AbsenceTaskbar = ({
  onChangeType,
  day,
  setDay,
  resetDateFilterHandler
}: {
  onChangeType: React.ChangeEventHandler<any> | undefined
  day: DayValue
  setDay: React.Dispatch<React.SetStateAction<DayValue>>
  resetDateFilterHandler: React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  const absencOptions: ISelect[] = [
    { key: AbsenceType.DEFAULT, value: AbsenceType.DEFAULT },
    { key: AbsenceType.SICKNESS, value: AbsenceType.SICKNESS.toLocaleUpperCase() },
    { key: AbsenceType.VACACTION, value: AbsenceType.VACACTION.toLocaleUpperCase() }
  ]

  return (
    <div data-cy="task-bar">
      <div className="pb-3 text-lg">Filters</div>
      <Select data-cy="type-select" onChange={onChangeType} options={absencOptions} />
      <span className="pr-3" />
      <DatePicker day={day} setDay={setDay} />
      <span className="pr-3" />
      <StyledResetButton onClick={resetDateFilterHandler}>Rest Date Filter</StyledResetButton>
    </div>
  )
}
