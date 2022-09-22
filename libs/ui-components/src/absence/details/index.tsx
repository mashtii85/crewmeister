/**
 *
 */

import { IAbsence, IAbsenceDetails, IAbsenceViewModel } from '@crewmeister-code-challenge/types'
import { DateDiffInDays } from '@crewmeister-code-challenge/utility'
import { useContext } from 'react'
import { MemberContext } from '../../members/index'
import { calculateStatus } from '../helpers/status'

export const AbsenceDetails = ({ absence }: { absence: Partial<IAbsenceViewModel> }) => {
  const { members } = useContext(MemberContext)

  const member = members.find((item) => item.userId === absence.userId)
  const days =
    absence.startDate && absence.endDate ? DateDiffInDays(absence.startDate!, absence.endDate!, { showDay: true }) : 0
  console.log('image:', absence.image)
  // const status = calculateStatus({ confirmed: absence.rejectedAt, rejected: absence.confirmedAt })
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <span className="flex  p-5 content-center items-center">
        <img src={`${absence.image}?lock=1`} alt="" className=" w-20 h-20 rounded-full" />
      </span>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900"></h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{member?.name}'s Absence Details</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Absence Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{absence.type}</dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Period</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {absence.startDate} - {absence.endDate}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Days</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{days}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{absence.status}</dd>
          </div>
          {absence.memberNote && (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Member Note</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{absence.memberNote}</dd>
            </div>
          )}
          {absence.admitterNote && (
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Member Note</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{absence.admitterNote}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  )
}
