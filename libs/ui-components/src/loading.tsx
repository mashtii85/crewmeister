/**
 * Loading
 */

import { LoadingIndicator } from '@crewmeister-code-challenge/assets'
import { StyledContent, StyledLoadingContnet, StyledH3 } from 'libs/styles/src/misc/loading'

export const Loading = () => {
  return (
    <StyledContent role="status">
      <StyledLoadingContnet>
        <LoadingIndicator />
        <StyledH3>Loading...</StyledH3>
      </StyledLoadingContnet>
    </StyledContent>
  )
}
