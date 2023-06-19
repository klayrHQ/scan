import React, {FC, ReactNode} from "react"
import { Search } from "../search/search";
import { AdSection } from "../../molecules/adSection/adSection";
import { RecentSearches } from "../../molecules/recentSearches/recentSearches";
import {cls} from "../../assets/utils";
import {tableRowsType} from "../../types";

export interface SearchContainerProps {
  className?: string
  recentSearches?: Array<{address: string, username?: string}>
  searching?: boolean
  searchFunction: (address?: string, username?: string) => void
  searchValue?: string
  setSearchValue: (value: string) => void
  searchResults?: tableRowsType
  ads?: Array<{ content: any, className: string }>
  setFilters?: (value: string) => void
  filtersList?: Array<any>
}

export const SearchContainer: FC<SearchContainerProps> = ({
  className = "",
  recentSearches,
  searching,
  searchFunction,
  searchValue,
  setSearchValue,
  searchResults,
  ads,
  setFilters,
  filtersList,
}) => {

  return (
    <div className={cls([
      "rounded shadow-1 flex flex-col divider divide-y-2 bg-background w-full",
      className,
    ])}>
      <Search
        searching={searching}
        searchFunction={searchFunction}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchResults={searchResults}
        setFilters={setFilters}
        filtersList={filtersList}
      />
      {recentSearches &&
        <div className="px-2">
          <RecentSearches
            recentSearches={recentSearches}
            onClick={searchFunction}
          />
        </div>
      }
      {ads && <AdSection ads={ads} />}
    </div>
  )
}
