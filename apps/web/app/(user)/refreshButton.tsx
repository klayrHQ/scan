"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { cls } from "ui";

export default function RefreshButton({
  isDraftMode,
}: {
  isDraftMode: boolean;
}) {
  const router = useRouter();

  return (
    <>
      {isDraftMode && (
        <ArrowPathIcon
          onClick={(e) => {
            e.preventDefault();
            router.refresh();
          }}
          className={cls([
            "w-5 h-5 text-onTopbar",
            "transition-transform hover:rotate-90",
            "hover:text-onSurfacePrimaryLow cursor-pointer",
            "flex-shrink-0 rounded-full border-0 outline-0",
          ])}
        />
      )}
    </>
  );
}
