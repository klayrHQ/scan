import { ColumnProps } from "./index";
import { ValueFormatter } from "../../../valueFormatter";
import { Avatar } from "ui/atoms/avatar/avatar";

export const AvatarColumn = ({ params, values }: ColumnProps) => {
  return (
    <span className={"flex flex-row space-x-2 items-center"}>
      {values[0].value.address && (
        <Avatar size={20} address={values[0].value.address} />
      )}
      {
        <ValueFormatter
          value={values[0].value.name || values[0].value.address}
          {...values[0].format}
          format={!values[0].value.name ? "shortAddress" : "plain"}
        />
      }
    </span>
  );
  // <Typography
  //   tag={"span"}
  //   className={cls(["border-surfaceDark", params?.className])}
  //   {...params}
  // >
  //   {typeof values === "object" ? values[0] : values}
  // </Typography>
};
