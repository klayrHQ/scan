import React, {FC} from "react";
import {CurrencyType, SettingsItemType} from "ui/types";
import {cls, Paper, Typography} from "ui";
import {Icon} from "ui/atoms/icon/icon";
import {useSettings, viewTypes} from "../../providers/settings";

export const SettingsMenu = ({hiddenOnMobile}: {hiddenOnMobile?: boolean}) => {
  const {setOpen, view, setView, views, parsedSettings,} = useSettings()

  const getCurrentSetting = (currentView: viewTypes) => {
    if (currentView === "currency") {
      const selectedCurrency: CurrencyType = parsedSettings.selectedCurrency
      return `${selectedCurrency.name} - ${selectedCurrency.sign} `
    } else if (currentView === "network") {
      /*return `${parsedSettings.networks.communityId}(${parsedSettings.networks.network})`*/
      return `Coming soon`
    } else if (currentView === "hotkeys") {
      return `Coming soon`
    }
    return ""
  }

  const closeSettingsModal = () => setOpen(false)

  const disabledViews = ["hotkeys", "network"]

  return (
    <Paper
      surface={0}
      className={[
        hiddenOnMobile ? "hidden" : "",
        "flex flex-col pb-4 sm:mr-4 md:block md:w-1/5",
      ].join(" ")}
      shadow={0}
    >
      <div className="bg-surface-1 rounded md:py-4 mx-4 md:mx-0 relative z-9999 h-full md:h-auto">
        {views.map((currentView) => (
          <div
            key={`sm-${currentView}`}
            onClick={() => {
              !disabledViews.includes(currentView) && setView(currentView)
            }}
            className={[
              !disabledViews.includes(currentView) ?
                "hover:bg-primaryLight hover:text-onPrimaryHigh transition ease-in-out hover:font-medium cursor-pointer" :
                "cursor-not-allowed",
              "py-3 px-4 flex items-start rounded-lg group md:mx-2 md:my-2",
              "duration-150",
              "flex flex-row items-center justify-between font-base",
            ].join(" ")}
          >
            <div className="">
              <Typography
                tag={"span"}
                className={[
                  "text-base font-base",
                  currentView === view
                    ? "text-onSurfaceHigh text-base"
                    : "text-onSurfaceHigh",
                  !disabledViews.includes(currentView) ?
                    "group-hover:text-onPrimaryHigh" :
                    "",
                ].join(" ")}
              >
                {currentView}
              </Typography>
            </div>
            <div className="flex flex-row items-center ">
              <Typography
                className={cls([
                  !disabledViews.includes(currentView) ?
                    "group-hover:text-onSurfacePrimaryHigh" :
                    "",
                  "text-onSurfaceLow",
                ])}
                size={"subBody"}
                tag={"span"}
              >
                {getCurrentSetting(currentView)}
              </Typography>
              <Icon className="w-5 h-5 text-onSurfaceHigh ml-4" icon={"chevronRight"} />
            </div>
          </div>
        ))}
      </div>
    </Paper>
  )
}
