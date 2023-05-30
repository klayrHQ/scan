import {ColumnProps} from "./index";
import {cls, Typography} from "ui";
import {ValueFormatter} from "../../../valueFormatter";

export const ValidatorStatusColumn = ({params, values}: ColumnProps) => {
  return <span className={"flex space-x-2 bg-surface-1 p-2 rounded items-center"}>
    {<ValueFormatter value={values[0].value} {...values[0].format} />}
    {values[0].value && values[0].value === "active" ? <ValueFormatter value={values[1].value} {...values[1].format} /> : values[2].value ? <ValueFormatter value={values[2].value} {...values[2].format} />: <ValueFormatter value={"unknown"} {...values[2].format} />}
  </span>
// <Typography
//   tag={"span"}
//   className={cls(["border-surfaceDark", params?.className])}
//   {...params}
// >
//   {typeof values === "object" ? values[0] : values}
// </Typography>
}
