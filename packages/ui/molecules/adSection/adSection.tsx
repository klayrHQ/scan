import React from "react"

interface AdSectionProps {
  ads: {
    content: any
    className: string
  }[]
}

export const AdSection = ({
  ads,
}: AdSectionProps) => {

  return (
    <div className="w-full text-onSurfaceHigh p-4 bg-surface-2">
      <div className="flex w-full flex-row gap-4 flex-wrap justify-between">
        {ads && ads.map((ad) => {
          return (
            <div className={[ad.className].join(" ")}>
              {ad.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
