import topNavigation from "./layout/topNavigation";
import settings from "./framework/settings";
import footer from "./layout/footer";
import imageCdn from "./framework/imageCdn";
import tables from "./tables/tables";
import queries from "./tables/queries";
import subQueries from "./tables/subQueries";
import column from "./tables/column";
import infoBar from "./layout/infoBar";
import { slices } from "./slices";
import pages from "./framework/pages";
import menu from "./framework/menu";

export const schemaTypes = [
  settings,
  topNavigation,
  footer,
  imageCdn,
  tables,
  queries,
  subQueries,
  column,
  infoBar,
  pages,
  menu,
  ...slices,
];
