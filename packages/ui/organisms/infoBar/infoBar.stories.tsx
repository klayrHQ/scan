import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBar } from "./infoBar";
import Status from "../../atoms/status/status";
import {Button} from "../../atoms";
import {Cog6ToothIcon as CogIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "../../atoms/tooltip/tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/InfoBar",
  component: InfoBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    menu: {control: "object"},
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
const Template: ComponentStory<typeof InfoBar> = (args) => <InfoBar {...args}/>;

export const Primary: ComponentMeta<typeof InfoBar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  infoItemsLeft: [
    <Status status={"connected"} />,
  ],
  infoItemsRight: [
    <Tooltip
      label="Settings"
      placement={"bottom"}
      offset={[0,10]}
    >
      <Button
        onClick={() => console.log("themes")}
        className="cursor-pointer flex-shrink-0 rounded-full border-0"
        label={<CogIcon
          className="w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow"/>}
      />
    </Tooltip>,
  ],
};

export const InfoBarMockup: ComponentStory<typeof InfoBar> = () => {
  return (
    <InfoBar
      infoItemsLeft={[
        <Status status={"connected"} />,
      ]}
      infoItemsRight={[
        <Tooltip
          label="Settings"
          placement={"bottom"}
          offset={[0,10]}
        >
          <CogIcon
            onClick={() => console.log("themes")}
            className="w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0"/>
        </Tooltip>,
      ]}
    />
  );
}