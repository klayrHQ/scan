import { sanityClient } from "../sanity.client";

export type InfoBarKPISType = {
  label: string;
  key: string;
  backup: string;
};

export const getInfoBarKPIS = async (): Promise<{ kpis: InfoBarKPISType[] }> =>
  sanityClient.fetch(`*[_type == "infobar" && _id == "infobar"][0]`);
