import React from "react";

interface StatusProps {
  status: "connected" | "warning" | "error"
}

export const Status = ({
  status = "error",
}: StatusProps) => {

  return (
    <span
      className={[
        status === "connected"
          ? "bg-success"
          : status === "warning"
            ? "bg-warning"
            : "bg-error",
        "rounded-full w-4 h-4 flex ",
      ].join(" ")}
    />
  )
}
export default Status
