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
import {SettingsModal} from "../components/settings/settingsModal";
import {categories} from "./currency/currencies";

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

export type viewTypes = "currency" | "network" | "hotkeys" | "menu"

interface SettingsContextProps {
  parsedSettings: any
  settings: SettingType[]
  getSetting(handle: string): any
  setSetting(handle: string, newState: any): void
  settingsState: any
  open: boolean
  setOpen: (open: boolean) => void
  views: viewTypes[]
  view: viewTypes
  setView: (view: viewTypes) => void
}

export const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps,
)

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }: {children: any}) => {
  const [settingsState, updateSettingsState] = useState<SettingType[]>()
  const [parsedSettings, updateParsedSettings] = useState<any>({})
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<viewTypes>("currency")

  const views: viewTypes[] = ["currency", "network", "hotkeys"]

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
      value={
        useMemo(
        () => ({
          settings,
          getSetting,
          setSetting,
          settingsState,
          parsedSettings,
          open,
          setOpen,
          views,
          view,
          setView,
        }),
        [
          settings,
          getSetting,
          setSetting,
          settingsState,
          parsedSettings,
          open,
          setOpen,
          views,
          view,
          setView,
        ],
        )
    }
    >
      {children}
    </SettingsContext.Provider>
  )
}
