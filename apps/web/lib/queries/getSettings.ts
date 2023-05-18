import {sanityClient} from "../sanity.client";
export type SettingsType = {
  logo: {
    asset: any
  },
  copyright: string
  title: string
  subtitle: string
}
export const getSettings = async (): Promise<SettingsType> =>
  sanityClient.fetch(`*[_type == "settings" && _id == "settings"][0]`);

