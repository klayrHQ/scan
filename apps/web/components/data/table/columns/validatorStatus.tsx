import { ColumnProps } from "./index";
import { ValueFormatter } from "../../../valueFormatter";
import { cls } from "ui";
import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export const ValidatorStatusColumn = ({ values }: ColumnProps) => {
  return (
    <span className={"flex space-x-2 bg-surface-1 p-2 rounded items-center"}>
      {values[0].value === "active" && values[3].value > 0 ? (
        <ExclamationCircleIcon
          className={cls([
            "text-error",
            "rounded-full h-6 w-6 flex aspect-square ml-1",
          ])}
        />
      ) : (
        <ValueFormatter value={values[0].value} {...values[0].format} />
      )}
      {values[0].value && values[0].value === "active" ? (
        values[3].value === 0 ? (
          <ValueFormatter value={values[1].value} {...values[1].format} />
        ) : (
          <ValueFormatter
            value={`Missed ${values[3].value} blocks`}
            {...values[2].format}
          />
        )
      ) : values[2].value ? (
        <ValueFormatter value={values[2].value} {...values[2].format} />
      ) : (
        <ValueFormatter value={"unknown"} {...values[2].format} />
      )}
    </span>
  );
};
