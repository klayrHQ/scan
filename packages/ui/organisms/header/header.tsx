import React, {ReactNode, useState} from "react"
import { InfoBar } from "../infoBar/infoBar";
import { TopBar, TopBarProps } from "../topBar/topBar";
import { GotoTop } from "../../atoms/gotoTop/gotoTop";
import {statusType} from "../../types";

interface HeaderProps {
  className?: string
  children?: any
  openSettingsModal?: any
  status?: statusType
  topBar?: ReactNode
}

export const Header = ({
  className,
  topBar,
  children,
  openSettingsModal,
  status,
}: HeaderProps) => {

  return (
    <div className={["z-50", "w-full", "mb-8", className].join(" ")}>
      <InfoBar status={status} openSettingsModal={openSettingsModal} />
      {topBar}
      <GotoTop />
      {children}
    </div>
  )
}
