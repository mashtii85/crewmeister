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
  let cssClass = 'fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800'

  cssClass += open ? '' : ' -translate-x-full'

  return (
    <div id="drawer-example" className={cssClass} aria-labelledby="drawer-label">
      <OffCanvasHeader setOpen={setOpen} />
      {children}
    </div>
  )
}