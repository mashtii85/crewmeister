/**
 * Components - On_Leave - Index
 */

// Services

//React-Query
import { useQuery } from 'react-query'

// UI

import { useContext, useEffect, useState } from 'react'

import { tableColumns } from './helpers/index'
import { IAbsence } from '@crewmeister-code-challenge/types'
import { MemberContext } from '../members/context'
import { AbsencesService } from '@crewmeister-code-challenge/services'
import { OffCanvas } from '../off_canvas/index'
import { AbsenceDetails } from './details/index'
import { Table } from '../table/index'
import { prepareRows } from './helpers/prepare_rows'
import { AbsenceTaskbar } from './taskbar/index'
import { AbsenceType } from '@crewmeister-code-challenge/types'

export const Absence = () => {
  const service = new AbsencesService()
  const { members } = useContext(MemberContext)
  const { data, error, isLoading } = useQuery('absence-list', service.get)

  const [list, setList] = useState<IAbsence[]>([])

  useEffect(() => {
    // if (!isLoading) {
    setList(data?.payload ?? [])
    // }
  }, [isLoading])

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

  const typeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type: AbsenceType = event.target.value as AbsenceType
    switch (type) {
      case AbsenceType.SICKNESS: {
        const listByType = data?.payload.filter((item) => item.type === AbsenceType.SICKNESS)
        setList(listByType ?? [])

        break
      }

      case AbsenceType.VACACTION: {
        const listByType = data?.payload.filter((item) => item.type === AbsenceType.VACACTION)
        setList(listByType ?? [])
        break
      }
      default: {
        setList(data?.payload ?? [])
        break
      }
    }
  }

  return (
    <>
      <OffCanvas open={openCanvas} setOpen={setOpenCanvas}>
        <AbsenceDetails absence={selectedAbsence} />
      </OffCanvas>
      <Table
        rows={prepareRows({ absenceList: list, members: members })}
        columns={tableColumns}
        detailsHandler={handleDetails}
        taskbar={<AbsenceTaskbar onChange={typeChangeHandler} />}
      />
    </>
  )
}
