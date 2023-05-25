import {ColumnProps} from "./index";
import {cls, Typography} from "ui";
import {ValueFormatter} from "../../../valueFormatter";

export const PlainColumn = ({params, values}: ColumnProps) => {
  return <>{<ValueFormatter value={values[0].value} {...values[0].format} />}</>
// <Typography
//   tag={"span"}
//   className={cls(["border-surfaceDark", params?.className])}
//   {...params}
// >
//   {typeof values === "object" ? values[0] : values}
// </Typography>
}
