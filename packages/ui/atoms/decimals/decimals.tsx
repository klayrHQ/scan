import React, { FC } from "react"
import { Button } from "../button/button";
import { Currency } from "../currency/currency";

interface DecimalsProps {
  minMax: { min: number; max: number },
  switchConvert: () => void
  parsedSettings?: any,
  setSetting: (handle: string, newState: any) => void
}

export const  Decimals: FC<DecimalsProps> = ({
  minMax,
  switchConvert,
  parsedSettings,
  setSetting,
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
              <span className="font-medium text-onSurfaceMedium">
                Example:{" "}
              </span>
              <span className="text-xl">
                <Currency classes={{
                  sign: "text-onSurfaceLow font-medium",
                  symbol: "text-onSurfaceLow font-medium",
                  separator: "text-onSurfacePrimaryMedium",
                  number: "text-onSurfacePrimaryMedium font-medium",
                  decimals: "text-onSurfacePrimaryMedium",
                }} number={"123457890100"} />
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row text-left md:align-center md:items-center  justify-between ">
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-onSurfaceMedium">
                Mantissa size
              </span>
              <div className="text-xs items-center text-onInfoVariant font-medium flex flex-row space-x-2">
                <Button
                  className={
                    "font-bold cursor-pointer pt-0.5 items-center align-middle select-none bg-surface-5 rounded-full w-5 h-5 text-onSurfacePrimaryMedium"
                  }
                  onClick={() =>
                    parsedSettings?.decimals > (minMax?.min || 0) &&
                    setSetting("decimals", parsedSettings.decimals - 1)
                  }
                  label={"-"}
                />
                <span className="text-center text-onSurfaceHigh">
                  {parsedSettings?.decimals}
                </span>
                <Button
                  label={"+"}
                  className={
                    "font-bold cursor-pointer pt-0.5 items-center align-middle select-none bg-surface-5 rounded-full w-5 h-5 text-onSurfacePrimaryMedium"
                  }
                  onClick={() =>
                    parsedSettings?.decimals < (minMax?.max || 8) &&
                    setSetting("decimals", parsedSettings.decimals + 1)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-onSurfaceMedium">
                Formatting
              </span>
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
                Symbol
                <input
                  className={"mr-2 text-onSurfacePrimaryMedium"}
                  type={"checkbox"}
                  style={{ borderRadius: "25%" }}
                  checked={parsedSettings?.signEnabled}
                  onChange={() =>
                    setSetting("signEnabled", !parsedSettings?.signEnabled)
                  }
                />
                &nbsp; Sign
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-onSurfaceMedium">
                Decimal separator
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
                  Point
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
                  Comma
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-onSurfaceMedium">
                Convert LSK
              </span>
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
              <span className="font-medium text-onSurfaceMedium">
                Trailing zeros
              </span>
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
