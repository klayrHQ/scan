import { FC } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import {TableProps} from "../../organisms/table/table";

export interface LinkProps {
  link: string
  children: any
  color?: string
  className?: string
  activeClassName?: string
  href: string
  onClick?: () => void
  style?: {}
}

export const Link = ({
  color = "info",
  children,
  link = "/",
  className,
  activeClassName,
  onClick,
  href = "/",
  style,
  ...props
}: LinkProps) => {

  const router = useRouter()
  const isActive = router.pathname.split("/")[1] === link.split("/")[1]

  return (
    <NextLink className="no-underline" prefetch={false} href={href} as={link}>
      <span
        onClick={() => onClick && onClick()}
        className={[
          `cursor-pointer text-${color} ${
            isActive && activeClassName ? activeClassName : className
          }`,
        ].join(" ")}
        style={style}
      >
        {children}
      </span>
    </NextLink>
  )
}
