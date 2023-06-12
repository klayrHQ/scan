import { cls, Typography } from "ui";
import { usePathname } from "next/navigation";
import React from "react";

export interface MenuItemProps {
  label: string;
  link: string;
}

export const MenuItem = ({ label, link }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.split("/")[1] === link?.split("/")[1];
  const className = !isActive
    ? ["hover:bg-menuButton", "hover:text-onMenuButton", "md:text-onInfobar"]
    : ["md:bg-menuButton", "text-onMenuButton"];
  return (
    <Typography
      tag={"span"}
      className={cls([
        "block cursor-pointer",
        "group",
        "px-3 py-2 mr-1",
        "rounded-md",
        "text-base no-underline",
        "font-medium",
        "flex flex-row",
        ...className,
      ])}
    >
      {label}
      {link === "#" && (
        <svg
          className="text-onTopbar ml-2 h-5 w-5 group-hover:text-onMenuButton -mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Typography>
  );
};
