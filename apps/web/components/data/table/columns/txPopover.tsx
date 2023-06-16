"use client";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { SearchContainer } from "ui/organisms/searchContainer/searchContainer";
import { Popover } from "ui/atoms/popover/popover";
import { useRouter } from "next/navigation";
import { favourites } from "ui/assets/mockupData/mockupData";
import { cls, Grid, KeyValueRow, Typography, ValueFormatter } from "ui";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ColumnProps } from "./index";
import { Divider } from "ui/atoms/divider/divider";
import { Kpi } from "../../../../slices/kpi";
import { KeyValueKPI } from "../../keyValueKPI";

export const TxPopover = ({
  menuCloseFunction,
  mobile,
  values,
  queryData,
  index,
  data,
}: {
  menuCloseFunction?: () => void;
  mobile?: boolean;
  values: ColumnProps;
  queryData?: any;
  data?: any;
  index: number;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  console.log(queryData?.["transaction-moduleCommand"]?.data?.[index], "query");
  const row = queryData?.["transaction-moduleCommand"]?.data?.[index];
  return (
    <Popover
      open={open}
      setOpen={setOpen}
      containerClassName={!mobile ? "hidden md:block" : "md:hidden"}
      containerWidth={"full"}
      className={cls([
        "top-0 w-screen max-w-full lg:max-w-md shadow-xl",
        mobile && "shadow",
      ])}
      placement={"center"}
      button={
        <div className="group hover:bg-surface-2  text-onSurfaceLow rounded inline-flex items-center text-base font-medium focus:outline-none p-1 relative cursor-pointer">
          <EyeIcon className={"w-4 h-4"} />
        </div>
      }
    >
      <Grid className={"w-full"} columns={1} gap={2}>
        <Grid
          className={"px-4 pt-2 "}
          columns={2}
          flex
          justifyBetween
          mobileColumns={2}
        >
          <Typography
            color={"onSurfaceHigh"}
            tag={"span"}
            bold
            size={"Heading6"}
          >
            Additional Info
          </Typography>
          <Typography
            className={"items-center flex flex-row space-x-2"}
            color={"onSurfaceHigh"}
            tag={"span"}
            size={"subBody"}
          >
            See more details
            <ArrowRightIcon className={"w-3 h-3"} />
          </Typography>
        </Grid>

        <Divider color={"surface-1"} align={"center"} width={"full"} />
        <Grid className={"p-4"} columns={1} gap={2}>
          <KeyValueRow
            col
            label={"Status:"}
            value={`${values[0].value} Total of ${row?.confirmations} confirmations`}
          />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow
            label={"Fee:"}
            value={`${row?.fee} (min fee: ${row?.minFee})`}
          />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow label={"Data:"} value={row?.params?.data || "No Data"} />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow label={"Nonce:"} value={row?.nonce} />
        </Grid>
      </Grid>
    </Popover>
  );
};
