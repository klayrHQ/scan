import {ColumnProps} from "./index";
import {CountryFlag} from "../../../../slices/countryFlag";

export const CountryFlagColumn = ({values}: ColumnProps) => {
  return <>{<CountryFlag countryCode={values[0].value} />}</>
}
