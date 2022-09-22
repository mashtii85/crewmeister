/**
 * IAbsence.d
 */

export type TAbsenceType = 'SICKNESS' | 'VACINATION' | 'VACATION'

export type TAbsenceStatus = 'REQUESTED' | 'REJECTED' | 'CONFIRMED'
export interface IAbsence {
  admitterId?: number
  admitterNote?: string
  confirmedAt?: string
  createdAt: string
  crewId: number
  endDate: string
  id: number
  memberNote: string
  rejectedAt?: string
  startDate: string
  type: TAbsenceType
  userId: number
}

export interface IAbsenceViewModel {
  id: number
  userId: number
  name: string
  type: TAbsenceType
  period: string
  status: TAbsenceStatus
  startDate: string
  endDate: string
  memberNote?: string
  admitterNote?: string
  image: string
}

export interface IAbsenceDetails {
  id: number
  name: string
  type: TAbsenceType
  period: string
  status: TAbsenceStatus
  addmitterNode?: string
  memberNote?: string
}
