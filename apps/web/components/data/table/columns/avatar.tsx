import { ColumnProps } from "./index";
import { ValueFormatter } from "ui";
import {KlayrAvatar} from "ui/atoms/klayrAvatar/klayrAvatar";
import React from "react";
import Link from "next/link";

export const AvatarColumn = ({ params, values }: ColumnProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Link href={`/account/${values[0]?.value?.address}`} className={"flex flex-row space-x-2 items-center"}  prefetch={false}>
      {values[0]?.value?.address && (
        <KlayrAvatar
          size={20}
          address={values[0].value.address}
        />
        // <Avatar key={values[0]?.value?.address} size={20} address={values[0].value.address} />
      )}

        <ValueFormatter
          value={values[0].value.name || values[0].value.address}
          {...values[0].format}
          format={!values[0].value.name ? "shortAddress" : "plain"}
        />
    </Link>
  );
  // <Typography
  //   tag={"span"}
  //   className={cls(["border-surfaceDark", params?.className])}
  //   {...params}
  // >
  //   {typeof values === "object" ? values[0] : values}
  // </Typography>
};
