import React, {FC, ReactNode} from "react"
import {Grid} from "../../atoms/grid/grid";

interface InfoBarProps {
  infoItemsLeft?: Array<ReactNode>
  infoItemsRight?: Array<ReactNode>
}

export const InfoBar: FC<InfoBarProps> = ({
  infoItemsLeft,
  infoItemsRight,
}) => {
  return (
    <div className="h-10 flex flex-row items-center bg-infobar text-onInfobar w-full z-50 px-2">
      <Grid
        className="w-app max-w-app mx-auto items-center justify-between space-x-2 md:space-x-4"
        flex
        columns={2}
        mobileColumns={2}
        gap={4}
      >
        <Grid
          className="space-x-2 md:space-x-4 items-center"
          flex
          columns={2}
          mobileColumns={2}
          gap={4}
        >
          {infoItemsLeft}
        </Grid>
        <Grid
          className="justify-end w-app md:w-full md:w-auto space-x-2 md:space-x-4 items-center"
          flex
          columns={2}
          mobileColumns={2}
        >
          {infoItemsRight}
        </Grid>
      </Grid>
    </div>
  )
}

