import React from "react";
import { cva } from "class-variance-authority";
import { cls } from "ui/utils";
import Image from "next/image";
import { ImageProps } from "next/dist/client/image";

interface ColectiImageProps extends ImageProps {
  type?:
    | "collectionCardHeader"
    | "collectionCardSubItem"
    | "avatar"
    | "avatarSmall"
    | "blur"
    | "informationCardImage"
    | "nftCard"
    | "logo";

  imageSrc?: string;
}

const colectiImageCva = cva(["object-cover"], {
  variants: {
    type: {
      avatar: "aspect-square rounded-full",
      avatarSmall: "aspect-square rounded-full",
      collectionCardSubItem: "w-full rounded-xs",
      collectionCardHeader: "w-full rounded",
      informationCardImage: "w-full rounded",
      nftCard: "w-full rounded",
      logo: "w-auto object-contain",
      blur: "",
      undefined: "",
    },
  },
});

export const ColectiImage = ({
  type,
  className,
  alt,
  ...props
}: ColectiImageProps) => (
  <Image
    alt={alt}
    className={colectiImageCva({
      className: `${cls([
        className,
        type ? `h-${type} max-h-${type}` : "w-full h-full",
      ])}`,
      type,
    })}
    {...props}
  />
);
