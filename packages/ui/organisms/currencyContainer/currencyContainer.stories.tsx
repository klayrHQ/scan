import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CurrencyContainer } from "./currencyContainer";
import {CurrencyType} from "../../types";

export default {
  title: "Organisms/Settings/CurrencyContainer",
  component: CurrencyContainer,
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

const Template: ComponentStory<typeof CurrencyContainer> = (args) => {
  return(
    <CurrencyContainer {...args}/>
  )
};

export const Primary: ComponentMeta<typeof CurrencyContainer> = Template.bind({});
Primary.args = {
  categories: [
    {
      category: "1",
      currencies: [
        {
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
      ],
    },
  ],
  setSetting: (handle: string, newState: any) => console.log(handle),
  setSelectedCurrency: (currency: CurrencyType) => console.log(currency),
  switchConvert: () => console.log("switchConvert"),
  minMax: { min: 1, max: 100000 },
  closeSettingsModal: () => console.log("close modal"),
};