import { ValidatorsTable } from "../../../../components/validators/validatorsTable";

const Page = async ({params}: any) => {
  const validators = await fetch(
    `https://cached-testnet-service.liskscan.com/validators/${params.status}`,
    {
      next: { revalidate: 0 },
    }
  );
  const validatorsJSON = await validators.json();

  return <ValidatorsTable page={params.status} validators={validatorsJSON} />;
};

export default Page;
