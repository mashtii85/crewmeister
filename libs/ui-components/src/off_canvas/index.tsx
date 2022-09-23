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
    'hs-overlay hs-overlay-open:translate-x-0  fixed z-40 h-full w-1/3 p-4 overflow-y-auto bg-white w-50 transition-all duration-300 bg-slate-100'

  cssClass += open ? '' : ' -translate-x-full'

  return (
    <div id="drawer-example" className={cssClass} aria-labelledby="drawer-label">
      <OffCanvasHeader setOpen={setOpen} />
      {children}
    </div>
  )
}
