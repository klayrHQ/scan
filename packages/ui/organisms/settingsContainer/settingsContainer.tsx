import React, { FC } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { Paper } from "../../atoms/paper/paper";
import {Icon} from "../../atoms/icon/icon";
import {SettingsMenu} from "../../molecules/settingsMenu/settingsMenu";
import {ThemeType} from "../../types";
//import { SettingsMenu } from "components/modals/settings/SettingsMenu"

interface settingsContainerProps {
  settingsModalState: { open: boolean, view: string, mobileOpen: boolean, args?: any }
  closeSettingsModal: () => void
  openSettingsModal: (view: string, arg?: any) => void
  jumpSettingsMenu: (direction: "up" | "down") => void
  views: Array<any>
  parsedSettings?: any
  changeSettingsView: (view: string) => void
  themes: Array<ThemeType>
  selectedTheme: ThemeType
}

export const SettingsContainer: FC<settingsContainerProps> = ({
  settingsModalState,
  closeSettingsModal,
  openSettingsModal,
  jumpSettingsMenu,
  views,
  parsedSettings,
  changeSettingsView,
  themes,
  selectedTheme,
}) => {
  {
    /*const { selectedTheme } = useTheme()
    useHotkeys("up", () => settingsModalState?.open && jumpSettingsMenu("up"), [
      settingsModalState,
    ])
    useHotkeys(
      "down",
      () => settingsModalState?.open && jumpSettingsMenu("down"),
      [settingsModalState],
    )*/
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
          <SettingsMenu
           changeSettingsView={changeSettingsView}
           views={views}
           themes={themes}
           settingsModalState={settingsModalState}
           selectedTheme={selectedTheme}
           closeSettingsModal={closeSettingsModal}
           parsedSettings={parsedSettings}
          />
          <Paper
            shadow={0}
            surface={1}
            className={[
              !settingsModalState.mobileOpen ? "block" : "hidden",
              "md:mx-0 md:block bg-background w-full sm:w-4/5 overflow-y-auto overflow-clip max-h-screen md:p-8 relative z-9999",
            ].join(" ")}
          >
            <div className="w-full md:hidden flex flex-row justify-between text-onSurfaceHigh mb-2 px-4 py-4 mx-auto">
              <div
                onClick={() =>
                  openSettingsModal(settingsModalState?.view)
                }
              >
                <Icon className="w-5 h-5 text-onSurfaceHigh" icon={"arrowLeft"} />
              </div>
              <span className="font-medium">
                {
                  views.find(
                    (v) => v.link === settingsModalState.view,
                  )?.label
                }
              </span>
              <div
                onClick={() => {
                  settingsModalState?.args?.onClick()
                  closeSettingsModal()
                }}
              >
                <Icon className="w-5 h-5 text-onSurfaceHigh" icon={"x"} />
              </div>
            </div>
            {views.map(
              (view) =>
                view.link === settingsModalState.view && view.view,
            )}
          </Paper>
        </div>
      </div>
    )
  }
}
