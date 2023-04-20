import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Account } from "./account";
import {compactString} from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Account",
  component: Account,
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
      summary: {
        address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
        balance: 6996629,
        username: "test",
      },
      dpos: {
        delegate: {
          status: "non-eligible",
          username: "test",
          rank: "1977",
        }
      }
    }
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const Primary: ComponentMeta<typeof Account> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const CopiedItem: ComponentMeta<typeof Account> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CopiedItem.args = {
  copyNoteText: "You have copied some text",
};