import {Grid} from "ui";
import {ValueFormatter} from "../../../valueFormatter";
import {ColumnProps} from "./index";

export const DoubleRowColumn = ({values}: ColumnProps) => {
  return <Grid columns={1}>
    {values[0].value ? <ValueFormatter value={values[0].value} {...values[0].format} /> : <></>}
    {values[1].value ? <ValueFormatter value={values[1].value} {...values[1].format} /> : <></>}
  </Grid>
}
