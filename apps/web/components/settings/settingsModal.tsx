"use client"
import React, {useState} from "react";
import {Modal} from "ui/atoms/modal/modal";
import {Cog6ToothIcon as CogIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "ui";
import {settings} from "../../providers/constants";
import {useSettings} from "../../providers/settings";
import {SettingsContainer} from "./settingsContainer";

export const SettingsModal = () => {
  const {open, setOpen, view, setView, settings, getSetting, setSetting, settingsState, parsedSettings,} = useSettings()

  return(
    <Modal
      button={
        <Tooltip label="Settings" placement={"bottom"} offset={[0, 10]}>
          <CogIcon
            className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0"
            onClick={() => setOpen(true)}
          />
        </Tooltip>
      }
      className={"w-full max-w-app"}
      isOpen={open}
      setIsOpen={setOpen}
      type={"transparent"}
    >
      <SettingsContainer />
    </Modal>
  )
}