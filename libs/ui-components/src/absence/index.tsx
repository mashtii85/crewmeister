/**
 * Components - On_Leave - Index
 */

// Services

//React-Query
import { useQuery } from 'react-query'

// UI

import { useContext, useEffect, useState } from 'react'

import { tableColumns } from './helpers'
import { IAbsence, AbsenceType } from '@crewmeister-code-challenge/type'
import { MemberContext } from '../members/context'
import { AbsencesService } from '@crewmeister-code-challenge/services'
import { OffCanvas } from '../off_canvas'
import { AbsenceDetails } from './details'
import { Table } from '../table'
import { prepareRows } from './helpers/prepare_rows'
import { AbsenceTaskbar } from './taskbar'
import { Loading } from '../loading'
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker'

export const Absence = () => {
  const service = new AbsencesService()
  const { members } = useContext(MemberContext)
  const { data, error, isLoading } = useQuery('absence-list', service.get)

  const [list, setList] = useState<IAbsence[]>([])

  useEffect(() => {
    setList(data?.payload ?? [])
  }, [isLoading])

  const [openCanvas, setOpenCanvas] = useState<boolean>(false)
  const [selectedAbsence, setSelectedAbsence] = useState<Partial<IAbsence>>({})
  const [day, setDay] = useState<DayValue>(null)

  const handleDetails = (row: IAbsence) => {
    setOpenCanvas(true)
    setSelectedAbsence(row)
  }

  useEffect(() => {
    const list = service.filterByDate(data?.payload, day)

    setList(list ?? [])
  }, [day])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    //add error handling platform like sentry in here
    console.log(error)
  }

  const typeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const list = service.filterByType(data?.payload, event)
    setList(list)
  }

  const resetDateFilter = () => {
    setDay(null)
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
        taskbar={
          <AbsenceTaskbar
            onChangeType={typeChangeHandler}
            day={day}
            setDay={setDay}
            resetDateFilterHandler={resetDateFilter}
          />
        }
      />
    </>
  )
}
