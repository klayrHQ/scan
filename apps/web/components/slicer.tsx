"use client";
import { Slices, SlicesTypes } from "../slices";
import React, { useEffect } from "react";
import { useService } from "../providers/service";
import {ParsedUrlQuery} from "querystring";

export interface SlicerProps {
  query?: ParsedUrlQuery
  queryData?: any;
  queries?: any;
  id?: string;
  slices: Array<{
    id: string;
    _type: SlicesTypes;
    _id: string;
    [x: string | number | symbol]: unknown;
  }>;
  uri?: string
}

export const Slicer = ({ slices, queryData, queries, id, uri, query }: SlicerProps) => {
  const { setQueries, cache, setID } = useService();
  useEffect(() => {
    if (setQueries) {
      setQueries(queries);
    }
  }, [setQueries]);
  useEffect(() => {
    if (setID) {
      setID(id);
    }
  }, [setID, id]);

  useEffect(() => console.log("CACHE", cache), [cache])

  return (
    <>
      {slices.filter(Boolean).map((slice) => {
        const Tag = Slices[slice._type];
        return (
          <Tag
            key={slice._id}
            {...slice}
            id={id}
            queryData={cache || queryData}
            queries={queries}
            uri={uri}
            query={query}
          />
        );
      })}
    </>
  );
};
