"use client"
import {InfoBarKPISType} from "../../lib/queries/getInfoBarKPIS";
import React, {useState} from "react";
import {BlocksResponse} from "@liskscan/lisk-service-client/lib/types/api/blocks";
import {KeyValueKPI} from "./keyValueKPI";
import {IndexStatusResponse} from "@liskscan/lisk-service-client/lib/types";
import {cls} from "ui";


export const KPICarousel = ({
  kpis,
  events,
  index,
  status,
  appState
}: {
  kpis: InfoBarKPISType[]
  index: IndexStatusResponse
  appState: any
  events: any
  status: any
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % kpis.length);
  };

  const currentKPI = kpis[currentIndex];

  return (
    <div className={"max-w-full w-full relative md:hidden overflow-x-hidden h-4 flex-grow"}>
      {kpis?.map(({ key, label, backup, _key }) => (
        <div
          className={cls([
            "absolute translate-x-full opacity-0 duration-300 ease-in",
            currentKPI.label === label ? "opacity-100 left-0 translate-x-0 transition-all cursor-pointer" : "pointer-events-none transition-transform",
          ])}
          onClick={handleNextClick}
        >
          <KeyValueKPI
            key={_key}
            dottedKey={key}
            label={label}
            backupKey={backup}
            lastBlock={events["new.block"] as BlocksResponse["data"][0]}
            data={{
              index,
              status,
              app: appState,
              lastBlock: events["new.block"],
            }}
          />
        </div>
      ))}
    </div>
  )
}