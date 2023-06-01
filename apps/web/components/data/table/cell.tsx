import { FC } from "react";
import { cls } from "ui";

export type ShowOnCell =
  | "mobile"
  | "tablet"
  | "desktop"
  | "mobileTablet"
  | "tabletDesktop"
  | "mobileDesktop"
  | "always";

export interface CellProps {
  type?: "head" | "row";
  Component: FC<any>;
  ValueComponent: FC<any>;
  showOn: ShowOnCell;
  className?: string;
  values: { name: string; _key: string; type: string; value: string }[];

  [key: string]: any;
}

const getShowClass = (showOn: ShowOnCell) => {
  switch (showOn) {
    case "mobile":
      return "table-cell md:hidden";
    case "tablet":
      return "hidden md:table-cell lg:hidden";
    case "desktop":
      return "hidden lg:table-cell";
    case "mobileTablet":
      return "table-cell lg:hidden";
    case "tabletDesktop":
      return "hidden md:table-cell";
    case "mobileDesktop":
      return "table-cell md:hidden lg:table-cell";
    default:
      return "table-cell";
  }
};

export const Cell = ({
  Component,
  showOn,
  className,
  type = "row",
  ...props
}: CellProps) => {
  if (!props.values) {
    return (
      <td
        className={cls(["border-b-1 p-2 pl-4 font-medium", className, getShowClass(showOn)])}
      ></td>
    );
  }
  if (type === "row") {
    return (
      <td className={cls(["border-b-1 p-2 pl-4 font-medium", className, getShowClass(showOn)])}>
        {Component && <Component {...props} />}
      </td>
    );
  }
  return (
    <th className={cls(["border-b-1 p-4 first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br font-medium", className, getShowClass(showOn)])}>
      {Component && <Component {...props} />}
    </th>
  );
};
