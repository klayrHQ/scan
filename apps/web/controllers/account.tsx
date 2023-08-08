import {getData} from "../lib/sanity.service";

export const getAccountFromAPI = async (id: string) => {
  const result = await getData("lisk-service", "get.validator", {address: id});
  return result;
}