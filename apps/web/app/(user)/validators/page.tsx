"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Validators } from "../../../components/validators/validators";
import {useService} from "../../../providers/service";
import {getAllData} from "../../../lib/sanity.service";
import {BlockchainAppsMetaResponse, NetworkStatusResponse} from "@liskscan/lisk-service-client/lib/types";

const Page = () => {
  const searchParams = useSearchParams();
  const [validators, setValidators] = useState<any[]>([]);
  const [generators, setGenerators] = useState<{ data: any[] }>({ data: [] });
  const [stats, setStats] = useState<{
    standby: number;
    active: number;
    punished: number;
    banned: number;
    ineligible: number;
    eligible: number;
  }>({
    standby: 0,
    active: 0,
    punished: 0,
    banned: 0,
    ineligible: 0,
    eligible: 0,
  });
  useEffect(() => {
    const updateValidators = async () => {
      const result = (await getAllData([
        {
          key: "status",
          call: "get.network.status",
          serviceType: "lisk-service",
        },
        {
          key: "meta",
          call: "get.blockchain.apps.meta",
          serviceType: "lisk-service",
        }
        ])) as {status: NetworkStatusResponse, meta:BlockchainAppsMetaResponse};
      const status = searchParams?.get("status") ?? "eligible";
      const network = result.meta.data.find((app) => app.chainID === result.status.data.chainID);
      const validatorsResponse = await fetch(
        `https://cached-${network}-service.liskscan.com/validators${
          status === "all" ? "" : `/${status}`
        }`
      );
      const generatorsResponse = await fetch(
        `https://cached-testnet-service.liskscan.com/generators`
      );
      const statsResponse = await fetch(
        `https://cached-testnet-service.liskscan.com/validators/stats`
      );
      setValidators(await validatorsResponse.json());
      setGenerators(await generatorsResponse.json());
      setStats(await statsResponse.json());
    };
    updateValidators();
  }, []);
  return (
    <>
      {validators && generators && (
        <Validators
          fetchedValidators={validators}
          fetchedGeneratorKPI={generators?.data?.slice(0, 6)}
          stats={stats}
        />
      )}
    </>
  );
};

export default Page;
