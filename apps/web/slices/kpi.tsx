import { SlicerProps } from "../components/slicer";
import { Grid } from "ui";
import { ValueFormatter } from "../components/valueFormatter";
import { getDottedKeyType, getFromDottedKey } from "../lib/dotString";
import { IconButton } from "ui/atoms/iconButton/iconButton";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
        return (
          <ValueFormatter
            key={value._key}
            value={v || value.value}
            copy={copy === index}
            {...value.format}
          />
        );
      })}
    </Grid>
  );
};
