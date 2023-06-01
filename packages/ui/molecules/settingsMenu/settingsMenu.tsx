import React, {FC} from "react";
import { Paper} from "../../atoms/paper/paper";
import { CurrencyType, SettingsItemType } from "../../types"
import {Icon} from "../../atoms/icon/icon";
import {ThemeType} from "../../types";
import {Typography} from "../../atoms/typography/typography";

interface SettingsMenuProps {
  settingsModalState: {open: boolean, view: string, mobileOpen: boolean, args?: any}
  parsedSettings?: any
  closeSettingsModal: () => void
  views: Array<any>
  changeSettingsView: (view: string) => void
  themes: Array<ThemeType>
  selectedTheme: ThemeType
}

export const SettingsMenu: FC<SettingsMenuProps> = ({
  settingsModalState,
  parsedSettings,
  closeSettingsModal,
  views,
  changeSettingsView,
  selectedTheme,
  themes,
}) => {

  const getCurrentSetting = (item: SettingsItemType) => {
    if (item.link === "themes") {
      return (
        themes.find((t) => t.handle === selectedTheme.handle)?.name ||
        selectedTheme.handle
      )
    } else if (item.link === "currencies") {
      const selectedCurrency: CurrencyType = parsedSettings.selectedCurrency
      return `${selectedCurrency.name} - ${selectedCurrency.sign} `
    } else if (item.link === "networks") {
      return `${parsedSettings.networks.communityId}(${parsedSettings.networks.network})`
    }
    return ""
  }
  return (
    <Paper
      surface={0}
      className={[
        settingsModalState?.mobileOpen ? "block w-full " : "hidden",
        "flex flex-col  pb-4   sm:mr-4 md:block md:w-1/5",
      ].join(" ")}
      shadow={0}
    >
      <div className="absolute w-full h-full inset-0 bg-transparent z-1" onClick={() => closeSettingsModal()}>
      </div>
      <div className="w-full bg-background md:hidden flex flex-row justify-between mb-2 px-4 py-4 md:py-0 mx-auto">
        <div onClick={() => closeSettingsModal()}>
          <Icon className="w-5 h-5 text-onBackgroundHigh" icon={"arrowLeft"} />
        </div>
        <span className="text-onSurfaceHigh font-medium">Settings</span>
        <div
          onClick={() => {
            settingsModalState?.args?.onClick()
            closeSettingsModal()
          }}
        >
          <Icon className="w-5 h-5 text-onSurfaceHigh" icon={"x"} />
        </div>
      </div>
      <div className="bg-surface-1 rounded md:py-4 mx-4 md:mx-0 relative z-9999">
        {views.map((item) => (
          <div
            key={`sm-${item.link}`}
            onClick={() => {
              changeSettingsView(item.link)
            }}
            className={[
              item.hideOnMobile && "hidden md:flex",
              item.link === settingsModalState?.view ? "" : "",
              "py-3 px-4   flex items-start rounded-lg group md:mx-2 md:my-2",
              "hover:bg-primaryLight hover:text-onPrimaryHigh transition ease-in-out hover:font-medium",
              "duration-150 cursor-pointer",
              "flex flex-row items-center justify-between font-base",
            ].join(" ")}
          >
            <div className="">
              <Typography
                tag={"span"}
                className={[
                  "text-base font-base",
                  item.link === settingsModalState?.view
                    ? "text-onSurfaceHigh text-base"
                    : "text-onSurfaceHigh",
                  "group-hover:text-onPrimaryHigh ",
                ].join(" ")}
              >
                {item.label}
              </Typography>
            </div>
            <div className="flex flex-row items-center ">
              <span className="text-onSurfaceLow hover:text-onSurfacePrimaryHigh">
                {getCurrentSetting(item)}
              </span>
              <Icon className="w-5 h-5 text-onSurfaceHigh ml-4" icon={"chevronRight"} />
            </div>
          </div>
        ))}
      </div>
    </Paper>
  )
}
