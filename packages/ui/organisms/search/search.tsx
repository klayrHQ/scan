import React, {FC} from "react"
import { Table } from "../table/table";
import { Link} from "../../atoms/link/link";
import {tableRowsType} from "../../types";
import {Select} from "../../atoms/select/select";
import {Icon} from "../../atoms/icon/icon";
import {Grid} from "../../atoms";
import {cls} from "../../assets/utils";

interface SearchProps {
  searchFunction: (address?: string) => void
  searchResults?: tableRowsType
  searchValue?: string
  setSearchValue: (value: string) => void
  searching?: boolean
  setFilters?: (value: string) => void
  filtersList?: Array<any>
}

export const Search: FC<SearchProps> = ({
  searchFunction,
  searchResults,
  searchValue,
  setSearchValue,
  searching = false,
  setFilters,
  filtersList,
}) => {

  return (
    <div className="text-onSurfacePrimaryLow flex-1 flex lg:justify-end flex-col divider divide-y-2">
      <div className=" w-full ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Grid
          className="relative items-center"
          flex
          columns={2}
          mobileColumns={2}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
            {/*<Icon icon={"search"} color={"currentColor"}/>*/}
          </div>
          <input
            id="search"
            name="search"
            className={[
              "block w-full pl-8 pr-3 py-4 border-none shadow-0 border-transparent rounded text-base cursor-pointer",
              "leading-5 bg-background text-onBackground placeholder-onSurfaceLow",
              "focus:border-surface-0 focus:shadow-0 focus:ring-0 focus:outline-none",
            ].join(" ")}
            type="search"
            autoFocus={true}
            onChange={(e) =>
              e.target.value !== "/" && setSearchValue(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchFunction
              }
            }}
            autoComplete="off"
            value={searchValue}
            placeholder="Search for address/tx/delegate/block"
          />

          <div
            className={[
              "absolute inset-y-0 right-10 top-2 flex",
              "items-center pointer-events-none",
              "searchSpinner ease-linear rounded-full",
              "border-2 border-t-2 border-t-white",
              "border-surface h-5 w-5",
              !searching && "hidden",
            ].join(" ")}
          />
          {
            setFilters &&
              <div className={cls([
                "w-48 relative before:absolute before:content-['']",
                "before:-left-[1px] before:w-[1px] before:h-3/4 ",
                "before:bg-surface-3 before:top-0 before:bottom-0 before:my-auto",
              ])}>
                <Select
                  id={"search_filter"}
                  placeholder={"Filter"}
                  onChange={setFilters}
                  optionsList={filtersList}
                  transition
                  width={"full"}
                />
              </div>
          }
        </Grid>
      </div>
      {searchValue && searchValue?.length > 2 && searchResults &&
        <div className="w-full">
          <div className=" w-full md:w-auto z-40">
            <Table
              className="my-[4px]"
              evenClassName="bg-background text-onSurfaceHigh"
              oddClassName="bg-background text-onSurfaceHigh"
              rows={searchResults}
              rounded={false}
            />
          </div>
        </div>
      }
    </div>
  )
}
