import React, { FC } from "react"
import { HotKeyCombo } from "../../atoms/hotKeyCombo/hotKeyCombo";
import {Typography} from "../../atoms/typography/typography";

interface HotKeyGroupProps {
  title: string
  keys: Array<{label: string, keys: Array<string>}>
}

export const HotKeyGroup: FC<HotKeyGroupProps> = ({
  title,
  keys
}) => (
  <div className="flex flex-col space-y-4 w-1/3">
    <Typography tag={"h2"} size={"Heading5"} className={"font-bold text-xl text-onPrimaryMedium"}>{title}</Typography>
    {keys.map(({ label, keys }) => (
      <HotKeyCombo key={label} label={label} keys={keys} />
    ))}
  </div>
)
