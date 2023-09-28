"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Validators } from "../../../components/validators/validators";

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
      const status = searchParams?.get("status") ?? "eligible";
      const validatorsResponse = await fetch(
        `https://cached-testnet-service.liskscan.com/validators${
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
