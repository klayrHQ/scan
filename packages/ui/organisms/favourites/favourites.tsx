import React from 'react';
import {Favourite} from "../../molecules/favourite/favourite";

interface FavouritesProps {
  onClick?: () => void
  xOnClick?: void
  favourites?: Array<{username?: string, address: string}>
  className?: string
  color?: string
}

/**
 * Primary UI component for user interaction
 */
export const Favourites = ({
  className,
  color,
  onClick,
  xOnClick,
  favourites,
  ...props
}: FavouritesProps) => {
  return (
    <div className="flex flex-col px-4 divider-vertical ">
      {favourites &&
          <div className="text-onBackgroundHigh p-2 font-medium mt-1">
              <div className="flex flex-col py-2 gap-4">
                {favourites.map((fav, index) => {
                  return (
                    fav &&
                    <Favourite address={fav.address} username={fav.username} />
                  )
                })}
              </div>
          </div>
      }
    </div>
  );
};
