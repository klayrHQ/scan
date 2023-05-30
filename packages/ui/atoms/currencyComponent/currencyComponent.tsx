import React, { FC } from "react"
import flags from "../../assets/icons/currencyFlags";
import { CurrencyType } from "../../types";
import { Icon } from "../icon/icon";

interface CurrencyComponentProps {
  currency: CurrencyType
  selected: boolean
  onClick(): void
}

export const CurrencyComponent: FC<CurrencyComponentProps> = ({
  currency,
  selected,
  onClick,
}) => {
  const { name, symbol, sign, flag } = currency
  return (
    <div
      onClick={() => onClick()}
      className={[
        "flex w-full flex-row justify-between",
        "items-center px-4 py-2 hover:bg-primary hover:shadow-2 hover:text-onPrimaryHigh",
        "cursor-pointer rounded group",
        selected
          ? "bg-primary shadow-2 text-onPrimaryHigh"
          : " text-onSurfaceHigh",
      ].join(" ")}
    >
      <div className="flex flex-row space-x-2 items-center ">
        <img
          // @ts-ignore
          src={flag ? flag : flags?.[symbol.toUpperCase()]?.src}
          width="24"
          height="18"
          alt={sign}
        />
        <div className="flex flex-col text-left align-left">
          <div
            className={[
              "font-bold group-hover:text-onPrimaryHigh",
              selected ? "text-onPrimaryHigh" : "text-onSurfaceHigh",
            ].join(" ")}
          >
            {name}
          </div>
          <div className="text-xs text-onPrimaryMedium font-medium">
            {symbol} - {sign}
          </div>
        </div>
      </div>
      {selected && <Icon icon={"checkCircle"} className="w-7 h-7 bg-success text-onSuccess rounded p-1" />}
    </div>
  )
}
