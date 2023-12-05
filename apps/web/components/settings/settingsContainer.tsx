import React, { FC } from "react"
import {useSettings, viewTypes} from "../../providers/settings";
import {CurrencyContainer} from "./currencyContainer";
import {HotKeysContainer} from "./hotKeysContainer";
import {NetworkContainer} from "./networkContainer";
import {SettingsMenu} from "./settingsMenu";
import {Paper, Typography} from "ui";
import {Icon} from "ui/atoms/icon/icon";

interface settingsContainerProps {
  setOpen: (open: boolean) => void
  view: viewTypes
  views: Array<viewTypes>
  parsedSettings?: any
  setView: (view: viewTypes) => void
}

export const SettingsContainer = () => {
  const {view, setView, setOpen, views,} = useSettings()

  let ViewComponent

  switch (view) {
    case "currency":
      ViewComponent = CurrencyContainer
      break;

    case "hotkeys":
      ViewComponent = HotKeysContainer
      break;

    case "network":
      ViewComponent = NetworkContainer
      break;

    case "menu":
      ViewComponent = SettingsMenu
      break;

    default:
      ViewComponent = CurrencyContainer
  }

  return (
    <div
      className={[
        "inline-block align-bottom rounded-lg",
        "text-left overflow-hidden transform",
        "transition-all md:my-8 sm:align-middle",
        "w-full md:max-w-app h-screen",
      ].join(" ")}
    >
      <div
        style={{
          minHeight: "90%",
        }}
        className="flex flex-col md:flex-row  h-screen md:h-5/6"
      >
        <SettingsMenu hiddenOnMobile />
        <Paper
          shadow={0}
          surface={1}
          className={[
            "md:mx-0 md:block bg-background w-full sm:w-4/5 overflow-y-auto overflow-clip max-h-screen md:p-8 relative z-9999",
          ].join(" ")}
        >
          <div className="w-full md:hidden flex flex-row justify-between text-onSurfaceHigh mb-2 px-4 py-4 mx-auto">
            <div
              onClick={() =>
                setView("menu")
              }
            >
              <Icon className="w-5 h-5 text-onSurfaceHigh" icon={"arrowLeft"} />
            </div>
            <Typography tag={"span"} className="font-medium">
              {view}
            </Typography>
            <div
              onClick={() => setOpen(false)}
            >
              <Icon className="w-5 h-5 text-onSurfaceHigh" icon={"x"} />
            </div>
          </div>
          <ViewComponent />
        </Paper>
      </div>
    </div>
  )
}
