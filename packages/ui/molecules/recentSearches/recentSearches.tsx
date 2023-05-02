import React, {ReactNode} from "react"
import { useRouter } from "next/router"
import { Avatar } from "../../atoms/avatar/avatar";

interface RecentSearchesProps {
  onClick?: () => void
  className?: string
  recentSearches: Array<{address: string | ReactNode, username?: string | ReactNode, avatar?: ReactNode}>
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
        {recentSearches.map((recentSearch, index) => {
          return (
            recentSearch &&
            <span
              className="relative cursor-pointer text-onSurfaceHigh flex flex-row hover:bg-surface-2 bg-surface-1 px-2 py-2 rounded transition capitalize items-center"
              key={`last-search-${index}`}
              onClick={onClick}
            >
              <span className="absolute top-[7px]">
                {recentSearch.avatar}
              </span>
              <span className="ml-7">
                {recentSearch.username ? recentSearch.username : recentSearch.address}
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
