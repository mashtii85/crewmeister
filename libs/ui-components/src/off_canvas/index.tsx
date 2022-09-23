/**
 * OffCanvas
 */

import { Dispatch, SetStateAction } from 'react'
import { OffCanvasHeader } from './header'

export const OffCanvas = ({
  open,
  setOpen,
  children
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: JSX.Element | JSX.Element[]
}) => {
  let cssClass =
    'hs-overlay hs-overlay-open:translate-x-0  fixed z-40 h-full w-1/3 p-4 overflow-y-auto bg-white w-50 transition-all duration-300 dark:bg-gray-800 '

  // cssClass='offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96'
  cssClass += open ? '' : ' -translate-x-full'

  return (
    <div id="drawer-example" className={cssClass} aria-labelledby="drawer-label">
      <OffCanvasHeader setOpen={setOpen} />
      {children}
    </div>
  )
}
