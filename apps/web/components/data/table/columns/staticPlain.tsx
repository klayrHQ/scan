import {ValueFormatter} from "ui";

export const StaticPlainColumn = ({values}: {values: any}) => {
  return <>{<ValueFormatter value={values.value} {...values.format} />}</>
}
