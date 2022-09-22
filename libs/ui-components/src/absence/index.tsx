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
import { IAbsence, IAbsenceDetails, IAbsenceViewModel } from '@crewmeister-code-challenge/types'
import { MemberContext } from '../members/context'
import { AbsencesService } from '@crewmeister-code-challenge/services'
import { OffCanvas } from '../off_canvas/index'
import { AbsenceDetails } from './details/index'
import { Table } from '../table/index'
import { prepareRows } from './helpers/prepare_rows'

export const Absence = () => {
  const service = new AbsencesService()
  const { members } = useContext(MemberContext)
  const { data, error, isLoading } = useQuery('absence-list', service.get)

  const [openCanvas, setOpenCanvas] = useState<boolean>(false)
  const [selectedAbsence, setSelectedAbsence] = useState<Partial<IAbsence>>({})

  const handleDetails = (row: IAbsence) => {
    setOpenCanvas(true)
    setSelectedAbsence(row)
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    //add error handling platform like sentry in here
    console.log(error)
  }

  return (
    <>
      <OffCanvas open={openCanvas} setOpen={setOpenCanvas}>
        <AbsenceDetails absence={selectedAbsence} />
      </OffCanvas>
      <Table
        rows={prepareRows({ absenceList: data?.payload ?? [], members: members })}
        columns={tableColumns}
        detailsHandler={handleDetails}
      />
    </>
  )
}
