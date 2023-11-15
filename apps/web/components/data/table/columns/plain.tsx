import {ColumnProps} from "./index";
import {ValueFormatter} from "ui";

export const PlainColumn = ({values}: ColumnProps) => {
  return <>{<ValueFormatter value={values[0].value} symbol={values[0]?.symbol || "lsk"} {...values[0].format} />}</>
}
