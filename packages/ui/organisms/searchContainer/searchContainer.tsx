import React, { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { Search } from "../search/search";
import { useHotkeys } from "react-hotkeys-hook"
import { AdSection } from "../../molecules/adSection/adSection";
import { RecentSearches } from "../../molecules/recentSearches/recentSearches";
import {cls} from "../../assets/utils";

export interface SearchContainerProps {
  className?: string
  menuCloseFunction?: any
  compactString: any
  saveSearch?: {
    saveSearch: (address: string, username?: string) => void
    recentSearchesStorage: {address: string, username?: string}[]
    recentSearches: {address: string, username?: string}[]
  }
  search: {
    results?: {
      results: any[]
      quickResult?: {
        error?: boolean
        type?: string
        id?: string
        data?: any
      }
    }
    setSearch: (searchInput: string) => void
    searching: boolean
    quickResult?: {
      error?: boolean
      type?: string
      id?: string
      data?: any
    }
  }
  ads?: Array<{ content: any, className: string }>
}

export const SearchContainer = ({
  className = "",
  menuCloseFunction,
  compactString,
  saveSearch,
  search,
  ads,
}: SearchContainerProps) => {

  return (
    <div className={cls([
      "rounded shadow-1 overflow-hidden flex flex-col divider divide-y-2 bg-background",
      className,
    ])}>
      <Search
        menuCloseFunction={menuCloseFunction}
        compactString={compactString}
        saveSearch={saveSearch}
        search={search}
      />
      {saveSearch && saveSearch.recentSearchesStorage &&
        <div className="px-2">
          <RecentSearches
            menuCloseFunction={menuCloseFunction}
            compactString={compactString}
            saveSearch={saveSearch}
          />
        </div>
      }
      {ads && <AdSection ads={ads} />}
    </div>
  )
}
