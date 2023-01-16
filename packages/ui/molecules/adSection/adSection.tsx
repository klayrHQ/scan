import React from "react"

interface AdSectionProps {
  ads: [{
    content: any
    className: string
  }]
}

export const AdSection = ({
  ads,
}: AdSectionProps) => {

  return (
    <div className="flex text-onSurfaceHigh px-4 py-8 bg-surface-2">
      <span className="flex-row">
        {ads && ads.map((ad) => {
          return (
            <span className={ad.className}>
              {ad.content}
            </span>
          )
        })}
      </span>
    </div>
  )
}
