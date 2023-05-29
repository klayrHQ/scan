import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NetworkContainer } from "./networkContainer";
import {NetworkType} from "../../types";
import * as net from "net";
import {useLiskService} from "@moosty/lisk-service-provider";

const emptyCustomNetwork: NetworkType = {
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

const networks: NetworkType[] = [
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

export default {
  title: "Organisms/NetworkContainer",
  component: NetworkContainer,
  argTypes: {
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    emptyCustomNetwork: emptyCustomNetwork,
    networks: networks,
    setSetting: (handle: string, newState: string) => console.log(handle),
  }
} as any;

const Template: ComponentStory<typeof NetworkContainer> = (args) => {
  const {serviceClient} = useLiskService()

  return(
    <NetworkContainer {...args} serviceClient={serviceClient} />
  )
};

export const Primary: ComponentMeta<typeof NetworkContainer> = Template.bind({});
Primary.args = {
  status: "connected",
};