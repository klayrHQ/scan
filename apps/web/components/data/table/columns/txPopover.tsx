"use client";
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Popover } from "ui/atoms/popover/popover";
import { useRouter } from "next/navigation";
import { cls, Grid, KeyValueRow, Typography, ValueFormatter } from "ui";
import { CheckCircleIcon, EyeIcon } from "@heroicons/react/24/solid";
import { ColumnProps } from "./index";
import { Divider } from "ui/atoms/divider/divider";
import { ErrorFilledIcon } from "@sanity/icons";

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
      containerWidth={mobile ? "full" : "lg:max-w-md"}
      className={cls(["top-0 w-screen max-w-full lg:max-w-md shadow-xl"])}
      placement={"center"}
      button={
        <div className="group hover:bg-surface-2 text-onSurfaceLow rounded flex items-center text-base font-medium focus:outline-none p-1 relative cursor-pointer">
          <span className={"mx-auto w-6"}>
            <EyeIcon className={"w-4 h-4"} />
            {row?.executionStatus === "fail" && (
              <ErrorFilledIcon
                className={"w-4 h-4 absolute top-0 right-2 text-error"}
              />
            )}
          </span>
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
            value={
              <span className={"flex flex-row items-center space-x-2"}>
                <span className={"flex flex-row items-center space-x-1"}>
                  {row?.executionStatus === "fail" ? (
                    <ErrorFilledIcon className="w-4 h-4 text-error" />
                  ) : (
                    <CheckCircleIcon className="w-4 h-4 text-success" />
                  )}
                  <Typography
                    color={
                      row?.executionStatus === "fail" ? "error" : "success"
                    }
                    noMargin
                    noPadding
                    size={"subBody"}
                    tag={"span"}
                  >
                    {row?.executionStatus}
                  </Typography>
                </span>
                <Typography
                  color={row?.executionStatus === "fail" ? "error" : "success"}
                  size={"subBody"}
                  tag={"span"}
                >
                  ({row?.confirmations} confirmations)
                </Typography>
              </span>
            }
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
