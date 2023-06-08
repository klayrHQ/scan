import { ColumnProps } from "./index";
import { ValueFormatter } from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";

export const OrColumn = ({ values }: ColumnProps) => {
  return (
    <>
      {values?.[0]?.value ? (
        <ValueFormatter value={values[0].value} {...values[0].format} />
      ) : values?.[1]?.value ? (
        <ValueFormatter value={values[1].value} {...values[1].format} />
      ) : values?.[2]?.value ? (
        <ValueFormatter value={values[2].value} {...values[2].format} />
      ) : values?.[3]?.value ? (
        <ValueFormatter value={values[3].value} {...values[3].format} />
      ) : values?.[4]?.value ? (
        <ValueFormatter value={values[4].value} {...values[4].format} />
      ) : (
        <></>
      )}
    </>
  );
};
