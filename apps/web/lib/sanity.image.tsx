import { createBuilder } from "sanity-image";
import { dataset, projectId } from "./sanity.client";

export const builder = createBuilder({
  dataset,
  projectId,
});
