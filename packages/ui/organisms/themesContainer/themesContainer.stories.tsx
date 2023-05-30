import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemesContainer } from "./themesContainer";
import {ThemeType} from "../../types";

export default {
  title: "Organisms/Settings/ThemesContainer",
  component: ThemesContainer,
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
    setSetting: (handle: string, newState: string) => console.log(handle),
    updateProperty: (property: string, newValue: string | number) => console.log(property),
    switchTheme: (theme: ThemeType) => console.log(theme),
  }
} as any;

const Template: ComponentStory<typeof ThemesContainer> = (args) => {
  return(
    <ThemesContainer {...args} />
  )
};

export const Primary: ComponentMeta<typeof ThemesContainer> = Template.bind({});
Primary.args = {

};