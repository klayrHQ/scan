import {Grid, KeyValueRow, ValueFormatter} from "ui";
import {CopyButton} from "../data/copy";
import {TableSlice} from "../../slices/table";
import {tokenColumns} from "./table/columns/tokenColumns";
import React from "react";
import {AccountHeader as AccountHeaderSlice} from "../../slices/accountHeader";
import {Tokens} from "./tabContent/tokens";
import {Icon} from "ui/atoms/icon/icon";
import {ConsoleLogTester} from "../consoleLogTester";

export const AccountHeader = ({
  queryData,
  address,
}: {
  queryData: any
  address: string
}) => {
  const transactions = {
    in: queryData["account-id-transactions"]?.data.filter((tx: { sender: { address: string; }; }) => tx.sender.address !== address).length,
    out: queryData["account-id-transactions"]?.data.filter((tx: { sender: { address: string; }; }) => tx.sender.address === address).length,
  }

  return (
    <Grid
      className={"max-w-app mx-auto w-full gap-4"}
      columns={2}
      mobileColumns={1}
      flex
      gap={4}
    >
      <Grid
        className={"max-w-app bg-surface-1 p-4 w-full lg:w-1/3 rounded"}
        gap={3}
        columns={1}
        mobileColumns={1}
        justifyBetween
      >
        <AccountHeaderSlice
          slices={[]}
          name={"accountHeader"}
          values={{value: "account-auth.meta", name: "value", type: "key"}}
          justifyBetween
          gap={8}
          cols={2}
          mobileColumns={2}
          isFlex
          copy={-1}
          queryData={queryData}
        />
        <KeyValueRow
          color={"onPrimary"}
          label={<ValueFormatter value={"Nonce"} type={"string"} format={"plain"} />}
          value={queryData ? <ValueFormatter value={queryData["account-auth"]?.data.nonce} type={"number"} format={"shortAddress"} /> : ""}
        />
        <KeyValueRow
          color={"onPrimary"}
          label={<ValueFormatter value={"Public Key"} type={"string"} format={"plain"} />}
          value={queryData ?
            <div className={"inline-flex gap-1 items-center"}>
              <ValueFormatter value={queryData["account-auth"]?.meta.publicKey} type={"string"} format={"shortAddress"} />
              <CopyButton value={queryData["account-auth"]?.meta.publicKey} />
            </div>
            : ""}
        />
        <KeyValueRow
          color={"onPrimary"}
          label={<ValueFormatter value={"Transactions"} type={"string"} format={"plain"} />}
          value={
            queryData ?
              <div className={"flex"}>
                <Icon color={"error"} icon={"arrowUp"} />
                <ValueFormatter
                  value={transactions.out}
                  type={"number"}
                  format={"number"}
                />
                <Icon color={"success"} icon={"arrowDown"} />
                <ValueFormatter
                  value={transactions.in}
                  type={"number"}
                  format={"number"}
                />
              </div>
              :
              ""
          }
        />
      </Grid>
      <Grid className={"w-full"}>
        <Tokens queryData={queryData} />
      </Grid>
    </Grid>
  )
}
