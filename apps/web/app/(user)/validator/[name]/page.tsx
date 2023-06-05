import { redirect } from "next/navigation";
import { client } from "../../../../lib/sanity.service";

const findValidatorByName = async (name: string) => {
  const res = await client.rpc("get.pos.validators", { name });
  if (res.status === "error") {
    return undefined;
  }
  return res.data[0].address;
};

export default async function Profile({
  params: { name },
}: {
  params: { name: string };
}) {
  const address = await findValidatorByName(name);
  if (address) {
    redirect(`/account/${address}`);
    return;
  }
  redirect(`/`);
}
