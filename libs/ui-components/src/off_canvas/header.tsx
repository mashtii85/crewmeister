/**
 * Off_Canvase - Header
 */

import { Close, Info } from '@crewmeister-code-challenge/assets'
import { Dispatch, SetStateAction } from 'react'

export const OffCanvasHeader = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const closeHandler = () => {
    setOpen(false)
  }
  return (
    <>
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <Info />
        Info
      </h5>
      <button
        type="button"
        onClick={closeHandler}
        data-drawer-dismiss="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <Close />
        <span className="sr-only">Close menu</span>
      </button>
    </>
  )
}
