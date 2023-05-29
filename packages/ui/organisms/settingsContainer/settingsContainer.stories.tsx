import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SettingsContainer } from "./settingsContainer";
import {ThemesContainer} from "../themesContainer/themesContainer";
import {ThemeType} from "../../types";

export default {
  title: "Organisms/SettingsContainer",
  component: SettingsContainer,
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
    settingsModalState: {open: true, view: "Theme", mobileOpen: false},
    closeSettingsModal: () => console.log("close modal"),
    themes: [
      {
        bg: {
          s: 100,
          l: 50,
        },
        handle: "Theme",
        name: "Theme",
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
      handle: "Theme",
      name: "Theme",
      primary: 123,
      secondary: 456,
      type: "test",
    },
    changeSettingsView: (view: string) => console.log(view)
  }
} as any;

const Template: ComponentStory<typeof SettingsContainer> = (args) => {
  return(
    <SettingsContainer {...args} />
  )
};

export const Primary: ComponentMeta<typeof SettingsContainer> = Template.bind({});
Primary.args = {
  views: [
    {
      link: "Theme",
      label: "Theme",
      view: <ThemesContainer
        themes={[
          {
            bg: {
              s: 100,
              l: 50,
            },
            handle: "Theme",
            name: "Theme",
            primary: 123,
            secondary: 456,
            type: "test",
          }
        ]}
        selectedTheme={{
          bg: {
            s: 100,
            l: 50,
          },
          handle: "Theme",
          name: "Theme",
          primary: 123,
          secondary: 456,
          type: "test",
        }}
        updateProperty={(property: string, newValue: string | number) => console.log(property)}
        switchTheme={(theme: ThemeType) => console.log(theme)}
        setSetting={(handle: string, newState: any) => console.log(handle)}
      />,
    },
  ],
};