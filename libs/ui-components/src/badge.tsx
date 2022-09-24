/**
 * Badge
 */

import { StyledSpan } from 'libs/styles/src/misc/badge'

export const Badge = ({
  children,
  color
}: {
  children: JSX.Element | JSX.Element[] | string
  color: 'yellow' | 'red' | 'green'
}) => {
  let bgColor = ''
  switch (color) {
    case 'green':
      {
        bgColor = 'bg-green-100'
      }
      break

    case 'yellow':
      {
        bgColor = 'bg-yellow-100'
      }
      break
    case 'red': {
      bgColor = 'bg-red-200'
    }
  }
  return <StyledSpan color={bgColor}>{children}</StyledSpan>
}
