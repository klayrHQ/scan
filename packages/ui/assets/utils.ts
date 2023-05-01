import { AccountDataType } from "@moosty/lisk-service-provider"
import {useEffect, useRef, useState} from "react";

export const clean = (obj: any) => {
  return Object.entries(obj).reduce(
    // @ts-ignore
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {},
  )
}

export const isInList = (list: any[], value: any) => {
  return list.indexOf(value) > -1
}

export const formatNormalCase = (str: string) => {
  return str
    .replace(/[A-Z]/g, (letter, index) => {
      const lcLet = letter.toLowerCase()
      return index ? " " + lcLet : lcLet
    })
    .replace(/([-_ ]){1,}/g, " ")
}

export const compactString = (
  string?: string,
  maxLength?: number,
  location: string = "middle",
  spacer: string = "...",
) => {
  if (!string) {
    return ""
  }
  if (!maxLength || string.length <= maxLength) {
    return string
  }
  if (location === "middle") {
    return `${string.substr(
      0,
      maxLength / 2 - spacer.length,
    )}${spacer}${string.substr(
      string.length - (maxLength / 2 - spacer.length),
    )}`
  } else if (location === "right") {
    return `${string.substr(0, maxLength - spacer.length)}${spacer}`
  } else if (location === "left") {
    return `${spacer}${string.substr(
      string.length - maxLength,
      string.length - spacer.length,
    )}`
  }
}

export const leadingZeros = (num: any, size: number) => {
  var s = num + ""
  while (s.length < size) s = "0" + s
  return s
}

export const calculateVotes = (votes: any): string =>
  (votes &&
    votes
      ?.reduce(
        (sum: bigint, vote: { amount?: string }) =>
          sum + BigInt(vote?.amount || 0),
        BigInt(0),
      )
      ?.toString()) ||
  "0"

export const calculateTotalBalance = (balance: number, sentVotes: number): string => {
  const availableBalance = BigInt(balance || 0)
  return (
    availableBalance + BigInt(calculateVotes(sentVotes))
  ).toString()
}

export const selectKey = (key: string, object: any) => {
  const arr = key.split(".")
  while (arr.length && (object = object[arr.shift()!])) return object
}

const isBrowser = typeof window !== "undefined"

export const useNotification = (
  textValue = "",
  delay: number,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const timeoutRef = useRef<NodeJS.Timeout>()
  const [notificationText, setNotificationText] = useState<string>(textValue)

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setNotificationText(""), delay)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [notificationText, delay])

  return [notificationText, setNotificationText]
}

export const cls = (classes: Array<undefined | null | boolean | string>) => classes.filter(Boolean).join(" ")