import {Formats, Grid, KeyValueRow, Typography, ValueFormatter, ValueTypes} from "ui";

export const Validator = ({
  queryData,
    validatorData
}: {
  queryData: any
  validatorData: any
}) => {
  const kpis: {
    label: string,
    value: string | number | any,
    type: ValueTypes,
    format: Formats,
  }[] = [
    {
      label: "Validator Weight",
      value: queryData["account-validator-id"]?.data[0]?.validatorWeight,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Total Stake",
      value: queryData["account-validator-id"]?.data[0]?.totalStake,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Self Stake",
      value: queryData["account-validator-id"]?.data[0]?.selfStake,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Generated Blocks",
      value: queryData["account-validator-id"]?.data[0]?.generatedBlocks,
      type: "number",
      format: "number",
    },
    {
      label: "Last Generated Height",
      value: queryData["account-validator-id"]?.data[0]?.lastGeneratedHeight,
      type: "number",
      format: "number",
    },
    {
      label: "Consecutive Missed Blocks",
      value: queryData["account-validator-id"]?.data[0]?.consecutiveMissedBlocks,
      type: "number",
      format: "number",
    },
    {
      label: "Last Commission Increase",
      value: validatorData?.lastCommissionIncreaseTimestamp,
      type: "timestamp",
      format: "fromNow",
    },
    {
      label: "Total Commission",
      value: queryData["account-validator-id"]?.data[0]?.totalCommission,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Commission %",
      value: queryData["account-validator-id"]?.data[0]?.commission / 100,
      type: "number",
      format: "percentage",
    },
    {
      label: "Earned Rewards",
      value: queryData["account-validator-id"]?.data[0]?.earnedRewards,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Total Self Stake Rewards",
      value: queryData["account-validator-id"]?.data[0]?.totalSelfStakeRewards,
      type: "beddows",
      format: "currency",
    },
    {
      label: "Max Height Generated",
      value: queryData["account-validator-id"]?.data[0]?.maxHeightGenerated,
      type: "number",
      format: "number",
    },
    {
      label: "Max Height Prevoted",
      value: queryData["account-validator-id"]?.data[0]?.maxHeightPrevoted,
      type: "number",
      format: "number",
    },
  ]

  const punishments = queryData["account-validator-id"]?.data[0]?.punishmentPeriods

  return (
    <Grid columns={1} flex gap={4}>
      {
        punishments &&
          <Grid className={"rounded p-4 bg-surface-1 w-full md:w-[350px] gap-4"} columns={1} flex gap={4}>
            <Typography className={"py-1 px-3 rounded-full w-max bg-copacabanaYellow"} tag={"span"}>{"Validator is being punished"}</Typography>
            {/*<Typography tag={"span"}>{"Details:"}</Typography>*/}
            <div className={"flex justify-between"}>
              <Typography tag={"span"}>{"Start height:"}</Typography>
              <Typography className={"font-bold"} tag={"span"}>{punishments[punishments.length - 1]?.start}</Typography>
            </div>
            <div className={"flex justify-between"}>
              <Typography tag={"span"}>{"End height:"}</Typography>
              <Typography className={"font-bold"} tag={"span"}>{punishments[punishments.length - 1]?.end}</Typography>
            </div>
          </Grid>
      }
      <Grid className={"mt-2"} columns={6} mobileColumns={1} gap={4}>
        {
          kpis?.map(kpi => (
            <KeyValueRow
              key={`validator-kpi-${kpi.label.split(" ").join("-")}`}
              valueBold
              valueSize={"subBody"}
              className={"bg-surface-1 p-2 rounded"}
              col
              gap={1}
              label={
                <ValueFormatter
                  format={"plain"}
                  type={"string"}
                  typography={[{key: "size", value: "subBody"}]}
                  value={kpi.label}
                />
              }
              value={
                <ValueFormatter
                  format={kpi.format}
                  type={kpi.type}
                  typography={[{key: "className", value: "font-bold"}]}
                  value={kpi.value}
                />
              }
            />
          ))
        }
      </Grid>
    </Grid>
  )
}