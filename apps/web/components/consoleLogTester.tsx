"use client"
import {Button} from "ui";

export const ConsoleLogTester = ({label,data,}: {label?: string; data: any}) => (
  <Button
    label={"test"}
    onClick={(e) => {
      e.stopPropagation()
      e.preventDefault()
      label ?
        console.log(label, data)
        :
        console.log(data)
    }}
  />
)