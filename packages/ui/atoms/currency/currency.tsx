import React from "react"
import {Typography} from "../typography/typography";
import {CurrencyType} from "../../types";

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
  currencies?: Array<CurrencyType>
}

export const Currency = ({
  convert,
  symbol = false,
  sign = false,
  classes,
  parsedSettings = {symbolEnabled: true},
  number,
  decimals,
  currencies = [{
    id: 1214,
    name: "Lisk",
    sign: "Ⱡ",
    symbol: "LSK",
    default: {
      sign: false,
      symbol: true,
      fractions: 4,
    },
  }],
}: CurrencyProps) => {

  return (
    <span className={"whitespace-nowrap"}>
      {(parsedSettings?.signEnabled || sign) && (
        <Typography
          tag={"span"}
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
        </Typography>
      )}
      {number && (
        <Typography
          tag={"span"}
          className={[
            classes?.number ? classes?.number : "text-onSurfacePrimaryHigh font-medium",
          ].join(" ")}
        >
          {number}
        </Typography>
      )}
      {decimals && (
        <Typography
          tag={"span"}
          className={[
            classes?.separator ? classes?.separator : "text-onSurfacePrimaryMedium",
          ].join(" ")}
        >
          {parsedSettings?.decimalSeparatorDot ? "." : ","}
        </Typography>
      )}
      {decimals && (
        <Typography
          tag={"span"}
          className={[
            classes?.decimals ? classes?.decimals : "text-onSurfacePrimaryMedium",
          ].join(" ")}
        >
          {decimals}
        </Typography>
      )}
      {(parsedSettings?.symbolEnabled || symbol) && (
        <Typography
          tag={"span"}
          className={[
            "ml-0.5",
            classes?.symbol ? classes?.symbol : "text-onSurfaceLow font-medium",
          ].join(" ")}
        >
          {convert || parsedSettings?.convertCurrency
            ? parsedSettings?.selectedCurrency?.symbol
            : currencies[0].symbol}
          {parsedSettings?.convertCurrency}
        </Typography>
      )}
    </span>
  )
}
