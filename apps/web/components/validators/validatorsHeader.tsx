import {Grid, KeyValueRow, Typography, ValueFormatter} from "ui";
import {ConsoleLogTester} from "../consoleLogTester";
import {Divider} from "ui/atoms/divider/divider";

export const ValidatorsHeader = ({
  kpis
}: {
  kpis: {
    validators: {
      label: string,
      total: number | string
    }[]
    generators: {
      address: string
      name: string
    }[]
  }
}) => {

  return (
    <Grid
      columns={3}
      gap={8}
      className={"max-w-app w-app mx-auto min-h-50"}
    >
      <Grid flex columns={1} className={"px-5"}>
        <Typography tag={"h1"} size={"Heading3"}>
          {"Validators"}
        </Typography>
        <Typography tag={"p"}>
          {"Discover a comprehensive overview of all validators and essential on-chain statistics."}
        </Typography>
      </Grid>
      <Grid
        className={"bg-surface-1 p-4 rounded shadow-xl"}
        columns={2}
        mobileColumns={3}
        gap={5}
      >
        {
          kpis?.validators?.map(total => {
            return (
              <KeyValueRow
                label={total.label}
                value={<Typography className={"font-bold"} color={"onPrimary"} tag={"span"} size={"Heading5"}>{total.total}</Typography>}
                col
                inline
              />
            )
          })
        }
      </Grid>
      <div className={"flex-col flex gap-4 bg-surface-1 py-4 rounded shadow-xl"}>
        <Grid className={"w-app mx-auto"} flex>
          <Typography className={"font-semibold"} color={"onPrimary"} tag={"span"}>
            {"Next Generators"}
          </Typography>
        </Grid>
        <Divider color={"surface-2"} width={"full"}/>
        <Grid
          className={"w-app mx-auto"}
          columns={2}
          mobileColumns={3}
          gap={8}
        >
          {
            kpis.generators.map(generator => (
              <ValueFormatter
                value={{address: generator?.address, name: generator?.name}}
                format={"avatarAddress"}
                link={{href: `/account/${generator?.address}`}}
              />
            ))
          }
        </Grid>
      </div>
    </Grid>
  )
}