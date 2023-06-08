import React from "react"
import { Avatar } from "../../atoms/avatar/avatar";
import {compactString} from "../../assets/utils";
import {Popover} from "@headlessui/react";
import {ValueFormatter} from "../../atoms/valueFormatter/valueFormatter";

interface RecentSearchesProps {
  onClick: (address?: string, username?: string) => void
  className?: string
  recentSearches?: Array<{address: string, username?: string}>
}

export const RecentSearches = ({
  onClick,
  className,
  recentSearches,
}: RecentSearchesProps) => {

  return (
    <div className={`text-onBackgroundHigh p-2 font-medium mt-2 ${className ? className : ""}`}>
      <p className="text-onSurfaceHigh">Recent Searches</p>
      <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 py-2 divider-1 gap-4">
        {recentSearches?.map((recentSearch, index) => {
          return (
            recentSearch &&
            <Popover.Button
              as={"span"}
              className="relative cursor-pointer text-onSurfaceHigh flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-2 rounded transition capitalize items-center"
              key={`last-search-${index}`}
              onClick={() => onClick(recentSearch.address, recentSearch.username)}
            >
              <span className="absolute top-[7px]">
                <Avatar className="mr-2" address={recentSearch.address} size={20}/>
              </span>
              <span className="ml-7">
                {recentSearch.username ? recentSearch.username : <ValueFormatter value={recentSearch.address} type={"string"} format={"shortAddress"} />}
              </span>
            </Popover.Button>
          )
        })}
      </div>
    </div>
  )
}
