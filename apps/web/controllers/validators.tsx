import {getNextData} from "../lib/sanity.service";

export const getValidatorsFromAPI = async (params?: any) => {
  try {
    // Call the getNextData function with the service type and the "get.pos.validators" call.
    const result = await getNextData("lisk-service", "get.pos.validators", params);
    console.log("Validators", result);
    return result;
  } catch (error) {
    console.error("Error fetching validators:", error);
    return []
  }
}
