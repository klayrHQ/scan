import { getData } from "../../../../../lib/sanity.service";
import {Event} from "../../../../../components/event/event";
import {ConsoleLogTester} from "../../../../../components/consoleLogTester";

const Page = async (props: any) => {

  const queryData = await getData( "lisk-service","get.events", {blockID: props.params.blockID} )

  const eventData = queryData?.data?.filter((event: { id: string; }) => event.id === props.params.eventID)

  return (
    <>
      <Event event={eventData[0]} />
    </>
  )
}

export default Page