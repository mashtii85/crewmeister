/**
 * Components - On_Leave - Index
 */

// Services

//React-Query
import { useQuery } from 'react-query'

// UI

import { useContext, useState } from 'react'

import { calculateStatus, tableColumns } from './helpers/index'
import { DateDiffInDays } from '@crewmeister-code-challenge/utility'
import { IAbsenceViewModel } from '@crewmeister-code-challenge/types'
import { MemberContext } from '../members/context'
import { AbsencesService } from '@crewmeister-code-challenge/services'
import { OffCanvas } from '../off_canvas/index'
import { AbsenceDetails } from './details/index'
import { Table } from '../table/index'
import { prepareRows } from './helpers/prepare_rows'

export const Absence = () => {
  const service = new AbsencesService()
  const membersContext = useContext(MemberContext)
  const { data, error, isLoading } = useQuery('absence-list', service.get)

  const [openCanvas, setOpenCanvas] = useState<boolean>(false)

  const handleDetails = (row: any) => {
    setOpenCanvas(true)
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    //add error handling platform like sentry in here
    console.log(error)
  }

  // const content: IAbsenceViewModel[] = data?.payload?.map((absence) => {
  //   const member = membersContext.members.find((member) => member.userId === absence.userId)
  //   const item: IAbsenceViewModel = {
  //     id: absence.id,
  //     name: member?.name ?? 'unknown',
  //     type: absence.type,
  //     period: DateDiffInDays(absence.startDate, absence.endDate, { showDay: true }),
  //     status: calculateStatus({ confirmed: absence.rejectedAt, rejected: absence.confirmedAt })
  //   }

  //   return item
  // })

  return (
    <>
      <OffCanvas open={openCanvas} setOpen={setOpenCanvas}>
        <AbsenceDetails />
      </OffCanvas>
      <Table
        rows={prepareRows({ absenceList: data?.payload ?? [], members: membersContext.members })}
        columns={tableColumns}
        detailsHandler={handleDetails}
      />
    </>
  )
}
