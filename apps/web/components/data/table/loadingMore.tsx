import { Typography } from "ui";

export const LoadingMore = ({colSpan, emptyLabel}: {colSpan: number, emptyLabel: string}) => (
  <tr>
    <td colSpan={colSpan}>
      <Typography tag={"span"}>{emptyLabel}</Typography>
    </td>
  </tr>
);
