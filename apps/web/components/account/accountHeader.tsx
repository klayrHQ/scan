import {Grid, KeyValueRow, ValueFormatter} from "ui";
import {CopyButton} from "../data/copy";
import {TableSlice} from "../../slices/table";
import {tokenColumns} from "./table/columns/tokenColumns";
import React from "react";
import {AccountHeader as AccountHeaderSlice} from "../../slices/accountHeader";
import {Tokens} from "./tabContent/tokens";

export const AccountHeader = ({
  queryData
}: {
  queryData: any
}) => {

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
          label={<ValueFormatter value={"Total Transactions"} type={"string"} format={"plain"} />}
          value={queryData ? <ValueFormatter value={queryData["account-id-transactions"]?.meta.total} type={"string"} format={"number"} /> : ""}
        />
      </Grid>
      <Grid className={"w-full"}>
        <Tokens queryData={queryData} />
      </Grid>
    </Grid>
  )
}
