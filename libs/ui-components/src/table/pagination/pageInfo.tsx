/**
 * Table - Pagination - PageInfo
 */

import { StyledPageInfoSpan } from 'libs/styles/src/misc/table'

export const PageInfo = ({ fromPage, toPage, total }: { fromPage: number; toPage: number; total: number }) => {
  return (
    <div>
      <p data-cy="pagination-info" className="text-sm text-gray-500">
        Showing
        <StyledPageInfoSpan data-cy="from">{` ${fromPage} `}</StyledPageInfoSpan>
        to
        <StyledPageInfoSpan data-cy="to">{` ${toPage} `}</StyledPageInfoSpan>
        of
        <StyledPageInfoSpan className="font-medium">{` ${total} `}</StyledPageInfoSpan>
        results
      </p>
    </div>
  )
}
