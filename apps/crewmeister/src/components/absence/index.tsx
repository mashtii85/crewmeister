/**
 * Components - On_Leave - Index
 */

// Services
import { AbsencesService } from '@crewmeister-code-challenge/services'

//React-Query
import { useQuery } from 'react-query'

// UI
import { Table } from '@crewmeister-code-challenge/ui-components'
import { IAbsenceViewModel, IColumn } from '@crewmeister-code-challenge/types'
import { useContext } from 'react'
import { MemberContext } from '../member/context/context'

export const OnLeave = () => {
  const service = new AbsencesService()
  const membersContext = useContext(MemberContext)
  const { data, error, isLoading } = useQuery('absence-list', service.get)

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    //add error handling platform like sentry in here
    console.log(error)
  }

  const tableColumns: IColumn<IAbsenceViewModel>[] = [
    {
      hidden: true,
      text: 'id'
      // sort: true
    },
    {
      hidden: false,
      text: 'Name',
      sortable: true
    },
    {
      hidden: false,
      text: 'Type',
      formatter({ row }) {
        return row
      },
      sortable: true
    }
  ]

  const content = data?.payload?.map((absence) => {
    const member = membersContext.members.find((member) => member.userId === absence.userId)
    return {
      id: absence.id,
      name: member?.name ?? 'unknown',
      type: absence.type
    }
  })
  return <Table rows={content} columns={tableColumns} />
}
