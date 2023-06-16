"use client";
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Popover } from "ui/atoms/popover/popover";
import { useRouter } from "next/navigation";
import { cls, Grid, KeyValueRow, Typography, ValueFormatter } from "ui";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ColumnProps } from "./index";
import { Divider } from "ui/atoms/divider/divider";

export const TxPopover = ({
  mobile,
  queryData,
  index,
}: {
  menuCloseFunction?: () => void;
  mobile?: boolean;
  queryData?: any;
  data?: any;
  index: number;
} & ColumnProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  console.log(queryData?.["transaction-moduleCommand"]?.data?.[index], "query");
  const row = queryData?.["transaction-moduleCommand"]?.data?.[index];
  return (
    <Popover
      open={open}
      setOpen={setOpen}
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
            value={`${row?.executionStatus} Total of ${row?.confirmations} confirmations`}
          />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow
            col
            label={"Fee:"}
            value={`${row?.fee} (min fee: ${row?.minFee})`}
          />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow
            col
            label={"Data:"}
            value={row?.params?.data || "No Data"}
          />
          <Divider color={"surface-1"} align={"center"} width={"full"} />
          <KeyValueRow col label={"Nonce:"} value={row?.nonce} />
        </Grid>
      </Grid>
    </Popover>
  );
};
