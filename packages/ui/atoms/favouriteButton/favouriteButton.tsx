import React from "react";
import {StarIcon} from "@heroicons/react/24/outline";
import {StarIcon as StarIconSolid} from "@heroicons/react/24/solid";

interface FavouriteButtonProps {
  favourited: boolean
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
  iconColor?: string
}

export const FavouriteButton = ({
  favourited,
  saveFavourite,
  unFavourite,
  iconColor,
}: FavouriteButtonProps) => {
  return (
    <span>
      {favourited ?
          <StarIconSolid
            className={["w-5 h-5 cursor-pointer", "text-" + iconColor].join(" ")}
            onClick={() => {
              unFavourite
            }}
          />
          :
          <StarIcon
            className={["w-5 h-5 cursor-pointer", "text-" + iconColor].join(" ")}
            onClick={() => {
              saveFavourite
            }}
          />
        }
    </span>
  )
}