import {Account} from "../../../../components/account/account";
import {ConsoleLogTester} from "../../../../components/consoleLogTester";
import {getAccountFromAPI} from "../../../../controllers/account";
import {getAllData} from "../../../../lib/sanity.service";
import {getAccountQueries} from "../../../../components/account/queries";

const Page = async (props: any) => {

  const queryData = await getAllData(getAccountQueries(props.params.id))
  
  return (
    <>
      <Account id={props.params.id} initialData={queryData}/>
    </>
  )
}

export default Page