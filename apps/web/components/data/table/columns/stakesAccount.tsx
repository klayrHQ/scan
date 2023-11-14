import { ColumnProps } from "./index";
import { ValueFormatter } from "ui/atoms/valueFormatter/valueFormatter";
import {Avatar} from "ui/atoms/avatar/avatar";
import {RPCResponses} from "@liskscan/lisk-service-client/lib/types";
import Link from "next/link";

export const StakesAccountColumn = ({ params, values, queryData }: ColumnProps&{values: any[], queryData?: {validators_dontTouch:RPCResponses<"get.pos.validators">}}) => {
  console.log(values,"random")
    return (
      <span className={"flex flex-col space-y-2 p-2 rounded align-right  w-full"}>
      {values[0].value.map((value:{amount: string, address: string, name: string}, index: number) => (
        <Link href={`/account/${value.address}`} prefetch={false}><span className={"flex flex-col w-full justify-between space-y-2 bg-surface-1 p-2 rounded items-center"}
                                                                key={`${values[0]._key}-${index}`}>
<span className={"flex flex-row space-x-2 items-center"}>
  <Avatar address={value.address} size={20} />
  <ValueFormatter
    // @ts-ignore
    value={value.name}
    {...values[0].format}
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

};
