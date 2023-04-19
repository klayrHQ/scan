import React from "react";

interface StatusProps {
  status: "connected" | "warning" | "error" | "finalized"
}

export const Status = ({
  status = "error",
}: StatusProps) => {

  return (
    <span
      className={[
        status === "connected" || status === "finalized"
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
