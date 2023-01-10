import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountDetails } from "./accountDetails";
import {compactString} from "../../assets/utils";

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
    account: {
      summary: {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        balance: "6996629",
        username: "test",
      },
      dpos: {
        delegate: {
          status: "non-eligible",
          username: "test",
          rank: 1977,
          registrationHeight: 123,
        }
      },
      token: {
        balance: "6996629"
      },
      sequence: {
        nonce: "adsfg"
      },
    },
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

export const CopiedItem: ComponentMeta<typeof AccountDetails> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CopiedItem.args = {
  copyNoteText: "You have copied some text",
};
