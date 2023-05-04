import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccountOld } from "./account";
import { compactString } from "../../assets/utils";
import { accountDetails, accountHeader } from "../../assets/mockupData/accountData";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/AccountOld",
  component: AccountOld,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
  args: {
    compactString: compactString,
    copyNoteText: "",
    favourites: [
      {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        username: "test",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
        username: "moosty",
        balance: {number: "1000", decimals: "123"}
      },
      {
        address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
        balance: {number: "1000", decimals: "123"}
      },
    ],
    account: {
      accountDetails: accountDetails,
      accountHeader: accountHeader,
    },
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccountOld> = (args) => <AccountOld {...args} />;

export const Primary: ComponentMeta<typeof AccountOld> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const CopiedItem: ComponentMeta<typeof AccountOld> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CopiedItem.args = {
  copyNoteText: "You have copied some text",
};