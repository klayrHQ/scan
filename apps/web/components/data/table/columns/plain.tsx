import {ColumnProps} from "./index";
import {ValueFormatter} from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";

export const PlainColumn = ({values}: ColumnProps) => {
  return <>{<ValueFormatter value={values[0].value} {...values[0].format} />}</>
}
