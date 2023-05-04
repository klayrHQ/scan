import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccountDetailsOld } from "./accountDetailsOld";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "organisms/AccountDetailsOld",
  component: AccountDetailsOld,
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
    accountDetails: {
      address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
      hexAddress: "fb6147017c624135733f0d203781d4a83ce193e6",
      balance: "6996629",
      username: "test",
      status: "non-eligible",
      isBanned: false,
      nonce: "adsfg",
      sent: 12,
      received: 12,
    },
    compactString: compactString,
    copyNoteText: "",
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccountDetailsOld> = (args) => <AccountDetailsOld {...args} />;

export const Primary: ComponentMeta<typeof AccountDetailsOld> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const CopiedItem: ComponentMeta<typeof AccountDetailsOld> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CopiedItem.args = {
  copyNoteText: "You have copied some text",
};
