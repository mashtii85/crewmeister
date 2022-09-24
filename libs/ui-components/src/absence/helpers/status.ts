/**
 * Absences - Hlepers - Status
 */

import { TAbsenceStatus } from '@crewmeister-code-challenge/types'

export const calculateStatus = ({ rejected, confirmed }: { rejected?: string; confirmed?: string }): TAbsenceStatus => {
  if (rejected) {
    return 'REJECTED'
  }
  if (confirmed) {
    return 'CONFIRMED'
  }
  return 'REQUESTED'
}
