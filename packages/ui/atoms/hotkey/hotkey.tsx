import React, { FC } from "react"

interface HotKeyProps {
  hotKey: string | any
  isMacOs?: boolean
}

export const HotKey: FC<HotKeyProps> = ({
  hotKey,
  isMacOs,
}) => {
  return (
    <div
      className={[
        "uppercase shadow-key peer",
        "peer-hover:shadow hover:shadow transform peer-hover:translate-y-1 hover:translate-y-1",
        "min-w-12 cursor-pointer rounded text-white",
        "bg-gray-600 px-3 py-1 font-bold",
      ].join(" ")}
    >
      {hotKey === "ctrl" ? (isMacOs ? "cmd" : "ctrl") : hotKey}
    </div>
  )
}
