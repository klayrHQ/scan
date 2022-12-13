import React from 'react';
import {XCircleIcon} from "@heroicons/react/24/outline";

interface FavouriteProps {
  onClick?: () => void
  xOnClick?: void
  username?: string
  address: string
  balance?: string
  className?: string
  color?: string
}

/**
 * Primary UI component for user interaction
 */
export const Favourite = ({
  className,
  color,
  onClick,
  xOnClick,
  username,
  address,
  balance,
  ...props
}: FavouriteProps) => {
  return (
    <div
      className={`relative cursor-pointer text-onSurfaceHigh w-full items-center flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-4 rounded transition ${className}`}
      onClick={onClick}
    >

      {/*<Avatar className="mx-3" address={favourite.address} size={25} />*/}
      <div className="flex flex-col grow-[2]">
        {username && <span className="font-semibold capitalize">{username}</span>}
        <span className="">{address}</span>
        <span className="mr-10 md:hidden">{/*<Currency classes={{
          sign: "text-onBackground font-medium",
          symbol: "text-onBackground font-medium",
          separator: "text-onBackground font-medium",
          number: "text-onBackground font-medium",
          decimals: "text-onBackground font-medium",
        }} beddows={balance} />*/}</span>
      </div>
      <span className="mr-10 hidden md:inline">{/*<Currency classes={{
        sign: "text-onBackground font-medium",
        symbol: "text-onBackground font-medium",
        separator: "text-onBackground font-medium",
        number: "text-onBackground font-medium",
        decimals: "text-onBackground font-medium",
      }} beddows={balance} />*/}</span>
      <button
        className="absolute bg-transparent border-transparent cursor-pointer right-0 h-10 w-10 mr-1 ml-3 text-onSurfaceLow hover:text-onSurfaceHigh"
        onClick={(e) => {
          e.stopPropagation()
          xOnClick
        }}
      >
        <XCircleIcon className="w-5 h-5 m-auto hover:opacity-50 flex-end"/>
      </button>
    </div>
  );
};
