import {Suspense} from "react";
import { ValidatorsTable } from "../../../../components/validators/validatorsTable";
import {TableSkeleton} from "../../../../components/skeletons/tableSkeleton";

const Page = async ({params}: any) => {
  const validators = await fetch(
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    `https://cached-${process.env.NEXT_PUBLIC_NETWORK}-service.klayr.xyz/validators/${params.status}`,
    {
      // next: { revalidate: -1 },
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
