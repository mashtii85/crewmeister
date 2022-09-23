/**
 *
 */

import { IAbsenceViewModel } from '@crewmeister-code-challenge/types'
import { DateDiffInDays } from '@crewmeister-code-challenge/utility'
import { useContext } from 'react'
import tw from 'tailwind-styled-components'
import { MemberContext } from '../../members/index'

export const AbsenceDetails = ({ absence }: { absence: Partial<IAbsenceViewModel> }) => {
  const { members } = useContext(MemberContext)

  const member = members.find((item) => item.userId === absence.userId)
  const days =
    absence.startDate && absence.endDate ? DateDiffInDays(absence.startDate!, absence.endDate!, { showDay: true }) : 0
  // const status = calculateStatus({ confirmed: absence.rejectedAt, rejected: absence.confirmedAt })
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={`${absence.image}?lock=1`} alt="" className=" w-20 h-20 rounded-full" />
      </StyledImageContainer>
      <StyledHeaderContainer>
        <StyledH3>
          <StyledP>{member?.name}'s Absence Details</StyledP>
        </StyledH3>
      </StyledHeaderContainer>

      <StyledContent>
        <dl>
          <StyledGrayDescription>
            <StyledDt>Absence Type</StyledDt>
            <StyledDd>{absence.type}</StyledDd>
          </StyledGrayDescription>

          <StyledWhiteDescription>
            <StyledDt>Period</StyledDt>
            <StyledDd>
              {absence.startDate} - {absence.endDate}
            </StyledDd>
          </StyledWhiteDescription>
          <StyledGrayDescription>
            <StyledDt>Total Days</StyledDt>
            <StyledDd>{days}</StyledDd>
          </StyledGrayDescription>
          <StyledGrayDescription>
            <StyledDt>Status</StyledDt>
            <StyledDd>{absence.status}</StyledDd>
          </StyledGrayDescription>
          {absence.memberNote && (
            <StyledWhiteDescription>
              <StyledDt>Member Note</StyledDt>
              <StyledDd>{absence.memberNote}</StyledDd>
            </StyledWhiteDescription>
          )}
          {absence.admitterNote && (
            <StyledWhiteDescription>
              <StyledDt>Member Note</StyledDt>
              <StyledDd>{absence.admitterNote}</StyledDd>
            </StyledWhiteDescription>
          )}
        </dl>
      </StyledContent>
    </StyledContainer>
  )
}

const StyledContainer = tw.div<any>`
overflow-hidden bg-white shadow sm:rounded-lg
`
const StyledImageContainer = tw.div<any>`
flex  p-5 content-center items-center`

const StyledHeaderContainer = tw.div<any>`
px-4 py-5 sm:px-6
`

export const StyledImage = tw.img<any>`
w-20 h-20 rounded-full
`
export const StyledH3 = tw.div<any>`
text-lg font-medium leading-6 text-gray-900
`

export const StyledContent = tw.div<any>`
border-t border-gray-200
`
export const StyledGrayDescription = tw.div<any>`
bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
`

export const StyledDt = tw.dt<any>`
text-sm font-medium text-gray-500
`
export const StyledDd = tw.dd<any>`
mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0
`

export const StyledP = tw.p<any>`
mt-1 max-w-2xl text-sm text-gray-500
`
export const StyledWhiteDescription = tw.div<any>`
bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
`
