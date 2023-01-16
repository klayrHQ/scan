import React  from "react"
import { useRouter } from "next/router"
import { Avatar } from "../../atoms/avatar/avatar";

interface RecentSearchesProps {
  menuCloseFunction?: any
  className?: string
  saveSearch: {
    saveSearch: (address: string, username: string) => void
    recentSearches: [{address: string, username: string}]
  }
  compactString: any
}

export const RecentSearches = ({
  menuCloseFunction,
  className,
  saveSearch,
  compactString,
}: RecentSearchesProps) => {
  const router = useRouter()

  return (
    <div className={`text-onBackgroundHigh p-2 font-medium mt-2 ${className ? className : ""}`}>
      <p className="text-onSurfaceHigh">Recent Searches</p>
      <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 py-2 divider-1 gap-4">
        {saveSearch.recentSearches && saveSearch.recentSearches.map((recentSearch, index) => {
          return (
            recentSearch &&
            <span
                className="relative cursor-pointer text-onSurfaceHigh flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-2 rounded transition capitalize items-center"
                key={`last-search-${index}`}
                onClick={() => {
                  saveSearch.saveSearch(recentSearch.address, recentSearch.username)
                  router.push(`/account/${recentSearch.address}`)
                  menuCloseFunction()
                }}
            >
              <span className="absolute top-[7px]"><Avatar className="mr-2" address={recentSearch.address} size={20}/></span>
              <span className="ml-7">{recentSearch.username ? recentSearch.username : compactString(recentSearch.address, 18)}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
