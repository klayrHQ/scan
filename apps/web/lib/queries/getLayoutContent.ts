import { sanityClient } from "../sanity.client";

export const getLayoutContent = async () => {
  const response = await sanityClient.fetch(
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
