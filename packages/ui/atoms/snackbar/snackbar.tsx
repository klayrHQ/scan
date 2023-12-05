"use client";
import React, {ReactElement, useState} from "react";
import { Dialog } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Typography } from "../typography/typography";

interface SnackbarProps {
  align?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  message: string | ReactElement;
  icon?: ReactElement;
  toggleState?: any;
}

export const Snackbar = ({ align = "top-right", message, toggleState, icon }: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={
        () => toggleState ? toggleState("") : setIsOpen(false)
      }
      className={[
        "fixed z-50 overflow-x-auto flex flex-tableRow justify-end max-w-max p-2 rounded",
        "right-0 left-0 md:left-auto mx-auto md:mx-0",
        align === "top-right" ? "top-4 md:right-4" : "",
        align === "top-left" ? "top-4 md:left-4" : "",
        align === "bottom-right" ? "bottom-4 md:right-4" : "",
        align === "bottom-left" ? "bottom-4 md:left-4" : "",
      ].join(" ")}
    >
      <Dialog.Overlay />
      <Dialog.Description>
        <div
          className="bg-background rounded shadow-xl
          max-w-sm p-4 m-2"
        >
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {
                icon ? icon :
                <InformationCircleIcon
                  className="h-5 w-5 text-onSurfacePrimaryHigh"
                  aria-hidden="true"
                />
              }
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <Typography
                tag={"p"}
                size={"subBody"}
                className="text-base text-onSurfaceHigh leading-5 break-all"
              >
                {message}
              </Typography>
            </div>
          </div>
        </div>
      </Dialog.Description>
    </Dialog>
  );
};
