/**
 *
 */

import { MembersService } from '@crewmeister-code-challenge/services'
import { IMember } from '@crewmeister-code-challenge/type'
import { createContext } from 'react'
import { useQuery } from 'react-query'

export const MemberContext = createContext<{ members: IMember[]; isLoading: boolean }>({ members: [], isLoading: true })

export const MemberProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const service = new MembersService()
  const { data, isLoading, error } = useQuery('employee-list', service.get)

  return <MemberContext.Provider value={{ members: data?.payload ?? [], isLoading }}>{children}</MemberContext.Provider>
}
