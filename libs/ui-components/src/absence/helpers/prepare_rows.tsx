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
    const member = members.find((member) => member.userId === absence.userId)!

    const item: IAbsenceViewModel = {
      id: absence.id,
      userId: absence.userId,
      name: member?.name ?? '',
      type: absence.type,
      period: DateDiffInDays(absence?.startDate ?? '0', absence?.endDate ?? '0', { showDay: true }),
      status: calculateStatus({ confirmed: absence.rejectedAt, rejected: absence.confirmedAt }),
      startDate: absence.startDate,
      endDate: absence.endDate,
      memberNote: absence.memberNote,
      admitterNote: absence.admitterNote,
      image: member?.image
    }
    return item
  })

  return content
}
