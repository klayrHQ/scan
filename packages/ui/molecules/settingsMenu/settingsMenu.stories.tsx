import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SettingsMenu } from "./settingsMenu";
import {ThemesContainer} from "../../organisms/themesContainer/themesContainer";
import {ThemeType} from "../../types";

export default {
  title: "Molecules/SettingsMenu",
  component: SettingsMenu,
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
    closeSettingsModal: () => console.log("close modal"),
    settingsModalState: {open: true, view: "theme", mobileOpen: false},
    themes: [
      {
        bg: {
          s: 100,
          l: 50,
        },
        handle: "test",
        name: "test",
        primary: 123,
        secondary: 456,
        type: "test",
      }
    ],
    selectedTheme: {
      bg: {
        s: 100,
        l: 50,
      },
      handle: "test",
      name: "test",
      primary: 123,
      secondary: 456,
      type: "test",
    },
    changeSettingsView: (view: string) => console.log(view)
  }
} as any;

const Template: ComponentStory<typeof SettingsMenu> = (args) => {
  return(
    <SettingsMenu {...args} />
  )
};

export const Primary: ComponentMeta<typeof SettingsMenu> = Template.bind({});
Primary.args = {
  views: [
    {
      link: "#",
      label: "Theme",
    },
  ]
};