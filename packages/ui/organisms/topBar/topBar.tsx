import React, {ReactNode} from "react";
import {Logo} from "../../molecules/logo/logo";
import {LiskScanIcon} from "../../assets/icons";
import {Menu} from "../../molecules/menu/menu";

export interface TopBarProps {
  menuItems: Array<{ label: string, link: string }>
  subMenu?: Array<{
    title: string
    items: {
      label: string
      subLabel: string
      link: string
      icon: any
      disabled?: boolean
      badge?: string
    }
  }>
  logo: ReactNode
  className?: string
  menuItemsRight?: Array<ReactNode>
}

export const TopBar = ({
  className,
  menuItems,
  logo,
  subMenu,
  menuItemsRight,
}: TopBarProps) => (
  <>
    <nav
      className={[
        "bg-topbar text-onTopbar ",
        "z-40 relative w-full flex md:mb-4 items-center",
        className,
      ].join(" ")}
    >
      <div className="flex w-app max-w-app m-auto justify-between items-center h-16 px-4 w-full">
        <div className="flex gap-1">
          {logo}
          <Menu menuItems={menuItems}/>
        </div>
        <div className="hidden relative lg:flex flex-row items-center space-x-4 lg:ml-4">
          {menuItemsRight}
        </div>
      </div>
    </nav>
  </>
)