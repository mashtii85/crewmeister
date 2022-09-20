/**
 * Pagination - Item
 */

export const PaginationItem = ({
  page,
  currentPage,
  onPageChange
}: {
  page: number
  currentPage: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}) => {
  let cssClass = `relative z-10 inline-flex items-center border  bg-white  px-4 py-2 text-sm font-medium text-black focus:z-20 `

  cssClass += page === currentPage && 'border-indigo-500'
  return (
    <button onClick={() => onPageChange(page)} aria-current="page" className={cssClass} style={{}}>
      {page}
    </button>
  )
}
