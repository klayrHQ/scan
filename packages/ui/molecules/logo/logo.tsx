import React from 'react';
import {Link} from "../../atoms/link/link";

interface LogoProps {
  className?: string
  color?: string
  image?: any
  title?: string
  link: string
  href: string
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Logo = ({
  className,
  color,
  title,
  image,
  link = "/",
  href = "/",
  size,
  ...props
}: LogoProps) => {
  return (
    <div className="flex-shrink-0 items-center">
      <Link
        color={color}
        link={link}
        href={href}
        className={[
          "cursor-pointer items-center float-left",
          " text-lg md:text-2xl items-center flex font-bold",
          size === "small" ? "text-sm" : size === "large" ? "text-xl" : ""
        ].join(" ")}
      >
        {image}
        <div>
          {title}
        </div>
      </Link>
    </div>
  );
};
