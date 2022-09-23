/**
 * Absence - Taskbar
 */
import { AbsenceType, ISelect } from '@crewmeister-code-challenge/type'
import { Select } from '../../select'
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'
import { DatePicker } from '../../date_picker'

export const AbsenceTaskbar = ({
  onChangeType,
  day,
  setDay
}: {
  onChangeType: React.ChangeEventHandler<any> | undefined
  day: DayValue
  setDay: React.Dispatch<React.SetStateAction<DayValue>>
}) => {
  const absencOptions: ISelect[] = [
    { key: 'none', value: 'Absence Type' },
    { key: AbsenceType.SICKNESS, value: AbsenceType.SICKNESS.toLocaleUpperCase() },
    { key: AbsenceType.VACACTION, value: AbsenceType.VACACTION.toLocaleUpperCase() }
  ]

  return (
    <div className="">
      <div className="pb-3 text-lg">Filters</div>
      <Select onChange={onChangeType} options={absencOptions} />
      <span className="pr-3" />
      <DatePicker day={day} setDay={setDay} />
    </div>
  )
}
