import { ColumnProps } from "./index";
import { Grid, ValueFormatter } from "ui";
import React, { useState } from "react";

export const ValueColumn = ({
  queryData,
  index,
  data,
}: {
  menuCloseFunction?: () => void;
  mobile?: boolean;
  queryData?: any;
  data?: any;
  index: number;
} & ColumnProps) => {
  const [open, setOpen] = useState(false);
  const row = queryData?.transactions
    ? queryData?.transactions?.data?.[index]
    : queryData?.["transaction-moduleCommand"]?.data?.[index];

  const sumAmounts = (stakesArray: any) => {
    return stakesArray
      .reduce((total: bigint, stake: { amount: string }) => {
        return total + BigInt(stake.amount || 0);
      }, BigInt(0))
      .toString();
  };
  const totalAmount: string =
    row?.params.stakes && Array.isArray(row.params.stakes)
      ? sumAmounts(row.params.stakes)
      : "-";

  const stakesSum = totalAmount;

  const stakesSumNumber = parseFloat(totalAmount);
  function value(row: any) {
    if (row?.moduleCommand === "pos:changeCommission") {
      return (
        <ValueFormatter
          value={`${row?.params.newCommission || 0}`}
          format={"commission"}
        />
      );
    }
    if (row?.moduleCommand === "pos:registerValidator") {
      return (
        <ValueFormatter
          value={row?.params.name || "unknown"}
          {...row?.params?.format}
        />
      );
    }
    if (row?.moduleCommand === "pos:unlock") {
      return <ValueFormatter value={"-"} />;
    }
    if (row?.moduleCommand === "pos:claimRewards") {
      return row?.params?.amount ? <ValueFormatter format={"currency"} value={row?.params.amount} /> : <ValueFormatter value={"-"} />;
    }
    if (row?.moduleCommand === "pos:stake") {
      return (
        <div className={stakesSumNumber > 0 ? "!text-success items-center" :
            "!text-error items-center"}>
          {stakesSum !== "-" && (
            <ValueFormatter format={"currency"} value={stakesSum} />
          )}
          {stakesSum === "-" && <ValueFormatter value={"-"} />}
        </div>
      );
    }
    if (row?.moduleCommand === "auth:registerMultisignature") {
      return (
        <ValueFormatter
          value={` ${row?.params.numberOfSignatures || 0} keys`}
        />
      );
    }
    if (row?.moduleCommand === "token:transfer") {
      return (
        <ValueFormatter  format={"currency"}
          value={row?.params.amount}
          {...row?.params?.format}
        />
      );
    }
    return "-";
  }
  return (
    <Grid className={"w-full"} columns={1} gap={2}>
      {value(row)}
    </Grid>
  );
};
