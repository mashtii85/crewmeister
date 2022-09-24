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
    ' hs-overlay hs-overlay-open:translate-x-0  fixed right-0 top-0 z-40 h-screen  p-4 overflow-y-auto w-1/3  w-50 transition-all duration-300 bg-slate-100 '

  cssClass += open ? '' : '-translate-x-100 -scale-x-0'

  return (
    <div data-cy="off-canvas" className={cssClass} aria-labelledby="drawer-label">
      <OffCanvasHeader setOpen={setOpen} />
      {children}
    </div>
  )
}
