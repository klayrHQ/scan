import {Suspense} from "react"
import {TableSkeleton} from "../components/skeletons/tableSkeleton";
import {DivSkeleton} from "../components/skeletons/divSkeleton";
import { Slices, SlicesTypes } from "./index";

export const SuspenseSlice = ({
  fallback,
  children,
  queryData,
  data,
}: {
  fallback: {
    type: "table" | "div",
    className: string,
    columns: number | string[]
    rows: number,
  },
  children: { _type: SlicesTypes; _id: string }[],
  queryData?: Record<string, any>;
  data?: any;
}) => {
  const Fallback = fallback.type === "table" ? TableSkeleton : DivSkeleton

  return (
    <Suspense fallback={<Fallback className={fallback.className} columns={fallback.columns} rows={fallback.rows} />}>
      {children &&
        children.map(({ _type, _id, ...props }) => {
          const Tag = Slices[_type];
          return <Tag key={_id} {...props} queryData={queryData} data={data} />;
        })}
    </Suspense>
  )
}