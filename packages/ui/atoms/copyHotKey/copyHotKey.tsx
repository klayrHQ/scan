import React, { useState } from "react"
import { Dialog } from "@headlessui/react"
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { useHotkeys } from "react-hotkeys-hook"
import {Typography} from "../typography/typography";

interface CopyHotKeyProps {
  message: string
  hotkey: string
  action(): void
  deps?: any[]
  isBrowser?: any
}

export const CopyHotKey = ({
  message,
  hotkey,
  action,
  deps,
  isBrowser,
}: CopyHotKeyProps) => {
  const storedTheme = (isBrowser && window.localStorage.getItem("theme")) || "dark"
  const [copied, setCopied] = useState<boolean>(false)
  useHotkeys(
    hotkey,
    () => {
      action()
      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    },
    deps,
  )

  return (
    <Dialog
      open={copied}
      onClose={() => setCopied(false)}
      className={[
        `liskScan-${storedTheme}`,
        "fixed z-50 overflow-y-hidden   max-w-max w-auto md:w-2/12 top-4 right-4 md:bottom-4",
      ].join(" ")}
    >
      {/*<Dialog.Overlay />*/}
      <Dialog.Description>
        <div className="rounded-md bg-surface-4 max-w-app p-3 m-2 ">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <InformationCircleIcon
                className="h-5 w-5 text-onSurfacePrimaryMedium "
                aria-hidden="true"
              />
            </div>
            <div className="ml-2  md:flex md:justify-between">
              <Typography tag={"p"} className="text-base font-medium text-onSurfaceHigh">{message}</Typography>
            </div>
          </div>
        </div>
      </Dialog.Description>
    </Dialog>
  )
}
