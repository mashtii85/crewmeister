/**
 * Absences
 */

//Types
import { IAbsence, IBaseModel } from '@crewmeister-code-challenge/types'

//BaseService
import Service from './baseService'

export class AbsencesService {
  async get(): Promise<IBaseModel<IAbsence>> {
    const list = await new Service().readJsonFile<IAbsence>('absences')
    return list
  }
}
