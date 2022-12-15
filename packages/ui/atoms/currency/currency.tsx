import React from "react"
import {Typography} from "../typograhpy/typography";

export interface CurrencyProps {
  sign?: boolean
  symbol?: boolean
  convert?: boolean
  classes?: {
    sign?: string
    symbol?: string
    number?: string
    separator?: string
    decimals?: string
  }
  parsedSettings?: any
  number: string
  decimals?: string | undefined
  currencies?: Array<{sign: string, symbol: string}>
}

export const Currency = ({
  convert,
  symbol = false,
  sign = false,
  classes,
  parsedSettings = {symbolEnabled: true},
  number,
  decimals,
  currencies = [{sign:"Ⱡ", symbol: "LSK"}],
}: CurrencyProps) => {

  return (
    <Typography tag={"span"} className={"whitespace-nowrap "}>
      {(parsedSettings?.signEnabled || sign) && (
        <span
          className={[
            "mr-0.5",
            classes?.sign ? classes?.sign : "text-onSurfaceLow font-medium",
          ].join(" ")}
        >
          {convert || parsedSettings?.convertCurrency
            ? parsedSettings?.selectedCurrency?.sign
            : parsedSettings?.signEnabled
              ? currencies[0].sign
              : ""}
        </span>
      )}
      {number && (
        <span
          className={[
            classes?.number ? classes?.number : "text-onSurfacePrimaryHigh font-medium",
          ].join(" ")}
        >
          {number}
        </span>
      )}
      {decimals && (
        <span
          className={[
            classes?.separator ? classes?.separator : "text-onSurfacePrimaryMedium",
          ].join(" ")}
        >
          {parsedSettings?.decimalSeparatorDot ? "." : ","}
        </span>
      )}
      {decimals && (
        <span
          className={[
            classes?.decimals ? classes?.decimals : "text-onSurfacePrimaryMedium",
          ].join(" ")}
        >
          {decimals}
        </span>
      )}
      {(parsedSettings?.symbolEnabled || symbol) && (
        <span
          className={[
            "ml-0.5",
            classes?.symbol ? classes?.symbol : "text-onSurfaceLow font-medium",
          ].join(" ")}
        >
          {convert || parsedSettings?.convertCurrency
            ? parsedSettings?.selectedCurrency?.symbol
            : currencies[0].symbol}
          {parsedSettings?.convertCurrency}
        </span>
      )}
    </Typography>
  )
}
