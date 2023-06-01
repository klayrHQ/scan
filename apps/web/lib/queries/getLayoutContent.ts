// import { sanityClient } from "../sanity.client";
import {SanityClient} from "@sanity/preview-kit/client";

export const getLayoutContent = async (client: SanityClient) => {
  const response = await client.fetch(
    `*[_type == "menu" || _type == "settings" || _type == "footer" || _type == "infobar"]`
  );

  const result: Record<string, any> = {};
  response.map((res: any) => (result[res._type] = res));
  return {
    menuItems: result.menu.items,
    infoBar: result.infobar,
    footer: result.footer.lists,
    settings: result.settings,
  };
  // *[_type == "menu" || _type == "settings" || _type == "footer" || _type == "infobar"]
};
