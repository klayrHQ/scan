import table from "./table";
import titleBox from "./titleBox";
import { kpi } from "./kpi";
import tabs from "./tabs";
import transactionTabs from "./transactionTabs";
import { stakesAccount } from "./stakesAccount";
import { favorite } from "./favorite";
import accountHeader from "./accountHeader";
import {divider} from "./divider";
import {jsonItem} from "./jsonItem";
import {chart} from "./chart";
import newsGrid from "../news/newsGrid";
import {countryFlag} from "./countryFlag";

const sliceDocumentNames: {
  type: string;
}[] = [
  tabs,
  table,
  titleBox,
  kpi,
  stakesAccount,
  accountHeader,
  favorite,
  divider,
  jsonItem,
  chart,
  newsGrid,
  countryFlag,
  { name: "grid" },
  transactionTabs,
].map((doc) => ({
  type: doc.name,
}));

export default {
  name: "grid",
  type: "document",
  title: "Grid",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "options",
      type: "array",
      title: "Props",
      of: [
        {
          type: "object",
          name: "prop",
          fields: [
            {
              type: "string",
              name: "key",
              title: "Data key",
              options: {
                list: [
                  "columns",
                  "mobileColumns",
                  "className",
                  "justifyBetween",
                  "flex",
                  "gap",
                ],
              },
            },
            {
              type: "string",
              name: "value",
              title: "Value",
            },
          ],
        },
      ],
    },
    {
      name: "columns",
      type: "array",
      title: "Columns",
      of: [
        {
          type: "reference",
          to: [...sliceDocumentNames],
        },
      ],
    },
  ],
};
