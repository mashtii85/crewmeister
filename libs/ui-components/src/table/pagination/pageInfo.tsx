/**
 * Table - Pagination - PageInfo
 */

import { StyledPageInfoSpan } from 'libs/styles/src/misc/table'

export const PageInfo = ({ fromPage, toPage, total }: { fromPage: number; toPage: number; total: number }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">
        Showing
        <StyledPageInfoSpan>{` ${fromPage} `}</StyledPageInfoSpan>
        to
        <StyledPageInfoSpan>{` ${toPage} `}</StyledPageInfoSpan>
        of
        <StyledPageInfoSpan className="font-medium">{` ${total} `}</StyledPageInfoSpan>
        results
      </p>
    </div>
  )
}
