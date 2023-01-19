import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MobileMenu } from "./mobileMenu";
import {compactString} from "../../assets/utils";

export default {
  title: "Organisms/MobileMenu",
  component: MobileMenu,
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
    compactString: compactString,
    search: {
      results: {
        results: [
          {
            cols: [{value: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke"}],
            type: "account",
            id: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
            username: "test",
          },
          {
            cols: [{value: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294"}],
            type: "account",
            id: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
            username: "moosty",
          },
          {
            cols: [{value: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g"}],
            type: "account",
            id: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
          },
        ]
      },
      setSearch: (searchInput: string) => console.log(searchInput),
      searching: false,
    },
  }
} as any;

const Template: ComponentStory<typeof MobileMenu> = (args) => <MobileMenu {...args} />;

export const Primary: ComponentMeta<typeof MobileMenu> = Template.bind({});
Primary.args = {
  hideOnLarge: false
};
