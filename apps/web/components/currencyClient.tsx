"use client"
import { FC } from "react"
import {useSettings} from "../providers/settings";
import {useDecimals} from "../providers/currency/CurrencyProvider";
import {Currency} from "ui/atoms/currency/currency";

interface CurrencyProps {
  beddows: string
  sign?: boolean
  symbol?: boolean
  convert?: boolean
  forceDecimals?: number
  classes?: {
    sign?: string
    symbol?: string
    number?: string
    separator?: string
    decimals?: string
  }
  typography?: Record<string, any>
}

export const CurrencyClient: FC<CurrencyProps> = ({
  beddows,
  convert,
  symbol = false,
  forceDecimals,
  sign = false,
  classes,
  typography,
}) => {
  const { parseBeddows, currencies } = useDecimals()
  const { parsedSettings } = useSettings()
  const { number, decimals } = parseBeddows(
    beddows,
    convert || parsedSettings?.convertCurrency,
    forceDecimals,
  )

  return (
    <Currency
      classes={classes}
      convert={convert}
      currencies={currencies}
      decimals={decimals}
      number={number}
      parsedSettings={parsedSettings}
      sign={sign}
      symbol={symbol}
      typography={typography}
    />
  )
}
