import {ValueFormatter} from "ui";

export const DefaultHeadColumn = ({
  values,
}: {values: any[]}) => {
  return (
    <>{values[0].value ? <ValueFormatter value={values[0].value} {...values[0].format} /> : <></>}</>
  );
};
