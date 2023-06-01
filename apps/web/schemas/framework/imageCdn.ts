import {ImagesIcon} from "@sanity/icons";
import {defineType} from "sanity";

export default defineType({
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
});
