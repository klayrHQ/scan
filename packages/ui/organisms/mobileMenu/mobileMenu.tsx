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
  closeButton?: ReactNode
}

export const MobileMenu = ({
  menuItems,
  subMenu,
  menuItemsTop,
  menuTitle,
  infoBar,
  closeButton,
}: MobileMenuProps) => {
  return (
    <div
      className={"lg:hidden bg-background w-full h-max min-h-full px-2"}
      id="mobile-menu"
    >
      {infoBar}
      <div className={"lg:hidden w-app bg-background flex flex-tableRow justify-between mb-2 py-4 mx-auto"}>
        <span className="text-onSurfaceHigh font-medium">
          {menuTitle || "Menu"}
        </span>
        {closeButton}
      </div>
      {menuItemsTop}
      <Grid
        className="w-app px-4 pt-4 pb-5 bg-surface-1 mx-auto rounded flex-col gap-4 box-border"
        flex
      >
        {menuItems}
      </Grid>
      <Grid
        className="w-app mt-4 px-4 pt-4 pb-5 bg-surface-1 mx-auto rounded flex-col text-onSurfaceMedium gap-4 box-border"
        flex
      >
        {subMenu}
      </Grid>
    </div>
  )
}
