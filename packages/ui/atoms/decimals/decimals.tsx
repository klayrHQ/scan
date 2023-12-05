import React, { FC } from "react"
import { Button } from "../button/button";
import { Currency } from "../currency/currency";
import {Typography} from "../typography/typography";

interface DecimalsProps {
  minMax: { min: number; max: number },
  parsedSettings?: any,
  setSetting: (handle: string, newState: any) => void
  switchConvert: () => void
  exampleNumber?: string
  exampleDecimals?: string
}

export const  Decimals: FC<DecimalsProps> = ({
  minMax,
  parsedSettings,
  setSetting,
  switchConvert,
  exampleDecimals,
  exampleNumber,
}) => {
  return (
    <div
      className={["items-center bg-surface-1 shadow-1 px-8 py-4", "rounded"].join(
        " ",
      )}
    >

      <div
        className={[
          "flex w-full flex-row justify-between",
          "items-center rounded",
        ].join(" ")}
      >
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center justify-between">
            <div className="font-bold mt-1 rounded py-2 mb-4">
              <Typography tag={"span"} className="font-medium text-onSurfaceMedium">
                {"Example: "}
              </Typography>
              <span className="text-xl">
                <Currency
                  classes={{
                    sign: "text-onSurfaceLow font-medium",
                    symbol: "text-onSurfaceLow font-medium",
                    separator: "text-onSurfacePrimaryMedium",
                    number: "text-onSurfacePrimaryMedium font-medium",
                    decimals: "text-onSurfacePrimaryMedium",
                  }}
                  number={exampleNumber || "1234"}
                  decimals={exampleDecimals?.slice(0,parsedSettings?.decimals) || "12345678".slice(0,parsedSettings?.decimals)}
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row text-left md:align-center md:items-center  justify-between ">
            <div className="flex flex-col space-y-2">
              <Typography tag={"span"} className="font-medium text-onSurfaceMedium">
                {"Mantissa size"}
              </Typography>
              <div className="text-xs items-center text-onInfoVariant font-medium flex flex-row space-x-2">
                <button
                  className={
                    "font-bold cursor-pointer pt-0.5 items-center align-middle select-none bg-surface-5 rounded-full w-5 h-5 text-onSurfacePrimaryMedium border-none"
                  }
                  onClick={() =>
                    parsedSettings?.decimals > (minMax?.min || 0) &&
                    setSetting("decimals", parsedSettings.decimals - 1)
                  }
                >
                  {"-"}
                </button>
                <Typography tag={"span"} className="text-center text-onSurfaceHigh">
                  {parsedSettings?.decimals}
                </Typography>
                <button
                  className={
                    "font-bold cursor-pointer pt-0.5 items-center align-middle select-none bg-surface-5 rounded-full w-5 h-5 text-onSurfacePrimaryMedium border-none"
                  }
                  onClick={() =>
                    parsedSettings?.decimals < (minMax?.max || 8) &&
                    setSetting("decimals", parsedSettings.decimals + 1)
                  }
                >
                  {"+"}
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Typography tag={"span"} className="font-medium text-onSurfaceMedium">
                {"Formatting"}
              </Typography>
              <div className={"space-x-4 mt-1 text-onSurfaceHigh"}>
                <input
                  className={"mr-2 text-onSurfacePrimaryHigh"}
                  type={"checkbox"}
                  style={{ borderRadius: "25%" }}
                  checked={parsedSettings?.symbolEnabled}
                  onChange={() =>
                    setSetting("symbolEnabled", !parsedSettings?.symbolEnabled)
                  }
                />
                <Typography tag={"span"}>Symbol</Typography>
                <input
                  className={"mr-2 text-onSurfacePrimaryMedium"}
                  type={"checkbox"}
                  style={{ borderRadius: "25%" }}
                  checked={parsedSettings?.signEnabled}
                  onChange={() =>
                    setSetting("signEnabled", !parsedSettings?.signEnabled)
                  }
                />
                <Typography tag={"span"}>&nbsp; Sign</Typography>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-onSurfaceMedium">
                <Typography tag={"span"}>Decimal separator</Typography>
              </span>
              <div className={"space-x-4 mt-1 text-onSurfaceHigh"}>
                <label
                  htmlFor="locale-point"
                  className={"select-none text-onSurfaceHigh"}
                >
                  <input
                    className={"mr-2 text-onSurfacePrimaryMedium"}
                    id={"locale-point"}
                    type={"radio"}
                    checked={parsedSettings?.decimalSeparatorDot}
                    onChange={() =>
                      setSetting(
                        "decimalSeparatorDot",
                        !parsedSettings?.decimalSeparatorDot,
                      )
                    }
                  />
                  <Typography tag={"span"}>Point</Typography>
                </label>
                <label
                  htmlFor="locale-comma"
                  className={"select-none text-onSurfaceHigh"}
                >
                  <input
                    className={"mr-2 text-onSurfacePrimaryMedium"}
                    id={"locale-comma"}
                    type={"radio"}
                    checked={!parsedSettings?.decimalSeparatorDot}
                    onChange={() =>
                      setSetting(
                        "decimalSeparatorDot",
                        !parsedSettings?.decimalSeparatorDot,
                      )
                    }
                  />{" "}
                  <Typography tag={"span"}>Comma</Typography>
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Typography tag={"span"} className="font-medium text-onSurfaceMedium">
                {"Convert LSK"}
              </Typography>
              <div className="text-xs font-medium flex flex-row space-x-2">
                <input
                  className={"mr-2 text-onSurfacePrimaryMedium"}
                  type={"checkbox"}
                  style={{ borderRadius: "25%" }}
                  checked={parsedSettings?.convertCurrency}
                  onChange={() => switchConvert()}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Typography tag={"span"} className="font-medium text-onSurfaceMedium">
                {"Trailing zeros"}
              </Typography>
              <div className="text-xs font-medium flex flex-row space-x-2 text-onSurfaceHigh">
                <input
                  className={"mr-2  text-onSurfacePrimaryMedium"}
                  type={"checkbox"}
                  style={{ borderRadius: "25%" }}
                  checked={parsedSettings?.trailingEnabled}
                  onChange={() =>
                    setSetting(
                      "trailingEnabled",
                      !parsedSettings.trailingEnabled,
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
