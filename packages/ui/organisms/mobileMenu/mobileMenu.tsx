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

interface MobileMenuProps {
  status: "connected" | "warning" | "error"
  menuItems: Array<ReactNode>
  subMenu?: Array<ReactNode>
  menuItemsTop?: Array<ReactNode>
}

export const MobileMenu = ({
  menuItems,
  subMenu,
  menuItemsTop,
  status
}: MobileMenuProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <div className={"lg:hidden absolute right-4 top-[0.8rem] pt-0.5"}>
        {!open && (
          <Button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center px-2 rounded-md text-gray-400 bg-transparent border-none hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            label={
              <>
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-5 w-5"/>
              </>
            }
          />
        )}
        {open && (
          <Button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center px-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            label={
             <>
               <span className="sr-only">Open main menu</span>
               <XIcon className="h-5 w-5" />
             </>
            }
          />
        )}
      </div>
      {open && (
        <>
          <div
            className={"lg:hidden fixed inset-0 top-10 bg-background w-full overflow-auto z-50 "}
            id="mobile-menu"
          >
            <div className={"lg:hidden w-full bg-background flex flex-tableRow justify-between mb-2 px-4 py-4 mx-auto"}>
              <Logo
                link={"#"}
                href={"#"}
                className={"text-onBackgroundHigh w-5 h-5 fill-current"}
              />
              <span className="text-onSurfaceHigh font-medium">
                Liskscan Menu
              </span>
              <div onClick={() => setOpen(false)}>
                <XIcon className="w-5 h-5 text-onSurfaceHigh" />
              </div>
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
        </>
      )}
    </div>
  )
}
