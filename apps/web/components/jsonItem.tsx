"use client";
import { JsonView } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { cls } from "ui";
import { CopyButton } from "./data/copy";

export const testObject = {
  string: "this is a test string",
  integer: 42,
  array: [1, 2, 3, "test", null],
  float: 3.14159,
  object: {
    "first-child": true,
    "second-child": false,
    "last-child": null,
  },
  string_number: "1234",
  date: "2023-06-15T11:01:00.937Z",
  undefined: undefined,
};

export const JsonItem = ({
  src,
  className,
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
  src: string;
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
  const lightStyles = {
    container: cls(["bg-surface-1 p-4", className]),
    basicChildStyle: cls([
      "pl-3 ml-[0.175rem] border-solid border-1 border-r-0 border-t-0 border-b-0 border-surface-3",
      childClassName,
    ]),
    expander: cls(["cursor-pointer -ml-1 select-none", expanderClassName]),
    label: cls(["mr-2", labelClassName]),
    nullValue: cls(["text-[#9d174d]", nullClassName]),
    undefinedValue: cls(["text-[#9d174d]", undefinedClassName]),
    numberValue: cls(["text-[#7e22ce]", numberClassName]),
    stringValue: cls(["text-[#ca8a04]", stringClassName]),
    booleanValue: cls(["text-[#065f46]", booleanClassName]),
    otherValue: "",
    punctuation: "",
    pointer: "",
  };

  return (
    <div className={"w-app mx-auto relative"}>
      <JsonView data={src} style={lightStyles} />
      {/*{
        copy &&
          <span className={"absolute top-4 right-4"}>
            <CopyButton value={src}/>
          </span>
      }*/}
    </div>
  );
};
