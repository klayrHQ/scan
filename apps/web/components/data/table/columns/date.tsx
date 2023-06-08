import { ColumnProps } from "./index";
import { cls, Typography } from "ui";
import {ValueFormatter} from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";

export const DateColumn = ({ params, values }: ColumnProps) => (
  <Typography
    tag={"span"}
    className={cls(["border-surfaceDark", params?.className])}
    {...params}
  >
    {values[0].value ? <ValueFormatter value={values[0].value} {...values[0].format} /> : <></>}
  </Typography>
);
