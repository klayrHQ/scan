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
}: CellProps) =>
  type === "row" ? (
    <td className={cls(["border-b-1 p-2", className, getShowClass(showOn)])}>
      <Component {...props} />
    </td>
  ) : (
    <th className={cls(["border-b-1 p-4", className, getShowClass(showOn)])}>
      <Component {...props} />
    </th>
  );
