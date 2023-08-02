import {Grid, Typography} from "ui";
import {ConsoleLogTester} from "../consoleLogTester";

export const ValidatorsHeader = ({kpis}: { kpis: any}) => {

  return (
    <Grid
      columns={3}
      gap={8}
      className={"max-w-app w-app mx-auto min-h-50 mb-4"}
    >
      <Grid flex columns={1} className={"px-4"}>
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
        gap={4}
      >
      </Grid>
      <Grid
        className={"bg-surface-1 p-4 rounded shadow-xl"}
        columns={2}
        mobileColumns={3}
        gap={4}
      >

      </Grid>
    </Grid>
  )
}