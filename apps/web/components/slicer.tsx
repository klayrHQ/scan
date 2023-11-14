"use client";
import { Slices, SlicesTypes } from "../slices";
import React, { useEffect } from "react";
import { useService } from "../providers/service";
import { ParsedUrlQuery } from "querystring";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import useQueryParams, { QueryParams } from "../hooks/useQueryParams";

export interface SlicerProps {
  queryData?: any;
  queries?: any;
  slices: Array<{
    id: string;
    _type: SlicesTypes;
    _id: string;
    [x: string | number | symbol]: unknown;
  }>;
}

export const Slicer = ({ slices, queryData, queries }: SlicerProps) => {
  const path = usePathname();
  const [uri, id] = path?.split("/").slice(1) || [undefined, undefined];
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const { setQueries, cache, setID, nextPage } = useService();
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

  useEffect(() => {
    if(queries) {
      nextPage("test")
    }
  }, [queries])

  // useEffect(() => console.log("CACHE", uri, id, cache), [cache]);

  return (
    <>
      {slices.filter(Boolean).map((slice, i) => {
        const Tag = Slices[slice._type];
        return (
          <Tag
            {...slice}
            queryData={cache || queryData}
            queries={queries}
            key={`${slice._id}${uri}_${id}_${JSON.stringify(queryParams)}-${i}`}
            id={id}
            uri={uri}
          />
        );
      })}
    </>
  );
};
