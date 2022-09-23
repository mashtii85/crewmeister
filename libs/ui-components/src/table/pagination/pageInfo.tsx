/**
 * Table - Pagination - PageInfo
 */

export const PageInfo = ({ fromPage, toPage, total }: { fromPage: number; toPage: number; total: number }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">
        Showing
        <span className="font-medium">{` ${fromPage} `}</span>
        to
        <span className="font-medium">{` ${toPage} `}</span>
        of
        <span className="font-medium">{` ${total} `}</span>
        results
      </p>
    </div>
  )
}
