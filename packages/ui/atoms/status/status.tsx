import React from "react";
import {statusType} from "../../types";

interface StatusProps {
  status: statusType
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
        "rounded-full w-4 h-4 flex aspect-square",
      ].join(" ")}
    />
  )
}
export default Status
