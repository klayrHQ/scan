"use client"
import {Button} from "ui";

export const ConsoleLogTester = ({label,data,}: {label?: string; data: string | Array<any> | object | number;}) => (
  <Button
    label={"test"}
    onClick={(e) => {
      e.stopPropagation()
      label ?
        console.log(label, data)
        :
        console.log(data)
    }}
  />
)