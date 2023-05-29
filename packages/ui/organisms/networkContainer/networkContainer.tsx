import React, {FC} from "react";
import { Paper} from "../../atoms/paper/paper";
import { NetworkEndpoint } from "@moosty/lisk-service-provider"
import { NetworkType, statusType} from "../../types";
import Status from "../../atoms/status/status";

interface NetworkContainerProps {
  parsedSettings?: any
  setSetting: (handle: string, newState: any) => void
  serviceClient: any
  status: statusType
  networks: Array<NetworkType>
  emptyCustomNetwork: NetworkType
}

export const NetworkContainer: FC<NetworkContainerProps> = ({
  parsedSettings,
  setSetting,
  serviceClient,
  status,
  networks,
  emptyCustomNetwork,
}) => {

  const changeNetwork = (newNetwork?: NetworkType) => {
    serviceClient?.connection?.disconnect()
    serviceClient?.connection?.off()
    setSetting("network", newNetwork)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4">
        <h2 className={"text-onSurfaceHigh text-lg md:text-4xl font-bold"}>
          Select a Network!
        </h2>
        <span>Select one of the Lisk networks or add your custom network.</span>
      </Paper>
      <Paper surface={1} className="p-4 flex flex-row space-x-2">
        <Status status={status} />
        {parsedSettings?.networks?.communityId} (
        {parsedSettings?.networks?.network})
      </Paper>
      <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4">
        <span className="font-medium">Network (COMING SOON)</span>
        <select
          value={parsedSettings?.networks?.id}
          className="w-full rounded text-onSurfaceMedium border-none text-base bg-surface-3"
          onChange={(e) => {
            if (e.target.value !== "custom") {
              // changeNetwork(networks.find((n) => n.id === e.target.value))
            } else {
              // changeNetwork(emptyCustomNetwork)
            }
          }}
        >
          {networks.map((network) => (
            <option key={network.id} value={network.id}>
              {network.communityId} ({network.network})
            </option>
          ))}
        </select>
      </Paper>
      {parsedSettings?.networks?.id === "custom" && (
        <Paper surface={1} className={"p-4"}>
          <div className="relative">
            <input
              value={
                parsedSettings?.networks?.endpoints?.find(
                  (e: NetworkEndpoint) => e.type === "serviceRPC",
                )?.host
              }
              onChange={(e) =>
                changeNetwork({
                  ...emptyCustomNetwork,
                  endpoint: [
                    {
                      host: e.target.value,
                      type: "serviceRPC",
                    },
                  ],
                })
              }
              className={[
                "block w-full px-4 py-2 rounded text-base",
                "leading-5 bg-surface-3 text-onSurfaceLow placeholder-onSurfaceLow focus:outline-none",
                "focus:bg-surface-1 focus:border-surface-2 focus:ring-surface-3",
                "focus:text-onSurfaceLight",
              ].join(" ")}
              placeholder="ws://localhost:9901 lisk-service host"
            />
            <div
              className={[
                "absolute inset-y-0 right-5 top-2 flex",
                "items-center pointer-events-none",
                " rounded-full",
                "border-2 border-t-2 border-t-white",
                "border-surface h-5 w-5",
              ].join(" ")}
            >
              <Status status={status} />
            </div>
          </div>
        </Paper>
      )}
    </div>
  )
}
