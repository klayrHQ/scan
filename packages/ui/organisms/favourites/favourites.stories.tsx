import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Favourites } from "./favourites";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/Favourites",
  component: Favourites,
  argTypes: {
    className: { control: "text" },
  },
  parameters: {
    status: {
      type: [
        "building",
      ],
    },
  },
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Favourites> = (args) => <Favourites {...args} />;

export const Primary: ComponentMeta<typeof Favourites> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  favClassName: "bg-blue-500",
  favourites: [
    {
      address: "lskg9uk7z5jo4zt6jagxkuc8z7kqzf7cpgbecunke",
      username: "test",
    },
    {
      address: "lsk33wnaw79jvxmsp8dzm22ymvuuvrjanf6jcu294",
      username: "moosty",
    },
    {
      address: "lskrvsrdo7m64mh92vvekcv55hk4de93ud4otum8g",
    },
  ]

};