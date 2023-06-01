import { useState } from "react";
import { MenuItem } from "./menuItem";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import {IconListTypes, iconsList} from "../iconList";

export const SubMenu = ({
  label,
  items,
}: {
  label: string;
  items: {
    link: string;
    disabled?: boolean;
    icon: IconListTypes;
    badge?: string;
    label: string;
    subLabel: string;
  }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div onClick={() => setOpen(true)}><MenuItem label={label} link={"#"} /></div>
        {open && (
          <ClickAwayListener onClickAway={() => setOpen(!open)}>
            <div className="absolute z-50 left-36 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-max sm:px-0 ">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden ">
                <div
                  className={`relative grid grid-rows-3 grid-flow-col gap-6 bg-background px-5 py-6 sm:gap-8 sm:p-8`}
                >
                  {items?.map((item) => {
                    return (
                    <Link
                      href={item.link}
                      key={`sm-${item.link}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      color="primary"
                      className={[
                        "group -m-3 p-3 flex flex-row items-start rounded-lg relative",
                        item.disabled
                          ? "cursor-none bg-surface-1 opacity-80"
                          : "hover:bg-surface-3 transition ease-in-out duration-150 cursor-pointer ",
                      ].join(" ")}

                      // activeClassName="group -m-3 p-3 flex items-start rounded-lg bg-surface-3 transition ease-in-out duration-150 "
                    >
                      <div>{iconsList[item.icon]}</div>
                      <div className="ml-4 ">
                        {item.badge ? (
                          <span className="absolute text-10 top-2 right-2 bg-secondary rounded text-onPrimaryHigh font-medium px-2 py-1">
                            {item.badge}
                          </span>
                        ) : (
                          ""
                        )}
                        <div
                          className={[
                            "my-2 text-base font-medium text-onSurfaceHigh",
                            item.disabled ? "" : "group-hover:underline",
                          ].join(" ")}
                        >
                          {item?.label}
                        </div>
                        <span className="mt-0 text-base text-onSurfaceMedium">
                          {item?.subLabel}
                        </span>
                      </div>
                    </Link>
                  )})}
                </div>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </>
  );
};
