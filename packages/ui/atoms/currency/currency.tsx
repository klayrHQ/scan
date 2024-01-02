import React from "react"
import {Typography} from "../typography/typography";
import {CurrencyType} from "../../types";
import {cls} from "../../utils";

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
  typography?: Record<string, any>
}

export const Currency = ({
  convert,
  symbol = false,
  sign = false,
  classes,
  parsedSettings,
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
  typography,
}: CurrencyProps) => {

  return (
    <Typography tag={"span"} className={cls(["whitespace-nowrap", typography?.className])} {...typography}>
      {(parsedSettings?.signEnabled || sign) && (
        <span
          className={[
            "mr-0.5",
            classes?.sign ? classes?.sign : "",
          ].join(" ")}
        >
          {convert || parsedSettings?.convertCurrency
            ? parsedSettings?.selectedCurrency?.sign
            : parsedSettings?.signEnabled
              ? currencies[0]?.sign
              : ""}
        </span>
      )}
      {number && (
        <span
          className={[
            classes?.number ? classes?.number : "",
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
            classes?.decimals ? classes?.decimals : "",
          ].join(" ")}
        >
          {decimals}
        </span>
      )}
      {(parsedSettings?.symbolEnabled || symbol) && (
        <span
          className={[
            "ml-0.5",
            classes?.symbol ? classes?.symbol : "",
          ].join(" ")}
        >
          {convert || parsedSettings?.convertCurrency
            ? parsedSettings?.selectedCurrency?.symbol
            : currencies[0]?.symbol}
          {parsedSettings?.convertCurrency}
        </span>
      )}
    </Typography>
  )
}
