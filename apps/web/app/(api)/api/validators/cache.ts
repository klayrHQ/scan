import {getAllData} from "../../../../lib/sanity.service";
import {validatorQueries} from "../../../../components/validators/queries";

export let cache: any = undefined;
let interval: any = undefined;
let lastCacheUpdate = 0;
const cacheData = async () => {
  if (lastCacheUpdate > Date.now() - 1000 * 60 * 5) {
    console.log("Updating validator cache")
    const validators = await getAllData(validatorQueries);
    cache = validators["validators-active"];
    lastCacheUpdate = Date.now();
    if (!interval) {
      interval = setInterval(() => {
        cacheData();
      }, 1000 * 60 * 5);
    }
  }
  return true;
};
cacheData();
