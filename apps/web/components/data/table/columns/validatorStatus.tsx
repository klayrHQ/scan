import {ColumnProps} from "./index";
import {cls, Typography} from "ui";
import {ValueFormatter} from "../../../valueFormatter";

export const ValidatorStatusColumn = ({params, values}: ColumnProps) => {
  return <span className={"flex space-x-2 bg-surface-1 p-2 rounded"}>
    {<ValueFormatter value={values[0].value} {...values[0].format} />}
    {<ValueFormatter value={values[1].value} {...values[1].format} />}
  </span>
// <Typography
//   tag={"span"}
//   className={cls(["border-surfaceDark", params?.className])}
//   {...params}
// >
//   {typeof values === "object" ? values[0] : values}
// </Typography>
}
