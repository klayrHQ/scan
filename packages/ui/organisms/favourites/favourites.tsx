import React, {ReactNode} from 'react';
import {Favourite} from "../../molecules/favourite/favourite";

interface FavouritesProps {
  onClick: (address: string) => void
  xOnClick: (address: string) => void
  favourites?: Array<{username?: string, address: string, balance?: string, avatar?: ReactNode}>
  className?: string
  favClassName?: string
}

/**
 * Primary UI component for user interaction
 */
export const Favourites = ({
  className,
  favClassName,
  onClick,
  xOnClick,
  favourites,
}: FavouritesProps) => {
  return (
    <div className={`flex flex-col px-4 divider-vertical ${className ? className : ""}`}>
      {favourites &&
        <div className="text-onBackgroundHigh p-2 font-medium mt-1">
          <div className="flex flex-col py-2 gap-4">
            {favourites.map((fav) => {
              return (
                fav &&
                <Favourite
                  avatar={fav.avatar}
                  address={fav.address}
                  username={fav.username}
                  balance={fav.balance}
                  className={favClassName}
                  xOnClick={xOnClick}
                  onClick={onClick}
                />
              )
            })}
          </div>
        </div>
      }
    </div>
  );
};
