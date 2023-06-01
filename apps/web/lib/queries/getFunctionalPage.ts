import {sanityClient} from "../sanity.client";
import {functionalPageNames} from "../../schemas/functionalPages";

export const getFunctionalPage = async (type: typeof functionalPageNames[number], id: typeof functionalPageNames[number]) =>
  await sanityClient.fetch(`*[_type == "${type}" && _id == "${id}"][0]`);
