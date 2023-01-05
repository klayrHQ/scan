import React from 'react';
import {XCircleIcon} from "@heroicons/react/24/outline";
import {Currency} from "../../atoms/currency/currency";
import {Avatar} from "../../atoms/avatar/avatar";
import {Typography} from "../../atoms/typography/typography";

interface FavouriteProps {
  onClick?: () => void
  xOnClick?: void
  username?: string
  address: string
  balance?: { number: string, decimals?: string }
  className?: string
  parsedSettings: any
}

/**
 * Primary UI component for user interaction
 */
export const Favourite = ({
  className,
  onClick,
  xOnClick,
  username,
  address,
  balance,
  parsedSettings,
  ...props
}: FavouriteProps) => {
  return (
    <div
      className={`relative cursor-pointer text-onSurfaceHigh w-full items-center flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-4 rounded transition ${className}`}
      onClick={onClick}
    >
      <Avatar className="mx-3" address={address} size={25} />
      <Typography tag={"span"} className="flex flex-col grow-[2]">
        {username && <span className="font-semibold capitalize">{username}</span>}
        <span className="">{address}</span>
        {balance &&
          <span className="mr-10 inline md:hidden">
            <Currency
              parsedSettings={parsedSettings}
              classes={{
                sign: "text-onBackground font-medium",
                symbol: "text-onBackground font-medium",
                separator: "text-onBackground font-medium",
                number: "text-onBackground font-medium",
                decimals: "text-onBackground font-medium",
              }}
              number={balance.number}
              decimals={balance.decimals}
            />
          </span>
        }
      </Typography>
      {balance &&
        <span className="mr-10 hidden md:inline">
          <Currency
            parsedSettings={parsedSettings}
            classes={{
              sign: "text-onBackground font-medium",
              symbol: "text-onBackground font-medium",
              separator: "text-onBackground font-medium",
              number: "text-onBackground font-medium",
              decimals: "text-onBackground font-medium",
            }}
            number={balance.number}
            decimals={balance.decimals}
          />
        </span>
      }
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
