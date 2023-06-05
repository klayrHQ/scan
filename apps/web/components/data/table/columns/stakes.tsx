import { ColumnProps } from "./index";
import { cls, Typography } from "ui";
import { ValueFormatter } from "../../../valueFormatter";
import {Avatar} from "ui/atoms/avatar/avatar";
import {RPCResponses} from "@liskscan/lisk-service-client/lib/types";
import Link from "next/link";

export const StakesColumn = ({ params, values, queryData }: ColumnProps&{queryData?: {validators_dontTouch:RPCResponses<"get.pos.validators">}}) => {
  if (queryData?.validators_dontTouch?.status === "success") {
    return (
      <span className={"flex flex-col space-y-2 p-2 rounded align-right  w-full"}>
      {values[0].value.map((value:{amount: string, validatorAddress: string}, index: number) => (
        <Link href={`/account/${value.validatorAddress}`}><span className={"flex flex-row w-full justify-between space-x-2 bg-surface-1 p-2 rounded items-center"}
              key={`${values[0]._key}-${index}`}>
<span className={"flex flex-row space-x-2 items-center"}>
  <Avatar address={value.validatorAddress} size={20} />
  <ValueFormatter
    // @ts-ignore
    value={queryData?.validators_dontTouch.data.find((validator)=>validator.address === value.validatorAddress).name || value.validatorAddress}
    {...values[1].format}
  />
</span>

          <ValueFormatter
            value={value.amount}
            {...values[0].format}
          />
        </span>
        </Link>
      ))}
</span>
    );
  }
return <></>
};
