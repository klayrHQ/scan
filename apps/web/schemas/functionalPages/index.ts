export const functionalPages: { name: string, icon: any, title: string }[] = [];

export const functionalPageNames: string[] = functionalPages.map(
  (doc) => doc.name,
);
export const functionalPageIcons: { name: string; title: undefined | string; icon: any }[] =
  functionalPages.map((doc) => ({
    name: doc.name,
    icon: doc.icon,
    title: doc.title,
  }));
