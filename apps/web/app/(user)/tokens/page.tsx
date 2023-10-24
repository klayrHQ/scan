import {Tokens} from "../../../components/tokens/tokens";
import {getAllData} from "../../../lib/sanity.service";
import {
  BlockchainAppsMetaResponse,
  NetworkStatusResponse
} from "@liskscan/lisk-service-client/lib/types";

const Page = async () => {
  const result = await getAllData([
    {
      key: "status",
      call: "get.network.status",
      serviceType: "lisk-service",
    },
    {
      key: "apps",
      call: "get.blockchain.apps.meta",
      serviceType: "lisk-service",
    },
  ]);

  const { status, apps } = result as {
    status: NetworkStatusResponse;
    apps: BlockchainAppsMetaResponse;
  };

  return (
    <Tokens apps={apps} status={status} />
  )
}

export default Page