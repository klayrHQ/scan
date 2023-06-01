import { sanityClient } from "../sanity.client";

export type FooterListType = {
  title: string;
  items: Array<{
    _key: string;
    label: string;
    href: string;
  }>;
};

export type FooterType = {
  lists: Array<FooterListType>;
};
export const getFooter = async (): Promise<FooterType> =>
  sanityClient.fetch(`*[_type == "footer" && _id == "footer"][0]`);
