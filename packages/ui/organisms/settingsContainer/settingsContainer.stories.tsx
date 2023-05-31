import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SettingsContainer } from "./settingsContainer";
import {ThemesContainer} from "../themesContainer/themesContainer";
import {CurrencyType, ThemeType} from "../../types";
import {Modal} from "../../atoms/modal/modal";
import {NetworkContainer} from "../networkContainer/networkContainer";
import {useLiskService} from "@moosty/lisk-service-provider";
import {emptyCustomNetwork, networks} from "../../assets/mockupData/networks";
import {HotKeysContainer} from "../hotKeysContainer/hotKeysContainer";
import {hotKeysCombos} from "../../assets/mockupData/hotkeys";
import {CurrencyContainer} from "../currencyContainer/currencyContainer";
import flags from "../../assets/icons/currencyFlags";

export default {
  title: "Organisms/Settings/SettingsContainer",
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
  }
} as any;

const Template: ComponentStory<typeof SettingsContainer> = (args) => {
  const [open, setOpen] = useState(false)
  const [settingsModalState, setSettingsModalState] = useState({open: true, view: "Theme", mobileOpen: false})

  return(
    <Modal className={"w-full max-w-app"} isOpen={open} setIsOpen={setOpen} type={"transparent"}>
      <SettingsContainer
        {...args}
        settingsModalState={settingsModalState}
        changeSettingsView={(view) => setSettingsModalState({...settingsModalState, view: view})}
        closeSettingsModal={() => setOpen(false)}
      />
    </Modal>
)
};

export const Primary: ComponentMeta<typeof SettingsContainer> = Template.bind({});
Primary.args = {
  parsedSettings: {
    decimals: 3,
  },
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
    {
      link: "Hotkeys",
      label: "Hotkeys",
      view: <HotKeysContainer hotKeyGroups={hotKeysCombos} />,
    },
    {
      link: "Currency",
      label: "Currency",
      view: <CurrencyContainer
        flags={flags}
        setSetting={(handle: string, newState: any) => console.log(handle)}
        minMax={{ min: 1, max: 100000 }}
        switchConvert={() => console.log("switchConvert")}
        closeSettingsModal={() => console.log("close modal")}
        setSelectedCurrency={(currency: CurrencyType) => console.log(currency)}
        categories={[
          {
            category: "1",
            currencies: [
              {
                id: 0,
                symbol: "USD",
                sign: "$",
                name: "United States Dollar",
                default: {
                  sign: true,
                  symbol: true,
                  fractions: 2,
                },
              },
              {
                id: 0,
                symbol: "EUR",
                sign: "€",
                name: "Euro",
                default: {
                  sign: true,
                  symbol: true,
                  fractions: 2,
                },
              },
            ],
          },
        ]}
      />,
    },
    {
      link: "Network",
      label: "Network",
      view: <NetworkContainer
        status={"connected"}
        setSetting={(handle: string, newState: any) => console.log(handle)}
        networks={networks}
        emptyCustomNetwork={emptyCustomNetwork}
      />,
    },
  ],
};