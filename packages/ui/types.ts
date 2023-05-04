import {ReactElement} from "react";

export type tableRowsType = Array<{
  id: string,
  className?: string,
  cols: Array<{
    value?: string | ReactElement
    className?: string
    colspan?: number
  }>
}>

export type tableHeadColsType = Array<{
  value?: string
  className?: string
  onClick?: () => void
  sort?: string
}>

export type statusType =
  | "connected"
  | "error"
  | "warning"
  | "finalized"
  | "pending"
  | "rejected"
  | "canceled";