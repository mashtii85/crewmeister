/**
 * Table - Pagination - ForwardNavigation
 */

export const ForwardNavigation = ({
  isLastPage,
  currentPage,
  onPageChange
}: {
  currentPage: number
  isLastPage: boolean
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}) => {
  if (isLastPage) {
    return (
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    )
  }

  return null
}
