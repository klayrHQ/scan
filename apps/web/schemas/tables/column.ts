import { SanityValue } from "../layout/value";
import {NrColumn, OrColumn, ValueColumn} from "../../components/data";

export default {
  name: "column",
  type: "document",
  title: "Column",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name (Descriptive)",
    },
    {
      name: "headValues",
      type: "array",
      title: "Head label",
      of: [{ type: "object", fields: SanityValue }],
    },
    {
      name: "component",
      type: "string",
      title: "Column component",
      options: {
        list: [{ title: "Default head column", value: "DefaultHeadColumn" }],
      },
    },
    {
      name: "showOn",
      type: "string",
      title: "Show",
      options: {
        list: [
          { title: "Always", value: "always" },
          { title: "Only on mobile", value: "mobile" },
          { title: "Only on tablet", value: "tablet" },
          { title: "Only on desktop", value: "desktop" },
          { title: "On Mobile and Tablet", value: "mobileTablet" },
          { title: "On Tablet and Desktop", value: "tabletDesktop" },
          { title: "On Mobile and Desktop", value: "mobileDesktop" },
        ],
      },
    },
    {
      name: "className",
      type: "string",
      title: "className",
    },
    {
      name: "valueComponent",
      type: "string",
      title: "Value component",
      options: {
        list: [
          { title: "Plain", value: "PlainColumn" },
          { title: "Logo", value: "LogoColumn" },
          { title: "Or Column", value: "OrColumn" },
          { title: "Double row", value: "DoubleRowColumn" },
          { title: "Grid colum (2)", value: "GridColumn" },
          { title: "Date", value: "DateColumn" },
          { title: "Modal Button", value: "TxPopoverColumn" },
          { title: "Avatar + username/address", value: "AvatarColumn" },
          {
            title: "Validator Status + Allocated time",
            value: "ValidatorStatusColumn",
          },
          { title: "Index nr", value: "NrColumn" },
          { title: "Stakes", value: "StakesColumn" },
          { title: "Value", value: "ValueColumn" },
          { title: "Stakes Account", value: "StakesAccountColumn" },
          { title: "Country Flag", value: "CountryFlagColumn"}
        ],
      },
    },
    {
      name: "valueKeys",
      type: "array",
      title: "Value keys",
      of: [{ type: "object", fields: SanityValue }],
    },
  ],
};
