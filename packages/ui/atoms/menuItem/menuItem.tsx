import React from "react";
import {Link} from "../link/link";

export interface MenuItemProps  {
  link: string
  label: string
  color?: string
  className?: string
}

export const MenuItem = ({
  link,
  label,
  color,
  className,
  ...props
}: MenuItemProps) => {
  return (
    <Link
      className={[
        "hover:bg-menuButton",
        "hover:text-onMenuButton",
        "cursor-pointer",
        "px-3 py-2 mr-1",
        "rounded-md",
        "text-base",
        "font-medium pointer",
        className,
      ].join(" ")}
      activeClassName={[
        "bg-menuButton",
        "text-onMenuButton",
        "cursor-pointer",
        "px-3 py-2 mr-1",
        "rounded-md",
        "text-base no-underline",
        "font-medium pointer",
      ].join(" ")}
      link={link}
      href={link}
      color={"onTopbar" || color}
      {...props}
    >
      {label}
    </Link>
  )
}