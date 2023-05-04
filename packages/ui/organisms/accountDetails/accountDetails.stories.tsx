import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountDetails } from "./accountDetails";
import {compactString} from "../../assets/utils";
import {account} from "../../assets/mockupData/accountData";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/AccountDetails",
  component: AccountDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
    account: account,
    compactString: compactString,
    copyNoteText: "",
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccountDetails> = (args) => <AccountDetails {...args} />;

export const Primary: ComponentMeta<typeof AccountDetails> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
