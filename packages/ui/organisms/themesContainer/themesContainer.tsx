import React, {FC} from "react";
import { HslColorPicker } from "react-colorful"
import { Paper } from "../../atoms/paper/paper";
import {Icon} from "../../atoms/icon/icon";
import {ThemeType} from "../../types";
import {Typography} from "../../atoms/typography/typography";

interface ThemesContainerProps {
  themes?: Array<ThemeType>
  selectedTheme: ThemeType
  updateProperty: (property: string, newValue: string | number) => void
  switchTheme: (theme: ThemeType) => void
  parsedSettings?: any
  setSetting: (handle: string, newState: any) => void
}

export const ThemesContainer: FC<ThemesContainerProps> = ({
  themes,
  selectedTheme,
  updateProperty,
  switchTheme,
  parsedSettings,
  setSetting,
}) => {
  return (
    <div
      className={
        "flex flex-col  space-y-4 w-app text-onSurfaceHigh mx-4 w-full "
      }
    >
      <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4 w-full">
        <Typography tag={"h2"} size={"Heading4"} className={"text-onSurfaceHigh text-lg md:text-4xl font-bold"}>
          {"Style your Liskscan Theme!"}
        </Typography>
        <Typography tag={"span"}>{"Choose your theme and primary color."}</Typography>
      </Paper>
      <Paper surface={1} className={"mb-4  p-4 flex flex-col space-y-2 w-full"}>
        <Typography tag={"span"} className="font-bold ">{"Select Theme"}</Typography>
        <Paper
          surface={0}
          className="grid grid-cols-2  gap-2 md:grid-cols-4 md:grid-rows-2 grid-flow-row md:grid-flow-col"
        >
          {themes?.map((theme) => (
            <div
              className={[
                selectedTheme.handle === theme.handle
                  ? "bg-primary shadow-2 text-onPrimaryHigh"
                  : "text-onSurfaceHigh font-Medium",
                "cursor-pointer rounded font-bold  px-4 py-2 rounded hover:bg-primary   hover:shadow-2 hover:text-onPrimaryHigh text-center text-medium flex flex-row justify-between items-center ",
              ].join(" ")}
              onClick={() =>
                switchTheme({
                  ...selectedTheme,
                  bg: theme.bg,
                  type: theme.type,
                  handle: theme.handle,
                })
              }
              key={theme.handle}
            >
              {theme.name}
              {selectedTheme.handle === theme.handle && (
                <Icon className="w-7 h-7 bg-success text-onSuccess rounded p-1" icon={"checkCircle"} />
              )}
            </div>
          ))}
        </Paper>
      </Paper>
      <Paper
        rounded
        surface={1}
        className=" flex flex-col md:flex-row justify-around space-y-2"
      >
        <div className={"p-4"}>
          <h2 className={"text-"}>Primary color</h2>
          <div className="md:flex flex-col hidden ">
            <Typography tag={"span"} className="bg-primaryLight w-full p-2 rounded-t text-onPrimary">
              {"Primary Light"}
            </Typography>
            <Typography tag={"span"} className="bg-primary w-full p-2 text-onPrimary ">
              {"Primary"}
            </Typography>
            <Typography tag={"span"} className="bg-primaryDark w-full p-2 text-onPrimary">
              {"Primary Dark"}
            </Typography>
            <Typography tag={"span"} className="bg-surface w-full p-2 text-onSurfaceLow">
              {"Surface"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-1 w-full p-2 text-onSurfaceHigh">
              {"Surface 1"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-2 w-full p-2 text-onSurfaceLow">
              {"Surface 2"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-3 w-full p-2 text-onSurfaceLow">
              {"Surface 3"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-4 w-full p-2 text-onSurfaceLow">
              {"Surface 4"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-5 w-full p-2 text-onSurfaceLow">
              {"Surface 5"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-6 w-full p-2 text-onSurfaceLow">
              {"Surface 6"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-7 w-full p-2 text-onSurfaceLow">
              {"Surface 7"}
            </Typography>
            <Typography tag={"span"} className="bg-surface-8 w-full p-2 text-onSurfaceLow">
              {"Surface 8"}
            </Typography>
            <Typography tag={"span"} className="bg-background w-full p-2 text-onSurfaceLow">
              {"Background"}
            </Typography>
          </div>
          <section className={"no-saturation"}>
            <HslColorPicker
              color={{
                h: selectedTheme.primary,
                s: 100,
                l: 50,
              }}
              onChange={(color) => updateProperty("primary", color.h)}
            />
          </section>
        </div>
        <div className={"p-10 hidden"}>
          <h2 className={"text-lg"}>{"Secondary color"}</h2>
          <section className={"no-saturation"}>
            <HslColorPicker
              color={{
                h: selectedTheme.secondary,
                s: 100,
                l: 50,
              }}
              onChange={(color) => updateProperty("secondary", color.h)}
            />
          </section>
        </div>
      </Paper>
      <div className="hidden md:block">
        <input
          type={"number"}
          value={parsedSettings?.appWidth}
          onChange={(e) => {
            setSetting("appWidth", parseInt(e.target.value))
          }}
        />
      </div>
    </div>
  )
}
