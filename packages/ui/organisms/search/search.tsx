import React, { useEffect, useRef, useState } from "react"
import { Table } from "../table/table";
import { useHotkeys } from "react-hotkeys-hook"
import { useRouter } from "next/router"
import { Link} from "../../atoms/link/link";

interface SearchProps {
  menuCloseFunction?: () => void,
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
  saveSearch?: {
    saveSearch: (address: string, username: string) => void
  }
  compactString: any
}

export const Search = ({
  menuCloseFunction,
  saveSearch,
  search,
  compactString,
}: SearchProps) => {
  const searchField = useRef(null)
  const router = useRouter()
  const [searchInput, setSearchInput] = useState<string>("")
  const [hide, setHide] = useState<boolean>()
  useHotkeys("/", () => {
    if (searchField?.current) {
      // @ts-ignore
      searchField.current.focus()
      setSearchInput("")
    }
  })

  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      search.setSearch(searchInput)
    } else {
      search.setSearch("")
    }
  }, [searchInput])

  const tryQuickResult = () => {
    if (!search.results?.quickResult?.error && search.results?.quickResult?.type) {
      switch (search.results?.quickResult?.type) {
        case "block":
          setHide(true)
          router.push(`/block/${search.results.quickResult.id}`)
          break
        case "account":
          setHide(true)
          router.push(`/account/${search.results.quickResult.id}`)
          break
        case "transaction":
          setHide(true)
          router.push(`/transaction/${search.results.quickResult.id}`)
          break
        default:
          break
      }
    }
    if (
      search.results?.results?.[0]?.type &&
      search.results?.results?.[0]?.id &&
      !search.results?.quickResult?.id
    ) {
      router.push(`/${search.results.results[0].type}/${search.results.results[0].id}`)
    }
  }
  return (
    <div className="text-onSurfacePrimaryLow flex-1 flex lg:justify-end flex-col divider divide-y-2">
      <div className=" w-full ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative ">
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
          </div>
          <input
            ref={searchField}
            id="search"
            name="search"
            className={[
              "block w-full pl-8 pr-3 py-4 border-none shadow-0 border-transparent rounded text-base cursor-pointer",
              "leading-5 bg-background text-onBackground placeholder-onSurfaceLow",
              "focus:border-surface-0 focus:shadow-0 focus:ring-0 focus:outline-none",
              // "focus:text-onSurfaceLight",
            ].join(" ")}
            type="search"
            onBlur={() => setTimeout(() => setHide(true), 300)}
            autoFocus={true}
            onFocus={() => setHide(false)}
            onChange={(e) =>
              e.target.value !== "/" && setSearchInput(e.target.value)
            }
            onKeyDown={(e) => {
              setHide(false)
              if (e.key === "Enter") {
                setTimeout(() => {
                  tryQuickResult()
                  search.results?.results?.[0] && typeof menuCloseFunction === "function" && menuCloseFunction()
                  search.results?.results?.[0]?.type === "account" && saveSearch && saveSearch.saveSearch(search.results?.results?.[0]?.id, search.results?.results?.[0]?.username)
                }, 600)
              }
            }}
            autoComplete="off"
            value={searchInput}
            placeholder="Search for address/tx/delegate/block"
          />

          <div
            className={[
              "absolute inset-y-0 right-10 top-2 flex",
              "items-center pointer-events-none",
              "searchSpinner ease-linear rounded-full",
              "border-2 border-t-2 border-t-white",
              "border-surface h-5 w-5",
              !search.searching && "hidden",
            ].join(" ")}
          />
        </div>
      </div>
      {/*<div className="block px-2 lg:order-3">
        {recentSearchesStorage &&
          <RecentSearches menuCloseFunction={() => setHide(true)} />
        }
      </div>*/}
      {!hide && searchInput?.length > 2 &&
          <div className="w-full">
            { search.quickResult &&
              search.results?.results?.length === 0 && (
                <div className="absolute w-full md:w-auto rounded bg-background text-onSurfaceLinkMedium z-50">
                  <Table
                    rounded={false}
                    className="my-[4px]"
                    headCols={[
                      {
                        value: search.quickResult.type?.toUpperCase(),
                        className: "bg-background text-onBackgroundHigh",
                      },
                    ]}
                    rows={[
                      {
                        id: search.quickResult.id,
                        cols: [
                          {
                            value: (
                              <Link
                                className={
                                  "flex flex-col cursor-pointer bg-background "
                                }
                                href={`/${search.quickResult.type}/${search.quickResult.id}`}
                                link={`/${search.quickResult.type}/${search.quickResult.id}`}
                                onClick={() => typeof menuCloseFunction === "function" && setTimeout(() => menuCloseFunction(), 600)}
                                // onClick={() =>
                                //   router.push(
                                //     `/${quickResult.type}/${quickResult.id}`,
                                //     quickResult.id,
                                //   )
                                // }
                              >
                              <span className="hidden md:block bg-background">
                                {search.quickResult.id}
                              </span>
                                  <span className="md:hidden block bg-background">
                                {compactString(search.quickResult.id, 30)}
                              </span>
                              </Link>
                            ),
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              )}
            { search.results &&
              search.results?.results?.length > 0 && (
                <div className=" w-full md:w-auto z-40">
                  <Table
                    className="my-[4px]"
                    evenClassName="bg-background text-onSurfaceHigh"
                    oddClassName="bg-background text-onSurfaceHigh"
                    rows={search.results?.results}
                    rounded={false}
                  />
                </div>
              )}
          </div>
      }
    </div>
  )
}
