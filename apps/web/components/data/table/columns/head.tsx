import {ColumnProps} from "./index";
import {ValueFormatter} from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";

export const DefaultHeadColumn = ({
  values,
}: ColumnProps) => {
  return (
    <>{values[0].value ? <ValueFormatter value={values[0].value} {...values[0].format} /> : <></>}</>
  );
};
