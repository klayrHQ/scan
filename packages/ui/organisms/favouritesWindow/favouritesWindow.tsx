import React, { Fragment, useEffect } from "react"
import { Popover, Transition } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/24/solid"
import { Tooltip } from "../../atoms/tooltip/tooltip";
import { useRouter } from "next/router"
import {Favourites} from "../favourites/favourites";

export interface FavouritesWindowProps {
  menuCloseFunction: any
  favourites: Array<{username?: string, address: string}>
  unFavourite: void
  updateFavourites: void
  hasFavourites: boolean
  compactString: Function
  parsedSettings: any
}

export const FavouritesWindow = ({
  menuCloseFunction,
  favourites,
  unFavourite,
  parsedSettings,
  updateFavourites,
  hasFavourites,
}: FavouritesWindowProps) => {
  const router = useRouter()

  const route = (address: string) => {
    router.push(`/account/${address}`)
  }

  useEffect(() => updateFavourites, [])

  return (
    <Popover className="relative w-full lg:w-auto">
      {({ open, close }) => (
        <>
          <Popover.Button
            disabled={!hasFavourites}
            className="group text-onSurfaceHigh lg:text-onTopbar rounded inline-flex items-center text-base font-medium focus:outline-none w-full overflow-visible bg-transparent border-none"
            onClick={() => updateFavourites}
          >
            {hasFavourites ? (
              <div
                className={`cursor-pointer hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
              >
                <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
                <span className="">Favourites</span>
              </div>
            ) : (
              <Tooltip
                label="No favorites set"
                placement={"bottom"}
              >
                <div
                  className={`cursor-default hover:bg-topbar cursor-pointer hover:bg-menuButton flex flex-row font-medium text-lg rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
                >
                  <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
                  <span className="">Favourites</span>
                </div>
              </Tooltip>
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute z-10 left-0 lg:left-auto right-0 transform -mt-10 w-screen max-w-full lg:max-w-xl sm:px-0">
              <div className="rounded shadow-1 overflow-hidden flex flex-col divider divide-y-2 bg-background">
                <div className="px-6 mt-2 py-4 flex">
                  {/*<StarIcon className="w-5 h-5 mr-2 text-onPrimaryHigh mt-1" />*/}
                  <span className="text-onSurfaceHigh font-semibold text-lg">
                    Favourites
                  </span>
                </div>
                <Favourites
                  favourites={favourites}
                  parsedSettings={parsedSettings}
                  routingFunction={route}
                  menuCloseFunction={() => typeof menuCloseFunction === "function" &&
                    menuCloseFunction()}
                  popupCloseFunction={close}
                  xOnClick={unFavourite}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
