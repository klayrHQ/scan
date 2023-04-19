import React from "react"
import { Paper} from "../../atoms/paper/paper";
import {Typography} from "../../atoms/typography/typography";

interface KeyValueRowProps {
  label?: any | string
  value?: any | string
  className?: string
  classNameValue?: string
  icon?: any | string
  color?: "light" | "dark"
  compactOnMobile?: boolean
  surface?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  compactString: Function
}

export const KeyValueRow = ({
  compactOnMobile,
  label,
  value,
  className,
  classNameValue,
  icon,
  color,
  surface = 0,
  compactString,
}: KeyValueRowProps) => (
  <Paper
    surface={surface}
    className={[
      "flex flex-col md:flex-tableRow w-full mb-2 md:mb-1",
      "items-center rounded text-lg",
      className ? className : "",
    ].join(" ")}
  >
    <div className="flex md:flex-grow flex-col md:flex-row justify-between w-full">
      <Typography tag={"span"} className="capitalize font-medium  text-onSurfaceMedium md:mr-2 md:capitalize ">
        {label}
      </Typography>
      {/*Normal Value Version*/}
      <div className={`hidden md:block font-medium text-onSurfaceHigh ${classNameValue}`}>
        <Typography tag={"span"}>{value}</Typography>
      </div>
      {/*Compact Value Version*/}
      <div className={`md:hidden flex-row flex justify-between `}>
        <Typography tag={"span"} className={` ${classNameValue} `}>
          {compactOnMobile ? compactString(value, 35) : value}
        </Typography>
        <div style={{ width: 40 }}>{icon}</div>
      </div>
    </div>
    <div className="hidden md:block" style={{ width: 30 }}>
      {icon}
    </div>
  </Paper>
)
