/**
 * Components - On_Leave - Index
 */

// Services
import { AbsencesService } from '@crewmeister-code-challenge/services'

//React-Query
import { useQuery } from 'react-query'

// UI
import { Table } from '@crewmeister-code-challenge/ui-components'
import { IAbsence } from '@crewmeister-code-challenge/types'
import { useContext } from 'react'
import { MemberContext, MemberProvider } from '../member/context/context'

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
  // const abc: { [key: string]: keyof IAbsence } =['']

  const newList =
    data?.payload?.map((absence) => {
      const member = membersContext.members.find((member) => member.userId === absence.userId)
      return {
        name: member.name,
        reason: absence.type
      }
    }) ?? []

  return <Table content={newList} />
}
