import React from "react";
import Link from "next/link";
import {Icon} from "ui/atoms/icon/icon";
import {Typography} from "ui";
import {iconVariants} from "ui/types";

export interface FloatingMenuItemProps {
  label: string;
  link: string;
  icon: iconVariants;
}

export const FloatingMenuItem = ({ label, link, icon }: FloatingMenuItemProps) => {

  return (
    <Link className={"flex flex-col items-center text-center py-3"} href={link} prefetch={false}>
      <Icon color={"onTopbar"} icon={icon} size={"small"}/>
      <Typography color={"onTopbar"} tag={"span"} size={"subBody"}>
        {label}
      </Typography>
    </Link>
  );
};
