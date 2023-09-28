"use client";
import { ValidatorsHeader } from "./validatorsHeader";
import { ValidatorsTable } from "./validatorsTable";
import { Container } from "ui";
import { useEffect, useState } from "react";
import useQueryParams, { QueryParams } from "../../hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { useService } from "../../providers/service";

export const Validators = ({
  fetchedValidators,
  stats,
  fetchedGeneratorKPI,
}: {
  fetchedValidators: any[];
  stats: {
    standby: number;
    active: number;
    punished: number;
    banned: number;
    ineligible: number;
    eligible: number;
  };
  fetchedGeneratorKPI: any[];
}) => {
  const [validators, setValidators] = useState<any[]>(fetchedValidators);

  const { cache, queries, setQueries } = useService();

  if (setQueries && (!queries || queries.length === 0)) {
    setQueries && setQueries([
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
  const [activeTab, setActiveTab] = useState<string>(searchParams?.get("status") || "eligible");
  const handleChange = (value: string) => {
    // @ts-ignore
    setQueryParams({ ["status"]: value });
  };


  useEffect(() => {
    setActiveTab(searchParams?.get("status") || "eligible");
  }, [searchParams]);

  useEffect(() => {
    const getValidators = async () => {
      const validators = await fetch(
        `https://cached-testnet-service.liskscan.com/validators${activeTab === "all" ? "" : `/${activeTab}`}`,
        {
          next: { revalidate: 0 },
        }
      );
      const validatorsJSON = await validators.json();
      setValidators(validatorsJSON);
    };
      getValidators();
  }, [cache, activeTab]);


  const buttons = [
    // {
    //   label: `All (${
    //     stats?.active +
    //     stats?.standby +
    //     stats?.ineligible +
    //     stats?.banned +
    //     stats?.punished
    //   })`,
    //   state: "all",
    // },
    {
      label: `Eligible (${stats?.eligible})`,
      state: "eligible",
    },
    {
      label: `Active (${stats?.active})`,
      state: "active",
    },
    {
      label: `Standby (${stats?.standby})`,
      state: "standby",
    },
    {
      label: `Punished (${stats?.punished})`,
      state: "punished",
    },
    {
      label: `Ineligible (${stats?.ineligible})`,
      state: "ineligible",
    },
    {
      label: `Banned (${stats?.banned})`,
      state: "banned",
    },
  ];
  return (
    <Container section gap={8}>
      {fetchedGeneratorKPI && stats && validators && (
        <>
          <ValidatorsHeader
            kpis={{
              validators: [
                {
                  total:
                    stats?.active +
                    stats?.standby +
                    stats?.ineligible +
                    stats?.banned +
                    stats?.punished,
                  label: "Total validators",
                },
                {
                  total: stats?.active,
                  label: "Active validators",
                },
                {
                  total: stats?.standby,
                  label: "Standby validators",
                },
                {
                  total: stats?.ineligible,
                  label: "Ineligible validators",
                },
                {
                  total: stats?.banned,
                  label: "Banned validators",
                },
                {
                  total: stats?.punished,
                  label: "Punished validators",
                },
              ],
              generators: cache?.generators?.data ?? fetchedGeneratorKPI,
            }}
          />

          <ValidatorsTable
            validators={validators}
            buttons={buttons}
            setActiveTab={handleChange}
            activeTab={activeTab}
          />
        </>
      )}
    </Container>
  );
};
