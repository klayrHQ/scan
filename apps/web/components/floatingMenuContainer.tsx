import {FloatingMenuItem} from "./layout/floatingMenuItem";
import {FloatingMenu} from "ui/atoms/floatingMenu/floatingMenu";
import React from "react";

export const FloatingMenuContainer = ({menuItems}: {menuItems: Array<any>}) => {
  return (
    <FloatingMenu
      buttons={[
        <FloatingMenuItem icon={"home"} label={"Home"} link={"/"} key={"flmihome"}/>,
        menuItems.map((item: any) => {
          const labelCheck = ["transactions", "validators", "stakes"]
          if (labelCheck.indexOf(item.label.toLowerCase()) > -1) return (
            <FloatingMenuItem
              label={item.label}
              link={item.link}
              icon={
                item.label.toLowerCase() === "transactions" ? "globe" :
                  item.label.toLowerCase() === "validators" ? "users" :
                    item.label.toLowerCase() === "stakes" ? "archive" :
                      "home"
              }
              key={item.key}
            />
          )
          else return
        })
      ]}
    />
  )
}