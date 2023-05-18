import { ColumnProps } from "./index";
import { cls, Typography } from "ui";

export const DateColumn = ({ params, values }: ColumnProps) => (
  <Typography
    tag={"span"}
    className={cls(["border-surfaceDark", params?.className])}
    {...params}
  >
    {typeof values === "object" ? values[0] : values}
  </Typography>
);
