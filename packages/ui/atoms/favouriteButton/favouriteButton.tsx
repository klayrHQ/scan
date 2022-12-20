import React from "react";
import {StarIcon} from "@heroicons/react/24/outline";
import {StarIcon as StarIconSolid} from "@heroicons/react/24/solid";

interface FavouriteButtonProps {
  address: string
  favourites: {address: string, balance: string, username?: string}[] | null
  saveFavourite: (address: string, balance: string, username?: string) => void
  unFavourite: (address: string) => void
}

export const FavouriteButton = ({
  favourites,
  saveFavourite,
  unFavourite,
  address,
}: FavouriteButtonProps) => {
  return (
    <span>
      {favourites?.findIndex(i => i.address === address) !== -1 ?
          <StarIconSolid
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              unFavourite
            }}
          />
          :
          <StarIcon
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              saveFavourite
            }}
          />
        }
    </span>
  )
}