import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CurrencyComponent } from "./currencyComponent";

export default {
  title: "Atoms/Currency/CurrencyComponent",
  component: CurrencyComponent,
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

  }
} as any;

const Template: ComponentStory<typeof CurrencyComponent> = (args) => {
  return(
    <CurrencyComponent {...args}/>
  )
};

export const Primary: ComponentMeta<typeof CurrencyComponent> = Template.bind({});
Primary.args = {
  currency: {
    id: 0,
    symbol: "DOL",
    sign: "$",
    name: "Dollar",
    flag: "USA",
    default: {
      sign: true,
      symbol: true,
      fractions: 2,
    },
  },
  selected: true,
  onClick: () => console.log("clicked")
};