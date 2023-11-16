"use client"
import { Grid, Typography } from "ui";
import { Input } from "ui/atoms/input/input";
import { Select } from "ui/atoms/select/select";
import useQueryParams from "../../hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const StakeCalculator = () => {
  const { setQueryParams } = useQueryParams<{
    stakingPeriod: string;
    stakingAmount: string;
  }>();
  const searchParams = useSearchParams();

  const [stakingRewardsAmount, setStakingRewardsAmount] = useState<string>(
    searchParams?.get("stakingAmount") || "1000"
  );
  const [stakingRewardsPeriod, setStakingRewardsPeriod] = useState<string>(
    searchParams?.get("stakingPeriod") || "month"
  );

  useEffect(() => {
    setQueryParams({
      stakingPeriod: stakingRewardsPeriod,
      stakingAmount: stakingRewardsAmount,
    });
  }, [stakingRewardsPeriod, stakingRewardsAmount]);

  return (
    <>
      <Typography className={"text-left"} tag={"span"} size={"label"}>
        Staking Calculator
      </Typography>
      <Grid flex columns={2} className={"rounded bg-surface-1 items-center"}>
        <Typography className={"ml-2"} tag={"span"} size={"subBody"}>
          {"LSK"}
        </Typography>
        <Input
          className={"bg-transparent"}
          numbersOnly
          placeholder={"Staking amount"}
          value={stakingRewardsAmount}
          setValue={setStakingRewardsAmount}
        />
        <Select
          className={
            "relative before:absolute before:content-[''] before:-left-[1px] before:w-[1px] before:h-3/4  before:bg-surface-3 before:top-0 before:bottom-0 before:my-auto w-28"
          }
          defaultValue={stakingRewardsPeriod}
          innerClassName={"bg-surface-1"}
          id={"staking-rewards"}
          placeholder={"month"}
          optionsList={[
            {
              value: "block",
              label: "Block",
            },
            {
              value: "day",
              label: "Day",
            },
            {
              value: "month",
              label: "Month",
            },
            {
              value: "year",
              label: "Year",
            },
          ]}
          onChange={setStakingRewardsPeriod}
        />
      </Grid>
    </>
  );
};
