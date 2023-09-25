import * as Flags from 'country-flag-icons/react/3x2'
import {getFromDottedKey} from "../lib/dotString";

export const CountryFlag = ({ countryCode, key, queryData, className }: { countryCode?: string, key?: "string", queryData?: any, className?: string }) => {
  const queriedCountryCode = key && queryData ? getFromDottedKey(key, "row", queryData, queryData) : undefined

  // @ts-ignore
  const Flag = Flags[queriedCountryCode || countryCode || "US"]

  return (
    <Flag title={queriedCountryCode || countryCode || "Incorrect Country Code"} className={className || "w-4"} />
  )
}