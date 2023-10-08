import {Grid, KeyValueRow, ValueFormatter} from "ui";

export const Validator = ({
  queryData
}: {
  queryData: any
}) => {

  return (
    <Grid className={"mt-2"} columns={6} mobileColumns={1} gap={4}>
      <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Validator Weight"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].validatorWeight} type={"beddows"} format={"currency"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Total Stake"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].totalStake} type={"beddows"} format={"currency"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Self Stake"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].selfStake} type={"beddows"} format={"currency"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Generated Blocks"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].generatedBlocks} type={"number"} format={"number"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Last Generated Height"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].lastGeneratedHeight} type={"number"} format={"number"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Consecutive Missed Blocks"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].consecutiveMissedBlocks} type={"number"} format={"number"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Last Commission Increase"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].lastCommissionIncreaseTimestamp} type={"timestamp"} format={"fromNow"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Total Commission"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].totalCommission} type={"beddows"} format={"currency"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Earned Rewards"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].earnedRewards} type={"beddows"} format={"currency"} />}
      />
        <KeyValueRow valueBold valueSize={"subBody"} className={"bg-surface-1 p-2 rounded"}
        col
        label={<ValueFormatter value={"Total Self Stake Rewards"} type={"string"} format={"plain"} />}
        value={<ValueFormatter value={queryData["account-validator-id"].data[0].totalSelfStakeRewards} type={"beddows"} format={"currency"} />}
      />
    </Grid>
  )
}