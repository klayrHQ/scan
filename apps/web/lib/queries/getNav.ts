import { sanityClient } from "../sanity.client";

export type menuItem = {
  label: string;
  href: string;
  _key: string;
};

export const getNav = async (): Promise<menuItem[]> =>
  sanityClient.fetch(`*[_type == "topNavigation"][0].menuItems`);
