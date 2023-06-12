import React, {FC, ReactNode} from "react";
import {cls} from "../../utils";

interface FloatingMenuProps {
  className?: string
  buttons: Array<ReactNode>
}

export const FloatingMenu: FC<FloatingMenuProps> = ({
  className,
  buttons,
}) => {
  return (
    <div className={cls([
      "fixed sm:hidden bottom-0 bg-gradient-to-b from-transparent to-background w-full z-40",
      className,
    ])}>
      <div className="bg-topbar rounded mx-auto mb-4  w-app grid grid-cols-4 items-center mb-4 shadow">
        {buttons}
      </div>
    </div>
  )
}
