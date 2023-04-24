/*import CommunityId from "components/ui/InfoBar/CommunityId"*/
import React, { useState } from "react"
/*import CollectiblesModal, {
  CollectibleModalOptions,
} from "components/modals/collectibles/CollectiblesModal"*/
/*import dynamic from "next/dynamic";*/
import { Cog6ToothIcon as CogIcon} from "@heroicons/react/24/solid";
import { Tooltip } from "../../atoms/tooltip/tooltip";
import {Button} from "../../atoms";
import Status from "../../atoms/status/status";
import {statusType} from "../../types";

/*const Price = dynamic(() => import("./Price"))  as any
const Network = dynamic(() => import("./Network")) as any
const BlockHeight = dynamic(() => import("./BlockHeight")) as any
const Status = dynamic(() => import("./Status")) as any*/

interface InfoBarProps {
  openSettingsModal?: any
  status?: statusType
}

export const InfoBar = ({
  openSettingsModal,
  status = "error",
}: InfoBarProps) => {
  /*const [packsLeft, setPacksLeft] = useState<any>([])*/
  /*const change = (ns: CollectibleModalOptions) => changeModal(ns)*/
  /*const [modalState, changeModal] = useState<CollectibleModalOptions>({
    open: false,
    type: "collectAccount",
  } as CollectibleModalOptions)*/

  return (
    <div className="h-10 flex flex-row items-center bg-infobar text-onInfobar w-full  z-50 px-2">
      <div className="w-app max-w-app mx-auto flex flex-row items-center justify-between space-x-2 md:space-x-4">

        <div className=" flex flex-row space-x-2 md:space-x-4 items-center">

          <Status status={status} />
          <div className="flex flex-col md:flex-row md:space-x-4 text-xs md:text-sm">
            {/*<CommunityId />*/}
            {/*<Network />*/}
          </div>
          {/*<BlockHeight />*/}
        </div>
        <div className="flex flex-row  justify-end w-app md:w-full md:w-auto space-x-2 md:space-x-4 items-center ">
          {/*<Price />*/}
          {/*<Theme />*/}
          <Tooltip
            label="Settings"
            placement={"bottom"}
            offset={[0,10]}
          >
            <Button
              onClick={() => openSettingsModal("themes")}
              className="cursor-pointer flex-shrink-0 rounded-full border-0"
              label={<CogIcon
                className="w-5 h-5 text-onTopbar transition-transform hover:rotate-90 hover:text-onSurfacePrimaryLow"/>}
            />
          </Tooltip>
        </div>
      </div>
      {/*<CollectiblesModal setOpen={change} options={modalState} />*/}
    </div>
  )
}

