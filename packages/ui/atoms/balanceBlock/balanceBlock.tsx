import React from "react";
import {Highlight} from "../highlight/highlight";
import {Currency} from "../currency/currency";
import {Typography} from "../typography/typography";

interface BalanceBlockProps {
  className?: string
  title: string
  amount?: string
  total: string
  colorTitle: string
  colorBg: string
  colorText: string
  noPercentage?: boolean
}

export const BalanceBlock = ({
  className,
  title,
  amount,
  total,
  colorBg,
  colorText,
  colorTitle,
  noPercentage = false,
}: BalanceBlockProps) => {
  return (
    <Highlight className={[className, colorBg, "px-4"].join(" ")}>
      <Typography tag={"span"} className={colorTitle}>{title}</Typography>
      <div className="flex flex-row items-center space-x-2">
        <Currency
          classes={{
            sign: `${colorText} font-medium`,
            symbol: `${colorText} font-medium`,
            separator: `${colorText}`,
            number: `${colorText} font-medium`,
            decimals: `${colorText}`,
          }}
          number={amount || "0"}
        />
        {/*{!noPercentage && (
          <span>
            {amount && parseInt(amount) > 0
              ? parseInt(
              ((BigInt(amount) * 10000n) / BigInt(total)).toString(),
            ) / 100
              : 0}
            %
          </span>
        )}*/}
      </div>
    </Highlight>
  )
}