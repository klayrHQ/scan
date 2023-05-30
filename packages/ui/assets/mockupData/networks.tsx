import {NetworkType} from "../../types";

export const emptyCustomNetwork: NetworkType = {
  id: "custom",
  endpoint: [
    {
      host: "wss://",
      type: "serviceRPC",
    },
    {
      host: "https://",
      type: "serviceHTTP",
    },
  ],
  network: "network",
  communityId: "custom",
}

export const networks: NetworkType[] = [
  {
    default: true,
    id: "lisk",
    endpoint: [
      {
        host: "test",
        type: "serviceRPC",
      },
      {
        host: "test",
        type: "serviceHTTP",
      },
    ],
    network: "test",
    communityId: "test",
  },
  // @ts-ignore
  emptyCustomNetwork,
]