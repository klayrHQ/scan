"use client";
import { ValidatorsHeader } from "./validatorsHeader";
import { Container } from "ui";
import { useEffect, useState } from "react";
import useQueryParams, { QueryParams } from "../../hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { useService } from "../../providers/service";

export const Validators = ({
  stats,
  generators,
}: {
  stats: any;
  generators: any[];
}) => {
  const [validators, setValidators] = useState<any[]>();

  const { queries, setQueries } = useService();

  if (setQueries && (!queries || queries.length === 0)) {
    setQueries &&
      setQueries([
        {
          serviceType: "lisk-service",
          params: [
            {
              key: "limit",
              value: "6",
            },
          ],
          updateOn: "lastGenerators",
          key: "generators",
          call: "get.generators",
        },
      ]);
  }

  const { setQueryParams } = useQueryParams<QueryParams>();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(
    searchParams?.get("status") || "eligible"
  );
  const handleChange = (value: string) => {
    // @ts-ignore
    setQueryParams({ ["status"]: value });
  };

  useEffect(() => {
    if (searchParams?.get("status") !== activeTab) {
      setActiveTab(searchParams?.get("status") || "eligible");
    }
  }, [searchParams]);

  useEffect(() => {
    const getValidators = async () => {
      const validators = await fetch(
        `https://cached-testnet-service.liskscan.com/validators${
          activeTab === "all" ? "" : `/${activeTab}`
        }`,
        {
          next: { revalidate: 0 },
        }
      );
      const validatorsJSON = await validators.json();
      setValidators(validatorsJSON);
    };
    getValidators();
  }, [activeTab]);

  return (
    <Container section gap={8}>
      <ValidatorsHeader generators={generators} stats={stats} />
    </Container>
  );
};
