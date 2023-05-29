import {ReactElement} from "react";
import {NetworkEndpoint} from "@moosty/lisk-service-provider";

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

export type iconVariants =
  | "menu"
  | "chevronUp"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "verticalDots"
  | "dotsHorizontal"
  | "search"
  | "plus"
  | "minus"
  | "account"
  | "share"
  | "star"
  | "starOpen"
  | "x"
  | "edit"
  | "remove"
  | "bookmark"
  | "grid"
  | "list"
  | "copy"
  | "like"
  | "trending"
  | "link"
  | "hashtag"
  | "help"
  | "info"
  | "exclamationTriangle"
  | "identification"
  | "check"
  | "checkCircle"
  | "checkShield"
  | "arrowUp"
  | "arrowDown"
  | "arrowRight"
  | "arrowLeft"
  | "newTab"
  | "fullScreen"
  | "normalScreen"
  | "clock"
  | "calendar"
  | "chevronUpDown"
  | "visible"
  | "invisible"
  | "attachment"
  | "download"
  | "globe"
  | "language"
  | "gif"
  | "gift"
  | "qr"
  | "rocket"
  | "shoppingCart"
  | "sparkles"
  | "wallet"
  | "filter"
  | "barsArrowDown"
  | "logOut"
  | "undefined"
  | "number"

export interface FiltersType {
  dateRange?: string | null | undefined,
  dateFilters?: {from: Date | null | undefined, to: Date | null | undefined} | undefined,
  amountRange?: string | null | undefined,
  amountFilters?: {from: number | null | undefined, to: number | null | undefined} | undefined,
  sender?: string | null | undefined,
  recipient?: string | null | undefined,
  data?: string | null | undefined,
}

export interface FormattedFiltersType {
  timestamp?: string,
  amount?: string,
  senderAddress?: string,
  senderUsername?: string,
  recipientAddress?: string,
  recipientUsername?: string,
  data?: string,
}

export interface FilterModesType {
  dateFilter?: "slider" | "custom",
  amountFilter?: "buttons" | "slider" | "range",
}

export interface ThemeType {
  bg: {
    s: number
    l: number
  }
  handle: string
  name: string
  primary: number
  secondary: number
  type: string
}

export interface CurrencyType {
  id: number
  symbol: string
  sign: string
  name: string
  flag?: string
  default: {
    sign: boolean
    symbol: boolean
    fractions: number
  }
}

export interface SettingsItemType {
  label: string
  subLabel: string
  link: string
  icon?: any
  hideOnMobile?: boolean
  view: JSX.Element
}

export interface NetworkType {
  id: string
  endpoint: NetworkEndpoint[]
  network: string
  communityId: string
  default?: boolean
}