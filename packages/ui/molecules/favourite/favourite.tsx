import React from 'react';
import {XCircleIcon} from "@heroicons/react/24/outline";
import {Typography} from "../../atoms";
import {compactString} from "../../assets/utils";
import {Avatar} from "../../atoms/avatar/avatar";
import {Popover} from "@headlessui/react";
import {ValueFormatter} from "../../atoms/valueFormatter/valueFormatter";

interface FavouriteProps {
  onClick: (address: string) => void
  xOnClick: (address: string) => void
  username?: string
  address: string
  balance: string
  className?: string
}

export const Favourite = ({
  className,
  onClick,
  xOnClick,
  username,
  address,
  balance,
}: FavouriteProps) => {

  return (
    <Popover.Button
      as={"div"}
      className={`relative cursor-pointer text-onSurfaceHigh w-full items-center flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-4 rounded transition ${className ? className : ""}`}
      onClick={() => onClick(address)}
    >
      <Avatar
        className="mx-3"
        address={address}
        size={25}
      />
      <Typography tag={"span"} className="flex flex-col grow-[2] items-start">
        {username && <span className="font-semibold capitalize">{username}</span>}
        <span className="">
          <ValueFormatter value={address} type={"string"} format={"shortAddress"} />
        </span>
        {balance &&
          <span className="mr-10 inline md:hidden">
            <ValueFormatter value={balance} type={"string"} format={"currency"} />
          </span>
        }
      </Typography>
      {balance &&
        <span className="mr-10 hidden md:inline">
          <ValueFormatter value={balance} type={"string"} format={"currency"} />
        </span>
      }
      <button
        className="absolute bg-transparent border-transparent cursor-pointer right-0 h-10 w-10 mr-1 ml-3 text-onSurfaceLow hover:text-onSurfaceHigh"
        onClick={(e) => {
          e.stopPropagation()
          xOnClick(address)
        }}
      >
        <XCircleIcon className="w-5 h-5 m-auto hover:opacity-50 flex-end"/>
      </button>
    </Popover.Button>
  );
};
