import {ColumnProps} from "./index";
import {ValueFormatter} from "../../../valueFormatter";

export const NrColumn = ({values, index}: ColumnProps) => {
  return <>{<ValueFormatter value={(index + 1).toString()} {...values[0].format} />}</>
}
