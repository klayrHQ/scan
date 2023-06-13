"use client"
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Typography } from "../typography/typography";

interface SnackbarProps {
  message: string;
  toggleState?: any;
}

export const Snackbar = ({ message, toggleState }: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={
        toggleState !== null ? () => toggleState("") : () => setIsOpen(false)
      }
      className={[
        "fixed z-50 overflow-x-auto top-4 flex flex-tableRow justify-end max-w-max p-2 rounded",
        "right-0 md:right-4 left-0 md:left-auto mx-auto md:mx-0",
      ].join(" ")}
    >
      <Dialog.Overlay />
      <Dialog.Description>
        <div
          className="bg-surface-1 shadow
         rounded max-w-sm p-4 m-2"
        >
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <InformationCircleIcon
                className="h-5 w-5 text-onSurfacePrimaryMedium"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <Typography tag={"p"} className="text-base text-onSurfaceHigh leading-5 break-all">
                {message}
              </Typography>
            </div>
          </div>
        </div>
      </Dialog.Description>
    </Dialog>
  );
};
