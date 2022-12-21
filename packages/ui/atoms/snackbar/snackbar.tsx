import React, { FC, useState } from "react"
import { Dialog } from "@headlessui/react"
import { InformationCircleIcon } from "@heroicons/react/24/solid"

interface SnackbarProps {
  message: string
  toggleState?: any
}

export const Snackbar = ({
  message,
  toggleState,
}: SnackbarProps) => {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog
      open={isOpen}
      onClose={
        toggleState !== null ? () => toggleState("") : () => setIsOpen(false)
      }
      className={[
        "fixed z-50 overflow-y-auto lg:w-2/12 top-4 right-4 flex flex-row justify-end w-max",
      ].join(" ")}
    >
      <Dialog.Overlay />
      <Dialog.Description>
        <div className="rounded-md bg-surface-4 max-w-app p-4 m-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-onSurfacePrimaryMedium"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-base text-onSurfaceHigh">{message}</p>
            </div>
          </div>
        </div>
      </Dialog.Description>
    </Dialog>
  )
}
