import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterContainer } from "./filterContainer";
import { compactString } from "../../assets/utils";
import {Modal} from "../../atoms/modal/modal";
import {XMarkIcon} from "@heroicons/react/24/solid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/FilterContainer",
  component: FilterContainer,
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

  }
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterContainer> = (args) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Modal
      isOpen={open}
      setIsOpen={setOpen}
      closeButton={
        <XMarkIcon
          className="md:hidden text-onSurfaceHigh"
        />
      }
    >
      <FilterContainer {...args} />
    </Modal>
  )
};

export const Primary: ComponentMeta<typeof FilterContainer> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};