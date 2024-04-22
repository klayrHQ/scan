import { Grid, KeyValueRow, Typography } from "ui";

export const ValidatorKpis = ({stats}: any) => {
  const validatorKpis = [
    {
      total:
        stats?.active +
        stats?.standby +
        stats?.ineligible +
        stats?.banned +
        stats?.punished,
      label: "Total validators",
    },
    {
      total: stats?.active,
      label: "Active validators",
    },
    {
      total: stats?.standby,
      label: "Standby validators",
    },
    {
      total: stats?.ineligible,
      label: "Ineligible validators",
    },
    {
      total: stats?.banned,
      label: "Banned validators",
    },
    {
      total: stats?.punished,
      label: "Punished validators",
    },
  ];
  return (
    <Grid
      className={"bg-surface-1 p-4 rounded shadow-xl"}
      columns={2}
      mobileColumns={3}
      gap={5}
    >
      {validatorKpis.map((kpi: any) => {
        return (
          <KeyValueRow
            key={kpi.label}
            label={kpi.label}
            value={
              <Typography
                className={"font-bold"}
                color={"onSurfaceHigh"}
                tag={"span"}
                size={"Heading5"}
              >
                {kpi.total}
              </Typography>
            }
            col
            inline
          />
        );
      })}
    </Grid>
  );
};
