import { Slices } from "../slices";
import React from "react";

type SliceOptions = keyof typeof Slices;

export interface SlicerProps {
  slices: Array<{
    id: string;
    _type: SliceOptions;
    [x: string | number | symbol]: unknown;
  }>;
}

export const Slicer = ({ slices, }: SlicerProps) => {
  return (
    <>
      {slices.filter(Boolean).map((slice) => {
        const Tag = Slices[slice._type];
        // @ts-ignore
        return <Tag key={slice._id} {...slice} />;
      })}
    </>
  );
};
