import {LiskService, NumberStringAndFromToNumber} from "@liskscan/lisk-service-client";
import { tableRowsType } from "ui/types";
import React from "react";
import { SearchResult } from "../components/searchResult";
import {getData} from "./sanity.service";

export const search = async (
  client: LiskService,
  saveSearch: Function,
  setOpen: (state: boolean) => void,
  menuCloseFunction?: () => void,
  value?: string,
  filter?: string
): Promise<any[]> => {
  const results: tableRowsType = [];
  if (value === undefined) {
    return results;
  }
  const searchType = inputRecognizer(value);
  console.log(searchType);
  if (searchType.type === "lisk32") {
    const account = await client.rpc("get.auth", { address: value });
    if (account.status === "success") {
      results.push({
        id: results.length.toString(),
        cols: [
          {
            value: (
              <SearchResult
                saveSearch={saveSearch}
                menuCloseFunction={menuCloseFunction}
                type={"account"}
                data={{
                  value,
                  label: account.meta.name ?? value,
                }}
              />
            ),
            className: "py-2 px-4 text-left",
          },
        ],
      });
    }
  }
  if (searchType.type === "blockHeight") {
    const block = await getBlockByHeight(client, value)
    if (block) {
      results.push({
        id: results.length.toString(),
        cols: [
          {
            value: (
              <SearchResult
                saveSearch={saveSearch}
                menuCloseFunction={menuCloseFunction}
                type={"block"}
                data={{
                  value: block.id,
                  label: block.id,
                }}
              />
            ),
            className: "py-2 px-4 text-left",
          },
        ],
      })
    }
  }
  if (searchType.type === "unknown") {
    const validators = await client.rpc("get.pos.validators", { search: value, limit: 5 });
    if (validators.status === "success") {
      for (const validator of validators.data) {
        results.push({
          id: results.length.toString(),
          cols: [
            {
              value: (
                <SearchResult
                  saveSearch={saveSearch}
                  menuCloseFunction={menuCloseFunction}
                  type={"account"}
                  data={{
                    value: validator.address,
                    label: validator.name,
                  }}
                />
              ),
              className: "py-2 px-4 text-left",
            },
          ],
        });
      }
    }
  }
    // await client.rpc("get.transactions", {search: value})
  return results;
};

export const inputRecognizer = (value: string) => {
  if (value.length === 41 && value.substring(0, 3).toLowerCase() === "lsk") {
    return {
      type: "lisk32",
      value,
    };
  }
  if (!isNaN(parseInt(value))) {
    return {
      type: "blockHeight",
      value: value
    }
  }
  return {
    type: "unknown",
    value,
  };
};

export const getBlockByHeight = async (client: LiskService, value: string) => {
  const block = await getData("lisk-service", "get.blocks", {height: value as NumberStringAndFromToNumber})
  if (block.status === "success") {
    return block.data[0]
  }
  return undefined
};
