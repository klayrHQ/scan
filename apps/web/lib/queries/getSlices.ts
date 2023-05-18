import { sanityClient } from "../sanity.client";
import { groq } from "next-sanity";

export const getSlicesQuery = groq`
  *[_type=="pages" && slug.current == "home"]{
    ...,
    sections[]->
  }[0]`;

export const getSlices = async () => {
  const page = await sanityClient.fetch(getSlicesQuery);
  return page.sections;
};
