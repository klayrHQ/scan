import React from "react"

interface IconButtonProps {
  onClick?: any
  className?: string
  children?: any
}

export const IconButton = ({
  children,
  onClick,
  className = ""
}: IconButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className={[
      "ml-2 mx-auto",
      "inline-flex items-center",
      "border border-transparent rounded-full",
      "shadow-sm text-textPlaceHolder",
      "bg-transparent hover:bg-surfaceDark focus:outline-none",
      className,
    ].join(" ")}
  >
    {children}
  </button>
)
