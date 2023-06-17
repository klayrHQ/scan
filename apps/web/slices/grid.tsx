import { Grid } from "ui";
import { Slices, SlicesTypes } from "./index";
import { FC } from "react";

export const GridSlice: FC<{
  columns?: { _type: SlicesTypes; _id: string }[];
  options?: { key: string; value: string }[];
  queryData?: Record<string, any>;
  data?: any;
}> = ({ columns, options, queryData, data }) => {
  const parseOptions = () => {
    const parsedOptions: Record<string, any> = {};
    options?.map(({ key, value }) => {
      parsedOptions[key] = value;
    });
    return parsedOptions;
  };
  return (
    <Grid {...parseOptions()}>
      {columns &&
        columns.map(({ _type, _id, ...props }) => {
          const Tag = Slices[_type];
          return <Tag key={_id} {...props} queryData={queryData} data={data} />;
        })}
    </Grid>
  );
};
