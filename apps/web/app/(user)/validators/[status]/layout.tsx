import { ValidatorsHeader } from "../../../../components/validators/validatorsHeader";
import { Container, Grid } from "ui";
import { getAllData } from "../../../../lib/sanity.service";
import {
  BlockchainAppsMetaResponse,
  NetworkStatusResponse,
} from "@liskscan/lisk-service-client/lib/types";
import { FilterButtons } from "ui/atoms/filterButtons/filterButtons";
import { StakeCalculator } from "../../../../components/validators/stakeCalculator";

const layout = async ({ children, params }: any) => {
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
    },
  ])) as { status: NetworkStatusResponse; meta: BlockchainAppsMetaResponse };
  // const status = searchParams?.get("status") ?? "eligible";
  const network = result.meta.data.find(
    (app) => app?.chainID === result?.status?.data?.chainID
  );
  const generatorsResponse = await fetch(
    `https://cached-${
      network?.networkType || "testnet"
    }-service.liskscan.com/generators`
  );
  const generators = await generatorsResponse.json();
  const statsResponse = await fetch(
    `https://cached-${
      network?.networkType || "testnet"
    }-service.liskscan.com/validators/stats`
  );
  const stats = (await statsResponse.json()) as {
    standby: number;
    active: number;
    punished: number;
    banned: number;
    ineligible: number;
    eligible: number;
  };
  return (
    <Container section gap={8}>
      <ValidatorsHeader generators={generators} stats={stats} />
      <Grid
        className={"max-w-app lg:w-full mx-auto min-h-50 mb-4 gap-4"}
        gap={4}
      >
        <Grid flex columns={2} className={"justify-between items-end"}>
          <FilterButtons
            buttons={[
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
                label: `Banned (${stats?.banned})`,
                state: "banned",
              },
              {
                label: `Ineligible (${stats?.ineligible})`,
                state: "ineligible",
              },
            ]}
            selection={params.status || "eligible"}
            useLink
          />
          <Grid className={"hidden md:grid"} columns={1} gap={1}>
            <StakeCalculator />
          </Grid>
        </Grid>

        {children}
      </Grid>
    </Container>
  );
};

export default layout;
