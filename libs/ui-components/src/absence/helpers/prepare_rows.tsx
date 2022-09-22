/**
 *
 */

import { IAbsence, IAbsenceViewModel, IMember } from '@crewmeister-code-challenge/types'
import { DateDiffInDays } from '@crewmeister-code-challenge/utility'
import { calculateStatus } from './status'

export const prepareRows = ({
  members,
  absenceList
}: {
  members: IMember[]
  absenceList: IAbsence[]
}): IAbsenceViewModel[] => {
  const content: IAbsenceViewModel[] = absenceList?.map((absence) => {
    const member = members.find((member) => member.userId === absence.userId)
    const item: IAbsenceViewModel = {
      id: absence.id,
      name: member?.name ?? 'unknown',
      type: absence.type,
      period: DateDiffInDays(absence.startDate, absence.endDate, { showDay: true }),
      status: calculateStatus({ confirmed: absence.rejectedAt, rejected: absence.confirmedAt })
    }

    return item
  })

  return content
}
