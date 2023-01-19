import React from "react";
import { NetworkEndpoint, useLiskService } from "@moosty/lisk-service-provider"

interface ConnectedProps {
  parsedSettings: {
    networks: any
  }
}

export const Connected = ({
  parsedSettings
}: ConnectedProps) => {
  const { serviceClient } = useLiskService()

  return (
    <span
      className={[
        parsedSettings?.networks?.endpoint
          .find((e: NetworkEndpoint) => e.type === "serviceRPC")
          ?.host?.includes(serviceClient?.connection?.io?.opts?.hostname) &&
        serviceClient?.isConnected()
          ? "bg-success"
          : parsedSettings?.networks?.endpoint
            .find((e: NetworkEndpoint) => e.type === "serviceRPC")
            ?.host?.includes(serviceClient?.connection?.io?.opts?.hostname)
            ? "bg-warning"
            : "bg-error",
        "rounded-full w-4 h-4 flex ",
      ].join(" ")}
    />
  )
}
