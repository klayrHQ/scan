import React, {FC} from "react"
import { Avatar} from "../avatar/avatar";
import {FiltersType} from "../../types";
import {Typography} from "../typography/typography";
import {Grid} from "../grid/grid";
import {cls} from "../../assets/utils";
import {Input} from "../input/input";

interface UserFilterProps {
  title?: string
  className?: string
  senderClassName?: string
  recipientClassName?: string
  type: "sender" | "recipient"
  setType: (type: "sender" | "recipient") => void
  filters: FiltersType | undefined
  filterItems: Function
  setFilters: React.Dispatch<React.SetStateAction<FiltersType | undefined>>
  results: Array<{ type: string, username?: string, id: string }>
  senderInput: string
  recipientInput: string
  hide: boolean
  setHide: (hide: boolean) => void
}

export const UserFilter: FC<UserFilterProps> = ({
  title,
  className,
  senderClassName,
  recipientClassName,
  type,
  setType,
  filters,
  setFilters,
  filterItems,
  results,
  senderInput,
  recipientInput,
  hide,
  setHide,
}) => {

  return (
    <Grid
      flex
      className={cls(["gap-4", className])}
    >
      <Typography color={"onSurfaceHigh"} tag={"h3"} size={"Heading5"}>{title || "Sender/Recipient"}</Typography>
      <Grid columns={2} className={"gap-8"}>
        <div className={cls([senderClassName])}>
          <Typography tag={"span"}>{"Sender"}</Typography>
          <Input
            styleType={"tertiary"}
            onBlur={() => setTimeout(() => setHide(true), 100)}
            onFocus={() => {
              setType("sender")
              setHide(false)
            }}
            onChange={(e) => {
              setType("sender")
              setFilters(previousFilters => ({
                ...previousFilters,
                sender: e.target.value
              }))
            }}
            onKeyDown={(e) => {
              setHide(false)
              if (e.key === "Enter") {
                filterItems()
              }
            }}
            autoComplete="off"
            value={
              filters?.sender || ""
            }
            width={"full"}
          />
          <div className="w-full relative">
            {!hide &&
              type === "sender" &&
              senderInput?.length > 2 &&
              results &&
              results.length > 0 && (
                <div className="absolute rounded bg-background text-onBackgroundHigh z-40 overflow-hidden">
                  <div>
                    {results.map((result, index) => {
                      if(result.type === "account")
                        return (
                          <div
                            key={index}
                            className="cursor-pointer min-w-[170px] w-full md:w-auto py-2 odd:bg-background even:bg-surface-3 px-4"
                            onClick={() => {
                              setFilters(previousFilters => ({
                                ...previousFilters,
                                sender: result.username ? result.username : result.id
                              }))

                              setHide(true)
                            }}
                          >
                            {
                              <span className="flex flex-row">
                              <Avatar className="mr-2" address={result?.id} size={20} />
                                {result.username ? result.username : result.id}
                            </span>

                            }
                          </div>
                        )
                    })}
                  </div>
                </div>
              )}
          </div>
        </div>
        <div className={cls([recipientClassName])}>
          <Typography tag={"span"}>{"Recipient"}</Typography>
          <Input
            styleType={"tertiary"}
            onBlur={() => setTimeout(() => setHide(true), 100)}
            onFocus={() => {
              setType("sender")
              setHide(false)
            }}
            onChange={(e) => {
              setType("recipient")
              setFilters(previousFilters => ({
                ...previousFilters,
                recipient: e.target.value
              }))
            }}
            onKeyDown={(e) => {
              setHide(false)
              if (e.key === "Enter") {
                filterItems()
              }
            }}
            autoComplete="off"
            value={
              filters?.recipient || ""
            }
            width={"full"}
          />
          <div className="w-full relative">
            {!hide &&
              type === "recipient" &&
              recipientInput?.length > 2 &&
              results &&
              results.length > 0 && (
                <div className="absolute rounded bg-background text-onBackgroundHigh z-40 overflow-hidden">
                  <div>
                    {results.map((result, index) => {
                      if(result.type === "account")
                        return (
                          <div
                            key={index}
                            className="cursor-pointer min-w-[170px] w-full md:w-auto py-2 odd:bg-background even:bg-surface-3 px-4"
                            onClick={() => {
                              setFilters(previousFilters => ({
                                ...previousFilters,
                                recipient: result.username ? result.username : result.id
                              }))

                              setHide(true)
                            }}
                          >
                            {
                              <span className="flex flex-row">
                              <Avatar className="mr-2" address={result?.id} size={20} />
                                {result.username ? result.username : result.id}
                            </span>
                            }
                          </div>
                        )
                    })}
                  </div>
                </div>
              )}
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
