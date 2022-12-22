import React from "react";
import {MenuItem} from "../../atoms/menuItem/menuItem";

export interface MenuProps{
  menu: {
    label: string
    link: string
  }[]
  subMenu?: {
    title: string
    items: {
      label: string
      subLabel: string
      link: string
      icon: any
      disabled?: boolean
      badge?: string
    }[]
  }
  className?: string
  actions?: {
    title: string
    action: any
  }[]
}

export const Menu = ({
 menu,
 subMenu,
 className,
 ...props
}: MenuProps) => (
  <div className="hidden lg:block lg:ml-6">
    <div className="flex space-x-4">
      <div className="flex flex-row justify-end hidden md:inline-flex" {...props}>
        {menu && menu.map((mi) => <MenuItem key={mi.label} className={className} {...mi} />)}
        {/*{subMenu && <SubMenu {...subMenu} />}*/}
      </div>
    </div>
  </div>
)