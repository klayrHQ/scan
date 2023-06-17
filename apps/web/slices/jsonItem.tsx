import { JsonItem } from "../components/jsonItem";
import { getFromDottedKey } from "../lib/dotString";

export const JsonItemSlice = ({
  className,
  queryData,
  value,
  childClassName,
  expanderClassName,
  labelClassName,
  nullClassName,
  undefinedClassName,
  numberClassName,
  stringClassName,
  booleanClassName,
  copy,
}: {
  queryData: any;
  value: any;
  className?: string;
  childClassName?: string;
  expanderClassName?: string;
  labelClassName?: string;
  nullClassName?: string;
  undefinedClassName?: string;
  numberClassName?: string;
  stringClassName?: string;
  booleanClassName?: string;
  copy?: boolean;
}) => {
  const JSONValue = getFromDottedKey(value, "row", queryData, queryData);
  console.log(JSONValue, "src");
  return (
    <JsonItem
      src={JSONValue}
      className={className}
      childClassName={childClassName}
      expanderClassName={expanderClassName}
      labelClassName={labelClassName}
      nullClassName={nullClassName}
      undefinedClassName={undefinedClassName}
      numberClassName={numberClassName}
      stringClassName={stringClassName}
      booleanClassName={booleanClassName}
    />
  );
};
