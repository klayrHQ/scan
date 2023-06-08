import {ColumnProps} from "./index";
import {ValueFormatter} from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";

export const NrColumn = ({values, index}: ColumnProps) => {
  return <>{<ValueFormatter value={(index + 1).toString()} {...values[0].format} />}</>
}
