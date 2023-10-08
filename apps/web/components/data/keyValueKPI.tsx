"use client"
import {KeyValueRow} from "ui";
import {getDottedKeyType, getFromDottedKey} from "../../lib/dotString";
import {BlocksResponse} from "@liskscan/lisk-service-client/lib/types/api/blocks";
import {useEffect, useState} from "react";

export interface KeyValueKPIProps {
  label: string
  dottedKey: string,
  backupKey: string,
  color?: string,
  data: Record<string, any>
  lastBlock?: BlocksResponse["data"][0]
}
const getValue = (dottedKey: string, backupKey: string, data: Record<string, any>, lastBlock?: BlocksResponse["data"][0], ) => {
  const mainValue = getFromDottedKey(dottedKey, "none", {none: 1}, {...data, lastBlock})?.toLocaleString()
  const backupValue = backupKey && getFromDottedKey(backupKey, "none", {none: 1}, {...data, lastBlock})?.toLocaleString()
  return mainValue || backupValue || ""
}
export const KeyValueKPI = ({label, dottedKey, data, backupKey, color = "onTopbar", lastBlock}: KeyValueKPIProps) => {
  const [value, updateValue] = useState(getValue(dottedKey, backupKey, data, lastBlock))
  // if (label === "round") {
  //   const round = lastBlock?.height ? Math.floor(lastBlock.height / 103) : 0
  //   updateValue(round)
  // }
  // if (label === "round progress") {
  //   const progress = lastBlock?.height ? lastBlock.height % 103 : 0
  //   updateValue(`${progress} / 103`)
  // }

  useEffect(() => {
    if (label === "round") {
      const round = lastBlock?.height ? Math.floor(lastBlock.height / 103) : 0
      updateValue(`${round}`)
    }
    if (label === "round progress") {
      const progress = lastBlock?.height ? lastBlock.height % 103 : 0
      updateValue(`${progress} / 103`)
    }
    if (label === "certified height") {
      const certifiedHeight = lastBlock?.aggregateCommit?.height || 0
      updateValue(`${certifiedHeight}`)
    }
    if (label === "status") {
      const synced = !data.status.data.syncing ? "Synced" : "Syncing"
      updateValue(`${synced}`)
    }
    if (getDottedKeyType(dottedKey) === "lastBlock" || getDottedKeyType(backupKey) === "lastBlock") {
      updateValue(getValue(dottedKey, backupKey, data, lastBlock))
    }
  }, [lastBlock, backupKey, data, dottedKey, label])
  return <KeyValueRow
    key={label}
    inline
    color={color}
    label={label}
    value={value}
    valueBold
    />
}
