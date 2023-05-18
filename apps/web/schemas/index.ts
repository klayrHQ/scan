import topNavigation from "./layout/topNavigation";
import settings from "./framework/settings";
// import {slices} from "./slices";
import footer from "./layout/footer";
import imageCdn from "./framework/imageCdn";
import tables from "./tables/tables";
import queries from "./tables/queries";
import subQueries from "./tables/subQueries";
import column from "./tables/column";
import infoBar from "./layout/infoBar";
// import {functionalPages} from "./functionalPages";

export const schemaTypes = [
  settings,
  topNavigation,
  footer,
  imageCdn,
  tables,
  queries,
  subQueries,
  column,
  infoBar
]; //, ...functionalPages] //, ...slices];
