import React, { FC } from "react"
import {Grid} from "../grid/grid";
import {IconButton} from "../iconButton/iconButton";
import {Button} from "../button/button";

export const ActiveFilters: FC<{
  activeFilters?: Array<{ filterName: string, filterValue: string }>
  resetFilters: (filter: string) => void,
}> = ({activeFilters, resetFilters}) => {

  return (
    <div className="w-full flex flex-wrap justify-left px-4 md:px-0 gap-4">
      {
        activeFilters &&
        <>
          {activeFilters.map(activeFilter => (
            <div className={"bg-background text-onBackground py-2 px-4 rounded-md w-max"}>
              <Grid flex columns={2} className="text-onBackgroundHigh gap-2 items-center justify-between">
                {activeFilter.filterName + ": " + activeFilter.filterValue}
                <IconButton
                  icon={"x"}
                  type={"iconOnly"}
                  onClick={() => resetFilters(activeFilter.filterName.toLowerCase())}
                  size={"auto"}
                />
              </Grid>
            </div>
          ))}
          <Button
            className="py-2 px-4"
            type={"primary"}
            label={"Clear Filters"}
            onClick={() => resetFilters("all")}
          />
        </>
      }
    </div>
  )
}
