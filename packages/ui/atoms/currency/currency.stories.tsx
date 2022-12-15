import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Currency } from "./currency";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Currency",
  component: Currency,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    primary: { control: "boolean", defaultValue: false },
    fullWidth: { control: "boolean", defaultValue: false },
    active: { control: "boolean", defaultValue: false },
    hover: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false},
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    currencies: [
      {
        sign: "Ⱡ",
        symbol: "LSK",
      },
      {
        sign: "€",
        symbol: "EUR",
      },
      {
        sign: "$",
        symbol: "USD",
      }
    ],
    parsedSettings: {
      signEnabled: true,
      symbolEnabled: true,
    }
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Currency> = (args) => <Currency {...args} />;

export const Primary: ComponentMeta<typeof Currency> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  number: "100000",
  decimals: "123",
};
