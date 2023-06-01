import { Typography } from "ui";

export const Pagination = ({colSpan, emptyLabel}: {colSpan: number, emptyLabel: string}) => (
  <tr>
    <td colSpan={colSpan}>
      <Typography tag={"span"}>{emptyLabel}</Typography>
    </td>
  </tr>
);
