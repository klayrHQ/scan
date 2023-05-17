import React, { FC } from "react"
import {IconButton} from "../iconButton/iconButton";
import {Button} from "../button/button";
import {Grid} from "../grid/grid";

export const ActiveFilter: FC<{
  filterName: string,
  filterValue: string,
  reset: any,
}> = ({filterName, filterValue, reset}) => {

  return (
    <div className={filterValue !== "clear" ? "bg-background text-onBackground  py-2 px-4 mr-4 mt-4 rounded-md w-max" : ""}>
      {filterValue !== "clear" ?
        <Grid flex columns={2} className="text-onBackgroundHigh gap-2 items-center justify-between">
          {filterName + ": " + filterValue}
          <IconButton icon={"x"} type={"iconOnly"} onClick={reset} size={"auto"}/>
        </Grid>
        :
        <Button
          className="bg-primary text-onPrimary py-2 px-4 mr-4 mt-4 rounded-md w-max"
          label={filterName}
          onClick={reset}
        />
      }
    </div>
  )
}