import { SlicerProps } from "../components/slicer";
import { Grid } from "ui";
import { ValueFormatter } from "../../../packages/ui/atoms/valueFormatter/valueFormatter";
import { getFromDottedKey } from "../lib/dotString";
import util from "util";
import {ConsoleLogTester} from "../components/consoleLogTester";

export const Kpi = ({
  queryData,
  queries,
  name,
  values,
  className,
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
  className: any;
}) => {
  return (
    <Grid
      justifyBetween={justifyBetween}
      flex={isFlex}
      gap={gap}
      columns={cols}
      className={className}
      mobileColumns={mobileColumns}
    >
      {values?.map((value, index) => {
        let v: any = "";
        if (value.type === "key") {
          v = getFromDottedKey(value.value, "row", queryData, queryData);
        }
        if (value.type === "calculated") {
          const keys = value?.calculations[0]?.keys?.map((key: string) => {
            return getFromDottedKey(key, "row", queryData, queryData)
          })

          const parsedCalculation = util.format(
            value.calculations[0].calculation,
            ...keys
          );

          v = Number(eval(parsedCalculation));
        }
        let link = undefined;
        if (value.format?.link?.href) {
          link = {
            href: value.format.link.href,
            keys: [],
          };
        }
        if (value.format?.link?.keys?.length > 0 && value.format?.link?.href) {
          const keys = value.format.link.keys.map((key: string) =>
            getFromDottedKey(key, "row", queryData, queryData)
          );
          link = {
            href: util.format(value.format.link.href, ...keys),
            keys,
          };
        }

        const conditions = value?.conditions

        if(conditions) {
          conditions[0].conditions.map((condition: { operator: string; conditionValue: string; value: any; }) => {
            if (condition.operator === "==") {
              const newV = v ===
              condition.conditionValue ?
                condition.value :
                (v === undefined) && condition.conditionValue === "undefined" ?
                  condition.value :
                  v
              v = newV
            }
          })
        }

        return (
          <>
            {/*<ConsoleLogTester data={v} />*/}
            <ValueFormatter
              key={value._key}
              value={value.type === "key" || value.type === "calculated" ? v : value.value}
              copy={copy === index}
              {...value.format}
              link={link}
            />
          </>
        );
      })}
    </Grid>
  );
};
