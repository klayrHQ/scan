import { NextRequest, NextResponse } from "next/server";
// import { getAllData } from "../../../../lib/sanity.service";
// import { validatorQueries } from "../../../../components/validators/queries";
// import { CronJob } from "cron";
//
// let cache: any = undefined;
// let interval: any = undefined;
// let lastCacheUpdate = 0;
// const cacheData = async () => {
//   if (lastCacheUpdate > Date.now() - 1000 * 60 * 5 || !cache || Object.keys(cache).length === 0) {
//     console.log("Updating validator cache!!!");
//     const validators = await getAllData(validatorQueries);
//     cache = validators["validators-active"];
//     lastCacheUpdate = Date.now();
//   }
//   return true;
// };
//
// new CronJob(
//   "0 */1 * * * *",
//   async () => {
//     console.log("Updating validator cache");
//     await cacheData();
//   },
//   null,
//   true,
//   undefined,
//   undefined,
//   true
// );

export async function GET(request: NextRequest) {
  // if (!cache) {
  //   await cacheData();
  // }
  // if (Date.now() - lastCacheUpdate > 1000 * 60 * 5) {
  //   cacheData()
  // }
  // const queryData = await getAllData(validatorQueries)
  return NextResponse.json(  {});
}
