import React, { Fragment, useEffect, useRef, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { Search } from "../search/search";
import { useHotkeys } from "react-hotkeys-hook"
import { AdSection } from "../../molecules/adSection/adSection";
import { RecentSearches } from "../../molecules/recentSearches/recentSearches";

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
  ads?: {
    content: any
    className: string
  }[]
}

export const SearchContainer = ({
  className = "",
  menuCloseFunction,
  compactString,
  saveSearch,
  search,
  ads,
}: SearchContainerProps) => {
  const [openPopover, setOpenPopover] = useState(false)

  useHotkeys("/", (e) => {
    e.preventDefault()
    setOpenPopover(true)
  })

  return (
    <Popover className={["relative w-full lg:w-auto flex", className].join(" ")}>
      {({ open}) => (
        <>
          <button
            className={[
              open ? "text-onSurfaceHigh" : "text-onSurfaceHigh",
              "group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full bg-transparent border-none",
            ].join(" ")}
            onClick={() => setOpenPopover(true)}
          >
            <div className="relative w-full cursor-pointer" >
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-onSurfaceDark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className={[
                  "block w-full pl-8 pr-3 py-2 border border-transparent rounded text-base cursor-pointer",
                  "leading-5 bg-background text-onBackground placeholder-onSurfaceLow",
                ].join(" ")}
                type="search"

                readOnly={true}
                autoComplete="off"
                placeholder="Search"
              />
            </div>
          </button>
          <Transition
            show={openPopover}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static className="absolute z-10 left-0 lg:left-auto right-0 transform -mt-[2px] w-screen max-w-full lg:max-w-xl sm:px-0" onBlur={() => setOpenPopover(false)}>
              <div className="rounded shadow-1 overflow-hidden flex flex-col divider divide-y-2 bg-background">
                <Search
                  menuCloseFunction={typeof menuCloseFunction === "function" ? menuCloseFunction : () => setOpenPopover(false)}
                  compactString={compactString}
                  saveSearch={saveSearch}
                  search={search}
                />
                {saveSearch && saveSearch.recentSearchesStorage &&
                    <div className="px-2">
                      <RecentSearches
                        menuCloseFunction={typeof menuCloseFunction === "function" ? menuCloseFunction : () => setOpenPopover(false)}
                        compactString={compactString}
                        saveSearch={saveSearch}
                      />
                    </div>
                }
                {ads && <AdSection ads={ads} />}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>


  )
}
