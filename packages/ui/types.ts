import {ReactElement} from "react";

export type Colors =
  | "azule"
  | "azuleDark"
  | "eerie"
  | "lobster"
  | "lobsterDark"
  | "sand"
  | "sandDark"
  | "tulip"
  | "volt"
  | "voltDark"
  | "white"
  | "black";

export type tableRowsType = Array<{id: string, cols: Array<{value?: string | ReactElement, className?: string}>}>

export type tableHeadColsType = Array<{value?: string, className?: string, onClick?: () => void, sort?: string}>
