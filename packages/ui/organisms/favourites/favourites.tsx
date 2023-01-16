import React from 'react';
import {Favourite} from "../../molecules/favourite/favourite";

interface FavouritesProps {
  routingFunction: (routingAddress: string) => void
  menuCloseFunction: () => void
  popupCloseFunction: () => void
  xOnClick: void
  favourites: Array<{username?: string, address: string}>
  className?: string
  favClassName?: string
  color?: string
  parsedSettings: any
}

/**
 * Primary UI component for user interaction
 */
export const Favourites = ({
  className,
  favClassName,
  routingFunction,
  menuCloseFunction,
  popupCloseFunction,
  xOnClick,
  favourites,
  parsedSettings,
}: FavouritesProps) => {
  return (
    <div className={`flex flex-col px-4 divider-vertical ${className ? className : ""}`}>
      {favourites &&
          <div className="text-onBackgroundHigh p-2 font-medium mt-1">
              <div className="flex flex-col py-2 gap-4">
                {favourites.map((fav, index) => {
                  return (
                    fav &&
                    <Favourite
                        address={fav.address}
                        username={fav.username}
                        className={favClassName}
                        parsedSettings={parsedSettings}
                        xOnClick={xOnClick}
                        routingFunction={routingFunction}
                        menuCloseFunction={menuCloseFunction}
                        popupCloseFunction={popupCloseFunction}
                    />
                  )
                })}
              </div>
          </div>
      }
    </div>
  );
};
