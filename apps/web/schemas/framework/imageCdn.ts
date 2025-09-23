/* eslint-disable import/no-anonymous-default-export */
import { ImagesIcon } from "@sanity/icons";

export default {
  name: "imageCdn",
  type: "document",
  title: "CDN Images",
  icon: ImagesIcon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
