"use client"
import React, {useState} from "react";
import {Modal} from "ui/atoms/modal/modal";
import {SettingsContainer} from "ui/organisms/settingsContainer/settingsContainer";
import {Cog6ToothIcon as CogIcon} from "@heroicons/react/24/solid";
import {Tooltip} from "ui";
import {settings} from "../providers/constants";
import {useSettings} from "../providers/settings";

export const SettingsModal = () => {
  const {views, settings, getSetting, setSetting, openSettingsModal, changeSettingsView, closeSettingsModal, settingsModalState, jumpSettingsMenu, settingsState, parsedSettings,} = useSettings()

  return(
    <Modal
      button={
        <Tooltip label="Settings" placement={"bottom"} offset={[0, 10]}>
          <CogIcon className="mt-1 w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow cursor-pointer flex-shrink-0 rounded-full border-0 outline-0" />
        </Tooltip>
      }
      className={"w-full max-w-app"}
      isOpen={settingsModalState.open}
      setIsOpen={() => {
        console.log(settingsModalState)
        openSettingsModal("Theme")
      }}
      type={"transparent"}
    >
      <SettingsContainer
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
        settingsModalState={settingsModalState}
        themes={
          [
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
          ]
        }
        changeSettingsView={(view) => changeSettingsView(view)}
        closeSettingsModal={closeSettingsModal}
        openSettingsModal={openSettingsModal}
        views={views}
      />
    </Modal>
  )
}