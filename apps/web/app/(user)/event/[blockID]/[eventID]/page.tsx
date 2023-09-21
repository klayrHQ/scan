import { getData } from "../../../../../lib/sanity.service";
import {Event, EventType} from "../../../../../components/event/event";
import {ConsoleLogTester} from "../../../../../components/consoleLogTester";

const Page = async (props: any) => {

  const queryData = await getData( "lisk-service","get.events", {blockID: props.params.blockID} )

  const eventData: EventType[] = queryData?.data?.filter((event: { id: string; }) => event.id === props.params.eventID)

  let event: EventType = eventData[0]

  if (event?.data.address) {
    const account = await getData("lisk-service","get.validator", {address: event.data.address})
    event.data.userName = account?.meta?.name || undefined
  }

  if (event?.data.senderAddress) {
    const account = await getData("lisk-service","get.validator", {address: event.data.senderAddress})
    event.data.senderUserName = account?.meta?.name || undefined
  }

  if (event?.data.recipientAddress) {
    const account = await getData("lisk-service","get.validator", {address: event.data.recipientAddress})
    event.data.recipientUserName = account?.meta?.name || undefined
  }

  if (event?.data.validatorAddress) {
    const account = await getData("lisk-service","get.validator", {address: event.data.validatorAddress})
    event.data.validatorUserName = account?.meta?.name || undefined
  }

  if (event?.data.generatorAddress) {
    const account = await getData("lisk-service","get.validator", {address: event.data.generatorAddress})
    event.data.generatorUserName = account?.meta?.name || undefined
  }

  if (event?.data.tokenID) {
    const token = await getData("lisk-service", "get.blockchain.apps.meta.tokens", {tokenID: event.data.tokenID})
    event.data.tokenName = token?.data ? token?.data[0]?.tokenName : undefined
  }

  if (event?.data.chainID) {
    const chain = await getData("lisk-service", "get.blockchain.apps.meta", {chainID: event.data.chainID})
    event.data.chainName = chain?.data ? chain?.data[0]?.displayName : undefined
  }

  if (event?.data.ccm?.receivingChainID) {
    let chain = await getData("lisk-service", "get.blockchain.apps.meta", {chainID: event.data.ccm?.receivingChainID})
    if (chain?.data?.length <= 0) {
      chain = await getData("lisk-service", "get.blockchain.apps", {chainID: event.data.ccm?.receivingChainID})
    }
    event.data.ccm.receivingChainName = chain?.data ? chain?.data[0]?.displayName || chain?.data[0]?.chainName : undefined
  }

  if (event?.data.ccm?.sendingChainID) {
    let chain = await getData("lisk-service", "get.blockchain.apps.meta", {chainID: event.data.ccm?.sendingChainID})
    if (chain?.data?.length <= 0) {
      chain = await getData("lisk-service", "get.blockchain.apps", {chainID: event.data.ccm?.sendingChainID})
    }
    event.data.ccm.sendingChainName = chain?.data ? chain?.data[0]?.displayName || chain?.data[0]?.chainName : undefined
  }

  //const test = await getData("lisk-service", "get.index.status", {chainID: "02222222"})

  return (
    <>
      {/*<ConsoleLogTester data={test} />*/}
      <Event event={event} />
    </>
  )
}

export default Page