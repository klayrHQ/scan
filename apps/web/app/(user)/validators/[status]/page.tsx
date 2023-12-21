import {Suspense} from "react";
import { ValidatorsTable } from "../../../../components/validators/validatorsTable";
import {TableSkeleton} from "../../../../components/skeletons/tableSkeleton";

const Page = async ({params}: any) => {
  const validators = await fetch(
    `https://cached-mainnet-service.liskscan.com/validators/${params.status}`,
    {
      next: { revalidate: 0 },
    }
  );
  const validatorsJSON = await validators.json();

  return (
    <Suspense
      fallback={
        <TableSkeleton
          columns={[
            "#",
            "Validator",
            "Status",
            "Total Blocks",
            "Validator Weight",
            "Total Stake",
            "Commission",
            "Dynamic Reward",
            "Staking Rewards",
          ]}
          rows={20}
        />
      }
    >
      <ValidatorsTable page={params.status} validators={validatorsJSON}/>
    </Suspense>
  );
};

export default Page;
