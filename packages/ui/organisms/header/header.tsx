import React, { useState } from "react"
import { InfoBar } from "../infoBar/infoBar";
import { TopBar, TopBarProps } from "../topBar/topBar";
import { GotoTop } from "../../atoms/gotoTop/gotoTop";
import {statusType} from "../../types";

interface HeaderProps {
  className?: string
  title?: string
  topBarData: TopBarProps
  children?: any
  openSettingsModal?: any
  status: statusType
}

export const Header = ({
  className,
  title,
  topBarData,
  children,
  openSettingsModal,
  status,
}: HeaderProps) => {

  return (
    <div className={["z-50", "w-full", "mb-8", className].join(" ")}>
      <InfoBar status={status} openSettingsModal={openSettingsModal} />
      <TopBar {...topBarData} />
      <GotoTop />
      {children}
    </div>
  )
}
