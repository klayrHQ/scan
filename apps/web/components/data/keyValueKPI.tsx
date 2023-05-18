import {KeyValueRow} from "ui";
import {getFromDottedKey} from "../../lib/dotString";

export interface KeyValueKPIProps {
  label: string
  dottedKey: string,
  backupKey: string,
  color?: string,
  data: Record<string, any>
}
export const KeyValueKPI = ({label, dottedKey, data, backupKey, color = "onTopbar"}: KeyValueKPIProps) => {
  const value = getFromDottedKey(dottedKey, "none", {none: 1}, data)?.toLocaleString()
  const backupValue = backupKey && getFromDottedKey(backupKey, "none", {none: 1}, data)?.toLocaleString()

  return <KeyValueRow
    key={label}
    inline
    color={color}
    label={label}
    value={value || backupValue || ""}
    valueBold
    />
}
