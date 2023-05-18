import { Typography } from "ui";
import {ColumnProps} from "./index";

export const DefaultHeadColumn = ({
  values,
}: ColumnProps) => {
  return (
    <Typography tag={"span"} className={"table-cell relative text-left"}>
      {typeof values === "object" ? values[0] : values}
    </Typography>
  );
};
