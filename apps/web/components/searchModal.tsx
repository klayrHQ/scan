"use client"
import React, {useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {SearchContainer} from "ui/organisms/searchContainer/searchContainer";
import {Popover} from "ui/atoms/popover/popover";
import {useRouter} from "next/navigation";
import {favourites} from "ui/assets/mockupData/mockupData";
import {useSaveSearch} from "../providers/recentSearches";

export const SearchModalClient = ({
  menuCloseFunction,
} : {
  menuCloseFunction?: () => void
}) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState<string>()
  const { saveSearch, recentSearches, setRecentSearches } = useSaveSearch()

  const SearchResult = ({address}: {address: string}) => (
    <div onClick={() => goToAddress(address)}>
      {address}
    </div>
  )

  const searchResults = [
    {
      id: "0",
      cols: [
        {
          value: <SearchResult address={"test"}/>,
        }
      ]
    },
    {
      id: "1",
      cols: [
        {
          value: <SearchResult address={"test2"}/>,
        }
      ]
    },
  ]

  const goToAddress = (address?: string, username?: string) => {
    router.push(`/account/${address}`)
    saveSearch(address, username)
    setOpen(false)
    menuCloseFunction && menuCloseFunction()
  }

  return (
    <Popover
      open={open}
      setOpen={setOpen}
      containerClassName={"hidden md:block"}
      containerWidth={"full"}
      className={"top-0 w-screen max-w-full lg:max-w-xl"}
      placement={"right"}
      button={
        <div className="group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full relative cursor-pointer">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon />
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
      }
    >
      <SearchContainer
        recentSearches={recentSearches}
        searchFunction={goToAddress}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        searching={false}
        searchResults={searchResults}
      />
    </Popover>
  )
}
