"use client"
import {ValidatorsHeader} from "./validatorsHeader";
import {ValidatorsTable} from "./validatorsTable";
import {Container} from "ui";
import {useEffect, useState} from "react";
import {ConsoleLogTester} from "../consoleLogTester";
import useQueryParams, {QueryParams} from "../../hooks/useQueryParams";
import {useSearchParams} from "next/navigation";
import {useService} from "../../providers/service";
import {validatorQueries} from "./queries";

export const Validators = ({
  fetchedValidators,
  fetchedGenerators,
}: {
  fetchedValidators: any,
  fetchedGenerators: any,
}) => {
  const [validators, setValidators] = useState<{all: [], active: [], standby: [], ineligible: [], banned: [], punished: []}>(fetchedValidators)
  const [generators, setGenerators] = useState(fetchedGenerators)

  const {cache, setQueries} = useService()

  useEffect(() => {
    setQueries(validatorQueries)
  }, [validatorQueries])

  const { setQueryParams } = useQueryParams<QueryParams>();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    // @ts-ignore
    setQueryParams({ ["status"]: value });
  };

  const activeTab = searchParams?.get("status") || "all";

  useEffect(() => {
    if (cache) {
      setValidators({
        all: cache["validators"],
        active: cache["validators-active"],
        standby: cache["validators-standby"],
        ineligible: cache["validators-ineligible"],
        banned: cache["validators-banned"],
        punished: cache["validators-punished"],
      })
    }
    console.log(cache)
  }, [cache])

  useEffect(() => {
    if (cache) {
      setGenerators(cache["generators"])
    }
  }, [cache])

  const buttons = [
    {
      // @ts-ignore
      label: `All (${validators?.all?.meta?.total})`,
      state: "all"
    },
    {
      // @ts-ignore
      label: `Active (${validators?.active?.meta?.total})`,
      state: "active"
    },
    {
      // @ts-ignore
      label: `Standby (${validators?.standby?.meta?.total})`,
      state: "standby"
    },
    {
      // @ts-ignore
      label: `Ineligible (${validators?.ineligible?.meta?.total})`,
      state: "ineligible"
    },
    {
      // @ts-ignore
      label: `Banned (${validators?.banned?.meta?.total})`,
      state: "banned"
    },
    {
      // @ts-ignore
      label: `Punished (${validators?.punished?.meta?.total})`,
      state: "punished"
    },
  ]

  return (
    <Container section gap={8}>
      {
        generators && validators &&
        <>
          <ValidatorsHeader
            kpis={{
              validators: [
                {
                  // @ts-ignore
                  total: validators?.all?.meta?.total,
                  label: "Total validators",
                },
                {
                  // @ts-ignore
                  total: validators?.active?.meta?.total,
                  label: "Active validators",
                },
                {
                  // @ts-ignore
                  total: validators?.standby?.meta?.total,
                  label: "Standby validators",
                },
                {
                  // @ts-ignore
                  total: validators?.ineligible?.meta?.total,
                  label: "Ineligible validators",
                },
                {
                  // @ts-ignore
                  total: validators?.banned?.meta?.total,
                  label: "Banned validators",
                },
                {
                  // @ts-ignore
                  total: validators?.punished?.meta?.total,
                  label: "Punished validators",
                },
              ],
              // @ts-ignore
              generators: generators.data,
            }}
          />
          <ValidatorsTable
            // @ts-ignore
            validators={validators ? validators[activeTab] : validators?.all}
            buttons={buttons}
            setActiveTab={handleChange}
            activeTab={activeTab}
          />
        </>
      }
    </Container>
  )
}