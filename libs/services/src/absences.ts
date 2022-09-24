/**
 * Absences
 */

//Types
import { AbsenceType, IAbsence, IBaseModel } from '@crewmeister-code-challenge/types'

//BaseService
import Service from './baseService'

import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'

export class AbsencesService {
  async get(): Promise<IBaseModel<IAbsence>> {
    const list = await new Service().readJsonFile<IAbsence>('absences')
    return list
  }

  filterByDate(absenceList: IAbsence[] = [], day: DayValue): IAbsence[] {
    if (day) {
      const selectedDay = new Date(`${day?.month}-${day?.day}-${day?.year}`)
      selectedDay.setHours(0, 0, 0, 0)
      const list = absenceList.filter((item) => {
        const startDate = new Date(item.startDate)
        startDate.setHours(0, 0, 0, 0)
        const endDate = new Date(item.endDate)
        endDate.setHours(0, 0, 0, 0)
        return selectedDay.getTime() >= startDate.getTime() && selectedDay.getTime() <= endDate.getTime()
      })
      return list
    }

    return absenceList
  }

  filterByType(absenceList: IAbsence[] = [], event: React.ChangeEvent<HTMLSelectElement>): IAbsence[] {
    const type: AbsenceType = event.target.value as AbsenceType
    switch (type) {
      case AbsenceType.SICKNESS: {
        const listByType = absenceList.filter((item) => item.type === AbsenceType.SICKNESS)
        return listByType
      }
      case AbsenceType.VACACTION: {
        const listByType = absenceList.filter((item) => item.type === AbsenceType.VACACTION)
        return listByType
      }
      default: {
        return absenceList
      }
    }
  }
}
