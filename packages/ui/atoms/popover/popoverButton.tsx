import React from "react";
import { Popover as HuiPopover} from "@headlessui/react";
import {cls} from "../../utils";

export const PopoverButton = ({children, className}: {children: any, className?: string}) => {
  return (
    <HuiPopover.Button className={cls([
      "bg-transparent border-none cursor-pointer",
      className,
    ])}>
      {children}
    </HuiPopover.Button>
  )
}