import {Grid, Typography} from "ui";

export const DoubleRowColumn = ({values}: {values: (number | string)[]}) => {
  return <Grid columns={1}>
    <Typography tag={"span"} bold>{values?.[0]}</Typography>
    <Typography tag={"span"}>{values?.[1]}</Typography>
  </Grid>
}
