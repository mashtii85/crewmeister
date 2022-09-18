import { IAbsence } from '@crewmeister-code-challenge/types'
import Service from '../services'
export const absences = async () => {
  const s = await new Service().readJsonFile<any>('absences.json')
  return s
}

// const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json')
export class AbsenceService {
  async getAbsences() {
    const s = await new Service().readJsonFile<IAbsence>('absences.json')
    return s
  }
}
