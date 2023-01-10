import React, { useState } from "react"
import { InfoBar } from "../infoBar/infoBar";
import { TopBar, TopBarProps } from "../topBar/topBar";
import { GotoTop } from "../../atoms/gotoTop/gotoTop";

interface HeaderProps {
  className?: string
  title?: string
  topBarData: TopBarProps
  children?: any
}

export const Header = ({
  className,
  title,
  topBarData,
  children,
}: HeaderProps) => {

  return (
    <div className={["z-50", "w-full", "mb-8", className].join(" ")}>
      <InfoBar />
      <TopBar {...topBarData} />
      <GotoTop />
      {children}
    </div>
  )
}
