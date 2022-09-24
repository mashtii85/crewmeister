/**
 * Date_Picker
 */

import Datepicker, { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'
import { datePickerStyles } from 'libs/styles/src/misc/date_picker'

export const DatePicker = ({
  day,
  setDay
}: {
  day: DayValue
  setDay: React.Dispatch<React.SetStateAction<DayValue>>
}) => {
  return (
    <Datepicker
      value={day}
      onChange={(value) => {
        setDay(value)
      }}
      calendarClassName="z-0"
      inputPlaceholder="Select a date"
      inputClassName={datePickerStyles.inputClassName}
      shouldHighlightWeekends
    />
  )
}
