import {sanityClient} from "../../lib/sanity.client";
export const sanityFetch = async (query: string) => await sanityClient.fetch(query)
