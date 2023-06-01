import React, { FC } from "react"
import { HotKey } from "../hotkey/hotkey";
import {Typography} from "../typography/typography";

interface HotKeyComboProps {
  keys: Array<string>
  label: string
}

export const HotKeyCombo: FC<HotKeyComboProps> = ({
  keys,
  label,
}) => (
  <div className="flex flex-col space-y-2">
    <Typography tag={"h3"} size={"Heading6"} className={"font-medium text-onSurfaceHigh"}>{label}</Typography>
    <div className="flex flex-row space-x-2 items-center w-full group">
      {keys
        .map((key, i) => {
          const elements = []
          if (i > 0) {
            elements.push(
              <span
                key={`${i}-${key}-key`}
                className="text-center font-medium text-onSurfaceLow"
              >
                +
              </span>,
            )
          }
          elements.push(<HotKey key={`key-${key}-${i}`} hotKey={key} />)
          return elements
        })
        .flat()}
    </div>
  </div>
)
