import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Transactions } from "./transactions";
import { compactString } from "../../assets/utils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/Transactions",
  component: Transactions,
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
  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Transactions> = (args) => {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false)

  return(
    <Transactions {...args} openFilterModal={openFilterModal} setOpenFilterModal={setOpenFilterModal} />
  )
};

export const Primary: ComponentMeta<typeof Transactions> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};