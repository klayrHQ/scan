"use client"
import React, {useState} from "react";
import {StarIcon} from "@heroicons/react/24/solid";
import {Tooltip, Typography} from "ui";
import {FavouritesWindow} from "ui/organisms/favouritesWindow/favouritesWindow";
import {Popover} from "ui/atoms/popover/popover";
import {useSaveFavourites} from "../providers/favourites";
import {useRouter} from "next/navigation";

export const FavouritesModalClient = ({
  menuCloseFunction,
}: {
  menuCloseFunction?: () => void
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(false)
  const { favourites, unFavourite, updateFavourites } = useSaveFavourites()

  const goToAccount = (address: string) => {
    setOpen(false)
    router.push(`/account/${address}`)
    menuCloseFunction && menuCloseFunction()
  }

  return (
    <Popover
      open={open}
      setOpen={setOpen}
      containerClassName={"hidden md:block"}
      className={"top-0 w-screen max-w-full lg:max-w-xl"}
      placement={"right"}
      disabled={!favourites || favourites.length <= 0}
      button={
        favourites && favourites.length > 0 ? (
          <div
            className={`cursor-pointer w-full hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
          >
            <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
            <Typography tag={"span"} color={"onTopbar"}>Favourites</Typography>
          </div>
        ) : (
          <Tooltip
            label="No favorites set"
            placement={"bottom"}
          >
            <div
              className={`cursor-default hover:bg-topbar hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center`}
            >
              <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-onSurfaceHigh lg:text-onTopbar" />
              <Typography tag={"span"} color={"onTopbar"}>Favourites</Typography>
            </div>
          </Tooltip>
        )
      }
      buttonOnClick={updateFavourites}
    >
      <FavouritesWindow
        favourites={favourites}
        unFavourite={unFavourite}
        onClick={goToAccount}
      />
    </Popover>
  )
}
