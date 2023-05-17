import React, { FC } from "react"
import {FiltersType} from "../../types";
import {Grid} from "../grid/grid";
import {cls} from "../../assets/utils";
import {Typography} from "../typography/typography";
import {Button} from "../button/button";

interface DirectionFilterProps {
  title?: string
  className?: string
  account: string
  filters: FiltersType | undefined
  setFilters: React.Dispatch<React.SetStateAction<FiltersType | undefined>>
}

export const DirectionFilter: FC<DirectionFilterProps> = ({
  title,
  className,
  account,
  filters,
  setFilters,
}) => {

  return (
    <Grid
      flex
      className={cls(["gap-4", className])}
    >
      <Typography color={"onSurfaceHigh"} tag={"h3"} size={"Heading5"}>{title || "Transaction direction"}</Typography>
      <Grid
        flex
        columns={2}
        className={"flex justify-left gap-8"}
      >
        <div>
          <Button
            type={"tertiary"}
            active={filters?.recipient === account}
            hover
            onClick={() =>
              setFilters(previousFilters => ({
                ...previousFilters,
                recipient: account,
                sender: filters?.sender === account ? undefined : previousFilters?.sender
              }))
            }
            label={"Incoming"}
          />
        </div>
        <div>
          <Button
            type={"tertiary"}
            active={filters?.sender === account}
            hover
            onClick={() =>
              setFilters(previousFilters => ({
                ...previousFilters,
                sender: account,
                recipient: filters?.recipient === account ? undefined : previousFilters?.recipient
              }))
            }
            label={"Outgoing"}
          />
        </div>
      </Grid>
    </Grid>
  )
}
