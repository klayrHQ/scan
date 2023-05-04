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
  width?: string
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
  width,
}: BalanceBlockProps) => {
  return (
    <Highlight className={[className, colorBg, "px-4", "flex-col flex"].join(" ")} width={width}>
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
        {!noPercentage && (
          <Typography className={colorText} tag={"span"}>
            {amount && parseInt(amount) > 0
              ? parseInt(
                // @ts-ignore
              ((BigInt(amount) * 10000n) / BigInt(total)).toString(),
            ) / 100
              : 0}
            %
          </Typography>
        )}
      </div>
    </Highlight>
  )
}