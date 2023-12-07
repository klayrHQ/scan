import {Account} from "../../../../components/account/account";
import {ConsoleLogTester} from "../../../../components/consoleLogTester";
import {getAccountFromAPI} from "../../../../controllers/account";
import {getAllData} from "../../../../lib/sanity.service";
import {getAccountQueries} from "../../../../components/account/queries";

const Page = async (props: any) => {

  const queryData = await getAllData(getAccountQueries(props.params.id))

    let validatorData = {}
    // @ts-ignore
    if (queryData["account-validator-id"]?.data?.length > 0) {
// @ts-ignore
        const validatorResponse = await fetch(`https://cached-mainnet-service.liskscan.com/validator/${queryData["account-validator-id"]?.data[0]?.address}`)
         validatorData = await validatorResponse.json()

    }
  return (
    <>
      <Account validatorData={validatorData} id={props.params.id} initialData={queryData}/>
    </>
  )
}

export default Page