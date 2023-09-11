import {getGeneratorsFromAPI, getValidatorsFromAPI} from "../../../controllers/validators";
import {Validators} from "../../../components/validators/validators";
import {getAllData} from "../../../lib/sanity.service";
import {validatorQueries} from "../../../components/validators/queries";
// export const dynamic = "force-dynamic";
export const revalidate = 0;
/*const statuses = [
  "all",
  "active",
  "standby",
  "ineligible",
  "banned",
  "punished",
]*/

const Page = async () => {
  const queryData = await getAllData(validatorQueries)

  const validators = {
    all: queryData["validators"],
    active: queryData["validators-active"],
    standby: queryData["validators-standby"],
    ineligible: queryData["validators-ineligible"],
    banned: queryData["validators-banned"],
    punished: queryData["validators-punished"],
  }

  const generators = queryData["generators"]

  /*const validators = {
    all: await getValidatorsFromAPI({limit: 100, offset: 0, sort: "rank:asc"}),
    active: await getValidatorsFromAPI({limit: 100, offset: 0, status: "active", sort: "rank:asc"}),
    standby: await getValidatorsFromAPI({limit: 100, offset: 0, status: "standby", sort: "rank:asc"}),
    ineligible: await getValidatorsFromAPI({limit: 100, offset: 0, status: "ineligible", sort: "rank:asc"}),
    banned: await getValidatorsFromAPI({limit: 100, offset: 0, status: "banned", sort: "rank:asc"}),
    punished: await getValidatorsFromAPI({limit: 100, offset: 0, status: "punished", sort: "rank:asc"}),
  }*/

  //const generators = await getGeneratorsFromAPI({limit: 6})

  return <Validators fetchedValidators={validators} fetchedGenerators={generators} />
}

export default Page
