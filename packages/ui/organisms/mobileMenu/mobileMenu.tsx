import React, { useState } from "react"
import { InfoBar } from "../infoBar/infoBar"
import { Link } from "../../atoms/link/link"
import { useRouter } from "next/router"
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from "@heroicons/react/24/solid"
import { Logo } from "../../molecules/logo/logo";
import {FavouritesWindow, FavouritesWindowProps} from "../favouritesWindow/favouritesWindow";
import {SearchContainer, SearchContainerProps} from "../searchContainer/searchContainer";

interface MobileMenuProps {
  settings: {
    openSettingsModal: (view: string ,arg: any) => void
  }
  searchContainerData: SearchContainerProps
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

  actions?: {
    title: string
    action: any
  }[],
  favouritesWindowData: FavouritesWindowProps
}

export const MobileMenu = ({
  menu,
  subMenu,
  settings,
  favouritesWindowData,
  searchContainerData,
}: MobileMenuProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <div className="lg:hidden absolute right-4 top-12 pt-0.5">
        {!open && (
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-5 w-5" />
          </button>
        )}
        {open && (
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <XIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-background w-full overflow-auto z-50 "
            id="mobile-menu"
          >
            <InfoBar />
            <div className="w-full bg-background lg:hidden flex flex-row justify-between mb-2 px-4 py-4 mx-auto">
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
            <div className="w-app mx-auto flex justify-end mb-3">
              <SearchContainer {...searchContainerData} />
            </div>
            <div className="w-app mx-auto flex justify-end mb-3">
              <FavouritesWindow {...favouritesWindowData} />
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface-1 mx-4 rounded">
              {menu &&
                menu?.map((mi) => (
                  <Link
                    href={mi.link}
                    key={`mm-${mi.label}`}
                    link={mi.link}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                    color={"onBackground"}
                    className={[
                      "bg-primaryVariant",
                      "text-onBackground block px-3 py-2 rounded-md",
                      "text-base font-medium text-onSurfaceHigh cursor-pointer",
                    ].join(" ")}
                  >
                    {mi.label}
                  </Link>
                ))}
            </div>
            <div className="pt-4 pb-3 ">
              <div className="px-2 space-y-1 pt-2 rounded mx-4 bg-surface-1 text-onSurfaceMedium">
                {subMenu &&
                  subMenu?.items?.map((mi) => (
                    <span
                      key={`msm-${mi.label}`}
                      onClick={() => {
                        if (setOpen) setOpen(false)
                        router.push(mi.link)
                      }}
                      className={
                        [mi.disabled ? "hidden" : "bg-surface-0 text-base  hover:bg-primaryVariant  block px-3 py-2 rounded-md text-base font-medium cursor-pointer"].join(" ")}
                    >
                        {mi.label}

                    </span>
                  ))}
                <span
                  key={`msm-settings`}
                  onClick={() =>
                    settings.openSettingsModal("themes", {
                      onClick: () => setOpen(false),
                    })
                  }
                  className="pb-4 bg-surface-0 text-base  hover:bg-primaryVariant block px-3 py-2 rounded-md text-base font-medium  cursor-pointer"
                >
                  Settings
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
