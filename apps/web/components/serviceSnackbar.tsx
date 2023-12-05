"use client"
import {Snackbar} from "ui/atoms/snackbar/snackbar";
import {useService} from "../providers/service";
import {cls, Grid, Typography} from "ui";
import React, {useEffect, useState} from "react";

export const ServiceSnackbar = () => {
  const {connected,} = useService()

  return (
    !connected ?
    <Snackbar
      align={"bottom-left"}
      icon={
        <span
          key={"status-icon"}
          className={cls([
            "bg-error",
            "rounded-full w-4 h-4 flex aspect-square mr-2",
          ])}
        />
      }
      message={
        <Grid flex columns={2} mobileColumns={2} gap={2}>
          <Typography tag={"span"}>{"Waiting for service"}</Typography>
        </Grid>
      }
    /> :
      <span className={"hidden"} />
  )
}