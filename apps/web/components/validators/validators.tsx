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

const buttons = [
  {
    label: "All",
    state: "all"
  },
  {
    label: "Active",
    state: "active"
  },
  {
    label: "Standby",
    state: "standby"
  },
  {
    label: "Ineligible",
    state: "ineligible"
  },
  {
    label: "Banned",
    state: "banned"
  },
  {
    label: "Punished",
    state: "punished"
  },
]

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