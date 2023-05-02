import React, {ReactNode, useState} from "react"
import { InfoBar } from "../infoBar/infoBar"
import { Link } from "../../atoms/link/link"
import { useRouter } from "next/router"
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from "@heroicons/react/24/solid"
import { Logo } from "../../molecules/logo/logo";
import {FavouritesWindow, FavouritesWindowProps} from "../favouritesWindow/favouritesWindow";
import {SearchContainer, SearchContainerProps} from "../searchContainer/searchContainer";
import {Button} from "../../atoms";
import {Grid} from "../../atoms/grid/grid";
import {LiskScanIcon} from "../../assets/icons";

interface MobileMenuProps {
  menuItems: Array<ReactNode>
  subMenu?: Array<ReactNode>
  menuItemsTop?: Array<ReactNode>
}

export const MobileMenu = ({
  menuItems,
  subMenu,
  menuItemsTop,
}: MobileMenuProps) => {
  return (
    <div
      className={"lg:hidden fixed inset-0 top-10 bg-background w-full overflow-auto z-50 "}
      id="mobile-menu"
    >
      <div className={"lg:hidden w-full bg-background flex flex-tableRow justify-between mb-2 px-4 py-4 mx-auto"}>
        <Logo
          link={"#"}
          href={"#"}
          color={"primary"}
          image={<LiskScanIcon className="cursor-pointer mr-2 fill-current text-primary"/>}
        />
        <span className="text-onSurfaceHigh font-medium">
          Liskscan Menu
        </span>
        <div className={"h-5 w-5"} />
      </div>
      {menuItemsTop}
      <Grid
        className="px-4 pt-4 pb-5 bg-surface-1 mx-4 rounded flex-col gap-4"
        flex
      >
        {menuItems}
      </Grid>
      <Grid
        className="mt-4 px-4 pt-4 pb-5 bg-surface-1 mx-4 rounded flex-col text-onSurfaceMedium gap-4"
        flex
      >
        {subMenu}
      </Grid>
    </div>
  )
}
