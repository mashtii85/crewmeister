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
  return <StyledSpan color={color}>{children}</StyledSpan>
}
