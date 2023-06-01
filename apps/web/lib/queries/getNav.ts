import { sanityClient } from "../sanity.client";

export type menuItem = {
  label: string;
  link: string;
  _key: string;
  subMenu?: any[]
};

export const getNav = async (): Promise<menuItem[]> =>
  sanityClient.fetch(`*[_type == "menu"]{
    items[]{
      ...,
    }
  }[0].items`);
