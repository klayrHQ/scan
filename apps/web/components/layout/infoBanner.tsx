"use client"
import {ReactNode, useEffect, useState} from "react";
import {cls, Grid} from "ui";
import {Icon} from "ui/atoms/icon/icon";

interface InfoBannerProps {
  children: ReactNode
}

export const InfoBanner = ({ children, }: InfoBannerProps) => {
  const [show, setShow] = useState(true)

  const handleShow = (show: boolean) => {
    setShow(show)
    window.localStorage.setItem("infoBanner", show ? "true" : "false")
  }

  useEffect(() => {
    const show = window.localStorage.getItem("infoBanner")
    setShow(show === "true" || show === null)
  }, [])

  return (
      <Grid
          className={cls([
              "relative w-full bg-azule py-4 px-12 items-center justify-center",
              show ? "flex" : "hidden"
          ])}
          flex
          columns={1}
          gap={2}
      >
        {children}
        <Icon icon={"x"} className={"absolute top-4 right-4 cursor-pointer"} onClick={() => handleShow(false)} />
      </Grid>
  )
}