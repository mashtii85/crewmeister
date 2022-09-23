/**
 *
 */

import { TAbsenceStatus } from '@crewmeister-code-challenge/type'

export const calculateStatus = ({ rejected, confirmed }: { rejected?: string; confirmed?: string }): TAbsenceStatus => {
  if (rejected) {
    return 'REJECTED'
  }
  if (confirmed) {
    return 'CONFIRMED'
  }
  return 'REQUESTED'
}
