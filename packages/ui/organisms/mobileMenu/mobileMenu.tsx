import React, {ReactNode,} from "react"
// import { Logo } from "../../molecules/logo/logo";
import {Grid} from "../..";
// import {LiskScanIcon} from "../../assets/icons";

interface MobileMenuProps {
  menuItems: Array<ReactNode>
  subMenu?: Array<ReactNode>
  menuItemsTop?: Array<ReactNode>
  menuTitle?: string
  infoBar?: ReactNode
}

export const MobileMenu = ({
  menuItems,
  subMenu,
  menuItemsTop,
  menuTitle,
  infoBar,
}: MobileMenuProps) => {
  return (
    <div
      className={"lg:hidden bg-background w-full"}
      id="mobile-menu"
    >
      {infoBar}
      <div className={"lg:hidden w-full bg-background flex flex-tableRow justify-between mb-2 px-4 py-4 mx-auto"}>
        <span className="text-onSurfaceHigh font-medium">
          {menuTitle || "Liskscan Menu"}
        </span>
        <div className={"h-5 w-5"} />
      </div>
      {menuItemsTop}
      <Grid
        className="px-4 pt-4 pb-5 bg-surface-1 mx-4 rounded flex-col gap-4 box-border"
        flex
      >
        {menuItems}
      </Grid>
      <Grid
        className="mt-4 px-4 pt-4 pb-5 bg-surface-1 mx-4 rounded flex-col text-onSurfaceMedium gap-4 box-border"
        flex
      >
        {subMenu}
      </Grid>
    </div>
  )
}
