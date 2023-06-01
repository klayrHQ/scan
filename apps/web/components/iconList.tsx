import * as Solid from "@heroicons/react/24/solid";
import * as Outline from "@heroicons/react/24/outline";
import {ReactElement} from "react";

const getIconsList = () => {
  const icons: Record<string, ReactElement> = {};
  Object.keys(Solid).map((name) => {
    // @ts-ignore
    const SolidTag = Solid[name];
    // @ts-ignore
    const OutlineTag = Outline[name];
    icons[`${name}Solid`] = (
      <SolidTag className={"flex-shrink-0 h-6 w-6 text-onSurfaceLinkMedium"} />
    );
    icons[`${name}Outline`] = (
      <OutlineTag
        className={"flex-shrink-0 h-6 w-6 text-onSurfaceLinkMedium"}
      />
    );
  });
  return icons;
};

export { Solid, Outline };
export const iconsList = getIconsList();
export const iconsListKeys = Object.keys(iconsList);
export type IconListTypes = keyof typeof iconsList;
