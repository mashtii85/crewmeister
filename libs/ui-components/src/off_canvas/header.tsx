/**
 * Off_Canvase - Header
 */

import { Close, Info } from '@crewmeister-code-challenge/assets'
import { Dispatch, SetStateAction } from 'react'
import { StyledH5, StyledButton } from 'libs/styles/src/misc/off_canvas'

export const OffCanvasHeader = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const closeHandler = () => {
    setOpen(false)
  }
  return (
    <>
      <StyledH5 id="drawer-label" className="">
        <Info />
        Info
      </StyledH5>
      <StyledButton
        type="button"
        onClick={closeHandler}
        data-drawer-dismiss="drawer-example"
        aria-controls="drawer-example"
        className=""
      >
        <Close />
        <span className="sr-only">Close menu</span>
      </StyledButton>
    </>
  )
}
