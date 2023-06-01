import {ColumnProps} from "./index";
import {ValueFormatter} from "../../../valueFormatter";

export const DefaultHeadColumn = ({
  values,
}: ColumnProps) => {
  return (
    <>{values[0].value ? <ValueFormatter value={values[0].value} {...values[0].format} /> : <></>}</>
  );
};
