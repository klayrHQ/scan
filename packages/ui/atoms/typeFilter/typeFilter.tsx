import React, { FC, useState } from "react"

export const TypeFilter: FC<{
  className?: string,
}> = ({className}) => {
  const [txType, setTxType] = useState<string>()

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-left gap-5">
        <div>
          <button
            className={[
              txType === "token:transfer" && "bg-primary",
              "md:mr-2 px-3 py-2 rounded text-sm font-medium cursor-pointer",
              "hover:bg-surface-3 text-onSurfaceHigh hover:text-onPrimary",
            ].join(" ")}
            onClick={() => setTxType("token:transfer")}
          >
            Token | transfer
          </button>
        </div>
      </div>
    </div>
  )
}
