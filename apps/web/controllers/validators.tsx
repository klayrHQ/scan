import {getData, getNextData} from "../lib/sanity.service";

export const getValidatorsFromAPI = async (params?: any) => {
  try {
    const result = await getData("lisk-service", "get.pos.validators", params);
    return result;
  } catch (error) {
    console.error("Error fetching validators:", error);
    return []
  }
}

export const getGeneratorsFromAPI = async  (params?: any) => {
  try {
    const result = await getData("lisk-service", "get.generators", params);
    return result;
  } catch (error) {
    console.error("Error fetching validators:", error);
    return []
  }
}