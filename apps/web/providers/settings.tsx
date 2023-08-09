"use client"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import {ThemesContainer} from "ui/organisms/themesContainer/themesContainer";
import {CurrencyType, ThemeType} from "ui/types";
import {HotKeysContainer} from "ui/organisms/hotKeysContainer/hotKeysContainer";
import {hotKeysCombos} from "ui/assets/mockupData/hotkeys";
import {CurrencyContainer} from "ui/organisms/currencyContainer/currencyContainer";
import flags from "ui/assets/icons/currencyFlags";
import {NetworkContainer} from "ui/organisms/networkContainer/networkContainer";
import {emptyCustomNetwork, networks} from "ui/assets/mockupData/networks";
import {applySettings, settings} from "./constants";
import {SettingsModal} from "../components/settingsModal";

export interface SettingType {
  handle: string
  label: string
  icon?: any
  optionType: "string" | "number" | "json" | "boolean"
  limits?: {
    min: number
    max: number
  }
  value?: any
  apply?: boolean
}

export interface SettingsItemType {
  label: string
  subLabel: string
  link: string
  icon?: any
  hideOnMobile?: boolean
  view: JSX.Element
}

interface SettingsContextProps {
  parsedSettings: any
  views: SettingsItemType[]
  settings: SettingType[]
  getSetting(handle: string): any
  setSetting(handle: string, newState: any): void
  openSettingsModal(view: string, arg?: any): void
  changeSettingsView(view: string): void
  closeSettingsModal(): void
  settingsModalState: {
    open: boolean
    view: string
    mobileOpen: boolean
    args?: any
  }
  jumpSettingsMenu(direction: "up" | "down"): void
  settingsState: any
}

export const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps,
)

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }: {children: any}) => {
  const [settingsState, updateSettingsState] = useState<SettingType[]>()
  const [parsedSettings, updateParsedSettings] = useState<any>({})
  const [settingsModalState, setSettingsModalState] = useState<{
    open: boolean
    view?: string
    mobileOpen?: boolean
    args?: any
  }>({
    open: false,
    view: "",
    mobileOpen: true,
  })
  const views = [
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
]

  const getSetting = (handle: string) => {
    return settingsState?.find((setting) => setting.handle === handle)
  }
  const setSetting = (handle: string, newState: any) => {
    if (settingsState) {
      const newSettings = [...settingsState]
      const foundSetting = newSettings?.findIndex(
        (setting) => setting.handle === handle,
      )
      if (foundSetting > -1) {
        newSettings[foundSetting].value = newState
        const applySetting = applySettings[handle]
        applySetting && applySetting(newSettings[foundSetting])
        updateSettingsState([...newSettings])
        saveSettings([...newSettings])
      } else {
        const newSetting = settings.find((setting) => setting.handle === handle)
        if (newSetting) {
          newSetting.value = newState
          updateParsedSettings([...settingsState, newSetting])
          saveSettings([...settingsState, newSetting])
        }
      }
    }
  }

  const jumpSettingsMenu = (direction: "up" | "down") => {
    const currentViewIndex = views.findIndex(
      (setting) => setting.link === settingsModalState?.view,
    )
    const newIndex =
      direction === "up" ? currentViewIndex - 1 : currentViewIndex + 1
    newIndex > -1 &&
      newIndex < views.length &&
      setSettingsModalState({
        open: true,
        view: views[newIndex].link,
        mobileOpen: true,
      })
  }

  const getSavedSettings = () => {
    if (typeof window === "undefined") return
    const storedSettings = window.localStorage.getItem("settings")
    const parsedStoredSettings =
      storedSettings &&
      JSON.parse(decodeURIComponent(escape(window.atob(storedSettings))))
    if (storedSettings) {
      const mixSettings = settings?.map((setting) => {
        const foundStoredSetting = parsedStoredSettings.find(
          (s: SettingType) => s.handle === setting.handle,
        )
        if (foundStoredSetting?.handle === "networks") {
          return {...setting}
        }
        if (foundStoredSetting) {
          return { ...foundStoredSetting }
        } else {
          return { ...setting }
        }
      })
      updateSettingsState(mixSettings)
      saveSettings(mixSettings)

    } else {
      updateSettingsState(settings)
      saveSettings(settings)
    }
  }

  const saveSettings = (store: SettingType[]) =>
    typeof window !== "undefined" &&
    store &&
    window.localStorage.setItem(
      "settings",
      window.btoa(unescape(encodeURIComponent(JSON.stringify(store)))),
    )

  const openSettingsModal = (view: string, args?: any) =>
    setSettingsModalState({ open: true, view, mobileOpen: true, args })

  const changeSettingsView = (view: string) =>
    setSettingsModalState({
      open: true,
      view,
      mobileOpen: false,
      args: settingsModalState?.args,
    })

  const closeSettingsModal = () =>
    setSettingsModalState({ open: false, mobileOpen: true })
  const parseSettings = () => {
    if (settingsState) {
      const newParsedSettings: any = {}
      settingsState.map((setting) => {
        newParsedSettings[setting.handle] = setting.value
      })
      updateParsedSettings(newParsedSettings)
    }
  }

  useEffect(getSavedSettings, [])
  useEffect(parseSettings, [settingsState])
  return (
    <SettingsContext.Provider
      value={useMemo(
        () =>
          ({
            views,
            settings,
            getSetting,
            setSetting,
            openSettingsModal,
            changeSettingsView,
            closeSettingsModal,
            settingsModalState,
            jumpSettingsMenu,
            settingsState,
            parsedSettings,
          } as SettingsContextProps),
        [
          views,
          settings,
          getSetting,
          setSetting,
          openSettingsModal,
          changeSettingsView,
          closeSettingsModal,
          settingsModalState,
          jumpSettingsMenu,
          settingsState,
          parsedSettings,
        ],
      )}
    >
      {children}
    </SettingsContext.Provider>
  )
}
