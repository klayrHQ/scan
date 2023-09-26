"use client"
import React, {useState} from "react";
import {StarIcon} from "@heroicons/react/24/solid";
import {Tooltip, Typography} from "ui";
import {FavouritesWindow} from "ui/organisms/favouritesWindow/favouritesWindow";
import {Popover} from "ui/atoms/popover/popover";
import {useSaveFavourites} from "../providers/favourites";
import {useRouter} from "next/navigation";

export const FavouritesModal = ({
  menuCloseFunction,
  mobile = false,
}: {
  menuCloseFunction?: () => void
  mobile?: boolean
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
      containerClassName={!mobile ? "hidden md:block" : "md:hidden"}
      containerWidth={mobile ? "full" : "auto"}
      className={!mobile ? "top-0 w-screen max-w-full lg:max-w-xl" : "max-w-full w-full shadow"}
      placement={"right"}
      disabled={!favourites || favourites.length <= 0}
      button={
        favourites && favourites.length > 0 ? (
          <div
            className={
              !mobile ?
              "group cursor-pointer w-full hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center text-onTopbar hover:text-primary"
              :
              "cursor-pointer w-full flex flex-row font-medium rounded pl-2 lg:pl-2 pr-2 py-1 lg:py-2 items-center text-onSurfaceHigh gap-[0.15rem]"
            }
          >
            <StarIcon className={"w-4 lg:w-5 h-4 lg:h-5 mr-1 text-inherit"} />
            <Typography tag={"span"} color={"inherit"}>Favourites</Typography>
          </div>
        ) : (
          <Tooltip
            label="No favorites set"
            placement={"bottom"}
          >
            <div
              className={
              !mobile ?
                "cursor-default hover:bg-menuButton flex flex-row font-medium rounded pl-3 lg:pl-2 pr-3 py-1 lg:py-2 items-center text-onTopbar hover:text-primary"
                :
                "cursor-default hover:bg-topbar cursor-pointer hover:bg-menuButton flex flex-row font-medium rounded pl-2 lg:pl-2 pr-2 py-1 lg:py-2 items-center text-onSurfaceHigh gap-[0.15rem]"
              }
            >
              <StarIcon className="w-4 lg:w-5 h-4 lg:h-5 mr-1 text-inherit" />
              <Typography tag={"span"}>Favourites</Typography>
            </div>
          </Tooltip>
        )
      }
      buttonOnClick={updateFavourites}
    >
      {/*<FavouritesWindow*/}
      {/*  favourites={favourites}*/}
      {/*  unFavourite={unFavourite}*/}
      {/*  onClick={goToAccount}*/}
      {/*/>*/}
    </Popover>
  )
}
