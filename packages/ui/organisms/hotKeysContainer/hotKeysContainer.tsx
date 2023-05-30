import React, {FC} from "react";
import { HotKey } from "../../atoms/hotkey/hotkey";
import { HotKeyGroup } from "../../molecules/hotKeyGroup/hotKeyGroup";
import { Paper} from "../../atoms/paper/paper";

interface HotKeysContainerProps {
  hotKeyGroups: Array<{
    category: string,
    keys: Array<{
      label: string,
      keys: Array<string>
    }>
  }>
}

export const HotKeysContainer: FC<HotKeysContainerProps> = ({
  hotKeyGroups,
}) => (
  <div className="flex flex-col space-y-4">
    <Paper surface={1} className="px-4 flex flex-col space-y-2 py-4">
      <div className="flex flex-row space-x-2 items-center">
        <h2 className={"text-onSurfaceHigh text-lg md:text-4xl font-bold"}>
          Master The Hot Keys!{" "}
        </h2>{" "}
        <HotKey hotKey={"ctrl"} />
        <span className="text-center font-medium text-onSurfaceMedium">+</span>
        <HotKey hotKey={"/"} />
      </div>

      <span>Learn how to navigate the Lisk blockchain with your keys only.</span>
    </Paper>
    <Paper
      surface={1}
      className="inline-block align-bottom rounded text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-app sm:w-full"
    >
      <div className="flex flex-col space-y-8 pb-4 sm:p-6 sm:pb-4">

        <div className="flex flex-row justify-between">
          {hotKeyGroups.map(({ category, keys }) => (
            <HotKeyGroup key={category} title={category} keys={keys} />
          ))}
        </div>
      </div>
    </Paper>
  </div>
)
