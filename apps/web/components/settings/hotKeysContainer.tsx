import React, {FC} from "react";
import {Paper, Typography} from "ui";
import {HotKey} from "ui/atoms/hotkey/hotkey";
import {HotKeyGroup} from "ui/molecules/hotKeyGroup/hotKeyGroup";

export const HotKeysContainer = () => {
  return (
  <div className="flex flex-col space-y-4">
    <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4">
      <div className="flex flex-row space-x-2 items-center">
        <Typography tag={"h2"} size={"Heading4"} className={"text-onSurfaceHigh text-lg md:text-4xl font-bold"}>
          Master The Hot Keys!{" "}
        </Typography>{" "}
        <HotKey hotKey={"ctrl"} />
        <span className="text-center font-medium text-onSurfaceMedium">+</span>
        <HotKey hotKey={"/"} />
      </div>

      <Typography tag={"span"}>{"Learn how to navigate the Klayr blockchain with your keys only."}</Typography>
    </Paper>
    <Paper
      surface={1}
      className="inline-block align-bottom rounded text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-app sm:w-full"
    >
      <div className="flex flex-col space-y-8 pb-4 sm:p-6 sm:pb-4">

        <div className="flex flex-row justify-between">
          {/*{hotKeyGroups.map(({ category, keys }) => (
            <HotKeyGroup key={category} title={category} keys={keys} />
          ))}*/}
        </div>
      </div>
    </Paper>
  </div>
)
}
