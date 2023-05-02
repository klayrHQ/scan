import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../..";
import {Popover} from "./popover";

const children = (
  <div className="text-left">
    <ul className={"list-none pl-0 m-0 flex flex-col gap-4 font-body"}>
      <li>NFTS & COLLECTIONS</li>
      <li>FAVOURITES</li>
      <li>NOTIFICATIONS</li>
      <li>ACCOUNT SETTINGS</li>
      <li>TRANSACTIONS</li>
      <Button label={"PREMIUM?"}>
        <span className="bg-eerie text-primary p-1 rounded-md font-bold">
          UPGRADE
        </span>
      </Button>
      <li>LOGOUT</li>
    </ul>
  </div>
);

export default {
  title: "Atoms/Utils/Popover",
  component: Popover,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary", "search"],
    },
    padding: {
      control: "text",
    },
  },
  parameters: {
    status: {
      type: ["released"],
    },
  },
  args: {
    children: children,
    padding: "4",
  },
} as any;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Primary: ComponentMeta<typeof Popover> = Template.bind({});
Primary.args = {
  button: <Button label={"Open Popover"} />,
  type: "primary",
};