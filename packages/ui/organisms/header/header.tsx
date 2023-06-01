import React, {ReactNode, useState} from "react"
import { InfoBar } from "../infoBar/infoBar";
import { TopBar, TopBarProps } from "../topBar/topBar";
import { GotoTop } from "../../atoms/gotoTop/gotoTop";
import {statusType} from "../../types";

interface HeaderProps {
  className?: string
  children?: any
  infoItemsLeft?: Array<ReactNode>
  infoItemsRight?: Array<ReactNode>
  menuItems: Array<ReactNode>
  logo: ReactNode
  menuItemsRight?: Array<ReactNode>
}

export const Header = ({
  className,
  children,
  infoItemsLeft,
  infoItemsRight,
  menuItems,
  menuItemsRight,
  logo,
}: HeaderProps) => {

  return (
    <div className={["z-50", "w-full", "mb-8", className].join(" ")}>
      <InfoBar infoItemsLeft={infoItemsLeft} infoItemsRight={infoItemsRight} />
      <TopBar menuItems={menuItems} menuItemsRight={menuItemsRight} logo={logo} />
      <GotoTop />
      {children}
    </div>
  )
}
