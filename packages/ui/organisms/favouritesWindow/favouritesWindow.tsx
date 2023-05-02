import React, {Fragment, ReactNode, useEffect} from "react"
import { Popover, Transition } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/24/solid"
import { Tooltip } from "../../atoms/tooltip/tooltip";
import { useRouter } from "next/router"
import {Favourites} from "../favourites/favourites";

export interface FavouritesWindowProps {
  onClick: () => void
  favourites: Array<{username?: string | ReactNode, address: string | ReactNode, avatar?: ReactNode}>
  unFavourite: () => void
}

export const FavouritesWindow = ({
  onClick,
  favourites,
  unFavourite,
}: FavouritesWindowProps) => {

  return (
    <div className="rounded shadow-1 overflow-hidden flex flex-col divider divide-y-2 bg-background w-full">
      <div className="px-6 mt-2 py-4 flex">
        <span className="text-onSurfaceHigh font-semibold text-lg">
          Favourites
        </span>
      </div>
      <Favourites
        favourites={favourites}
        onClick={onClick}
        xOnClick={unFavourite}
      />
    </div>
  )
}
