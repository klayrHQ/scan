"use client"
import {useService} from "../../providers/service";
import React, {useEffect, useState} from "react";
import {getAccountQueries} from "./queries";
import {Container, Grid, Typography} from "ui";
import {AccountHeader} from "./accountHeader";
import {FilterButtons} from "ui/atoms/filterButtons/filterButtons";
import useQueryParams, {QueryParams} from "../../hooks/useQueryParams";
import {useSearchParams} from "next/navigation";
import {Transactions} from "./tabContent/transactions";
import {Validator} from "./tabContent/validator";
import {Stakes} from "./tabContent/stakes";
import {Tokens} from "./tabContent/tokens";
import {Events} from "./tabContent/events";
import {Blocks} from "./tabContent/blocks";


const tabsComponents = {
  transactions: Transactions,
  validator: Validator,
  stakes: Stakes,
  tokens: Tokens,
  events: Events,
  blocks: Blocks,
}

type tabsTypes =
  | "transactions"
  | "validator"
  | "stakes"
  | "tokens"
  | "events"
  | "blocks"


export const Account = ({
  id,
    validatorData,
  initialData,
}: {
  id: string;
  validatorData: any
  initialData: any
}) => {

  const { setQueryParams } = useQueryParams<QueryParams>();
  const searchParams = useSearchParams();
  const {cache, setQueries, client} = useService()
  const [queryData, setQueryData] = useState(initialData)
  /*const temp = {
    auth: cache["account-auth"],
    events: cache["account-events"],
    balances: cache["account-id-balancec"],
    blocks: cache["account-id-blocks"],
    transactions: cache["account-id-transactions"],
    receivedStakes: cache["account-received-stakes"],
    rewardsClaimable: cache["account-rewards-claimable"],
    sentStakes: cache["account-stakes-sent"],
    unlocks: cache["account-unlocks"],
    validatorId: cache["account-validator-id"],
  }*/

  useEffect(() => {
    setQueries(getAccountQueries(id,parseInt(searchParams?.get("page") || "1")))
  }, [getAccountQueries])

  useEffect(() => {
    async function getClaims() {
      if(cache) {

        const claims = cache["account-id-transactions"]?.data?.filter((tx: { moduleCommand: string }) => {
          return tx.moduleCommand === "pos:claimRewards"
        })
        for (const claim of claims) {
          const response = await client.rpc("get.events", {
            transactionID: claim.id
          });
          if (response.status === "success") {
            const events = response.data.filter((event) => event.name === "rewardsAssigned")
            const index = cache["account-id-transactions"]?.data?.findIndex((tx: { id: string }) => tx.id === claim.id)
            cache["account-id-transactions"].data[index] = {...cache["account-id-transactions"]?.data?.[index], params: { amount: events?.reduce((sum: bigint, event) => sum + BigInt(event.data?.amount || "0"), BigInt(0)).toString() } }
          }
        }
        setQueryData(cache)
      }
    }
    // @ts-ignore
    getClaims()
  }, [cache])


  const handleChange = (value: string) => {
    // @ts-ignore
    setQueryParams({ tab: value, page: "1" });
  };

  const handleSubChange = (value: string) => {
    // @ts-ignore
    setQueryParams({ subTab: value });
  };

  // @ts-ignore
  const activeTab: tabsTypes = searchParams?.get("tab") || "transactions";
  const activeSubTab = searchParams?.get("subTab") || "stakes";

  const TabComponent = tabsComponents[activeTab]

  const buttons = [
    {
      label: "Transactions",
      state: "transactions"
    },
    {
      label: "Stakes",
      state: "stakes"
    },
    {
      label: "Tokens",
      state: "tokens"
    },
    {
      label: "Events",
      state: "events"
    },
  ]
if (queryData["account-validator-id"]?.data?.length > 0) {
  buttons.push({
    label: "Validator",
    state: "validator"
  })
}
if (queryData["account-id-blocks"]?.data?.length > 0) {
  buttons.push({
    label: "Blocks",
    state: "blocks"
  })
}
  const stakesTabButtons = [
    {
      label: "Outgoing Stakes",
      state: "stakes"
    },
    {
      label: "Incoming Stakes",
      state: "stakers"
    }
  ]
  return (
    <Container section gap={8}>
      <AccountHeader address={id} queryData={queryData} />
      <Grid className={"max-w-app mx-auto w-full shadow-xl p-4"} gap={2}>
        <FilterButtons buttons={buttons} onChange={handleChange} selection={activeTab} />
        {
          activeTab === "stakes" &&
          <FilterButtons buttons={stakesTabButtons} onChange={handleSubChange} selection={activeSubTab} />
        }
        <TabComponent validatorData={validatorData} queryData={queryData} tab={activeSubTab}/>
      </Grid>
    </Container>
  )
}
