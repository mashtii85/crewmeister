/**
 *
 */

import { IAbsenceViewModel } from '@crewmeister-code-challenge/types'
import { DateDiffInDays } from '@crewmeister-code-challenge/utilities'
import { useContext } from 'react'
import { MemberContext } from '../../members'
//Styles
import {
  StyledContainer,
  StyledContent,
  StyledDd,
  StyledDt,
  StyledGrayDescription,
  StyledH3,
  StyledHeaderContainer,
  StyledImage,
  StyledImageContainer,
  StyledP,
  StyledWhiteDescription
} from 'libs/styles/src/absence'

export const AbsenceDetails = ({ absence }: { absence: Partial<IAbsenceViewModel> }) => {
  const { members } = useContext(MemberContext)

  const member = members.find((item) => item.userId === absence.userId)
  const days =
    absence.startDate && absence.endDate ? DateDiffInDays(absence.startDate!, absence.endDate!, { showDay: true }) : 0
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
          <StyledWhiteDescription>
            <StyledDt>Status</StyledDt>
            <StyledDd>{absence.status}</StyledDd>
          </StyledWhiteDescription>
          {absence.memberNote && (
            <StyledGrayDescription>
              <StyledDt>Member Note</StyledDt>
              <StyledDd>{absence.memberNote}</StyledDd>
            </StyledGrayDescription>
          )}
          {absence.admitterNote && absence.memberNote ? (
            <StyledWhiteDescription>
              <StyledDt>Member Note</StyledDt>
              <StyledDd>{absence.admitterNote}</StyledDd>
            </StyledWhiteDescription>
          ) : (
            <StyledGrayDescription>
              <StyledDt>Member Note</StyledDt>
              <StyledDd>{absence.admitterNote}</StyledDd>
            </StyledGrayDescription>
          )}
        </dl>
      </StyledContent>
    </StyledContainer>
  )
}
