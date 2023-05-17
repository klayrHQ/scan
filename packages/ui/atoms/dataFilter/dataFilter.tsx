import React, {FC} from "react"
import {Input} from "../input/input";
import {Grid} from "../grid/grid";
import {cls} from "../../assets/utils";
import {FiltersType} from "../../types";
import {Typography} from "../typography/typography";

interface DataFilterProps {
  title?: string
  className?: string
  filters: FiltersType | undefined
  setFilters: React.Dispatch<React.SetStateAction<FiltersType | undefined>>
  filterItems: Function
}

export const DataFilter: FC<DataFilterProps> = ({
  title,
  className,
  filters,
  setFilters,
  filterItems,
}) => {

  return (
    <Grid
      flex
      className={cls(["gap-4", className])}
    >
      <Typography color={"onSurfaceHigh"} tag={"h3"} size={"Heading5"}>{title || "Description"}</Typography>
      <div>
        <Typography tag={"span"}>{"Data"}</Typography>
        <Input
          styleType={"tertiary"}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filterItems()
            }
          }}
          onChange={(e) => {
            e.target.value.length < 65 &&
            setFilters(previousFilters => ({
              ...previousFilters,
              data: e.target.value || null
            }))
          }}
          value={filters?.data || ""}
          maxLength={64}
          width={"full"}
        />
      </div>
    </Grid>
  )
}
