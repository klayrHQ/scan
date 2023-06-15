import { ColumnProps } from "./index";
import { ValueFormatter } from "../../../../../../packages/ui/atoms/valueFormatter/valueFormatter";
import { EyeIcon } from "@heroicons/react/24/outline";

export const DataColumn = ({ values }: ColumnProps) => {
  return (
    <>
      {values[0].value && (
        <EyeIcon className={"w-5 h-5 text-onSurfaceMedium"} />
      )}
      <ValueFormatter value={values[0].value} {...values[0].format} />
    </>
  );
};
