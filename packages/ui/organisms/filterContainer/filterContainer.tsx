import React, {FC, ReactElement, ReactNode} from "react";
import {Grid} from "../../atoms/grid/grid";
import {Typography} from "../../atoms/typography/typography";
import {Button} from "../../atoms";
import {cls} from "../../assets/utils";
import {ActiveFilters} from "../../atoms/activeFilters/activeFilters";

interface FilterContainerProps {
  title?: string
  filterComponents?: ReactNode
  activeFilters?: Array<{ filterName: string, filterValue: string }>
  results?: number
  filterFunction: () => void
  resetFunction: (filter: string) => void
  filtering?: boolean
}

export const FilterContainer: FC<FilterContainerProps> = ({
  title,
  filterComponents,
  activeFilters,
  results,
  filterFunction,
  resetFunction,
  filtering,
}) => {
  return (
    <Grid
      className={"p-0 w-full md:w-[90vw] md:max-w-app sm:h-full md:h-[80vh] m-auto overflow-hidden md:rounded bg-surface-1 text-onSurfaceMedium flex flex-col"}
      flex
    >
      <div className={"px-6 md:px-10 py-4 md:pt-8 drop-shadow-sm z-20 top-0 left-0 bg-surface-2 relative"}>
        <Typography color={"onSurfaceHigh"} tag={"h2"} size={"Heading4"} className={"pb-4 text-lg md:text-4xl font-bold "}>
          {title || "Filter Items"}
        </Typography>
        <ActiveFilters activeFilters={activeFilters} resetFilters={resetFunction} />
      </div>
      <div className={"px-6 md:px-10 py-4 md:pt-8 overflow-y-auto"}>
        <div className={"block w-full mx-auto"}>
          {filterComponents}
        </div>
      </div>
      <div className={"px-6 md:px-10 py-4 md:pt-8 flex mt-10 items-center mt-auto bottom-0 right-0 z-10 justify-between w-full bg-surface-1"}>
        {results && <span className={"text-onSurfaceMedium"}>{results} results</span>}
        <Grid className={"ml-auto items-center"} flex gap={2} columns={2} mobileColumns={2}>
          <Button
            type={"transparent"}
            hover
            onClick={resetFunction}
            label={"Reset filters"}
          />
          <Button
            type={"primary"}
            onClick={filterFunction}
            label={"Filter items"}
          />
          <div
            className={cls([
              "inline-flex",
              "items-center pointer-events-none",
              "searchSpinner ease-linear rounded-full",
              "border-2 border-t-2 border-t-white",
              "border-surface h-6 w-6",
              !filtering && "hidden",
            ])}
          />
        </Grid>
      </div>
    </Grid>
  )
}