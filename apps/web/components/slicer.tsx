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
  const [uri, id] = path?.split("/").slice(1) || [null, null];
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();
  const { setQueries, cache, setID } = useService();
  useEffect(() => {
    if (setQueries) {
      setQueries(queries);
    }
  }, [setQueries]);
  useEffect(() => {
    if (id && setID) {
      setID(id);
    }
  }, [setID, id]);

  useEffect(() => console.log("CACHE", cache), [cache]);

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
          />
        );
      })}
    </>
  );
};
