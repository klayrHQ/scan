import {Account} from "../../../../components/account/account";
import {ConsoleLogTester} from "../../../../components/consoleLogTester";
import {getAccountFromAPI} from "../../../../controllers/account";

const Page = async (props: any) => {

  return (
    <>
      <Account id={props.params.id}/>
    </>
  )
}

export default Page