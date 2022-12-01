import {Link} from "../link/link";

export interface MenuItemProps  {
  link: string
  label: string
}

const MenuItem = ({
  link,
  label
}: MenuItemProps) => {
  return (
    <Link
      className={[
        "hover:bg-menuButton",
        "hover:text-onMenuButton",
        "cursor-pointer",
        "px-3 py-2 mr-1",
        "rounded-md",
        "text-base",
        "font-medium pointer",
      ].join(" ")}
      activeClassName={[
        "bg-menuButton",
        "text-onMenuButton",
        "cursor-pointer",
        "px-3 py-2 mr-1",
        "rounded-md",
        "text-base",
        "font-medium pointer",
      ].join(" ")}
      link={link}
      href={link}
      color={"onTopbar"}
    >
      {label}
    </Link>
  )
}