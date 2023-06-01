import { SlicerProps } from "../components/slicer";
import { Grid } from "ui";
import { ValueFormatter } from "../components/valueFormatter";
import { getFromDottedKey } from "../lib/dotString";
import util from "util";

export const Kpi = ({
  queryData,
  queries,
  name,
  values,
  gap,
  justifyBetween,
  cols,
  mobileColumns,
  isFlex,
  copy = -1,
}: SlicerProps & {
  name: string;
  values: any[];
  justifyBetween: boolean;
  gap: number;
  cols: number;
  mobileColumns: number;
  isFlex: boolean;
  copy: number;
}) => {
  return (
    <Grid
      justifyBetween={justifyBetween}
      flex={isFlex}
      gap={gap}
      columns={cols}
      mobileColumns={mobileColumns}
    >
      {values?.map((value, index) => {
        let v: any = "";
        if (value.type === "key") {
          v = getFromDottedKey(value.value, "row", queryData, queryData) || "-";
        }
        let link = undefined
        if (value.format?.link?.href) {
          link = {
            href: value.format.link.href,
            keys: []
          }
        }
        if (value.format?.link?.keys?.length > 0 && value.format?.link?.href) {
          const keys = value.format.link.keys.map((key: string) => getFromDottedKey(key, "row", queryData, queryData))
          link = {
            href: util.format(value.format.link.href, ...keys),
            keys
          }
        }
        return (
          <ValueFormatter
            key={value._key}
            value={v || value.value}
            copy={copy === index}
            {...value.format}
            link={link}
          />
        );
      })}
    </Grid>
  );
};
