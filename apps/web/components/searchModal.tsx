"use client";
import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SearchContainer } from "ui/organisms/searchContainer/searchContainer";
import { Popover } from "ui/atoms/popover/popover";
import { useRouter } from "next/navigation";
// import {favourites} from "ui/assets/mockupData/mockupData";
import { useSaveSearch } from "../providers/recentSearches";
import { cls } from "ui";
import { search } from "../lib/search";
import {useService} from "../providers/service";

export const SearchModal = ({
  menuCloseFunction,
  mobile,
}: {
  menuCloseFunction?: () => void;
  mobile?: boolean;
}) => {
  const { client } = useService()
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const { saveSearch, recentSearches, setRecentSearches } = useSaveSearch();
  const [filter, setFilter] = useState<string | undefined>(undefined);

  const filtersList = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Transactions",
      value: "transactions"
    },
    {
      label: "Validators",
      value: "validators"
    },
    {
      label: "Stakes",
      value: "stakes"
    },
    {
      label: "Blocks",
      value: "blocks"
    },
  ];

  const SearchResult = ({ address }: { address: string }) => (
    <div onClick={() => goToAddress(address)}>{address}</div>
  );

  const [searchResults, setSearchResults] = useState<
    { id: string; cols: { value: ReactElement }[] }[]
  >([
    {
      id: "0",
      cols: [
        {
          value: (
            <SearchResult
              address={"lskk84u2pk42jos35p6jmbxs8c8682nx793xdxy3p"}
            />
          ),
        },
      ],
    },
    {
      id: "1",
      cols: [
        {
          value: (
            <SearchResult
              address={"lskk84u2pk42jos35p6jmbxs8c8682nx793xdxy3p"}
            />
          ),
        },
      ],
    },
  ]);

  const goToAddress = (address?: string, username?: string) => {
    router.push(`/account/${address}`);
    saveSearch(address, username);
    setOpen(false);
    menuCloseFunction && menuCloseFunction();
  };

  useEffect(() => {
    const getResults = async () => {
      setSearchResults(await search(client, saveSearch, setOpen, menuCloseFunction, searchValue, filter))
    }
    getResults()
  }, [searchValue, filter]);

  return (
    <Popover
      open={open}
      setOpen={setOpen}
      containerClassName={!mobile ? "hidden md:block" : "md:hidden"}
      containerWidth={"full"}
      className={cls([
        "top-0 w-screen max-w-full lg:max-w-xl",
        "shadow",
      ])}
      placement={"right"}
      button={
        <div className="group bg-background text-onSurfacePrimaryLow rounded inline-flex items-center text-base font-medium focus:outline-none w-full relative cursor-pointer">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className={"w-4 h-4"} />
          </div>
          <input
            id="search"
            name="search"
            className={[
              "block w-full pl-[1.85rem] pr-3 py-2 border border-transparent rounded text-base cursor-pointer",
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
        setFilters={setFilter}
        filtersList={filtersList}
      />
    </Popover>
  );
};
