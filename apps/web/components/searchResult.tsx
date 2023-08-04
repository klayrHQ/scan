import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SearchResult = ({
  saveSearch,
  setOpen,
  menuCloseFunction,
  type,
  data,
}: {
  type: "account" | "transaction" | "event" | "block" | "stake";
  data: { value: string; label: string };
  saveSearch: Function;
  setOpen: (state: boolean) => void;
  menuCloseFunction?: () => void;
}) => {
  const router = useRouter();

  const goToResult = (address?: string, username?: string) => {
    // router.push(`/${type}/${data.value}`);
    saveSearch(data.value, data.label);
    // setOpen(false);
    // menuCloseFunction && menuCloseFunction();
  };
  return <Link href={`/${type}/${data.value}`}><div onClick={() => goToResult()}>{data.label}</div></Link>;
};
